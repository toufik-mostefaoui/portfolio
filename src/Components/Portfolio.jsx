import { useState, useEffect } from "react";
import AnimatedBackground from "./AnimatedBackground";
import Navigation from "./Navigation";
import Hero from "./Hero";
import About from "./About";
import Skills from "./Skills";
import Projects from "./Projects";
import Experience from "./Experience";
import Contact from "./Contact";
export default function Portfolio() {
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        "home",
        "about",
        "skills",
        "projects",
        "experience",
        "contact",
      ];

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="relative min-h-screen">
      <AnimatedBackground />
      <Navigation activeSection={activeSection} />

      <div className="relative z-10">
        <section id="home">
          <Hero />
        </section>

        <section id="about">
          <About />
        </section>

        <section
          id="skills"
        >
          <Skills/>
        </section>

        <section
          id="projects"
        >
          <Projects />
        </section>

        <section
          id="experience"
          
        >
          <Experience />
        </section>

        <section
          id="contact"
          
        >
          <Contact />
        </section>
      </div>
    </div>
  );
}
