'use client'
import { useLocale } from '@/components/locale-provider'

export function useTranslations() {
  const { t } = useLocale()
  return t
}
