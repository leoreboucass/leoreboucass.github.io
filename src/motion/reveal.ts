import { useEffect } from 'react'
import type { CSSProperties } from 'react'

/**
 * Entrada dos elementos: fade + subida curta, uma vez só, quando entram na tela.
 *
 * O elemento pede a animação com `data-reveal`. Quando aparece, ganha
 * `data-revealed` e o CSS faz a transição. Usamos um atributo (e não uma classe)
 * de propósito: o React reescreve `className` a cada render, mas não mexe em
 * atributos que não estão no JSX — então a animação não se repete sozinha,
 * por exemplo ao trocar o idioma.
 *
 * A checagem é feita com `getBoundingClientRect` num listener de scroll limitado
 * por rAF, e não com IntersectionObserver. Os dois dão o mesmo resultado visual,
 * mas este caminho é determinístico e testável — e, se algo der errado, o pior
 * caso é o conteúdo aparecer sem animação, nunca uma página em branco.
 */

const REDUCED_MOTION = '(prefers-reduced-motion: reduce)'

/** Equivale a um rootMargin de -8%: o elemento anima um pouco depois de entrar. */
const TRIGGER_RATIO = 0.92

export function prefersReducedMotion(): boolean {
  return typeof window !== 'undefined' && window.matchMedia(REDUCED_MOTION).matches
}

let started = false

/**
 * Liga o movimento no documento. Chamado antes do React renderizar, para não piscar.
 *
 * O estado escondido só existe enquanto `data-motion="on"` estiver no <html>.
 * Se o sistema de reveal não subir por algum motivo, tiramos o atributo: é melhor
 * o site aparecer sem animação nenhuma do que ficar invisível.
 */
export function enableMotion(): void {
  if (prefersReducedMotion()) return
  document.documentElement.dataset.motion = 'on'

  window.setTimeout(() => {
    if (!started) delete document.documentElement.dataset.motion
  }, 3000)
}

/** Atraso em cascata para itens de uma grade. */
export function revealDelay(ms: number): CSSProperties {
  return { '--reveal-delay': `${ms}ms` } as CSSProperties
}

function pending(): HTMLElement[] {
  return [...document.querySelectorAll<HTMLElement>('[data-reveal]:not([data-revealed])')]
}

function reveal(el: HTMLElement): void {
  el.dataset.revealed = ''
}

function isInView(el: HTMLElement, atPageBottom: boolean): boolean {
  const rect = el.getBoundingClientRect()

  // Elemento sem caixa (ainda não montado, ou escondido) fica para a próxima passada.
  if (rect.width === 0 && rect.height === 0) return false

  // No fim da página não sobra scroll: libera o que ainda estiver pendente.
  if (atPageBottom) return true

  return rect.top < window.innerHeight * TRIGGER_RATIO && rect.bottom > 0
}

/**
 * Uma passada: revela tudo que já está visível. Devolve quantos revelou.
 *
 * Fica exportada de propósito — é a costura que permite testar a lógica toda
 * sem depender de eventos de scroll.
 */
export function revealVisible(): number {
  const scroller = document.documentElement
  const atPageBottom = window.scrollY + window.innerHeight >= scroller.scrollHeight - 2

  let revealed = 0
  for (const el of pending()) {
    if (isInView(el, atPageBottom)) {
      reveal(el)
      revealed++
    }
  }
  return revealed
}

export function useRevealOnScroll(): void {
  useEffect(() => {
    // Sem movimento: tudo visível de uma vez, sem listeners.
    if (prefersReducedMotion()) {
      const revealAll = () => pending().forEach(reveal)
      revealAll()
      const mutations = new MutationObserver(revealAll)
      mutations.observe(document.body, { childList: true, subtree: true })
      return () => mutations.disconnect()
    }

    let frame = 0
    let stopped = false

    const check = () => {
      frame = 0
      if (!stopped) revealVisible()
    }

    const schedule = () => {
      if (frame || stopped) return
      frame = requestAnimationFrame(check)
    }

    started = true
    check()

    /*
     * A primeira passada acontece antes de fontes e imagens assentarem, e em
     * alguns contextos a janela ainda nem tem altura medida. Repetimos algumas
     * vezes no primeiro segundo para o conteúdo acima da dobra nunca ficar preso
     * invisível esperando um scroll que talvez não venha.
     */
    const retries = [120, 400, 1000].map((ms) => window.setTimeout(check, ms))
    window.addEventListener('load', check)

    window.addEventListener('scroll', schedule, { passive: true })
    window.addEventListener('resize', schedule)

    // Elementos que entram depois (menu mobile, resposta do FAQ) também entram na conta.
    const mutations = new MutationObserver(schedule)
    mutations.observe(document.body, { childList: true, subtree: true })

    return () => {
      stopped = true
      if (frame) cancelAnimationFrame(frame)
      retries.forEach(clearTimeout)
      mutations.disconnect()
      window.removeEventListener('load', check)
      window.removeEventListener('scroll', schedule)
      window.removeEventListener('resize', schedule)
    }
  }, [])
}
