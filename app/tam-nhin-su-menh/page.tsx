'use client'

import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import VisionMission from '@/components/vision-mission';
import { ScrollIndicator } from '@/components/scroll-indicator';
import { CustomCursor } from '@/components/custom-cursor';
import { ParticleSystem } from '@/components/particle-system';

export default function TamNhinSuMenhPage() {
  return (
    <div className="min-h-screen bg-white">
      <ParticleSystem />
      <CustomCursor />
      <Header />
      <ScrollIndicator />
      <main>
        <VisionMission />
      </main>
      <Footer />
    </div>
  );
}