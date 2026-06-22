import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import PageShell from "@/components/portfolio/PageShell";
import LivingPath from "@/components/portfolio/LivingPath";
import SEO from "@/components/portfolio/SEO";
import { Eyebrow, Reveal, BilingualStatement } from "@/components/portfolio/atoms";
import ProjectCard from "@/components/portfolio/ProjectCard";
import { sectors } from "@/content/sectors";
import { flagshipProjects } from "@/content/projects";
import { capabilities, tools } from "@/content/methodology";

const HomePage = () => (
  <PageShell>
    <SEO
      title="Alanoud Alsamil — Systems, Stories & Scale"
      description="Human-Centred Systems Builder. Product strategy, experience design, AI and health intelligence across healthcare, fintech, environment, and inclusion."
    />

    {/* Hero */}
    <section className="relative overflow-hidden pt-12 md:pt-20 pb-24 md:pb-32">
      <LivingPath variant="hero" className="opacity-80" />
      <div className="container-edit relative">
        <Reveal>
          <Eyebrow>Human-Centred Systems Builder</Eyebrow>
        </Reveal>
        <Reveal delay={0.05}>
          <h1 className="display-1 mt-6 max-w-5xl">
            I turn complexity into clarity — <span className="text-teal">and clarity into action.</span>
          </h1>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="lede mt-8 max-w-2xl">
            I build products, systems, and public experiences that make complex ideas more useful,
            more human, and ready to scale.
          </p>
        </Reveal>
        <Reveal delay={0.15}>
          <p className="mt-4 text-sm tracking-wide text-foreground/60">
            Product Strategy · Experience Design · AI & Health Intelligence
          </p>
        </Reveal>
        <Reveal delay={0.2}>
          <div className="mt-12 flex flex-wrap gap-4">
            <Link
              to="/healthcare"
              className="inline-flex items-center gap-2 bg-foreground text-ivory px-6 py-3 text-sm hover:bg-teal transition-colors"
            >
              Explore my work <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              to="/how-i-think"
              className="inline-flex items-center gap-2 border border-foreground/80 px-6 py-3 text-sm hover:bg-foreground hover:text-ivory transition-colors"
            >
              How I think
            </Link>
          </div>
        </Reveal>
      </div>
    </section>

    {/* Capabilities */}
    <section className="border-t border-foreground/10 bg-ivory-deep/40">
      <div className="container-edit py-16">
        <Reveal>
          <Eyebrow>Capabilities</Eyebrow>
          <div className="mt-5 flex flex-wrap gap-x-2 gap-y-3">
            {capabilities.map((c) => (
              <span key={c} className="text-lg md:text-xl text-foreground/85 mr-4">
                {c}<span className="text-foreground/30 ml-4">·</span>
              </span>
            ))}
          </div>
        </Reveal>
        <Reveal delay={0.05}>
          <div className="mt-12">
            <Eyebrow>Tools I work with</Eyebrow>
            <div className="mt-4 flex flex-wrap gap-2">
              {tools.map((t) => (
                <span key={t} className="text-xs px-3 py-1.5 border border-foreground/15">{t}</span>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>

    {/* Sectors */}
    <section className="py-24">
      <div className="container-edit">
        <Reveal>
          <Eyebrow>Explore by sector</Eyebrow>
          <h2 className="display-2 mt-4 mb-12 max-w-3xl">
            Five domains. One way of thinking.
          </h2>
        </Reveal>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-foreground/10 border border-foreground/10">
          {sectors.map((s, i) => (
            <Reveal key={s.key} delay={i * 0.04}>
              <Link
                to={s.slug}
                className="block bg-ivory hover:bg-ivory-deep p-8 h-full group transition-colors"
              >
                <p className="text-xs tracking-[0.18em] uppercase text-foreground/55 mb-6">0{i + 1}</p>
                <h3 className="text-xl font-medium mb-4 leading-snug">{s.label}</h3>
                <p className="text-sm text-foreground/70 leading-relaxed mb-6">{s.description}</p>
                <span className="inline-flex items-center gap-2 text-sm group-hover:gap-3 transition-all">
                  See work <ArrowRight className="w-3.5 h-3.5" />
                </span>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>

    {/* Featured */}
    <section className="py-24 bg-foreground text-ivory">
      <div className="container-edit">
        <Reveal>
          <p className="text-[11px] font-medium tracking-[0.22em] uppercase text-ivory/55">Featured Work</p>
          <h2 className="display-2 mt-4 mb-14 max-w-3xl text-ivory">
            Selected projects across healthcare, fintech, environment, AI, and brand.
          </h2>
        </Reveal>
        <div className="grid md:grid-cols-2 gap-px bg-ivory/15">
          {flagshipProjects.map((p) => (
            <Reveal key={p.slug}>
              <div className="bg-foreground p-8 md:p-10 h-full hover:bg-foreground/95 transition-colors group">
                <p className="text-[11px] tracking-[0.22em] uppercase text-ivory/55 mb-4">
                  {sectors.find((s) => s.key === p.sector)?.shortLabel}
                </p>
                <h3 className="text-2xl md:text-3xl font-medium tracking-tight mb-4 leading-snug">
                  {p.title}
                </h3>
                <p className="text-ivory/70 mb-6 leading-relaxed">{p.shift}</p>
                <p className="text-xs text-ivory/55"><span className="text-ivory/75">Role:</span> {p.role}</p>
                <Link
                  to={sectors.find((s) => s.key === p.sector)!.slug}
                  className="mt-6 inline-flex items-center gap-2 text-sm text-aqua group-hover:gap-3 transition-all"
                >
                  Read case study <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>

    {/* Closing */}
    <section className="py-32">
      <div className="container-edit text-center">
        <Reveal>
          <BilingualStatement
            en="I work best where there is complexity to untangle, people to understand, and a meaningful outcome to build toward."
            ar="أعمل بأفضل حالاتي حيث يوجد تعقيد يحتاج إلى وضوح، وأشخاص يستحقون الفهم، ونتائج ذات معنى تستحق البناء."
          />
        </Reveal>
      </div>
    </section>
  </PageShell>
);

export default HomePage;
