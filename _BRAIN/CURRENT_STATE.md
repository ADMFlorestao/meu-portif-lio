# Estado atual

Verificado em **21/09/2026** por inspeção de arquivos e Git. Build, preview e revisão visual das imagens não foram executados nesta verificação.

## IMPLEMENTADO

- Stack: TypeScript/TSX, React 19, Next.js App Router, Vinext/Vite e Tailwind CSS 4; npm com `package-lock.json`.
- Rotas: `/`, `/projetos` e `/projetos/[slug]`. A rota dinâmica gera páginas para os seis slugs atualmente definidos em [`lib/projects.ts`](../lib/projects.ts): `mira`, `recebe`, `prisma`, `isa`, `caixa-banhos` e `analise-relatorios`.
- Home: headline comercial, demonstrações interativas, quatro serviços e CTA de contato. A listagem de projetos fica concentrada em `/projetos`.
- Projetos: listagem pelos nomes reais, filtro por área, resumo de finalidade, área de uso e benefícios. Cada case apresenta visão geral, imagem, funcionalidades e tecnologias/competências.
- Layout compartilhado: header, navegação desktop/mobile, CTA e footer. Estilos responsivos e preferência por movimento reduzido constam em [`app/globals.css`](../app/globals.css).
- Integrações efetivas da interface: links externos para WhatsApp e `mailto:`. O contato não usa formulário ou backend próprio.
- Git na verificação: branch `master`, árvore limpa, último commit `d255d29` (21/09/2026); nenhum remote configurado.

## PLANEJADO

- Páginas de case com seções próprias de problema, solução, processo, screenshots e resultados, à medida que conteúdo verificável for fornecido. A arquitetura de rotas já permite expandi-las; essas seções não estão implementadas.
- Revisão final das capturas antes de qualquer publicação, conforme [`portfolio-assets/README.md`](../portfolio-assets/README.md).

## PENDENTE DE CONFIRMAÇÃO

- Segurança visual e aprovação editorial de cada captura pública; a inspeção de arquivos não substitui revisão visual.
- Conteúdo factual e divulgável para problemas, processos e resultados dos cases; não presumir métricas, clientes ou depoimentos.
- Estado efetivo de build, preview e publicação. Há configuração Sites, mas não foi testada nesta verificação.
- Se o link “Sobre” deve apontar para o footer atual ou para uma futura seção institucional. Não há seção “Sobre” independente.
- Se o conjunto de seis projetos e a apresentação do Hero correspondem à seleção editorial final.

O repositório contém código opcional de banco, autenticação e armazenamento vindo do starter. Isso não comprova uso desses recursos no portfólio.
