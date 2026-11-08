# Fullstack Dav

Portfólio em Next.js, React e TypeScript, publicado no GitHub Pages.

## Desenvolvimento

Requer Node.js 20.9+ e npm.

```bash
npm install
npm run dev
```

## Publicação no GitHub Pages

O site é exportado como arquivos estáticos para a raiz do repositório. Para gerar o export:

```bash
GITHUB_PAGES=1 npm run build
```

Copie o conteúdo de `pages-out/` para a raiz antes de publicar. O `basePath` e os caminhos dos assets são configurados para `/fullstack-dav`.

## Estrutura

- `src/components/sections/hero.tsx`: apresentação inicial.
- `src/components/sections/stack.tsx`: linguagens, frameworks, ferramentas e competências.
- `src/components/experience/work.tsx`: projetos e detalhes.
- `src/components/experience/creative.tsx`: seção Imagem & Motion.
- `src/data/portfolio.ts`: perfil e projetos.
- `public/images/`: imagens e logos.

O tema respeita a preferência de claro/escuro do sistema operacional ou navegador.
