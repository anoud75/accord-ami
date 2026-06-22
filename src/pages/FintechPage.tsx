import PageShell from "@/components/portfolio/PageShell";
import SectorHero from "@/components/portfolio/SectorHero";
import SEO from "@/components/portfolio/SEO";
import CaseStudy from "@/components/portfolio/CaseStudy";
import { projectsBySector } from "@/content/projects";

const FintechPage = () => {
  const projects = projectsBySector("fintech");
  return (
    <PageShell>
      <SEO
        title="Fintech & Digital Trust — Alanoud Alsamil"
        description="Fraud prevention, digital wallet UX, and financial trust experiences where usability and risk must work together."
      />
      <SectorHero
        eyebrow="Fintech & Digital Trust"
        title="Designing financial products where usability, trust, risk, and speed must work together."
        intro="Financial products ask people to make irreversible decisions quickly. Good fintech design should help users act with confidence, understand risk, and remain in control."
        accent="hsl(var(--sector-fintech))"
      />
      <section className="container-edit py-16 space-y-20">
        {projects.map((p) => <CaseStudy key={p.slug} project={p} />)}
      </section>
    </PageShell>
  );
};

export default FintechPage;
