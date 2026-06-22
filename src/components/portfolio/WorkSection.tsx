import { useMemo, useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { Eyebrow, Reveal, StatusBadge } from "./atoms";
import ProjectDetail from "./ProjectDetail";
import { categories, projects, type HomeProject } from "@/content/home";

const ALL = "all";

const WorkSection = () => {
  const [active, setActive] = useState<string>(ALL);
  const [open, setOpen] = useState<HomeProject | null>(null);

  const filtered = useMemo(
    () =>
      active === ALL
        ? projects
        : projects.filter((p) => p.categories.includes(active)),
    [active],
  );

  return (
    <section id="work" className="border-t border-foreground/10 scroll-mt-20">
      <div className="container-edit py-20 md:py-24">
        <Reveal>
          <Eyebrow>My Work</Eyebrow>
          <h2 className="display-2 mt-4 max-w-3xl">My Work.</h2>
          <p className="lede max-w-3xl mt-6">
            I have worked across healthcare, AI, fintech, environmental products,
            accessibility, process intelligence, and public-facing experience design.
            Each project below shows what the work was, what I owned, and the evidence
            behind it.
          </p>
        </Reveal>

        {/* Category filter */}
        <Reveal delay={0.05}>
          <div className="mt-12 flex flex-wrap gap-2">
            {[{ id: ALL, title: "All" }, ...categories].map((c) => {
              const isActive = active === c.id;
              return (
                <button
                  key={c.id}
                  onClick={() => setActive(c.id)}
                  className={`text-xs px-3.5 py-2 rounded-full border transition-colors ${
                    isActive
                      ? "bg-foreground text-ivory border-foreground"
                      : "border-foreground/20 text-foreground/70 hover:border-foreground/50"
                  }`}
                >
                  {c.title}
                </button>
              );
            })}
          </div>
        </Reveal>

        {/* Project cards */}
        <div className="grid md:grid-cols-2 gap-5 mt-10">
          {filtered.map((p, pi) => (
            <Reveal key={p.slug} delay={Math.min(pi, 5) * 0.04}>
              <button
                onClick={() => setOpen(p)}
                className="group block text-left w-full h-full bg-ivory border border-foreground/15 rounded-md p-7 hover:border-foreground/50 hover:-translate-y-1 transition-all duration-300"
              >
                <div className="flex items-center justify-between mb-5 min-h-[18px]">
                  <StatusBadge status={p.status} />
                  <ArrowUpRight className="w-4 h-4 text-foreground/40 group-hover:text-foreground transition" />
                </div>
                <h4 className="font-display text-xl md:text-2xl leading-snug tracking-tight mb-3">
                  {p.title}
                </h4>
                <p className="text-sm text-foreground/70 leading-relaxed mb-4">
                  {p.summary}
                </p>
                {p.role && (
                  <p className="text-[11px] uppercase tracking-wide text-foreground/55 mb-4">
                    Role · {p.role}
                  </p>
                )}
                <ul className="flex flex-wrap gap-1.5">
                  {p.tags.slice(0, 6).map((t) => (
                    <li
                      key={t}
                      className="text-[11px] px-2 py-1 border border-foreground/15 text-foreground/65 rounded-sm"
                    >
                      {t}
                    </li>
                  ))}
                </ul>
                <p className="mt-5 text-xs font-medium text-foreground inline-flex items-center gap-1.5">
                  View Project <ArrowUpRight className="w-3 h-3" />
                </p>
              </button>
            </Reveal>
          ))}
        </div>
      </div>

      <Dialog open={!!open} onOpenChange={(v) => !v && setOpen(null)}>
        <DialogContent className="max-w-5xl max-h-[90vh] overflow-y-auto p-8 md:p-10">
          <DialogTitle className="sr-only">{open?.title ?? "Project"}</DialogTitle>
          {open && <ProjectDetail project={open} />}
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default WorkSection;
