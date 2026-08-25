import { createContext, useCallback, useContext, useEffect, useMemo, useState } from 'react'
import type { ReactNode } from 'react'
import { detectLocale, storeLocale } from './detect'
import { en } from './en'
import { pt } from './pt'
import type { Dictionary } from './pt'
import type { Locale } from './types'

const dictionaries: Record<Locale, Dictionary> = { pt, en }

type LanguageValue = {
  locale: Locale
  t: Dictionary
  setLocale: (locale: Locale) => void
}

const LanguageContext = createContext<LanguageValue | null>(null)

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>(detectLocale)
  const t = dictionaries[locale]

  // Mantém o documento em sincronia com o idioma escolhido.
  useEffect(() => {
    document.documentElement.lang = t.htmlLang
    document.title = t.meta.title
    document.querySelector('meta[name="description"]')?.setAttribute('content', t.meta.description)
    document.querySelector('meta[property="og:title"]')?.setAttribute('content', t.meta.title)
    document.querySelector('meta[property="og:description"]')?.setAttribute('content', t.meta.description)
    document.querySelector('meta[property="og:locale"]')?.setAttribute('content', t.htmlLang.replace('-', '_'))
  }, [t])

  const setLocale = useCallback((next: Locale) => {
    setLocaleState(next)
    storeLocale(next)
  }, [])

  const value = useMemo<LanguageValue>(() => ({ locale, t, setLocale }), [locale, t, setLocale])

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
}

export function useI18n(): LanguageValue {
  const value = useContext(LanguageContext)
  if (!value) throw new Error('useI18n precisa ser usado dentro de <LanguageProvider>.')
  return value
}
