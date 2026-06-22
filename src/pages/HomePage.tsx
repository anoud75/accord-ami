import { Link } from "react-router-dom";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import PageShell from "@/components/portfolio/PageShell";
import SEO from "@/components/portfolio/SEO";
import { Eyebrow, Reveal, BilingualStatement } from "@/components/portfolio/atoms";
import { sectors } from "@/content/sectors";
import { flagshipProjects } from "@/content/projects";
import { capabilities, tools } from "@/content/methodology";

const HomePage = () => (
  <PageShell>
    <SEO
      title="Alanoud Alsamil — Product, Experience & AI"
      description="Product strategy, experience design, and AI delivery across healthcare, fintech, environment, and inclusion."
    />

    {/* Hero — split: portrait + statement */}
    <section className="pt-20 md:pt-28 pb-24 md:pb-32">
      <div className="container-edit grid md:grid-cols-12 gap-10 md:gap-16 items-center">
        <div className="md:col-span-7 order-2 md:order-1">
          <Reveal>
            <Eyebrow>Product · Experience · AI</Eyebrow>
          </Reveal>
          <Reveal delay={0.05}>
            <h1 className="display-1 mt-6">
              I turn complex systems<br />
              into products people<br />
              can <span className="text-foreground/55">actually use.</span>
            </h1>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="lede mt-8">
              Alanoud Alsamil. I build products, services, and AI systems across healthcare,
              fintech, environment, and inclusion — anchored in strategy, evidence, and human need.
            </p>
          </Reveal>
          <Reveal delay={0.15}>
            <div className="mt-10 flex flex-wrap gap-3">
              <Link
                to="/healthcare"
                className="inline-flex items-center gap-2 bg-foreground text-ivory px-6 py-3 text-sm rounded-md hover:bg-foreground/85 transition-colors"
              >
                See selected work <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                to="/about"
                className="inline-flex items-center gap-2 border border-foreground/20 px-6 py-3 text-sm rounded-md hover:border-foreground transition-colors"
              >
                About me
              </Link>
            </div>
          </Reveal>
        </div>

        <div className="md:col-span-5 order-1 md:order-2">
          <Reveal delay={0.1}>
            <div className="relative aspect-[4/5] w-full max-w-sm mx-auto rounded-md overflow-hidden bg-ivory-deep border border-foreground/10">
              {/* Placeholder portrait slot — upload your photo to src/assets/portrait.jpg */}
              <div className="absolute inset-0 flex items-center justify-center p-8 text-center">
                <p className="text-xs uppercase tracking-[0.22em] text-foreground/40 leading-relaxed">
                  Your portrait<br/>goes here
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>

    {/* Sector cards */}
    <section className="py-20 border-t border-foreground/10">
      <div className="container-edit">
        <Reveal>
          <div className="flex items-end justify-between flex-wrap gap-4 mb-12">
            <h2 className="display-2 max-w-2xl">Five sectors. One way of thinking.</h2>
            <span className="text-sm text-foreground/55">Explore by domain</span>
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
                  <span className="text-xs tracking-[0.18em] text-foreground/45">
                    0{i + 1} / 0{sectors.length}
                  </span>
                  <ArrowUpRight className="w-4 h-4 text-foreground/40 group-hover:text-foreground transition" />
                </div>
                <h3 className="font-display text-2xl md:text-[1.65rem] mb-4 leading-tight tracking-tight">{s.label}</h3>
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
          <h2 className="display-2 mt-4 mb-14 max-w-3xl">A few things I'm proud of.</h2>
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
                  <span className="md:col-span-1 text-sm text-foreground/45">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="md:col-span-6 font-display text-xl md:text-2xl leading-snug tracking-tight">
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
              <li key={c} className="font-display text-lg md:text-xl text-foreground/85 leading-snug tracking-tight">
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
            className="mt-12 inline-flex items-center gap-2 text-base underline underline-offset-8 decoration-foreground/30 hover:decoration-foreground transition"
          >
            Say hello <ArrowUpRight className="w-4 h-4" />
          </Link>
        </Reveal>
      </div>
    </section>
  </PageShell>
);

export default HomePage;
