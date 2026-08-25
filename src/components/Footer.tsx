import Container from './Container'
import { useI18n } from '../i18n/context'

export default function Footer() {
  const { t } = useI18n()

  return (
    <footer className="pb-[60px]">
      <Container>
        <div data-reveal className="flex flex-col items-center gap-1">
          <div className="flex size-11 items-center justify-center rounded-[13px] bg-ink">
            <span className="text-[15px] leading-[1.4] font-extrabold tracking-[-0.6px] text-white">
              {t.footer.monogram}
            </span>
          </div>
          <div className="h-3" />
          <p className="text-[16px] leading-[1.4] font-extrabold tracking-[-0.32px] text-ink">{t.footer.name}</p>
        </div>
      </Container>
    </footer>
  )
}
