import PageShell from "@/components/portfolio/PageShell";
import SEO from "@/components/portfolio/SEO";
import LivingPath from "@/components/portfolio/LivingPath";
import { Eyebrow, Reveal, BilingualStatement } from "@/components/portfolio/atoms";
import { Mail, Linkedin, Github, FileText } from "lucide-react";
import cvAsset from "@/assets/cv.asset.json";

const links = [
  { icon: Mail, label: "Email", href: "mailto:alanoud@example.com", value: "alanoud@example.com" },
  { icon: Linkedin, label: "LinkedIn", href: "https://www.linkedin.com/in/alanoud-alsamil", value: "linkedin.com/in/alanoud-alsamil" },
  { icon: Github, label: "GitHub", href: "https://github.com", value: "github.com" },
  { icon: FileText, label: "Resume", href: cvAsset.url, value: "Alanoud_Alsamil_CV_2026.pdf" },
];

const ContactPage = () => (
  <PageShell>
    <SEO
      title="Contact — Alanoud Alsamil"
      description="Let's build products and experiences that make complex systems easier to understand, use, and improve."
    />
    <section className="relative overflow-hidden pt-20 pb-20">
      <LivingPath variant="hero" className="opacity-60" />
      <div className="container-edit relative">
        <Reveal>
          <Eyebrow>Contact</Eyebrow>
          <h1 className="display-1 mt-6 max-w-4xl">Let&rsquo;s build something that makes complexity feel obvious.</h1>
        </Reveal>
        <Reveal delay={0.1}>
          <div className="mt-8 max-w-2xl">
            <BilingualStatement
              en="Let's build products and experiences that make complex systems easier to understand, use, and improve."
              ar="لنبنِ منتجات وتجارب تجعل الأنظمة المعقّدة أسهل للفهم والاستخدام والتحسين."
            />
          </div>
        </Reveal>
      </div>
    </section>

    <section className="container-edit py-16 border-t border-foreground/10">
      <div className="grid md:grid-cols-2 gap-px bg-foreground/10 border border-foreground/10">
        {links.map((l) => (
          <Reveal key={l.label}>
            <a
              href={l.href}
              target={l.href.startsWith("http") || l.href.endsWith(".pdf") ? "_blank" : undefined}
              rel="noopener noreferrer"
              className="group bg-ivory p-8 md:p-10 flex items-center gap-6 hover:bg-ivory-deep transition-colors"
            >
              <l.icon className="w-6 h-6 text-teal flex-shrink-0" />
              <div className="flex-1 min-w-0">
                <p className="eyebrow mb-1">{l.label}</p>
                <p className="text-lg text-foreground truncate group-hover:underline underline-offset-4">{l.value}</p>
              </div>
              <span className="text-foreground/40 group-hover:text-foreground group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition">↗</span>
            </a>
          </Reveal>
        ))}
      </div>
    </section>
  </PageShell>
);

export default ContactPage;
