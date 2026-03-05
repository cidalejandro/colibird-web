import { Navigation } from "@/components/colibird/navigation"
import { Footer } from "@/components/colibird/footer"
import { ColombiaSection } from "@/components/colibird/colombia-section"
import { RadianDetailSection } from "@/components/colibird/radian-detail-section"
import { ColombiaProductSection } from "@/components/colibird/colombia-product-section"

export default function Radian() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <div className="pt-24">
        <ColombiaSection />
        <ColombiaProductSection />
        <RadianDetailSection />
      </div>
      <Footer />
    </div>
  )
}
