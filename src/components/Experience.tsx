import Container from './Container'
import { LINKEDIN_URL } from '../content'
import { useI18n } from '../i18n/context'
import type { ExperienceEntry } from '../i18n/types'
import { revealDelay } from '../motion/reveal'
import iconArrowRight from '../assets/icon-arrow-right.svg'

/** Bolinha da linha do tempo. O cargo atual ganha a cor de destaque. */
function Marker({ featured }: { featured?: boolean }) {
  return (
    <div aria-hidden="true" className="flex w-[34px] shrink-0 justify-start pt-[26px]">
      <span
        className={`size-[11px] rounded-full ${featured ? 'bg-accent' : 'border border-line bg-white'}`}
      />
    </div>
  )
}

function ExperienceCard({ entry }: { entry: ExperienceEntry }) {
  const { featured } = entry

  return (
    <article
      className={`flex flex-1 flex-col gap-4 rounded-[12px] px-7 pt-[26px] pb-6 ${
        featured ? 'bg-accent-bg' : 'border border-line bg-white'
      }`}
    >
      <div className="flex flex-wrap items-center justify-between gap-3">
        <span
          className={`rounded-pill px-3 py-[7px] text-[11.5px] leading-none font-medium ${
            featured ? 'bg-white/75 text-accent-ink' : 'bg-surface text-ink'
          }`}
        >
          {entry.period}
        </span>
        <span
          className={`text-[11.5px] leading-none font-semibold tracking-[1.38px] uppercase ${
            featured ? 'text-accent-body' : 'text-muted'
          }`}
        >
          {entry.mode}
        </span>
      </div>

      <div className="flex flex-col gap-1">
        <h3 className={`text-[16px] leading-[1.4] font-bold tracking-[-0.24px] ${featured ? 'text-accent-ink' : 'text-ink'}`}>
          {entry.role}
        </h3>
        {entry.company && (
          <p className={`text-[13.5px] leading-[1.7] font-medium ${featured ? 'text-accent-body' : 'text-muted'}`}>
            {entry.company}
          </p>
        )}
      </div>

      <p className={`text-[13.5px] leading-[1.7] ${featured ? 'text-accent-body' : 'text-muted'}`}>
        {entry.description}
      </p>

      <ul className="flex flex-wrap gap-[7px]">
        {entry.tags.map((tag) => (
          <li
            key={tag}
            className={`rounded-pill border px-[11px] py-[7px] text-[11.5px] leading-none font-medium ${
              featured ? 'border-accent-body text-accent-body' : 'border-line text-muted'
            }`}
          >
            {tag}
          </li>
        ))}
      </ul>
    </article>
  )
}

export default function Experience() {
  const { t } = useI18n()

  return (
    <section id="experiencia" className="pt-[60px] pb-[70px] lg:pb-[110px]">
      <Container>
        <div className="flex flex-col gap-10 lg:flex-row lg:gap-[72px]">
          <div className="flex flex-col gap-[46px] lg:w-[380px] lg:shrink-0">
            <div className="flex flex-col gap-4">
              <p data-reveal className="text-eyebrow text-accent uppercase">
                {t.experienceSection.eyebrow}
              </p>
              <h2 data-reveal style={revealDelay(70)} className="text-h2 text-ink">
                {t.experienceSection.title}
              </h2>
              <p data-reveal style={revealDelay(140)} className="text-lead text-muted">
                {t.experienceSection.lead}
              </p>
            </div>

            <a
              data-reveal
              style={revealDelay(210)}
              href={LINKEDIN_URL}
              target="_blank"
              rel="noreferrer noopener"
              className="text-nav inline-flex w-fit items-center gap-2 font-bold text-accent hover:underline"
            >
              {t.experienceSection.cta}
              <img src={iconArrowRight} alt="" width={13} height={13} className="size-[13px]" />
            </a>
          </div>

          {/* O trilho vertical liga as bolinhas; ele para antes da primeira e depois da última. */}
          <div className="relative flex flex-1 flex-col gap-3.5">
            <span aria-hidden="true" className="absolute top-8 bottom-8 left-[5px] w-px bg-line" />

            {t.experience.map((entry, index) => (
              <div key={entry.role} data-reveal style={revealDelay(index * 80)} className="flex items-start">
                <Marker featured={entry.featured} />
                <ExperienceCard entry={entry} />
              </div>
            ))}

            <div data-reveal style={revealDelay(t.experience.length * 80)} className="flex items-start">
              <Marker />
              <div className="flex flex-1 flex-col gap-2.5 rounded-[12px] bg-panel px-7 py-[22px]">
                <p className="text-[11.5px] leading-none font-semibold tracking-[1.38px] text-muted uppercase">
                  {t.experienceSection.educationTitle}
                </p>
                <ul className="flex flex-col">
                  {t.education.map((item, index) => (
                    <li
                      key={item.course}
                      className={`flex flex-wrap items-start justify-between gap-x-6 gap-y-1 py-[7px] text-[13.5px] leading-[1.7] ${
                        index > 0 ? 'border-t border-line' : ''
                      }`}
                    >
                      <span className="font-medium text-ink">{item.course}</span>
                      <span className="text-muted">{item.period}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}
