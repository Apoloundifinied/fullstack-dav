export function Hero() {
  return (
    <section id="inicio" className="hero" aria-labelledby="hero-title">
      <div className="hero-heading">
        <p className="hero-kicker">FULL STACK · IA · AUTOMAÇÃO · MOTION</p>
        <h1 id="hero-title">Robson</h1>
        <p className="hero-description">
          Desenvolvedor que transforma ideias em software, automações e ferramentas com IA.
        </p>
        <a className="hero-project-link" href="https://github.com/Apoloundifinied" target="_blank" rel="noreferrer">
          Ver projetos no GitHub ↗
        </a>
      </div>
      <a className="hero-feature feature-preview" href="https://blind-mcp.vercel.app/" target="_blank" rel="noreferrer" aria-label="Abrir Blind MCP, projeto em foco">
        <div className="feature-title">
          <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <path d="m12 2 10 10-10 10L2 12Z" stroke="currentColor" strokeWidth="1.5" />
          </svg>
          Blind MCP
        </div>
        <div className="feature-steps" aria-label="Etapas da prévia">
          <span className="feature-step feature-step-active">01 Hipótese</span>
          <span className="feature-step">02 Evidências</span>
          <span className="feature-step">03 Protocolo</span>
        </div>
        <p className="feature-case">Caso Aprova · rascunho de referência</p>
        <div className="feature-fields">
          <span>Seu produto</span>
          <span>Fluxo de referência</span>
        </div>
        <span className="feature-badge">PROJETO EM FOCO · BLIND MCP ↗</span>
      </a>
      <div className="hero-status">
        <span className="status-pulse" /> RIO GRANDE DO SUL<br />
        <small>BRASIL · DESENVOLVIMENTO & CRIAÇÃO</small>
      </div>
      <a className="scroll-cue" href="#projetos"><span aria-hidden="true">↓</span> Role para explorar</a>
    </section>
  );
}
