import { Link } from "react-router-dom";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";
import PageShell from "@/components/portfolio/PageShell";
import SEO from "@/components/portfolio/SEO";
import { Eyebrow, Reveal, BilingualStatement } from "@/components/portfolio/atoms";
import { sectors } from "@/content/sectors";
import { flagshipProjects } from "@/content/projects";
import { capabilities, tools } from "@/content/methodology";
import workspaceSketch from "@/assets/workspace-sketch.png";

const HomePage = () => (
  <PageShell>
    <SEO
      title="Alanoud Alsamil — Product, Experience & AI"
      description="Hey, it's Alanoud. Product strategy, experience design, and AI delivery across healthcare, fintech, environment, and inclusion."
    />

    {/* Hero — sketchbook style */}
    <section className="relative pt-12 md:pt-16 pb-20">
      <div className="mx-auto max-w-4xl px-6 text-center">
        <Reveal>
          <h1 className="font-serif text-[2.25rem] md:text-[3rem] leading-tight tracking-tight">
            Hey, it's Alanoud
          </h1>
        </Reveal>
        <Reveal delay={0.08}>
          <p className="mt-3 text-foreground/60 italic font-serif text-lg md:text-xl">
            Feel free to move things around :)
          </p>
        </Reveal>
      </div>

      {/* Illustration */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, ease: [0.215, 0.61, 0.355, 1], delay: 0.2 }}
        className="mx-auto max-w-4xl px-6 mt-12 md:mt-16"
      >
        <img
          src={workspaceSketch}
          alt="Hand-drawn sketch of Alanoud's workspace — desk, monitor, bookshelf, and a small ECG illustration on the wall"
          width={1536}
          height={1024}
          className="w-full h-auto select-none pointer-events-none"
          draggable={false}
        />
      </motion.div>

      {/* Big serif role line */}
      <div className="mx-auto max-w-5xl px-6 mt-8 md:mt-12 text-center">
        <Reveal delay={0.4}>
          <h2 className="font-serif text-[2.5rem] md:text-[5rem] leading-[0.95] tracking-tight">
            Product, Experience <em className="text-foreground/70">&amp;</em> AI
          </h2>
        </Reveal>
        <Reveal delay={0.5}>
          <p className="mt-6 font-serif italic text-lg md:text-xl text-foreground/60">
            A sneak peek of my work below ↓
          </p>
        </Reveal>
      </div>
    </section>

    {/* Sector cards — sketchbook grid */}
    <section className="py-20 border-t border-foreground/10">
      <div className="container-edit">
        <Reveal>
          <div className="flex items-end justify-between flex-wrap gap-4 mb-12">
            <h2 className="display-2 max-w-2xl">Five sectors. One way of thinking.</h2>
            <span className="font-serif italic text-foreground/55">— explore by domain</span>
          </div>
        </Reveal>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {sectors.map((s, i) => (
            <Reveal key={s.key} delay={i * 0.05}>
              <Link
                to={s.slug}
                className="block h-full bg-ivory border border-foreground/15 rounded-md p-7 hover:border-foreground/50 hover:-translate-y-1 transition-all duration-300 group"
              >
                <div className="flex items-center justify-between mb-6">
                  <span className="font-serif italic text-foreground/45 text-sm">
                    0{i + 1} / 0{sectors.length}
                  </span>
                  <ArrowUpRight className="w-4 h-4 text-foreground/40 group-hover:text-foreground transition" />
                </div>
                <h3 className="font-serif text-2xl md:text-3xl mb-4 leading-tight">{s.label}</h3>
                <p className="text-sm text-foreground/65 leading-relaxed">{s.description}</p>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>

    {/* Featured work */}
    <section className="py-24 border-t border-foreground/10">
      <div className="container-edit">
        <Reveal>
          <Eyebrow>Featured Work</Eyebrow>
          <h2 className="display-2 mt-4 mb-14 max-w-3xl">
            A few things I'm proud of.
          </h2>
        </Reveal>
        <div className="space-y-3">
          {flagshipProjects.map((p, i) => {
            const sector = sectors.find((s) => s.key === p.sector)!;
            return (
              <Reveal key={p.slug} delay={i * 0.05}>
                <Link
                  to={sector.slug}
                  className="group grid md:grid-cols-12 gap-4 items-baseline py-6 border-b border-foreground/10 hover:border-foreground/40 transition-colors"
                >
                  <span className="md:col-span-1 font-serif italic text-foreground/45 text-sm">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="md:col-span-6 font-serif text-2xl md:text-3xl leading-snug group-hover:italic transition-all">
                    {p.title}
                  </h3>
                  <span className="md:col-span-3 text-sm text-foreground/55">{sector.shortLabel}</span>
                  <span className="md:col-span-2 text-sm text-foreground/55 flex items-center gap-1 md:justify-end">
                    Read <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </span>
                </Link>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>

    {/* Capabilities + Tools */}
    <section className="py-20 border-t border-foreground/10 bg-ivory-deep/40">
      <div className="container-edit grid md:grid-cols-2 gap-14">
        <Reveal>
          <Eyebrow>What I do</Eyebrow>
          <ul className="mt-5 space-y-2">
            {capabilities.map((c) => (
              <li key={c} className="font-serif text-xl md:text-2xl text-foreground/85 leading-snug">
                {c}
              </li>
            ))}
          </ul>
        </Reveal>
        <Reveal delay={0.1}>
          <Eyebrow>Tools I reach for</Eyebrow>
          <div className="mt-5 flex flex-wrap gap-2">
            {tools.map((t) => (
              <span
                key={t}
                className="text-xs px-3 py-1.5 border border-foreground/20 rounded-full bg-ivory"
              >
                {t}
              </span>
            ))}
          </div>
        </Reveal>
      </div>
    </section>

    {/* Closing bilingual */}
    <section className="py-28 text-center">
      <div className="container-narrow">
        <Reveal>
          <BilingualStatement
            en="I work best where there is complexity to untangle, people to understand, and a meaningful outcome to build toward."
            ar="أعمل بأفضل حالاتي حيث يوجد تعقيد يحتاج إلى وضوح، وأشخاص يستحقون الفهم، ونتائج ذات معنى تستحق البناء."
          />
        </Reveal>
        <Reveal delay={0.15}>
          <Link
            to="/contact"
            className="mt-12 inline-flex items-center gap-2 font-serif italic text-xl underline underline-offset-8 decoration-foreground/30 hover:decoration-foreground transition"
          >
            say hello <ArrowUpRight className="w-5 h-5" />
          </Link>
        </Reveal>
      </div>
    </section>
  </PageShell>
);

export default HomePage;
