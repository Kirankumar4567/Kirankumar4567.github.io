import { LuArrowRight, LuBot, LuClapperboard, LuCloud, LuCode, LuCreditCard, LuExternalLink, LuGithub, LuSearch } from "react-icons/lu";
import { projects, type Project } from "../data";
import { Badge, Button, Card, Reveal, Section } from "./ui";

const icons: Record<Project["icon"], typeof LuCode> = {
  card: LuCreditCard,
  search: LuSearch,
  clapper: LuClapperboard,
  bot: LuBot,
  cloud: LuCloud,
  code: LuCode,
};

/** Cover for each card: the project's data flow, drawn instead of a stock photo. */
function Cover({ project }: { project: Project }) {
  const Icon = icons[project.icon];
  return (
    <div className="relative flex aspect-video flex-col justify-between overflow-hidden border-b border-line bg-soft p-5 dark:border-line-dark dark:bg-soft-dark/60">
      <div
        aria-hidden
        className="absolute inset-0 opacity-[0.35] [background-image:radial-gradient(currentColor_1px,transparent_1px)] [background-size:16px_16px] text-line dark:text-line-dark"
      />
      <div className="relative flex items-center justify-between">
        <span className="grid h-10 w-10 place-items-center rounded-lg border border-line bg-bg dark:border-line-dark dark:bg-bg-dark">
          <Icon size={18} />
        </span>
        <span className="text-xs text-muted dark:text-muted-dark">{project.kind}</span>
      </div>
      <div className="relative flex flex-wrap items-center gap-1.5 text-xs">
        {project.flow.map((step, i) => (
          <span key={step} className="flex items-center gap-1.5">
            <span className="rounded-md border border-line bg-bg px-2 py-1 font-medium dark:border-line-dark dark:bg-bg-dark">{step}</span>
            {i < project.flow.length - 1 && <LuArrowRight size={12} className="text-muted dark:text-muted-dark" />}
          </span>
        ))}
      </div>
    </div>
  );
}

export default function Projects() {
  return (
    <Section
      id="projects"
      title="Featured Projects"
      subtitle="Systems I've built at work, and side projects I've built to learn."
      tinted
      wide
    >
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((p, i) => (
          <Reveal key={p.title} delay={(i % 3) * 0.05}>
            <Card className="group flex h-full flex-col overflow-hidden transition-shadow hover:shadow-lg">
              <Cover project={p} />
              <div className="flex flex-1 flex-col space-y-4 p-6">
                <h3 className="font-medium">{p.title}</h3>
                <p className="flex-1 text-sm leading-relaxed text-muted dark:text-muted-dark">{p.description}</p>
                <div className="flex flex-wrap gap-2">
                  {p.tags.map((t) => (
                    <Badge key={t}>{t}</Badge>
                  ))}
                </div>
                {(p.code || p.demo) && (
                  <div className="flex gap-2 pt-2">
                    {p.code && (
                      <Button href={p.code} small external>
                        <LuGithub size={14} /> Code
                      </Button>
                    )}
                    {p.demo && (
                      <Button href={p.demo} small primary external>
                        <LuExternalLink size={14} /> Demo
                      </Button>
                    )}
                  </div>
                )}
              </div>
            </Card>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
