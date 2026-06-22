import { Link, useParams } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import PageShell from "@/components/portfolio/PageShell";
import SEO from "@/components/portfolio/SEO";
import ProjectDetail from "@/components/portfolio/ProjectDetail";
import { getProjectBySlug } from "@/content/home";
import NotFound from "./NotFound";

const ProjectDetailPage = () => {
  const { slug = "" } = useParams();
  const found = getProjectBySlug(slug);
  if (!found) return <NotFound />;
  const { project } = found;

  return (
    <PageShell>
      <SEO
        title={`${project.title} — Alanoud Alsamil`}
        description={project.summary}
      />
      <div className="container-edit pt-20 md:pt-24 pb-24">
        <Link
          to="/#work"
          className="inline-flex items-center gap-2 text-sm text-foreground/60 hover:text-foreground transition-colors mb-10"
        >
          <ArrowLeft className="w-4 h-4" /> Back to work
        </Link>
        <ProjectDetail project={project} />
      </div>
    </PageShell>
  );
};

export default ProjectDetailPage;
