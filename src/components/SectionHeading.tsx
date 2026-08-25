import { revealDelay } from '../motion/reveal'

/** Trio olho-mágico + título + linha de apoio, repetido em Projetos, Serviços e FAQ. */
export default function SectionHeading({
  eyebrow,
  title,
  lead,
  titleClassName = '',
  leadClassName = '',
}: {
  eyebrow: string
  title: string
  lead: string
  titleClassName?: string
  leadClassName?: string
}) {
  return (
    <div className="flex flex-col gap-3.5">
      <p data-reveal className="text-eyebrow text-accent uppercase">
        {eyebrow}
      </p>
      <h2 data-reveal style={revealDelay(70)} className={`text-h2 text-ink ${titleClassName}`}>
        {title}
      </h2>
      <p data-reveal style={revealDelay(140)} className={`text-lead max-w-full text-muted ${leadClassName}`}>
        {lead}
      </p>
    </div>
  )
}
