import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { HistoryTimeline } from '@/components/history-timeline'
import { ScrollIndicator } from '@/components/scroll-indicator'
import { CustomCursor } from '@/components/custom-cursor'
import { ParticleSystem } from '@/components/particle-system'

export const metadata = {
  title: 'Lịch sử hình thành - Genuine Partner Group',
  description: 'Tìm hiểu về lịch sử phát triển và những cột mốc quan trọng của Genuine Partner Group qua các năm.',
}

export default function LichSuHinhThanhPage() {
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