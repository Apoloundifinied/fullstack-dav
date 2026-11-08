export type Project = {
  slug: string;
  name: string;
  description: string;
  cover: string;
  tags: string[];
  status: "A confirmar" | "Conceito" | "Protótipo" | "Em desenvolvimento" | "Concluído" | "Produção";
  coverLabel?: string;
  coverAlt?: string;
  details?: string;
  visualSample?: { src: string; alt: string };
  repository?: string;
  demo?: string;
};
export type CreativeWork = {
  title: string;
  tools: string[];
  description: string;
  media?: string;
};
