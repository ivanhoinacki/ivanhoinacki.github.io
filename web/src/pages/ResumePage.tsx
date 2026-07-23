import {
  ArrowLeft,
  CalendarDays,
  Download,
  ExternalLink,
  Moon,
  Sun
} from "lucide-react";
import type { Theme } from "../App";
import type {
  ResumeCertification,
  ResumeContent,
  ResumeLink,
  ResumeRole
} from "./resume-content";

interface ResumePageProps {
  content: ResumeContent;
  alternateHref: string;
  alternateLabel: string;
  theme: Theme;
  onToggleTheme: () => void;
}

function Link({
  link,
  className
}: {
  link: ResumeLink;
  className?: string;
}) {
  const external = link.href.startsWith("http");

  return (
    <a
      className={className}
      href={link.href}
      target={external ? "_blank" : undefined}
      rel={external ? "noreferrer" : undefined}
    >
      {link.label}
      {external && <ExternalLink size={14} aria-hidden="true" />}
    </a>
  );
}

function Role({
  role,
  technologiesLabel
}: {
  role: ResumeRole;
  technologiesLabel: string;
}) {
  return (
    <article className="resume-role">
      <div className="resume-role-heading">
        <div>
          <h3>{role.role}</h3>
          <p>
            {role.companyUrl ? (
              <a href={role.companyUrl} target="_blank" rel="noreferrer">
                {role.company}
                <ExternalLink size={13} aria-hidden="true" />
              </a>
            ) : (
              role.company
            )}
          </p>
        </div>
        <div className="resume-role-meta">
          <strong>{role.period}</strong>
          <span>{role.location}</span>
        </div>
      </div>
      {role.intro && <p className="resume-role-intro">{role.intro}</p>}
      <ul>
        {role.bullets.map((bullet) => (
          <li key={bullet}>{bullet}</li>
        ))}
      </ul>
      {role.technologies && (
        <p className="resume-technologies">
          <strong>{technologiesLabel}:</strong> {role.technologies}
        </p>
      )}
    </article>
  );
}

function Certification({ certification }: { certification: ResumeCertification }) {
  const label = certification.href ? (
    <a href={certification.href} target="_blank" rel="noreferrer">
      {certification.label}
      <ExternalLink size={13} aria-hidden="true" />
    </a>
  ) : (
    certification.label
  );

  return (
    <li>
      {label} — {certification.issuer}
    </li>
  );
}

export function ResumePage({
  content,
  alternateHref,
  alternateLabel,
  theme,
  onToggleTheme
}: ResumePageProps) {
  const scheduleLink =
    content.contact.find((item) => item.label === content.scheduleLabel)?.href ??
    "https://calendar.app.google/q5Pd6XSyihDqtoJG6";

  return (
    <div className="resume-page">
      <header className="resume-toolbar">
        <div className="content-boundary resume-toolbar-content">
          <a className="resume-back-link" href="#home">
            <ArrowLeft size={18} aria-hidden="true" />
            Home
          </a>
          <div className="resume-toolbar-actions">
            <a className="resume-language-link" href={alternateHref}>
              {alternateLabel}
            </a>
            <button
              className="icon-button"
              type="button"
              aria-label={`Switch to ${theme === "light" ? "dark" : "light"} theme`}
              onClick={onToggleTheme}
            >
              {theme === "light" ? <Moon size={19} /> : <Sun size={19} />}
            </button>
          </div>
        </div>
      </header>

      <main className="resume-main">
        <article className="resume-document">
          <header className="resume-profile">
            <div>
              <p className="eyebrow">{content.documentLabel}</p>
              <h1>Ivan Augusto Hoinacki</h1>
              <p className="resume-headline">{content.headline}</p>
              <p className="resume-meta">{content.meta}</p>
            </div>
            <div className="resume-primary-actions">
              <a
                className="button button-primary"
                href={scheduleLink}
                target="_blank"
                rel="noreferrer"
              >
                <CalendarDays size={18} aria-hidden="true" />
                {content.scheduleLabel}
              </a>
              <div className="resume-downloads">
                {content.downloads.map((download) => (
                  <a key={download.href} href={download.href} download>
                    <Download size={16} aria-hidden="true" />
                    {download.label}
                  </a>
                ))}
              </div>
            </div>
          </header>

          <section className="resume-section">
            <h2>{content.sections.aiProjects}</h2>
            <div className="resume-link-grid">
              {content.aiProjects.map((project) => (
                <article key={project.href}>
                  <Link link={project} />
                  {project.description && <p>{project.description}</p>}
                </article>
              ))}
            </div>
          </section>

          <section className="resume-section">
            <h2>{content.sections.summary}</h2>
            {content.summary.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </section>

          <section className="resume-section">
            <h2>{content.sections.highlights}</h2>
            <ul>
              {content.highlights.map((highlight) => (
                <li key={highlight}>{highlight}</li>
              ))}
            </ul>
          </section>

          <section className="resume-section">
            <h2>{content.sections.skills}</h2>
            <ul>
              {content.skills.map((skill) => (
                <li key={skill}>{skill}</li>
              ))}
            </ul>
          </section>

          <section className="resume-section">
            <h2>{content.sections.experience}</h2>
            <div className="resume-role-list">
              {content.experience.map((role) => (
                <Role
                  key={`${role.company}-${role.period}`}
                  role={role}
                  technologiesLabel={content.technologiesLabel}
                />
              ))}
            </div>
          </section>

          <section className="resume-section">
            <h2>{content.sections.earlier}</h2>
            <div className="resume-role-list compact">
              {content.earlier.map((role) => (
                <Role
                  key={`${role.company}-${role.period}`}
                  role={role}
                  technologiesLabel={content.technologiesLabel}
                />
              ))}
            </div>
          </section>

          <section className="resume-section">
            <h2>{content.sections.education}</h2>
            <p>{content.education}</p>
          </section>

          <section className="resume-section">
            <h2>{content.sections.certifications}</h2>
            <ul>
              {content.certifications.map((certification) => (
                <Certification key={certification.label} certification={certification} />
              ))}
            </ul>
            <div className="resume-certificate-links">
              {content.alura.map((certificate) => (
                <Link key={certificate.href} link={certificate} />
              ))}
            </div>
          </section>

          <section className="resume-section">
            <h2>{content.sections.languages}</h2>
            <ul>
              {content.languages.map((language) => (
                <li key={language}>{language}</li>
              ))}
            </ul>
          </section>

          <section className="resume-section resume-contact">
            <h2>{content.sections.contact}</h2>
            <div>
              {content.contact.map((item) => (
                <Link key={item.href} link={item} />
              ))}
            </div>
          </section>
        </article>
      </main>
    </div>
  );
}
