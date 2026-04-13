import { Link } from "react-router-dom";
import { Phone, Mail, MapPin } from "lucide-react";

const Footer = () => (
  <footer className="bg-primary text-primary-foreground">
    <div className="container mx-auto px-4 py-12 grid grid-cols-1 md:grid-cols-3 gap-8">
      <div>
        <h3 className="text-lg mb-4 text-primary-foreground/90 font-heading">SITEMAP</h3>
        <ul className="space-y-2 text-sm">
          {[
            { to: "/", label: "Home" },
            { to: "/company-profile", label: "Company Profile" },
            { to: "/infrastructure", label: "Infrastructure" },
            
            { to: "/application", label: "Application" },
            { to: "/quality-control", label: "Quality Control" },
            { to: "/enquiry", label: "Enquiry" },
            { to: "/contact", label: "Contact" },
          ].map((l) => (
            <li key={l.to}>
              <Link to={l.to} className="hover:text-primary-foreground/70 transition-colors">
                {l.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      <div>
        <h3 className="text-lg mb-4 text-primary-foreground/90 font-heading">ABOUT US</h3>
        <p className="text-sm leading-relaxed text-primary-foreground/80">
          Jindal Steel Tube is a leading manufacturer of stainless steel tubes and pipes, committed to excellence and quality across the globe.
        </p>
      </div>

      <div>
        <h3 className="text-lg mb-4 text-primary-foreground/90 font-heading">OUR MEETING POINT</h3>
        <ul className="space-y-3 text-sm">
          <li className="flex items-start gap-2">
            <MapPin className="w-4 h-4 mt-0.5 shrink-0 text-primary-foreground/70" />
            Delhi
          </li>
          <li className="flex items-center gap-2">
            <Phone className="w-4 h-4 shrink-0 text-primary-foreground/70" />
            +91-9999404852
          </li>
          <li className="flex items-center gap-2">
            <Mail className="w-4 h-4 shrink-0 text-primary-foreground/70" />
            info@jindalsteeltube.com
          </li>
        </ul>
      </div>
    </div>

    <div className="border-t border-primary-foreground/20 text-center py-4 text-xs text-primary-foreground/60">
      © {new Date().getFullYear()} Jindal Steel Tube. All rights reserved.
    </div>
  </footer>
);

export default Footer;
