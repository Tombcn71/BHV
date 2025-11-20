import { Button } from "@/components/ui/button"
import Link from "next/link"

export function CTA() {
  return (
    <section className="bg-primary py-24 text-primary-foreground md:py-32">
      <div className="container mx-auto px-4 text-center">
        <h2 className="mb-6 text-balance text-4xl font-bold tracking-tight md:text-5xl">
          Klaar om uw medewerkers te trainen?
        </h2>
        <p className="mx-auto mb-8 max-w-2xl text-balance text-lg opacity-90">
          Boek vandaag nog een training en ervaar het verschil van professionele BHV-certificering gecombineerd met
          uitzonderlijke gastvrijheid.
        </p>
        <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
          <Button asChild size="lg" variant="secondary" className="text-lg">
            <Link href="#packages">Bekijk Pakketten</Link>
          </Button>
          <Button
            asChild
            size="lg"
            variant="outline"
            className="border-primary-foreground text-lg text-primary-foreground hover:bg-primary-foreground hover:text-primary bg-transparent"
          >
            <Link href="mailto:info@bhvtraining.nl">Contact Opnemen</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
