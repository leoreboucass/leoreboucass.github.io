import Container from './Container'
import ContactForm from './ContactForm'
import { EMAIL, LINKEDIN_URL } from '../content'
import { useI18n } from '../i18n/context'
import { revealDelay } from '../motion/reveal'
import iconEnvelope from '../assets/icon-envelope.svg'
import iconLinkedin from '../assets/icon-linkedin.svg'

/**
 * `home` usa o texto do Figma da página inicial; `project` usa a variação
 * "// Fale comigo" que aparece nas páginas de projeto.
 */
export default function Contact({ variant = 'home' }: { variant?: 'home' | 'project' }) {
  const { t } = useI18n()
  const copy = variant === 'project' ? t.contactProject : t.contact

  const socials = [
    { href: LINKEDIN_URL, icon: iconLinkedin, label: t.contact.linkedinLabel, external: true },
    { href: `mailto:${EMAIL}`, icon: iconEnvelope, label: t.contact.emailLabel(EMAIL), external: false },
  ]

  return (
    <section id="contato" className="pb-[90px]">
      <Container>
        <div className="flex flex-col gap-10 rounded-[24px] border border-line bg-white p-7 shadow-card sm:rounded-[30px] sm:p-[52px] lg:flex-row lg:gap-[58px]">
          <div className="flex flex-1 flex-col gap-5">
            <p
              data-reveal
              className={`text-eyebrow uppercase ${variant === 'project' ? 'text-accent' : 'text-ink'}`}
            >
              {copy.eyebrow}
            </p>
            <h2 data-reveal style={revealDelay(70)} className="text-h2 w-[330px] max-w-full text-ink">
              {copy.title}
            </h2>
            <p
              data-reveal
              style={revealDelay(140)}
              className="w-[380px] max-w-full text-[14.6px] leading-[1.7] text-accent"
            >
              {copy.lead}
            </p>

            <ul data-reveal style={revealDelay(210)} className="flex gap-2.5 pt-4">
              {socials.map((social) => (
                <li key={social.href}>
                  <a
                    href={social.href}
                    aria-label={social.label}
                    {...(social.external ? { target: '_blank', rel: 'noreferrer noopener' } : {})}
                    className="flex size-[38px] items-center justify-center rounded-[11px] border border-line transition-colors hover:bg-surface"
                  >
                    <img src={social.icon} alt="" width={16} height={16} className="size-4" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div data-reveal style={revealDelay(120)} className="flex-1">
            <ContactForm labels={variant === 'project' ? t.contactProject.form : undefined} />
          </div>
        </div>
      </Container>
    </section>
  )
}
