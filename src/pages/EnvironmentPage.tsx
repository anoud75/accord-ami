import PageShell from "@/components/portfolio/PageShell";
import SectorHero from "@/components/portfolio/SectorHero";
import SEO from "@/components/portfolio/SEO";
import CaseStudy from "@/components/portfolio/CaseStudy";
import { projectsBySector } from "@/content/projects";

const EnvironmentPage = () => {
  const projects = projectsBySector("environment");
  return (
    <PageShell>
      <SEO
        title="Environmental Intelligence — Alanoud Alsamil"
        description="Earth observation, agricultural intelligence, and coral reef monitoring products that turn environmental data into action."
      />
      <SectorHero
        eyebrow="Environmental Intelligence"
        title="Making environmental systems easier to understand, monitor, and act on."
        intro="Environmental and climate data can be complex, technical, and difficult to translate into useful decisions. My work in this space turns scientific data into clear products, operational workflows, and meaningful actions."
        accent="hsl(var(--sector-env))"
      />
      <section className="container-edit py-16 space-y-20">
        {projects.map((p) => <CaseStudy key={p.slug} project={p} />)}
      </section>
    </PageShell>
  );
};

export default EnvironmentPage;
