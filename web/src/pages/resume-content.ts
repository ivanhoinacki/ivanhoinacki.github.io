export interface ResumeLink {
  label: string;
  href: string;
  description?: string;
}

export interface ResumeRole {
  role: string;
  company: string;
  companyUrl?: string;
  location: string;
  period: string;
  intro?: string;
  bullets: string[];
  technologies?: string;
}

export interface ResumeCertification {
  label: string;
  issuer: string;
  href?: string;
}

export interface ResumeContent {
  documentLabel: string;
  homeLabel: string;
  themeLabels: {
    dark: string;
    light: string;
  };
  headline: string;
  meta: string;
  scheduleLabel: string;
  technologiesLabel: string;
  downloads: { label: string; href: string }[];
  sections: {
    aiProjects: string;
    summary: string;
    highlights: string;
    skills: string;
    experience: string;
    earlier: string;
    education: string;
    certifications: string;
    languages: string;
    contact: string;
  };
  aiProjects: ResumeLink[];
  summary: string[];
  highlights: string[];
  skills: string[];
  experience: ResumeRole[];
  earlier: ResumeRole[];
  education: string;
  certifications: ResumeCertification[];
  alura: ResumeLink[];
  languages: string[];
  contact: ResumeLink[];
}

const SCHEDULE_URL = "https://calendar.app.google/q5Pd6XSyihDqtoJG6";
const CV_PT = "/assets/cv/ivanhoinacki-resume-ats-pt-br-version.pdf";
const CV_EN = "/assets/cv/ivanhoinacki-resume-ats-en-us-version.pdf";

const aluraCertificates: ResumeLink[] = [
  { label: "Node.js Backend I", href: "https://cursos.alura.com.br/certificate/f58a1daa-6caa-4dd8-b50d-be842cfbd300" },
  { label: "Node.js Backend II: MVC, Auth", href: "https://cursos.alura.com.br/certificate/9c75af5e-8291-49e6-b19e-7954e9920aa4" },
  { label: "TypeScript", href: "https://cursos.alura.com.br/certificate/bd925c47-093c-4f92-8e48-b3c674128c53" },
  { label: "Docker: Containers", href: "https://cursos.alura.com.br/certificate/b0a7d8d9-6d7a-4ebd-a3ac-032fb28fbdb6" },
  { label: "Kubernetes: Container Orchestration", href: "https://cursos.alura.com.br/certificate/7281607a-bb90-49b5-a0a9-4dd0b3603b8b" },
  { label: "HTTP: Web Fundamentals", href: "https://cursos.alura.com.br/certificate/0c74e3dc-7580-41c2-99cc-8c037b1390f8" },
  { label: "JavaScript Advanced: Browser & Design Patterns", href: "https://cursos.alura.com.br/certificate/6f44714a-361f-4077-8eaa-3f16c8d89c26" },
  { label: "JavaScript Advanced: MVC, Proxy & Factory", href: "https://cursos.alura.com.br/certificate/af60ca84-a29d-427a-80ff-0c32e47eea0d" },
  { label: "JavaScript Advanced: IndexedDB", href: "https://cursos.alura.com.br/certificate/57c2a036-5fa6-495a-9162-6d9d98b3f15b" }
];

const aluraCertificatesPt: ResumeLink[] = [
  { label: "Node.js: criando sua primeira biblioteca", href: "https://cursos.alura.com.br/certificate/f58a1daa-6caa-4dd8-b50d-be842cfbd300" },
  { label: "Node.js: MVC e autenticação", href: "https://cursos.alura.com.br/certificate/9c75af5e-8291-49e6-b19e-7954e9920aa4" },
  { label: "TypeScript", href: "https://cursos.alura.com.br/certificate/bd925c47-093c-4f92-8e48-b3c674128c53" },
  { label: "Docker: criando e gerenciando contêineres", href: "https://cursos.alura.com.br/certificate/b0a7d8d9-6d7a-4ebd-a3ac-032fb28fbdb6" },
  { label: "Kubernetes: orquestração de contêineres", href: "https://cursos.alura.com.br/certificate/7281607a-bb90-49b5-a0a9-4dd0b3603b8b" },
  { label: "HTTP: fundamentos da web", href: "https://cursos.alura.com.br/certificate/0c74e3dc-7580-41c2-99cc-8c037b1390f8" },
  { label: "JavaScript avançado: navegador e padrões de projeto", href: "https://cursos.alura.com.br/certificate/6f44714a-361f-4077-8eaa-3f16c8d89c26" },
  { label: "JavaScript avançado: MVC, Proxy e Factory", href: "https://cursos.alura.com.br/certificate/af60ca84-a29d-427a-80ff-0c32e47eea0d" },
  { label: "JavaScript avançado: IndexedDB", href: "https://cursos.alura.com.br/certificate/57c2a036-5fa6-495a-9162-6d9d98b3f15b" }
];

export const resumeEn: ResumeContent = {
  documentLabel: "English resume",
  homeLabel: "Home",
  themeLabels: {
    dark: "Switch to dark theme",
    light: "Switch to light theme"
  },
  headline:
    "Senior Software Engineer | Backend & Platform Engineering | TypeScript, Node.js, AWS | Travel Tech | AI-Assisted Development",
  meta: "Brazil, UTC-3 | Remote / Global | English: professional working proficiency",
  scheduleLabel: "Meeting with Ivan Hoinacki - 30min",
  technologiesLabel: "Technologies",
  downloads: [
    { label: "Download CV (PDF, English)", href: CV_EN },
    { label: "Baixar CV (PDF, português)", href: CV_PT }
  ],
  sections: {
    aiProjects: "AI Projects and Materials",
    summary: "Summary",
    highlights: "Highlights",
    skills: "Core Skills",
    experience: "Professional Experience",
    earlier: "Earlier Experience",
    education: "Education",
    certifications: "Certifications",
    languages: "Languages",
    contact: "Contact"
  },
  aiProjects: [
    {
      label: "Codex Workflow Playbook",
      href: "https://ivanhoinacki.github.io/codex-workflow-workbook/#/journeys/foundations/purpose-system-shape/purpose",
      description:
        "playbook with learning journeys I created for the company's developers: an AI engineering environment optimized for low token cost."
    },
    {
      label: "Team Claude Config",
      href: "https://github.com/ivanhoinacki/team-exp-claude-config",
      description:
        "AI ecosystem I built for the engineering team: 9 rules, 16 skills, 4 agents, 25 hooks, and MCP integrations, installable with a single command."
    },
    {
      label: "AI Workshops",
      href: "https://github.com/ivanhoinacki/team-exp-claude-config/tree/main/workshops",
      description: "materials from the AI-assisted engineering training sessions I led for the team."
    },
    {
      label: "Workshop 02 - Claude Code Ecosystem",
      href: "https://ivanhoinacki.github.io/team-exp-claude-config/workshop-02",
      description: "slides from the live presentation of the ecosystem."
    }
  ],
  summary: [
    "Senior Software Engineer and Software Architect with 15+ years of experience building backend platforms, distributed systems, cloud-native services, and product integrations across travel, e-commerce, retail, banking, ERP, and industrial automation.",
    "Currently working at Luxury Escapes in the Experiences vertical, building travel technology around provider integrations, booking flows, AI-powered attraction curation, search/discovery, analytics, and operational reliability. Strong hands-on background in TypeScript, Node.js, NestJS, PostgreSQL, MongoDB, Redis, AWS, Azure, Kubernetes, Terraform, CI/CD, Datadog, OpenTelemetry, and GenAI/RAG.",
    "I work well in remote international teams, own ambiguous technical problems end to end, and combine production engineering with architecture, mentoring, code review, and cross-functional product delivery. AI-assisted development is my daily practice: Claude-based coding agents, spec-driven development, context engineering, and AI-assisted code review integrated into the engineering workflow."
  ],
  highlights: [
    "Expanded Luxury Escapes' AI-powered attraction curation from 75 attractions in 5 cities to 1,193+ attractions across 18 countries and 56 cities.",
    "Delivered CustomLinc / South Sea Cruises integration improvements through 14 merged PRs, production deployment, and no documented production incidents.",
    "Reduced distributed logging costs by approximately 40% at ALLOS through OpenTelemetry and hybrid observability architecture.",
    "Standardized CI/CD, quality gates, security checks, and engineering governance across 67 repositories.",
    "Supported 12+ multidisciplinary squads across backend, frontend, mobile, QA, product, and delivery contexts.",
    "Built web engineering foundations from scratch at Limber Software, scaling from the first web engineering role into multiple specialized teams."
  ],
  skills: [
    "Backend: TypeScript, Node.js, NestJS, Express, Go, Python/FastAPI, REST, GraphQL, gRPC, OpenAPI.",
    "Cloud and platform: AWS, Azure, GCP, Docker, Kubernetes, Terraform, Helm, GitHub Actions, GitLab CI, Azure DevOps.",
    "Data and observability: PostgreSQL, PostGIS, MongoDB, Redis, BigQuery, Snowplow, Datadog, OpenTelemetry, Prometheus, Grafana.",
    "Architecture: Microservices, event-driven systems, DDD, Clean Architecture, BFF, serverless, replatforming, monolith-to-microservices decomposition.",
    "AI and automation: AI-assisted development (Claude, Claude Code, coding agents), spec-driven development, Anthropic API, OpenAI API, RAG, MCP, GenAI governance, prompt engineering, validation guardrails, model workflows.",
    "Leadership: architecture reviews, code reviews, mentoring, technical planning, delivery alignment, engineering standards."
  ],
  experience: [
    {
      role: "Senior Software Engineer",
      company: "Luxury Escapes",
      companyUrl: "https://luxuryescapes.com",
      location: "Remote | Melbourne, Australia",
      period: "February 2026 – Present",
      intro:
        "Luxury Escapes is a global travel e-commerce company operating accommodation, experiences, tours, transfers, and travel package products across international markets.",
      bullets: [
        "Owned backend and product engineering work in the Experiences vertical, covering attractions, tours, provider integrations, search/discovery, booking flows, voucher flows, analytics, and operational reliability.",
        "Designed and shipped backend services and integrations across multi-repository systems involving order flows, customer-facing surfaces, admin workflows, and third-party provider APIs.",
        "Built and evolved an AI-powered attraction curation pipeline, expanding coverage from 75 attractions in 5 cities to 1,193+ attractions across 18 countries and 56 cities.",
        "Added validation guardrails to AI-generated attraction data using geocoding, Google Places validation, deduplication, and quality checks.",
        "Delivered B2B travel provider integration improvements (CustomLinc / South Sea Cruises, Rezdy, and Klook): availability sync, booking flows, vouchers, cancellation behavior, fare/product mapping, and reconciliation data.",
        "Contributed to the Experiences Passport MVP: backend foundations, data model, endpoints, voucher lifecycle, redemption sync, order integration, search badge, deal page section, and My Escapes vouchers.",
        "Built operational visibility with BigQuery, Snowplow, and Datadog for product analytics, provider behavior, curation quality, and engineering diagnostics.",
        "Improved reliability through Datadog APM/logs/monitors, cache warming, rate limiting, rollout planning, and investigation workflows for external provider dependencies.",
        "Used AI-assisted development as daily practice: Claude-based coding agents, spec-driven development, and AI-assisted code review integrated into the delivery workflow.",
        "Led an internal technical workshop in English on AI-assisted engineering workflows and presented an AI-powered travel intelligence prototype at the Luxury Escapes 2026 Hackathon."
      ],
      technologies:
        "TypeScript, Node.js, NestJS, PostgreSQL, PostGIS, BigQuery, Snowplow, Datadog, AWS, Docker, GitHub Actions, OpenAI API, Nominatim, Google Places API"
    },
    {
      role: "Solutions Architect",
      company: "ALLOS",
      companyUrl: "https://allos.co/",
      location: "Remote | Brazil",
      period: "January 2025 – January 2026",
      intro:
        "ALLOS is one of Brazil's largest shopping center companies, operating 56 malls and a distributed digital ecosystem with high transaction volume.",
      bullets: [
        "Led architecture work across platform engineering, observability, security, cloud, DevOps, and AI adoption.",
        "Supported 12+ multidisciplinary squads across GMV Capture, Benefits, Promotions, Core, BFF, backend, frontend, mobile, QA, product, and delivery.",
        "Designed a distributed observability strategy using OpenTelemetry, Application Insights, Prometheus, and Grafana, reducing log costs by approximately 40%.",
        "Implemented technical health dashboards and DORA metrics: Lead Time, Change Failure Rate, MTTR, and Deploy Frequency.",
        "Standardized CI/CD, GitOps, Infrastructure as Code, SonarQube quality gates across 67 repositories, SAST/SCA, OWASP Top 10 practices, and cloud governance.",
        "Led generative AI adoption discussions: model versioning, governance, security, RAG strategies, and internal proof-of-concepts.",
        "Created the Benefits Virtual Assistant (LLM + RAG) for the websites and apps of the 56 malls: per-mall indexed knowledge base, context guardrails, and A/B-tested rollout, reducing in-person service lines and peak-season operating costs; the initiative started as my PoC and evolved into the AI platform squad."
      ],
      technologies:
        "TypeScript, Node.js, NestJS, Go, Python, FastAPI, Azure AKS, Azure Functions, Azure Service Bus, OpenTelemetry, Prometheus, Grafana, Terraform, Helm, Kubernetes, PostgreSQL, MongoDB Atlas, Redis"
    },
    {
      role: "Tech Lead / Senior Software Engineer",
      company: "ília digital",
      companyUrl: "https://ilia.digital/",
      location: "Remote | Brasília, Brazil",
      period: "September 2020 – December 2024",
      bullets: [
        "Led architecture discussions, technical breakdowns, feature decomposition, and delivery planning for multidisciplinary squads.",
        "Built and modernized Node.js/TypeScript services using NestJS, Clean Architecture, DDD, REST APIs, distributed messaging, and cloud-native deployment patterns.",
        "Acted as technical reference through code reviews, mentoring, guilds, engineering standards, and stakeholder alignment with Product, Delivery, and Commercial teams.",
        "Modernized customer-facing BFF services to NestJS and contributed to migrations from Django-based systems to Node.js/MongoDB services.",
        "Reduced critical bugs from 69 to 35 in 4 weeks during a high-priority product stabilization effort.",
        "Took over technical leadership of an international Open Banking project for Santander (UK) after the original Tech Lead left, coordinating 3 squads in a remote multicultural environment.",
        "Integrated SaltEdge for Open Banking and Onfido for KYC/identity verification in an international banking context.",
        "Received the ília Awards 2023 in two categories: Learning and Creativity."
      ],
      technologies:
        "TypeScript, Node.js, NestJS, Express, Go, Java, React, Azure AKS, Azure Functions, Azure Service Bus, AWS, Docker, Kubernetes, Terraform, PostgreSQL, MongoDB, Redis, Jest, Supertest, Pact"
    },
    {
      role: "Staff Software Engineer / Tech Lead / Senior Software Engineer",
      company: "Limber Software",
      companyUrl: "http://www.limbersoftware.com.br",
      location: "Pato Branco – Paraná, Brazil",
      period: "November 2016 – April 2020",
      bullets: [
        "Joined as the first web engineer and built the company's web engineering foundation from scratch: Linux servers, Git Flow, CI/CD, SonarQube, backend architecture, and frontend standards.",
        "Scaled the team from an initial 2-person setup into multiple specialized engineering teams across backend, frontend, mobile, and QA.",
        "Led architecture, delivery, technical planning, client alignment, vendor relationships, and engineering quality across tourism, hospitality, entertainment, e-commerce, and management platforms.",
        "Implemented CI/CD pipelines, automated builds/tests/deploys, quality gates, security checks, and production traceability.",
        "Reduced documented vulnerabilities by ~60%, incidents by ~45%, deployment time by ~50%, and increased automated test coverage by ~80%.",
        "Delivered projects for clients including Itaipu Binacional, Parque das Aves, Serra Verde Express, Magic City Park, Giordani Turismo, Cascaneia Parque, and BWT Operadora."
      ],
      technologies:
        "TypeScript, Node.js, Angular, AngularJS, Electron, MongoDB, PostgreSQL, Firebird, Azure, GCP, Linux, Docker, Kubernetes, Jenkins, Azure Pipelines, SonarQube"
    },
    {
      role: "Full Stack Developer",
      company: "XPert Tecnologia e Automação",
      companyUrl: "http://www.xpert.com.br",
      location: "Pato Branco – Paraná, Brazil",
      period: "February 2013 – November 2016",
      bullets: [
        "Led modernization of a legacy desktop ERP into a modern web architecture over approximately 18 months without service interruption.",
        "Replaced legacy systems with a Node.js backend, AngularJS frontend, REST APIs, JWT authentication, and RBAC authorization.",
        "Reduced new feature development time by ~70% and improved general system performance by ~60%.",
        "Built integrations with industrial IoT devices, sensors, telemetry, automation systems, MQTT, WebSockets, and real-time dashboards."
      ],
      technologies:
        "Node.js, Express, TypeScript, AngularJS, JavaScript, HTML5, CSS3, PHP, MySQL, MongoDB, MQTT, WebSockets, Git, Jenkins, Docker"
    }
  ],
  earlier: [
    {
      role: "Full Stack Developer",
      company: "SESMO Software for Occupational Medicine",
      companyUrl: "http://www.sesmo.com.br",
      location: "Pato Branco – Paraná, Brazil",
      period: "October 2011 – February 2013",
      bullets: [
        "Built ASP.NET/C# web applications for occupational medicine, optimized Firebird queries from ~10s to 1s, automated tax/legal reporting, and integrated external government systems."
      ]
    },
    {
      role: "QA Analyst",
      company: "Viasoft Softwares Empresariais",
      companyUrl: "http://www.viasoft.com.br",
      location: "Pato Branco – Paraná, Brazil",
      period: "October 2011 – September 2012",
      bullets: [
        "Built automated tests with Selenium WebDriver for corporate ERP systems, regression plans, functional/integration tests, and Oracle validation queries."
      ]
    },
    {
      role: "Help Desk / Junior Data Analyst",
      company: "C&S Systems",
      companyUrl: "http://www.csistemas.com.br",
      location: "Realeza – Paraná, Brazil",
      period: "September 2010 – August 2011",
      bullets: ["Developed SSRS dashboards, SQL reports, ETL routines, data modeling, and Visual Basic 6 automations."]
    },
    {
      role: "Network Engineer / Web Developer",
      company: "World Line Net",
      companyUrl: "http://www.wln.com.br",
      location: "Realeza – Paraná, Brazil",
      period: "December 2009 – August 2010",
      bullets: [
        "Configured Cisco, Mikrotik, wireless links, Nagios monitoring, server hardening, client support, and early web development with HTML/CSS/JavaScript."
      ]
    }
  ],
  education:
    "Technologist Degree in Systems Analysis and Development – Centro Universitário Internacional UNINTER, 2024 – 2026 (completed May 2026)",
  certifications: [
    { label: "IEEE Membership (2026, Credential ID 102431427)", issuer: "IEEE" },
    { label: "EF SET Certificate C2 Proficiency (English)", issuer: "EF SET, 2023", href: "https://cert.efset.org/WrwtBB" },
    {
      label: "TDD – Test-Driven Development",
      issuer: "ITA – Instituto Tecnológico de Aeronáutica, 2024",
      href: "https://www.coursera.org/account/accomplishments/verify/W7CDHC5478YK"
    },
    {
      label: "Divide and Conquer, Sorting and Searching, and Randomized Algorithms",
      issuer: "Stanford University via Coursera, 2024",
      href: "https://www.coursera.org/account/accomplishments/verify/HFRVV45VS8GL"
    },
    {
      label: "Thought Leadership",
      issuer: "LinkedIn Learning, 2023",
      href: "https://www.linkedin.com/learning/certificates/8daebb55e1ea611ba155a79c406c2d88142365a2b9e0ee067c2f4c3af2e562fb"
    }
  ],
  alura: aluraCertificates,
  languages: [
    "Portuguese: native.",
    "English: professional working proficiency (daily working language; EF SET C2 certificate)."
  ],
  contact: [
    { label: "ivanhoinack@gmail.com", href: "mailto:ivanhoinack@gmail.com" },
    { label: "Meeting with Ivan Hoinacki - 30min", href: SCHEDULE_URL },
    { label: "linkedin.com/in/ivanhoinacki", href: "https://www.linkedin.com/in/ivanhoinacki/" },
    { label: "github.com/ivanhoinacki", href: "https://github.com/ivanhoinacki" }
  ]
};

export const resumePt: ResumeContent = {
  documentLabel: "Currículo em português do Brasil",
  homeLabel: "Início",
  themeLabels: {
    dark: "Mudar para o tema escuro",
    light: "Mudar para o tema claro"
  },
  headline:
    "Engenheiro de Software Sênior | Engenharia de Backend e Plataforma | TypeScript, Node.js, AWS | Tecnologia para Turismo | Desenvolvimento Assistido por IA",
  meta: "Brasil, UTC-3 | Remoto / Global | Inglês: proficiência profissional",
  scheduleLabel: "Agendar conversa de 30 min com Ivan Hoinacki",
  technologiesLabel: "Tecnologias",
  downloads: [
    { label: "Baixar currículo (PDF, português)", href: CV_PT },
    { label: "Baixar currículo (PDF, inglês)", href: CV_EN }
  ],
  sections: {
    aiProjects: "Projetos e Materiais de IA",
    summary: "Resumo",
    highlights: "Destaques",
    skills: "Competências Principais",
    experience: "Experiência Profissional",
    earlier: "Experiência Anterior",
    education: "Formação",
    certifications: "Certificações",
    languages: "Idiomas",
    contact: "Contato"
  },
  aiProjects: [
    {
      label: "Codex Workflow Playbook",
      href: "https://ivanhoinacki.github.io/codex-workflow-workbook/#/journeys/foundations/purpose-system-shape/purpose",
      description:
        "Guia com jornadas de aprendizado que criei para os desenvolvedores da empresa: um ambiente de engenharia com IA otimizado para baixo consumo de tokens."
    },
    {
      label: "Configuração Claude do Time",
      href: "https://github.com/ivanhoinacki/team-exp-claude-config",
      description:
        "Ecossistema de IA que construí para o time de engenharia: 9 regras, 16 habilidades reutilizáveis, 4 agentes, 25 automações e integrações MCP, instalável com um único comando."
    },
    {
      label: "Workshops de IA",
      href: "https://github.com/ivanhoinacki/team-exp-claude-config/tree/main/workshops",
      description: "Materiais dos treinamentos sobre engenharia assistida por IA que conduzi para o time."
    },
    {
      label: "Workshop 02 - Ecossistema Claude Code",
      href: "https://ivanhoinacki.github.io/team-exp-claude-config/workshop-02",
      description: "Slides utilizados na apresentação ao vivo do ecossistema."
    }
  ],
  summary: [
    "Engenheiro de Software Sênior e Arquiteto de Software com mais de 15 anos de experiência na construção de plataformas de backend, sistemas distribuídos, serviços nativos de nuvem e integrações de produto nos setores de turismo, comércio eletrônico, varejo, serviços bancários, ERP e automação industrial.",
    "Atualmente trabalho na Luxury Escapes, na vertical de Experiências, construindo tecnologia para turismo com integrações de fornecedores, fluxos de reserva, curadoria de atrações com IA, busca e descoberta, análise de dados e confiabilidade operacional. Tenho forte experiência prática com TypeScript, Node.js, NestJS, PostgreSQL, MongoDB, Redis, AWS, Azure, Kubernetes, Terraform, CI/CD, Datadog, OpenTelemetry e IA generativa/RAG.",
    "Trabalho bem com equipes internacionais e remotas, assumo problemas técnicos ambíguos de ponta a ponta e combino engenharia de produção com arquitetura, mentoria, revisão de código e entrega multidisciplinar de produtos. O desenvolvimento assistido por IA faz parte da minha rotina, com agentes de programação baseados em Claude, desenvolvimento orientado por especificações, engenharia de contexto e revisão de código assistida por IA integrados ao fluxo de engenharia."
  ],
  highlights: [
    "Expandi a curadoria de atrações com IA da Luxury Escapes de 75 atrações em 5 cidades para mais de 1.193 atrações em 18 países e 56 cidades.",
    "Entreguei melhorias na integração CustomLinc / South Sea Cruises por meio de 14 PRs incorporados, implantação em produção e nenhum incidente de produção documentado.",
    "Reduzi os custos de registros distribuídos em aproximadamente 40% na ALLOS com OpenTelemetry e uma arquitetura híbrida de observabilidade.",
    "Padronizei CI/CD, critérios de qualidade, verificações de segurança e governança de engenharia em 67 repositórios.",
    "Apoiei mais de 12 equipes multidisciplinares de backend, frontend, desenvolvimento móvel, qualidade, produto e entrega.",
    "Construí as bases de engenharia web na Limber Software do zero, escalando do primeiro papel de engenharia web para múltiplos times especializados."
  ],
  skills: [
    "Backend: TypeScript, Node.js, NestJS, Express, Go, Python/FastAPI, REST, GraphQL, gRPC, OpenAPI.",
    "Nuvem e plataforma: AWS, Azure, GCP, Docker, Kubernetes, Terraform, Helm, GitHub Actions, GitLab CI, Azure DevOps.",
    "Dados e observabilidade: PostgreSQL, PostGIS, MongoDB, Redis, BigQuery, Snowplow, Datadog, OpenTelemetry, Prometheus, Grafana.",
    "Arquitetura: microsserviços, sistemas orientados a eventos, DDD, Arquitetura Limpa, BFF, computação sem servidor, modernização de plataformas e decomposição de monólitos.",
    "IA e automação: desenvolvimento assistido por IA com Claude e Claude Code, agentes de programação, desenvolvimento orientado por especificações, APIs da Anthropic e OpenAI, RAG, MCP, governança de IA generativa, engenharia de prompts, mecanismos de validação e fluxos de modelos.",
    "Liderança: revisões de arquitetura e de código, mentoria, planejamento técnico, alinhamento de entregas e padrões de engenharia."
  ],
  experience: [
    {
      role: "Engenheiro de Software Sênior",
      company: "Luxury Escapes",
      companyUrl: "https://luxuryescapes.com",
      location: "Remoto | Melbourne, Austrália",
      period: "fevereiro de 2026 – presente",
      intro:
        "A Luxury Escapes é uma empresa global de comércio eletrônico para turismo que oferece hospedagens, experiências, passeios, traslados e pacotes de viagem em mercados internacionais.",
      bullets: [
        "Assumi de ponta a ponta a engenharia de backend e de produto na vertical de Experiências, abrangendo atrações, passeios, integrações com fornecedores, busca e descoberta, reservas, vouchers, análise de dados e confiabilidade operacional.",
        "Projetei e entreguei serviços de backend e integrações em sistemas com múltiplos repositórios, envolvendo fluxos de pedidos, interfaces para clientes, rotinas administrativas e APIs de fornecedores externos.",
        "Construí e evoluí uma esteira de curadoria de atrações com IA, ampliando a cobertura de 75 atrações em 5 cidades para mais de 1.193 atrações em 18 países e 56 cidades.",
        "Adicionei mecanismos de validação aos dados de atrações gerados por IA, usando geocodificação, validação pelo Google Places, deduplicação e verificações de qualidade.",
        "Entreguei melhorias nas integrações B2B com fornecedores de turismo — CustomLinc / South Sea Cruises, Rezdy e Klook — incluindo sincronização de disponibilidade, reservas, vouchers, cancelamentos, mapeamento de tarifas e produtos e dados de conciliação.",
        "Contribuí para o produto mínimo viável do Experiences Passport com fundações de backend, modelo de dados, endpoints, ciclo de vida de vouchers, sincronização de resgates, integração de pedidos, selo de busca, seção na página da oferta e vouchers no My Escapes.",
        "Construí visibilidade operacional com BigQuery, Snowplow e Datadog para análise de produto, comportamento de fornecedores, qualidade da curadoria e diagnóstico de engenharia.",
        "Melhorei a confiabilidade com APM, registros e monitores no Datadog, aquecimento de cache, limitação de requisições, planejamento de implantações e fluxos de investigação para dependências externas.",
        "Usei desenvolvimento assistido por IA diariamente, com agentes de programação baseados em Claude, desenvolvimento orientado por especificações e revisão de código assistida por IA integrados ao fluxo de entrega.",
        "Conduzi, em inglês, um workshop técnico interno sobre fluxos de engenharia assistidos por IA e apresentei um protótipo de inteligência para turismo com IA no Hackathon 2026 da Luxury Escapes."
      ],
      technologies:
        "TypeScript, Node.js, NestJS, PostgreSQL, PostGIS, BigQuery, Snowplow, Datadog, AWS, Docker, GitHub Actions, OpenAI API, Nominatim, Google Places API"
    },
    {
      role: "Arquiteto de Soluções",
      company: "ALLOS",
      companyUrl: "https://allos.co/",
      location: "Remoto | Brasil",
      period: "janeiro de 2025 – janeiro de 2026",
      intro:
        "A ALLOS é uma das maiores operadoras de shopping centers do Brasil, com 56 empreendimentos e um ecossistema digital distribuído de alto volume transacional.",
      bullets: [
        "Liderei iniciativas de arquitetura em engenharia de plataforma, observabilidade, segurança, nuvem, DevOps e adoção de IA.",
        "Apoiei mais de 12 equipes multidisciplinares nos domínios de captura de GMV, benefícios, promoções, núcleo da plataforma, BFF, backend, frontend, desenvolvimento móvel, qualidade, produto e entrega.",
        "Desenhei uma estratégia de observabilidade distribuída com OpenTelemetry, Application Insights, Prometheus e Grafana, reduzindo custos de registros em aproximadamente 40%.",
        "Implementei painéis de saúde técnica e métricas DORA: tempo de entrega, taxa de falha em mudanças, tempo médio de recuperação e frequência de implantação.",
        "Padronizei CI/CD, GitOps, infraestrutura como código, critérios de qualidade do SonarQube em 67 repositórios, SAST/SCA, práticas do OWASP Top 10 e governança de nuvem.",
        "Liderei discussões sobre adoção de IA generativa, abrangendo versionamento de modelos, governança, segurança, estratégias RAG e provas de conceito internas.",
        "Criei o Assistente Virtual de Benefícios com LLM e RAG para os sites e aplicativos dos 56 shoppings: base de conhecimento indexada por shopping, limites de contexto e implantação com teste A/B, reduzindo filas de atendimento presencial e custos operacionais em datas de pico. A iniciativa nasceu de uma prova de conceito minha e evoluiu para a equipe de plataforma de IA."
      ],
      technologies:
        "TypeScript, Node.js, NestJS, Go, Python, FastAPI, Azure AKS, Azure Functions, Azure Service Bus, OpenTelemetry, Prometheus, Grafana, Terraform, Helm, Kubernetes, PostgreSQL, MongoDB Atlas, Redis"
    },
    {
      role: "Líder Técnico / Engenheiro de Software Sênior",
      company: "ília digital",
      companyUrl: "https://ilia.digital/",
      location: "Remoto | Brasília, Brasil",
      period: "setembro de 2020 – dezembro de 2024",
      bullets: [
        "Liderei discussões de arquitetura, detalhamento técnico, decomposição de funcionalidades e planejamento de entregas para equipes multidisciplinares.",
        "Construí e modernizei serviços Node.js/TypeScript com NestJS, Arquitetura Limpa, DDD, APIs REST, mensageria distribuída e padrões de implantação nativos de nuvem.",
        "Atuei como referência técnica por meio de revisões de código, mentoria, comunidades de prática, padrões de engenharia e alinhamento com Produto, Entrega e Comercial.",
        "Modernizei serviços BFF voltados ao cliente para NestJS e contribuí para migrações de sistemas Django para serviços Node.js/MongoDB.",
        "Reduzi bugs críticos de 69 para 35 em 4 semanas durante um esforço prioritário de estabilização de produto.",
        "Assumi a liderança técnica de um projeto internacional de Open Banking do Santander no Reino Unido após a saída do líder técnico original, coordenando 3 equipes em um ambiente remoto e multicultural.",
        "Integrei SaltEdge para Open Banking e Onfido para verificação de identidade e KYC em um contexto bancário internacional.",
        "Recebi o ília Awards 2023 nas categorias Aprendizado e Criatividade."
      ],
      technologies:
        "TypeScript, Node.js, NestJS, Express, Go, Java, React, Azure AKS, Azure Functions, Azure Service Bus, AWS, Docker, Kubernetes, Terraform, PostgreSQL, MongoDB, Redis, Jest, Supertest, Pact"
    },
    {
      role: "Engenheiro de Software Staff / Líder Técnico / Engenheiro de Software Sênior",
      company: "Limber Software",
      companyUrl: "http://www.limbersoftware.com.br",
      location: "Pato Branco – Paraná, Brasil",
      period: "novembro de 2016 – abril de 2020",
      bullets: [
        "Entrei como o primeiro engenheiro web e construí do zero as bases de engenharia web da empresa: servidores Linux, Git Flow, CI/CD, SonarQube, arquitetura de backend e padrões de frontend.",
        "Escalei a equipe de uma estrutura inicial de 2 pessoas para múltiplos times especializados em backend, frontend, desenvolvimento móvel e qualidade.",
        "Liderei arquitetura, entregas, planejamento técnico, alinhamento com clientes, relacionamento com fornecedores e qualidade de engenharia em plataformas de turismo, hotelaria, entretenimento, comércio eletrônico e gestão.",
        "Implementei esteiras de CI/CD, compilação, testes e implantação automatizados, critérios de qualidade, verificações de segurança e rastreabilidade em produção.",
        "Reduzi vulnerabilidades documentadas em aproximadamente 60%, incidentes em 45% e tempo de implantação em 50%, além de aumentar a cobertura de testes automatizados em 80%.",
        "Entreguei projetos para clientes incluindo Itaipu Binacional, Parque das Aves, Serra Verde Express, Magic City Park, Giordani Turismo, Cascaneia Parque e BWT Operadora."
      ],
      technologies:
        "TypeScript, Node.js, Angular, AngularJS, Electron, MongoDB, PostgreSQL, Firebird, Azure, GCP, Linux, Docker, Kubernetes, Jenkins, Azure Pipelines, SonarQube"
    },
    {
      role: "Desenvolvedor Full Stack",
      company: "XPert Tecnologia e Automação",
      companyUrl: "http://www.xpert.com.br",
      location: "Pato Branco – Paraná, Brasil",
      period: "fevereiro de 2013 – novembro de 2016",
      bullets: [
        "Liderei a modernização de um ERP desktop legado para uma arquitetura web moderna em aproximadamente 18 meses sem interrupção de serviço.",
        "Substituí sistemas legados por um backend em Node.js, frontend em AngularJS, APIs REST, autenticação JWT e autorização baseada em papéis.",
        "Reduzi o tempo de desenvolvimento de novas funcionalidades em aproximadamente 70% e melhorei o desempenho geral do sistema em 60%.",
        "Construí integrações com dispositivos IoT industriais, sensores, telemetria, sistemas de automação, MQTT, WebSockets e dashboards em tempo real."
      ],
      technologies:
        "Node.js, Express, TypeScript, AngularJS, JavaScript, HTML5, CSS3, PHP, MySQL, MongoDB, MQTT, WebSockets, Git, Jenkins, Docker"
    }
  ],
  earlier: [
    {
      role: "Desenvolvedor Full Stack",
      company: "SESMO Software para Medicina Ocupacional",
      companyUrl: "http://www.sesmo.com.br",
      location: "Pato Branco – Paraná, Brasil",
      period: "outubro de 2011 – fevereiro de 2013",
      bullets: [
        "Construí aplicações web ASP.NET/C# para medicina ocupacional, reduzi o tempo de consultas Firebird de aproximadamente 10 segundos para 1 segundo, automatizei relatórios fiscais e legais e integrei sistemas governamentais externos."
      ]
    },
    {
      role: "Analista de Qualidade",
      company: "Viasoft Softwares Empresariais",
      companyUrl: "http://www.viasoft.com.br",
      location: "Pato Branco – Paraná, Brasil",
      period: "outubro de 2011 – setembro de 2012",
      bullets: [
        "Construí testes automatizados com Selenium WebDriver para ERPs corporativos, planos de regressão, testes funcionais e de integração e consultas Oracle de validação."
      ]
    },
    {
      role: "Suporte Técnico / Analista de Dados Júnior",
      company: "C&S Systems",
      companyUrl: "http://www.csistemas.com.br",
      location: "Realeza – Paraná, Brasil",
      period: "setembro de 2010 – agosto de 2011",
      bullets: ["Desenvolvi painéis SSRS, relatórios SQL, rotinas ETL, modelagem de dados e automações em Visual Basic 6."]
    },
    {
      role: "Engenheiro de Redes / Desenvolvedor Web",
      company: "World Line Net",
      companyUrl: "http://www.wln.com.br",
      location: "Realeza – Paraná, Brasil",
      period: "dezembro de 2009 – agosto de 2010",
      bullets: [
        "Configurei equipamentos Cisco e Mikrotik, enlaces sem fio, monitoramento com Nagios, proteção de servidores, suporte a clientes e desenvolvimento web com HTML, CSS e JavaScript."
      ]
    }
  ],
  education:
    "Curso Superior de Tecnologia em Análise e Desenvolvimento de Sistemas – Centro Universitário Internacional UNINTER, 2024 – 2026 (concluído em maio de 2026)",
  certifications: [
    { label: "Membro do IEEE (2026, credencial 102431427)", issuer: "IEEE" },
    { label: "Certificado EF SET C2 de proficiência em inglês", issuer: "EF SET, 2023", href: "https://cert.efset.org/WrwtBB" },
    {
      label: "TDD – Desenvolvimento de Software Guiado por Testes",
      issuer: "ITA – Instituto Tecnológico de Aeronáutica, 2024",
      href: "https://www.coursera.org/account/accomplishments/verify/W7CDHC5478YK"
    },
    {
      label: "Divide and Conquer, Sorting and Searching, and Randomized Algorithms",
      issuer: "Stanford University via Coursera, 2024",
      href: "https://www.coursera.org/account/accomplishments/verify/HFRVV45VS8GL"
    },
    {
      label: "Como Desenvolver a Liderança de Pensamento",
      issuer: "LinkedIn Learning, 2023",
      href: "https://www.linkedin.com/learning/certificates/8daebb55e1ea611ba155a79c406c2d88142365a2b9e0ee067c2f4c3af2e562fb"
    }
  ],
  alura: aluraCertificatesPt,
  languages: [
    "Português: nativo.",
    "Inglês: proficiência profissional (uso diário no trabalho; certificado EF SET C2)."
  ],
  contact: [
    { label: "ivanhoinack@gmail.com", href: "mailto:ivanhoinack@gmail.com" },
    { label: "Agendar conversa de 30 min com Ivan Hoinacki", href: SCHEDULE_URL },
    { label: "linkedin.com/in/ivanhoinacki", href: "https://www.linkedin.com/in/ivanhoinacki/" },
    { label: "github.com/ivanhoinacki", href: "https://github.com/ivanhoinacki" }
  ]
};
