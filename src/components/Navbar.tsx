import { useEffect, useState } from 'react'
import type { ReactNode } from 'react'
import { Link, useLocation } from 'react-router-dom'
import LanguageSwitcher from './LanguageSwitcher'
import { BRAND } from '../content'
import { useI18n } from '../i18n/context'

/**
 * Na home as âncoras são links comuns e o Lenis cuida da rolagem suave.
 * Fora dela, viram navegação de volta para a home com a âncora na URL.
 */
function SectionLink({
  hash,
  className,
  onClick,
  children,
}: {
  hash: string
  className: string
  onClick?: () => void
  children: ReactNode
}) {
  const onHome = useLocation().pathname === '/'

  if (onHome) {
    return (
      <a href={hash} className={className} onClick={onClick}>
        {children}
      </a>
    )
  }
  return (
    <Link to={{ pathname: '/', hash }} className={className} onClick={onClick}>
      {children}
    </Link>
  )
}

export default function Navbar() {
  const { t } = useI18n()
  const [open, setOpen] = useState(false)

  // O menu mobile não existe no Figma — fecha no Escape para não prender o teclado.
  useEffect(() => {
    if (!open) return
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setOpen(false)
    }
    document.addEventListener('keydown', onKeyDown)
    return () => document.removeEventListener('keydown', onKeyDown)
  }, [open])

  return (
    <div className="relative z-30 px-6">
      {/* Mesmo raio do painel do hero, para as duas peças combinarem. */}
      <nav
        aria-label={t.nav.ariaLabel}
        className="rounded-[28px] bg-white/70 shadow-bar backdrop-blur-[7px] sm:rounded-[40px]"
      >
        <div className="mx-auto w-full max-w-[1180px] px-6">
          <div className="flex h-20 items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <SectionLink
                hash="#topo"
                className="text-[15px] leading-[1.1] font-extrabold tracking-[-0.3px] text-ink"
              >
                {BRAND[0]}
                <br />
                {BRAND[1]}
              </SectionLink>
              <LanguageSwitcher />
            </div>

            <ul className="hidden items-center gap-[30px] md:flex">
              {t.nav.links.map((link) => (
                <li key={link.href}>
                  {/*
                    Sublinhado que cresce da esquerda para a direita: uma barra
                    de largura total com scale-x 0, ancorada à esquerda.
                  */}
                  <SectionLink
                    hash={link.href}
                    className="text-nav relative inline-block font-medium text-body transition-colors after:absolute after:-bottom-0.5 after:left-0 after:h-px after:w-full after:origin-left after:scale-x-0 after:bg-ink after:transition-transform after:duration-300 after:ease-out after:content-[''] hover:text-ink hover:after:scale-x-100"
                  >
                    {link.label}
                  </SectionLink>
                </li>
              ))}
              <li>
                <SectionLink
                  hash={t.nav.cta.href}
                  className="text-nav inline-flex items-center justify-center rounded-pill bg-ink px-[26px] py-3 font-semibold text-white transition-opacity hover:opacity-85"
                >
                  {t.nav.cta.label}
                </SectionLink>
              </li>
            </ul>

            <button
              type="button"
              aria-expanded={open}
              aria-controls="menu-mobile"
              aria-label={open ? t.nav.closeMenu : t.nav.openMenu}
              onClick={() => setOpen((value) => !value)}
              className="flex size-11 shrink-0 flex-col items-center justify-center gap-[5px] rounded-[13px] border border-line md:hidden"
            >
              <span
                className={`block h-[1.5px] w-4 rounded bg-ink transition-transform ${
                  open ? 'translate-y-[6.5px] rotate-45' : ''
                }`}
              />
              <span className={`block h-[1.5px] w-4 rounded bg-ink transition-opacity ${open ? 'opacity-0' : ''}`} />
              <span
                className={`block h-[1.5px] w-4 rounded bg-ink transition-transform ${
                  open ? '-translate-y-[6.5px] -rotate-45' : ''
                }`}
              />
            </button>
          </div>

          {/* pb-6 mantém o último item dentro do canto arredondado da barra. */}
          {open && (
            <ul id="menu-mobile" className="mt-4 flex flex-col gap-1 border-t border-line pt-4 pb-6 md:hidden">
              {t.nav.links.map((link) => (
                <li key={link.href}>
                  <SectionLink
                    hash={link.href}
                    onClick={() => setOpen(false)}
                    className="text-nav block rounded-[11px] px-3 py-2.5 font-medium text-body hover:bg-surface"
                  >
                    {link.label}
                  </SectionLink>
                </li>
              ))}
              <li className="mt-1">
                <SectionLink
                  hash={t.nav.cta.href}
                  onClick={() => setOpen(false)}
                  className="text-nav block rounded-pill bg-ink px-[26px] py-3 text-center font-semibold text-white"
                >
                  {t.nav.cta.label}
                </SectionLink>
              </li>
            </ul>
          )}
        </div>
      </nav>
    </div>
  )
}
