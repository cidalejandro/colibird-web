import { Navigation } from "@/components/colibird/navigation"
import { HeroSection } from "@/components/colibird/hero-section"
import { FeaturesSection } from "@/components/colibird/features-section"
import { RoadmapSection } from "@/components/colibird/roadmap-section"
import { StatsSection } from "@/components/colibird/stats-section"
import { CTASection } from "@/components/colibird/cta-section"
import { Footer } from "@/components/colibird/footer"

export default function ColibirdHome() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <HeroSection />
      <div id="analytics">
        <StatsSection />
      </div>
      <div id="soluciones">
        <FeaturesSection />
      </div>
      <RoadmapSection />
      <CTASection />
      <Footer />
    </div>
  )
}
