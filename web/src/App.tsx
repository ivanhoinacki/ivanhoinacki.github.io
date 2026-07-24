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

  return "light";
}

export default function App() {
  const [theme, setTheme] = useState<Theme>(getInitialTheme);
  const [route, setRoute] = useState(window.location.hash);

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    localStorage.setItem("portfolio-theme", theme);

    const themeColor = document.querySelector<HTMLMetaElement>('meta[name="theme-color"]');
    themeColor?.setAttribute("content", theme === "dark" ? "#090e1a" : "#f8fafc");
  }, [theme]);

  useEffect(() => {
    const isPortuguese = route === "#/resume-pt";
    document.documentElement.lang = isPortuguese ? "pt-BR" : "en";
    document.title = isPortuguese
      ? "Ivan Hoinacki · Engenheiro de Software Sênior"
      : "Ivan Hoinacki · Senior Software Engineer";

    const description = document.querySelector<HTMLMetaElement>('meta[name="description"]');
    description?.setAttribute(
      "content",
      isPortuguese
        ? "Ivan Hoinacki é Engenheiro de Software Sênior com foco em plataformas de backend, sistemas nativos de nuvem, tecnologia para turismo e engenharia assistida por IA."
        : "Ivan Hoinacki is a Senior Software Engineer focused on backend platforms, cloud-native systems, travel technology, and AI-assisted engineering."
    );
  }, [route]);

  useEffect(() => {
    const handleHashChange = () => {
      setRoute(window.location.hash);
    };

    window.addEventListener("hashchange", handleHashChange);
    return () => window.removeEventListener("hashchange", handleHashChange);
  }, []);

  useEffect(() => {
    const animationFrame = window.requestAnimationFrame(() => {
      if (!route || route.startsWith("#/")) {
        window.scrollTo({ top: 0 });
        return;
      }

      const target = document.getElementById(route.slice(1));
      target?.scrollIntoView({ block: "start" });
    });

    return () => window.cancelAnimationFrame(animationFrame);
  }, [route]);

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
        alternateLabel="Inglês"
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
