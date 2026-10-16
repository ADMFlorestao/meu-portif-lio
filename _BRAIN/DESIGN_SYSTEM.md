# Identidade e apresentação

Implementação atualizada em 16/10/2026. As diretrizes aprovadas abaixo são separadas do que o código efetivamente apresenta.

## Diretrizes aprovadas

- Nome: **Murilo Lima Pagung**.
- Posicionamento: **Desenvolvedor de Automação & Sistemas Empresariais**.
- Conceito: **“Soluções digitais para empresas reais.”**
- Objetivo: apresentar soluções empresariais reais e captar oportunidades comerciais. O portfólio não deve assumir aparência de currículo tradicional ou de estudante.
- Direção visual: minimalista, sofisticada, dark e profissional, inspirada em produtos SaaS; espaço negativo, hierarquia tipográfica forte, ciano/teal como destaque contido, microinterações discretas e responsividade.
- Priorizar serviços na Home e nomes reais na página de projetos. Não inventar resultados, métricas, clientes ou depoimentos.

## Implementado no código

- [`app/globals.css`](../app/globals.css) define fundo navy muito escuro `#050f15`, superfície `#0c202b`, texto claro `#f4f7f5`, texto secundário `#9db0b7` e ciano `#2de2e6`. Esses valores no CSS são a referência vigente.
- Tipografia de sistema: Arial/Helvetica, com títulos grandes, entrelinhas compactas e espaçamento negativo nas letras. Não há fonte externa declarada no CSS.
- Header fixo no topo com monograma MLP, links Início/Projetos/Serviços/Sobre/Contato, CTA e menu mobile. O link “Sobre” aponta atualmente para o `id` do footer; não há seção institucional separada. O menu mobile inclui “Sobre”, fecha ao escolher um destino e aceita Escape, devolvendo o foco ao acionador.
- Home: Hero com headline e carrossel de capturas; quatro cartões de serviços; CTA final. A página `/projetos` concentra os cases com imagem e texto. O footer mostra monograma, nome, área de atuação, navegação e contatos.
- Componentes visuais: botões, cartões de serviço, linhas de projeto, tags de tecnologia, demonstrações em órbita e navegação entre cases. `SiteHeader`, `ContactCta` e `SiteFooter` são compartilhados.
- Responsividade: media queries em 1050, 900 e 600 px reorganizam grids, navegação, Hero e imagens. O carrossel tem controles de imagem anterior/próxima e pausa/retomada. Interações manuais e entrada de foco interrompem a rotação; hover e aba oculta suspendem o avanço. Respeita `prefers-reduced-motion`, oculta frames inativos da árvore de acessibilidade e só anuncia alterações manuais. PRUMO usa “Explorar projetos”, pois não possui case no catálogo.
- Acessibilidade presente no código: idioma `pt-BR`, rótulos de navegação e controles, textos alternativos de imagem, menu `details` e redução de movimento. A experiência em leitor de tela, teclado e dispositivos reais não foi validada nesta verificação.

As imagens públicas não devem ser tratadas como aprovadas para publicação sem revisão visual. Consulte [`portfolio-assets/README.md`](../portfolio-assets/README.md) antes de selecionar capturas.
