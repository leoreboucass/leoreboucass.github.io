import { useId, useState } from 'react'
import Container from './Container'
import { useI18n } from '../i18n/context'
import { revealDelay } from '../motion/reveal'
import iconChevron from '../assets/icon-chevron-down.svg'

function FaqItem({
  question,
  answer,
  open,
  onToggle,
  delay,
}: {
  question: string
  answer: string
  open: boolean
  onToggle: () => void
  delay: number
}) {
  const panelId = useId()

  return (
    <div data-reveal style={revealDelay(delay)} className="rounded-[14px] border border-line bg-surface">
      <h3>
        <button
          type="button"
          aria-expanded={open}
          aria-controls={panelId}
          onClick={onToggle}
          /*
            O realce fica no botão, não na linha inteira: só a pergunta é
            clicável, e destacar também a resposta sugeriria que ela é.
            Aberto, arredonda só o topo, para acompanhar o card.
          */
          className={`flex w-full items-center justify-between gap-4 px-5 py-[17px] text-left transition-colors duration-150 hover:bg-surface-hover ${
            open ? 'rounded-t-[14px]' : 'rounded-[14px]'
          }`}
        >
          <span className="text-[15px] leading-[1.45] font-semibold tracking-[-0.15px] text-ink">{question}</span>
          <img
            src={iconChevron}
            alt=""
            width={14}
            height={14}
            className={`size-[14px] shrink-0 transition-transform duration-200 ${open ? 'rotate-180' : ''}`}
          />
        </button>
      </h3>
      {/*
        Abertura animada em ~180ms (medido no vídeo de referência: ~170ms).
        A altura vai de 0fr a 1fr no grid — é o jeito de animar altura "automática"
        sem precisar medir o conteúdo em JavaScript. O padding fica no filho, para
        encolher junto.
      */}
      <div
        id={panelId}
        role="region"
        aria-hidden={!open}
        className={`grid transition-[grid-template-rows] duration-[180ms] ease-[cubic-bezier(0.4,0,0.2,1)] ${
          open ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'
        }`}
      >
        <div className="overflow-hidden">
          <p className="px-5 pb-5 text-[14.2px] leading-[1.68] text-muted">{answer}</p>
        </div>
      </div>
    </div>
  )
}

export default function Faq() {
  const { t } = useI18n()
  // O Figma mostra o primeiro item aberto.
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <section id="faq" className="pt-[60px] pb-[70px] lg:pb-[110px]">
      <Container>
        <div className="flex flex-col gap-10 lg:flex-row lg:gap-[72px]">
          <div className="flex flex-col gap-4 lg:w-[380px] lg:shrink-0">
            <p data-reveal className="text-eyebrow text-accent uppercase">
              {t.faqSection.eyebrow}
            </p>
            <h2 data-reveal style={revealDelay(70)} className="text-h2 text-ink">
              {t.faqSection.title}
            </h2>
            <p data-reveal style={revealDelay(140)} className="text-lead text-muted">
              {t.faqSection.lead}
            </p>
          </div>

          <div className="flex flex-1 flex-col gap-[11px]">
            {t.faq.map((item, index) => (
              <FaqItem
                key={item.question}
                question={item.question}
                answer={item.answer}
                open={openIndex === index}
                onToggle={() => setOpenIndex(openIndex === index ? null : index)}
                delay={index * 60}
              />
            ))}
          </div>
        </div>
      </Container>
    </section>
  )
}
