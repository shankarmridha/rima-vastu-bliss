import { Link } from "react-router-dom";
import { Instagram, Facebook, Youtube, Phone, Mail, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-foreground text-footer-light">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-full bg-primary/30 flex items-center justify-center">
                <span className="font-serif text-footer-light font-bold text-lg">RM</span>
              </div>
              <div>
                <p className="font-serif font-semibold text-sm text-footer-light">Rima Mridha</p>
                <p className="text-[10px] tracking-wider uppercase text-footer-light/70">Vedic Vastu Consultant</p>
              </div>
            </div>
            <p className="text-sm text-footer-light/70 leading-relaxed">
              Harmonising spaces and transforming lives through the ancient wisdom of Vedic Vastu, 
              serving clients across India and worldwide.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-serif font-semibold mb-4 text-primary">Quick Links</h4>
            <div className="flex flex-col gap-2">
              {[
                { to: "/about", label: "About Rima Ma'am" },
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
                  className="text-sm text-footer-light/70 hover:text-footer-light hover:text-primary transition-all"
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
              <a href="tel:+918411017676" className="flex items-center gap-2 text-sm text-footer-light/70 hover:text-footer-light transition-opacity">
                <Phone className="w-4 h-4 text-primary" />
                +91 84110 17676
              </a>
              <a href="mailto:rima.mridha@gmail.com" className="flex items-center gap-2 text-sm text-footer-light/70 hover:text-footer-light transition-opacity">
                <Mail className="w-4 h-4 text-primary" />
                rima.mridha@gmail.com
              </a>
              <div className="flex items-center gap-2 text-sm text-footer-light/70">
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
                { icon: Instagram, href: "https://www.instagram.com/vastu.24/", label: "Instagram" },
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
                  <Icon className="w-4 h-4 text-footer-light" />
                </a>
              ))}
            </div>
            <p className="text-xs text-footer-light/50 mt-6">Languages: English, Hindi, Bengali</p>
          </div>
        </div>

        <div className="border-t border-footer-light/10 mt-12 pt-8 text-center">
          <p className="text-xs text-footer-light/50">
            © {new Date().getFullYear()} Rima Mridha — Vedic Vastu Consultant. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
