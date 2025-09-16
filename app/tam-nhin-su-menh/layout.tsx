import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Tầm nhìn - Sứ mệnh - TCT Đối Tác Chân Thật',
  description: 'Tìm hiểu về tầm nhìn, sứ mệnh và giá trị cốt lõi của Tổng Công ty Đối Tác Chân Thật - Genuine Partner Group.',
}

export default function TamNhinSuMenhLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
