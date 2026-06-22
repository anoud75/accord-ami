import { motion } from "framer-motion";
import { ReactNode } from "react";

export const Reveal = ({ children, delay = 0 }: { children: ReactNode; delay?: number }) => (
  <motion.div
    initial={{ opacity: 0, y: 16 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-80px" }}
    transition={{ duration: 0.6, delay, ease: [0.215, 0.61, 0.355, 1] }}
  >
    {children}
  </motion.div>
);

export const Eyebrow = ({ children }: { children: ReactNode }) => (
  <p className="eyebrow">{children}</p>
);

export const StatusBadge = ({ status }: { status: string }) => (
  <span className="inline-flex items-center gap-1.5 text-[11px] tracking-wide uppercase text-foreground/65">
    <span className="w-1.5 h-1.5 rounded-full bg-teal" />
    {status}
  </span>
);

export const WhyThisMatters = ({ children, accent = "teal" }: { children: ReactNode; accent?: "teal" | "coral" | "lavender" | "ai" }) => {
  const colorClass = {
    teal: "border-teal",
    coral: "border-coral",
    lavender: "border-lavender",
    ai: "border-sector-ai",
  }[accent];
  return (
    <div className={`border-l-2 ${colorClass} pl-6 py-2 my-8`}>
      <p className="eyebrow mb-2">Why this matters</p>
      <p className="text-foreground/85 text-lg leading-relaxed">{children}</p>
    </div>
  );
};

export const BilingualStatement = ({ en, ar }: { en: string; ar: string }) => (
  <div className="space-y-2 py-2">
    <p className="display-3">{en}</p>
    <p className="display-3 font-arabic text-foreground/70" dir="rtl">{ar}</p>
  </div>
);
