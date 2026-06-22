import { Link, useParams } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import PageShell from "@/components/portfolio/PageShell";
import SEO from "@/components/portfolio/SEO";
import { Eyebrow, Reveal, StatusBadge } from "@/components/portfolio/atoms";
import { getProjectBySlug } from "@/content/home";
import NotFound from "./NotFound";

const ProjectDetailPage = () => {
  const { slug = "" } = useParams();
  const found = getProjectBySlug(slug);
  if (!found) return <NotFound />;
  const { project, field } = found;

  return (
    <PageShell>
      <SEO
        title={`${project.title} — Alanoud Alsamil`}
        description={project.summary}
      />

      <article className="container-edit pt-16 md:pt-20 pb-24">
        <Reveal>
          <Link
            to="/#work"
            className="inline-flex items-center gap-2 text-sm text-foreground/60 hover:text-foreground transition-colors mb-10"
          >
            <ArrowLeft className="w-4 h-4" /> Back to work
          </Link>
        </Reveal>

        {/* Project Header */}
        <Reveal>
          <header className="border-t border-foreground/15 pt-10">
            <div className="flex items-center justify-between flex-wrap gap-3 mb-6">
              <Eyebrow>{field.title}</Eyebrow>
              <StatusBadge status={project.status} />
            </div>
            <h1 className="display-1 mb-6">{project.title}</h1>
            <p className="lede max-w-3xl">{project.summary}</p>
          </header>
        </Reveal>

        <div className="grid md:grid-cols-12 gap-10 md:gap-16 mt-14">
          <div className="md:col-span-8 space-y-12">
            {/* What I Worked On */}
            <Reveal>
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
              </section>
            </Reveal>

            {/* The Problem */}
            {project.problem && (
              <Reveal>
                <section>
                  <Eyebrow>The Problem</Eyebrow>
                  <p className="mt-4 text-foreground/80 leading-relaxed text-lg">
                    {project.problem}
                  </p>
                </section>
              </Reveal>
            )}

            {/* My Approach */}
            {project.approach && project.approach.length > 0 && (
              <Reveal>
                <section>
                  <Eyebrow>My Approach</Eyebrow>
                  <ol className="mt-5 grid sm:grid-cols-2 gap-px bg-foreground/10 border border-foreground/10">
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
              </Reveal>
            )}

            {/* What I worked on bullets */}
            {project.whatIWorkedOn && (
              <Reveal>
                <section>
                  <Eyebrow>Highlights</Eyebrow>
                  <ul className="mt-4 space-y-3">
                    {project.whatIWorkedOn.map((w) => (
                      <li key={w} className="flex gap-3 text-foreground/85">
                        <span className="mt-2 w-3 h-px bg-foreground/40 flex-shrink-0" />
                        <span>{w}</span>
                      </li>
                    ))}
                  </ul>
                </section>
              </Reveal>
            )}

            {/* Evidence & Files */}
            <Reveal>
              <section>
                <Eyebrow>Evidence & Files</Eyebrow>
                <div className="mt-4 border border-dashed border-foreground/20 rounded-md p-8 bg-ivory-deep/40">
                  {project.confidential ? (
                    <div className="space-y-3 text-sm text-foreground/70">
                      <p className="font-medium text-foreground/85">
                        Confidential work — client names, private data, and internal screens are not shown.
                      </p>
                      <ul className="space-y-1.5">
                        <li>· View Sanitised Case Study</li>
                        <li>· View Anonymised Workflow</li>
                        <li>· Selected Artefacts Available on Request</li>
                      </ul>
                    </div>
                  ) : (
                    <div className="space-y-3 text-sm text-foreground/70">
                      <p className="font-medium text-foreground/85">
                        Selected artefacts will be added here.
                      </p>
                      <p>
                        Images, workflow diagrams, Figma frames, BRD excerpts, presentation slides,
                        strategy documents, and downloadable case studies will live in this section.
                      </p>
                    </div>
                  )}
                </div>
              </section>
            </Reveal>

            {/* What It Enabled */}
            {project.whatItEnabled && (
              <Reveal>
                <section className="border-l-2 border-teal pl-6 py-2">
                  <p className="eyebrow mb-2">{project.whatItEnabled.label}</p>
                  <p className="text-foreground/85 text-lg leading-relaxed">
                    {project.whatItEnabled.body}
                  </p>
                </section>
              </Reveal>
            )}

            {/* What I Learned */}
            {project.whatILearned && (
              <Reveal>
                <section>
                  <Eyebrow>What I Learned</Eyebrow>
                  <p className="mt-4 text-foreground/80 leading-relaxed italic">
                    {project.whatILearned}
                  </p>
                </section>
              </Reveal>
            )}
          </div>

          {/* Sidebar */}
          <aside className="md:col-span-4 space-y-7 md:sticky md:top-24 md:self-start text-sm">
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
              <p className="text-foreground/80">{field.title}</p>
            </div>
          </aside>
        </div>
      </article>
    </PageShell>
  );
};

export default ProjectDetailPage;
