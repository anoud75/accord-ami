import { Link } from "react-router-dom";
import { sectors } from "@/content/sectors";
import LivingPath from "./LivingPath";

const SiteFooter = () => (
  <footer className="mt-32 border-t border-foreground/10">
    <LivingPath className="opacity-60" />
    <div className="container-wide py-16 grid md:grid-cols-3 gap-12">
      <div>
        <p className="display-3 leading-snug">Systems, Stories &amp; Scale.</p>
        <p className="mt-2 font-arabic text-foreground/70 text-lg" dir="rtl">
          أنظمة، قصص، وأثر قابل للتوسع
        </p>
      </div>
      <div>
        <p className="eyebrow mb-4">Explore</p>
        <ul className="space-y-2 text-sm">
          {sectors.map((s) => (
            <li key={s.key}>
              <Link to={s.slug} className="text-foreground/70 hover:text-foreground">
                {s.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <div>
        <p className="eyebrow mb-4">Connect</p>
        <ul className="space-y-2 text-sm">
          <li><Link to="/contact" className="ink-link">Email & contact</Link></li>
          <li><Link to="/about" className="ink-link">About</Link></li>
          <li><Link to="/how-i-think" className="ink-link">How I Think</Link></li>
        </ul>
      </div>
    </div>
    <div className="border-t border-foreground/10">
      <div className="container-wide py-6 flex flex-wrap items-center justify-between gap-4 text-xs text-foreground/55">
        <span>© {new Date().getFullYear()} Alanoud Alsamil. All work shown with permission or anonymised.</span>
        <span>Human-Centred Systems Builder · Riyadh</span>
      </div>
    </div>
  </footer>
);

export default SiteFooter;
