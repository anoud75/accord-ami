import PageShell from "@/components/portfolio/PageShell";
import SectorHero from "@/components/portfolio/SectorHero";
import SEO from "@/components/portfolio/SEO";
import { Eyebrow, Reveal, BilingualStatement } from "@/components/portfolio/atoms";
import { frameworkStages, deliveryPhases, principles } from "@/content/methodology";

const HowIThinkPage = () => (
  <PageShell>
    <SEO
      title="How I Think — Alanoud Alsamil"
      description="A product thinking framework from evidence to outcomes, and the principles behind the work."
    />
    <SectorHero
      eyebrow="Methodology"
      title="From complex systems to adoptable products."
      intro="I do not begin with screens or feature lists. I begin by understanding the real system: the people, workflows, data, constraints, incentives, risks, and decisions that shape the problem."
    />

    <section className="container-edit py-16 border-t border-foreground/10">
      <Reveal>
        <Eyebrow>My Product Thinking Framework</Eyebrow>
        <h2 className="display-2 mt-4 mb-12 max-w-3xl">Five stages, applied across every project.</h2>
      </Reveal>
      <div className="space-y-px bg-foreground/10 border border-foreground/10">
        {frameworkStages.map((s) => (
          <Reveal key={s.number}>
            <div className="bg-ivory grid md:grid-cols-12 gap-6 p-8">
              <div className="md:col-span-2"><p className="text-3xl font-medium text-teal">{s.number}</p></div>
              <div className="md:col-span-3"><p className="font-medium text-xl">{s.title}</p><p className="text-sm text-foreground/60 mt-1">{s.prompt}</p></div>
              <div className="md:col-span-7"><p className="text-foreground/80 leading-relaxed">{s.body}</p></div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>

    <section className="container-edit py-16">
      <Reveal>
        <Eyebrow>How I Deliver</Eyebrow>
        <h2 className="display-3 mt-4 mb-10">From discovery to communication.</h2>
      </Reveal>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-foreground/10 border border-foreground/10">
        {deliveryPhases.map((p) => (
          <Reveal key={p.title}>
            <div className="bg-ivory p-7 h-full">
              <p className="font-medium text-lg mb-3">{p.title}</p>
              <p className="text-sm text-foreground/70 leading-relaxed">{p.body}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>

    <section className="container-edit py-16 bg-foreground text-ivory -mx-6 md:-mx-10 px-6 md:px-10">
      <div className="container-edit !mx-0 !px-0">
        <Reveal>
          <p className="text-[11px] tracking-[0.22em] uppercase text-ivory/55">Principles I use</p>
          <h2 className="display-2 mt-4 mb-12 text-ivory max-w-3xl">Beliefs that shape every decision.</h2>
        </Reveal>
        <ul className="grid md:grid-cols-2 gap-x-12 gap-y-5">
          {principles.map((p, i) => (
            <Reveal key={p} delay={i * 0.03}>
              <li className="flex gap-4 text-ivory/85 text-lg leading-snug">
                <span className="text-aqua font-mono text-sm pt-1.5">0{i + 1}</span>
                <span>{p}</span>
              </li>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>

    <section className="py-24">
      <div className="container-edit text-center">
        <Reveal>
          <BilingualStatement
            en="From complexity to clarity."
            ar="من التعقيد إلى الوضوح"
          />
        </Reveal>
      </div>
    </section>
  </PageShell>
);

export default HowIThinkPage;
