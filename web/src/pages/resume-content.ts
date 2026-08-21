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
  bullets?: string[];
  subroles?: {
    role: string;
    bullets: string[];
  }[];
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
  {
    label: "Node.js Backend I",
    href: "https://cursos.alura.com.br/certificate/f58a1daa-6caa-4dd8-b50d-be842cfbd300",
  },
  {
    label: "Node.js Backend II: MVC, Auth",
    href: "https://cursos.alura.com.br/certificate/9c75af5e-8291-49e6-b19e-7954e9920aa4",
  },
  {
    label: "TypeScript",
    href: "https://cursos.alura.com.br/certificate/bd925c47-093c-4f92-8e48-b3c674128c53",
  },
  {
    label: "Docker: Containers",
    href: "https://cursos.alura.com.br/certificate/b0a7d8d9-6d7a-4ebd-a3ac-032fb28fbdb6",
  },
  {
    label: "Kubernetes: Container Orchestration",
    href: "https://cursos.alura.com.br/certificate/7281607a-bb90-49b5-a0a9-4dd0b3603b8b",
  },
  {
    label: "HTTP: Web Fundamentals",
    href: "https://cursos.alura.com.br/certificate/0c74e3dc-7580-41c2-99cc-8c037b1390f8",
  },
  {
    label: "JavaScript Advanced: Browser & Design Patterns",
    href: "https://cursos.alura.com.br/certificate/6f44714a-361f-4077-8eaa-3f16c8d89c26",
  },
  {
    label: "JavaScript Advanced: MVC, Proxy & Factory",
    href: "https://cursos.alura.com.br/certificate/af60ca84-a29d-427a-80ff-0c32e47eea0d",
  },
  {
    label: "JavaScript Advanced: IndexedDB",
    href: "https://cursos.alura.com.br/certificate/57c2a036-5fa6-495a-9162-6d9d98b3f15b",
  },
];

const aluraCertificatesPt: ResumeLink[] = [
  {
    label: "Node.js: criando sua primeira biblioteca",
    href: "https://cursos.alura.com.br/certificate/f58a1daa-6caa-4dd8-b50d-be842cfbd300",
  },
  {
    label: "Node.js: MVC e autenticação",
    href: "https://cursos.alura.com.br/certificate/9c75af5e-8291-49e6-b19e-7954e9920aa4",
  },
  {
    label: "TypeScript",
    href: "https://cursos.alura.com.br/certificate/bd925c47-093c-4f92-8e48-b3c674128c53",
  },
  {
    label: "Docker: criando e gerenciando contêineres",
    href: "https://cursos.alura.com.br/certificate/b0a7d8d9-6d7a-4ebd-a3ac-032fb28fbdb6",
  },
  {
    label: "Kubernetes: orquestração de contêineres",
    href: "https://cursos.alura.com.br/certificate/7281607a-bb90-49b5-a0a9-4dd0b3603b8b",
  },
  {
    label: "HTTP: fundamentos da web",
    href: "https://cursos.alura.com.br/certificate/0c74e3dc-7580-41c2-99cc-8c037b1390f8",
  },
  {
    label: "JavaScript avançado: navegador e padrões de projeto",
    href: "https://cursos.alura.com.br/certificate/6f44714a-361f-4077-8eaa-3f16c8d89c26",
  },
  {
    label: "JavaScript avançado: MVC, Proxy e Factory",
    href: "https://cursos.alura.com.br/certificate/af60ca84-a29d-427a-80ff-0c32e47eea0d",
  },
  {
    label: "JavaScript avançado: IndexedDB",
    href: "https://cursos.alura.com.br/certificate/57c2a036-5fa6-495a-9162-6d9d98b3f15b",
  },
];

export const resumeEn: ResumeContent = {
  documentLabel: "English resume",
  homeLabel: "Home",
  themeLabels: {
    dark: "Switch to dark theme",
    light: "Switch to light theme",
  },
  headline:
    "Senior Full Stack Engineer | Software Architect | Node.js, TypeScript, applied AI, distributed systems, and cloud",
  meta: "Brazil, UTC-3 | Remote / Global | English: daily professional use",
  scheduleLabel: "Meeting with Ivan Hoinacki - 30min",
  technologiesLabel: "Technologies",
  downloads: [
    { label: "Download CV (PDF, English)", href: CV_EN },
    { label: "Baixar CV (PDF, português)", href: CV_PT },
  ],
  sections: {
    aiProjects: "Agent Engineering Projects and Training",
    summary: "Summary",
    highlights: "Highlights",
    skills: "Core Skills",
    experience: "Professional Experience",
    earlier: "Earlier Experience",
    education: "Education",
    certifications: "Certifications",
    languages: "Languages",
    contact: "Contact",
  },
  aiProjects: [
    {
      label: "Codex Workflow Playbook",
      href: "https://ivanhoinacki.github.io/codex-workflow-workbook/#/journeys/foundations/purpose-system-shape/purpose",
      description:
        "An interactive English-language web application that teaches engineers how to design and validate a Codex engineering environment through guided journeys, checkpoints, diagrams, and templates for configuration, hooks, skills, subagents, MCPs, memory, and context management.",
    },
    {
      label: "Team Claude Config",
      href: "https://github.com/ivanhoinacki/team-exp-claude-config",
      description:
        "A versioned, one-command distribution that standardizes team use of Claude Code and Cursor through guardrails, workflows, specialized agents, lifecycle hooks, MCP integrations, and service-level technical context.",
    },
    {
      label: "AI Workshops",
      href: "https://github.com/ivanhoinacki/team-exp-claude-config/tree/main/workshops",
      description:
        "Practical English-language materials used to train engineers in agent configuration and operation.",
    },
    {
      label: "Workshop 02 - Claude Code Ecosystem",
      href: "https://ivanhoinacki.github.io/team-exp-claude-config/workshop-02",
      description:
        "Exercises covering hooks, MCPs, skills, context, parallel investigation, code review, and complete workflows from request to pull request.",
    },
  ],
  summary: [
    "Senior Full Stack Engineer and Software Architect with more than 15 years of experience designing, modernizing, and operating distributed systems, cloud platforms, and critical product integrations. Hands-on background across travel, e-commerce, retail, banking, ERP, and industrial automation, combining technical depth with leadership of complex deliveries.",
    "At Luxury Escapes, I own end-to-end changes across B2C, B2B, and administrative services and interfaces in the Experiences vertical, covering search, availability, bookings, vouchers, orders, analytics, and global travel provider integrations. I scaled an AI-powered curation platform roughly 16-fold and work hands-on with TypeScript, Node.js, React, Ruby, PostgreSQL, BigQuery, Datadog, and AWS.",
    "I work in remote international teams as a hands-on engineer and technical reference, turning ambiguous problems into architecture, tested software, observable rollouts, and reliable operations. I design agent ecosystems around specifications, service-level context, automation, tests, and human review while retaining accountability for security, quality, and production behavior.",
  ],
  highlights: [
    "Expanded Luxury Escapes' AI-powered attraction curation roughly 16-fold, from 75 attractions in 5 cities to more than 1,193 attractions across 18 countries and 56 cities, with automated validation against hallucinations, duplicates, and invalid geographic data.",
    "Evolved B2B integrations with global travel providers across availability, bookings, vouchers, cancellations, fares, reconciliation, and external failure handling.",
    "Reduced distributed logging costs by approximately 40% at ALLOS by combining OpenTelemetry, Prometheus, and Grafana in a hybrid observability architecture.",
    "Standardized CI/CD, GitOps, quality, security, and cloud governance across 67 repositories, creating a shared operational foundation for more than 12 multidisciplinary squads.",
    "Reduced critical bugs from 69 to 35 in 4 weeks by structuring triage, impact-based prioritization, coordinated fixes, and continuous validation with the team.",
    "Built Limber Software's web engineering foundations from scratch and helped scale an initial team of 2 into specialized backend, frontend, mobile, and quality teams.",
  ],
  skills: [
    "Backend: TypeScript, Node.js, NestJS, Express, Java, Spring Boot, Spring Data (JPA/Hibernate), Spring Security, Actuator, Python, FastAPI, Ruby on Rails, Go, C#, ASP.NET, REST, GraphQL, gRPC, OpenAPI.",
    "Frontend: React, Angular, AngularJS, and Vue.js.",
    "Cloud and platform: AWS Lambda, API Gateway, Cognito, S3, EventBridge, SNS, SQS, SST, Azure, GCP, Docker, Kubernetes, Terraform, Helm, GitHub Actions, CircleCI, GitLab CI, and Azure DevOps.",
    "Data and observability: PostgreSQL, PostGIS, DynamoDB, MongoDB, Redis, BigQuery, Snowplow, Datadog, OpenTelemetry, Prometheus, and Grafana.",
    "Architecture and messaging: Microservices, event-driven systems, Kafka, EventBridge, SNS, SQS, retries, DLQs, consumers with business-key idempotency, DDD, BFF, serverless architecture, platform modernization, and monolith decomposition.",
    "Blockchain and digital assets: Solidity, ERC-721 contracts, Polygon, Web3, Hardhat, IPFS, Alchemy, and MoonPay.",
    "AI, agents, and automation: Claude Code, specialized agents, spec-driven development, hooks, skills, MCP, Anthropic and OpenAI APIs, RAG, generative AI governance, prompt engineering, rule-based validation, and model workflows.",
    "Leadership: architecture reviews, code reviews, mentoring, technical planning, delivery alignment, and engineering standards.",
  ],
  experience: [
    {
      role: "Senior Full Stack Engineer",
      company: "Luxury Escapes",
      companyUrl: "https://luxuryescapes.com",
      location: "Remote | Melbourne, Australia",
      period: "February 2026 – Present",
      intro:
        "Global travel e-commerce company offering accommodation, experiences, tours, transfers, and travel packages across international markets.",
      bullets: [
        "Own end-to-end changes across a distributed ecosystem of B2C, B2B, and administrative services and interfaces for search, availability, bookings, vouchers, and provider integrations in the Experiences vertical.",
        "Implement cross-domain changes in Node.js, TypeScript, and Ruby services owned by different squads, validating contracts, behavior, and integration before review by the owning team and production rollout.",
        "Scaled an AI-powered attraction curation pipeline from 75 attractions in 5 cities to more than 1,193 attractions across 18 countries and 56 cities.",
        "Automated curation validation without requiring manual review for each attraction, combining guardrails, geocoding, Google Places, deduplication, and quality rules to block invalid or hallucinated data before publication.",
        "Evolved B2B integrations with global travel providers across availability, bookings, vouchers, cancellations, fare mapping, reconciliation, and external failure handling.",
        "Built the Experiences Passport MVP across backend and customer experience, including the data model, APIs, voucher issuance and lifecycle, redemption synchronization with orders, search result identification, and presentation in My Escapes.",
        "Built data models and telemetry with BigQuery, Snowplow, and Datadog to measure conversion, provider behavior, curation quality, and root causes of production failures.",
        "Increased flow reliability through APM, structured logs, monitors, cache warming, rate limiting, progressive rollout, and investigation of external dependencies driven by metrics and traces.",
        "Integrated coding agents into the engineering workflow with repository-level context, executable specifications, automated tests, and human review while retaining ownership of security, rollout, and production operations.",
        "Led an internal technical workshop on Claude Code productivity and agent ecosystem design, covering hooks, MCPs, service-level context, skills, and development workflows; also presented an AI-powered travel intelligence prototype at the Luxury Escapes 2026 Hackathon.",
      ],
      technologies:
        "TypeScript, Node.js, NestJS, Ruby, PostgreSQL, PostGIS, BigQuery, Snowplow, Datadog, AWS, Docker, GitHub Actions, OpenAI API, Nominatim, Google Places API",
    },
    {
      role: "Software Architect",
      company: "ALLOS",
      companyUrl: "https://allos.co/",
      location: "Remote | Brazil",
      period: "January 2025 – January 2026",
      intro:
        "One of Brazil's largest shopping center operators, with 56 malls and a high-volume distributed digital ecosystem.",
      bullets: [
        "Defined software architecture decisions for a distributed ecosystem spanning 56 malls, covering platform engineering, observability, security, cloud, DevOps, and AI adoption.",
        "Supported the technical evolution of 12+ squads across GMV capture, benefits, promotions, loyalty, backend, frontend, QA, downstream, and upstream domains.",
        "Designed distributed observability patterns with OpenTelemetry, Application Insights, Prometheus, and Grafana, reducing logging costs by approximately 40%.",
        "Established technical health dashboards and DORA metrics to guide engineering improvements in lead time, change failure rate, MTTR, and deployment frequency.",
        "Standardized engineering practices across 67 repositories, including CI/CD, GitOps, infrastructure as code, quality gates, SAST/SCA, OWASP Top 10, and cloud governance.",
        "Led the architecture for generative AI adoption across model versioning, governance, security, RAG strategies, and internal proofs of concept.",
        "Built an invoice capture proof of concept with Python, FastAPI, Azure Functions, and AI, reducing processing time from approximately 20 to 7 seconds.",
        "Created the Benefits Virtual Assistant with LLM and RAG for the websites and apps of 56 malls, using a per-mall indexed knowledge base, context guardrails, and an A/B rollout to reduce support queues and peak-season operating costs.",
      ],
      technologies:
        "TypeScript, Node.js, NestJS, Go, Python, FastAPI, Azure AKS, Azure Functions, Azure Service Bus, OpenTelemetry, Prometheus, Grafana, Terraform, Helm, Kubernetes, PostgreSQL, MongoDB Atlas, Redis",
    },
    {
      role: "Technical Lead",
      company: "ília digital",
      companyUrl: "https://ilia.digital/",
      location: "Remote | Brasília, Brazil",
      period: "September 2020 – January 2025",
      subroles: [
        {
          role: "Advanced Technical Lead",
          bullets: [
            "Served as a technical consultant to Commercial and Delivery teams, representing ília in engagements with strategic clients and guiding architecture decisions, team enablement, and technical workshops.",
            "Structured engineering improvement plans with clients by combining process assessment, technical prioritization, and adoption roadmaps to improve team health and delivery efficiency.",
            "Received the 2023 ília Awards in the Learning and Creativity categories for contributions to learning and technical innovation.",
          ],
        },
        {
          role: "Tech Lead",
          bullets: [
            "Led projects for clients in financial services, retail, and digital platforms, defining architecture, feature decomposition, and delivery planning for multidisciplinary squads.",
            "Took over an international Open Banking project for Santander UK after the original technical lead left, coordinating 2 remote, multicultural teams on distributed service architecture and the validation of security, GDPR, and KYC requirements.",
            "Served as a technical reference through code reviews, mentoring, engineering guilds, standards, and alignment with Product, Delivery, and Commercial teams.",
          ],
        },
        {
          role: "Senior Software Engineer",
          bullets: [
            "Built and modernized services with Node.js, TypeScript, NestJS, Express, Java, and Spring Boot, as well as React and Vue interfaces, applying Clean Architecture, DDD, REST APIs, gRPC, Kafka, SQS, and Terraform infrastructure as code across Azure, AWS, and GCP.",
            "Built Java/Spring Boot services with Spring Data (JPA/Hibernate), Spring Security, Actuator, PostgreSQL, and Redis, plus Kafka consumers with retries, a DLQ, and business-key idempotency; cleared the DLQ backlog after tuning consumer concurrency.",
            "Developed a serverless digital asset platform in TypeScript using AWS Lambda, API Gateway, Cognito, DynamoDB, S3, and EventBridge, integrating Solidity ERC-721 contracts on Polygon, IPFS storage, and Alchemy and MoonPay webhooks for asynchronous transaction creation, transfer, and tracking.",
          ],
        },
      ],
      technologies:
        "Java, Spring Boot, Spring Data (JPA/Hibernate), Spring Security, Actuator, Kafka, PostgreSQL, Redis, TypeScript, Node.js, NestJS, Express, Go, React, AWS Lambda, API Gateway, Cognito, DynamoDB, S3, EventBridge, SST, Solidity, Polygon, IPFS, Web3, Azure AKS, Azure Functions, Azure Service Bus, Docker, Kubernetes, Terraform, MongoDB, Jest, Supertest, Pact",
    },
    {
      role: "Staff Software Engineer",
      company: "Limber Software",
      companyUrl: "http://www.limbersoftware.com.br",
      location: "Pato Branco – Paraná, Brazil",
      period: "December 2016 – March 2020",
      subroles: [
        {
          role: "Staff Software Engineer (Jan 2019 – Mar 2020)",
          bullets: [
            "Trained developers and coordinated work across multiple projects, establishing agile practices, automated deployment, quality criteria, security checks, and production traceability.",
            "Aligned Engineering, Commercial, and client stakeholders during new project planning and helped reduce incidents by approximately 45% and deployment time by 50%, while increasing automated test coverage by approximately 80%.",
          ],
        },
        {
          role: "Tech Lead (Dec 2017 – Dec 2018)",
          bullets: [
            "Scaled the team from 2 people into multidisciplinary backend, frontend, mobile development, and quality teams.",
            "Led architecture, delivery, technical planning, client alignment, vendor relationships, and engineering quality across tourism, hospitality, entertainment, e-commerce, and management platforms.",
          ],
        },
        {
          role: "Senior Software Engineer (Dec 2016 – Dec 2017)",
          bullets: [
            "Joined as the first senior software engineer and built the production foundations for the web products from scratch, including backend architecture, databases, frontend standards, Git Flow, and CI/CD.",
            "Delivered projects for clients including Itaipu Binacional, Parque das Aves, Serra Verde Express, Magic City Park, and Giordani Turismo, among others.",
          ],
        },
      ],
      technologies:
        "TypeScript, Node.js, Angular, AngularJS, Electron, MongoDB, PostgreSQL, Firebird, Azure, GCP, Linux, Docker, Kubernetes, Jenkins, Azure Pipelines, SonarQube",
    },
    {
      role: "Full Stack Developer",
      company: "XPert Tecnologia e Automação",
      companyUrl: "http://www.xpert.com.br",
      location: "Pato Branco – Paraná, Brazil",
      period: "February 2013 – August 2015",
      bullets: [
        "Helped modernize a legacy desktop ERP into a modern web architecture, contributing to the concept and implementation of the new technical foundation.",
        "Developed and maintained Node.js and PHP backends, as well as JavaScript, ActionScript, HTML5, and CSS3 interfaces integrated through REST APIs with JWT authentication and role-based authorization.",
        "Delivered architecture and shared component improvements that reduced the time required to develop new features and increased overall system performance.",
        "Worked on integrations with industrial IoT devices, sensors, telemetry, automation systems, MQTT, WebSockets, and real-time dashboards.",
      ],
      technologies:
        "Node.js, Express, TypeScript, PHP, JavaScript, ActionScript, HTML5, CSS3, MySQL, SQL Server, MQTT, WebSockets, Git, Jenkins, Docker",
    },
  ],
  earlier: [
    {
      role: "Full Stack Developer",
      company: "SESMO Software for Occupational Medicine",
      companyUrl: "http://www.sesmo.com.br",
      location: "Pato Branco – Paraná, Brazil",
      period: "July 2012 – January 2013",
      bullets: [
        "Built ASP.NET/C# web applications for occupational medicine, optimized Firebird queries from ~10s to 1s, automated tax/legal reporting, and integrated external government systems.",
      ],
    },
    {
      role: "QA Analyst",
      company: "Viasoft Softwares Empresariais",
      companyUrl: "http://www.viasoft.com.br",
      location: "Pato Branco – Paraná, Brazil",
      period: "November 2011 – March 2012",
      bullets: [
        "Built automated tests with Selenium WebDriver for corporate ERP systems, regression plans, functional/integration tests, and Oracle validation queries.",
      ],
    },
    {
      role: "Network Engineer / Web Developer",
      company: "World Line Net",
      companyUrl: "http://www.wln.com.br",
      location: "Realeza – Paraná, Brazil",
      period: "January 2010 – September 2010",
      bullets: [
        "Configured Cisco, Mikrotik, wireless links, Nagios monitoring, server hardening, client support, and early web development with HTML/CSS/JavaScript.",
      ],
    },
  ],
  education:
    "Technologist Degree in Systems Analysis and Development – Centro Universitário Internacional UNINTER, 2024 – 2026 (completed May 2026)",
  certifications: [
    {
      label: "IEEE Membership (2026, Credential ID 102431427)",
      issuer: "IEEE",
    },
    {
      label: "EF SET Certificate C2 Proficiency (English)",
      issuer: "EF SET, 2023",
      href: "https://cert.efset.org/WrwtBB",
    },
    {
      label: "TDD – Test-Driven Development",
      issuer: "ITA – Instituto Tecnológico de Aeronáutica, 2024",
      href: "https://www.coursera.org/account/accomplishments/verify/W7CDHC5478YK",
    },
    {
      label:
        "Divide and Conquer, Sorting and Searching, and Randomized Algorithms",
      issuer: "Stanford University via Coursera, 2024",
      href: "https://www.coursera.org/account/accomplishments/verify/HFRVV45VS8GL",
    },
    {
      label: "Thought Leadership",
      issuer: "LinkedIn Learning, 2023",
      href: "https://www.linkedin.com/learning/certificates/8daebb55e1ea611ba155a79c406c2d88142365a2b9e0ee067c2f4c3af2e562fb",
    },
  ],
  alura: aluraCertificates,
  languages: [
    "Portuguese: native.",
    "English: daily professional use, EF SET C2 certified.",
    "Spanish: intermediate B1 (self-directed study and occasional professional use).",
  ],
  contact: [
    { label: "ivanhoinack@gmail.com", href: "mailto:ivanhoinack@gmail.com" },
    { label: "Meeting with Ivan Hoinacki - 30min", href: SCHEDULE_URL },
    {
      label: "linkedin.com/in/ivanhoinacki",
      href: "https://www.linkedin.com/in/ivanhoinacki/",
    },
    {
      label: "github.com/ivanhoinacki",
      href: "https://github.com/ivanhoinacki",
    },
  ],
};

export const resumePt: ResumeContent = {
  documentLabel: "Currículo em português do Brasil",
  homeLabel: "Início",
  themeLabels: {
    dark: "Mudar para o tema escuro",
    light: "Mudar para o tema claro",
  },
  headline:
    "Senior Full Stack Engineer | Arquiteto de Software | Node.js, TypeScript, IA aplicada, sistemas distribuídos e cloud",
  meta: "Brasil, UTC-3 | Remoto / Global | Inglês: uso profissional diário",
  scheduleLabel: "Agendar conversa de 30 min com Ivan Hoinacki",
  technologiesLabel: "Tecnologias",
  downloads: [
    { label: "Baixar currículo (PDF, português)", href: CV_PT },
    { label: "Baixar currículo (PDF, inglês)", href: CV_EN },
  ],
  sections: {
    aiProjects: "Projetos e Capacitação em Engenharia de Agentes",
    summary: "Resumo Profissional",
    highlights: "Destaques",
    skills: "Competências Principais",
    experience: "Experiência Profissional",
    earlier: "Experiência Anterior",
    education: "Formação",
    certifications: "Certificações",
    languages: "Idiomas",
    contact: "Contato",
  },
  aiProjects: [
    {
      label: "Codex Workflow Playbook",
      href: "https://ivanhoinacki.github.io/codex-workflow-workbook/#/journeys/foundations/purpose-system-shape/purpose",
      description:
        "Aplicação web interativa em inglês que ensina a projetar e validar um ambiente de engenharia com Codex por meio de jornadas guiadas, checkpoints, diagramas e templates para configuração, hooks, skills, subagentes, MCPs, memória e gestão de contexto.",
    },
    {
      label: "Configuração Claude do Time",
      href: "https://github.com/ivanhoinacki/team-exp-claude-config",
      description:
        "Distribuição versionada e instalável em um comando para padronizar o uso de Claude Code e Cursor pelo time, reunindo guardrails, workflows, agentes especializados, hooks de ciclo de vida, integrações MCP e contexto técnico por serviço.",
    },
    {
      label: "Workshops de IA",
      href: "https://github.com/ivanhoinacki/team-exp-claude-config/tree/main/workshops",
      description:
        "Materiais práticos em inglês usados para capacitar engenheiros na configuração e operação de agentes.",
    },
    {
      label: "Workshop 02 - Ecossistema Claude Code",
      href: "https://ivanhoinacki.github.io/team-exp-claude-config/workshop-02",
      description:
        "Exercícios sobre hooks, MCPs, skills, contexto, investigação paralela, revisão de código e workflows completos da demanda ao pull request.",
    },
  ],
  summary: [
    "Senior Full Stack Engineer e Arquiteto de Software com mais de 15 anos de experiência projetando, modernizando e operando sistemas distribuídos, plataformas cloud e integrações críticas de produto. Atuação prática em turismo, e-commerce, varejo, bancos, ERP e automação industrial, combinando profundidade técnica com liderança de entregas complexas.",
    "Na Luxury Escapes, assumo mudanças ponta a ponta na vertical de Experiences em serviços e interfaces B2C, B2B e administrativas, cobrindo busca, disponibilidade, reservas, vouchers, pedidos, analytics e integrações com fornecedores globais. Escalei em aproximadamente 16 vezes uma plataforma de curadoria com IA e entrego em TypeScript, Node.js, React, Ruby, PostgreSQL, BigQuery, Datadog e AWS.",
    "Atuo em equipes internacionais e remotas como engenheiro hands-on e referência técnica, transformando problemas ambíguos em arquitetura, software testado, rollout observável e operação confiável. Estruturo ecossistemas de agentes com especificações, contexto por serviço, automações, testes e revisão humana, mantendo responsabilidade por segurança, qualidade e comportamento em produção.",
  ],
  highlights: [
    "Ampliei em aproximadamente 16 vezes a curadoria de atrações com IA da Luxury Escapes, de 75 atrações em 5 cidades para mais de 1.193 atrações em 18 países e 56 cidades, com validação automatizada contra alucinações, duplicidades e dados geográficos inválidos.",
    "Evoluí integrações B2B com fornecedores globais de turismo nos fluxos de disponibilidade, reservas, vouchers, cancelamentos, tarifas, conciliação e tratamento de falhas externas.",
    "Reduzi em aproximadamente 40% o custo de logs distribuídos na ALLOS ao combinar OpenTelemetry, Prometheus e Grafana em uma arquitetura híbrida de observabilidade.",
    "Padronizei CI/CD, GitOps, qualidade, segurança e governança de cloud em 67 repositórios, criando uma base operacional comum para mais de 12 squads multidisciplinares.",
    "Reduzi bugs críticos de 69 para 35 em 4 semanas ao estruturar triagem, priorização por impacto, correções coordenadas e validação contínua com o time.",
    "Construí do zero as bases de engenharia web da Limber Software e ajudei a escalar uma equipe inicial de 2 pessoas para times especializados em backend, frontend, desenvolvimento móvel e qualidade.",
  ],
  skills: [
    "Backend: TypeScript, Node.js, NestJS, Express, Java, Spring Boot, Spring Data (JPA/Hibernate), Spring Security, Actuator, Python, FastAPI, Ruby on Rails, Go, C#, ASP.NET, REST, GraphQL, gRPC, OpenAPI.",
    "Frontend: React, Angular, AngularJS e Vue.js.",
    "Nuvem e plataforma: AWS Lambda, API Gateway, Cognito, S3, EventBridge, SNS, SQS, SST, Azure, GCP, Docker, Kubernetes, Terraform, Helm, GitHub Actions, CircleCI, GitLab CI e Azure DevOps.",
    "Dados e observabilidade: PostgreSQL, PostGIS, DynamoDB, MongoDB, Redis, BigQuery, Snowplow, Datadog, OpenTelemetry, Prometheus e Grafana.",
    "Arquitetura e mensageria: microsserviços, sistemas orientados a eventos, Kafka, EventBridge, SNS, SQS, retentativas, DLQ, consumidores idempotentes por chave de negócio, DDD, BFF, arquitetura serverless, modernização de plataformas e decomposição de monólitos.",
    "Blockchain e ativos digitais: Solidity, contratos ERC-721, Polygon, Web3, Hardhat, IPFS, Alchemy e MoonPay.",
    "IA, agentes e automação: Claude Code, agentes especializados, desenvolvimento orientado por especificações, hooks, skills, MCP, APIs da Anthropic e OpenAI, RAG, governança de IA generativa, engenharia de prompts, validação baseada em regras e workflows de modelos.",
    "Liderança: revisões de arquitetura e de código, mentoria, planejamento técnico, alinhamento de entregas e padrões de engenharia.",
  ],
  experience: [
    {
      role: "Senior Full Stack Engineer",
      company: "Luxury Escapes",
      companyUrl: "https://luxuryescapes.com",
      location: "Remoto | Melbourne, Austrália",
      period: "fevereiro de 2026 – atual",
      intro:
        "Empresa global de comércio eletrônico para turismo que oferece hospedagens, experiências, passeios, traslados e pacotes de viagem em mercados internacionais.",
      bullets: [
        "Atuo como Senior Full Stack Engineer na vertical de Experiences, assumindo mudanças ponta a ponta em um ecossistema distribuído de serviços e interfaces B2C, B2B e administrativas para busca, disponibilidade, reservas, vouchers e integrações com fornecedores.",
        "Implemento mudanças entre domínios em serviços Node.js, TypeScript e Ruby de diferentes squads, validando contratos, comportamento e integração antes do code review pelo time proprietário e do rollout em produção.",
        "Escalei uma esteira de curadoria de atrações com IA de 75 atrações em 5 cidades para mais de 1.193 atrações em 18 países e 56 cidades.",
        "Automatizei a validação da curadoria sem depender de revisão manual por atração, combinando guardrails, geocodificação, Google Places, deduplicação e regras de qualidade para bloquear dados inválidos ou alucinados antes da publicação.",
        "Evoluí integrações B2B com fornecedores globais de turismo, cobrindo disponibilidade, reservas, vouchers, cancelamentos, mapeamento de tarifas, conciliação e tratamento de falhas externas.",
        "Construí o MVP do Experiences Passport entre backend e experiência do cliente, incluindo modelo de dados, APIs, emissão e ciclo de vida de vouchers, sincronização de resgates com pedidos, identificação na busca e exibição no My Escapes.",
        "Construí modelos e telemetria com BigQuery, Snowplow e Datadog para medir conversão, comportamento de fornecedores, qualidade da curadoria e causas de falhas em produção.",
        "Aumentei a confiabilidade dos fluxos com APM, logs estruturados, monitores, cache warming, rate limiting, rollout progressivo e investigação de dependências externas por métricas e rastreamento.",
        "Integrei agentes de código ao fluxo de engenharia com contexto por repositório, especificações executáveis, testes automatizados e revisão humana, mantendo ownership sobre segurança, rollout e operação do código em produção.",
        "Conduzi workshop técnico interno sobre produtividade com Claude Code e construção de ecossistemas de agentes, cobrindo hooks, MCPs, contexto por serviço, skills e workflows de desenvolvimento; também apresentei um protótipo de inteligência para turismo com IA no Hackathon 2026 da Luxury Escapes.",
      ],
      technologies:
        "TypeScript, Node.js, NestJS, Ruby, PostgreSQL, PostGIS, BigQuery, Snowplow, Datadog, AWS, Docker, GitHub Actions, OpenAI API, Nominatim, Google Places API",
    },
    {
      role: "Arquiteto de Software",
      company: "ALLOS",
      companyUrl: "https://allos.co/",
      location: "Remoto | Brasil",
      period: "janeiro de 2025 – janeiro de 2026",
      intro:
        "Uma das maiores empresas de shopping centers da América Latina, com 56 shoppings e um ecossistema digital distribuído de alto volume transacional.",
      bullets: [
        "Defini decisões de arquitetura de software para um ecossistema distribuído, cobrindo plataforma, observabilidade, segurança, cloud, DevOps e adoção de IA.",
        "Apoiei 12+ squads na evolução técnica de domínios como captura de GMV, benefícios, promoções, Loyalty, backend, frontend, QA, Downstream e Upstream.",
        "Projetei padrões de observabilidade distribuída com OpenTelemetry, Application Insights, Prometheus e Grafana, reduzindo custos de logs em aproximadamente 40%.",
        "Estruturei painéis de saúde técnica e métricas DORA para orientar evolução de engenharia: tempo de entrega, taxa de falha em mudanças, MTTR e frequência de implantação.",
        "Padronizei práticas de engenharia em 67 repositórios, incluindo CI/CD, GitOps, infraestrutura como código, quality gates, SAST/SCA, OWASP Top 10 e governança de cloud.",
        "Conduzi arquitetura de adoção de IA generativa com versionamento de modelos, governança, segurança, estratégias RAG e provas de conceito internas.",
        "Construí uma prova de conceito para captura de notas fiscais com Python, FastAPI, Azure Functions e IA, reduzindo o tempo de processamento de aproximadamente 20 para 7 segundos.",
        "Criei o Assistente Virtual de Benefícios com LLM e RAG para sites e apps dos 56 shoppings, com base indexada por shopping, guardrails de contexto e rollout A/B para reduzir filas e custos em datas de pico.",
      ],
      technologies:
        "TypeScript, Node.js, NestJS, Go, Python, FastAPI, Azure AKS, Azure Functions, Azure Service Bus, OpenTelemetry, Prometheus, Grafana, Terraform, Helm, Kubernetes, PostgreSQL, MongoDB Atlas, Redis",
    },
    {
      role: "Líder Técnico",
      company: "ília digital",
      companyUrl: "https://ilia.digital/",
      location: "Remoto | Brasília, Brasil",
      period: "setembro de 2020 – janeiro de 2025",
      subroles: [
        {
          role: "Líder Técnico Avançado",
          bullets: [
            "Atuei como consultor técnico para as áreas Comercial e Delivery, representando a ília em clientes estratégicos em decisões de arquitetura, capacitação de equipes e workshops técnicos.",
            "Estruturei com clientes planos de evolução de engenharia, combinando diagnóstico de processos, priorização técnica e roteiros de adoção para aumentar a saúde e a eficiência das equipes.",
            "Recebi o ília Awards 2023 nas categorias Learning e Creativity pelo impacto em aprendizado e inovação técnica.",
          ],
        },
        {
          role: "Líder Técnico",
          bullets: [
            "Assumi a liderança técnica de projetos para clientes dos setores financeiro, varejista e de plataformas digitais, definindo arquitetura, decomposição de funcionalidades e planejamento de entregas para squads multidisciplinares.",
            "Assumi um projeto internacional de Open Banking do Santander no Reino Unido após a saída do líder técnico original, coordenando 2 equipes remotas e multiculturais na arquitetura distribuída dos serviços e na validação de requisitos de segurança, GDPR e KYC.",
            "Atuei como referência técnica por meio de revisão de código, mentoria, guildas, padrões de engenharia e alinhamento com Produto, Delivery e Comercial.",
          ],
        },
        {
          role: "Sênior Software Engineer",
          bullets: [
            "Construí e modernizei serviços com Node.js, TypeScript, NestJS, Express, Java e Spring Boot, além de interfaces React e Vue, aplicando Arquitetura Limpa, DDD, APIs REST, gRPC, Kafka, SQS e infraestrutura como código com Terraform em Azure, AWS e GCP.",
            "Construí serviços Java/Spring Boot com Spring Data (JPA/Hibernate), Spring Security, Actuator, PostgreSQL e Redis, além de consumidores Kafka com retentativas, DLQ e idempotência por chave de negócio; eliminei o backlog da DLQ após ajustar a concorrência dos consumidores.",
            "Desenvolvi uma plataforma serverless de ativos digitais em TypeScript sobre AWS Lambda, API Gateway, Cognito, DynamoDB, S3 e EventBridge, integrando contratos ERC-721 em Solidity na rede Polygon, armazenamento IPFS e webhooks Alchemy e MoonPay para criação, transferência e rastreamento assíncrono de transações.",
          ],
        },
      ],
      technologies:
        "Java, Spring Boot, Spring Data (JPA/Hibernate), Spring Security, Actuator, Kafka, PostgreSQL, Redis, TypeScript, Node.js, NestJS, Express, Go, React, AWS Lambda, API Gateway, Cognito, DynamoDB, S3, EventBridge, SST, Solidity, Polygon, IPFS, Web3, Azure AKS, Azure Functions, Azure Service Bus, Docker, Kubernetes, Terraform, MongoDB, Jest, Supertest, Pact",
    },
    {
      role: "Engenheiro de Software Staff",
      company: "Limber Software",
      companyUrl: "http://www.limbersoftware.com.br",
      location: "Pato Branco – Paraná, Brasil",
      period: "dezembro de 2016 – março de 2020",
      subroles: [
        {
          role: "Engenheiro de Software Staff (jan/2019 – mar/2020)",
          bullets: [
            "Capacitei desenvolvedores e coordenei a distribuição de trabalho entre múltiplos projetos, estabelecendo práticas ágeis, implantação automatizada, critérios de qualidade, verificações de segurança e rastreabilidade em produção.",
            "Conectei engenharia, Comercial e clientes no planejamento de novos projetos e ajudei as equipes a reduzir incidentes em aproximadamente 45% e o tempo de deploy em 50%, aumentando a cobertura de testes automatizados em aproximadamente 80%.",
          ],
        },
        {
          role: "Líder Técnico (dez/2017 – dez/2018)",
          bullets: [
            "Escalei a equipe de 2 pessoas para times multidisciplinares de backend, frontend, desenvolvimento móvel e qualidade.",
            "Liderei arquitetura, entregas, planejamento técnico, alinhamento com clientes, relacionamento com fornecedores e qualidade de engenharia em plataformas de turismo, hotelaria, entretenimento, comércio eletrônico e gestão.",
          ],
        },
        {
          role: "Engenheiro de Software Sênior (dez/2016 – dez/2017)",
          bullets: [
            "Entrei como primeiro engenheiro de software sênior e construí do zero as bases de produção dos produtos web, incluindo arquitetura backend, bancos de dados, padrões frontend, Git Flow e CI/CD.",
            "Entreguei plataformas para clientes como Itaipu Binacional, Parque das Aves, Serra Verde Express, Magic City Park, Giordani Turismo, entre outros.",
          ],
        },
      ],
      technologies:
        "TypeScript, Node.js, Angular, AngularJS, Electron, MongoDB, PostgreSQL, Firebird, Azure, GCP, Linux, Docker, Kubernetes, Jenkins, Azure Pipelines, SonarQube",
    },
    {
      role: "Desenvolvedor Full Stack",
      company: "XPert Tecnologia e Automação",
      companyUrl: "http://www.xpert.com.br",
      location: "Pato Branco – Paraná, Brasil",
      period: "fevereiro de 2013 – agosto de 2015",
      bullets: [
        "Contribuí para a modernização de um ERP desktop legado para arquitetura web moderna, cooperando na ideia e no desenvolvimento da nova base técnica.",
        "Desenvolvi e mantive backends em Node.js e PHP, além de interfaces com JavaScript, ActionScript, HTML5 e CSS3, integradas por APIs REST com autenticação JWT e autorização baseada em papéis.",
        "Entreguei melhorias na arquitetura e nos componentes compartilhados que reduziram o tempo de desenvolvimento de novas funcionalidades e aumentaram o desempenho geral do sistema.",
        "Atuei em integrações com dispositivos IoT industriais, sensores, telemetria, automação, MQTT, WebSockets e dashboards em tempo real.",
      ],
      technologies:
        "Node.js, Express, TypeScript, PHP, JavaScript, ActionScript, HTML5, CSS3, MySQL, SQL Server, MQTT, WebSockets, Git, Jenkins, Docker",
    },
  ],
  earlier: [
    {
      role: "Desenvolvedor Full Stack",
      company: "SESMO Software para Medicina Ocupacional",
      companyUrl: "http://www.sesmo.com.br",
      location: "Pato Branco – Paraná, Brasil",
      period: "julho de 2012 – janeiro de 2013",
      bullets: [
        "Construí aplicações web ASP.NET/C# para medicina ocupacional, reduzi o tempo de consultas Firebird de aproximadamente 10 segundos para 1 segundo, automatizei relatórios fiscais e legais e integrei sistemas governamentais externos.",
      ],
    },
    {
      role: "Analista de Qualidade",
      company: "Viasoft Softwares Empresariais",
      companyUrl: "http://www.viasoft.com.br",
      location: "Pato Branco – Paraná, Brasil",
      period: "novembro de 2011 – março de 2012",
      bullets: [
        "Construí testes automatizados com Selenium WebDriver para ERPs corporativos, planos de regressão, testes funcionais e de integração e consultas Oracle de validação.",
      ],
    },
    {
      role: "Engenheiro de Redes / Desenvolvedor Web",
      company: "World Line Net",
      companyUrl: "http://www.wln.com.br",
      location: "Realeza – Paraná, Brasil",
      period: "janeiro de 2010 – setembro de 2010",
      bullets: [
        "Configurei equipamentos Cisco e Mikrotik, enlaces sem fio, monitoramento com Nagios, proteção de servidores, suporte a clientes e desenvolvimento web com HTML, CSS e JavaScript.",
      ],
    },
  ],
  education:
    "Curso Superior de Tecnologia em Análise e Desenvolvimento de Sistemas – Centro Universitário Internacional UNINTER, 2024 – 2026 (concluído em maio de 2026)",
  certifications: [
    { label: "Membro do IEEE (2026, credencial 102431427)", issuer: "IEEE" },
    {
      label: "Certificado EF SET C2 de proficiência em inglês",
      issuer: "EF SET, 2023",
      href: "https://cert.efset.org/WrwtBB",
    },
    {
      label: "TDD – Desenvolvimento de Software Guiado por Testes",
      issuer: "ITA – Instituto Tecnológico de Aeronáutica, 2024",
      href: "https://www.coursera.org/account/accomplishments/verify/W7CDHC5478YK",
    },
    {
      label:
        "Divide and Conquer, Sorting and Searching, and Randomized Algorithms",
      issuer: "Stanford University via Coursera, 2024",
      href: "https://www.coursera.org/account/accomplishments/verify/HFRVV45VS8GL",
    },
    {
      label: "Como Desenvolver a Liderança de Pensamento",
      issuer: "LinkedIn Learning, 2023",
      href: "https://www.linkedin.com/learning/certificates/8daebb55e1ea611ba155a79c406c2d88142365a2b9e0ee067c2f4c3af2e562fb",
    },
  ],
  alura: aluraCertificatesPt,
  languages: [
    "Português: nativo.",
    "Inglês: uso profissional diário, certificado EF SET C2.",
    "Espanhol: proficiência média B1 (estudo autônomo e uso ocasional no trabalho).",
  ],
  contact: [
    { label: "ivanhoinack@gmail.com", href: "mailto:ivanhoinack@gmail.com" },
    {
      label: "Agendar conversa de 30 min com Ivan Hoinacki",
      href: SCHEDULE_URL,
    },
    {
      label: "linkedin.com/in/ivanhoinacki",
      href: "https://www.linkedin.com/in/ivanhoinacki/",
    },
    {
      label: "github.com/ivanhoinacki",
      href: "https://github.com/ivanhoinacki",
    },
  ],
};
