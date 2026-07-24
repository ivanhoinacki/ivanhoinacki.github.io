import { BriefcaseBusiness, CalendarDays, MapPin } from "lucide-react";

const experience = [
  {
    role: "Senior Software Engineer",
    company: "Luxury Escapes",
    period: "2026 – Present",
    location: "Remote · Australia",
    summary:
      "Building travel technology across provider integrations, booking flows, search and discovery, operational reliability, and AI-powered attraction curation.",
    technologies: ["TypeScript", "Node.js", "NestJS", "PostgreSQL", "AWS", "Datadog", "GenAI"]
  },
  {
    role: "Solutions Architect",
    company: "ALLOS",
    period: "2025 – 2026",
    location: "Remote · Brazil",
    summary:
      "Led platform, observability, cloud, security, and AI initiatives across a large digital ecosystem, supporting multidisciplinary product squads.",
    technologies: ["Azure", "Kubernetes", "OpenTelemetry", "Terraform", "Grafana", "RAG"]
  },
  {
    role: "Tech Lead / Senior Software Engineer",
    company: "ília",
    period: "2020 – 2024",
    location: "Remote · Brazil",
    summary:
      "Led architecture and delivery for international banking, loyalty, mobility, and enterprise products in multidisciplinary teams.",
    technologies: ["Node.js", "NestJS", "AWS", "Azure", "MongoDB", "DDD", "Clean Architecture"]
  },
  {
    role: "Staff Software Engineer / Tech Lead",
    company: "Limber Software",
    period: "2016 – 2020",
    location: "Pato Branco · Brazil",
    summary:
      "Created the web engineering foundation from the ground up and scaled it into specialized teams serving tourism, hospitality, and commerce.",
    technologies: ["Node.js", "Angular", "Docker", "Kubernetes", "CI/CD", "SonarQube"]
  }
];

export function Experience() {
  return (
    <section className="section" id="experience">
      <div className="content-boundary narrow-boundary">
        <div className="section-heading">
          <p className="eyebrow">Selected experience</p>
          <h2>A career shaped by increasingly complex systems</h2>
          <p>
            I started close to infrastructure and support, grew through hands-on product
            engineering, and moved into technical leadership without stepping away from delivery.
          </p>
        </div>

        <div className="experience-list">
          {experience.map((item) => (
            <article className="experience-card" key={`${item.company}-${item.role}`}>
              <div className="experience-header">
                <div>
                  <h3>
                    <BriefcaseBusiness size={20} aria-hidden="true" />
                    {item.role}
                  </h3>
                  <p className="company-name">{item.company}</p>
                </div>
                <div className="experience-meta">
                  <span>
                    <CalendarDays size={15} aria-hidden="true" />
                    {item.period}
                  </span>
                  <span>
                    <MapPin size={15} aria-hidden="true" />
                    {item.location}
                  </span>
                </div>
              </div>
              <p>{item.summary}</p>
              <ul className="tag-list">
                {item.technologies.map((technology) => (
                  <li key={technology}>{technology}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
