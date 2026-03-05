import { Navigation } from "@/components/colibird/navigation"
import { Footer } from "@/components/colibird/footer"
import { ArgentinaSection } from "@/components/colibird/argentina-section"
import { EcheqDetailSection } from "@/components/colibird/echeq-detail-section"
import { ArgentinaProductSection } from "@/components/colibird/argentina-product-section"

export default function Echeq() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <div className="pt-24">
        <ArgentinaSection />
        <ArgentinaProductSection />
        <EcheqDetailSection />
      </div>
      <Footer />
    </div>
  )
}
