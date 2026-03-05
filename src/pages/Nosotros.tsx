import { Navigation } from "@/components/colibird/navigation"
import { Footer } from "@/components/colibird/footer"
import { AboutSection } from "@/components/colibird/about-section"

export default function Nosotros() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <div className="pt-24">
        <AboutSection />
      </div>
      <Footer />
    </div>
  )
}
