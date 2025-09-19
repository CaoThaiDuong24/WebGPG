'use client'
import { LocaleProvider } from './locale-provider'
import { LanguageSync } from './language-sync'

interface ClientWrapperProps {
  children: React.ReactNode
}

export function ClientWrapper({ children }: ClientWrapperProps) {
  return (
    <LocaleProvider>
      <LanguageSync />
      {children}
    </LocaleProvider>
  )
}
