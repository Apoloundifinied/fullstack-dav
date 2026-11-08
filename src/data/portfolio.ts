import type { CreativeWork, Project } from "@/types/portfolio";

// Fonte editorial: skillrobson.md. Preencher somente com dados confirmados.
export const profile = {
  name: "Robson",
  location: "Rio Grande do Sul, Brasil",
  headline: "Software, automação e criação visual.",
  description: "Desenvolvimento Full Stack, ferramentas e integrações com IA. Também trabalho com edição de foto, vídeo e motion design.",
  email: null as string | null,
  github: "https://github.com/Apoloundifinied",
  linkedin: null as string | null,
};

export const projects: Project[] = [
  {
    slug: "aprova",
    featured: true,
    name: "Aprova",
    description: "Plataforma de revisão de entregas criativas com feedback e aprovação por versão.",
    cover: "/images/projects/covers/aprova.webp",
    coverLabel: "Ilustração autoral",
    coverAlt: "Capa ilustrada de aprova: gravura sobre fundo colorido",
    screenshot: "/images/projects/aprova.png",

    tags: ["Next.js", "TypeScript", "Supabase", "GSAP", "UI/UX"],
    status: "Produção",
    details: "O freelancer compartilha uma entrega por link. O cliente pede ajustes e aprova a versão certa sem criar uma conta. A landing demonstra esse fluxo com uma prévia 3D interativa e transições em GSAP.",
    repository: "https://github.com/Apoloundifinied/aprova",
    demo: "https://aprova-wine.vercel.app/conheca",
  },
  {
    slug: "blind-mcp",
    featured: true,
    name: "Blind MCP",
    description: "Ferramenta que usa evidências do código para transformar diferenciais de produto em hipóteses testáveis.",
    cover: "/images/projects/covers/blind-mcp.webp",
    coverLabel: "Ilustração autoral",
    coverAlt: "Capa ilustrada de blind-mcp: gravura sobre fundo colorido",
    screenshot: "/images/projects/blind-mcp-screenshot.png",

    tags: ["TypeScript", "Node.js", "MCP", "Zod"],
    status: "Produção",
    details: "O servidor MCP lê trechos de um repositório autorizado e gera um protocolo com hipótese, evidências e critério de sucesso. A demo pública permite revisar e exportar o rascunho do caso Aprova versus aprovação por chat. O teste com participantes está pendente.",
    repository: "https://github.com/Apoloundifinied/blind-mcp",
    demo: "https://blind-mcp.vercel.app/",
  },
  {
    slug: "forge-deploy",
    featured: true,
    name: "Forge Deploy",
    description: "Painel de deploy com estados de publicação, logs ao vivo e histórico de versões.",
    cover: "/images/projects/covers/forge-deploy.webp",
    coverLabel: "Ilustração autoral",
    coverAlt: "Capa ilustrada de forge-deploy: gravura sobre fundo colorido",
    screenshot: "/images/projects/forge-deploy.webp",

    tags: ["Rust", "Leptos", "WebAssembly", "Axum", "Docker"],
    status: "Concluído",
    details: "MVP local que reúne publicação, monitoramento e rollback em uma interface. O painel em Leptos mostra o estado real dos deploys e atualiza os logs via SSE. O código e as instruções para rodar estão no GitHub.",
    repository: "https://github.com/robsonldasilva72-gif/Forge-deploy",
  },
  {
    slug: "visual-automation",
    featured: true,
    name: "Visual Automation Engine",
    description: "Editor visual de automações com canvas de nós, inspetor e resultados de execução.",
    cover: "/images/projects/covers/visual-automation.webp",
    coverLabel: "Ilustração autoral",
    coverAlt: "Capa ilustrada de visual-automation: gravura sobre fundo colorido",
    screenshot: "/images/projects/visual-automation.webp",

    tags: ["TypeScript", "Fastify", "Canvas de nós", "UI de ferramentas"],
    status: "Protótipo",
    details: "O editor permite montar fluxos, configurar etapas no inspetor e acompanhar a execução. Um exemplo consulta repositórios públicos do GitHub, filtra dados e apresenta resultados em tabela ou JSON. O protótipo roda localmente.",
  },
  {
    slug: "mutant-factory",
    name: "Mutant Factory — Lab Zero",
    description: "Protótipo de jogo de progressão para Roblox, com inventário, recursos e melhorias.",
    cover: "/images/projects/covers/mutant-factory.webp",
    coverLabel: "Ilustração autoral",
    coverAlt: "Capa ilustrada de mutant-factory: gravura sobre fundo colorido",

    visualSample: {
      src: "/images/projects/mutant-factory-goo.webp",
      alt: "Arte conceitual 2D da criatura Goo para o conjunto de cards",
    },
    tags: ["Luau", "Roblox", "HUD", "Economia de jogo", "Arte conceitual 2D"],
    status: "Protótipo",
    details: "O código inclui um HUD para celular e PC, inventário, coleta de sucata, renda e melhorias de produção. O kit inclui cards de criaturas, ícones e capas conceituais. A execução ainda precisa ser validada no Roblox Studio.",
  },
  {
    slug: "dozena",
    name: "Dozena",
    description: "Projeto open source para organizar testes de aplicativos Android em rodadas.",
    cover: "/images/projects/covers/dozena.webp",
    coverLabel: "Ilustração autoral",
    coverAlt: "Capa ilustrada de dozena: gravura sobre fundo colorido",
    screenshot: "/images/projects/dozena.jpg",

    tags: ["Next.js", "TypeScript", "UI bilíngue", "Fluxo em etapas"],
    status: "Em desenvolvimento",
    details: "A página pública apresenta a proposta de testes em rodadas, explica o fluxo de participação e recebe inscrições na lista de espera. O repositório documenta as regras, os estados e as etapas planejadas.",
    repository: "https://github.com/Apoloundifinied/DOZEMA",
    demo: "https://dozema.vercel.app/pt-BR",
  },
  {
    slug: "oxty-inside",
    name: "Oxty Inside",
    description: "Protótipo de alertas de convocação em Diários Oficiais, com busca de cidades e consulta de cobertura.",
    cover: "/images/projects/covers/oxty-inside.webp",
    coverLabel: "Ilustração autoral",
    coverAlt: "Capa ilustrada de oxty-inside: gravura sobre fundo colorido",

    tags: ["Next.js", "TypeScript", "UX de busca", "Formulários"],
    status: "Protótipo",
    details: "A interface ajuda concurseiros a verificar se a cidade está coberta e entrar na lista de espera. O repositório documenta o autocomplete de municípios, a página de cobertura por estado e o fluxo de confirmação por e-mail.",
    repository: "https://github.com/Apoloundifinied/Oxty-Inside",
  },
];

export const specialties = [
  { title: "Aplicações & APIs", items: ["TypeScript", "React", "Next.js", "Node.js", "FastAPI"] },
  { title: "Automação & Sistemas", items: ["Python", "Rust", "Bash", "Linux", "Docker"] },
  { title: "IA & Integrações", items: ["APIs de IA", "Agentes", "STT / TTS", "MCP — foco de estudo e integração"] },
];

// Espaços editoriais, não trabalhos reais. Substituir por materiais autorizados.
export const creativeWorks: CreativeWork[] = [
  { title: "Foto & composição", tools: ["Adobe Photoshop"], description: "Espaço reservado para uma seleção de imagens editadas." },
  { title: "Vídeo & edição dinâmica", tools: ["CapCut", "Adobe After Effects"], description: "Espaço reservado para vídeos e cortes com edição dinâmica." },
  { title: "Motion design", tools: ["Adobe After Effects"], description: "Espaço reservado para trabalhos de animação e movimento." },
];
