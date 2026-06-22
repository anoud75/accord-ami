import PageShell from "@/components/portfolio/PageShell";
import SectorHero from "@/components/portfolio/SectorHero";
import SEO from "@/components/portfolio/SEO";
import { Eyebrow, Reveal, BilingualStatement } from "@/components/portfolio/atoms";
import { Link } from "react-router-dom";
import cvAsset from "@/assets/cv.asset.json";

const focusAreas = [
  "Healthcare Digital Transformation", "Population Health", "AI Product Strategy",
  "Process Intelligence", "Public Health Experience Design", "Fintech Trust and Risk",
  "Environmental Intelligence", "Accessibility and Inclusive Technology",
];

const highlights = [
  "NASA Space Apps Winner — First Place",
  "Sustainable Earth Research Recognition",
  "Healthcare Digital Transformation Work",
  "Population Health Product Delivery",
  "Process Intelligence Training",
  "Public Health Experience Leadership",
  "AI and Accessibility Innovation",
];

const AboutPage = () => (
  <PageShell>
    <SEO
      title="About — Alanoud Alsamil"
      description="Clinical insight, product thinking, and human-centred systems. From healthcare to AI, strategy to delivery."
    />
    <SectorHero
      eyebrow="About"
      title="Clinical insight. Product thinking. Human-centred systems."
      intro="My journey began in healthcare, where I learned that a solution is only useful when it works for people under real pressure, real constraints, and real consequences."
    />

    <section className="container-edit py-16 border-t border-foreground/10">
      <div className="grid md:grid-cols-12 gap-12">
        <div className="md:col-span-7 space-y-6">
          <Reveal>
            <p className="text-lg text-foreground/85 leading-relaxed">
              That clinical perspective led me toward product strategy, business analysis, process
              intelligence, AI, and experience design.
            </p>
          </Reveal>
          <Reveal>
            <p className="text-lg text-foreground/85 leading-relaxed">
              Today, I work across complex domains where business goals, data, technology, workflows,
              and human needs all need to make sense together.
            </p>
          </Reveal>
          <Reveal>
            <p className="text-lg text-foreground/85 leading-relaxed">
              I bring a combination of healthcare understanding, analytical thinking, creative
              problem-solving, product design, and delivery discipline.
            </p>
          </Reveal>
        </div>
        <aside className="md:col-span-5">
          <div className="aspect-[4/5] bg-ivory-deep border border-foreground/10 flex items-center justify-center">
            <div className="text-center px-6">
              <p className="eyebrow">Editorial portrait</p>
              <p className="mt-3 text-foreground/55 text-sm">A refined photograph will live here.</p>
            </div>
          </div>
          <a
            href={cvAsset.url}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-flex items-center gap-2 text-sm ink-link"
          >
            Download CV (PDF) →
          </a>
        </aside>
      </div>
    </section>

    <section className="container-edit py-16">
      <Reveal>
        <Eyebrow>Professional Focus</Eyebrow>
        <div className="mt-6 flex flex-wrap gap-2">
          {focusAreas.map((f) => (
            <span key={f} className="text-sm px-3 py-1.5 border border-foreground/15">{f}</span>
          ))}
        </div>
      </Reveal>
    </section>

    <section className="container-edit py-16 border-t border-foreground/10">
      <Reveal>
        <Eyebrow>Selected Highlights</Eyebrow>
        <h2 className="display-3 mt-4 mb-10">Moments that shaped the work.</h2>
      </Reveal>
      <ul className="grid md:grid-cols-2 gap-5">
        {highlights.map((h) => (
          <Reveal key={h}>
            <li className="border-l-2 border-teal pl-5 py-2 text-foreground/85">{h}</li>
          </Reveal>
        ))}
      </ul>
    </section>

    <section className="py-24">
      <div className="container-edit text-center">
        <Reveal>
          <BilingualStatement
            en="I am most energised by work that turns complexity into clarity, insight into action, and technology into something people can genuinely use."
            ar="أستمد طاقتي من العمل الذي يحوّل التعقيد إلى وضوح، والرؤى إلى فعل، والتقنية إلى أداة حقيقية في يد الإنسان."
          />
          <Link to="/contact" className="inline-flex mt-8 items-center gap-2 ink-link">Get in touch →</Link>
        </Reveal>
      </div>
    </section>
  </PageShell>
);

export default AboutPage;
