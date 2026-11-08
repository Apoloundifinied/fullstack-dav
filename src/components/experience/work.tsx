"use client";
import Image from "next/image";
import { publicAsset } from "@/lib/public-asset";
import { useEffect, useRef, useState, type CSSProperties } from "react";
import { projects } from "@/data/portfolio";
import type { Project } from "@/types/portfolio";
import { useProgress, clamp } from "./use-progress";

function ProjectDetails({ project, onClose }: { project: Project; onClose: () => void }) {
  const dialog = useRef<HTMLDialogElement>(null);
  useEffect(() => {
    const element = dialog.current;
    const old = document.body.style.overflow;
    element?.showModal();
    document.body.style.overflow = "hidden";
    return () => { element?.close(); document.body.style.overflow = old; };
  }, []);
  return <dialog ref={dialog} className="project-dialog" aria-labelledby="project-dialog-title" onClose={onClose} onClick={e => { if (e.target === e.currentTarget) onClose(); }}>
    <div className="dialog-content">
      <button className="dialog-close" onClick={onClose}>Fechar</button>
      <p className="eyebrow">Projeto / {project.status}</p>
      <h2 id="project-dialog-title">{project.name}</h2>
      <p>{project.description}</p>
      <ul className="tag-list">{project.tags.map(tag => <li key={tag}>{tag}</li>)}</ul>
      {project.details && <div className="project-note"><h3>Sobre o projeto</h3><p>{project.details}</p></div>}
      {project.visualSample && (
        <figure className="project-sample">
          <Image src={publicAsset(project.visualSample.src)} alt={project.visualSample.alt} width={480} height={480} />
          <figcaption>{project.visualSample.alt}</figcaption>
        </figure>
      )}
      {project.repository && <a className="text-link" href={project.repository}>Ver código no GitHub</a>}
      {project.demo && <a className="text-link" href={project.demo}>Abrir demonstração</a>}
    </div>
  </dialog>;
}

export function Work() {
  const root = useRef<HTMLElement>(null);
  const { progress, reduced } = useProgress(root);
  const [manual, setManual] = useState(0);
  const [project, setProject] = useState<Project | null>(null);
  const start = useRef<number | null>(null);
  const swiped = useRef(false);
  const position = reduced ? manual : progress * (projects.length - 1);
  const active = Math.round(position);
  const go = (index: number) => {
    const target = Math.round(clamp(index, 0, projects.length - 1));
    if (reduced) { setManual(target); return; }
    if (!root.current) return;
    const box = root.current.getBoundingClientRect();
    const stageHeight = root.current.firstElementChild?.clientHeight ?? document.documentElement.clientHeight;
    window.scrollTo({ top: window.scrollY + box.top + Math.max(1, box.height - stageHeight) * target / (projects.length - 1), behavior: "smooth" });
  };
  return <><section ref={root} id="projetos" className="work-journey" aria-labelledby="work-title">
    <div className="work-stage">
      <div className="work-heading"><h2 id="work-title" className="display-heading">PROJETOS</h2><p>Interfaces de jogo, ferramentas visuais<br />e desenvolvimento de software.</p></div>
      <div className="work-carousel" tabIndex={0} role="region" aria-roledescription="carrossel" aria-label="Projetos selecionados" onDragStart={e => e.preventDefault()}
        onKeyDown={e => { if (e.key === "ArrowLeft" || e.key === "ArrowRight") { e.preventDefault(); go(active + (e.key === "ArrowRight" ? 1 : -1)); } }}
        onPointerDown={e => { start.current = e.clientX; swiped.current = false; }} onPointerUp={e => { if (start.current !== null && Math.abs(start.current - e.clientX) > 40) { swiped.current = true; go(active + (e.clientX < start.current ? 1 : -1)); } start.current = null; }} onPointerCancel={() => { start.current = null; }}>
        {projects.map((item, index) => {
          const delta = index - position;
          return <article key={item.slug} className={`work-card work-${item.slug}`} style={{ "--distance": delta, "--arc-y": `${delta * delta * 48}px`, "--arc-angle": `${delta * 13}deg`, zIndex: 5 - Math.round(Math.abs(delta)) } as CSSProperties} aria-label={`${index + 1} de ${projects.length}: ${item.name}`}>
            <button className="work-open" onClick={() => { if (!swiped.current) setProject(item); }} aria-label={`Ver detalhes de ${item.name}`}><div className="work-art"><Image src={publicAsset(item.cover)} alt={item.coverAlt ?? item.name} draggable={false} fill sizes="(max-width: 700px) 80vw, 42vw" /><span>{item.coverLabel ?? "Capa do projeto"}</span></div><div className="work-caption"><div><h3>{item.name}</h3><p>{item.description}</p></div><span className="work-action">Ver projeto</span></div></button>
          </article>;
        })}
      </div>
      <div className="work-controls"><button onClick={() => go(active - 1)} disabled={active === 0}>Anterior</button><div className="work-dots" aria-label="Escolher projeto">{projects.map((item, index) => <button key={item.slug} onClick={() => go(index)} aria-label={`Ir para ${item.name}`} aria-current={active === index ? "true" : undefined}><span>{String(index + 1).padStart(2, "0")}</span></button>)}</div><button onClick={() => go(active + 1)} disabled={active === projects.length - 1}>Próximo</button></div>
    </div>
  </section>{project && <ProjectDetails project={project} onClose={() => setProject(null)} />}</>;
}
