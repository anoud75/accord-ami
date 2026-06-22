import type { Project } from "@/content/projects";
import { getSector } from "@/content/sectors";
import { Eyebrow, Reveal, StatusBadge, WhyThisMatters } from "./atoms";

const Chevron = () => (
  <span className="text-foreground/30 select-none mx-2">→</span>
);

const CaseStudy = ({ project }: { project: Project }) => {
  const sector = getSector(project.sector);
  return (
    <article className="relative">
      <Reveal>
        <header className="border-t border-foreground/15 pt-10 mb-10">
          <div className="flex items-center justify-between flex-wrap gap-3 mb-6">
            <Eyebrow>{sector.label}</Eyebrow>
            <StatusBadge status={project.status} />
          </div>
          <h2 className="display-2 mb-5">{project.title}</h2>
          <p className="lede">{project.subtitle}</p>
        </header>
      </Reveal>

      <div className="grid md:grid-cols-12 gap-10 md:gap-16">
        <div className="md:col-span-8 space-y-10">
          {project.context && (
            <Reveal>
              <section>
                <Eyebrow>The Shift</Eyebrow>
                <p className="display-3 mt-3 mb-6">{project.shift}</p>
                <p className="text-foreground/80 leading-relaxed">{project.context}</p>
              </section>
            </Reveal>
          )}

          {project.challenge && (
            <Reveal>
              <section>
                <Eyebrow>The Challenge</Eyebrow>
                <p className="mt-3 text-foreground/80 leading-relaxed text-lg">{project.challenge}</p>
              </section>
            </Reveal>
          )}

          {project.opportunity && (
            <Reveal>
              <section>
                <Eyebrow>The Opportunity</Eyebrow>
                <p className="mt-3 text-foreground/80 leading-relaxed text-lg">{project.opportunity}</p>
              </section>
            </Reveal>
          )}

          {project.worked && (
            <Reveal>
              <section>
                <Eyebrow>What I Led</Eyebrow>
                <ul className="mt-4 space-y-3">
                  {project.worked.map((w) => (
                    <li key={w} className="flex gap-3 text-foreground/85">
                      <span className="text-teal mt-2 w-3 h-px bg-teal flex-shrink-0" />
                      <span>{w}</span>
                    </li>
                  ))}
                </ul>
              </section>
            </Reveal>
          )}

          {project.journey && (
            <Reveal>
              <section>
                <Eyebrow>The Product Journey</Eyebrow>
                <div className="mt-4 flex flex-wrap items-center text-foreground/85 font-medium">
                  {project.journey.map((step, i) => (
                    <span key={step} className="inline-flex items-center">
                      <span className="bg-ivory-deep px-3 py-1.5 my-1">{step}</span>
                      {i < project.journey!.length - 1 && <Chevron />}
                    </span>
                  ))}
                </div>
              </section>
            </Reveal>
          )}

          {project.framework && (
            <Reveal>
              <section>
                <Eyebrow>Framework in Action</Eyebrow>
                <div className="mt-4 divide-y divide-foreground/10 border-y border-foreground/10">
                  {project.framework.map((f) => (
                    <div key={f.label} className="grid md:grid-cols-4 gap-3 py-4">
                      <p className="font-medium md:col-span-1">{f.label}</p>
                      <p className="md:col-span-3 text-foreground/75">{f.body}</p>
                    </div>
                  ))}
                </div>
              </section>
            </Reveal>
          )}

          {project.principles && (
            <Reveal>
              <section>
                <Eyebrow>Product Principles</Eyebrow>
                <ul className="mt-4 grid sm:grid-cols-2 gap-3">
                  {project.principles.map((p) => (
                    <li key={p} className="text-foreground/80 leading-snug">— {p}</li>
                  ))}
                </ul>
              </section>
            </Reveal>
          )}

          {project.metrics && (
            <Reveal>
              <section>
                <Eyebrow>Validation Metrics</Eyebrow>
                <ul className="mt-4 grid sm:grid-cols-2 gap-3">
                  {project.metrics.map((m) => (
                    <li key={m} className="text-foreground/80 leading-snug">— {m}</li>
                  ))}
                </ul>
              </section>
            </Reveal>
          )}

          {project.whyItMatters && <Reveal><WhyThisMatters>{project.whyItMatters}</WhyThisMatters></Reveal>}
        </div>

        <aside className="md:col-span-4 space-y-8 md:sticky md:top-24 md:self-start">
          <div>
            <Eyebrow>Role</Eyebrow>
            <p className="mt-2 text-foreground/85">{project.role}</p>
          </div>
          <div>
            <Eyebrow>Contributions</Eyebrow>
            <ul className="mt-3 flex flex-wrap gap-1.5">
              {project.contributions.map((c) => (
                <li key={c} className="text-xs px-2.5 py-1 border border-foreground/15 text-foreground/75">
                  {c}
                </li>
              ))}
            </ul>
          </div>
        </aside>
      </div>
    </article>
  );
};

export default CaseStudy;
