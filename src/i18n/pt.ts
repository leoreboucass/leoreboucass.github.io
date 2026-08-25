import type {
  EducationEntry,
  ExperienceEntry,
  ProjectCopy,
  ProjectId,
  ProjectPageCopy,
  ServiceCopy,
  ServiceId,
} from './types'

/** Textos em português. Fonte: Figma "Portfolio-2026" (node 18:968). */
export const pt = {
  htmlLang: 'pt-BR',

  meta: {
    title: 'Leonardo Rebouças — Design claro. Entrega impecável.',
    description:
      'Leonardo Rebouças — designer de UX e UI web e mobile em Curitiba. Crio sites e apps que funcionam bem, são fáceis de usar e convencem já no primeiro olhar.',
  },

  language: {
    switchLabel: 'Trocar idioma',
    options: {
      pt: { short: 'BR', label: 'Português (Brasil)' },
      en: { short: 'EN', label: 'English' },
    },
  },

  nav: {
    ariaLabel: 'Principal',
    homeLabel: 'Ir para o início',
    openMenu: 'Abrir menu',
    closeMenu: 'Fechar menu',
    links: [
      { label: 'Projetos', href: '#projetos' },
      { label: 'Sobre mim', href: '#sobre' },
      { label: 'Serviços', href: '#servicos' },
      { label: 'Experiência', href: '#experiencia' },
    ],
    cta: { label: 'Contato', href: '#contato' },
  },

  hero: {
    tagline: 'UX & Web/MOBILE Design · CURITIBA',
    titleBefore: 'Oi,',
    titleAfter: 'eu sou o Leo!',
    photoAlt: 'Retrato de Leonardo Rebouças',
    scrollHint: 'Ver os projetos',
    lead: 'Crio sites e apps que funcionam bem, são fáceis de usar e convencem já no primeiro olhar.',
  },

  projectsSection: {
    eyebrow: '// Projetos',
    title: 'Design claro. Execução impecável.',
    lead: 'Projetos selecionados que mostram como ideias viram sites modernos e funcionais, com um conceito bem definido, bom design e uma implementação que funciona em qualquer tela.',
  },

  projects: {
    bikcraft: {
      tag: 'Web Design',
      title: 'Bikcraft',
      description: 'Projeto criado em curso de uma loja conceitual de bicicletas artesanais e elétricas.',
      artAlt: 'Logotipo Bikcraft',
    },
    pulsar: {
      tag: 'Web Design, Redesign',
      title: 'Pulsar X2 Bruce Lee ed.',
      description:
        'Página moderna e minimalista para apresentar o mouse Pulsar X2 em sua edição limitada do Bruce Lee.',
      artAlt: 'Logotipos Pulsar e Bruce Lee',
    },
    ckAutoCare: {
      tag: 'Mobile Design, Web Design',
      title: 'CK Auto Care',
      description:
        'Aplicativo e site criados para agendamento de serviços de mecânica, lavagem e estética para carros.',
      artAlt: 'Logotipo CK Auto Care',
    },
    smartly: {
      tag: 'Mobile App, Design System',
      title: 'SmartLy Brasil',
      description: 'App de automação residencial e corporativa para dispositivos inteligentes.',
      artAlt: 'Logotipo SmartLy',
    },
  } as Record<ProjectId, ProjectCopy>,

  about: {
    eyebrow: '// Sobre mim',
    title: 'Sites que as pessoas realmente conseguem usar.',
    paragraphs: [
      'Sou designer de UI/UX para mobile e web, moro em Curitiba e há três anos sou o único designer de uma empresa de automação residencial e IoT. Isso significa desenhar produto de ponta a ponta: do fluxo à tela, da tela ao handoff, e depois acompanhar o que foi para produção.',
      'Estudo Ciência da Computação e escolhi trabalhar com design. Passo o dia entre uma equipe de devs e um Figma, e é nesse meio que gosto de estar: entender o que dá para construir antes de decidir o que vale desenhar. Sou generalista, com gravitação natural para UI, e penso em sistema antes de pensar em tela.',
      'Acredito que uma interface que precisa ser explicada já falhou.',
    ],
    cv: 'DOWNLOAD CV',
    figmaAlt: 'Logotipo do Figma',
  },

  servicesSection: {
    eyebrow: '// Serviços',
    title: 'O que eu posso fazer por você.',
    lead: 'Desenho aplicativos e sites no Figma, da estrutura das telas ao protótipo navegável, com os arquivos organizados e prontos para quem vai desenvolver.',
  },

  services: {
    ux: {
      title: 'UX & Estrutura',
      description: 'Fluxos, arquitetura das telas e wireframes, para o produto fazer sentido antes de ganhar cor.',
    },
    ui: {
      title: 'UI Design no Figma',
      description:
        'Design das telas em alta fidelidade e protótipo navegável, para testar e apresentar antes de escrever qualquer código.',
    },
    designSystem: {
      title: 'Design System & Handoff',
      description:
        'Componentes, estilos e medidas organizados no Figma, para o time de desenvolvimento implementar sem adivinhar nada.',
    },
  } as Record<ServiceId, ServiceCopy>,

  faqSection: {
    eyebrow: '// FAQ',
    title: 'Suas dúvidas — minhas respostas.',
    lead: 'Aqui você encontra respostas curtas para as perguntas mais comuns sobre web design, UX/UI, projetos de site e como é trabalhar comigo.',
  },

  faq: [
    {
      question: '01. Que tipos de site você cria?',
      answer:
        'Crio sites claros e responsivos para startups, autônomos e negócios locais. O importante é uma estrutura organizada, um bom design e uma navegação que qualquer pessoa entende.',
    },
    {
      question: '02. Você consegue reformular um site que já existe?',
      answer:
        'Consigo. Analiso o que já funciona, aponto o que atrapalha e refaço estrutura, layout e conteúdo mantendo tudo o que faz sentido para o seu negócio.',
    },
    {
      question: '03. Como começo um projeto com você?',
      answer:
        'Me manda uma mensagem pelo formulário aqui embaixo contando um pouco da ideia. A gente marca uma conversa rápida e, depois disso, eu envio uma proposta com escopo, prazo e valor.',
    },
    {
      question: '04. Como funciona o seu processo de design?',
      answer:
        'Em três etapas: conversa inicial e briefing, estrutura e wireframes, design visual das telas. Você acompanha e aprova cada etapa.',
    },
    {
      question: '05. Quanto tempo leva um projeto de site?',
      answer:
        'Um site institucional costuma levar de três a seis semanas, dependendo do tamanho, da quantidade de páginas e da velocidade dos retornos e do envio dos conteúdos.',
    },
    {
      question: '06. O que você precisa antes de começarmos?',
      answer:
        'Textos, imagens e logo, se já existirem, além de uma ideia do objetivo do site e de quem são as pessoas que você quer alcançar. Se faltar alguma coisa, a gente resolve junto no caminho.',
    },
  ],

  experienceSection: {
    eyebrow: '// Experiência',
    title: 'Onde estive e o que construí.',
    lead: 'Uma linha do tempo curta dos times e projetos em que trabalhei, com o que eu entreguei na prática.',
    cta: 'Ver perfil no LinkedIn',
    educationTitle: 'Formação',
  },

  experience: [
    {
      featured: true,
      period: '2025 — Atual',
      mode: 'CLT · Curitiba, PR',
      role: 'Júnior UI/UX Designer',
      company: 'SmartLy Brasil',
      description:
        'Único designer de uma empresa de automação residencial e IoT, com quatro produtos em produção: SmartLy, plataforma de automação de iluminação, painéis e climatização; HotFloor, focado em calefação por termostatos; SmartLy para Instaladores, voltado ao público técnico; e a plataforma web de gestão interna. Conduzo o ciclo de interface do início ao fim, de fluxos e wireframes até UI em alta fidelidade no Figma, protótipo navegável e handoff ao CTO e ao Tech Lead de front-end. Construí do zero o Design System do SmartLy: 97 componentes com tokens e variantes, hoje base de tudo que entra em produção. Projetei também os fluxos de assinatura e contratação e o Marketplace do HotFloor, do catálogo ao checkout.',
      tags: ['Design System', 'Tokens & Variantes', 'Fluxos de pagamento', 'Automação residencial e IoT'],
    },
    {
      period: '2024 — Atual',
      mode: 'Autônomo · Curitiba, PR',
      role: 'Freelancer — Web & Mobile',
      description:
        'Atuo em projetos independentes de interface para web e mobile, incluindo clientes na Europa. Trabalho direto com o cliente na definição do escopo e entrego telas em alta fidelidade, componentes reutilizáveis e layouts responsivos prontos para desenvolvimento.',
      tags: ['Web', 'Mobile', 'Cliente direto', 'Remoto internacional'],
    },
    {
      period: '2023 — 2025',
      mode: 'Estágio · Curitiba, PR',
      role: 'Estagiário UI/UX Designer',
      company: 'SmartLy Brasil',
      description:
        'Entrei como estagiário e assumi progressivamente a operação de design da empresa, que não tinha designer. Produzi fluxos, wireframes e interfaces em alta fidelidade para novos dispositivos e funcionalidades dos aplicativos, trabalhei no site de gestão interna e conduzi as validações internas de fluxo com o time antes de cada entrega. Foi nesse período que comecei a padronização visual que depois deu origem ao Design System.',
      tags: ['Novas funcionalidades', 'Site de gestão', 'Padronização visual', 'Validação interna'],
    },
  ] as ExperienceEntry[],

  education: [
    { course: 'Ciência da Computação — UNICURITIBA', period: '2022 — Cursando' },
    { course: 'Google UX Design — Coursera', period: 'Cursando' },
    { course: 'Neurociência Aplicada a UX — UDEMY', period: '2026' },
    { course: 'Arquitetura de Informação: da Pesquisa até a Entrega Final — UDEMY', period: '2026' },
    { course: 'UX Writing — ENAP', period: '2025' },
    { course: 'Advanced UI Design — Origamid', period: '2023' },
  ] as EducationEntry[],

  /** Bloco de contato da home: canais diretos, sem formulário. */
  contactHome: {
    eyebrow: '// Contato',
    title: 'Vamos conversar?',
    lead: 'Me chama pelo canal que preferir.',
    channels: {
      whatsapp: { label: 'WhatsApp', action: 'Chamar no WhatsApp' },
      linkedin: { label: 'LinkedIn', action: 'Abrir meu perfil' },
      email: { label: 'E-mail', action: 'Enviar um e-mail' },
    },
  },

  contact: {
    eyebrow: 'Contato',
    title: 'Pronto para o seu próximo projeto?',
    lead: 'Você tem uma ideia, um site que precisa de uma repaginada ou só algumas perguntas? Me manda uma mensagem, vou adorar ouvir você.',
    linkedinLabel: 'LinkedIn de Leonardo Rebouças',
    emailLabel: (address: string) => `Enviar e-mail para ${address}`,
    form: {
      name: { label: 'Nome', placeholder: 'Maria da Silva' },
      email: { label: 'E-mail', placeholder: 'maria@email.com.br' },
      message: { label: 'Mensagem', placeholder: 'Conte um pouco sobre o seu projeto...' },
      submit: 'Enviar mensagem',
      sending: 'Abrindo o seu aplicativo de e-mail…',
      errors: {
        name: 'Escreva o seu nome.',
        email: 'Escreva o seu e-mail.',
        emailInvalid: 'Esse e-mail não parece válido.',
        message: 'Conte um pouco sobre o seu projeto.',
      },
      mail: {
        subject: (name: string) => `Contato pelo site — ${name}`,
        nameLine: 'Nome',
        emailLine: 'E-mail',
      },
    },
  },

  /** Bloco de contato das páginas de projeto — texto diferente do da home. */
  contactProject: {
    eyebrow: '// Fale comigo',
    title: 'Quando você quiser, é só chamar.',
    lead: 'Tem um projeto em mente? Vou adorar saber mais. Me manda uma mensagem e a gente cria algo bom juntos.',
    form: {
      name: { label: 'Seu nome', placeholder: 'Maria da Silva' },
      email: { label: 'Seu e-mail', placeholder: 'maria@email.com.br' },
      message: { label: 'Sua mensagem', placeholder: 'Conte um pouco sobre o seu projeto...' },
      submit: 'Enviar',
    },
  },

  projectPage: {
    back: 'Voltar',
    category: 'Categoria',
    role: 'Função',
    year: 'Ano',
    next: 'Próximo projeto',
    view: 'Ver projeto',
    notFound: {
      title: 'Projeto não encontrado.',
      lead: 'Esse endereço não existe — talvez o link esteja errado ou o projeto tenha saído do ar.',
      back: 'Voltar para a home',
    },
  },

  projectPages: {
    bikcraft: {
      category: 'Web Design, UI',
      role: 'Designer',
      coverAlt:
        'Página inicial do site da Bikcraft, com o título “bicicletas feitas sob medida” sobre fundo preto e a foto de uma bicicleta escura à direita',
      description: [
        'Design de produto do app que centraliza o controle de iluminação, calefação, sensores, painéis, cenários e integrações com assistentes de voz. Atuei como único UI/UX Designer do produto por 3 anos, responsável por toda funcionalidade nova entregue no período, do design system aos fluxos.',
        'Construí a interface com HTML semântico e CSS puro, usando CSS Grid para as estruturas principais e um sistema de variáveis para cores e espaçamentos. Os formulários de contato e orçamento foram feitos com validação nativa e estados de foco acessíveis, e os ícones são SVGs inline para reduzir requisições. O JavaScript cuida do menu mobile e das animações de entrada dos elementos ao rolar a página.',
      ],
    },
    pulsar: {
      category: 'Web Design, UI',
      role: 'Designer',
      coverAlt:
        'Notebook exibindo a landing page do Pulsar X2 Bruce Lee Edition, com o mouse amarelo em destaque sobre fundo escuro',
      description: [
        'Um produto de edição limitada tem uma janela curta de atenção, e uma página que fala demais dilui exatamente aquilo que o torna desejável. Para o Pulsar X2 Bruce Lee Edition, a escolha foi uma landing page enxuta, que funciona como vitrine temporária do lançamento em vez de catálogo.',
        'O desafio de design estava no encontro entre duas linguagens: o legado icônico de Bruce Lee e a estética técnica e contemporânea do gaming gear. Trabalhei com bastante respiro entre os blocos, paleta reduzida e tipografia de peso marcado, deixando que o produto e os elementos da colaboração ocupassem o primeiro plano. Cada seção da página avança um único argumento, apresentação, detalhe do design, especificação, disponibilidade, conduzindo o visitante até o call to action sem competição visual pelo caminho.',
      ],
      imageCaption: 'Projeto conceitual autoral, sem afiliação com as marcas citadas',
    },
    ckAutoCare: {
      category: 'Mobile Design, UI',
      role: 'Designer',
      coverAlt:
        'Celular segurado na mão exibindo a tela inicial do aplicativo CK Auto Care, com o título “Cuide do seu carro”',
      description: [
        'Marcar um serviço no carro costuma envolver ligação, WhatsApp e idas e vindas até acertar um horário. A proposta foi centralizar isso em um único fluxo: escolher o tipo de serviço, mecânica, lavagem ou estética, visualizar os horários disponíveis e confirmar o agendamento em poucos toques.',
        'Comecei mapeando o percurso do cliente e os pontos de atrito, e a partir daí desenhei a arquitetura de informação das duas frentes: o aplicativo, voltado ao agendamento, e o site, que reúne a vitrine dos serviços e o painel de gestão do estabelecimento. O maior desafio foi a tela de escolha de horário, já que os três tipos de serviço têm durações muito diferentes, testei algumas alternativas até chegar a um formato que deixa a disponibilidade clara sem sobrecarregar a tela.',
        'A identidade visual busca equilibrar a confiança que o setor automotivo exige com uma leitura leve e contemporânea, usando #4C4FFF como cor de destaque e hierarquia tipográfica marcada para orientar o usuário em cada etapa.',
      ],
    },
    smartly: {
      category: 'Web Design, UI',
      role: 'Designer',
      coverAlt: 'Logotipo SmartLy sobre fundo cinza claro',
      description: [
        'Design de produto do app que centraliza o controle de iluminação, calefação, sensores, painéis, cenários e integrações com assistentes de voz. Atuei como único UI/UX Designer do produto por 3 anos, responsável por toda funcionalidade nova entregue no período, do design system aos fluxos.',
      ],
    },
  } as Record<ProjectId, ProjectPageCopy>,

  footer: {
    monogram: 'LR',
    name: 'Leonardo Rebouças',
  },
}

/** O dicionário em português é o contrato: qualquer outro idioma precisa ter as mesmas chaves. */
export type Dictionary = typeof pt
