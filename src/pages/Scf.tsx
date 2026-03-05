import { Navigation } from "@/components/colibird/navigation"
import { Footer } from "@/components/colibird/footer"
import { SupplyChainFinanceSection } from "@/components/colibird/supply-chain-finance-section"
import { ScfDetailSection } from "@/components/colibird/scf-detail-section"

export default function Scf() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <SupplyChainFinanceSection />
      <ScfDetailSection />
      <Footer />
    </div>
  )
}
