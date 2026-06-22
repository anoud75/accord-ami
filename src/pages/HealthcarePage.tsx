import PageShell from "@/components/portfolio/PageShell";
import SectorHero from "@/components/portfolio/SectorHero";
import SEO from "@/components/portfolio/SEO";
import CaseStudy from "@/components/portfolio/CaseStudy";
import { Eyebrow, Reveal } from "@/components/portfolio/atoms";
import { projectsBySector, getProject } from "@/content/projects";

const lensSteps = [
  { label: "Evidence", body: "Process data, stakeholder input, clinical reality, workflow bottlenecks, service gaps, user needs, and operational observations." },
  { label: "Domain", body: "Shared language, business rules, roles, governance, bounded contexts, ownership, and healthcare terminology." },
  { label: "Experience", body: "Future-state workflows, care pathways, product logic, UX/UI, AI-supported decision-making, and information architecture." },
  { label: "Adoption", body: "Operational fit, trust, training, support, workflow survival, and validation with mainstream users." },
  { label: "Outcomes", body: "Efficiency, visibility, care quality, decision support, reduced rework, adoption, and scale." },
];

const confidential = [
  { title: "Confidential Enterprise Healthcare Transformation", body: "Healthcare digital-transformation work involving workflow design, requirements, stakeholder alignment, and delivery support." },
  { title: "Confidential Defence Health Initiative", body: "An anonymised healthcare programme involving operational complexity, role-based workflows, and secure service design." },
  { title: "Confidential Public-Sector Health Initiative", body: "A government-related healthcare product initiative focused on digital transformation, service design, and product requirements." },
  { title: "Healthcare Learning & Course Rebrand", body: "Reframing clinical and educational material into clearer learning experiences, visual systems, branded assets, and accessible communication." },
];

const HealthcarePage = () => {
  const all = projectsBySector("healthcare");
  const flagship = getProject("yamamah")!;
  const other = all.filter((p) => p.slug !== "yamamah");

  return (
    <PageShell>
      <SEO
        title="Healthcare & Health Intelligence — Alanoud Alsamil"
        description="Population health, care coordination, AI-assisted clinical workflows, and public-health experience design."
      />
      <SectorHero
        eyebrow="Healthcare & Health Intelligence"
        title="Building products that are clinically meaningful, operationally viable, and adoptable at scale."
        intro={
          <>
            Healthcare products cannot succeed through technology alone. They must work for clinicians,
            patients, care coordinators, operations teams, leadership, and technical teams at the same time.
            My healthcare work translates clinical and operational complexity into clear workflows,
            product logic, human-centred experiences, and delivery-ready plans.
          </>
        }
      />

      {/* Lens */}
      <section className="container-edit py-16 border-t border-foreground/10">
        <Reveal>
          <Eyebrow>The Healthcare Product Lens</Eyebrow>
          <h2 className="display-3 mt-4 mb-10">From Evidence to Adoption.</h2>
        </Reveal>
        <div className="grid md:grid-cols-5 gap-px bg-foreground/10 border border-foreground/10">
          {lensSteps.map((s, i) => (
            <Reveal key={s.label} delay={i * 0.05}>
              <div className="bg-ivory p-6 h-full">
                <p className="text-xs text-foreground/55 mb-2">0{i + 1}</p>
                <p className="font-medium text-lg mb-3">{s.label}</p>
                <p className="text-sm text-foreground/70 leading-relaxed">{s.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
        <Reveal delay={0.1}>
          <p className="mt-10 text-foreground/85 max-w-3xl text-lg italic">
            A healthcare product should not only be technically possible. It should reduce burden,
            support decisions, fit daily work, and remain understandable as it scales.
          </p>
        </Reveal>
      </section>

      {/* Flagship */}
      <section className="container-edit py-16">
        <CaseStudy project={flagship} />
      </section>

      {/* Other projects */}
      <section className="container-edit py-16 space-y-20">
        {other.map((p) => (
          <CaseStudy key={p.slug} project={p} />
        ))}
      </section>

      {/* Confidential */}
      <section className="bg-ivory-deep/50 border-t border-foreground/10">
        <div className="container-edit py-16">
          <Reveal>
            <Eyebrow>Selected Healthcare Work</Eyebrow>
            <h2 className="display-3 mt-4 mb-10">Anonymised, confidential, and enterprise engagements.</h2>
          </Reveal>
          <div className="grid md:grid-cols-2 gap-px bg-foreground/10 border border-foreground/10">
            {confidential.map((c) => (
              <Reveal key={c.title}>
                <div className="bg-ivory p-7 h-full">
                  <p className="font-medium text-lg mb-2">{c.title}</p>
                  <p className="text-sm text-foreground/70 leading-relaxed">{c.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
          <p className="mt-8 text-xs text-foreground/55 max-w-2xl">
            For confidential projects, client names, patient data, and internal dashboards are not exposed.
            Workflows are presented through anonymised diagrams and safe prototypes.
          </p>
        </div>
      </section>
    </PageShell>
  );
};

export default HealthcarePage;
