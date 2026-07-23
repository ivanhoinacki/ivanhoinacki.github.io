import { useEffect, useState } from "react";
import { Contact } from "./components/Contact";
import { Experience } from "./components/Experience";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { Projects } from "./components/Projects";
import { Skills } from "./components/Skills";
import { ResumePage } from "./pages/ResumePage";
import { resumeEn, resumePt } from "./pages/resume-content";

export type Theme = "light" | "dark";

function getInitialTheme(): Theme {
  const storedTheme = localStorage.getItem("portfolio-theme");

  if (storedTheme === "light" || storedTheme === "dark") {
    return storedTheme;
  }

  return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
}

export default function App() {
  const [theme, setTheme] = useState<Theme>(getInitialTheme);
  const [route, setRoute] = useState(window.location.hash);

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    localStorage.setItem("portfolio-theme", theme);
  }, [theme]);

  useEffect(() => {
    const handleHashChange = () => {
      setRoute(window.location.hash);
      window.scrollTo({ top: 0 });
    };

    window.addEventListener("hashchange", handleHashChange);
    return () => window.removeEventListener("hashchange", handleHashChange);
  }, []);

  const toggleTheme = () => {
    setTheme((current) => (current === "light" ? "dark" : "light"));
  };

  if (route === "#/resume-us" || route === "#/resume-en") {
    return (
      <ResumePage
        content={resumeEn}
        alternateHref="#/resume-pt"
        alternateLabel="Português"
        theme={theme}
        onToggleTheme={toggleTheme}
      />
    );
  }

  if (route === "#/resume-pt") {
    return (
      <ResumePage
        content={resumePt}
        alternateHref="#/resume-us"
        alternateLabel="English"
        theme={theme}
        onToggleTheme={toggleTheme}
      />
    );
  }

  return (
    <div className="site-shell">
      <Header
        theme={theme}
        onToggleTheme={toggleTheme}
      />
      <main>
        <Hero />
        <Skills />
        <Experience />
        <Projects />
        <Contact />
      </main>
      <footer className="site-footer">
        <div className="content-boundary footer-content">
          <div>
            <strong>Ivan Hoinacki</strong>
            <p>Senior Software Engineer · Backend, Platform &amp; AI Engineering</p>
          </div>
          <p>© {new Date().getFullYear()} Ivan Hoinacki</p>
        </div>
      </footer>
    </div>
  );
}
