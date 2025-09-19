'use client'
import React, { createContext, useContext, useState, ReactNode, useEffect } from 'react'
import { t as translate } from '@/lib/translations'

type Locale = 'vi' | 'en' | 'km'

interface LocaleContextType {
  locale: Locale
  changeLocale: (newLocale: Locale) => void
  t: (key: string, fallback?: string) => string
  isReady: boolean
}

const LocaleContext = createContext<LocaleContextType | undefined>(undefined)

interface LocaleProviderProps {
  children: ReactNode
}

export function LocaleProvider({ children }: LocaleProviderProps) {
  const [locale, setLocale] = useState<Locale>('vi')
  const [isReady, setIsReady] = useState(false)

  useEffect(() => {
    // Load saved locale from localStorage on mount
    const savedLocale = localStorage.getItem('gpg-locale') as Locale
    if (savedLocale && ['vi', 'en', 'km'].includes(savedLocale)) {
      setLocale(savedLocale)
    }
    // Ensure hydration is complete
    setIsReady(true)
  }, [])

  const t = (key: string, fallback?: string): string => {
    try {
      // Always try to get translation, even if not ready
      const result = translate(key, locale, fallback)
      return result
    } catch (error) {
      console.error('Translation error:', error, 'for key:', key, 'locale:', locale)
      return fallback || key
    }
  }

  const changeLocale = (newLocale: Locale) => {
    setLocale(newLocale)
    // Save to localStorage for persistence
    localStorage.setItem('gpg-locale', newLocale)
  }

  return (
    <LocaleContext.Provider value={{ locale, changeLocale, t, isReady }}>
      {children}
    </LocaleContext.Provider>
  )
}

export function useLocale() {
  const context = useContext(LocaleContext)
  if (context === undefined) {
    throw new Error('useLocale must be used within a LocaleProvider')
  }
  return context
}
