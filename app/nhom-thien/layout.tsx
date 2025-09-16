import type { Metadata } from "next"

export const metadata: Metadata = {
  title: 'Nhóm Thiện - Cộng đồng & An sinh Xã hội | TCT Đối Tác Chân Thật',
  description: 'Tìm hiểu về Nhóm Thiện - lĩnh vực Cộng đồng & An sinh Xã hội của TCT Đối Tác Chân Thật. Thúc đẩy hoạt động cộng đồng và phúc lợi xã hội, tạo điều kiện phát triển bền vững.',
  keywords: 'Nhóm Thiện, cộng đồng, an sinh xã hội, TCT Đối Tác Chân Thật, SWC, công tác xã hội, phi lợi nhuận, cầu An Yên, thiện nguyện',
}

export default function NhomThienLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return <>{children}</>
}
