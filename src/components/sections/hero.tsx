import Image from "next/image";
import { publicAsset } from "@/lib/public-asset";

export function Hero() {
  return <section id="inicio" className="hero" aria-labelledby="hero-title">
    <div className="hero-heading"><p className="hero-kicker">FULL STACK · IA · AUTOMAÇÃO · MOTION</p><h1 id="hero-title">Robson</h1><p className="hero-description">Desenvolvedor que transforma ideias em software, automações e ferramentas com IA.</p><a className="hero-project-link" href="https://github.com/Apoloundifinied" target="_blank" rel="noreferrer">Ver projetos no GitHub ↗</a></div>
    <div className="hero-feature" aria-label="Prévia do projeto Blind MCP"><Image src={publicAsset("/images/projects/blind-mcp-screenshot.png")} alt="Prévia real da interface do Blind MCP" width={944} height={2048} priority sizes="(max-width: 700px) 90vw, 54vw" /><span>PROJETO EM FOCO · BLIND MCP</span></div>
    <div className="hero-status"><span className="status-pulse" /> RIO GRANDE DO SUL<br /><small>BRASIL · DESENVOLVIMENTO & CRIAÇÃO</small></div>
    <a className="scroll-cue" href="#projetos"><span aria-hidden="true">↓</span> Role para explorar</a>
  </section>;
}
