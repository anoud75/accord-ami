import { Link, useParams } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import PageShell from "@/components/portfolio/PageShell";
import SEO from "@/components/portfolio/SEO";
import ProjectCard from "@/components/portfolio/ProjectCard";
import { Eyebrow, Reveal } from "@/components/portfolio/atoms";
import { getField, type MethodologyStep } from "@/content/home";
import NotFound from "./NotFound";


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
