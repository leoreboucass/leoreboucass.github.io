import type { ReactNode } from 'react'

/**
 * Coluna de conteúdo do Figma: 1180px de largura máxima com 130px de respiro
 * em telas de 1440px, e 24px de respiro no mobile.
 */
export default function Container({
  children,
  className = '',
}: {
  children: ReactNode
  className?: string
}) {
  return <div className={`mx-auto w-[min(100%-3rem,1180px)] ${className}`}>{children}</div>
}
