# Portfólio — Leonardo Rebouças

Site de portfólio em React, bilíngue (pt-BR / en). Origem: Figma
[Portfolio-2026](https://www.figma.com/design/kx5zp1JZ28LyxzEHLm1mlc/Portfolio-2026),
mas **o Figma não é mais a fonte da verdade** — várias decisões vieram depois dele. Leia
"Decisões" antes de "corrigir" algo que pareça divergir do design.

## Stack e comandos

Vite 7 + React 19 + TypeScript + Tailwind v4 (`@theme` em `src/index.css`, sem
`tailwind.config.js`). Rotas com react-router. Sem testes.

```bash
npm run dev     # servidor local (porta 5173)
npm run build   # tsc -b && vite build — use isto para validar
```

## Mapa

| Caminho | O quê |
| --- | --- |
| `src/i18n/pt.ts` | **Todo o texto em português.** É o contrato de tipos. |
| `src/i18n/en.ts` | O mesmo em inglês, tipado como `Dictionary` do `pt.ts`. |
| `src/i18n/detect.ts` | Detecção automática de idioma. |
| `src/content.ts` | O que não muda com idioma: contatos, imagens, gradientes dos cards. |
| `src/motion/` | Reveal ao rolar, scroll suave (Lenis), digitação do hero. |
| `src/components/` | Uma seção por arquivo. |
| `src/pages/` | `Home.tsx` e `ProjectPage.tsx`. |

**Faltar uma chave no `en.ts` quebra o build** — é proposital, garante que as traduções
não fiquem para trás.

## Decisões que não estão no Figma

O hero foi calibrado contra **paul-hahn.com**, medido ao vivo. Não desfaça:

- Painel do hero: largura da tela menos 24px de cada lado (97,5%), `min-h-[86svh]`,
  raio 40px. O Figma pedia 1180×550 fixo.
- Título do hero em **86px** (valor do Figma). O do Paul é 72px; o usuário escolheu o maior.
- Foto do hero medida em `em`, amarrada ao título, para acompanhar sozinha em qualquer tela.
- **A barra do topo não é fixa** — pedido explícito. A do Paul é `fixed`.
- Raio da barra igual ao do painel do hero — escolha do usuário. A do Paul tem raio 0.
- Barra do topo, painel do hero e painel do Sobre mim têm a mesma largura, de propósito.

Tempos medidos quadro a quadro de vídeos de referência:

- Digitação do hero: ~42ms por caractere, com pausas de 400ms e 283ms no meio.
- Acordeão do FAQ: 180ms (medido ~170ms).
- Entradas ao rolar: 1s. Scroll do Lenis: 1,7s. O usuário pediu mais lento que a referência.

Páginas de projeto: **sem vão entre os parágrafos** da descrição — é assim nas imagens
de referência.

## Armadilhas deste projeto

**O git é novo aqui.** O repositório só foi criado em 24/08/2026, para publicar no GitHub
Pages; tudo que veio antes disso não tem histórico. Os arquivos sem uso listados em
"Estado atual" ficaram por não haver git na época — continue preferindo deixá-los a
remover conteúdo que o usuário revisou.

**Nunca passe texto acentuado por heredoc do shell.** Isso já corrompeu o `en.ts` duas
vezes (travessões viraram caracteres de controle invisíveis). Use as ferramentas de
edição de arquivo diretamente.

**Apóstrofo reto quebra string em TypeScript.** `'SmartLy's'` encerra a string. Use `’`
ou reescreva a frase.

**Regex de limpeza em i18n precisa ser específico.** Um padrão genérico para remover
`cta: { ... }` já apagou o botão do menu junto.

**O painel do navegador aqui não compõe frames.** Screenshot falha, `requestAnimationFrame`
não roda, `IntersectionObserver` e eventos de scroll não disparam, e transições CSS ficam
congeladas no valor inicial. Consequências:

- Para checar um estado final de CSS, desligue a transição e leia o valor.
- Erros de console podem ser resíduo de hot-reload — **confirme sempre abrindo uma aba nova**.
- O reveal usa `getBoundingClientRect` num listener de scroll, e não `IntersectionObserver`,
  justamente para ser testável aqui. Não "melhore" isso.

O servidor de desenvolvimento caiu algumas vezes sozinho. Se a página não carregar e o
console estiver vazio, confira se a porta 5173 ainda está escutando.

## Estado atual

Home: hero, projetos, sobre, serviços, experiência, contato. **O FAQ foi removido da home**
(virou a seção Experiência), mas `Faq.tsx` e o texto das 6 perguntas continuam no projeto,
sem serem renderizados — mantidos de propósito por não haver git.

O formulário de contato saiu das páginas de projeto. `Contact.tsx` e `ContactForm.tsx`
ficaram sem uso, pelo mesmo motivo.

O projeto OLYMPUS AGENT foi substituído pelo SmartLy Brasil. Os arquivos do OLYMPUS
seguem em `src/assets/`.

O SmartLy não tem captura própria: a página dele cai no atalho que reusa a arte do card
sobre o fundo. `cover` é opcional em `ProjectVisual` por causa disso.

## Pendências

- Respostas 02–06 do FAQ são rascunhos meus (o Figma só traz a 01). Só importa se o FAQ voltar.
- As tags OG no `index.html` nascem em português; o JavaScript atualiza ao trocar de idioma,
  mas robôs de rede social leem o HTML antes disso.
- Deploy: GitHub Pages, pelo workflow `.github/workflows/deploy.yml` — build e publicação
  a cada push na `main`. O Pages não reescreve rotas, então o script `postbuild` copia o
  `index.html` para `404.html`; é isso que faz `/projetos/:slug` sobreviver a um
  recarregamento (o servidor responde com status 404, o que o visitante não vê, mas os
  robôs de busca veem). `public/_redirects` e `vercel.json` continuam prontos, caso o site
  vá para Netlify ou Vercel.
