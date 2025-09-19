'use client'
import { useEffect } from 'react'
import { useLocale } from './locale-provider'

export function LanguageSync() {
  const { locale } = useLocale()

  useEffect(() => {
    // Update HTML lang attribute when locale changes
    document.documentElement.lang = locale
  }, [locale])

  return null
}
