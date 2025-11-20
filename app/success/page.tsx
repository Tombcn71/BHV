import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { CheckCircle } from "lucide-react"
import Link from "next/link"

export default function SuccessPage() {
  return (
    <div className="container mx-auto max-w-2xl px-4 py-24">
      <Card className="p-12 text-center">
        <div className="mb-6 inline-flex h-20 w-20 items-center justify-center rounded-full bg-green-100 text-green-600 dark:bg-green-900/20">
          <CheckCircle className="h-10 w-10" />
        </div>

        <h1 className="mb-4 text-3xl font-bold">Betaling Geslaagd!</h1>

        <p className="mb-8 text-lg text-muted-foreground">
          Bedankt voor uw boeking. U ontvangt binnen enkele minuten een bevestigingsmail met alle details van uw
          BHV-training.
        </p>

        <div className="mb-8 rounded-lg bg-muted p-6 text-left">
          <h2 className="mb-4 font-semibold">Wat gebeurt er nu?</h2>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li>✓ U ontvangt een bevestigingsmail</li>
            <li>✓ Wij nemen binnen 24 uur contact met u op voor planning</li>
            <li>✓ U ontvangt voorbereidingsmateriaal per e-mail</li>
            <li>✓ De training wordt ingepland op een datum naar keuze</li>
          </ul>
        </div>

        <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
          <Button asChild size="lg">
            <Link href="/">Terug naar Homepage</Link>
          </Button>
          <Button asChild variant="outline" size="lg">
            <Link href="mailto:info@bhvtraining.nl">Contact Opnemen</Link>
          </Button>
        </div>
      </Card>
    </div>
  )
}
