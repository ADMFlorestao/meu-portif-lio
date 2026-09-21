# Arquitetura

Verificada em 21/09/2026. Este documento descreve o código presente, não uma migração de stack.

## Aplicação e rotas

- Next.js App Router em [`app/`](../app/) com React 19 e TypeScript. [`app/layout.tsx`](../app/layout.tsx) define idioma `pt-BR`, metadados globais e estilos.
- [`app/page.tsx`](../app/page.tsx): Home; serviços definidos localmente; usa projetos de `lib/projects.ts` para prévias.
- [`app/projetos/page.tsx`](../app/projetos/page.tsx): listagem de todos os projetos.
- [`app/projetos/[slug]/page.tsx`](../app/projetos/%5Bslug%5D/page.tsx): procura o slug em `projects`, gera parâmetros estáticos e metadados, apresenta o case e devolve 404 para slug desconhecido.

## Componentes e dados

- [`components/site-shell.tsx`](../components/site-shell.tsx): `SiteHeader`, `ContactCta` e `SiteFooter`, utilizados nas páginas.
- [`components/orbit-showcase.tsx`](../components/orbit-showcase.tsx): demonstrações do Hero, interação e avanço automático no cliente.
- [`lib/projects.ts`](../lib/projects.ts): tipo e vetor de projetos; fonte atual de nomes, descrições, imagens, tecnologias e funcionalidades exibidas. Evite duplicar esse catálogo na memória.
- `components/ui/` contém componentes do starter; não há evidência de importação deles nas páginas de portfólio inspecionadas.
- Imagens servidas de `public/images/`; as notas de revisão dos rascunhos ficam em [`portfolio-assets/README.md`](../portfolio-assets/README.md).

## Renderização e build

As páginas leem dados locais em TypeScript e renderizam a interface; o carrossel é um componente cliente. [`vite.config.ts`](../vite.config.ts) combina Vinext, Vite e plugin Cloudflare/Sites. [`package.json`](../package.json) define `dev`, `build`, `start` e `lint`; npm é o gerenciador indicado pelo lockfile. Tailwind CSS 4 entra por [`app/globals.css`](../app/globals.css) e [`postcss.config.mjs`](../postcss.config.mjs).

[`README.md`](../README.md) documenta os comandos e o ciclo operacional do starter. A configuração em [`.openai/hosting.json`](../.openai/hosting.json) contém um projeto Sites, com D1 e R2 definidos como `null`. Não há remote Git configurado na data da verificação. Esta documentação não afirma que um deploy foi realizado.

## Integrações

Na interface do portfólio, as integrações externas efetivas são links de WhatsApp e e-mail em `site-shell.tsx`. Recursos opcionais de banco (D1/Drizzle), autenticação ChatGPT e armazenamento (R2) existem no starter ou em sua configuração, mas **não são integrações ativas do portfólio sem evidência de utilização nas páginas e no ambiente**.
