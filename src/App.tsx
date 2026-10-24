import { FaGithub, FaLinkedinIn } from "react-icons/fa6";
import { LuMail } from "react-icons/lu";
import Nav from "./components/Nav";
import Hero from "./components/Hero";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import { IconLink } from "./components/ui";
import { profile } from "./data";

export default function App() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Skills />
        <Experience />
        <Projects />
        <Contact />
      </main>
      <footer className="border-t border-line px-4 py-12 dark:border-line-dark">
        <div className="mx-auto flex max-w-6xl flex-col items-center gap-4 text-center">
          <h3 className="text-lg font-medium">{profile.fullName}</h3>
          <p className="text-sm text-muted dark:text-muted-dark">{profile.tagline}</p>
          <div className="flex gap-3">
            <IconLink href={profile.github} label="GitHub">
              <FaGithub size={16} />
            </IconLink>
            <IconLink href={profile.linkedin} label="LinkedIn">
              <FaLinkedinIn size={15} />
            </IconLink>
            <IconLink href={`mailto:${profile.email}`} label="Email">
              <LuMail size={16} />
            </IconLink>
          </div>
          <p className="text-xs text-muted dark:text-muted-dark">
            © {new Date().getFullYear()} {profile.fullName}
          </p>
        </div>
      </footer>
    </>
  );
}
