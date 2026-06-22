import PageShell from "@/components/portfolio/PageShell";
import SectorHero from "@/components/portfolio/SectorHero";
import SEO from "@/components/portfolio/SEO";
import CaseStudy from "@/components/portfolio/CaseStudy";
import { Eyebrow, Reveal } from "@/components/portfolio/atoms";
import { projectsBySector } from "@/content/projects";

const selectedBrandWork = [
  "Freelance brand identities",
  "Product storytelling decks",
  "Public-health campaigns",
  "Medical education visuals",
  "Exhibition branding",
  "Event collateral",
  "Presentation systems",
  "Digital marketing assets",
];

const BrandPage = () => {
  const projects = projectsBySector("brand");
  return (
    <PageShell>
      <SEO
        title="Brand & Experience Systems — Alanoud Alsamil"
        description="Identity systems, storytelling, learning experiences, and public-health campaigns that make ideas memorable."
      />
      <SectorHero
        eyebrow="Brand & Experience Systems"
        title="Creating identity, storytelling, and experience systems that make ideas memorable."
        intro="Brand work is not only visual decoration. It is how a product, service, or initiative becomes understandable, recognisable, and emotionally meaningful. My approach connects business context, audience insight, visual identity, user experience, storytelling, and practical implementation."
        accent="hsl(var(--coral))"
      />
      <section className="container-edit py-16 space-y-20">
        {projects.map((p) => <CaseStudy key={p.slug} project={p} />)}
      </section>
      <section className="container-edit py-16 border-t border-foreground/10">
        <Reveal>
          <Eyebrow>Selected Brand Work</Eyebrow>
          <h2 className="display-3 mt-4 mb-10">A broader archive of identities, campaigns, and collateral.</h2>
        </Reveal>
        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-3">
          {selectedBrandWork.map((w) => (
            <Reveal key={w}><div className="border border-foreground/15 p-5 text-sm text-foreground/80">{w}</div></Reveal>
          ))}
        </div>
      </section>
    </PageShell>
  );
};

export default BrandPage;
