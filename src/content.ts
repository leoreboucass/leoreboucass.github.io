/**
 * Dados que não mudam com o idioma: contatos, imagens e as cores de cada card.
 * Todo o texto do site fica em `src/i18n/pt.ts` e `src/i18n/en.ts`.
 */

import coverBikcraft from './assets/cover-bikcraft.webp'
import coverCkAutoCare from './assets/cover-ck-auto-care.webp'
import coverPulsar from './assets/cover-pulsar.webp'
import iconServiceDs from './assets/icon-service-ds.svg'
import iconServiceUi from './assets/icon-service-ui.svg'
import iconServiceUx from './assets/icon-service-ux.svg'
import logoBikcraft from './assets/logo-bikcraft.svg'
import logoCkAutoCare from './assets/logo-ckautocare.svg'
import logoPulsarBruceLee from './assets/logo-pulsar-brucelee.png'
import logoSmartly from './assets/logo-smartly.webp'
import type { ProjectId, ServiceId } from './i18n/types'

export const EMAIL = 'reboucas.contato1@gmail.com'
export const LINKEDIN_URL = 'https://www.linkedin.com/in/leonardo-reboucas-busato/'

/** Só dígitos, com país e DDD: +55 41 99527-1187. */
export const WHATSAPP = '5541995271187'

/** Texto visível do WhatsApp: +55 (41) 99999-8888 */
export const whatsappDisplay = (n: string) =>
  n.length === 13 ? `+${n.slice(0, 2)} (${n.slice(2, 4)}) ${n.slice(4, 9)}-${n.slice(9)}` : n

/** Caminho do currículo em /public. */
export const CV_URL = '/cv.pdf'

export const BRAND = ['Leonardo', 'Rebouças']

/**
 * A arte de cada card é um gradiente de 153.6° com paradas em 14.286% / 53.571% / 85.714%,
 * exatamente como no Figma.
 */
const gradient = (from: string, via: string, to: string) =>
  `linear-gradient(153.6deg, ${from} 14.286%, ${via} 53.571%, ${to} 85.714%)`

export type ProjectVisual = {
  id: ProjectId
  /** Endereço da página do projeto: /projetos/<slug> */
  slug: string
  year: string
  /** Projeto sugerido no rodapé da página de detalhe. */
  next: ProjectId
  /** Fundo da arte do card: gradiente ou cor chapada. */
  background: string
  /** Arte do card na home: o fundo com o logo por cima. */
  art: { src: string; width: number; height: number }
  /** Imagem grande da página do projeto. Sem ela, a página reusa a arte do card. */
  cover?: { src: string; width: number; height: number }
}

/** A ordem aqui é a ordem em que os cards aparecem na home. */
export const projectVisuals: ProjectVisual[] = [
  {
    id: 'bikcraft',
    slug: 'bikcraft',
    year: '2023',
    next: 'ckAutoCare',
    background: gradient('#eab255', '#c9762c', '#9c4f1c'),
    art: { src: logoBikcraft, width: 136, height: 32 },
    cover: { src: coverBikcraft, width: 1000, height: 620 },
  },
  {
    id: 'pulsar',
    slug: 'pulsar-x2-bruce-lee',
    year: '2025',
    next: 'smartly',
    background: gradient('#37373d', '#1c1c20', '#101013'),
    art: { src: logoPulsarBruceLee, width: 300, height: 32 },
    cover: { src: coverPulsar, width: 1000, height: 620 },
  },
  {
    id: 'ckAutoCare',
    slug: 'ck-auto-care',
    year: '2025',
    next: 'pulsar',
    background: gradient('#4a4d55', '#2b2d33', '#16171a'),
    art: { src: logoCkAutoCare, width: 125, height: 79 },
    cover: { src: coverCkAutoCare, width: 1000, height: 620 },
  },
  {
    id: 'smartly',
    slug: 'smartly-brasil',
    year: '2026',
    next: 'bikcraft',
    // Único card com fundo chapado: o logo é escuro e pede superfície clara.
    background: '#f1f1f1',
    art: { src: logoSmartly, width: 400, height: 197 },
  },
]

export const projectBySlug = (slug: string) => projectVisuals.find((p) => p.slug === slug)
export const projectById = (id: ProjectId) => projectVisuals.find((p) => p.id === id)!

export type ServiceVisual = {
  id: ServiceId
  icon: string
  featured?: boolean
}

export const serviceVisuals: ServiceVisual[] = [
  { id: 'ux', icon: iconServiceUx },
  { id: 'ui', icon: iconServiceUi, featured: true },
  { id: 'designSystem', icon: iconServiceDs },
]
