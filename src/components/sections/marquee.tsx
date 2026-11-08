const skills = ["FULL STACK", "AI INTEGRATIONS", "RUST", "AUTOMATION", "MCP", "MOTION DESIGN", "PYTHON", "PRODUCT BUILDING"];

export function Marquee() {
  return <div className="marquee" aria-label="Principais áreas de atuação"><div className="marquee-track">{[0, 1].map(copy => <div className="marquee-group" key={copy} aria-hidden={copy === 1}>{skills.map(skill => <span key={skill}>{skill}<b aria-hidden="true" /> </span>)}</div>)}</div></div>;
}
