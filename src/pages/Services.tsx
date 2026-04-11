import { Home, Building2, Globe, Star, MessageCircle, Shield, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import SectionDivider from "@/components/SectionDivider";

const WHATSAPP_URL = "https://wa.me/918411017676?text=Hello%20Rima%20Ma'am%2C%20I%20would%20like%20to%20enquire%20about%20your%20services.";

const serviceImages = [
  "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600&h=400&fit=crop",
  "https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&h=400&fit=crop",
  "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=600&h=400&fit=crop",
  "https://images.unsplash.com/photo-1545558014-8692077e9b5c?w=600&h=400&fit=crop",
];

const services = [
  {
    icon: Home,
    title: "Home Vastu Consultation",
    desc: "Transform your home into a sanctuary of positive energy, health, and prosperity.",
    forWhom: "Homeowners, renters, and anyone looking to improve the energy of their living space — whether a new build, renovation, or existing home.",
    includes: [
      "Complete floor plan analysis using Vedic and Ayadi principles",
      "Room-by-room energy assessment",
      "Direction and element balancing recommendations",
      "Colour, material, and placement guidance",
      "Remedies that work without structural changes",
      "Detailed written report with actionable steps",
      "Follow-up support throughout your Vastu journey",
    ],
  },
  {
    icon: Building2,
    title: "Office & Commercial Vastu",
    desc: "Optimise your business environment for productivity, growth, and financial success.",
    forWhom: "Business owners, entrepreneurs, corporate offices, retail spaces, factories, and commercial properties of all sizes.",
    includes: [
      "Business premises energy audit",
      "Optimal placement for leadership, finance, and teams",
      "Entry and reception area optimisation",
      "Cash flow and prosperity zone activation",
      "Employee well-being and productivity enhancements",
      "Detailed commercial Vastu report",
      "Follow-up support throughout your Vastu journey",
    ],
  },
  {
    icon: Globe,
    title: "Online / Remote Consultation",
    desc: "Get expert Vastu guidance from anywhere in the world through detailed remote analysis.",
    forWhom: "Clients based outside India, NRIs, or anyone who prefers the convenience of a virtual consultation without compromising on quality.",
    includes: [
      "Floor plan analysis via shared documents and video call",
      "Detailed video consultation (60–90 minutes)",
      "Screen-shared walkthrough of recommendations",
      "Comprehensive digital report with diagrams",
      "Follow-up video call for implementation queries",
      "Email support for ongoing questions",
      "Follow-up support throughout your Vastu journey",
    ],
  },
  {
    icon: Star,
    title: "Numerology & Vedic Astrology Add-ons",
    desc: "Complement your Vastu consultation with personalised numerological and astrological insights.",
    forWhom: "Anyone seeking a deeper, more holistic understanding of how cosmic energies interact with their personal and spatial environment.",
    includes: [
      "Personal numerology profile based on date of birth",
      "Lucky numbers, colours, and directions",
      "Astrological chart analysis for property decisions",
      "Best dates for moving, renovation, or business launch",
      "Name correction and spelling optimisation guidance",
      "Personalised report integrating Vastu and astrology",
    ],
  },
];

const ServicesPage = () => {
  return (
    <div>
      {/* Hero */}
      <section className="py-20 bg-gradient-to-b from-primary/5 to-transparent">
        <div className="container mx-auto px-4 text-center max-w-3xl">
          <p className="text-primary font-medium tracking-wider uppercase text-sm mb-4">What We Offer</p>
          <h1 className="font-serif text-4xl md:text-5xl font-bold text-foreground leading-tight mb-4">Our Services</h1>
          <p className="text-muted-foreground text-lg leading-relaxed">
            Comprehensive Vastu solutions tailored to your unique needs, combining the wisdom of three schools of Vastu 
            with practical, non-invasive remedies.
          </p>
        </div>
      </section>

      {/* Lifetime Support Badge */}
      <div className="container mx-auto px-4 -mt-4 mb-8">
        <div className="bg-accent/10 border border-accent/30 rounded-xl p-6 flex items-center justify-center gap-3 max-w-2xl mx-auto">
          <Shield className="w-8 h-8 text-accent shrink-0" />
          <div>
            <p className="font-serif font-bold text-foreground">Ongoing Support Throughout Your Vastu Journey</p>
            <p className="text-sm text-muted-foreground">Every consultation includes dedicated follow-up support to guide you through implementation. Continued support beyond the consultation period is available as needed.</p>
          </div>
        </div>
      </div>

      {/* Services */}
      <section className="pb-20">
        <div className="container mx-auto px-4 space-y-12">
          {services.map(({ icon: Icon, title, desc, forWhom, includes }, i) => (
            <div key={title}>
              <Card className="border-primary/10 overflow-hidden bg-card">
                <CardContent className="p-0">
                  <div className={`grid lg:grid-cols-2 ${i % 2 === 1 ? "lg:flex-row-reverse" : ""}`}>
                    {/* Image */}
                    <div className={`min-h-[300px] ${i % 2 === 1 ? "lg:order-2" : ""}`}>
                      <img src={serviceImages[i]} alt={title} className="w-full h-full object-cover" loading="lazy" />
                    </div>
                    {/* Content */}
                    <div className={`p-8 lg:p-10 ${i % 2 === 1 ? "lg:order-1" : ""}`}>
                      <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-3">
                        <Icon className="w-6 h-6 text-primary" />
                      </div>
                      <h2 className="font-serif text-2xl md:text-3xl font-bold text-foreground mb-2">{title}</h2>
                      <p className="text-muted-foreground leading-relaxed mb-3">{desc}</p>
                      <div className="mb-3">
                        <p className="font-semibold text-sm text-foreground mb-1">Who is this for?</p>
                        <p className="text-sm text-muted-foreground">{forWhom}</p>
                      </div>
                      <div className="mb-5">
                        <p className="font-semibold text-sm text-foreground mb-2">What's included:</p>
                        <ul className="space-y-1.5">
                          {includes.map((item) => (
                            <li key={item} className="flex items-start gap-2 text-sm text-muted-foreground">
                              <CheckCircle className="w-4 h-4 text-secondary shrink-0 mt-0.5" />
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
                        <Button className="bg-accent text-accent-foreground hover:bg-accent/90 font-semibold">
                          <MessageCircle className="w-4 h-4" />
                          Enquire on WhatsApp
                        </Button>
                      </a>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;
