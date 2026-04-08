import { MessageCircle, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import SectionDivider from "@/components/SectionDivider";

const WHATSAPP_URL = "https://wa.me/919999999999?text=Hello%20Rima%2C%20I%20saw%20your%20case%20studies%20and%20would%20like%20to%20discuss%20my%20project.";

const caseStudies = [
  {
    type: "3BHK Residential, Pune",
    challenge: "The family experienced persistent health issues and financial stagnation despite living in a well-maintained apartment. The main entrance faced a challenging direction, and the kitchen placement conflicted with elemental principles.",
    intervention: "Rima conducted a thorough Vedic Vastu analysis and recommended non-structural remedies: strategic placement of elemental corrections, colour adjustments in key rooms, and energy-balancing techniques for the entrance zone.",
    outcome: "Within three months, the family reported significant improvement in health and a noticeable upturn in financial opportunities. The home felt lighter and more welcoming.",
  },
  {
    type: "Corporate Office, Bangalore",
    challenge: "A mid-sized IT company was struggling with high employee turnover, low morale, and inconsistent revenue despite a prime location and talented team.",
    intervention: "After a comprehensive commercial Vastu audit, Rima recommended repositioning the CEO's cabin, adjusting the accounts department's orientation, and introducing specific remedies in the reception and conference areas.",
    outcome: "The company saw a 40% reduction in employee turnover within six months. Revenue stabilised, and the management reported a palpable improvement in workplace energy and collaboration.",
  },
  {
    type: "Villa, Dubai (Online Consultation)",
    challenge: "An NRI family in Dubai wanted Vastu guidance for their new villa but couldn't find a qualified consultant locally. They were concerned about the master bedroom and children's study room placements.",
    intervention: "Through a detailed online consultation with floor plans and video walkthrough, Rima identified key issues and provided a comprehensive digital report with room-by-room recommendations and easy-to-implement remedies.",
    outcome: "The family implemented the changes during their fit-out phase. They reported better sleep quality, improved focus for their children's studies, and an overall sense of calm throughout the villa.",
  },
];

const CaseStudiesPage = () => {
  return (
    <div>
      <section className="py-20 bg-gradient-to-b from-primary/5 to-transparent">
        <div className="container mx-auto px-4 text-center max-w-3xl">
          <p className="text-primary font-medium tracking-wider uppercase text-sm mb-4">Real Results</p>
          <h1 className="font-serif text-4xl md:text-5xl font-bold text-foreground leading-tight mb-6">Case Studies</h1>
          <p className="text-muted-foreground text-lg leading-relaxed">
            Explore how Vastu interventions have transformed spaces and lives across residential and commercial projects.
          </p>
        </div>
      </section>

      <section className="pb-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-8">
            {caseStudies.map((cs) => (
              <Card key={cs.type} className="border-primary/10 bg-card overflow-hidden flex flex-col">
                {/* Image placeholder */}
                <div className="bg-primary/5 h-48 flex items-center justify-center">
                  <p className="text-muted-foreground text-sm">[Project Photo — {cs.type}]</p>
                </div>
                <CardContent className="p-6 flex-1 flex flex-col">
                  <h3 className="font-serif text-xl font-bold text-foreground mb-4">{cs.type}</h3>
                  
                  <div className="space-y-4 flex-1">
                    <div>
                      <p className="text-xs font-semibold text-primary uppercase tracking-wider mb-1">Challenge</p>
                      <p className="text-sm text-muted-foreground leading-relaxed">{cs.challenge}</p>
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-secondary uppercase tracking-wider mb-1">Vastu Intervention</p>
                      <p className="text-sm text-muted-foreground leading-relaxed">{cs.intervention}</p>
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-accent uppercase tracking-wider mb-1">Outcome</p>
                      <p className="text-sm text-muted-foreground leading-relaxed">{cs.outcome}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <SectionDivider />

          <div className="text-center">
            <h2 className="font-serif text-2xl md:text-3xl font-bold text-foreground mb-4">
              Want results like these? Let's talk.
            </h2>
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
              <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 font-semibold">
                <MessageCircle className="w-5 h-5" />
                Discuss Your Project
              </Button>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CaseStudiesPage;
