import type { Metadata } from "next"

export const metadata: Metadata = {
  title: 'Nhóm Thân - Logistics & Phụ trợ | TCT Đối Tác Chân Thật',
  description: 'Tìm hiểu về Nhóm Thân - lĩnh vực Logistics & Phụ trợ của TCT Đối Tác Chân Thật. 7 công ty thành viên, 4 depot & kho bãi, hoạt động tại 3 quốc gia.',
  keywords: 'Nhóm Thân, logistics, phụ trợ, TCT Đối Tác Chân Thật, depot, kho bãi, vận tải, GPG, GBL, GCL, AIC, WOOSUNG, GFL, GIL',
}

export default function NhomThanLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
