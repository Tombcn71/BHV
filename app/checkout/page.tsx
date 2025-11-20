"use client"

import { Suspense } from "react"
import { useSearchParams } from "next/navigation"
import { CheckoutForm } from "@/components/checkout-form"
import { Card } from "@/components/ui/card"
import { Shield, ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

function CheckoutContent() {
  const searchParams = useSearchParams()
  const packageName = searchParams.get("package") || "Premium Pakket"
  const price = searchParams.get("price") || "395"

  return (
    <div className="container mx-auto max-w-4xl px-4 py-12">
      <div className="mb-8">
        <Button asChild variant="ghost" size="sm">
          <Link href="/#packages">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Terug naar pakketten
          </Link>
        </Button>
      </div>

      <div className="mb-8 text-center">
        <div className="mb-4 inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/10 text-primary">
          <Shield className="h-8 w-8" />
        </div>
        <h1 className="mb-2 text-4xl font-bold">Boek uw BHV-training</h1>
        <p className="text-muted-foreground">Vul uw gegevens in om de boeking te voltooien</p>
      </div>

      <div className="grid gap-8 lg:grid-cols-3">
        <div className="lg:col-span-2">
          <CheckoutForm packageName={packageName} price={price} />
        </div>

        <div className="lg:col-span-1">
          <Card className="sticky top-4 p-6">
            <h2 className="mb-4 text-lg font-semibold">Bestelling Overzicht</h2>
            <div className="space-y-4">
              <div>
                <p className="text-sm text-muted-foreground">Pakket</p>
                <p className="font-medium">{packageName}</p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Prijs per persoon</p>
                <p className="text-2xl font-bold">€{price}</p>
              </div>
              <div className="border-t pt-4">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-muted-foreground">Subtotaal</span>
                  <span className="font-medium">€{price}</span>
                </div>
                <div className="mt-2 flex items-center justify-between">
                  <span className="text-sm text-muted-foreground">BTW (21%)</span>
                  <span className="font-medium">€{(Number.parseFloat(price) * 0.21).toFixed(2)}</span>
                </div>
                <div className="mt-4 flex items-center justify-between border-t pt-4">
                  <span className="font-semibold">Totaal</span>
                  <span className="text-2xl font-bold">€{(Number.parseFloat(price) * 1.21).toFixed(2)}</span>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  )
}

export default function CheckoutPage() {
  return (
    <Suspense fallback={<div className="container mx-auto py-12 text-center">Laden...</div>}>
      <CheckoutContent />
    </Suspense>
  )
}
