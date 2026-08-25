import { useEffect, useId, useRef, useState } from 'react'
import { useI18n } from '../i18n/context'
import { LOCALES } from '../i18n/types'
import iconChevronLang from '../assets/icon-chevron-lang.svg'

export default function LanguageSwitcher() {
  const { locale, setLocale, t } = useI18n()
  const [open, setOpen] = useState(false)
  const wrapperRef = useRef<HTMLDivElement>(null)
  const buttonRef = useRef<HTMLButtonElement>(null)
  const menuId = useId()

  useEffect(() => {
    if (!open) return

    const onPointerDown = (event: PointerEvent) => {
      if (!wrapperRef.current?.contains(event.target as Node)) setOpen(false)
    }
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key !== 'Escape') return
      setOpen(false)
      buttonRef.current?.focus()
    }

    document.addEventListener('pointerdown', onPointerDown)
    document.addEventListener('keydown', onKeyDown)
    return () => {
      document.removeEventListener('pointerdown', onPointerDown)
      document.removeEventListener('keydown', onKeyDown)
    }
  }, [open])

  return (
    <div ref={wrapperRef} className="relative">
      <button
        ref={buttonRef}
        type="button"
        aria-label={t.language.switchLabel}
        aria-haspopup="true"
        aria-expanded={open}
        aria-controls={open ? menuId : undefined}
        onClick={() => setOpen((value) => !value)}
        className="flex items-center gap-1.5 rounded-[9px] border border-line bg-white px-2 py-[5px] transition-colors hover:bg-surface"
      >
        <span className="text-[12px] leading-[1.4] font-semibold text-body">
          {t.language.options[locale].short}
        </span>
        <img
          src={iconChevronLang}
          alt=""
          width={11}
          height={11}
          className={`size-[11px] transition-transform duration-200 ${open ? 'rotate-180' : ''}`}
        />
      </button>

      {open && (
        <ul
          id={menuId}
          role="menu"
          aria-label={t.language.switchLabel}
          className="absolute top-[calc(100%+8px)] left-0 z-10 min-w-[180px] rounded-[13px] border border-line bg-white p-1 shadow-raised"
        >
          {LOCALES.map((option) => {
            const active = option === locale
            return (
              <li key={option} role="none">
                <button
                  type="button"
                  role="menuitemradio"
                  aria-checked={active}
                  onClick={() => {
                    setLocale(option)
                    setOpen(false)
                    buttonRef.current?.focus()
                  }}
                  className={`flex w-full items-center justify-between gap-3 rounded-[9px] px-3 py-2 text-left text-[13.5px] leading-[1.4] transition-colors hover:bg-surface ${
                    active ? 'font-semibold text-ink' : 'text-body'
                  }`}
                >
                  <span>{t.language.options[option].label}</span>
                  <span className="flex w-[22px] shrink-0 justify-end">
                    <span className="text-[11px] font-bold tracking-[0.5px] text-muted">
                      {t.language.options[option].short}
                    </span>
                  </span>
                </button>
              </li>
            )
          })}
        </ul>
      )}
    </div>
  )
}
