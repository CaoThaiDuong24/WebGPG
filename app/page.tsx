import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { AboutSection } from "@/components/about-section"
import { EcosystemSection } from "@/components/ecosystem-section"
import { AchievementsSection } from "@/components/achievements-section"
import { TestimonialsSection } from "@/components/testimonials-section"
import { CTASection } from "@/components/cta-section"
import { Footer } from "@/components/footer"
import { ScrollIndicator } from "@/components/scroll-indicator"
import { CustomCursor } from "@/components/custom-cursor"
import { ParticleSystem } from "@/components/particle-system"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      <ParticleSystem />
      <CustomCursor />
      <Header />
      <ScrollIndicator />
      <main>
        <HeroSection />
        <div className="space-y-16">
          <AboutSection />
          <EcosystemSection />
          <AchievementsSection />
          <TestimonialsSection />
          <CTASection />
        </div>
      </main>
      <Footer />
    </div>
  )
}
