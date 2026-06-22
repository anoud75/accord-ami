import { Link, useLocation, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

const sections = [
  { id: "intro", label: "About" },
  { id: "work", label: "Work" },
  { id: "achievements", label: "Achievements" },
  { id: "contact", label: "Contact" },
];

const SiteNav = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const goToSection = (id: string) => {
    setOpen(false);
    if (location.pathname !== "/") {
      navigate(`/#${id}`);
      return;
    }
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-ivory/85 backdrop-blur-md" : "bg-transparent"
      }`}
    >
      <div className="mx-auto max-w-5xl px-6 h-16 flex items-center justify-between">
        <Link
          to="/"
          className="font-display font-semibold text-base tracking-tight leading-none"
        >
          Alanoud Alsamil
        </Link>

        <nav className="hidden md:flex items-center gap-7">
          {sections.map((s) => (
            <button
              key={s.id}
              onClick={() => goToSection(s.id)}
              className="text-sm text-foreground/65 hover:text-foreground transition-colors"
            >
              {s.label}
            </button>
          ))}
        </nav>

        <button
          className="md:hidden p-2"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t border-foreground/10 bg-ivory">
          <div className="px-6 py-4 flex flex-col gap-3">
            {sections.map((s) => (
              <button
                key={s.id}
                onClick={() => goToSection(s.id)}
                className="text-sm py-1 text-left text-foreground/80"
              >
                {s.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};

export default SiteNav;
