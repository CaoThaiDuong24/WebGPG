'use client'
import dynamic from 'next/dynamic'

const HeroSection = dynamic(() => import('./hero-section').then(mod => ({ default: mod.HeroSection })), { 
  ssr: true,
  loading: () => <div className="min-h-screen bg-white animate-pulse" />
})
const AboutSection = dynamic(() => import('./about-section').then(mod => ({ default: mod.AboutSection })), { 
  ssr: true,
  loading: () => <div className="h-96 bg-gray-100 animate-pulse" />
})
const EcosystemSection = dynamic(() => import('./ecosystem-section').then(mod => ({ default: mod.EcosystemSection })), { 
  ssr: true,
  loading: () => <div className="h-96 bg-gray-100 animate-pulse" />
})
const AchievementsSection = dynamic(() => import('./achievements-section').then(mod => ({ default: mod.AchievementsSection })), { 
  ssr: true,
  loading: () => <div className="h-96 bg-gray-100 animate-pulse" />
})
const TestimonialsSection = dynamic(() => import('./testimonials-section').then(mod => ({ default: mod.TestimonialsSection })), { 
  ssr: true,
  loading: () => <div className="h-96 bg-gray-100 animate-pulse" />
})
const CTASection = dynamic(() => import('./cta-section').then(mod => ({ default: mod.CTASection })), { 
  ssr: true,
  loading: () => <div className="h-96 bg-gray-100 animate-pulse" />
})
const Header = dynamic(() => import('./header').then(mod => ({ default: mod.Header })), { 
  ssr: true,
  loading: () => <div className="h-16 bg-white border-b animate-pulse" />
})
const Footer = dynamic(() => import('./footer').then(mod => ({ default: mod.Footer })), { 
  ssr: true,
  loading: () => <div className="h-64 bg-gray-900 animate-pulse" />
})
const ScrollIndicator = dynamic(() => import('./scroll-indicator').then(mod => ({ default: mod.ScrollIndicator })), { 
  ssr: false 
})
const CustomCursor = dynamic(() => import('./custom-cursor').then(mod => ({ default: mod.CustomCursor })), { 
  ssr: false 
})
const ParticleSystem = dynamic(() => import('./particle-system').then(mod => ({ default: mod.ParticleSystem })), { 
  ssr: false 
})

export default function DynamicHome() {
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
