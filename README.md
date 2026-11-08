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
- `src/components/sections/about.tsx`: apresentação e trajetória.
- `src/components/sections/stack.tsx`: stack técnica, automação, IA, infraestrutura, segurança e criação visual.
- `src/components/experience/work.tsx`: projetos, capturas e detalhes.
- `src/components/theme-toggle.tsx`: alternância manual com preferência inicial do sistema.
- `src/components/sections/marquee.tsx`: faixa de áreas de atuação.
- `src/data/portfolio.ts`: perfil e projetos.
- `public/images/`: imagens e logos.

O tema segue a preferência de claro/escuro do navegador até uma escolha manual.
