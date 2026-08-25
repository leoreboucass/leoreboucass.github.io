import Container from './Container'
import SectionHeading from './SectionHeading'
import { serviceVisuals } from '../content'
import type { ServiceVisual } from '../content'
import { useI18n } from '../i18n/context'
import type { ServiceCopy } from '../i18n/types'
import { revealDelay } from '../motion/reveal'

function ServiceCard({ visual, copy, delay }: { visual: ServiceVisual; copy: ServiceCopy; delay: number }) {
  if (visual.featured) {
    return (
      <article
        data-reveal
        style={revealDelay(delay)}
        className="flex flex-col gap-5 rounded-[18px] bg-accent-bg px-6 py-[38px] shadow-raised"
      >
        <span className="flex size-9 items-center justify-center rounded-[11px] bg-white/75">
          <img src={visual.icon} alt="" width={18} height={18} className="size-[18px]" />
        </span>
        <div className="flex flex-col gap-2.5">
          <h3 className="text-service-title text-accent-ink">{copy.title}</h3>
          <p className="text-service-body text-accent-body">{copy.description}</p>
        </div>
      </article>
    )
  }

  return (
    <article
      data-reveal
      style={revealDelay(delay)}
      className="flex flex-col gap-5 rounded-[18px] border border-line bg-white px-6 pt-[26px] pb-[30px] shadow-card"
    >
      <span className="flex size-9 items-center justify-center rounded-[11px] border border-line bg-surface">
        <img src={visual.icon} alt="" width={18} height={18} className="size-[18px]" />
      </span>
      <div className="flex flex-col gap-2.5">
        <h3 className="text-service-title text-ink">{copy.title}</h3>
        <p className="text-service-body text-muted">{copy.description}</p>
      </div>
    </article>
  )
}

export default function Services() {
  const { t } = useI18n()

  return (
    <section id="servicos" className="pt-[70px] pb-[60px] lg:pt-[110px]">
      <Container>
        <SectionHeading
          eyebrow={t.servicesSection.eyebrow}
          title={t.servicesSection.title}
          lead={t.servicesSection.lead}
          leadClassName="w-[720px]"
        />

        <div className="mt-[46px] grid items-stretch gap-5 lg:grid-cols-3">
          {serviceVisuals.map((visual, index) => (
            <ServiceCard key={visual.id} visual={visual} copy={t.services[visual.id]} delay={index * 90} />
          ))}
        </div>
      </Container>
    </section>
  )
}
