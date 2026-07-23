import {
  ArrowDown,
  CalendarDays,
  Github,
  Linkedin,
  Mail,
  Sparkles
} from "lucide-react";

const socialLinks = [
  {
    label: "GitHub",
    href: "https://github.com/ivanhoinacki",
    icon: Github
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/ivanhoinacki/",
    icon: Linkedin
  },
  {
    label: "Email",
    href: "mailto:ivanhoinack@gmail.com",
    icon: Mail
  }
];

const stats = [
  { value: "15+", label: "Years in software" },
  { value: "12+", label: "Squads supported" },
  { value: "67", label: "Repositories governed" }
];

export function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-background" aria-hidden="true">
        <div className="orb orb-one" />
        <div className="orb orb-two" />
        <div className="orb orb-three" />
        <div className="grid-pattern" />
      </div>

      <div className="content-boundary hero-grid">
        <div className="hero-copy">
          <div className="availability-badge">
            <Sparkles size={16} aria-hidden="true" />
            Open to senior engineering opportunities
          </div>

          <div>
            <p className="eyebrow">Hello, I&apos;m</p>
            <h1>Ivan Hoinacki</h1>
            <p className="hero-title">Senior Software Engineer · Backend, Platform &amp; AI</p>
          </div>

          <p className="hero-description">
            I build resilient backend platforms, cloud-native services, and AI-enabled products
            that turn complex business problems into reliable customer experiences.
          </p>

          <div className="hero-actions">
            <a
              className="button button-primary"
              href="https://calendar.app.google/q5Pd6XSyihDqtoJG6"
              target="_blank"
              rel="noreferrer"
            >
              <CalendarDays size={19} aria-hidden="true" />
              Schedule a conversation
            </a>
            <a className="button button-secondary" href="#work">
              Explore my work
            </a>
          </div>

          <div className="social-links" aria-label="Social links">
            {socialLinks.map(({ label, href, icon: Icon }) => (
              <a
                key={label}
                className="social-link"
                href={href}
                target={href.startsWith("http") ? "_blank" : undefined}
                rel={href.startsWith("http") ? "noreferrer" : undefined}
                aria-label={label}
              >
                <Icon size={20} aria-hidden="true" />
              </a>
            ))}
          </div>

          <dl className="hero-stats">
            {stats.map((stat) => (
              <div key={stat.label}>
                <dt>{stat.value}</dt>
                <dd>{stat.label}</dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="hero-portrait">
          <div className="portrait-glow" aria-hidden="true" />
          <div className="portrait-frame">
            <img
              src="/ivan-hoinacki.jpeg"
              alt="Ivan Hoinacki"
            />
          </div>
          <div className="portrait-status">
            <span aria-hidden="true" />
            Brazil · UTC-3 · Remote
          </div>
        </div>
      </div>

      <a className="scroll-indicator" href="#expertise">
        <span>Scroll to explore</span>
        <ArrowDown size={18} aria-hidden="true" />
      </a>
    </section>
  );
}
