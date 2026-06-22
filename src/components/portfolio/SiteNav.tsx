import { Link, NavLink } from "react-router-dom";
import { useEffect, useState } from "react";
import { sectors } from "@/content/sectors";
import { Menu, X } from "lucide-react";

const navLinks = [
  ...sectors.map((s) => ({ to: s.slug, label: s.shortLabel })),
  { to: "/how-i-think", label: "How I Think" },
  { to: "/about", label: "About" },
];

const SiteNav = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-ivory/85 backdrop-blur-md border-b border-foreground/10" : "bg-transparent"
      }`}
    >
      <div className="container-wide flex items-center justify-between h-16">
        <Link to="/" className="flex items-baseline gap-2 group">
          <span className="text-base font-medium tracking-tight">Alanoud Alsamil</span>
          <span className="hidden sm:inline text-[10px] tracking-[0.22em] uppercase text-foreground/50">
            Systems · Stories · Scale
          </span>
        </Link>

        <nav className="hidden lg:flex items-center gap-7">
          {navLinks.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              className={({ isActive }) =>
                `text-sm transition-colors ${
                  isActive ? "text-foreground" : "text-foreground/55 hover:text-foreground"
                }`
              }
            >
              {l.label}
            </NavLink>
          ))}
          <Link
            to="/contact"
            className="text-sm px-4 py-1.5 border border-foreground/80 hover:bg-foreground hover:text-ivory transition-colors"
          >
            Contact
          </Link>
        </nav>

        <button
          className="lg:hidden p-2"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {open && (
        <div className="lg:hidden border-t border-foreground/10 bg-ivory">
          <div className="container-wide py-4 flex flex-col gap-3">
            {navLinks.map((l) => (
              <NavLink
                key={l.to}
                to={l.to}
                onClick={() => setOpen(false)}
                className="text-sm py-1"
              >
                {l.label}
              </NavLink>
            ))}
            <Link
              to="/contact"
              onClick={() => setOpen(false)}
              className="text-sm py-1 font-medium"
            >
              Contact →
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default SiteNav;
