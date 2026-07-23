import { ArrowUpRight, Bot, ChartNoAxesCombined, Workflow } from "lucide-react";

const work = [
  {
    icon: Bot,
    type: "AI Engineering",
    title: "AI-assisted engineering ecosystem",
    description:
      "A reusable operating model for coding agents, context engineering, review workflows, team rules, hooks, and practical workshops.",
    metrics: ["9 engineering rules", "16 reusable skills", "25 workflow hooks"],
    href: "https://github.com/ivanhoinacki/team-exp-claude-config"
  },
  {
    icon: Workflow,
    type: "Travel Technology",
    title: "AI-powered attraction curation",
    description:
      "A guarded data pipeline combining model workflows, geospatial validation, deduplication, and place-quality checks for travel discovery.",
    metrics: ["18 countries", "56 cities", "1,193+ attractions"],
    href: "#contact"
  },
  {
    icon: ChartNoAxesCombined,
    type: "Platform Engineering",
    title: "Observability and delivery governance",
    description:
      "Cross-team standards connecting telemetry, service health, CI/CD quality gates, security checks, and DORA delivery metrics.",
    metrics: ["67 repositories", "12+ squads", "~40% lower logging costs"],
    href: "#contact"
  }
];

export function Projects() {
  return (
    <section className="section section-muted" id="work">
      <div className="content-boundary">
        <div className="section-heading">
          <p className="eyebrow">Selected work</p>
          <h2>Systems that improve how teams and products operate</h2>
          <p>
            A few examples of the problems I enjoy: scaling platform capabilities, making
            production behavior visible, and applying AI with strong engineering guardrails.
          </p>
        </div>

        <div className="work-grid">
          {work.map(({ icon: Icon, type, title, description, metrics, href }) => (
            <article className="work-card" key={title}>
              <div className="work-visual">
                <Icon size={42} aria-hidden="true" />
                <span>{type}</span>
              </div>
              <div className="work-body">
                <h3>{title}</h3>
                <p>{description}</p>
                <ul className="metric-list">
                  {metrics.map((metric) => (
                    <li key={metric}>{metric}</li>
                  ))}
                </ul>
                <a
                  className="text-link"
                  href={href}
                  target={href.startsWith("http") ? "_blank" : undefined}
                  rel={href.startsWith("http") ? "noreferrer" : undefined}
                >
                  {href.startsWith("http") ? "View public project" : "Discuss the case"}
                  <ArrowUpRight size={17} aria-hidden="true" />
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
