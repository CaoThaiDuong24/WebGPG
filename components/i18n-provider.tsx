'use client'
import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react'

type Locale = 'vi' | 'en' | 'km'

interface Translations {
  [key: string]: any
}

interface I18nContextType {
  locale: Locale
  t: (key: string, fallback?: string) => string
  changeLocale: (newLocale: Locale) => void
}

const I18nContext = createContext<I18nContextType | undefined>(undefined)

interface I18nProviderProps {
  children: ReactNode
}

export function I18nProvider({ children }: I18nProviderProps) {
  const [locale, setLocale] = useState<Locale>('vi')
  const [translations, setTranslations] = useState<Translations>({})

  useEffect(() => {
    const loadTranslations = async () => {
      try {
        const response = await fetch(`/locales/${locale}/common.json`)
        const data = await response.json()
        setTranslations(data)
      } catch (error) {
        console.error('Failed to load translations:', error)
      }
    }

    loadTranslations()
  }, [locale])

  const t = (key: string, fallback?: string): string => {
    if (!translations || Object.keys(translations).length === 0) {
      return fallback || key
    }

    const keys = key.split('.')
    let value: any = translations

    for (const k of keys) {
      if (value && typeof value === 'object' && k in value) {
        value = value[k]
      } else {
        return fallback || key
      }
    }

    return typeof value === 'string' ? value : fallback || key
  }

  const changeLocale = (newLocale: Locale) => {
    setLocale(newLocale)
  }

  return (
    <I18nContext.Provider value={{ locale, t, changeLocale }}>
      {children}
    </I18nContext.Provider>
  )
}

export function useI18n() {
  const context = useContext(I18nContext)
  if (context === undefined) {
    throw new Error('useI18n must be used within an I18nProvider')
  }
  return context
}
