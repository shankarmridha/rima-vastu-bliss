import { useState } from "react";
import { MessageCircle, Phone, Mail, MapPin, Languages } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";

const WHATSAPP_URL = "https://wa.me/919999999999?text=Hello%20Rima%2C%20I%20would%20like%20to%20book%20a%20consultation.";

const ContactPage = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    consultationType: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Enquiry Sent!",
      description: "Thank you for reaching out. Rima will get back to you within 24 hours.",
    });
    setFormData({ name: "", phone: "", email: "", consultationType: "", message: "" });
  };

  return (
    <div>
      <section className="py-20 bg-gradient-to-b from-primary/5 to-transparent">
        <div className="container mx-auto px-4 text-center max-w-3xl">
          <p className="text-primary font-medium tracking-wider uppercase text-sm mb-4">Get in Touch</p>
          <h1 className="font-serif text-4xl md:text-5xl font-bold text-foreground leading-tight mb-6">Contact Rima</h1>
          <p className="text-muted-foreground text-lg leading-relaxed">
            Ready to harmonise your space? Reach out for a consultation or any questions you may have.
          </p>
        </div>
      </section>

      <section className="pb-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
            {/* Form */}
            <Card className="border-primary/10 bg-card">
              <CardContent className="p-8">
                <h2 className="font-serif text-2xl font-bold text-foreground mb-6">Send an Enquiry</h2>
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <Label htmlFor="name">Name</Label>
                    <Input id="name" placeholder="Your full name" value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} required />
                  </div>
                  <div>
                    <Label htmlFor="phone">Phone</Label>
                    <Input id="phone" type="tel" placeholder="+91 99999 99999" value={formData.phone} onChange={(e) => setFormData({ ...formData, phone: e.target.value })} required />
                  </div>
                  <div>
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" type="email" placeholder="your@email.com" value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} required />
                  </div>
                  <div>
                    <Label>Type of Consultation</Label>
                    <Select value={formData.consultationType} onValueChange={(v) => setFormData({ ...formData, consultationType: v })}>
                      <SelectTrigger><SelectValue placeholder="Select a service" /></SelectTrigger>
                      <SelectContent>
                        <SelectItem value="home">Home Vastu Consultation</SelectItem>
                        <SelectItem value="office">Office & Commercial Vastu</SelectItem>
                        <SelectItem value="online">Online / Remote Consultation</SelectItem>
                        <SelectItem value="numerology">Numerology & Vedic Astrology</SelectItem>
                        <SelectItem value="other">Other / Not Sure</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <Label htmlFor="message">Message</Label>
                    <Textarea id="message" placeholder="Tell us about your space and what you're looking for..." rows={4} value={formData.message} onChange={(e) => setFormData({ ...formData, message: e.target.value })} />
                  </div>
                  <Button type="submit" className="w-full bg-primary text-primary-foreground hover:bg-primary/90 font-semibold">
                    Send Enquiry
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Contact Info */}
            <div className="space-y-8">
              {/* WhatsApp CTA */}
              <Card className="border-accent/30 bg-accent/5">
                <CardContent className="p-8 text-center">
                  <MessageCircle className="w-12 h-12 text-accent mx-auto mb-4" />
                  <h3 className="font-serif text-xl font-bold text-foreground mb-2">Prefer WhatsApp?</h3>
                  <p className="text-sm text-muted-foreground mb-4">For a faster response, reach us directly on WhatsApp.</p>
                  <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
                    <Button className="bg-accent text-accent-foreground hover:bg-accent/90 font-semibold">
                      <MessageCircle className="w-4 h-4" />
                      Chat on WhatsApp
                    </Button>
                  </a>
                </CardContent>
              </Card>

              {/* Contact Details */}
              <div className="space-y-4">
                <a href="tel:+919999999999" className="flex items-center gap-3 p-4 rounded-lg bg-card border border-primary/10 hover:border-primary/30 transition-colors">
                  <Phone className="w-5 h-5 text-primary" />
                  <div>
                    <p className="text-sm font-semibold">Phone</p>
                    <p className="text-sm text-muted-foreground">+91 99999 99999</p>
                  </div>
                </a>
                <a href="mailto:hello@rimamridha.com" className="flex items-center gap-3 p-4 rounded-lg bg-card border border-primary/10 hover:border-primary/30 transition-colors">
                  <Mail className="w-5 h-5 text-primary" />
                  <div>
                    <p className="text-sm font-semibold">Email</p>
                    <p className="text-sm text-muted-foreground">hello@rimamridha.com</p>
                  </div>
                </a>
                <div className="flex items-center gap-3 p-4 rounded-lg bg-card border border-primary/10">
                  <MapPin className="w-5 h-5 text-primary" />
                  <div>
                    <p className="text-sm font-semibold">Location</p>
                    <p className="text-sm text-muted-foreground">India — Serving pan-India & Worldwide</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-4 rounded-lg bg-card border border-primary/10">
                  <Languages className="w-5 h-5 text-primary" />
                  <div>
                    <p className="text-sm font-semibold">Languages</p>
                    <p className="text-sm text-muted-foreground">English, Hindi, Bengali</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
