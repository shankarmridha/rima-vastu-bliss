import { Link } from "react-router-dom";
import { Instagram, Facebook, Youtube, Phone, Mail, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-foreground text-primary-foreground">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-full bg-primary/30 flex items-center justify-center">
                <span className="font-serif text-primary-foreground font-bold text-lg">RM</span>
              </div>
              <div>
                <p className="font-serif font-semibold text-sm">Rima Mridha</p>
                <p className="text-[10px] tracking-wider uppercase opacity-70">Vedic Vastu Consultant</p>
              </div>
            </div>
            <p className="text-sm opacity-70 leading-relaxed">
              Harmonising spaces and transforming lives through the ancient wisdom of Vedic Vastu, 
              serving clients across India and worldwide.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-serif font-semibold mb-4 text-primary">Quick Links</h4>
            <div className="flex flex-col gap-2">
              {[
                { to: "/about", label: "About Rima" },
                { to: "/services", label: "Services" },
                { to: "/case-studies", label: "Case Studies" },
                { to: "/testimonials", label: "Testimonials" },
                { to: "/gallery", label: "Gallery" },
                { to: "/faq", label: "FAQ" },
                { to: "/contact", label: "Contact" },
              ].map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  className="text-sm opacity-70 hover:opacity-100 hover:text-primary transition-all"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-serif font-semibold mb-4 text-primary">Get in Touch</h4>
            <div className="flex flex-col gap-3">
              <a href="tel:+919999999999" className="flex items-center gap-2 text-sm opacity-70 hover:opacity-100 transition-opacity">
                <Phone className="w-4 h-4 text-primary" />
                +91 99999 99999
              </a>
              <a href="mailto:hello@rimamridha.com" className="flex items-center gap-2 text-sm opacity-70 hover:opacity-100 transition-opacity">
                <Mail className="w-4 h-4 text-primary" />
                hello@rimamridha.com
              </a>
              <div className="flex items-center gap-2 text-sm opacity-70">
                <MapPin className="w-4 h-4 text-primary" />
                India (Serving Worldwide)
              </div>
            </div>
          </div>

          {/* Social */}
          <div>
            <h4 className="font-serif font-semibold mb-4 text-primary">Follow Us</h4>
            <div className="flex gap-3">
              {[
                { icon: Instagram, href: "#", label: "Instagram" },
                { icon: Facebook, href: "#", label: "Facebook" },
                { icon: Youtube, href: "#", label: "YouTube" },
              ].map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center hover:bg-primary/40 transition-colors"
                  aria-label={label}
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
            <p className="text-xs opacity-50 mt-6">Languages: English, Hindi, Bengali</p>
          </div>
        </div>

        <div className="border-t border-primary-foreground/10 mt-12 pt-8 text-center">
          <p className="text-xs opacity-50">
            © {new Date().getFullYear()} Rima Mridha — Vedic Vastu Consultant. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
