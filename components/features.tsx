import { Coffee, Utensils, GraduationCap, Heart, Clock, MapPin } from "lucide-react"
import Image from "next/image"

const features = [
  {
    icon: GraduationCap,
    title: "Erkende Certificering",
    description: "Officieel erkend BHV-certificaat dat 1 jaar geldig is",
    color: "primary",
  },
  {
    icon: Coffee,
    title: "Premium Ontvangst",
    description: "Koffie, thee en frisdranken onbeperkt beschikbaar",
    color: "accent",
  },
  {
    icon: Utensils,
    title: "Culinaire Lunch",
    description: "Hoogwaardige catering met verse en smakelijke gerechten",
    color: "accent",
  },
  {
    icon: Heart,
    title: "Persoonlijke Aandacht",
    description: "Kleine groepen voor optimale begeleiding en leerervaring",
    color: "primary",
  },
  {
    icon: Clock,
    title: "Flexibele Planning",
    description: "Incompany trainingen op een locatie en tijd naar keuze",
    color: "primary",
  },
  {
    icon: MapPin,
    title: "Geheel Nederland",
    description: "Wij komen naar u toe, waar u ook bent in Nederland",
    color: "accent",
  },
]

export function Features() {
  return (
    <section className="py-20 md:py-28">
      <div className="container mx-auto px-4">
        <div className="mb-20">
          <div className="grid gap-8 lg:grid-cols-2 lg:gap-12 items-center">
            <div className="relative aspect-[4/3] overflow-hidden rounded-3xl shadow-xl">
              <Image src="/professional-european-instructor-teaching-cpr-and-.jpg" alt="BHV Training in actie" fill className="object-cover" />
            </div>
            <div>
              <h2 className="mb-6 text-balance text-4xl font-bold tracking-tight md:text-5xl">
                Waarom kiezen voor onze BHV-training?
              </h2>
              <p className="text-lg leading-relaxed text-muted-foreground">
                Wij bieden meer dan alleen een training. Het is een complete ervaring waarbij veiligheid en gastvrijheid
                hand in hand gaan. Onze trainers zijn ervaren professionals die de perfecte balans vinden tussen theorie
                en praktijk.
              </p>
            </div>
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => {
            const Icon = feature.icon
            const colorClass = feature.color === "primary" ? "text-primary bg-primary/10" : "text-accent bg-accent/10"
            return (
              <div
                key={index}
                className="group relative overflow-hidden rounded-2xl border-2 bg-card p-8 transition-all hover:shadow-xl hover:border-primary/20 hover:-translate-y-1"
              >
                <div
                  className={`mb-5 inline-flex h-14 w-14 items-center justify-center rounded-xl ${colorClass} transition-transform group-hover:scale-110`}
                >
                  <Icon className="h-7 w-7" />
                </div>
                <h3 className="mb-3 text-xl font-bold">{feature.title}</h3>
                <p className="leading-relaxed text-muted-foreground">{feature.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
