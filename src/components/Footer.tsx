import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, Facebook, Twitter, Linkedin, Instagram } from "lucide-react";
import logo from "@/assets/logo.jpeg";

const Footer = () => (
  <footer className="bg-primary text-primary-foreground pt-16 pb-8">
    <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
      {/* Brand Section */}
      <div className="space-y-6">
        <Link to="/" className="flex items-center gap-3 bg-white/10 p-2 rounded-lg w-fit">
          <img src={logo} alt="Jindal Steel" className="h-10 w-auto rounded" />
          <span className="font-heading font-black italic tracking-tighter text-xl">JINDAL <span className="text-secondary-foreground">STEEL</span></span>
        </Link>
        <p className="text-sm leading-relaxed text-primary-foreground/70">
          A legacy driving innovation and advancing the Indian steel industry. We specialize in high-grade steel tubes and premium roofing solutions.
        </p>
        <div className="flex gap-4">
          {[Facebook, Twitter, Linkedin, Instagram].map((Icon, i) => (
            <a key={i} href="#" className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-secondary transition-colors">
              <Icon className="w-4 h-4" />
            </a>
          ))}
        </div>
      </div>

      {/* Quick Links */}
      <div>
        <h3 className="text-lg font-heading font-bold mb-6 uppercase tracking-wider border-b border-white/20 pb-2 inline-block">Quick Links</h3>
        <ul className="space-y-3 text-sm text-primary-foreground/70">
          {[
            { to: "/", label: "Home" },
            { to: "/company-profile", label: "Company Profile" },
            { to: "/infrastructure", label: "Infrastructure" },
            { to: "/application", label: "Application" },
            { to: "/quality-control", label: "Quality Control" },
            { to: "/products", label: "Our Products" },
            { to: "/gallery", label: "Gallery" },
            { to: "/contact", label: "Contact Us" },
          ].map((l) => (
            <li key={l.to}>
              <Link to={l.to} className="hover:text-white transition-colors flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-secondary/50"></span>
                {l.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* Contact Info */}
      <div>
        <h3 className="text-lg font-heading font-bold mb-6 uppercase tracking-wider border-b border-white/20 pb-2 inline-block">Get In Touch</h3>
        <ul className="space-y-4 text-sm text-primary-foreground/70">
          <li className="flex items-start gap-3">
            <MapPin className="w-5 h-5 text-secondary shrink-0" />
            <span>Delhi, India</span>
          </li>
          <li className="flex items-start gap-3">
            <Phone className="w-5 h-5 text-secondary shrink-0" />
            <div className="flex flex-col">
              <a href="tel:+919664119210" className="hover:text-white transition-colors">+91-9664119210</a>
              <a href="tel:+917982528486" className="hover:text-white transition-colors">+91-7982528486</a>
            </div>
          </li>
          <li className="flex items-start gap-3">
            <Mail className="w-5 h-5 text-secondary shrink-0" />
            <a href="mailto:akash.1401m@gmail.com" className="hover:text-white transition-colors">akash.1401m@gmail.com</a>
          </li>
        </ul>
      </div>

      {/* Newsletter/Working Hours */}
      <div>
        <h3 className="text-lg font-heading font-bold mb-6 uppercase tracking-wider border-b border-white/20 pb-2 inline-block">Working Hours</h3>
        <ul className="space-y-3 text-sm text-primary-foreground/70">
          <li className="flex justify-between border-b border-white/10 pb-2">
            <span>Mon - Sat:</span>
            <span className="text-white">9:00 AM - 6:00 PM</span>
          </li>
          <li className="flex justify-between border-b border-white/10 pb-2">
            <span>Sunday:</span>
            <span className="text-secondary font-bold">Closed</span>
          </li>
        </ul>
      </div>
    </div>

    <div className="container mx-auto px-4 mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-primary-foreground/40">
      <p>© {new Date().getFullYear()} D.S. Steels. All rights reserved.</p>
    </div>
  </footer>
);

export default Footer;
