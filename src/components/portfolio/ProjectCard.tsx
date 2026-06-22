import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import type { Project } from "@/content/projects";
import { getSector } from "@/content/sectors";
import { StatusBadge } from "./atoms";

const ProjectCard = ({ project, variant = "default" }: { project: Project; variant?: "default" | "feature" }) => {
  const sector = getSector(project.sector);
  const isFeature = variant === "feature";
  return (
    <Link
      to={sector.slug}
      className="group block bg-card border border-foreground/10 hover:border-foreground/40 transition-all duration-300 p-7 md:p-8 h-full"
    >
      <div className="flex items-center justify-between mb-6">
        <span className="eyebrow">{sector.shortLabel}</span>
        <ArrowUpRight className="w-4 h-4 text-foreground/40 group-hover:text-foreground group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition" />
      </div>
      <h3 className={isFeature ? "display-3 mb-4" : "text-xl md:text-2xl font-medium tracking-tight mb-4 leading-snug"}>
        {project.title}
      </h3>
      <p className="text-foreground/70 mb-6 leading-relaxed">{project.subtitle}</p>
      <div className="rule mb-6" />
      <p className="text-xs text-foreground/55 mb-3"><span className="text-foreground/75">Role:</span> {project.role}</p>
      <StatusBadge status={project.status} />
    </Link>
  );
};

export default ProjectCard;
