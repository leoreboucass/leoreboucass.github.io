import Container from './Container'
import ProjectCard from './ProjectCard'
import SectionHeading from './SectionHeading'
import { projectVisuals } from '../content'
import { useI18n } from '../i18n/context'

export default function Projects() {
  const { t } = useI18n()

  return (
    <section id="projetos" className="py-[70px] lg:py-[110px]">
      <Container>
        <SectionHeading
          eyebrow={t.projectsSection.eyebrow}
          title={t.projectsSection.title}
          lead={t.projectsSection.lead}
          leadClassName="w-[720px]"
        />

        <div className="mt-11 grid gap-[26px] md:grid-cols-2">
          {projectVisuals.map((visual, index) => (
            <ProjectCard
              key={visual.id}
              visual={visual}
              copy={t.projects[visual.id]}
              // Cascata por linha: as duas colunas da mesma linha entram quase juntas.
              delay={(index % 2) * 90}
            />
          ))}
        </div>
      </Container>
    </section>
  )
}
