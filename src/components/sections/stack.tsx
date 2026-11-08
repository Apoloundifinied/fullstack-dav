import Image from "next/image";
import { publicAsset } from "@/lib/public-asset";

const groups = [
  { title: "Linguagens", level: "Intermediário–avançado", items: [["Python", "python"], ["JavaScript", "javascript"], ["TypeScript", "typescript"], ["Rust", "rust"], ["HTML5", "html5"], ["CSS3", "css3"]] },
  { title: "Frontend", level: "Intermediário–avançado", items: [["React", "react"], ["Next.js", "nextjs"], ["Vue.js", "vuejs"], ["Vite", "vite"], ["Tailwind CSS", "tailwindcss"], ["Interfaces responsivas", ""], ["Aplicações web", ""]] },
  { title: "Backend", level: "Intermediário–avançado", items: [["Node.js", "nodejs"], ["FastAPI", "fastapi"], ["Express.js", "express"], ["REST APIs", ""], ["Integrações", ""], ["Arquitetura de aplicações", ""]] },
  { title: "IA & MCP", level: "Integrações · intermediário–avançado", items: [["LLM Integration", ""], ["AI Agents", ""], ["AI APIs", ""], ["Model Context Protocol", ""], ["Prompt Engineering", ""], ["Speech-to-Text", ""], ["Text-to-Speech", ""], ["Ferramentas com IA", ""]] },
  { title: "Automação", level: "Intermediário–avançado", items: [["Python Automation", "python"], ["Selenium", "selenium"], ["Bash Scripting", ""], ["Bots", ""], ["Workflow Automation", ""], ["Web Scraping", ""], ["Integrações automatizadas", ""], ["Motores de automação", ""]] },
  { title: "Linux & infraestrutura", level: "Experiência prática", items: [["Linux · Arch · Fedora · Ubuntu", "linux"], ["Shell & terminal", ""], ["Git / GitHub", "git"], ["Docker", "docker"], ["SSH", ""], ["Deploy de aplicações", ""], ["Configuração de ambientes", ""], ["Troubleshooting", ""]] },
  { title: "Cibersegurança", level: "Em estudo", items: [["Pentesting", ""], ["OWASP Top 10", ""], ["Burp Suite", ""], ["SQL Injection · laboratórios", ""], ["Nmap", ""], ["Networking", ""], ["OSINT", ""], ["Web Security", ""]] },
  { title: "Design & edição", level: "Prática criativa", items: [["UI/UX Design", ""], ["Graphic Design", ""], ["Adobe Photoshop", "photoshop"], ["After Effects", "aftereffects"], ["CapCut", ""], ["Motion Design", "aftereffects"], ["Dynamic Video Editing", ""], ["Photo Manipulation", "photoshop"], ["Visual Identity", ""], ["Web Design", ""]] },
] as const;

export function Stack() {
  return <section id="stack" className="stack-section content-width"><p className="eyebrow">02 / Ferramentas & competências</p><h2 className="display-heading">STACK</h2><p className="stack-intro">Uma visão completa das tecnologias, práticas e ferramentas que uso e estudo.</p><div className="stack-grid">{groups.map(group => <article className="stack-card" key={group.title}><div className="stack-card-heading"><h3>{group.title}</h3><span>{group.level}</span></div><ul>{group.items.map(([name, logo]) => <li key={name}>{logo ? <Image src={publicAsset(`/images/tech/${logo}.svg`)} alt="" width={22} height={22} /> : <span className="stack-mark" aria-hidden="true">·</span>}<span>{name}</span></li>)}</ul></article>)}</div><p className="stack-note">MCP é uma área de foco e exploração; cibersegurança está em estudo. Experiência e proficiência são autodeclaradas.</p></section>;
}
