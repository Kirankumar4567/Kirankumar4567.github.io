import { useEffect, useState } from "react";
import { LuMenu, LuMoon, LuSun, LuX } from "react-icons/lu";
import { profile } from "../data";

const links = [
  { id: "top", label: "Home" },
  { id: "skills", label: "Skills" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "contact", label: "Contact" },
];

export default function Nav() {
  const [dark, setDark] = useState(() => typeof document !== "undefined" && document.documentElement.classList.contains("dark"));
  const [active, setActive] = useState("top");
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", dark);
    try {
      localStorage.setItem("theme", dark ? "dark" : "light");
    } catch {
      /* storage unavailable */
    }
  }, [dark]);

  // Highlight the section currently on screen
  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && setActive(e.target.id)),
      { rootMargin: "-45% 0px -50% 0px" },
    );
    links.forEach((l) => {
      const el = document.getElementById(l.id);
      if (el) io.observe(el);
    });
    return () => io.disconnect();
  }, []);

  const linkClass = (id: string) =>
    `text-sm transition-colors ${
      active === id ? "text-fg dark:text-fg-dark" : "text-muted hover:text-fg dark:text-muted-dark dark:hover:text-fg-dark"
    }`;

  return (
    <nav className="fixed inset-x-0 top-0 z-30 border-b border-line/60 bg-bg/80 backdrop-blur-md dark:border-line-dark/60 dark:bg-bg-dark/80">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4">
        <a href="#top" className="text-lg font-medium tracking-tight">
          {profile.name}
        </a>

        <div className="flex items-center gap-6">
          <div className="hidden items-center gap-8 md:flex">
            {links.map((l) => (
              <a key={l.id} href={`#${l.id}`} className={linkClass(l.id)}>
                {l.label}
              </a>
            ))}
          </div>
          <button
            onClick={() => setDark((d) => !d)}
            aria-label={dark ? "Switch to light theme" : "Switch to dark theme"}
            className="grid h-9 w-9 place-items-center rounded-md text-muted transition-colors hover:bg-soft hover:text-fg dark:text-muted-dark dark:hover:bg-soft-dark dark:hover:text-fg-dark"
          >
            {dark ? <LuSun size={18} /> : <LuMoon size={18} />}
          </button>
          <button
            onClick={() => setOpen((o) => !o)}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            className="grid h-9 w-9 place-items-center rounded-md md:hidden"
          >
            {open ? <LuX size={20} /> : <LuMenu size={20} />}
          </button>
        </div>
      </div>

      {open && (
        <div className="border-t border-line px-4 py-3 md:hidden dark:border-line-dark">
          {links.map((l) => (
            <a key={l.id} href={`#${l.id}`} onClick={() => setOpen(false)} className={`block py-2 ${linkClass(l.id)}`}>
              {l.label}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}
