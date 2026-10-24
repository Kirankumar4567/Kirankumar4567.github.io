import { LuBriefcase, LuCalendar, LuExternalLink, LuGraduationCap, LuMapPin, LuTrophy } from "react-icons/lu";
import { education, jobs } from "../data";
import { Badge, Card, Reveal, Section } from "./ui";

export default function Experience() {
  return (
    <Section
      id="experience"
      title="Professional Experience"
      subtitle="Two years of building and running production systems for a news app and a subscription learning app."
    >
      <div className="space-y-6">
        {jobs.map((job, i) => (
          <Reveal key={job.company} delay={i * 0.05}>
            <Card className="p-6">
              <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
                <div>
                  <h3 className="flex items-center gap-2 font-medium">
                    <LuBriefcase size={18} className="text-muted dark:text-muted-dark" />
                    {job.role}
                  </h3>
                  <p className="mt-1 text-fg/80 dark:text-fg-dark/80">
                    {job.company}
                    {job.link && (
                      <>
                        {" · "}
                        <a
                          href={job.link.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1 underline underline-offset-4"
                        >
                          {job.link.label} <LuExternalLink size={12} />
                        </a>
                      </>
                    )}
                  </p>
                </div>
                <div className="flex flex-col gap-1 text-sm text-muted md:items-end dark:text-muted-dark">
                  <span className="flex items-center gap-2">
                    <LuCalendar size={14} /> {job.period}
                  </span>
                  <span className="flex items-center gap-2">
                    <LuMapPin size={14} /> {job.location}
                  </span>
                </div>
              </div>

              <p className="mt-5 text-muted dark:text-muted-dark">{job.summary}</p>
              <ul className="mt-4 space-y-2 text-[15px] leading-relaxed">
                {job.points.map((p) => (
                  <li key={p} className="flex gap-3">
                    <span className="mt-[9px] h-1.5 w-1.5 shrink-0 rounded-full bg-muted dark:bg-muted-dark" />
                    <span>{p}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-5 flex flex-wrap gap-2">
                {job.tags.map((t) => (
                  <Badge key={t} outline>
                    {t}
                  </Badge>
                ))}
              </div>
            </Card>
          </Reveal>
        ))}

        <Reveal>
          <Card className="p-6">
            <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
              <div>
                <h3 className="flex items-center gap-2 font-medium">
                  <LuGraduationCap size={18} className="text-muted dark:text-muted-dark" />
                  {education.degree}
                </h3>
                <p className="mt-1 text-fg/80 dark:text-fg-dark/80">{education.school}</p>
              </div>
              <span className="flex items-center gap-2 text-sm text-muted dark:text-muted-dark">
                <LuCalendar size={14} /> {education.period}
              </span>
            </div>
            <div className="mt-5 flex flex-wrap gap-2">
              {education.achievements.map((a) => (
                <span key={a} className="inline-flex items-center gap-1.5 rounded-md bg-soft px-2 py-1 text-xs dark:bg-soft-dark">
                  <LuTrophy size={12} /> {a}
                </span>
              ))}
            </div>
          </Card>
        </Reveal>
      </div>
    </Section>
  );
}
