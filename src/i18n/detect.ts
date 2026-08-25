import type { Locale } from './types'

const STORAGE_KEY = 'portfolio:locale'

/**
 * Fusos horários do Brasil (IANA). Servem como pista de região quando o
 * navegador está configurado em outro idioma — um brasileiro com o Chrome
 * em inglês, por exemplo.
 */
const BRAZIL_TIME_ZONES = new Set([
  'America/Araguaina',
  'America/Bahia',
  'America/Belem',
  'America/Boa_Vista',
  'America/Campo_Grande',
  'America/Cuiaba',
  'America/Eirunepe',
  'America/Fortaleza',
  'America/Maceio',
  'America/Manaus',
  'America/Noronha',
  'America/Porto_Velho',
  'America/Recife',
  'America/Rio_Branco',
  'America/Santarem',
  'America/Sao_Paulo',
  'Brazil/Acre',
  'Brazil/DeNoronha',
  'Brazil/East',
  'Brazil/West',
])

function browserLanguages(): string[] {
  if (typeof navigator === 'undefined') return []
  const list = navigator.languages && navigator.languages.length ? navigator.languages : [navigator.language]
  return list.filter(Boolean).map((tag) => tag.toLowerCase())
}

function timeZone(): string {
  try {
    return Intl.DateTimeFormat().resolvedOptions().timeZone ?? ''
  } catch {
    return ''
  }
}

/**
 * O usuário é do Brasil?
 *
 * Repare que `pt-PT` NÃO conta: o pedido é português só para o Brasil e inglês
 * para qualquer outra região. Um `pt` sem região só vale junto de um fuso brasileiro.
 */
export function isBrazilianVisitor(): boolean {
  const languages = browserLanguages()

  if (languages.some((tag) => tag === 'pt-br')) return true
  // Qualquer outra variante regional de português (pt-PT, pt-AO…) recebe inglês.
  if (languages.some((tag) => tag.startsWith('pt-'))) return false

  if (BRAZIL_TIME_ZONES.has(timeZone())) return true

  return false
}

export function readStoredLocale(): Locale | null {
  try {
    const stored = localStorage.getItem(STORAGE_KEY)
    return stored === 'pt' || stored === 'en' ? stored : null
  } catch {
    // localStorage pode estar bloqueado (modo privado, cookies desativados).
    return null
  }
}

export function storeLocale(locale: Locale): void {
  try {
    localStorage.setItem(STORAGE_KEY, locale)
  } catch {
    // Sem persistência, a detecção automática roda de novo na próxima visita.
  }
}

/** A escolha manual do usuário sempre vence a detecção automática. */
export function detectLocale(): Locale {
  return readStoredLocale() ?? (isBrazilianVisitor() ? 'pt' : 'en')
}
