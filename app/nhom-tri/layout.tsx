import type { Metadata } from "next"

export const metadata: Metadata = {
  title: 'Nhóm Trí - Tư vấn, Đào tạo & Công nghệ | TCT Đối Tác Chân Thật',
  description: 'Tìm hiểu về Nhóm Trí - lĩnh vực Tư vấn, Đào tạo & Công nghệ của TCT Đối Tác Chân Thật. Cung cấp dịch vụ tư vấn chuyên nghiệp và đào tạo chất lượng cao.',
  keywords: 'Nhóm Trí, tư vấn, đào tạo, công nghệ, TCT Đối Tác Chân Thật, LTTCI, logistics, quản lý doanh nghiệp, marketing, tài chính, nhân sự',
}

export default function NhomTriLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return <>{children}</>
}
