import { useEffect } from 'react'
import Lenis from 'lenis'
import { prefersReducedMotion } from './reveal'

/** Respiro acima da seção ao seguir uma âncora. A barra do topo não é fixa, então não precisa compensá-la. */
export const ANCHOR_OFFSET = -24

let instance: Lenis | null = null

/** O Lenis controla a rolagem; quem precisar mover a página deve passar por ele. */
export const getLenis = () => instance

/**
 * Scroll suave com inércia (Lenis).
 *
 * O Lenis desliga o `scroll-behavior: smooth` nativo, então os links âncora
 * passam a ser instantâneos — por isso interceptamos os cliques e devolvemos
 * a rolagem para ele, respeitando o espaço da barra fixa.
 */
export function useSmoothScroll(): void {
  useEffect(() => {
    if (prefersReducedMotion()) return

    const lenis = new Lenis({
      // Rolagem longa e macia: quanto maior a duração, mais ela desliza depois do gesto.
      duration: 1.7,
      // Ease-out exponencial suave: começa firme e assenta bem devagar no fim.
      easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -9 * t)),
      // Um pouco menos de deslocamento por giro da roda, para o movimento não pular.
      wheelMultiplier: 0.9,
    })
    instance = lenis

    let frame = requestAnimationFrame(function loop(time: number) {
      lenis.raf(time)
      frame = requestAnimationFrame(loop)
    })

    const onClick = (event: MouseEvent) => {
      if (event.defaultPrevented || event.button !== 0 || event.metaKey || event.ctrlKey) return

      const anchor = (event.target as Element | null)?.closest?.('a[href^="#"]')
      if (!(anchor instanceof HTMLAnchorElement)) return

      const id = anchor.getAttribute('href')
      if (!id || id === '#') return

      const target = document.querySelector(id)
      if (!target) return

      event.preventDefault()
      lenis.scrollTo(target as HTMLElement, { offset: ANCHOR_OFFSET })
      history.replaceState(null, '', id)
    }

    document.addEventListener('click', onClick)

    return () => {
      document.removeEventListener('click', onClick)
      cancelAnimationFrame(frame)
      lenis.destroy()
      instance = null
    }
  }, [])
}
