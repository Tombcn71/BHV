import { Shield, Users, Award, Heart } from "lucide-react"
import Image from "next/image"

export function About() {
  return (
    <section id="about" className="scroll-mt-20 py-20 md:py-28">
      <div className="container mx-auto px-4">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center mb-20">
          <div className="relative aspect-square overflow-hidden rounded-3xl shadow-2xl lg:order-2">
            <Image
              src="/european-business-professionals-enjoying-premium-h.jpg"
              alt="Premium hospitality tijdens BHV training"
              fill
              className="object-cover"
            />
          </div>

          <div className="lg:order-1">
            {/* Replaced gradient icon background with solid primary color */}
            <div className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-primary text-white shadow-lg">
              <Shield className="h-8 w-8" />
            </div>
            <h2 className="mb-6 text-balance text-4xl font-bold tracking-tight md:text-5xl">
              Veiligheid met stijl en gastvrijheid
            </h2>
            <p className="mb-6 text-lg leading-relaxed text-muted-foreground">
              Wij geloven dat een BHV-training meer kan zijn dan alleen het leren van levensreddende technieken. Het is
              ook een moment om uw medewerkers te laten ervaren dat u om hen geeft.
            </p>
            <p className="mb-6 text-lg leading-relaxed text-muted-foreground">
              Onze unieke aanpak combineert professionele BHV-certificering met een onvergetelijke hospitality ervaring.
              Van het moment dat deelnemers binnenkomen tot het einde van de dag, zorgen wij voor een premium beleving.
            </p>
            <p className="text-lg leading-relaxed text-muted-foreground">
              Perfect voor MKB en MBI organisaties die kwaliteit en gastvrijheid belangrijk vinden. Wij komen naar u toe
              in heel Nederland.
            </p>
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          <div className="group rounded-2xl border-2 bg-card p-8 transition-all hover:border-primary/30 hover:shadow-lg">
            <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
              <Award className="h-6 w-6" />
            </div>
            <h3 className="mb-3 text-xl font-bold">Erkende Certificering</h3>
            <p className="leading-relaxed text-muted-foreground">
              Na succesvolle afronding ontvangt elke deelnemer een officieel erkend BHV-certificaat dat 1 jaar geldig
              is. Dit voldoet aan alle wettelijke eisen.
            </p>
          </div>

          <div className="group rounded-2xl border-2 bg-card p-8 transition-all hover:border-accent/30 hover:shadow-lg">
            <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-accent/10 text-accent">
              <Heart className="h-6 w-6" />
            </div>
            <h3 className="mb-3 text-xl font-bold">Culinaire Excellence</h3>
            <p className="leading-relaxed text-muted-foreground">
              Onze catering is meer dan standaard. Wij bieden verse, smakelijke gerechten die uw training tot een
              culinaire belevenis maken. High-end opties beschikbaar.
            </p>
          </div>

          <div className="group rounded-2xl border-2 bg-card p-8 transition-all hover:border-primary/30 hover:shadow-lg">
            <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
              <Users className="h-6 w-6" />
            </div>
            <h3 className="mb-3 text-xl font-bold">Incompany Mogelijk</h3>
            <p className="leading-relaxed text-muted-foreground">
              Wij komen naar uw locatie toe. Dit bespaart reistijd voor uw medewerkers en zorgt voor een vertrouwde
              omgeving tijdens de training.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
