import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { ArrowLeft, ChevronDown, Download, ExternalLink } from "lucide-react";
import PageShell from "@/components/portfolio/PageShell";
import SEO from "@/components/portfolio/SEO";
import { Eyebrow, Reveal } from "@/components/portfolio/atoms";
import { getField, type ProjectBlock, type MethodologyStep } from "@/content/home";
import NotFound from "./NotFound";

const ImagePlaceholder = ({ aspect = "aspect-[4/3]", label }: { aspect?: string; label: string }) => (
  <div
    className={`relative w-full ${aspect} rounded-md bg-ivory-deep border border-dashed border-foreground/15 flex items-center justify-center`}
  >
    <span className="text-[11px] uppercase tracking-wide text-foreground/40">{label}</span>
  </div>
);

const ProjectCard = ({ p, index }: { p: ProjectBlock; index: number }) => {
  const [open, setOpen] = useState(false);
  const reversed = index % 2 === 1;
  return (
    <Reveal>
      <article className="grid md:grid-cols-12 gap-8 md:gap-12 items-start py-12 md:py-16 border-t border-foreground/10">
        <div
          className={`md:col-span-6 space-y-4 ${reversed ? "md:order-2" : ""}`}
        >
          {p.mainImage ? (
            <img
              src={p.mainImage}
              alt={p.title}
              className={`w-full rounded-md border border-foreground/10 bg-ivory-deep ${p.mainImageContain ? "h-auto object-contain" : "aspect-[16/10] object-cover"} ${p.blurImages ? "blur-[3px]" : ""}`}
            />
          ) : (
            <ImagePlaceholder aspect="aspect-[16/10]" label="Main image" />
          )}
          {p.secondaryImage ? (
            <img
              src={p.secondaryImage}
              alt=""
              className={`w-full aspect-[16/10] rounded-md border border-foreground/10 object-cover bg-ivory-deep ${p.blurImages ? "blur-[3px]" : ""}`}
            />
          ) : (
            !p.mainImage && <ImagePlaceholder aspect="aspect-[16/10]" label="Optional image" />
          )}
        </div>

        <div className={`md:col-span-6 ${reversed ? "md:order-1" : ""}`}>
          <h3 className="font-display text-2xl md:text-3xl tracking-tight leading-snug mb-4">
            {p.title}
          </h3>
          <p className="text-foreground/80 leading-relaxed mb-5">{p.summary}</p>
          <p className="text-xs uppercase tracking-wide text-foreground/55 mb-5">
            Role · {p.role}
          </p>
          <p className="eyebrow mb-3">What I led</p>
          <ul className="space-y-2 mb-6">
            {p.ledBullets.map((b) => (
              <li key={b} className="flex gap-3 text-foreground/85 text-[15px] leading-relaxed">
                <span className="mt-2.5 w-3 h-px bg-foreground/40 flex-shrink-0" />
                <span>{b}</span>
              </li>
            ))}
          </ul>
          {p.factsLine && (
            <p className="text-xs text-foreground/70 mb-6 tracking-wide">{p.factsLine}</p>
          )}
          <button
            onClick={() => setOpen((v) => !v)}
            className="inline-flex items-center gap-1.5 text-sm font-medium text-foreground border-b border-foreground/30 hover:border-foreground transition-colors pb-0.5"
          >
            {open ? "Show less" : "Read more"}
            <ChevronDown
              className={`w-4 h-4 transition-transform ${open ? "rotate-180" : ""}`}
            />
          </button>
          {p.downloadUrl && (
            <a
              href={p.downloadUrl}
              target="_blank"
              rel="noopener noreferrer"
              download
              className="ml-4 inline-flex items-center gap-1.5 text-sm font-medium text-foreground bg-foreground/5 hover:bg-foreground/10 border border-foreground/15 rounded-md px-3 py-1.5 transition-colors"
            >
              <Download className="w-4 h-4" />
              {p.downloadLabel ?? "Download"}
            </a>
          )}
          {open && (
            <p className="mt-5 text-foreground/75 leading-relaxed border-l border-foreground/20 pl-5">
              {p.readMore}
            </p>
          )}
        </div>
      </article>
    </Reveal>
  );
};

const MethodologyStrip = ({ steps }: { steps: MethodologyStep[] }) => (
  <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-foreground/10 border border-foreground/10 rounded-md overflow-hidden">
    {steps.map((s, i) => (
      <div key={s.title} className="bg-ivory p-5">
        <p className="text-[11px] text-foreground/45 tabular-nums mb-2">
          {String(i + 1).padStart(2, "0")}
          {i < steps.length - 1 && <span className="ml-2 text-foreground/30">→</span>}
        </p>
        <p className="font-medium text-sm mb-2">{s.title}</p>
        <p className="text-xs text-foreground/65 leading-relaxed">{s.line}</p>
      </div>
    ))}
  </div>
);

const FieldPage = () => {
  const { slug = "" } = useParams();
  const field = getField(slug);
  if (!field) return <NotFound />;

  return (
    <PageShell>
      <SEO
        title={`${field.title} — Alanoud Alsamil`}
        description={field.hero}
      />
      <div className="container-edit pt-20 md:pt-24 pb-24">
        <Link
          to="/#work"
          className="inline-flex items-center gap-2 text-sm text-foreground/60 hover:text-foreground transition-colors mb-10"
        >
          <ArrowLeft className="w-4 h-4" /> Back to all fields
        </Link>

        <header className="max-w-3xl">
          <Reveal>
            <Eyebrow>Field</Eyebrow>
          </Reveal>
          <Reveal delay={0.05}>
            <h1 className="display-1 mt-5">{field.title}</h1>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="lede mt-6">{field.hero}</p>
          </Reveal>
        </header>

        {field.methodology && (
          <Reveal delay={0.15}>
            <MethodologyStrip steps={field.methodology} />
          </Reveal>
        )}

        <section className="mt-8">
          {field.projects.map((p, i) => (
            <ProjectCard key={p.slug} p={p} index={i} />
          ))}
        </section>
      </div>
    </PageShell>
  );
};

export default FieldPage;
