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
    <div className="dialog-content"><button className="dialog-close" onClick={onClose}>Fechar</button><p className="eyebrow">{project.status}</p><h2 id="project-dialog-title">{project.name}</h2><p>{project.description}</p><ul className="tag-list">{project.tags.map(tag => <li key={tag}>{tag}</li>)}</ul>{project.details && <div className="project-note"><h3>Sobre o projeto</h3><p>{project.details}</p></div>}{project.visualSample && <figure className="project-sample"><Image src={publicAsset(project.visualSample.src)} alt={project.visualSample.alt} width={480} height={480} /><figcaption>{project.visualSample.alt}</figcaption></figure>}<div className="dialog-links">{project.demo && <a className="text-link" href={project.demo} target="_blank" rel="noreferrer">Abrir demonstração ↗</a>}{project.repository && <a className="text-link" href={project.repository} target="_blank" rel="noreferrer">Ver código no GitHub ↗</a>}</div></div>
  </dialog>;
}

export function Work() {
  const [project, setProject] = useState<Project | null>(null);
  return <section id="projetos" className="work-section content-width" aria-labelledby="work-title"><p className="eyebrow">01 / Trabalho selecionado</p><div className="section-heading"><h2 id="work-title">Projetos</h2><p>Software, automação e ferramentas em construção.</p></div><div className="project-grid">{projects.map((item, index) => <article key={item.slug} className={`project-card project-${item.slug}`}><button className="project-open" onClick={() => setProject(item)} aria-label={`Ver detalhes de ${item.name}`}><div className="project-image"><Image src={publicAsset(item.cover)} alt={item.coverAlt ?? item.name} fill sizes="(max-width: 700px) 100vw, 50vw" /><span>{String(index + 1).padStart(2, "0")} / {item.status}</span></div><div className="project-copy"><h3>{item.name}</h3><p>{item.description}</p><ul className="project-tags">{item.tags.slice(0, 4).map(tag => <li key={tag}>{tag}</li>)}</ul><span className="project-link">Explorar projeto ↗</span></div></button></article>)}</div>{project && <ProjectDetails project={project} onClose={() => setProject(null)} />}</section>;
}
