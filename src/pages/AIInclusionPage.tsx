import PageShell from "@/components/portfolio/PageShell";
import SectorHero from "@/components/portfolio/SectorHero";
import SEO from "@/components/portfolio/SEO";
import CaseStudy from "@/components/portfolio/CaseStudy";
import { projectsBySector } from "@/content/projects";

const AIInclusionPage = () => {
  const projects = projectsBySector("ai-inclusion");
  return (
    <PageShell>
      <SEO
        title="Human-Centred AI & Inclusion — Alanoud Alsamil"
        description="AI products that reduce barriers to communication, information, and participation — including Saudi Sign Language and Arabic-first legal guidance."
      />
      <SectorHero
        eyebrow="Human-Centred AI & Inclusion"
        title="Using AI to reduce barriers to communication, information, and participation."
        intro="I explore AI products that make systems more accessible for people who are often excluded by traditional experiences, complex language, or inaccessible communication channels."
        accent="hsl(var(--sector-ai))"
      />
      <section className="container-edit py-16 space-y-20">
        {projects.map((p) => <CaseStudy key={p.slug} project={p} />)}
      </section>
    </PageShell>
  );
};

export default AIInclusionPage;
