import { motion } from "motion/react";
import { FaGithub, FaLinkedinIn } from "react-icons/fa6";
import { LuArrowDown, LuDownload, LuMail, LuSparkles } from "react-icons/lu";
import { profile, stats } from "../data";
import { Button, IconLink } from "./ui";

export default function Hero() {
  return (
    <section id="top" className="relative flex min-h-screen items-center overflow-hidden px-4 pt-24 pb-28">
      {/* Soft background glow */}
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="absolute top-1/4 right-[10%] h-[28rem] w-[28rem] rounded-full bg-fg/[0.03] blur-3xl dark:bg-fg-dark/[0.05]" />
        <div className="absolute bottom-0 left-[5%] h-80 w-80 rounded-full bg-fg/[0.02] blur-3xl dark:bg-fg-dark/[0.03]" />
      </div>

      <div className="relative mx-auto grid w-full max-w-6xl items-center gap-16 lg:grid-cols-2">
        <motion.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="space-y-8">
          <span className="inline-flex items-center gap-2 rounded-md border border-line bg-soft px-4 py-2 text-xs font-medium dark:border-line-dark dark:bg-soft-dark">
            <LuSparkles size={14} /> Open to new roles
          </span>

          <div className="space-y-5">
            <p className="text-muted dark:text-muted-dark">Hello, I'm</p>
            <h1 className="bg-gradient-to-r from-fg via-fg to-fg/60 bg-clip-text text-5xl leading-[1.05] font-light tracking-tight text-transparent sm:text-6xl dark:from-fg-dark dark:via-fg-dark dark:to-fg-dark/60">
              {profile.name}
            </h1>
            <p className="max-w-xl text-xl text-muted md:text-2xl dark:text-muted-dark">
              {profile.subtitle.before}
              <span className="text-fg dark:text-fg-dark">{profile.subtitle.highlight}</span>
              {profile.subtitle.after}
            </p>
            <p className="max-w-lg leading-relaxed text-muted dark:text-muted-dark">{profile.intro}</p>
          </div>

          <div className="flex flex-wrap gap-3">
            <Button href={profile.resume} primary external>
              <LuDownload size={16} /> Download Resume
            </Button>
            <Button href="#projects">View My Work</Button>
          </div>

          <div className="flex gap-4">
            <IconLink href={profile.github} label="GitHub">
              <FaGithub size={18} />
            </IconLink>
            <IconLink href={profile.linkedin} label="LinkedIn">
              <FaLinkedinIn size={17} />
            </IconLink>
            <IconLink href={`mailto:${profile.email}`} label="Email">
              <LuMail size={18} />
            </IconLink>
          </div>

          <div className="flex gap-10 border-t border-line pt-8 dark:border-line-dark">
            {stats.map((s) => (
              <div key={s.label}>
                <div className="text-2xl font-medium tracking-tight">{s.value}</div>
                <div className="mt-1 text-sm text-muted dark:text-muted-dark">{s.label}</div>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="relative mx-auto"
        >
          <div aria-hidden className="absolute -inset-6 rounded-full bg-fg/[0.04] blur-2xl dark:bg-fg-dark/[0.06]" />
          <div className="group relative h-72 w-72 overflow-hidden rounded-full border-4 border-bg/50 shadow-2xl sm:h-80 sm:w-80 lg:h-96 lg:w-96 dark:border-bg-dark/50">
            <img
              src={profile.photo}
              alt={`Photo of ${profile.fullName}`}
              width={800}
              height={800}
              className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
          </div>
          <div className="absolute -right-2 -bottom-4 flex items-center gap-3 rounded-2xl border border-line bg-bg/90 px-5 py-3 shadow-xl backdrop-blur-sm sm:-right-6 dark:border-line-dark dark:bg-bg-dark/90">
            <span className="h-3 w-3 animate-pulse rounded-full bg-green-500 motion-reduce:animate-none" />
            <span className="text-sm">Available for hire</span>
          </div>
        </motion.div>
      </div>

      <a
        href="#skills"
        className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-sm text-muted md:flex dark:text-muted-dark"
      >
        Scroll to explore
        <LuArrowDown className="animate-bounce motion-reduce:animate-none" size={16} />
      </a>
    </section>
  );
}
