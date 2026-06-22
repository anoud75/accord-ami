import { Link } from "react-router-dom";
import { ArrowUpRight, Download, Mail, Github, Linkedin } from "lucide-react";
import PageShell from "@/components/portfolio/PageShell";
import SEO from "@/components/portfolio/SEO";
import { Eyebrow, Reveal, StatusBadge } from "@/components/portfolio/atoms";
import { fields, achievements, skillsStrip, roles } from "@/content/home";
import portrait from "@/assets/alanoud-portrait.jpg.asset.json";
import cv from "@/assets/cv.asset.json";

const HomePage = () => (
  <PageShell>
    <SEO
      title="Alanoud Alsamil — Product, Business Analysis, UX/UI & AI Strategy"
      description="Personal portfolio of Alanoud Alsamil. Product management, business analysis, UX/UI, and AI product strategy across healthcare, fintech, environment, and inclusion."
    />

    {/* 1. Personal Introduction */}
    <section id="intro" className="pt-20 md:pt-28 pb-24 md:pb-32 scroll-mt-20">
      <div className="container-edit grid md:grid-cols-12 gap-10 md:gap-16 items-start">
        <div className="md:col-span-7 order-2 md:order-1">
          <Reveal>
            <Eyebrow>Product · Business Analysis · UX/UI · AI Strategy</Eyebrow>
          </Reveal>
          <Reveal delay={0.05}>
            <h1 className="display-1 mt-6">
              Hi, I'm Alanoud.
            </h1>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="lede mt-8 space-y-5 max-w-2xl">
              <p>
                I work across product management, business analysis, UX/UI, and AI product strategy.
              </p>
              <p>
                Most of my work starts with something complex or unclear — a healthcare workflow, a new AI idea,
                a fragmented process, or a product that needs direction. I help turn that into a clear product,
                practical workflows, defined requirements, and an experience people can actually use.
              </p>
              <p>
                I enjoy working end-to-end: understanding the problem, shaping the scope, mapping the workflow,
                designing the experience, and helping the team move it toward delivery.
              </p>
            </div>
          </Reveal>
          <Reveal delay={0.15}>
            <ul className="mt-10 flex flex-wrap gap-2">
              {roles.map((r) => (
                <li
                  key={r}
                  className="text-xs px-3 py-1.5 border border-foreground/20 rounded-full text-foreground/80"
                >
                  {r}
                </li>
              ))}
            </ul>
          </Reveal>
          <Reveal delay={0.2}>
            <div className="mt-8">
              <p className="eyebrow mb-3">Skills</p>
              <ul className="flex flex-wrap gap-x-4 gap-y-1.5 text-sm text-foreground/70">
                {skillsStrip.map((s, i) => (
                  <li key={s} className="flex items-center gap-3">
                    <span>{s}</span>
                    {i < skillsStrip.length - 1 && (
                      <span className="text-foreground/25">·</span>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>

        <div className="md:col-span-5 order-1 md:order-2">
          <Reveal delay={0.1}>
            <div className="relative aspect-[4/5] w-full max-w-sm mx-auto rounded-md overflow-hidden bg-ivory-deep border border-foreground/10">
              <img
                src={portrait.url}
                alt="Portrait of Alanoud Alsamil"
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>
          </Reveal>
        </div>
      </div>
    </section>

    {/* 2. Work by Field */}
    <section id="work" className="border-t border-foreground/10 scroll-mt-20">
      <div className="container-edit py-20">
        <Reveal>
          <Eyebrow>Selected Work</Eyebrow>
          <h2 className="display-2 mt-4 max-w-3xl">Work by field.</h2>
        </Reveal>
      </div>

      {fields.map((field, fi) => (
        <div
          key={field.id}
          id={field.id}
          className="border-t border-foreground/10 scroll-mt-20"
        >
          <div className="container-edit py-20 md:py-24">
            <Reveal>
              <div className="flex items-baseline gap-6 mb-3">
                <span className="text-sm text-foreground/45 tabular-nums">
                  {String(fi + 1).padStart(2, "0")}
                </span>
                <h3 className="display-3">{field.title}</h3>
              </div>
            </Reveal>
            {field.intro && (
              <Reveal delay={0.05}>
                <p className="lede max-w-3xl mt-6">{field.intro}</p>
              </Reveal>
            )}

            <div className="grid md:grid-cols-2 gap-5 mt-12">
              {field.projects.map((p, pi) => (
                <Reveal key={p.slug} delay={pi * 0.04}>
                  <Link
                    to={`/work/${p.slug}`}
                    className="group block h-full bg-ivory border border-foreground/15 rounded-md p-7 hover:border-foreground/50 hover:-translate-y-1 transition-all duration-300"
                  >
                    <div className="flex items-center justify-between mb-5">
                      <StatusBadge status={p.status} />
                      <ArrowUpRight className="w-4 h-4 text-foreground/40 group-hover:text-foreground transition" />
                    </div>
                    <h4 className="font-display text-xl md:text-2xl leading-snug tracking-tight mb-4">
                      {p.title}
                    </h4>
                    <p className="text-sm text-foreground/70 leading-relaxed mb-5">
                      {p.summary}
                    </p>
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
                  </Link>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      ))}
    </section>

    {/* 3. Achievements */}
    <section
      id="achievements"
      className="border-t border-foreground/10 bg-ivory-deep/40 scroll-mt-20"
    >
      <div className="container-edit py-24">
        <Reveal>
          <Eyebrow>Achievements</Eyebrow>
          <h2 className="display-2 mt-4 max-w-3xl">
            Recognition along the way.
          </h2>
        </Reveal>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 mt-12">
          {achievements.map((a, i) => (
            <Reveal key={a.title} delay={i * 0.04}>
              <div className="h-full bg-ivory border border-foreground/15 rounded-md p-6">
                <div className="flex items-baseline justify-between mb-3">
                  <span className="eyebrow">{a.organisation}</span>
                  <span className="text-xs text-foreground/45">{a.year}</span>
                </div>
                <p className="font-display text-lg leading-snug tracking-tight mb-2">
                  {a.title}
                </p>
                <p className="text-sm text-foreground/65 leading-relaxed">
                  {a.blurb}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>

    {/* 4. Final Footer / Contact */}
    <section id="contact" className="border-t border-foreground/10 scroll-mt-20">
      <div className="container-narrow py-24 text-center">
        <Reveal>
          <h2 className="display-2 mb-6">
            Thanks for taking the time to look through my work.
          </h2>
        </Reveal>
        <Reveal delay={0.1}>
          <div className="mt-10 flex flex-wrap justify-center gap-3">
            <a
              href={cv.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-foreground text-ivory px-5 py-2.5 text-sm rounded-md hover:bg-foreground/85 transition-colors"
            >
              <Download className="w-4 h-4" /> Download CV
            </a>
            <a
              href="https://www.linkedin.com/in/alanoud-alsamil/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 border border-foreground/20 px-5 py-2.5 text-sm rounded-md hover:border-foreground transition-colors"
            >
              <Linkedin className="w-4 h-4" /> LinkedIn
            </a>
            <a
              href="https://github.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 border border-foreground/20 px-5 py-2.5 text-sm rounded-md hover:border-foreground transition-colors"
            >
              <Github className="w-4 h-4" /> GitHub
            </a>
            <a
              href="mailto:hello@alanoud.com"
              className="inline-flex items-center gap-2 border border-foreground/20 px-5 py-2.5 text-sm rounded-md hover:border-foreground transition-colors"
            >
              <Mail className="w-4 h-4" /> Email
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  </PageShell>
);

export default HomePage;
