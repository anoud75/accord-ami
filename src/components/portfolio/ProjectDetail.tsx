import { Eyebrow, StatusBadge } from "./atoms";
import type { HomeProject } from "@/content/home";
import { categories } from "@/content/home";

const accessTone: Record<string, string> = {
  Public: "text-foreground/70",
  "Available on Request": "text-foreground/55",
  Confidential: "text-foreground/45",
};

const ProjectDetail = ({ project }: { project: HomeProject }) => {
  const projectCategories = categories.filter((c) => project.categories.includes(c.id));
  return (
    <article className="space-y-12">
      {/* Header */}
      <header>
        <div className="flex items-center justify-between flex-wrap gap-3 mb-5">
          <Eyebrow>{projectCategories.map((c) => c.title).join(" · ")}</Eyebrow>
          <StatusBadge status={project.status} />
        </div>
        <h2 className="display-2 mb-5">{project.title}</h2>
        <p className="lede max-w-3xl">{project.summary}</p>
        {project.important && (
          <p className="mt-5 text-xs text-foreground/55 italic max-w-2xl">
            {project.important}
          </p>
        )}
      </header>

      <div className="grid md:grid-cols-12 gap-10 md:gap-14">
        <div className="md:col-span-8 space-y-10">
          {project.problem && (
            <section>
              <Eyebrow>The Problem</Eyebrow>
              <p className="mt-4 text-foreground/80 leading-relaxed text-lg">
                {project.problem}
              </p>
            </section>
          )}

          <section>
            <Eyebrow>What I Worked On</Eyebrow>
            <ul className="mt-4 flex flex-wrap gap-1.5">
              {project.tags.map((t) => (
                <li
                  key={t}
                  className="text-xs px-2.5 py-1 border border-foreground/15 text-foreground/75 rounded-sm"
                >
                  {t}
                </li>
              ))}
            </ul>
            {project.whatIWorkedOn && (
              <ul className="mt-6 space-y-2.5">
                {project.whatIWorkedOn.map((w) => (
                  <li key={w} className="flex gap-3 text-foreground/85">
                    <span className="mt-2.5 w-3 h-px bg-foreground/40 flex-shrink-0" />
                    <span>{w}</span>
                  </li>
                ))}
              </ul>
            )}
          </section>

          {project.approach && project.approach.length > 0 && (
            <section>
              <Eyebrow>My Approach</Eyebrow>
              <ol className="mt-5 grid sm:grid-cols-2 gap-px bg-foreground/10 border border-foreground/10 rounded-md overflow-hidden">
                {project.approach.map((stage, i) => (
                  <li key={stage} className="bg-ivory p-5">
                    <p className="text-xs text-foreground/50 mb-1.5 tabular-nums">
                      {String(i + 1).padStart(2, "0")}
                    </p>
                    <p className="font-medium">{stage}</p>
                  </li>
                ))}
              </ol>
            </section>
          )}

          <section>
            <Eyebrow>Evidence & Files</Eyebrow>
            <div className="mt-4 border border-dashed border-foreground/20 rounded-md p-6 bg-ivory-deep/40">
              {project.evidence && project.evidence.length > 0 ? (
                <ul className="grid sm:grid-cols-2 gap-2.5">
                  {project.evidence.map((e) => (
                    <li
                      key={e.label}
                      className="flex items-center justify-between gap-3 bg-ivory border border-foreground/10 rounded-sm px-3.5 py-2.5"
                    >
                      <span className="text-sm text-foreground/85">{e.label}</span>
                      {e.access && (
                        <span
                          className={`text-[10px] uppercase tracking-wide ${
                            accessTone[e.access] ?? "text-foreground/55"
                          }`}
                        >
                          {e.access}
                        </span>
                      )}
                    </li>
                  ))}
                </ul>
              ) : (
                <p className="text-sm text-foreground/65">
                  Selected artefacts will be added here.
                </p>
              )}
              <p className="mt-4 text-[11px] text-foreground/45 leading-relaxed">
                Owner-editable area. Files, diagrams, presentations, and prototype links live here.
              </p>
            </div>
          </section>

          {project.whatItEnabled && (
            <section className="border-l-2 border-teal pl-6 py-2">
              <p className="eyebrow mb-2">{project.whatItEnabled.label}</p>
              <p className="text-foreground/85 text-lg leading-relaxed">
                {project.whatItEnabled.body}
              </p>
            </section>
          )}

          {project.whatILearned && (
            <section>
              <Eyebrow>What I Learned</Eyebrow>
              <p className="mt-4 text-foreground/80 leading-relaxed italic">
                {project.whatILearned}
              </p>
            </section>
          )}
        </div>

        <aside className="md:col-span-4 space-y-7 md:sticky md:top-4 md:self-start text-sm">
          {project.role && (
            <div>
              <p className="eyebrow mb-1.5">Role</p>
              <p className="text-foreground/80">{project.role}</p>
            </div>
          )}
          {project.period && (
            <div>
              <p className="eyebrow mb-1.5">Time period</p>
              <p className="text-foreground/80">{project.period}</p>
            </div>
          )}
          {project.team && (
            <div>
              <p className="eyebrow mb-1.5">Team</p>
              <p className="text-foreground/80">{project.team}</p>
            </div>
          )}
          <div>
            <p className="eyebrow mb-1.5">Sector</p>
            <p className="text-foreground/80">
              {projectCategories.map((c) => c.title).join(" · ")}
            </p>
          </div>
          {project.achievement && (
            <div>
              <p className="eyebrow mb-1.5">Recognition</p>
              <p className="text-foreground/80">{project.achievement}</p>
            </div>
          )}
        </aside>
      </div>
    </article>
  );
};

export default ProjectDetail;
