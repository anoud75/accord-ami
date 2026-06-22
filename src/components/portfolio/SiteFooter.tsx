import { Link } from "react-router-dom";

const SiteFooter = () => (
  <footer className="mt-24 border-t border-foreground/10">
    <div className="mx-auto max-w-5xl px-6 py-8 flex flex-wrap items-center justify-between gap-4 text-xs text-foreground/55">
      <span>© {new Date().getFullYear()} Alanoud Alsamil. All work shown with permission or anonymised.</span>
      <Link to="/#contact" className="hover:text-foreground transition-colors">
        Get in touch
      </Link>
    </div>
  </footer>
);

export default SiteFooter;
