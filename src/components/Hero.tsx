import { useI18n } from '../i18n/context'
import { revealDelay } from '../motion/reveal'
import { useHeroIntro } from '../motion/useHeroIntro'
import photoHero from '../assets/photo-hero.jpg'
import iconScrollHint from '../assets/icon-scroll-hint.svg'

/**
 * O hero é o único bloco que sai da coluna de 1180px: ocupa quase toda a largura
 * da tela (24px de respiro de cada lado) e ~86% da altura da janela, como no
 * hero de referência. A barra de navegação continua na coluna estreita.
 */
export default function Hero() {
  const { t } = useI18n()
  const { typedBefore, typedAfter, photoIn, caret, done } = useHeroIntro(t.hero.titleBefore, t.hero.titleAfter)

  return (
    <section id="topo" className="mt-6 px-6">
      <div className="relative isolate flex min-h-[86svh] flex-col items-center justify-center gap-10 overflow-hidden rounded-[28px] bg-panel px-6 py-[72px] sm:rounded-[40px]">
        {/*
          Trama de pontos atrás do título: pontos de 7px a cada 21×19px, bem
          apagados, com uma máscara radial que some em direção às bordas.
          A referência desenha 957 divs; aqui é um gradiente só, repetido.
        */}
        <span
          aria-hidden="true"
          className="pointer-events-none absolute top-1/2 left-1/2 -z-10 size-[554px] -translate-x-1/2 -translate-y-1/2 opacity-30"
          style={{
            backgroundImage: 'radial-gradient(circle, #d1d1d1 3.5px, transparent 3.6px)',
            backgroundSize: '21px 19px',
            maskImage: 'radial-gradient(circle closest-side, #000, transparent)',
            WebkitMaskImage: 'radial-gradient(circle closest-side, #000, transparent)',
          }}
        />

        <p
          data-reveal
          className="text-tagline rounded-pill border border-line bg-white px-[17px] py-[7px] text-center text-body uppercase"
        >
          {t.hero.tagline}
        </p>

        {/*
          O texto é digitado letra a letra. Cada trecho reserva a largura final
          com uma cópia invisível empilhada no mesmo espaço do grid — sem isso o
          bloco reposicionaria a cada caractere.
        */}
        <h1
          aria-label={`${t.hero.titleBefore} ${t.hero.titleAfter}`}
          className="text-display flex flex-wrap items-center justify-center gap-x-1.5 gap-y-2 text-center text-ink"
        >
          <span aria-hidden="true" className="grid text-left">
            <span className="invisible col-start-1 row-start-1">{t.hero.titleBefore}</span>
            <span className="col-start-1 row-start-1">
              {typedBefore}
              {caret && !typedAfter && <span className="caret" />}
            </span>
          </span>

          {/*
            A foto é medida em `em`, amarrada ao tamanho do título: assim ela
            acompanha a tipografia em qualquer largura de tela sem precisar de
            um clamp próprio. Para mudar o tamanho dela, mexa na altura da
            imagem (sm:h-[1.8em]) e ajuste as outras três medidas na mesma
            proporção — elas vêm do recorte original (96×111) e da moldura do
            Figma (104×119). No celular ela fica menor, senão o título quebraria
            em três linhas.
          */}
          <span
            aria-hidden="true"
            className="group inline-flex h-[1.31em] w-[1.145em] shrink-0 items-center justify-center sm:h-[1.929em] sm:w-[1.688em]"
          >
            <img
              src={photoHero}
              alt=""
              width={96}
              height={111}
              className={`h-[1.222em] w-[1.057em] rotate-6 rounded-[0.19em] border-[0.055em] border-white object-cover transition-[transform,opacity] duration-[350ms] ease-out group-hover:rotate-0 group-hover:duration-[150ms] sm:h-[1.8em] sm:w-[1.557em] ${
                photoIn ? 'scale-100 opacity-100' : 'scale-90 opacity-0'
              }`}
            />
          </span>

          <span aria-hidden="true" className="grid text-left">
            <span className="invisible col-start-1 row-start-1">{t.hero.titleAfter}</span>
            <span className="col-start-1 row-start-1">
              {typedAfter}
              {caret && typedAfter && <span className="caret" />}
            </span>
          </span>
        </h1>

        <p data-reveal style={revealDelay(160)} className="text-lead w-[452px] max-w-full text-center text-muted">
          {t.hero.lead}
        </p>

        {/*
          Seta de rolagem: só aparece quando a digitação termina. Fica presa ao
          rodapé do painel, fora da pilha centralizada, e leva para os projetos.
          As duas pontas usam o mesmo ícone do Figma, com um atraso entre elas.
        */}
        <a
          href="#projetos"
          aria-label={t.hero.scrollHint}
          className={`absolute bottom-10 left-1/2 flex -translate-x-1/2 flex-col items-center gap-2 p-3 transition-opacity duration-700 sm:bottom-[60px] ${
            done ? 'opacity-100' : 'pointer-events-none opacity-0'
          }`}
        >
          {[0, 150].map((atraso) => (
            <img
              key={atraso}
              src={iconScrollHint}
              alt=""
              width={24}
              height={8}
              className="scroll-hint h-2 w-6"
              style={{ animationDelay: `${atraso}ms` }}
            />
          ))}
        </a>
      </div>
    </section>
  )
}
