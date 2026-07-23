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

export const resumeEn: ResumeContent = {
  documentLabel: "English résumé",
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
    "Most recently worked at Luxury Escapes in the Experiences vertical, building travel technology around provider integrations, booking flows, AI-powered attraction curation, search/discovery, analytics, and operational reliability. Strong hands-on background in TypeScript, Node.js, NestJS, PostgreSQL, MongoDB, Redis, AWS, Azure, Kubernetes, Terraform, CI/CD, Datadog, OpenTelemetry, and GenAI/RAG.",
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
      period: "February 2026 – July 2026",
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
  documentLabel: "Currículo em português",
  headline:
    "Senior Software Engineer | Backend & Platform Engineering | TypeScript, Node.js, AWS | Travel Tech | AI-Assisted Development",
  meta: "Brasil, UTC-3 | Remoto / Global | Inglês: proficiência profissional",
  scheduleLabel: "Meeting with Ivan Hoinacki - 30min",
  technologiesLabel: "Tecnologias",
  downloads: [
    { label: "Baixar CV (PDF, português)", href: CV_PT },
    { label: "Download CV (PDF, English)", href: CV_EN }
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
        "playbook com jornadas de aprendizado que criei para os devs da empresa: ambiente de engenharia com IA otimizado para baixo custo de tokens."
    },
    {
      label: "Claude Config do Time",
      href: "https://github.com/ivanhoinacki/team-exp-claude-config",
      description:
        "ecossistema de IA que construí para o time de engenharia: 9 rules, 16 skills, 4 agents, 25 hooks e integrações MCP, instalável com um comando."
    },
    {
      label: "Workshops de IA",
      href: "https://github.com/ivanhoinacki/team-exp-claude-config/tree/main/workshops",
      description: "materiais dos treinamentos de AI-assisted engineering que conduzi para o time."
    },
    {
      label: "Workshop 02 - Claude Code Ecosystem",
      href: "https://ivanhoinacki.github.io/team-exp-claude-config/workshop-02",
      description: "slides da apresentação ao vivo do ecossistema."
    }
  ],
  summary: [
    "Senior Software Engineer e Software Architect com mais de 15 anos de experiência construindo plataformas backend, sistemas distribuídos, serviços cloud-native e integrações de produto em travel, e-commerce, retail, banking, ERP e automação industrial.",
    "Minha experiência mais recente foi na Luxury Escapes, na vertical de Experiences, construindo tecnologia de travel: provider integrations, booking flows, AI-powered attraction curation, search/discovery, analytics e operational reliability. Forte experiência hands-on com TypeScript, Node.js, NestJS, PostgreSQL, MongoDB, Redis, AWS, Azure, Kubernetes, Terraform, CI/CD, Datadog, OpenTelemetry e GenAI/RAG.",
    "Trabalho bem com times internacionais remotos, assumo problemas técnicos ambíguos de ponta a ponta e combino engenharia de produção com arquitetura, mentoria, code review e entrega cross-functional de produto. AI-assisted development é minha prática diária: coding agents baseados em Claude, spec-driven development, context engineering e code review assistido por IA integrados ao fluxo de engenharia."
  ],
  highlights: [
    "Expandi a AI-powered attraction curation da Luxury Escapes de 75 attractions em 5 cidades para 1.193+ attractions em 18 países e 56 cidades.",
    "Entreguei melhorias de integração CustomLinc / South Sea Cruises por meio de 14 PRs merged, deploy em produção e nenhum incidente de produção documentado.",
    "Reduzi custos de logging distribuído em aproximadamente 40% na ALLOS com OpenTelemetry e arquitetura híbrida de observabilidade.",
    "Padronizei CI/CD, quality gates, security checks e governança de engenharia em 67 repositórios.",
    "Apoiei 12+ squads multidisciplinares em backend, frontend, mobile, QA, product e delivery.",
    "Construí as bases de engenharia web na Limber Software do zero, escalando do primeiro papel de engenharia web para múltiplos times especializados."
  ],
  skills: [
    "Backend: TypeScript, Node.js, NestJS, Express, Go, Python/FastAPI, REST, GraphQL, gRPC, OpenAPI.",
    "Cloud e plataforma: AWS, Azure, GCP, Docker, Kubernetes, Terraform, Helm, GitHub Actions, GitLab CI, Azure DevOps.",
    "Data e observabilidade: PostgreSQL, PostGIS, MongoDB, Redis, BigQuery, Snowplow, Datadog, OpenTelemetry, Prometheus, Grafana.",
    "Arquitetura: Microservices, event-driven systems, DDD, Clean Architecture, BFF, serverless, replatforming, decomposição de monólitos para microservices.",
    "AI e automação: AI-assisted development (Claude, Claude Code, coding agents), spec-driven development, Anthropic API, OpenAI API, RAG, MCP, GenAI governance, prompt engineering, validation guardrails, model workflows.",
    "Liderança: architecture reviews, code reviews, mentoria, planejamento técnico, alinhamento de delivery, padrões de engenharia."
  ],
  experience: [
    {
      role: "Senior Software Engineer",
      company: "Luxury Escapes",
      companyUrl: "https://luxuryescapes.com",
      location: "Remoto | Melbourne, Austrália",
      period: "fevereiro de 2026 – julho de 2026",
      intro:
        "Luxury Escapes é uma empresa global de e-commerce de travel que opera produtos de accommodation, experiences, tours, transfers e travel packages em mercados internacionais.",
      bullets: [
        "Tive ownership de backend e product engineering na vertical de Experiences, cobrindo attractions, tours, provider integrations, search/discovery, booking flows, voucher flows, analytics e operational reliability.",
        "Desenhei e entreguei backend services e integrações em sistemas multi-repositório envolvendo order flows, customer-facing surfaces, admin workflows e third-party provider APIs.",
        "Construí e evoluí uma pipeline de AI-powered attraction curation, expandindo cobertura de 75 attractions em 5 cidades para 1.193+ attractions em 18 países e 56 cidades.",
        "Adicionei validation guardrails para dados de attractions gerados por AI usando geocoding, Google Places validation, deduplicação e quality checks.",
        "Entreguei melhorias em B2B travel provider integrations (CustomLinc / South Sea Cruises, Rezdy e Klook): availability sync, booking flows, vouchers, cancellation behavior, fare/product mapping e reconciliation data.",
        "Contribuí para o Experiences Passport MVP: backend foundations, data model, endpoints, voucher lifecycle, redemption sync, order integration, search badge, deal page section e My Escapes vouchers.",
        "Construí visibilidade operacional com BigQuery, Snowplow e Datadog para product analytics, provider behavior, curation quality e engineering diagnostics.",
        "Melhorei reliability com Datadog APM/logs/monitors, cache warming, rate limiting, rollout planning e investigation workflows para dependências de providers externos.",
        "Usei AI-assisted development como prática diária: coding agents baseados em Claude, spec-driven development e code review assistido por IA integrados ao fluxo de entrega.",
        "Conduzi um workshop técnico interno em inglês sobre AI-assisted engineering workflows e apresentei um protótipo de AI-powered travel intelligence no Luxury Escapes Hackathon 2026."
      ],
      technologies:
        "TypeScript, Node.js, NestJS, PostgreSQL, PostGIS, BigQuery, Snowplow, Datadog, AWS, Docker, GitHub Actions, OpenAI API, Nominatim, Google Places API"
    },
    {
      role: "Solutions Architect",
      company: "ALLOS",
      companyUrl: "https://allos.co/",
      location: "Remoto | Brasil",
      period: "janeiro de 2025 – janeiro de 2026",
      intro:
        "ALLOS é uma das maiores empresas de shopping centers do Brasil, operando 56 shoppings e um ecossistema digital distribuído de alto volume transacional.",
      bullets: [
        "Liderei trabalhos de arquitetura em platform engineering, observabilidade, segurança, cloud, DevOps e adoção de AI.",
        "Apoiei 12+ squads multidisciplinares em GMV Capture, Benefits, Promotions, Core, BFF, backend, frontend, mobile, QA, product e delivery.",
        "Desenhei uma estratégia de observabilidade distribuída com OpenTelemetry, Application Insights, Prometheus e Grafana, reduzindo custos de logs em aproximadamente 40%.",
        "Implementei technical health dashboards e métricas DORA: Lead Time, Change Failure Rate, MTTR e Deploy Frequency.",
        "Padronizei CI/CD, GitOps, Infrastructure as Code, SonarQube quality gates em 67 repositórios, SAST/SCA, OWASP Top 10 e cloud governance.",
        "Liderei discussões de adoção de generative AI: model versioning, governance, security, estratégias RAG e proof-of-concepts internos.",
        "Criei o Assistente Virtual de Benefícios (LLM + RAG) dos sites e apps dos 56 shoppings: base de conhecimento indexada por shopping, guardrails de contexto e rollout com teste A/B, reduzindo filas de atendimento presencial e custos de operação em datas de pico; a iniciativa nasceu de uma PoC minha e evoluiu para a squad de plataforma de IA."
      ],
      technologies:
        "TypeScript, Node.js, NestJS, Go, Python, FastAPI, Azure AKS, Azure Functions, Azure Service Bus, OpenTelemetry, Prometheus, Grafana, Terraform, Helm, Kubernetes, PostgreSQL, MongoDB Atlas, Redis"
    },
    {
      role: "Tech Lead / Senior Software Engineer",
      company: "ília digital",
      companyUrl: "https://ilia.digital/",
      location: "Remoto | Brasília, Brasil",
      period: "setembro de 2020 – dezembro de 2024",
      bullets: [
        "Liderei discussões de arquitetura, technical breakdowns, decomposição de features e planejamento de delivery para squads multidisciplinares.",
        "Construí e modernizei serviços Node.js/TypeScript usando NestJS, Clean Architecture, DDD, REST APIs, distributed messaging e cloud-native deployment patterns.",
        "Atuei como referência técnica por meio de code reviews, mentoria, guilds, engineering standards e alinhamento com Product, Delivery e Commercial.",
        "Modernizei customer-facing BFF services para NestJS e contribuí em migrações de sistemas Django para serviços Node.js/MongoDB.",
        "Reduzi bugs críticos de 69 para 35 em 4 semanas durante um esforço prioritário de estabilização de produto.",
        "Assumi a liderança técnica de um projeto internacional de Open Banking do Santander (UK) após a saída do Tech Lead original, coordenando 3 squads em ambiente remoto e multicultural.",
        "Integrei SaltEdge para Open Banking e Onfido para KYC/identity verification em contexto bancário internacional.",
        "Recebi o ília Awards 2023 em duas categorias: Learning e Creativity."
      ],
      technologies:
        "TypeScript, Node.js, NestJS, Express, Go, Java, React, Azure AKS, Azure Functions, Azure Service Bus, AWS, Docker, Kubernetes, Terraform, PostgreSQL, MongoDB, Redis, Jest, Supertest, Pact"
    },
    {
      role: "Staff Software Engineer / Tech Lead / Senior Software Engineer",
      company: "Limber Software",
      companyUrl: "http://www.limbersoftware.com.br",
      location: "Pato Branco – Paraná, Brasil",
      period: "novembro de 2016 – abril de 2020",
      bullets: [
        "Entrei como primeiro engenheiro web e construí do zero as bases de engenharia web da empresa: Linux servers, Git Flow, CI/CD, SonarQube, backend architecture e frontend standards.",
        "Escalei o time de uma estrutura inicial de 2 pessoas para múltiplos times especializados em backend, frontend, mobile e QA.",
        "Liderei arquitetura, delivery, planejamento técnico, alinhamento com clientes, relacionamento com vendors e qualidade de engenharia em plataformas de turismo, hotelaria, entretenimento, e-commerce e gestão.",
        "Implementei CI/CD pipelines, automated builds/tests/deploys, quality gates, security checks e production traceability.",
        "Reduzi vulnerabilidades documentadas em ~60%, incidentes em ~45%, tempo de deploy em ~50% e aumentei cobertura de testes automatizados em ~80%.",
        "Entreguei projetos para clientes incluindo Itaipu Binacional, Parque das Aves, Serra Verde Express, Magic City Park, Giordani Turismo, Cascaneia Parque e BWT Operadora."
      ],
      technologies:
        "TypeScript, Node.js, Angular, AngularJS, Electron, MongoDB, PostgreSQL, Firebird, Azure, GCP, Linux, Docker, Kubernetes, Jenkins, Azure Pipelines, SonarQube"
    },
    {
      role: "Full Stack Developer",
      company: "XPert Tecnologia e Automação",
      companyUrl: "http://www.xpert.com.br",
      location: "Pato Branco – Paraná, Brasil",
      period: "fevereiro de 2013 – novembro de 2016",
      bullets: [
        "Liderei a modernização de um ERP desktop legado para uma arquitetura web moderna em aproximadamente 18 meses sem interrupção de serviço.",
        "Substituí sistemas legados por backend Node.js, frontend AngularJS, REST APIs, JWT authentication e RBAC authorization.",
        "Reduzi o tempo de desenvolvimento de novas funcionalidades em ~70% e melhorei a performance geral do sistema em ~60%.",
        "Construí integrações com dispositivos IoT industriais, sensores, telemetria, sistemas de automação, MQTT, WebSockets e dashboards em tempo real."
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
      location: "Pato Branco – Paraná, Brasil",
      period: "outubro de 2011 – fevereiro de 2013",
      bullets: [
        "Construí aplicações web ASP.NET/C# para medicina ocupacional, otimizei queries Firebird de ~10s para 1s, automatizei relatórios fiscais/legais e integrei sistemas governamentais externos."
      ]
    },
    {
      role: "QA Analyst",
      company: "Viasoft Softwares Empresariais",
      companyUrl: "http://www.viasoft.com.br",
      location: "Pato Branco – Paraná, Brasil",
      period: "outubro de 2011 – setembro de 2012",
      bullets: [
        "Construí testes automatizados com Selenium WebDriver para ERPs corporativos, regression plans, functional/integration tests e queries Oracle de validação."
      ]
    },
    {
      role: "Help Desk / Junior Data Analyst",
      company: "C&S Systems",
      companyUrl: "http://www.csistemas.com.br",
      location: "Realeza – Paraná, Brasil",
      period: "setembro de 2010 – agosto de 2011",
      bullets: ["Desenvolvi SSRS dashboards, relatórios SQL, rotinas ETL, data modeling e automações em Visual Basic 6."]
    },
    {
      role: "Network Engineer / Web Developer",
      company: "World Line Net",
      companyUrl: "http://www.wln.com.br",
      location: "Realeza – Paraná, Brasil",
      period: "dezembro de 2009 – agosto de 2010",
      bullets: [
        "Configurei Cisco, Mikrotik, wireless links, Nagios monitoring, hardening de servidores, suporte a clientes e desenvolvimento web inicial com HTML/CSS/JavaScript."
      ]
    }
  ],
  education:
    "Curso Superior de Tecnologia em Análise e Desenvolvimento de Sistemas – Centro Universitário Internacional UNINTER, 2024 – 2026 (concluído em maio de 2026)",
  certifications: [
    { label: "IEEE Membership (2026, Credential ID 102431427)", issuer: "IEEE" },
    { label: "EF SET Certificate C2 Proficiency (inglês)", issuer: "EF SET, 2023", href: "https://cert.efset.org/WrwtBB" },
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
  alura: aluraCertificates,
  languages: [
    "Português: nativo.",
    "Inglês: proficiência profissional (uso diário no trabalho; certificado EF SET C2)."
  ],
  contact: [
    { label: "ivanhoinack@gmail.com", href: "mailto:ivanhoinack@gmail.com" },
    { label: "Meeting with Ivan Hoinacki - 30min", href: SCHEDULE_URL },
    { label: "linkedin.com/in/ivanhoinacki", href: "https://www.linkedin.com/in/ivanhoinacki/" },
    { label: "github.com/ivanhoinacki", href: "https://github.com/ivanhoinacki" }
  ]
};
