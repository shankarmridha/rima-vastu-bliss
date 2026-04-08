import { Award, Languages, Heart, Shield, GraduationCap, Globe } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import SectionDivider from "@/components/SectionDivider";

const credentials = [
  { icon: GraduationCap, title: "Architecture & Interior Design", desc: "Trained under the Government of India programme" },
  { icon: Award, title: "Vedic Vastu Shastra", desc: "Advanced study under renowned Vedic Vastu gurus" },
  { icon: Award, title: "Ayadi Vastu", desc: "Specialised training in the ancient Ayadi calculation system" },
  { icon: Award, title: "Modern Vastu", desc: "Contemporary applications of traditional Vastu principles" },
  { icon: Languages, title: "Multilingual", desc: "Fluent in English, Hindi, and Bengali" },
  { icon: Globe, title: "International Practice", desc: "Serving clients across India, UK, USA, UAE, and beyond" },
];

const AboutPage = () => {
  return (
    <div>
      {/* Hero */}
      <section className="py-20 bg-gradient-to-b from-primary/5 to-transparent">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="flex justify-center">
              <div className="w-72 h-96 rounded-2xl bg-primary/10 border-2 border-primary/20 flex items-center justify-center">
                <p className="text-muted-foreground text-sm">[Professional Photo of Rima Mridha]</p>
              </div>
            </div>
            <div>
              <p className="text-primary font-medium tracking-wider uppercase text-sm mb-4">About</p>
              <h1 className="font-serif text-4xl md:text-5xl font-bold text-foreground leading-tight mb-6">
                Meet Rima Mridha
              </h1>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  With over 15 years of dedicated practice, Rima Mridha is one of India's most sought-after Vedic Vastu consultants. 
                  Her unique approach blends the time-tested wisdom of three distinct schools of Vastu — Modern, Vedic, and Ayadi — 
                  to create holistic, practical solutions for homes and businesses.
                </p>
                <p>
                  Trained in Architecture and Interior Design through the Government of India, Rima brings a rare combination 
                  of technical expertise and spiritual insight to every consultation. She has studied under multiple revered gurus, 
                  absorbing the depth of each tradition to offer her clients truly comprehensive guidance.
                </p>
                <p>
                  Fluent in English, Hindi, and Bengali, Rima serves clients pan-India with in-person consultations and 
                  offers online consultations worldwide. Every client receives her signature promise: lifetime support.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Credentials */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-4">Credentials & Training</h2>
            <SectionDivider />
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {credentials.map(({ icon: Icon, title, desc }) => (
              <Card key={title} className="border-primary/10 bg-card">
                <CardContent className="p-6 flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-serif font-semibold mb-1">{title}</h3>
                    <p className="text-sm text-muted-foreground">{desc}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Philosophy */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4 max-w-3xl text-center">
          <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
            <Heart className="w-8 h-8 text-primary" />
          </div>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-6">My Philosophy</h2>
          <SectionDivider />
          <p className="text-muted-foreground text-lg leading-relaxed mb-6">
            "I believe that every space has a soul. My role is to listen to that space, understand its energy, 
            and guide it towards its highest potential. Vastu is not about superstition or fear — it is about 
            understanding the deep, scientific relationship between our built environment and our well-being."
          </p>
          <p className="text-muted-foreground leading-relaxed">
            Rima's approach is always practical, non-invasive, and respectful of each client's lifestyle, 
            budget, and beliefs. She focuses on remedies that work within existing structures, minimising the 
            need for major renovations while maximising positive impact.
          </p>
          <div className="mt-8 flex items-center justify-center gap-2 text-primary">
            <Shield className="w-5 h-5" />
            <span className="font-semibold text-sm">Lifetime Support Guaranteed for Every Client</span>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
