import { Button } from "@/components/ui/button"
import { Shield, Award, Users } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-white">
      <div className="container relative mx-auto px-4 py-16 md:py-24">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
          <div className="flex flex-col">
            <div className="mb-6 flex flex-wrap gap-3">
              <div className="flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2 text-sm font-medium text-primary">
                <Shield className="h-4 w-4" />
                Erkend Instituut
              </div>
              <div className="flex items-center gap-2 rounded-full bg-accent/10 px-4 py-2 text-sm font-medium text-accent">
                <Award className="h-4 w-4" />
                Gecertificeerd
              </div>
            </div>

            <h1 className="mb-6 text-balance text-4xl font-bold leading-tight tracking-tight md:text-5xl lg:text-6xl">
              Professionele BHV-training met <span className="text-accent">uitzonderlijke service</span>
            </h1>

            <p className="mb-8 text-balance text-lg leading-relaxed text-muted-foreground md:text-xl">
              Wij combineren hoogwaardige BHV-certificering met gastvrijheid en culinaire excellence. Perfect voor MKB
              en MBI organisaties die kwaliteit waarderen.
            </p>

            <div className="flex flex-col gap-4 sm:flex-row">
              <Button asChild size="lg" className="text-lg shadow-lg shadow-primary/20">
                <Link href="#packages">Bekijk Pakketten</Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="text-lg border-2 bg-transparent">
                <Link href="#about">Meer Info</Link>
              </Button>
            </div>

            <div className="mt-12 flex flex-wrap items-center gap-6 text-sm">
              <div className="flex items-center gap-2">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                  <Users className="h-5 w-5 text-primary" />
                </div>
                <span className="font-medium">500+ Bedrijven</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-accent/10">
                  <Award className="h-5 w-5 text-accent" />
                </div>
                <span className="font-medium">Erkend Certificaat</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                  <Shield className="h-5 w-5 text-primary" />
                </div>
                <span className="font-medium">100% Slagingspercentage</span>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="relative aspect-[4/3] overflow-hidden rounded-3xl shadow-2xl">
              <Image
                src="/diverse-group-of-european-professionals-in-busines.jpg"
                alt="BHV Training Groep"
                fill
                className="object-cover"
                priority
              />
            </div>
            {/* Floating badge */}
            <div className="absolute -bottom-6 -right-6 rounded-2xl bg-card p-6 shadow-xl border-2 border-primary/20">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">100%</div>
                <div className="text-sm font-medium text-muted-foreground">Tevreden</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
