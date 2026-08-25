import { Link, useParams } from 'react-router-dom'
import Container from '../components/Container'
import { projectById, projectBySlug } from '../content'
import { useI18n } from '../i18n/context'
import { revealDelay } from '../motion/reveal'
import iconArrowRight from '../assets/icon-arrow-right.svg'

function NotFound() {
  const { t } = useI18n()
  return (
    <Container className="py-[120px]">
      <h1 className="text-h2 text-ink">{t.projectPage.notFound.title}</h1>
      <p className="text-lead mt-4 max-w-[520px] text-muted">{t.projectPage.notFound.lead}</p>
      <Link to="/" className="text-nav mt-8 inline-flex items-center gap-2 font-bold text-accent hover:underline">
        {t.projectPage.notFound.back}
      </Link>
    </Container>
  )
}

export default function ProjectPage() {
  const { slug } = useParams()
  const { t } = useI18n()
  const visual = slug ? projectBySlug(slug) : undefined

  if (!visual) return <NotFound />

  const copy = t.projects[visual.id]
  const page = t.projectPages[visual.id]
  const next = projectById(visual.next)
  const nextCopy = t.projects[next.id]

  const meta = [
    { label: t.projectPage.category, value: page.category },
    { label: t.projectPage.role, value: page.role },
    { label: t.projectPage.year, value: visual.year },
  ]

  return (
    <>
      <Container className="pt-16 pb-[70px] lg:pb-[90px]">
        {/* A coluna de conteúdo é mais estreita que a barra de navegação, como no design. */}
        <div className="mx-auto w-full max-w-[1000px]">
          <Link
            to="/"
            data-reveal
            className="inline-flex items-center gap-2 text-[14.5px] leading-[1.4] text-body transition-colors hover:text-ink"
          >
            <span aria-hidden="true" className="text-[17px] leading-none">
              &lsaquo;
            </span>
            {t.projectPage.back}
          </Link>

          <h1 data-reveal style={revealDelay(60)} className="text-project mt-5 text-ink">
            {copy.title}
          </h1>

          {/* Sem vão entre os parágrafos: nas imagens de referência eles correm seguidos. */}
          <div className="mt-7 flex flex-col">
            {page.description.map((paragraph, index) => (
              <p
                key={paragraph.slice(0, 24)}
                data-reveal
                style={revealDelay(120 + index * 60)}
                className="text-[15.4px] leading-[1.72] text-body"
              >
                {paragraph}
              </p>
            ))}
          </div>

          <dl data-reveal style={revealDelay(120)} className="mt-11 flex flex-wrap items-end gap-x-6 gap-y-4">
            {meta.map((item, index) => (
              <div key={item.label} className="flex items-end gap-6">
                {index > 0 && (
                  <span aria-hidden="true" className="text-[18px] leading-[1.6] text-line">
                    /
                  </span>
                )}
                <div className="flex flex-col gap-1.5">
                  <dt className="text-[13px] leading-[1.4] text-muted">{item.label}</dt>
                  <dd className="text-[16px] leading-[1.4] font-medium text-ink">{item.value}</dd>
                </div>
              </div>
            ))}
          </dl>

          <figure data-reveal style={revealDelay(60)} className="mt-10">
            {/* A imagem define a própria proporção — trocar por outra de formato diferente continua funcionando. */}
            {visual.cover ? (
              <img
                src={visual.cover.src}
                alt={page.coverAlt}
                width={visual.cover.width}
                height={visual.cover.height}
                className="h-auto w-full rounded-[14px]"
              />
            ) : (
              /* Sem captura própria ainda: reusa a arte do card sobre o mesmo fundo. */
              <div
                className="flex aspect-[1000/620] items-center justify-center overflow-hidden rounded-[14px]"
                style={{ background: visual.background }}
              >
                <img
                  src={visual.art.src}
                  alt={page.coverAlt}
                  width={visual.art.width}
                  height={visual.art.height}
                  className="max-h-[62%] w-[58%] max-w-[580px] object-contain"
                />
              </div>
            )}
            {page.imageCaption && (
              <figcaption className="mt-3 text-[13.5px] leading-[1.5] text-muted">{page.imageCaption}</figcaption>
            )}
          </figure>

          <hr data-reveal className="mt-[70px] border-0 border-t border-line" />

          <div data-reveal style={revealDelay(60)} className="mt-8 flex flex-wrap items-end justify-between gap-6">
            <div className="flex flex-col gap-1.5">
              <p className="text-[13.5px] leading-[1.4] text-muted">{t.projectPage.next}</p>
              <p className="text-[20px] leading-[1.3] font-extrabold tracking-[-0.2px] text-ink">{nextCopy.title}</p>
            </div>
            <Link
              to={`/projetos/${next.slug}`}
              className="text-nav inline-flex items-center gap-2 font-bold text-accent hover:underline"
            >
              {t.projectPage.view}
              <img src={iconArrowRight} alt="" width={13} height={13} className="size-[13px]" />
            </Link>
          </div>
        </div>
      </Container>
    </>
  )
}
