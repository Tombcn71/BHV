import Link from "next/link"
import { Shield } from "lucide-react"

export function Footer() {
  return (
    <footer className="border-t bg-muted/30 py-12">
      <div className="container mx-auto px-4">
        <div className="grid gap-8 md:grid-cols-4">
          <div className="md:col-span-2">
            <div className="mb-4 flex items-center gap-2">
              <Shield className="h-8 w-8 text-primary" />
              <span className="text-xl font-bold">BHV Training</span>
            </div>
            <p className="mb-4 max-w-md text-sm text-muted-foreground">
              Professionele BHV-trainingen met uitzonderlijke gastvrijheid en culinaire excellence voor MKB en MBI
              organisaties in heel Nederland.
            </p>
          </div>

          <div>
            <h3 className="mb-4 font-semibold">Navigatie</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="#packages" className="text-muted-foreground hover:text-foreground">
                  Pakketten
                </Link>
              </li>
              <li>
                <Link href="#about" className="text-muted-foreground hover:text-foreground">
                  Over Ons
                </Link>
              </li>
              <li>
                <Link href="#" className="text-muted-foreground hover:text-foreground">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 font-semibold">Contact</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>info@bhvtraining.nl</li>
              <li>+31 (0)20 123 4567</li>
              <li>Geheel Nederland</li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t pt-8 text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} BHV Training. Alle rechten voorbehouden.</p>
        </div>
      </div>
    </footer>
  )
}
