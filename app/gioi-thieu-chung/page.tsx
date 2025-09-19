'use client'
import dynamic from 'next/dynamic'

const Header = dynamic(() => import('@/components/header').then(mod => ({ default: mod.Header })), { ssr: false })
const Footer = dynamic(() => import('@/components/footer').then(mod => ({ default: mod.Footer })), { ssr: false })
const AboutGeneral = dynamic(() => import('@/components/about-general'), { ssr: false })
const ScrollIndicator = dynamic(() => import('@/components/scroll-indicator').then(mod => ({ default: mod.ScrollIndicator })), { ssr: false })
const CustomCursor = dynamic(() => import('@/components/custom-cursor').then(mod => ({ default: mod.CustomCursor })), { ssr: false })
const ParticleSystem = dynamic(() => import('@/components/particle-system').then(mod => ({ default: mod.ParticleSystem })), { ssr: false })

export default function GioiThieuChungPage() {
  return (
    <div className="min-h-screen bg-white">
      <ParticleSystem />
      <CustomCursor />
      <Header />
      <ScrollIndicator />
      <main>
        <AboutGeneral />
      </main>
      <Footer />
    </div>
  );
}
