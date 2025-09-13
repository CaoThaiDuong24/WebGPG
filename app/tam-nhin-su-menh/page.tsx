import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { VisionMission } from '@/components/vision-mission';

export default function TamNhinSuMenhPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <VisionMission />
      </main>
      <Footer />
    </div>
  );
}

export const metadata = {
  title: 'Tầm nhìn - Sứ mệnh - TCT Đối Tác Chân Thật',
  description: 'Tìm hiểu về tầm nhìn, sứ mệnh và giá trị cốt lõi của Tổng Công ty Đối Tác Chân Thật - Genuine Partner Group.',
};