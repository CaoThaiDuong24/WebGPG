"use client"

import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { HistoryTimeline } from '@/components/history-timeline'
import { ScrollIndicator } from '@/components/scroll-indicator'
import { CustomCursor } from '@/components/custom-cursor'
import { ParticleSystem } from '@/components/particle-system'
import { useTranslations } from '@/hooks/use-i18n'


export default function LichSuHinhThanhPage() {
  const t = useTranslations()
  
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      <ParticleSystem />
      <CustomCursor />
      <Header />
      <ScrollIndicator />
      <main className="pt-20">
        <HistoryTimeline />
      </main>
      <Footer />
    </div>
  )
}