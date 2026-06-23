import { Link } from "react-router-dom";
import { Download, Mail, Github, Linkedin, ArrowUpRight } from "lucide-react";
import PageShell from "@/components/portfolio/PageShell";
import SEO from "@/components/portfolio/SEO";
import { Eyebrow, Reveal } from "@/components/portfolio/atoms";
import { achievements, fields, skillsStrip, roles } from "@/content/home";
import portrait from "@/assets/alanoud-portrait.jpg.asset.json";
import cv from "@/assets/cv.asset.json";
import trophy from "@/assets/trophy.png.asset.json";

const HomePage = () => (
  <PageShell>
    <SEO
      title="Alanoud Alsamil — Product, Business Analysis, UX/UI & AI Strategy"
      description="Personal portfolio of Alanoud Alsamil. Product management, business analysis, UX/UI, and AI product strategy across healthcare, fintech, environment, and accessibility."
    />

    {/* 1. ABOUT */}
    <section id="about" className="pt-20 md:pt-28 pb-24 md:pb-28 scroll-mt-20">
      <div className="container-edit grid md:grid-cols-12 gap-10 md:gap-16 items-start">
        <div className="md:col-span-6 order-2 md:pt-2">
          <Reveal>
            <Eyebrow>Product · Business Analysis · UX/UI · AI Product Strategy</Eyebrow>
          </Reveal>
          <Reveal delay={0.05}>
            <h1 className="display-1 mt-6 whitespace-nowrap">Hi, I'm Alanoud.</h1>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="mt-6 space-y-4 max-w-2xl text-sm md:text-base leading-relaxed text-foreground/70">
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
        </div>

        <div className="md:col-span-6 order-1">
          <Reveal delay={0.1}>
            <div className="relative aspect-[4/5] w-full rounded-md overflow-hidden bg-ivory-deep border border-foreground/10">
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

    {/* 2. EXPLORE MY WORK */}
    <section id="work" className="border-t border-foreground/10 scroll-mt-20">
      <div className="container-edit py-20 md:py-24">
        <Reveal>
          <Eyebrow>Explore My Work</Eyebrow>
          <h2 className="display-2 mt-4 max-w-3xl">Explore My Work.</h2>
          <p className="lede max-w-3xl mt-6">
            Choose an area to see the products, strategies, and experiences I have worked on.
          </p>
        </Reveal>

        <div className="grid md:grid-cols-2 gap-5 mt-12">
          {fields.map((f, i) => (
            <Reveal key={f.slug} delay={Math.min(i, 3) * 0.05}>
              <Link
                to={`/work/${f.slug}`}
                className="group block h-full bg-ivory border border-foreground/15 rounded-md p-8 md:p-10 hover:border-foreground/50 hover:-translate-y-1 transition-all duration-300"
              >
                <div className="flex items-start justify-between gap-4">
                  <p className="eyebrow">{f.projects.length} projects</p>
                  <ArrowUpRight className="w-5 h-5 text-foreground/40 group-hover:text-foreground transition" />
                </div>
                <h3 className="font-display text-2xl md:text-3xl tracking-tight leading-snug mt-6">
                  {f.title}
                </h3>
                <p className="mt-4 text-foreground/70 leading-relaxed">{f.hero}</p>
                <p className="mt-6 text-sm font-medium text-foreground inline-flex items-center gap-1.5">
                  Explore {f.title.split(" ")[0]} <ArrowUpRight className="w-3.5 h-3.5" />
                </p>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>

    {/* 3. ACHIEVEMENTS */}
    <section
      id="achievements"
      className="border-t border-foreground/10 bg-ivory-deep/40 scroll-mt-20"
    >
      <div className="container-edit py-24">
        <Reveal>
          <Eyebrow>Achievements</Eyebrow>
          <h2 className="display-2 mt-4 max-w-3xl">
            A few moments that recognised the work and pushed me to keep building.
          </h2>
        </Reveal>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 mt-12">
          {achievements.map((a, i) => (
            <Reveal key={a.title} delay={Math.min(i, 5) * 0.04}>
              <div className="h-full bg-ivory border border-foreground/15 rounded-md p-6">
                <img
                  src={trophy.url}
                  alt=""
                  aria-hidden="true"
                  className="w-10 h-10 mb-4 object-contain"
                />
                <p className="eyebrow mb-3">{a.organisation}</p>
                <p className="font-display text-lg leading-snug tracking-tight mb-2">
                  {a.title}
                </p>
                <p className="text-sm text-foreground/65 leading-relaxed">{a.blurb}</p>
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
