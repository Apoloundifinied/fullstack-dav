import Image from "next/image";
import { publicAsset } from "@/lib/public-asset";
export function Creative() {
  const items = [
    { number: "01", title: "Foto & composição", tool: "Adobe Photoshop", id: "photoshop", body: "Edição de imagens e composição visual. Uma seleção de trabalhos reais será adicionada aqui." },
    { number: "02", title: "Edição dinâmica", tool: "CapCut · After Effects", id: "aftereffects", body: "Edição de vídeo com ritmo e atenção à narrativa. Trechos e vídeos autorizados serão reunidos nesta seleção." },
    { number: "03", title: "Motion design", tool: "Adobe After Effects", id: "aftereffects", body: "Movimento como parte da comunicação visual. Trabalhos e técnicas utilizadas serão apresentados com os materiais." },
  ];
  return <section id="motion" className="creative-section content-width"><p className="eyebrow">Além do código</p><h2 className="display-heading">IMAGEM<br />& MOTION</h2><p className="creative-intro">A mesma curiosidade, outra linguagem.<br />Foto, vídeo e ideias em movimento.</p><div className="creative-list">{items.map(item => <details key={item.number}><summary><span className="row-number">{item.number}</span><h3>{item.title}</h3><Image src={publicAsset(`/images/tech/${item.id}.svg`)} alt="" width={38} height={38} /><span className="creative-tool">{item.tool}</span><span className="details-label">Explorar</span></summary><div className="creative-detail"><p>{item.body}</p><span>Seleção de trabalhos em preparação</span></div></details>)}</div></section>;
}
