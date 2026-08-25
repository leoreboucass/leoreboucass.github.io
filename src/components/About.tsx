import { CV_URL } from '../content'
import { useI18n } from '../i18n/context'
import { revealDelay } from '../motion/reveal'
import iconDownload from '../assets/icon-download.svg'
import logoFigma from '../assets/logo-figma.svg'

export default function About() {
  const { t } = useI18n()

  // Mesmo tratamento do hero: sai da coluna de 1180px e ocupa a largura da tela menos 24px de cada lado.
  return (
    <section id="sobre" className="px-6">
      <div className="flex justify-center rounded-[28px] bg-panel px-6 py-16 sm:rounded-[40px] lg:py-24">
        <div className="flex w-[820px] max-w-full flex-col gap-6">
          <div className="flex flex-col items-center gap-10 lg:flex-row lg:items-center lg:gap-14">
            {/* O texto fica em 554px: linha mais longa que isso cansa de ler. */}
            <div className="flex w-[554px] max-w-full flex-col gap-5">
              <p data-reveal className="text-eyebrow text-accent uppercase">
                {t.about.eyebrow}
              </p>
              <h2 data-reveal style={revealDelay(70)} className="text-h2 w-[400px] max-w-full text-ink">
                {t.about.title}
              </h2>
              {t.about.paragraphs.map((paragraph, index) => (
                <p
                  key={paragraph.slice(0, 24)}
                  data-reveal
                  style={revealDelay(140 + index * 70)}
                  className="text-prose text-body"
                >
                  {paragraph}
                </p>
              ))}
            </div>

            {/*
              A marca ocupa cerca de 70% da largura e 86% da altura da própria
              caixa, então 140px aqui rendem ~97×120px visíveis — presença
              parecida com a da foto que saía daqui, porém mais leve.
            */}
            <img
              data-reveal
              style={revealDelay(120)}
              src={logoFigma}
              alt={t.about.figmaAlt}
              width={140}
              height={140}
              className="size-[112px] shrink-0 sm:size-[140px]"
            />
          </div>

          <a
            data-reveal
            style={revealDelay(200)}
            href={CV_URL}
            download="Leonardo-Reboucas-Busato-CV.pdf"
            className="text-nav inline-flex w-fit items-center gap-[9px] self-center rounded-pill bg-ink px-[26px] py-3 font-semibold text-white transition-opacity hover:opacity-85 lg:self-start"
          >
            <img src={iconDownload} alt="" width={17} height={17} className="size-[17px]" />
            {t.about.cv}
          </a>
        </div>
      </div>
    </section>
  )
}
