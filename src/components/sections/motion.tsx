import { creativeWorks } from "@/data/portfolio";
import { Section } from "@/components/ui/section";
export function Motion() {
  return <Section id="motion" label="03 / Criação visual" title="Imagem & Motion"><p className="section-intro">Edição de foto e vídeo, edição dinâmica e motion design.</p><div className="grid">{creativeWorks.map(work => <article className="panel" key={work.title}><div className="media-placeholder">Material a adicionar</div><h3>{work.title}</h3><p>{work.description}</p><ul className="tags" aria-label="Ferramentas">{work.tools.map(tool => <li key={tool}>{tool}</li>)}</ul></article>)}</div></Section>;
}
