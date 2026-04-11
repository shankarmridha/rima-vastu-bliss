import { Link } from "react-router-dom";
import { Home, Building2, Globe, Star, MessageCircle, Award, Users, BookOpen, Instagram } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import SectionDivider from "@/components/SectionDivider";

const WHATSAPP_URL = "https://wa.me/918411017676?text=Hello%20Rima%20Ma'am%2C%20I%20would%20like%20to%20book%20a%20Vastu%20consultation.";

const services = [
  { icon: Home, title: "Home Vastu", desc: "Create harmony and positive energy flow in your residential spaces for health, prosperity, and well-being.", img: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=400&h=300&fit=crop" },
  { icon: Building2, title: "Office & Commercial", desc: "Optimise your workplace for productivity, growth, and financial success through Vastu-aligned design.", img: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=400&h=300&fit=crop" },
  { icon: Globe, title: "Online Consultations", desc: "Get expert Vastu guidance from anywhere in the world through detailed remote analysis and recommendations.", img: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=400&h=300&fit=crop" },
  { icon: Star, title: "Numerology & Astrology", desc: "Complement your Vastu consultation with personalised numerological and astrological insights.", img: "https://images.unsplash.com/photo-1545558014-8692077e9b5c?w=400&h=300&fit=crop" },
];

const testimonials = [
  { name: "Ananya S.", city: "Mumbai", quote: "Rima Ma'am's guidance transformed our home. Within weeks of implementing her suggestions, we noticed a remarkable shift in the energy of our space. Her approach is both scientific and deeply intuitive.", avatar: "https://images.unsplash.com/photo-1594744803329-e58b31de8bf5?w=100&h=100&fit=crop&crop=face" },
  { name: "Rajesh K.", city: "Bangalore", quote: "As a sceptic, I was amazed by the results. Our office productivity improved noticeably after Rima Ma'am's commercial Vastu consultation. She explains everything with clarity and patience.", avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face" },
  { name: "Priya M.", city: "London, UK", quote: "Even though we consulted online from the UK, Rima Ma'am's analysis was incredibly thorough. She provided practical solutions that didn't require any structural changes. Highly recommend!", avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=100&h=100&fit=crop&crop=face" },
];

const HomePage = () => {
  return (
    <div>
      {/* Hero */}
      <section className="relative min-h-[80vh] flex items-center bg-gradient-to-br from-foreground/5 via-primary/10 to-accent/10">
        <div className="absolute inset-0 opacity-5" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='120' height='120' viewBox='0 0 120 120' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' stroke='%23C4956A' stroke-width='0.5'%3E%3Ccircle cx='60' cy='60' r='40'/%3E%3Ccircle cx='60' cy='60' r='28'/%3E%3Ccircle cx='60' cy='60' r='16'/%3E%3Cpath d='M60 20 L60 100 M20 60 L100 60 M32 32 L88 88 M88 32 L32 88'/%3E%3C/g%3E%3C/svg%3E")`,
          backgroundSize: "120px 120px",
        }} />
        <div className="container mx-auto px-4 py-20 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in-up">
              <p className="text-hero-label font-medium tracking-wider uppercase text-sm mb-4">Vedic Vastu Consultant</p>
              <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight mb-6">
                Harmonise Your Space.<br />
                <span className="text-hero-highlight italic">Transform Your Life.</span>
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed mb-8 max-w-lg">
                With over 15 years of professional experience in Architecture, Interior Design, and Vedic Vastu, Rima Ma'am helps you unlock the 
                hidden potential of your spaces — bringing balance, prosperity, and well-being into every corner of your life.
              </p>
              <div className="flex flex-wrap gap-4">
                <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
                  <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 font-semibold text-base px-8">
                    <MessageCircle className="w-5 h-5" />
                    Book a Consultation
                  </Button>
                </a>
                <Link to="/services">
                  <Button size="lg" variant="outline" className="font-semibold text-base px-8 border-foreground text-foreground hover:bg-foreground/5">
                    Explore Services
                  </Button>
                </Link>
              </div>
            </div>
            <div className="hidden lg:flex justify-center">
              <img src="/Rima_profile.jpg" alt="Rima Mridha" className="w-80 h-96 object-cover rounded-lg shadow-lg" />
            </div>
          </div>
        </div>
      </section>

      {/* Why Vastu */}
      <section className="py-20">
        <div className="container mx-auto px-4 max-w-3xl text-center">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-4">Why Vastu?</h2>
          <SectionDivider />
          <p className="text-muted-foreground text-lg leading-relaxed">
            Vastu Shastra is the ancient Indian science of architecture and spatial arrangement. Rooted in Vedic wisdom, 
            it harmonises the five elements — earth, water, fire, air, and space — within your built environment. 
            When your home or workspace is aligned with these natural forces, it creates an atmosphere of balance, 
            clarity, and abundance that positively influences every aspect of your life.
          </p>
        </div>
      </section>

      {/* Services */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-3">Our Services</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">Comprehensive Vastu solutions tailored to your unique needs</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map(({ icon: Icon, title, desc, img }) => (
              <Card key={title} className="group hover:shadow-lg transition-all duration-300 border-primary/10 hover:border-primary/30 bg-card overflow-hidden">
                <div className="h-40 overflow-hidden">
                  <img src={img} alt={title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" loading="lazy" />
                </div>
                <CardContent className="p-6 text-center">
                  <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors -mt-10 relative z-10 border-2 border-card">
                    <Icon className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="font-serif font-semibold text-lg mb-2">{title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link to="/services">
              <Button variant="outline" className="font-semibold border-foreground text-foreground">View All Services →</Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Trust Bar */}
      <section className="py-16 bg-foreground text-footer-light">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            {[
              { icon: Award, stat: "15+ Years", label: "of Professional Experience" },
              { icon: Users, stat: "Clients Worldwide", label: "India, UK, USA, UAE & more" },
              { icon: BookOpen, stat: "3 Schools of Vastu", label: "Modern, Vedic & Ayadi" },
            ].map(({ icon: Icon, stat, label }) => (
              <div key={stat} className="flex flex-col items-center">
                <Icon className="w-8 h-8 text-primary mb-3" />
                <p className="font-serif text-2xl font-bold mb-1 text-footer-light">{stat}</p>
                <p className="text-sm text-footer-light/70">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-3">What Clients Say</h2>
            <SectionDivider />
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((t) => (
              <Card key={t.name} className="border-primary/10 bg-card">
                <CardContent className="p-6">
                  <div className="flex gap-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-accent text-accent" />
                    ))}
                  </div>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-4 italic">"{t.quote}"</p>
                  <div className="flex items-center gap-3">
                    <img src={t.avatar} alt={t.name} className="w-10 h-10 rounded-full object-cover" loading="lazy" />
                    <div>
                      <p className="font-semibold text-sm">{t.name}</p>
                      <p className="text-xs text-muted-foreground">{t.city}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link to="/testimonials">
              <Button variant="outline" className="font-semibold">Read More Testimonials →</Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Instagram Section */}
      <section className="py-12 bg-gradient-to-r from-primary/5 via-accent/10 to-primary/5">
        <div className="container mx-auto px-4 text-center">
          <div className="flex items-center justify-center gap-3 mb-3">
            <Instagram className="w-6 h-6 text-primary" />
            <h2 className="font-serif text-2xl md:text-3xl font-bold text-foreground">Follow on Instagram</h2>
          </div>
          <p className="text-muted-foreground mb-4">See Vastu in action — follow our journey</p>
          <a href="https://www.instagram.com/vastu.24/" target="_blank" rel="noopener noreferrer">
            <Button className="bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500 text-white hover:opacity-90 font-semibold">
              <Instagram className="w-4 h-4" />
              @vastu.24
            </Button>
          </a>
        </div>
      </section>

      {/* CTA Strip */}
      <section className="py-16 bg-primary/10">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-3">
            Ready to bring harmony to your space?
          </h2>
          <p className="text-muted-foreground mb-6 max-w-xl mx-auto">
            Take the first step towards a balanced, prosperous life. Get in touch with Rima Ma'am today for a personalised consultation.
          </p>
          <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
            <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 font-semibold text-base px-8">
              <MessageCircle className="w-5 h-5" />
              Chat on WhatsApp
            </Button>
          </a>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
