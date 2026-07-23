import { CalendarDays, Github, Linkedin, Mail, MapPin } from "lucide-react";

const contactLinks = [
  {
    icon: Mail,
    label: "Email",
    value: "ivanhoinack@gmail.com",
    href: "mailto:ivanhoinack@gmail.com"
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "linkedin.com/in/ivanhoinacki",
    href: "https://www.linkedin.com/in/ivanhoinacki/"
  },
  {
    icon: Github,
    label: "GitHub",
    value: "github.com/ivanhoinacki",
    href: "https://github.com/ivanhoinacki"
  }
];

export function Contact() {
  return (
    <section className="section contact-section" id="contact">
      <div className="content-boundary contact-grid">
        <div>
          <p className="eyebrow">Let&apos;s connect</p>
          <h2>Have a complex engineering problem to solve?</h2>
          <p>
            I&apos;m interested in senior backend, platform, and architecture opportunities where
            hands-on engineering and technical leadership create meaningful product impact.
          </p>
          <div className="location">
            <MapPin size={17} aria-hidden="true" />
            Pato Branco, Brazil · UTC-3 · Remote
          </div>
          <a
            className="button button-primary"
            href="https://calendar.app.google/q5Pd6XSyihDqtoJG6"
            target="_blank"
            rel="noreferrer"
          >
            <CalendarDays size={19} aria-hidden="true" />
            Book a 30-minute conversation
          </a>
        </div>

        <div className="contact-links">
          {contactLinks.map(({ icon: Icon, label, value, href }) => (
            <a
              key={label}
              href={href}
              target={href.startsWith("http") ? "_blank" : undefined}
              rel={href.startsWith("http") ? "noreferrer" : undefined}
            >
              <span className="card-icon">
                <Icon size={20} aria-hidden="true" />
              </span>
              <span>
                <small>{label}</small>
                <strong>{value}</strong>
              </span>
              <span aria-hidden="true">↗</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
