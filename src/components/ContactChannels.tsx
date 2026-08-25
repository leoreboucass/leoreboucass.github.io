import Container from './Container'
import { EMAIL, LINKEDIN_URL, WHATSAPP, whatsappDisplay } from '../content'
import { useI18n } from '../i18n/context'
import { revealDelay } from '../motion/reveal'
import iconEnvelope from '../assets/icon-envelope-24.svg'
import iconLinkedin from '../assets/icon-linkedin-24.svg'
import iconWhatsapp from '../assets/icon-whatsapp.svg'

/**
 * Contato da home: três canais diretos, sem formulário.
 * O formulário continua nas páginas de projeto, onde o Figma o mantém.
 */
export default function ContactChannels() {
  const { t } = useI18n()
  const copy = t.contactHome

  const channels = [
    {
      key: 'whatsapp',
      icon: iconWhatsapp,
      label: copy.channels.whatsapp.label,
      // TODO: definir WHATSAPP em content.ts para o número aparecer aqui.
      value: WHATSAPP ? whatsappDisplay(WHATSAPP) : copy.channels.whatsapp.action,
      href: WHATSAPP ? `https://wa.me/${WHATSAPP}` : `mailto:${EMAIL}`,
      action: copy.channels.whatsapp.action,
      external: Boolean(WHATSAPP),
    },
    {
      key: 'linkedin',
      icon: iconLinkedin,
      label: copy.channels.linkedin.label,
      value: 'leonardo-reboucas-busato',
      href: LINKEDIN_URL,
      action: copy.channels.linkedin.action,
      external: true,
    },
    {
      key: 'email',
      icon: iconEnvelope,
      label: copy.channels.email.label,
      value: EMAIL,
      href: `mailto:${EMAIL}`,
      action: copy.channels.email.action,
      external: false,
    },
  ]

  return (
    <section id="contato" className="pb-[90px]">
      <Container>
        <div className="flex flex-col gap-3.5">
          <p data-reveal className="text-eyebrow text-accent uppercase">
            {copy.eyebrow}
          </p>
          <h2 data-reveal style={revealDelay(70)} className="text-h2 text-ink">
            {copy.title}
          </h2>
          <p data-reveal style={revealDelay(140)} className="text-lead w-[452px] max-w-full text-muted">
            {copy.lead}
          </p>
        </div>

        <ul className="mt-11 grid gap-5 md:grid-cols-3">
          {channels.map((channel, index) => (
            <li key={channel.key} data-reveal style={revealDelay(index * 90)}>
              <a
                href={channel.href}
                aria-label={channel.action}
                {...(channel.external ? { target: '_blank', rel: 'noreferrer noopener' } : {})}
                className="flex h-full flex-col gap-5 rounded-[18px] border border-line bg-white px-6 pt-[26px] pb-[30px] shadow-card transition duration-200 hover:-translate-y-1 hover:shadow-raised"
              >
                <span className="flex size-9 items-center justify-center rounded-[11px] border border-line bg-surface">
                  <img src={channel.icon} alt="" width={18} height={18} className="size-[18px]" />
                </span>
                <div className="flex flex-col gap-2.5">
                  <h3 className="text-service-title text-ink">{channel.label}</h3>
                  <p className="text-service-body break-all text-muted">{channel.value}</p>
                </div>
              </a>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  )
}
