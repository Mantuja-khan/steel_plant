import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Phone, Mail } from "lucide-react";
import logo from "@/assets/logo.jpeg";

const navLinks = [
  { to: "/", label: "Home" },
  { to: "/company-profile", label: "Company Profile" },
  { to: "/infrastructure", label: "Infrastructure" },
  { to: "/application", label: "Application" },
  { to: "/quality-control", label: "Quality Control" },
  { to: "/products", label: "Products" },
  { to: "/contact", label: "Contact" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  return (
    <header className="w-full z-50 relative">
      {/* Top bar */}
      <div className="bg-primary text-primary-foreground text-sm">
        <div className="container mx-auto flex justify-between items-center py-2 px-4">
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-1">
              <Phone className="w-3 h-3" /> +91 98765 43210
            </span>
            <span className="hidden sm:flex items-center gap-1">
              <Mail className="w-3 h-3" /> info@jindalsteeltube.com
            </span>
          </div>
          <span className="hidden md:block">Mon - Sat: 9:00 AM - 6:00 PM</span>
        </div>
      </div>

      {/* Main nav */}
      <nav className="bg-background shadow-lg border-b border-border">
        <div className="container mx-auto flex items-center justify-between px-4 py-3">
          <Link to="/" className="flex items-center gap-3 group">
            <img src={logo} alt="Jindal Steel" className="h-10 w-auto md:h-12" />
            <div className="font-heading text-lg md:text-xl text-primary tracking-widest font-black uppercase italic">
              JINDAL<span className="text-secondary"> STEEL TUBE</span>
            </div>
          </Link>

          {/* Desktop links */}
          <ul className="hidden lg:flex items-center gap-1">
            {navLinks.map((l) => (
              <li key={l.to}>
                <Link
                  to={l.to}
                  className={`px-3 py-2 text-xs font-semibold uppercase tracking-wide transition-colors rounded ${
                    location.pathname === l.to
                      ? "bg-primary text-primary-foreground"
                      : "text-foreground hover:bg-primary hover:text-primary-foreground"
                  }`}
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>

          {/* Mobile toggle */}
          <button
            className="lg:hidden text-foreground"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile menu */}
        {open && (
          <ul className="lg:hidden bg-background border-t border-border px-4 pb-4">
            {navLinks.map((l) => (
              <li key={l.to}>
                <Link
                  to={l.to}
                  onClick={() => setOpen(false)}
                  className={`block py-2 text-sm font-semibold uppercase tracking-wide ${
                    location.pathname === l.to
                      ? "text-primary"
                      : "text-foreground"
                  }`}
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        )}
      </nav>
    </header>
  );
};

export default Navbar;
