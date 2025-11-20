import { Hero } from "@/components/hero"
import { Features } from "@/components/features"
import { Packages } from "@/components/packages"
import { About } from "@/components/about"
import { CTA } from "@/components/cta"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <Features />
      <Packages />
      <About />
      <CTA />
      <Footer />
    </main>
  )
}
