import { Download, Mail, Github, Linkedin } from "lucide-react";
import PageShell from "@/components/portfolio/PageShell";
import SEO from "@/components/portfolio/SEO";
import { Eyebrow, Reveal } from "@/components/portfolio/atoms";
import WorkSection from "@/components/portfolio/WorkSection";
import { achievements, skillsStrip, roles } from "@/content/home";
import portrait from "@/assets/alanoud-portrait.jpg.asset.json";
import cv from "@/assets/cv.asset.json";

const HomePage = () => (
  <PageShell>
    <SEO
      title="Alanoud Alsamil — Product, Business Analysis, UX/UI & AI Strategy"
      description="Personal portfolio of Alanoud Alsamil. Product management, business analysis, UX/UI, and AI product strategy across healthcare, AI, fintech, environment, and inclusion."
    />

    {/* 1. ABOUT / HERO */}
    <section id="about" className="pt-20 md:pt-28 pb-24 md:pb-28 scroll-mt-20">
      <div className="container-edit grid md:grid-cols-12 gap-10 md:gap-16 items-start">
        <div className="md:col-span-7 order-2 md:order-1">
          <Reveal>
            <Eyebrow>Product · Business Analysis · UX/UI · AI Strategy</Eyebrow>
          </Reveal>
          <Reveal delay={0.05}>
            <h1 className="display-1 mt-6">Hi, I'm Alanoud.</h1>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="lede mt-8 space-y-5 max-w-2xl">
              <p>
                I work across product management, business analysis, UX/UI, and AI product strategy.
              </p>
              <p>
                Most of my work starts when something is still unclear: a complex healthcare workflow,
                a fragmented process, a new AI idea, or a product that needs direction. I help turn that
                into something teams can actually build — clear scope, practical workflows, defined
                requirements, product logic, and usable experiences.
              </p>
              <p>
                My background started in healthcare, so I care about products working in real life,
                not only looking good in a presentation. I work end-to-end: understanding the problem,
                shaping the scope, mapping the workflow, designing the experience, and helping the team
                move toward delivery.
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
            <div className="mt-10">
              <p className="eyebrow mb-3">What I Work Across</p>
              <ul className="flex flex-wrap gap-1.5">
                {skillsStrip.map((s) => (
                  <li
                    key={s}
                    className="text-[11px] px-2.5 py-1 border border-foreground/15 text-foreground/70 rounded-sm"
                  >
                    {s}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

          <Reveal delay={0.25}>
            <div className="mt-10 max-w-2xl">
              <p className="eyebrow mb-3">How I Work</p>
              <p className="text-foreground/80 leading-relaxed">
                I do not jump straight into screens. I start by understanding what is actually happening,
                who needs what, where the workflow breaks, and what needs to be true for the product to
                work. Then I turn that into scope, flows, requirements, logic, screens, and documents
                that help teams build with confidence.
              </p>
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

    {/* 2. WORK */}
    <WorkSection />

    {/* 3. ACHIEVEMENTS */}
    <section
      id="achievements"
      className="border-t border-foreground/10 bg-ivory-deep/40 scroll-mt-20"
    >
      <div className="container-edit py-24">
        <Reveal>
          <Eyebrow>Achievements</Eyebrow>
          <h2 className="display-2 mt-4 max-w-3xl">
            A few moments that recognised the work, but also pushed me to keep building.
          </h2>
        </Reveal>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 mt-12">
          {achievements.map((a, i) => (
            <Reveal key={a.title} delay={Math.min(i, 5) * 0.04}>
              <div className="h-full bg-ivory border border-foreground/15 rounded-md p-6">
                <p className="eyebrow mb-3">{a.organisation}</p>
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

    {/* 4. CV & LINKS */}
    <section id="contact" className="border-t border-foreground/10 scroll-mt-20">
      <div className="container-narrow py-24 text-center">
        <Reveal>
          <Eyebrow>CV &amp; Links</Eyebrow>
          <h2 className="display-2 mt-4 mb-6">
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
              href="https://linkedin.com/in/alanoud-alsamil"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 border border-foreground/20 px-5 py-2.5 text-sm rounded-md hover:border-foreground transition-colors"
            >
              <Linkedin className="w-4 h-4" /> LinkedIn
            </a>
            <a
              href="https://github.com/anoud75"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 border border-foreground/20 px-5 py-2.5 text-sm rounded-md hover:border-foreground transition-colors"
            >
              <Github className="w-4 h-4" /> GitHub
            </a>
            <a
              href="mailto:alanoudsaud75@gmail.com"
              className="inline-flex items-center gap-2 border border-foreground/20 px-5 py-2.5 text-sm rounded-md hover:border-foreground transition-colors"
            >
              <Mail className="w-4 h-4" /> Email Me
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  </PageShell>
);

export default HomePage;
