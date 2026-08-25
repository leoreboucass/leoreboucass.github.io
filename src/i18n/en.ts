import type { Dictionary } from './pt'

/** English copy. Mirrors the Portuguese dictionary key for key. */
export const en: Dictionary = {
  htmlLang: 'en',

  meta: {
    title: 'Leonardo Rebouças — Clear design. Flawless delivery.',
    description:
      'Leonardo Rebouças — web and mobile UX/UI designer based in Curitiba, Brazil. I build websites and apps that work well, are easy to use, and win people over at first glance.',
  },

  language: {
    switchLabel: 'Change language',
    options: {
      pt: { short: 'BR', label: 'Português (Brasil)' },
      en: { short: 'EN', label: 'English' },
    },
  },

  nav: {
    ariaLabel: 'Main',
    homeLabel: 'Back to top',
    openMenu: 'Open menu',
    closeMenu: 'Close menu',
    links: [
      { label: 'Projects', href: '#projetos' },
      { label: 'About', href: '#sobre' },
      { label: 'Services', href: '#servicos' },
      { label: 'Experience', href: '#experiencia' },
    ],
    cta: { label: 'Contact', href: '#contato' },
  },

  hero: {
    tagline: 'UX & Web/MOBILE Design · CURITIBA, BRAZIL',
    titleBefore: 'Hi,',
    titleAfter: "I'm Leo!",
    photoAlt: 'Portrait of Leonardo Rebouças',
    scrollHint: 'See the projects',
    lead: 'I build websites and apps that work well, are easy to use, and win people over at first glance.',
  },

  projectsSection: {
    eyebrow: '// Projects',
    title: 'Clear design. Flawless execution.',
    lead: 'Selected projects showing how ideas turn into modern, functional websites — with a well-defined concept, good design, and an implementation that holds up on any screen.',
  },

  projects: {
    bikcraft: {
      tag: 'Web Design',
      title: 'Bikcraft',
      description: 'A course project for a concept store selling handcrafted and electric bikes.',
      artAlt: 'Bikcraft logo',
    },
    pulsar: {
      tag: 'Web Design, Redesign',
      title: 'Pulsar X2 Bruce Lee ed.',
      description: 'A modern, minimal page presenting the Pulsar X2 mouse in its limited Bruce Lee edition.',
      artAlt: 'Pulsar and Bruce Lee logos',
    },
    ckAutoCare: {
      tag: 'Mobile Design, Web Design',
      title: 'CK Auto Care',
      description: 'An app and website for booking car repair, washing, and detailing services.',
      artAlt: 'CK Auto Care logo',
    },
    smartly: {
      tag: 'Mobile App, Design System',
      title: 'SmartLy Brasil',
      description: 'A home and building automation app for smart devices.',
      artAlt: 'SmartLy logo',
    },
  },

  about: {
    eyebrow: '// About me',
    title: 'Websites people can actually use.',
    paragraphs: [
      "I'm a UI/UX designer for mobile and web, based in Curitiba, and for the past three years I've been the sole designer at a home automation and IoT company. That means designing the product end to end: from flow to screen, from screen to handoff, and then following what shipped to production.",
      'I study Computer Science and chose to work in design. I spend my days between a team of developers and a Figma file, and that is exactly where I like to be: understanding what can be built before deciding what is worth designing. I am a generalist with a natural pull toward UI, and I think in systems before I think in screens.',
      'I believe an interface that needs explaining has already failed.',
    ],
    cv: 'DOWNLOAD CV',
    figmaAlt: 'Figma logo',
  },

  servicesSection: {
    eyebrow: '// Services',
    title: 'What I can do for you.',
    lead: 'I design apps and websites in Figma, from the structure of the screens to a clickable prototype, with every file organised and ready for whoever builds it.',
  },

  services: {
    ux: {
      title: 'UX & Structure',
      description: 'Flows, screen architecture, and wireframes, so the product makes sense before it gets any colour.',
    },
    ui: {
      title: 'UI Design in Figma',
      description:
        'High-fidelity screen design and a clickable prototype, so you can test and present everything before a line of code is written.',
    },
    designSystem: {
      title: 'Design System & Handoff',
      description:
        'Components, styles, and measurements organised in Figma, so the development team can build without guessing anything.',
    },
  },

  faqSection: {
    eyebrow: '// FAQ',
    title: 'Your questions — my answers.',
    lead: 'Short answers to the most common questions about web design, UX/UI, website projects, and what it is like to work with me.',
  },

  faq: [
    {
      question: '01. What kinds of websites do you build?',
      answer:
        'I build clear, responsive websites for startups, freelancers, and local businesses. What matters is an organised structure, good design, and navigation anyone can follow.',
    },
    {
      question: '02. Can you redesign a website that already exists?',
      answer:
        'I can. I look at what already works, point out what gets in the way, and rebuild the structure, layout, and content while keeping everything that makes sense for your business.',
    },
    {
      question: '03. How do I start a project with you?',
      answer:
        'Send me a message through the form below with a bit about your idea. We set up a quick call and, after that, I send over a proposal with scope, timeline, and pricing.',
    },
    {
      question: '04. How does your design process work?',
      answer:
        'In three stages: an initial conversation and briefing, structure and wireframes, then the visual design of the screens. You follow along and sign off on each stage.',
    },
    {
      question: '05. How long does a website project take?',
      answer:
        'A business website usually takes three to six weeks, depending on its size, how many pages it has, and how quickly feedback and content come back.',
    },
    {
      question: '06. What do you need before we start?',
      answer:
        'Your texts, images, and logo, if you already have them, plus an idea of what the site is for and who you want to reach. If anything is missing, we sort it out together along the way.',
    },
  ],

  experienceSection: {
    eyebrow: '// Experience',
    title: 'Where I have been and what I built.',
    lead: 'A short timeline of the teams and projects I have worked on, and what I actually delivered.',
    cta: 'View my LinkedIn profile',
    educationTitle: 'Education',
  },

  experience: [
    {
      featured: true,
      period: '2025 — Present',
      mode: 'Full-time · Curitiba, Brazil',
      role: 'Junior UI/UX Designer',
      company: 'SmartLy Brasil',
      description:
        'Sole designer at a home automation and IoT company with four products in production: SmartLy, a platform for lighting, panel, and climate automation; HotFloor, focused on thermostat-based heating; SmartLy for Installers, aimed at technical users; and the internal management web platform. I run the interface cycle end to end, from flows and wireframes to high-fidelity UI in Figma, a clickable prototype, and handoff to the CTO and the front-end Tech Lead. I built the SmartLy Design System from scratch: 97 components with tokens and variants, now the basis for everything that ships. I also designed the subscription and purchase flows and the HotFloor Marketplace, from catalogue to checkout.',
      tags: ['Design System', 'Tokens & Variants', 'Payment flows', 'Home automation & IoT'],
    },
    {
      period: '2024 — Present',
      mode: 'Freelance · Curitiba, Brazil',
      role: 'Freelancer — Web & Mobile',
      description:
        'I take on independent interface projects for web and mobile, including clients in Europe. I work directly with the client to define scope and deliver high-fidelity screens, reusable components, and responsive layouts ready for development.',
      tags: ['Web', 'Mobile', 'Direct client', 'International remote'],
    },
    {
      period: '2023 — 2025',
      mode: 'Internship · Curitiba, Brazil',
      role: 'UI/UX Design Intern',
      company: 'SmartLy Brasil',
      description:
        'I joined as an intern and progressively took over the design operation at a company that had no designer. I produced flows, wireframes, and high-fidelity interfaces for new devices and app features, worked on the internal management site, and ran internal flow validations with the team before each delivery. It was in this period that I started the visual standardisation that later became the Design System.',
      tags: ['New features', 'Management site', 'Visual standardisation', 'Internal validation'],
    },
  ],

  education: [
    { course: 'Computer Science — UNICURITIBA', period: '2022 — In progress' },
    { course: 'Google UX Design — Coursera', period: 'In progress' },
    { course: 'Neuroscience Applied to UX — UDEMY', period: '2026' },
    { course: 'Information Architecture: From Research to Final Delivery — UDEMY', period: '2026' },
    { course: 'UX Writing — ENAP', period: '2025' },
    { course: 'Advanced UI Design — Origamid', period: '2023' },
  ],

  contactHome: {
    eyebrow: '// Contact',
    title: 'Shall we talk?',
    lead: 'Reach out on whichever channel you prefer.',
    channels: {
      whatsapp: { label: 'WhatsApp', action: 'Message me on WhatsApp' },
      linkedin: { label: 'LinkedIn', action: 'Open my profile' },
      email: { label: 'Email', action: 'Send me an email' },
    },
  },

  contact: {
    eyebrow: 'Contact',
    title: 'Ready for your next project?',
    lead: "Got an idea, a website that needs a refresh, or just a few questions? Send me a message — I'd love to hear from you.",
    linkedinLabel: 'Leonardo Rebouças on LinkedIn',
    emailLabel: (address: string) => `Send an email to ${address}`,
    form: {
      name: { label: 'Name', placeholder: 'Jane Smith' },
      email: { label: 'Email', placeholder: 'jane@email.com' },
      message: { label: 'Message', placeholder: 'Tell me a bit about your project...' },
      submit: 'Send message',
      sending: 'Opening your email app…',
      errors: {
        name: 'Please enter your name.',
        email: 'Please enter your email.',
        emailInvalid: "That email doesn't look valid.",
        message: 'Tell me a bit about your project.',
      },
      mail: {
        subject: (name: string) => `Website enquiry — ${name}`,
        nameLine: 'Name',
        emailLine: 'Email',
      },
    },
  },

  contactProject: {
    eyebrow: '// Get in touch',
    title: 'Whenever you are ready, just say the word.',
    lead: "Got a project in mind? I'd love to hear about it. Send me a message and let's build something good together.",
    form: {
      name: { label: 'Your name', placeholder: 'Jane Smith' },
      email: { label: 'Your email', placeholder: 'jane@email.com' },
      message: { label: 'Your message', placeholder: 'Tell me a bit about your project...' },
      submit: 'Send',
    },
  },

  projectPage: {
    back: 'Back',
    category: 'Category',
    role: 'Role',
    year: 'Year',
    next: 'Next project',
    view: 'View project',
    notFound: {
      title: 'Project not found.',
      lead: "This address doesn't exist — the link may be wrong, or the project may have been taken down.",
      back: 'Back to home',
    },
  },

  projectPages: {
    bikcraft: {
      category: 'Web Design, UI',
      role: 'Designer',
      coverAlt:
        'Bikcraft home page, with the headline “bicicletas feitas sob medida” on a black background and a photo of a dark bicycle on the right',
      description: [
        'Product design for the app that centralises control of lighting, heating, sensors, panels, scenes, and voice assistant integrations. I was the sole UI/UX Designer on the product for three years, responsible for every new feature shipped in that period, from the design system to the flows.',
        'I built the interface with semantic HTML and plain CSS, using CSS Grid for the main structures and a variable system for colours and spacing. The contact and quote forms use native validation with accessible focus states, and the icons are inline SVGs to cut down on requests. JavaScript handles the mobile menu and the entrance animations as you scroll.',
      ],
    },
    pulsar: {
      category: 'Web Design, UI',
      role: 'Designer',
      coverAlt:
        'Laptop showing the Pulsar X2 Bruce Lee Edition landing page, with the yellow mouse featured against a dark background',
      description: [
        'A limited edition product has a short window of attention, and a page that says too much dilutes the very thing that makes it desirable. For the Pulsar X2 Bruce Lee Edition, the choice was a lean landing page that works as a temporary showcase for the launch rather than a catalogue.',
        'The design challenge sat at the meeting point of two languages: the iconic legacy of Bruce Lee and the technical, contemporary aesthetic of gaming gear. I worked with plenty of breathing room between blocks, a reduced palette, and heavy-weight typography, letting the product and the collaboration elements hold the foreground. Each section advances a single argument — introduction, design detail, specification, availability — leading the visitor to the call to action without visual competition along the way.',
      ],
      imageCaption: 'Self-initiated concept project, not affiliated with the brands mentioned',
    },
    ckAutoCare: {
      category: 'Mobile Design, UI',
      role: 'Designer',
      coverAlt:
        'Phone held in hand showing the CK Auto Care app home screen, with the heading “Cuide do seu carro”',
      description: [
        'Booking a car service usually means phone calls, WhatsApp messages, and a lot of back and forth before a time is agreed. The proposal was to centralise all of that into a single flow: pick the type of service — repair, washing, or detailing — see the available slots, and confirm the booking in a few taps.',
        'I started by mapping the customer journey and its friction points, and from there designed the information architecture for both fronts: the app, focused on booking, and the website, which brings together the service showcase and the management panel for the business. The hardest screen was time selection, since the three service types have very different durations; I tested several alternatives before landing on a format that makes availability clear without overloading the screen.',
        'The visual identity balances the trust the automotive sector demands with a lighter, contemporary read, using #4C4FFF as the accent colour and a strong typographic hierarchy to guide the user through each step.',
      ],
    },
    smartly: {
      category: 'Web Design, UI',
      role: 'Designer',
      coverAlt: 'SmartLy logo on a light grey background',
      description: [
        'Product design for the app that centralises control of lighting, heating, sensors, panels, scenes, and voice assistant integrations. I was the sole UI/UX Designer on the product for three years, responsible for every new feature shipped in that period, from the design system to the flows.',
      ],
    },
  },

  footer: {
    monogram: 'LR',
    name: 'Leonardo Rebouças',
  },
}
