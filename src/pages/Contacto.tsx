import { Navigation } from "@/components/colibird/navigation"
import { Footer } from "@/components/colibird/footer"
import { ContactSection } from "@/components/colibird/contact-section"

export default function Contacto() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <div className="pt-24">
        <ContactSection />
      </div>
      <Footer />
    </div>
  )
}
