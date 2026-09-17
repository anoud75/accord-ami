import { useState } from "react";
import { ChevronDown, Download, ExternalLink } from "lucide-react";
import { Reveal } from "./atoms";
import type { ProjectBlock } from "@/content/home";

const ImagePlaceholder = ({ aspect = "aspect-[4/3]", label }: { aspect?: string; label: string }) => (
  <div
    className={`relative w-full ${aspect} rounded-md bg-ivory-deep border border-dashed border-foreground/15 flex items-center justify-center`}
  >
    <span className="text-[11px] uppercase tracking-wide text-foreground/40">{label}</span>
  </div>
);

const ProjectCard = ({ p, index }: { p: ProjectBlock; index: number }) => {
  const [open, setOpen] = useState(false);
  const reversed = index % 2 === 1;
  return (
    <Reveal>
      <article className="grid md:grid-cols-12 gap-8 md:gap-12 items-start py-12 md:py-16 border-t border-foreground/10">
        <div
          className={`md:col-span-6 space-y-4 ${reversed ? "md:order-2" : ""}`}
        >
          {p.mainImage ? (
            <img
              src={p.mainImage}
              alt={p.title}
              className={`w-full rounded-md border border-foreground/10 bg-ivory-deep ${p.mainImageContain ? "h-auto object-contain" : "aspect-[16/10] object-cover"} ${p.blurImages ? "blur-[3px]" : ""}`}
            />
          ) : (
            <ImagePlaceholder aspect="aspect-[16/10]" label="Main image" />
          )}
          {p.secondaryImage ? (
            <img
              src={p.secondaryImage}
              alt=""
              className={`w-full aspect-[16/10] rounded-md border border-foreground/10 object-cover bg-ivory-deep ${p.blurImages ? "blur-[3px]" : ""}`}
            />
          ) : (
            !p.mainImage && <ImagePlaceholder aspect="aspect-[16/10]" label="Optional image" />
          )}
          {p.videoUrl && (
            <video
              src={p.videoUrl}
              controls
              playsInline
              preload="metadata"
              className="w-full rounded-md border border-foreground/10 bg-ivory-deep"
            />
          )}
          {p.blurImages && (p.mainImage || p.secondaryImage) && (
            <p className="text-[11px] italic text-foreground/55 leading-relaxed">
              Image blurred for data privacy.
            </p>
          )}
        </div>

        <div className={`md:col-span-6 ${reversed ? "md:order-1" : ""}`}>
          <h3 className="font-display text-2xl md:text-3xl tracking-tight leading-snug mb-4">
            {p.title}
          </h3>
          <p className="text-foreground/80 leading-relaxed mb-5">{p.summary}</p>
          <p className="text-xs uppercase tracking-wide text-foreground/55 mb-5">
            Role · {p.role}
          </p>
          <p className="eyebrow mb-3">What I led</p>
          <ul className="space-y-2 mb-6">
            {p.ledBullets.map((b) => (
              <li key={b} className="flex gap-3 text-foreground/85 text-[15px] leading-relaxed">
                <span className="mt-2.5 w-3 h-px bg-foreground/40 flex-shrink-0" />
                <span>{b}</span>
              </li>
            ))}
          </ul>
          {p.factsLine && (
            <p className="text-xs text-foreground/70 mb-6 tracking-wide">{p.factsLine}</p>
          )}
          <button
            onClick={() => setOpen((v) => !v)}
            className="inline-flex items-center gap-1.5 text-sm font-medium text-foreground border-b border-foreground/30 hover:border-foreground transition-colors pb-0.5"
          >
            {open ? "Show less" : "Read more"}
            <ChevronDown
              className={`w-4 h-4 transition-transform ${open ? "rotate-180" : ""}`}
            />
          </button>
          {p.downloadUrl && (
            <a
              href={p.downloadUrl}
              target="_blank"
              rel="noopener noreferrer"
              download
              className="ml-4 inline-flex items-center gap-1.5 text-sm font-medium text-foreground bg-foreground/5 hover:bg-foreground/10 border border-foreground/15 rounded-md px-3 py-1.5 transition-colors"
            >
              <Download className="w-4 h-4" />
              {p.downloadLabel ?? "Download"}
            </a>
          )}
          {p.secondDownloadUrl && (
            <a
              href={p.secondDownloadUrl}
              target="_blank"
              rel="noopener noreferrer"
              download
              className="ml-4 inline-flex items-center gap-1.5 text-sm font-medium text-foreground bg-foreground/5 hover:bg-foreground/10 border border-foreground/15 rounded-md px-3 py-1.5 transition-colors"
            >
              <Download className="w-4 h-4" />
              {p.secondDownloadLabel ?? "Download"}
            </a>
          )}
          {p.liveUrl && (
            <a
              href={p.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="ml-4 inline-flex items-center gap-1.5 text-sm font-medium text-foreground bg-foreground/5 hover:bg-foreground/10 border border-foreground/15 rounded-md px-3 py-1.5 transition-colors"
            >
              <ExternalLink className="w-4 h-4" />
              {p.liveLabel ?? "Visit Website"}
            </a>
          )}
          {open && (
            <p className="mt-5 text-foreground/75 leading-relaxed border-l border-foreground/20 pl-5">
              {p.readMore}
            </p>
          )}
        </div>
      </article>
    </Reveal>
  );
};

export default ProjectCard;
