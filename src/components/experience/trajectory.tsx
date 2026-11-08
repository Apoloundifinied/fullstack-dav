import { specialties } from "@/data/portfolio";
export function Trajectory() {
  const rows = [
    { title: "Desenvolvimento", label: "Full Stack / Backend / Automação", text: "Mais de quatro anos estudando programação, com projetos próprios e trabalhos freelance. Aplicações, APIs e ferramentas para resolver problemas práticos.", stack: specialties[0].items.concat(["Rust", "Python"]).join(" · ") },
    { title: "IA & ferramentas", label: "Integrações / Agentes / MCP", text: "Interesse em conectar modelos de linguagem, sistemas e ferramentas. Integrações de IA e voz fazem parte dos projetos candidatos; MCP é uma área de foco e exploração.", stack: "APIs de IA · FastAPI · STT / TTS · Linux · Docker" },
    { title: "Game dev", label: "Prototipagem / UI de jogo / 2D", text: "No protótipo Mutant Factory, trabalhei com HUD e inventário, coleta de recursos, economia e progressão. O projeto inclui cards de criaturas e ícones 2D.", stack: "Roblox Studio · Luau · HUD e menus · Economia de jogo · Arte conceitual 2D" },
    { title: "Criação visual", label: "Foto / Vídeo / Motion", text: "Edição de foto e vídeo, edição dinâmica e motion design. Uma prática criativa que acompanha o desenvolvimento de software.", stack: "Adobe Photoshop · CapCut · Adobe After Effects" },
  ];
  return <section id="especialidades" className="trajectory content-width"><h2 className="display-heading">TRAJETÓRIA</h2><div className="trajectory-list">{rows.map((row, index) => <article key={row.title}><span className="row-number">0{index + 1}</span><div className="trajectory-title"><h3>{row.title}</h3><p>{row.label}</p></div><div className="trajectory-body"><p>{row.text}</p><p className="trajectory-stack">{row.stack}</p></div></article>)}</div></section>;
}
