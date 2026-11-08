"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { publicAsset } from "@/lib/public-asset";
import { projects } from "@/data/portfolio";
import type { Project } from "@/types/portfolio";

function ProjectDetails({ project, onClose }: { project: Project; onClose: () => void }) {
  const dialog = useRef<HTMLDialogElement>(null);
  useEffect(() => {
    const element = dialog.current;
    element?.showModal();
    return () => element?.close();
  }, []);
  return <dialog ref={dialog} className="project-dialog" aria-labelledby="project-dialog-title" onClose={onClose} onClick={e => { if (e.target === e.currentTarget) onClose(); }}>
    <div className="dialog-content"><button className="dialog-close" onClick={onClose}>Fechar</button><p className="eyebrow">{project.status}</p><h2 id="project-dialog-title">{project.name}</h2><p>{project.description}</p><ul className="tag-list">{project.tags.map(tag => <li key={tag}>{tag}</li>)}</ul>{project.details && <div className="project-note"><h3>Sobre o projeto</h3><p>{project.details}</p></div>}{project.screenshot && <figure className="project-screenshot"><Image src={publicAsset(project.screenshot)} alt={`Captura real do projeto ${project.name}`} width={1440} height={900} /><figcaption>Captura real do projeto</figcaption></figure>}{project.visualSample && <figure className="project-sample"><Image src={publicAsset(project.visualSample.src)} alt={project.visualSample.alt} width={480} height={480} /><figcaption>{project.visualSample.alt}</figcaption></figure>}<div className="dialog-links">{project.demo && <a className="text-link" href={project.demo} target="_blank" rel="noreferrer">Abrir demonstração ↗</a>}{project.repository && <a className="text-link" href={project.repository} target="_blank" rel="noreferrer">Ver código no GitHub ↗</a>}</div></div>
  </dialog>;
}

function ProjectCard({ project, index, onOpen }: {
  project: Project;
  index: number;
  onOpen: (project: Project) => void;
}) {
  return (
    <article className={`project-card project-${project.slug}`}>
      <button className="project-open" onClick={() => onOpen(project)} aria-label={`Ver detalhes de ${project.name}`}>
        <div className="project-image">
          <div className="project-cover-art">
            <Image src={publicAsset(project.cover)} alt={project.coverAlt ?? project.name} fill sizes="(max-width: 700px) 220px, 280px" />
          </div>
          <strong className="project-cover-name">{project.name}</strong>
          <span>{String(index + 1).padStart(2, "0")} / {project.status}</span>
        </div>
        <div className="project-copy">
          <h3>{project.name}</h3>
          <p>{project.description}</p>
          <ul className="project-tags">
            {project.tags.slice(0, 4).map(tag => <li key={tag}>{tag}</li>)}
          </ul>
          <span className="project-link">Explorar projeto ↗</span>
        </div>
      </button>
    </article>
  );
}

const featuredProjects = projects.filter(project => project.featured);
const labProjects = projects.filter(project => !project.featured);

export function Work() {
  const [project, setProject] = useState<Project | null>(null);

  return (
    <>
      <section id="projetos" className="work-section content-width" aria-labelledby="work-title">
        <p className="eyebrow">01 / Projetos em destaque</p>
        <div className="section-heading">
          <h2 id="work-title">Projetos</h2>
          <p>Produto, IA, infraestrutura e automação.<br /><a className="lab-jump" href="#laboratorio">Explorar laboratório ↓</a></p>
        </div>
        <div className="project-grid">
          {featuredProjects.map((item, index) => <ProjectCard key={item.slug} project={item} index={index} onOpen={setProject} />)}
        </div>
      </section>
      <section id="laboratorio" className="lab-section content-width" aria-labelledby="lab-title">
        <p className="eyebrow">Experimentos & exploração</p>
        <div className="section-heading">
          <h2 id="lab-title">Laboratório</h2>
          <p>Protótipos e projetos em desenvolvimento.</p>
        </div>
        <div className="project-grid">
          {labProjects.map((item, index) => <ProjectCard key={item.slug} project={item} index={index} onOpen={setProject} />)}
        </div>
      </section>
      {project && <ProjectDetails project={project} onClose={() => setProject(null)} />}
    </>
  );
}
