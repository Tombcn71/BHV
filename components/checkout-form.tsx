"use client"

import type React from "react"

import { useState } from "react"
import { loadStripe } from "@stripe/stripe-js"
import { Elements, PaymentElement, useStripe, useElements } from "@stripe/react-stripe-js"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useToast } from "@/hooks/use-toast"
import { Loader2 } from "lucide-react"

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY || "")

interface CheckoutFormProps {
  packageName: string
  price: string
}

function PaymentForm({ packageName, price }: CheckoutFormProps) {
  const stripe = useStripe()
  const elements = useElements()
  const { toast } = useToast()
  const [isProcessing, setIsProcessing] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    participants: "1",
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!stripe || !elements) {
      return
    }

    setIsProcessing(true)

    try {
      const { error } = await stripe.confirmPayment({
        elements,
        confirmParams: {
          return_url: `${window.location.origin}/success`,
          receipt_email: formData.email,
        },
      })

      if (error) {
        toast({
          title: "Betaling mislukt",
          description: error.message,
          variant: "destructive",
        })
      }
    } catch (err) {
      toast({
        title: "Er is iets misgegaan",
        description: "Probeer het later opnieuw",
        variant: "destructive",
      })
    } finally {
      setIsProcessing(false)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <Card className="p-6">
        <h2 className="mb-4 text-lg font-semibold">Contactgegevens</h2>
        <div className="space-y-4">
          <div>
            <Label htmlFor="name">Naam</Label>
            <Input
              id="name"
              required
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              placeholder="Uw volledige naam"
            />
          </div>
          <div>
            <Label htmlFor="email">E-mailadres</Label>
            <Input
              id="email"
              type="email"
              required
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              placeholder="naam@bedrijf.nl"
            />
          </div>
          <div>
            <Label htmlFor="company">Bedrijfsnaam</Label>
            <Input
              id="company"
              required
              value={formData.company}
              onChange={(e) => setFormData({ ...formData, company: e.target.value })}
              placeholder="Uw bedrijfsnaam"
            />
          </div>
          <div>
            <Label htmlFor="participants">Aantal deelnemers</Label>
            <Input
              id="participants"
              type="number"
              min="1"
              required
              value={formData.participants}
              onChange={(e) => setFormData({ ...formData, participants: e.target.value })}
            />
          </div>
        </div>
      </Card>

      <Card className="p-6">
        <h2 className="mb-4 text-lg font-semibold">Betaalgegevens</h2>
        <PaymentElement
          options={{
            layout: "tabs",
            defaultValues: {
              billingDetails: {
                name: formData.name,
                email: formData.email,
              },
            },
          }}
        />
      </Card>

      <Button type="submit" disabled={!stripe || isProcessing} size="lg" className="w-full">
        {isProcessing ? (
          <>
            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            Verwerken...
          </>
        ) : (
          `Betaal €${(Number.parseFloat(price) * 1.21 * Number.parseInt(formData.participants)).toFixed(2)}`
        )}
      </Button>

      <p className="text-center text-xs text-muted-foreground">
        Door te betalen gaat u akkoord met onze algemene voorwaarden. Uw betaling wordt veilig verwerkt door Stripe.
        iDEAL beschikbaar.
      </p>
    </form>
  )
}

export function CheckoutForm({ packageName, price }: CheckoutFormProps) {
  const [clientSecret, setClientSecret] = useState<string>("")
  const [loading, setLoading] = useState(true)
  const { toast } = useToast()

  // Create payment intent on mount
  useState(() => {
    const createPaymentIntent = async () => {
      try {
        const response = await fetch("/api/create-payment-intent", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            amount: Math.round(Number.parseFloat(price) * 121), // Price with VAT in cents
            packageName,
          }),
        })

        const data = await response.json()

        if (data.clientSecret) {
          setClientSecret(data.clientSecret)
        } else {
          throw new Error("No client secret received")
        }
      } catch (error) {
        toast({
          title: "Fout bij laden",
          description: "Kon betaalformulier niet laden. Herlaad de pagina.",
          variant: "destructive",
        })
      } finally {
        setLoading(false)
      }
    }

    createPaymentIntent()
  })

  if (loading) {
    return (
      <Card className="p-12 text-center">
        <Loader2 className="mx-auto h-8 w-8 animate-spin text-primary" />
        <p className="mt-4 text-muted-foreground">Betaalformulier laden...</p>
      </Card>
    )
  }

  if (!clientSecret) {
    return (
      <Card className="p-12 text-center">
        <p className="text-muted-foreground">Kon betaalformulier niet laden.</p>
        <Button onClick={() => window.location.reload()} className="mt-4">
          Probeer opnieuw
        </Button>
      </Card>
    )
  }

  return (
    <Elements
      stripe={stripePromise}
      options={{
        clientSecret,
        appearance: {
          theme: "stripe",
        },
        locale: "nl",
      }}
    >
      <PaymentForm packageName={packageName} price={price} />
    </Elements>
  )
}
