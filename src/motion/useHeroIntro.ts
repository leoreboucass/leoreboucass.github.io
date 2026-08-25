import { useEffect, useState } from 'react'
import { prefersReducedMotion } from './reveal'

/**
 * Entrada do hero em máquina de escrever.
 *
 * Os tempos vieram de medição quadro a quadro (60fps) do vídeo de referência:
 *
 *   cursor aparece
 *   "Oi," digitado          ~39ms por caractere
 *   pausa                    400ms
 *   foto entra               350ms
 *   pausa                    283ms
 *   "eu sou o Leo!" digitado ~44ms por caractere
 */
const CHAR_MS = 42
const CARET_LEAD_MS = 260
const PAUSE_BEFORE_PHOTO = 400
const PHOTO_MS = 350
const PAUSE_BEFORE_PART2 = 283
const CARET_LINGER_MS = 700

export type HeroIntro = {
  typedBefore: string
  typedAfter: string
  photoIn: boolean
  caret: boolean
  /** Vira `true` quando a última letra é digitada — libera a seta de rolagem. */
  done: boolean
}

export function useHeroIntro(before: string, after: string): HeroIntro {
  const [state, setState] = useState<HeroIntro>(() =>
    prefersReducedMotion()
      ? { typedBefore: before, typedAfter: after, photoIn: true, caret: false, done: true }
      : { typedBefore: '', typedAfter: '', photoIn: false, caret: false, done: false },
  )

  useEffect(() => {
    if (prefersReducedMotion()) {
      setState({ typedBefore: before, typedAfter: after, photoIn: true, caret: false, done: true })
      return
    }

    // Ao trocar de idioma o texto muda: a sequência recomeça do zero.
    setState({ typedBefore: '', typedAfter: '', photoIn: false, caret: false, done: false })

    const timers: number[] = []
    const at = (ms: number, fn: () => void) => timers.push(window.setTimeout(fn, ms))

    let clock = CARET_LEAD_MS
    at(clock, () => setState((s) => ({ ...s, caret: true })))

    clock += 60
    for (let i = 1; i <= before.length; i++) {
      const slice = before.slice(0, i)
      at(clock, () => setState((s) => ({ ...s, typedBefore: slice })))
      clock += CHAR_MS
    }

    clock += PAUSE_BEFORE_PHOTO
    at(clock, () => setState((s) => ({ ...s, photoIn: true })))

    clock += PHOTO_MS + PAUSE_BEFORE_PART2
    for (let i = 1; i <= after.length; i++) {
      const slice = after.slice(0, i)
      at(clock, () => setState((s) => ({ ...s, typedAfter: slice })))
      clock += CHAR_MS
    }

    at(clock, () => setState((s) => ({ ...s, done: true })))
    at(clock + CARET_LINGER_MS, () => setState((s) => ({ ...s, caret: false })))

    return () => timers.forEach(clearTimeout)
  }, [before, after])

  return state
}

export const PHOTO_IN_MS = PHOTO_MS
