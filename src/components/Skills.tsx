import { LuBrain, LuCloud, LuCode, LuDatabase, LuLayoutDashboard, LuServer } from "react-icons/lu";
import { skills, type SkillGroup } from "../data";
import { Badge, Card, Reveal, Section } from "./ui";

const icons: Record<SkillGroup["icon"], typeof LuCode> = {
  code: LuCode,
  server: LuServer,
  layout: LuLayoutDashboard,
  database: LuDatabase,
  cloud: LuCloud,
  brain: LuBrain,
};

export default function Skills() {
  return (
    <Section
      id="skills"
      title="Technical Skills"
      subtitle="The tools I use every day to build backends, internal tools and integrations that run in production."
      tinted
      wide
    >
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {skills.map((g, i) => {
          const Icon = icons[g.icon];
          return (
            <Reveal key={g.title} delay={i * 0.05}>
              <Card className="h-full p-6">
                <h3 className="mb-5 flex items-center gap-3 font-medium">
                  <Icon size={20} className="text-muted dark:text-muted-dark" />
                  {g.title}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {g.items.map((s) => (
                    <Badge key={s}>{s}</Badge>
                  ))}
                </div>
              </Card>
            </Reveal>
          );
        })}
      </div>
    </Section>
  );
}
