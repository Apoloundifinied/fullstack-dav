import { projects } from "@/data/portfolio";
import { Section } from "@/components/ui/section";
export function Projects() {
  return <Section id="projetos" label="01 / Desenvolvimento" title="Projetos em foco"><p className="section-intro">Seleção inicial de candidatos ao portfólio. Detalhes, status e materiais em validação.</p><div className="project-list">{projects.map((project, index) => <article key={project.slug} className="project"><span className="project-number">0{index + 1}</span><div><h3>{project.name}</h3><p>{project.description}</p><ul className="tags" aria-label="Tecnologias">{project.tags.map(tag => <li key={tag}>{tag}</li>)}</ul></div><div className="project-status"><span>{project.status}</span>{project.repository && <a href={project.repository}>Código ↗</a>}{project.demo && <a href={project.demo}>Demo ↗</a>}</div></article>)}</div></Section>;
}
