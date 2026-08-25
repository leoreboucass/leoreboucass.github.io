export type Locale = 'pt' | 'en'

export const LOCALES: Locale[] = ['pt', 'en']

export type ProjectId = 'bikcraft' | 'pulsar' | 'ckAutoCare' | 'smartly'

export type ServiceId = 'ux' | 'ui' | 'designSystem'

export type ProjectCopy = {
  tag: string
  title: string
  description: string
  artAlt: string
}

export type ServiceCopy = {
  title: string
  description: string
}

/** Texto da página de detalhe de cada projeto. */
export type ProjectPageCopy = {
  description: string[]
  category: string
  role: string
  /** Descreve a imagem grande da página — não confundir com o logo do card. */
  coverAlt: string
  /** Aviso opcional sob a imagem (só o Pulsar tem). */
  imageCaption?: string
}

/** Um cargo na linha do tempo da seção Experiência. */
export type ExperienceEntry = {
  period: string
  /** Vínculo e cidade, em maiúsculas: "CLT · CURITIBA, PR". */
  mode: string
  role: string
  /** O card de freelancer não tem empresa. */
  company?: string
  description: string
  tags: string[]
  /** O cargo atual ganha o card azul. */
  featured?: boolean
}

export type EducationEntry = {
  course: string
  period: string
}
