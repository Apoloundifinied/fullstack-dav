import Image from "next/image";
import { notFound } from "next/navigation";
import { projects } from "@/data/portfolio";
import { publicAsset } from "@/lib/public-asset";
import { pageMetadata, siteUrl } from "@/lib/seo";
import { ThemeToggle } from "@/components/theme-toggle";

type Props = { params: Promise<{ slug: string }> };
export const dynamicParams = false;
export function generateStaticParams() {
  return projects.filter(project => project.featured).map(({ slug }) => ({ slug }));
}
function getProject(slug: string) {
  const project = projects.find(item => item.slug === slug && item.featured);
  if (!project) notFound();
  return project;
}
export async function generateMetadata({ params }: Props) {
  const project = getProject((await params).slug);
  return pageMetadata(`${project.name} | Projeto de Robson`, project.description, `projetos/${project.slug}/`);
}
export default async function ProjectPage({ params }: Props) {
  const project = getProject((await params).slug);
  const schema = { "@context": "https://schema.org", "@type": "CreativeWork", name: project.name, description: project.description, url: `${siteUrl}projetos/${project.slug}/`, keywords: project.tags.join(", "), ...(project.screenshot ? { image: `${siteUrl}${project.screenshot.slice(1)}` } : {}) };
  return <>
    <a className="skip-link" href="#conteudo">Pular para o conteúdo</a>
    <div className="case-nav"><a href={publicAsset("/#projetos")}>← Portfólio de Robson</a><ThemeToggle /></div>
    <main id="conteudo" className="case-page">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema).replace(/</g, "\\u003c") }} />
      <p className="eyebrow">Projeto em destaque · {project.status}</p>
      <h1>{project.name}</h1>
      <p className="case-intro">{project.description}</p>
      <section aria-labelledby="implementation"><h2 id="implementation">O que foi construído</h2><p>{project.details}</p></section>
      <section aria-labelledby="technologies"><h2 id="technologies">Tecnologias e recursos</h2><ul className="tag-list">{project.tags.map(tag => <li key={tag}>{tag}</li>)}</ul></section>
      {project.screenshot && <figure className="case-image"><Image src={publicAsset(project.screenshot)} width={project.slug === "blind-mcp" ? 944 : 1440} height={project.slug === "blind-mcp" ? 2048 : 900} alt={`Captura real da interface de ${project.name}`} /><figcaption>Interface de {project.name} · captura real do projeto</figcaption></figure>}
      <div className="dialog-links">{project.demo && <a className="text-link" href={project.demo}>Abrir demonstração ↗</a>}{project.repository && <a className="text-link" href={project.repository}>Ver código no GitHub ↗</a>}</div>
      <aside className="case-related"><h2>Outros projetos</h2>{projects.filter(item => item.featured && item.slug !== project.slug).map(item => <a key={item.slug} href={publicAsset(`/projetos/${item.slug}/`)}>{item.name} ↗</a>)}</aside>
    </main>
  </>;
}
