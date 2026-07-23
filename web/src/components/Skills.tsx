import {
  Bot,
  Braces,
  CloudCog,
  Database,
  Gauge,
  UsersRound
} from "lucide-react";

const skillGroups = [
  {
    icon: Braces,
    title: "Backend Engineering",
    description: "Distributed services and product integrations built for change.",
    skills: ["TypeScript", "Node.js", "NestJS", "REST", "GraphQL", "gRPC"]
  },
  {
    icon: CloudCog,
    title: "Cloud & Platform",
    description: "Repeatable infrastructure and delivery systems with operational ownership.",
    skills: ["AWS", "Azure", "Docker", "Kubernetes", "Terraform", "CI/CD"]
  },
  {
    icon: Database,
    title: "Data Systems",
    description: "Data platforms designed around workload, reliability, and discoverability.",
    skills: ["PostgreSQL", "PostGIS", "MongoDB", "Redis", "BigQuery", "Snowplow"]
  },
  {
    icon: Gauge,
    title: "Reliability",
    description: "Observability that connects service health to customer impact.",
    skills: ["Datadog", "OpenTelemetry", "Prometheus", "Grafana", "SLOs", "DORA"]
  },
  {
    icon: Bot,
    title: "AI Engineering",
    description: "Production-minded AI workflows with context, validation, and guardrails.",
    skills: ["RAG", "MCP", "LLM workflows", "AI agents", "OpenAI API", "Anthropic API"]
  },
  {
    icon: UsersRound,
    title: "Technical Leadership",
    description: "Hands-on leadership across architecture, delivery, and team growth.",
    skills: ["Architecture", "Mentoring", "Code review", "Planning", "Standards", "Workshops"]
  }
];

export function Skills() {
  return (
    <section className="section section-muted" id="expertise">
      <div className="content-boundary">
        <div className="section-heading">
          <p className="eyebrow">Core expertise</p>
          <h2>Engineering across the full system</h2>
          <p>
            From product-facing APIs to cloud foundations, I connect architecture decisions to
            delivery speed, reliability, and measurable business outcomes.
          </p>
        </div>

        <div className="card-grid">
          {skillGroups.map(({ icon: Icon, title, description, skills }) => (
            <article className="skill-card" key={title}>
              <div className="card-icon">
                <Icon size={21} aria-hidden="true" />
              </div>
              <h3>{title}</h3>
              <p>{description}</p>
              <ul className="tag-list" aria-label={`${title} technologies`}>
                {skills.map((skill) => (
                  <li key={skill}>{skill}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
