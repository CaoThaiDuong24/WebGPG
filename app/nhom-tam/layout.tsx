import type { Metadata } from "next"

export const metadata: Metadata = {
  title: 'Nhóm Tâm - Dịch vụ & Thương mại | TCT Đối Tác Chân Thật',
  description: 'Tìm hiểu về Nhóm Tâm - lĩnh vực Dịch vụ & Thương mại của TCT Đối Tác Chân Thật. Các hoạt động được thiết kế để đáp ứng nhu cầu của các thành viên trong Hệ sinh thái và mở rộng ra đến cộng đồng.',
  keywords: 'Nhóm Tâm, dịch vụ, thương mại, TCT Đối Tác Chân Thật, bán lẻ, FMCG, thương mại điện tử, SUZANO CARGO, GTC, FMG, GRC',
}

export default function NhomTamLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
