import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import AboutGeneral from '@/components/about-general';

export default function GioiThieuChungPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <AboutGeneral />
      </main>
      <Footer />
    </div>
  );
}

export const metadata = {
  title: 'Giới thiệu chung - TCT Đối Tác Chân Thật',
  description: 'Tìm hiểu về lịch sử, sứ mệnh và hệ sinh thái của Tổng Công ty Đối Tác Chân Thật - đối tác logistics hàng đầu tại Việt Nam.',
};