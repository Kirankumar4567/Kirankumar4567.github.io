import type { ReactNode } from "react";
import { motion } from "motion/react";

/** Fades content up when it scrolls into view. */
export function Reveal({ children, delay = 0, className = "" }: { children: ReactNode; delay?: number; className?: string }) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.5, delay, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
}

export function Section({
  id,
  title,
  subtitle,
  tinted = false,
  wide = false,
  children,
}: {
  id: string;
  title: string;
  subtitle?: string;
  tinted?: boolean;
  wide?: boolean;
  children: ReactNode;
}) {
  return (
    <section id={id} className={`scroll-mt-16 px-4 py-20 ${tinted ? "bg-soft/50 dark:bg-soft-dark/30" : ""}`}>
      <div className={`mx-auto ${wide ? "max-w-6xl" : "max-w-4xl"}`}>
        <Reveal className="mx-auto mb-12 max-w-2xl space-y-4 text-center">
          <h2 className="text-3xl font-medium tracking-tight md:text-4xl">{title}</h2>
          {subtitle && <p className="text-muted dark:text-muted-dark">{subtitle}</p>}
        </Reveal>
        {children}
      </div>
    </section>
  );
}

export function Card({ children, className = "" }: { children: ReactNode; className?: string }) {
  return (
    <div className={`rounded-xl border border-line bg-card dark:border-line-dark dark:bg-card-dark ${className}`}>{children}</div>
  );
}

/** Filled badge (skills) or outlined badge (tech used on a job/project). */
export function Badge({ children, outline = false }: { children: ReactNode; outline?: boolean }) {
  return (
    <span
      className={`inline-flex items-center rounded-md border px-2 py-0.5 text-xs font-medium whitespace-nowrap ${
        outline
          ? "border-line text-fg dark:border-line-dark dark:text-fg-dark"
          : "border-transparent bg-soft text-fg dark:bg-soft-dark dark:text-fg-dark"
      }`}
    >
      {children}
    </span>
  );
}

export function Button({
  href,
  children,
  primary = false,
  small = false,
  external = false,
}: {
  href: string;
  children: ReactNode;
  primary?: boolean;
  small?: boolean;
  external?: boolean;
}) {
  const size = small ? "h-8 px-3 text-sm" : "h-11 px-6 text-sm";
  const look = primary
    ? "bg-fg text-bg hover:bg-fg/90 dark:bg-fg-dark dark:text-bg-dark dark:hover:bg-fg-dark/90"
    : "border border-line bg-bg hover:bg-soft dark:border-line-dark dark:bg-card-dark dark:hover:bg-soft-dark";
  return (
    <a
      href={href}
      className={`inline-flex items-center justify-center gap-2 rounded-md font-medium transition-colors ${size} ${look}`}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
    >
      {children}
    </a>
  );
}

export function IconLink({ href, label, children }: { href: string; label: string; children: ReactNode }) {
  return (
    <a
      href={href}
      aria-label={label}
      target={href.startsWith("http") ? "_blank" : undefined}
      rel="noopener noreferrer"
      className="grid h-10 w-10 place-items-center rounded-full border border-line text-muted transition-colors hover:bg-soft hover:text-fg dark:border-line-dark dark:text-muted-dark dark:hover:bg-soft-dark dark:hover:text-fg-dark"
    >
      {children}
    </a>
  );
}
