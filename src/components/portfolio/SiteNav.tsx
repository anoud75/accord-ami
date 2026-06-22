import { Link, NavLink } from "react-router-dom";
import { useEffect, useState } from "react";
import { sectors } from "@/content/sectors";
import { Menu, X } from "lucide-react";

const workLinks = sectors.map((s) => ({ to: s.slug, label: s.shortLabel }));
const sideLinks = [
  { to: "/how-i-think", label: "How I Think" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
];

const SiteNav = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [worksOpen, setWorksOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-ivory/85 backdrop-blur-md" : "bg-transparent"
      }`}
    >
      <div className="mx-auto max-w-5xl px-6 h-16 grid grid-cols-3 items-center">
        {/* Left: Works dropdown */}
        <div
          className="hidden md:flex items-center gap-6 relative"
          onMouseEnter={() => setWorksOpen(true)}
          onMouseLeave={() => setWorksOpen(false)}
        >
          <button className="text-sm text-foreground/65 hover:text-foreground transition-colors">
            Works
          </button>
          {worksOpen && (
            <div className="absolute top-full left-0 pt-3">
              <div className="bg-ivory border border-foreground/10 shadow-sm rounded-md p-2 min-w-[180px]">
                {workLinks.map((l) => (
                  <NavLink
                    key={l.to}
                    to={l.to}
                    className={({ isActive }) =>
                      `block px-3 py-1.5 text-sm rounded ${
                        isActive ? "text-foreground bg-ivory-deep" : "text-foreground/70 hover:bg-ivory-deep"
                      }`
                    }
                  >
                    {l.label}
                  </NavLink>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Center: signature logomark */}
        <Link
          to="/"
          className="justify-self-center font-serif italic text-2xl tracking-tight leading-none"
        >
          alanoud<span className="text-foreground/40">.</span>
        </Link>

        {/* Right: side links */}
        <nav className="hidden md:flex items-center gap-6 justify-self-end">
          {sideLinks.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              className={({ isActive }) =>
                `text-sm transition-colors ${
                  isActive ? "text-foreground" : "text-foreground/65 hover:text-foreground"
                }`
              }
            >
              {l.label}
            </NavLink>
          ))}
        </nav>

        <button
          className="md:hidden justify-self-end p-2 col-start-3"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t border-foreground/10 bg-ivory">
          <div className="px-6 py-4 flex flex-col gap-3">
            <p className="eyebrow">Works</p>
            {workLinks.map((l) => (
              <NavLink
                key={l.to}
                to={l.to}
                onClick={() => setOpen(false)}
                className="text-sm pl-3 py-1 text-foreground/70"
              >
                {l.label}
              </NavLink>
            ))}
            <div className="rule my-2" />
            {sideLinks.map((l) => (
              <NavLink
                key={l.to}
                to={l.to}
                onClick={() => setOpen(false)}
                className="text-sm py-1"
              >
                {l.label}
              </NavLink>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};

export default SiteNav;
