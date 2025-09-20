import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import { Analytics } from "@vercel/analytics/next"
import { Suspense } from "react"
import { ClientWrapper } from "@/components/client-wrapper"
import { ErrorBoundary } from "@/components/error-boundary"
import { LoadingFallback } from "@/components/loading-fallback"
import ChatBox from "@/components/chat-box"
import { FloatingLanguageSwitcher } from "@/components/floating-language-switcher"
import "./globals.css"

export const metadata: Metadata = {
  title: "Genuine Partner - Hệ sinh thái TCT Đối Tác Chân Thật",
  description:
    "Genuine Partner Group - Đối tác tin cậy trong lĩnh vực logistics, thương mại, tư vấn và công nghệ. 16 năm kinh nghiệm phát triển bền vững.",
  generator: "v0.app",
  keywords: "Genuine Partner, logistics, thương mại, tư vấn, công nghệ, TCT, Việt Nam",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="vi" className={`${GeistSans.variable} ${GeistMono.variable}`}>
      <body className="font-sans antialiased">
        <ErrorBoundary>
          <ClientWrapper>
            <Suspense fallback={<LoadingFallback />}>
              {children}
            </Suspense>
          </ClientWrapper>
          <ChatBox />
        </ErrorBoundary>
        <Analytics />
      </body>
    </html>
  )
}
