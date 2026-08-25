import { Link } from 'react-router-dom'
import type { ProjectVisual } from '../content'
import type { ProjectCopy } from '../i18n/types'
import { revealDelay } from '../motion/reveal'

export default function ProjectCard({
  visual,
  copy,
  delay = 0,
}: {
  visual: ProjectVisual
  copy: ProjectCopy
  delay?: number
}) {
  const { art } = visual

  return (
    <Link
      to={`/projetos/${visual.slug}`}
      data-reveal
      style={revealDelay(delay)}
      className="group flex flex-col rounded-[18px] border border-line bg-white p-[13px] pb-1.5 shadow-card transition duration-200 hover:-translate-y-1 hover:shadow-raised sm:rounded-[22px]"
    >
      <div
        className="flex h-[220px] items-center justify-center overflow-hidden rounded-[14px] sm:h-[280px] lg:h-[344px]"
        style={{ background: visual.background }}
      >
        <img
          src={art.src}
          alt={copy.artAlt}
          width={art.width}
          height={art.height}
          loading="lazy"
          className="max-h-[80%] max-w-[85%] object-contain"
          style={{ width: art.width, height: art.height }}
        />
      </div>

      <div className="flex flex-col gap-3.5 px-[9px] pt-[18px] pb-5">
        <span className="text-[12.5px] leading-[1.4] w-fit rounded-pill border border-line bg-surface px-[13px] py-[5px] font-semibold text-body">
          {copy.tag}
        </span>
        <div className="flex flex-col gap-[9px]">
          <h3 className="text-card-title text-ink">{copy.title}</h3>
          <p className="text-card-body text-muted">{copy.description}</p>
        </div>
      </div>
    </Link>
  )
}
