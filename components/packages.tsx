import { Button } from "@/components/ui/button"
import { Check, Sparkles } from "lucide-react"
import Link from "next/link"

const packages = [
  {
    name: "Premium Pakket",
    price: "395",
    description: "Ideaal voor organisaties die waarde hechten aan kwaliteit",
    features: [
      "Erkend BHV-certificaat (1 jaar geldig)",
      "Professionele trainers",
      "Koffie, thee en frisdranken",
      "Premium lunch",
      "Alle trainingsmaterialen",
      "Praktijkgerichte oefeningen",
      "Incompany training mogelijk",
      "Kleine groepen (max. 12 personen)",
    ],
    highlighted: false,
  },
  {
    name: "High-End Pakket",
    price: "519",
    description: "Voor organisaties die het allerbeste willen",
    features: [
      "Alles uit Premium Pakket",
      "High-end culinaire lunch",
      "Uitgebreide hospitality service",
      "Premium snacks en gezonde tussendoortjes",
      "Luxe trainingslocatie",
      "Persoonlijke coaching",
      "Extra oefentijd",
      "Follow-up sessie (optioneel)",
    ],
    highlighted: true,
  },
]

export function Packages() {
  return (
    <section id="packages" className="scroll-mt-20 bg-muted py-20 md:py-28">
      <div className="container mx-auto px-4">
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-balance text-4xl font-bold tracking-tight md:text-5xl">Onze Trainingspakketten</h2>
          <p className="mx-auto max-w-2xl text-balance text-lg leading-relaxed text-muted-foreground">
            Kies het pakket dat het beste bij uw organisatie past. Beide pakketten bieden erkende certificering en
            uitzonderlijke service.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-2 max-w-5xl mx-auto">
          {packages.map((pkg, index) => (
            <div
              key={index}
              className={`relative overflow-hidden rounded-3xl border-2 bg-card p-8 md:p-10 transition-all hover:shadow-2xl ${
                pkg.highlighted
                  ? "border-primary shadow-xl ring-2 ring-primary/20"
                  : "border-border hover:border-primary/30"
              }`}
            >
              {pkg.highlighted && (
                <div className="absolute right-6 top-6 flex items-center gap-2 rounded-full bg-primary px-4 py-1.5 text-sm font-bold text-white shadow-lg">
                  <Sparkles className="h-4 w-4" />
                  Meest Gekozen
                </div>
              )}

              <div className="mb-6">
                <h3 className="mb-2 text-3xl font-bold">{pkg.name}</h3>
                <p className="text-muted-foreground leading-relaxed">{pkg.description}</p>
              </div>

              <div className="mb-8">
                <div className="flex items-baseline gap-2">
                  <span className="text-primary text-6xl font-bold">€{pkg.price}</span>
                  <span className="text-muted-foreground font-medium">per persoon</span>
                </div>
              </div>

              <ul className="mb-8 space-y-4">
                {pkg.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start gap-3">
                    <div
                      className={`mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full ${
                        pkg.highlighted ? "bg-primary text-white" : "bg-primary/10 text-primary"
                      }`}
                    >
                      <Check className="h-4 w-4" strokeWidth={3} />
                    </div>
                    <span className="leading-relaxed">{feature}</span>
                  </li>
                ))}
              </ul>

              <Button
                asChild
                className={`w-full ${pkg.highlighted ? "shadow-lg shadow-primary/30" : ""}`}
                size="lg"
                variant={pkg.highlighted ? "default" : "outline"}
              >
                <Link href={`/checkout?package=${encodeURIComponent(pkg.name)}&price=${pkg.price}`}>
                  {pkg.highlighted ? "Kies High-End" : "Kies Premium"}
                </Link>
              </Button>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-sm text-muted-foreground">
            Alle prijzen zijn excl. BTW • Groepskorting beschikbaar vanaf 8 personen
          </p>
        </div>
      </div>
    </section>
  )
}
