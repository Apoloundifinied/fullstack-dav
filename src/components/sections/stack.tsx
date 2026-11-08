import Image from "next/image";
import { publicAsset } from "@/lib/public-asset";

const groups = [
  { title: "Linguagens", level: "", items: [["Python", "python"], ["JavaScript", "javascript"], ["TypeScript", "typescript"], ["Rust", "rust"], ["HTML5", "html5"], ["CSS3", "css3"]] },
  { title: "Frontend", level: "", items: [["React", "react"], ["Next.js", "nextjs"], ["Vue.js", "vuejs"], ["Vite", "vite"], ["Tailwind CSS", "tailwindcss"], ["Interfaces responsivas", ""], ["Aplicações web", ""]] },
  { title: "Backend", level: "", items: [["Node.js", "nodejs"], ["FastAPI", "fastapi"], ["Express.js", "express"], ["REST APIs", ""], ["Integrações", ""], ["Arquitetura de aplicações", ""]] },
  { title: "IA & MCP", level: "Foco em integrações", items: [["LLM Integration", ""], ["AI Agents", ""], ["AI APIs", ""], ["Model Context Protocol", "mcp"], ["Prompt Engineering", ""], ["Speech-to-Text", ""], ["Text-to-Speech", ""], ["Ferramentas com IA", ""]] },
  { title: "Automação", level: "", items: [["Python Automation", "python"], ["Selenium", "selenium"], ["Bash Scripting", ""], ["Bots", ""], ["Workflow Automation", ""], ["Web Scraping", ""], ["Integrações automatizadas", ""], ["Motores de automação", ""]] },
  { title: "Linux & infraestrutura", level: "", items: [["Linux · Arch · Fedora · Ubuntu", "linux"], ["Shell & terminal", ""], ["Git / GitHub", "git"], ["Docker", "docker"], ["SSH", ""], ["Deploy de aplicações", ""], ["Configuração de ambientes", ""], ["Troubleshooting", ""]] },
  { title: "Cibersegurança", level: "Em estudo", items: [["Pentesting", ""], ["OWASP Top 10", ""], ["Burp Suite", ""], ["SQL Injection · laboratórios", ""], ["Nmap", ""], ["Networking", ""], ["OSINT", ""], ["Web Security", ""]] },
  { title: "Design & edição", level: "", items: [["UI/UX Design", ""], ["Graphic Design", ""], ["Adobe Photoshop", "photoshop"], ["After Effects", "aftereffects"], ["CapCut", ""], ["Motion Design", "aftereffects"], ["Dynamic Video Editing", ""], ["Photo Manipulation", "photoshop"], ["Visual Identity", ""], ["Web Design", ""]] },
] as const;

function skillMark(name: string) {
  const words = name.replace(/[·/&]/g, " ").split(/\s+/).filter(Boolean);
  return (words.length > 1 ? words.map(word => word[0]).join("") : words[0]?.slice(0, 2) ?? "✳").slice(0, 3).toUpperCase();
}

export function Stack() {
  return <section id="stack" className="stack-section content-width"><p className="eyebrow">02 / Ferramentas & competências</p><h2 className="display-heading">STACK</h2><p className="stack-intro">Tecnologias, práticas e ferramentas que uso e estudo.</p><div className="stack-grid">{groups.map(group => <article className="stack-card" key={group.title}><div className="stack-card-heading"><h3>{group.title}</h3>{group.level && <span>{group.level}</span>}</div><ul>{group.items.map(([name, logo]) => <li key={name}><span className="stack-logo" aria-hidden="true">{logo ? <Image src={publicAsset(`/images/tech/${logo}.svg`)} alt="" width={18} height={18} /> : <span className="stack-mark">{skillMark(name)}</span>}</span><span>{name}</span></li>)}</ul></article>)}</div></section>;
}
