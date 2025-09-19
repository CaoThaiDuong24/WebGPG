import viTranslations from '../public/locales/vi/common.json'
import enTranslations from '../public/locales/en/common.json'
import kmTranslations from '../public/locales/km/common.json'

type Locale = 'vi' | 'en' | 'km'

// Create a function to get translations dynamically
function getTranslationsData() {
  return {
    vi: viTranslations,
    en: enTranslations,
    km: kmTranslations
  }
}

const translations = getTranslationsData()

export function getTranslations(locale: Locale = 'vi') {
  return translations[locale] || translations.vi
}

export function t(key: string, locale: Locale = 'vi', fallback?: string): string {
  try {
    const translation = getTranslations(locale)
    
    if (!translation) {
      console.warn(`No translations found for locale: ${locale}`)
      return fallback || key
    }
    
    const keys = key.split('.')
    let value: any = translation

    for (const k of keys) {
      if (value && typeof value === 'object' && k in value) {
        value = value[k]
      } else {
        console.warn(`Translation key not found: ${key} in locale: ${locale}`)
        return fallback || key
      }
    }

    if (typeof value === 'string') {
      return value
    } else {
      console.warn(`Translation value is not a string for key: ${key}`)
      return fallback || key
    }
  } catch (error) {
    console.error('Translation error:', error, 'for key:', key, 'locale:', locale)
    return fallback || key
  }
}
