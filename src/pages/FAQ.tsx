import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const WHATSAPP_URL = "https://wa.me/919999999999?text=Hello%20Rima%2C%20I%20have%20a%20question%20about%20Vastu.";

const faqs = [
  { q: "What exactly is Vastu Shastra?", a: "Vastu Shastra is the ancient Indian science of architecture and spatial design. It is rooted in the Vedas and works by harmonising the five natural elements — earth, water, fire, air, and space — within your built environment. When these elements are balanced, the space promotes health, prosperity, harmony, and well-being for its occupants." },
  { q: "How is Vedic Vastu different from modern Vastu?", a: "Modern Vastu focuses primarily on directional guidelines and basic spatial rules. Vedic Vastu goes deeper, incorporating the energetic and spiritual dimensions of a space, including planetary influences and elemental energies. Ayadi Vastu adds mathematical calculations based on the occupant's birth details. Rima integrates all three approaches for comprehensive, personalised guidance." },
  { q: "Do I need to make structural changes to my home?", a: "In most cases, no. Rima specialises in non-invasive, practical remedies that work within your existing structure. These may include furniture rearrangement, colour adjustments, placement of specific elements, and energy-balancing techniques. Structural changes are recommended only in rare cases and always as a last resort." },
  { q: "How do online consultations work?", a: "Online consultations are conducted via video call (Zoom, Google Meet, or WhatsApp). You share your floor plan and photos of your space in advance. Rima analyses the layout, conducts the consultation via screen-sharing, and provides a detailed digital report with room-by-room recommendations. The quality and depth of the analysis is identical to an in-person visit." },
  { q: "How long does a typical consultation take?", a: "An in-person consultation for a standard residential property typically takes 2–4 hours, depending on the size and complexity of the space. Online consultations usually run 60–90 minutes. Rima ensures every question is addressed and every room is covered — she never rushes a consultation." },
  { q: "What does 'lifetime support' mean?", a: "Lifetime support means that once you've had a consultation with Rima, you can reach out to her at any time in the future with follow-up questions, implementation queries, or new concerns about your space — at no additional cost. It's her commitment to your ongoing well-being." },
  { q: "Can Vastu help with health and relationship issues?", a: "While Vastu is not a substitute for medical or psychological treatment, imbalanced spaces can contribute to stress, poor sleep, anxiety, and interpersonal tensions. By correcting the energy flow in your environment, many clients report significant improvements in health, sleep quality, and family harmony." },
  { q: "How much does a consultation cost?", a: "Consultation fees vary depending on the type of service (residential, commercial, online), the size of the property, and the complexity involved. Rima offers transparent pricing with no hidden charges. For a personalised quote, please reach out via WhatsApp or the contact form." },
  { q: "Do you offer Vastu for plots and new constructions?", a: "Yes, absolutely. In fact, consulting a Vastu expert before construction begins is ideal, as it allows for the most effective integration of Vastu principles into the design. Rima works closely with architects and builders to ensure your new space is perfectly aligned from the ground up." },
  { q: "Is Vastu related to any religion?", a: "While Vastu Shastra originates from the Vedic tradition, it is a science of spatial harmony that is not tied to any specific religion. Its principles are based on natural laws — direction, elements, and energy flow — and are applicable to people of all faiths and backgrounds." },
];

const FAQPage = () => {
  return (
    <div>
      <section className="py-20 bg-gradient-to-b from-primary/5 to-transparent">
        <div className="container mx-auto px-4 text-center max-w-3xl">
          <p className="text-primary font-medium tracking-wider uppercase text-sm mb-4">FAQ</p>
          <h1 className="font-serif text-4xl md:text-5xl font-bold text-foreground leading-tight mb-6">
            Frequently Asked Questions
          </h1>
          <p className="text-muted-foreground text-lg leading-relaxed">
            Everything you need to know about Vastu and working with Rima.
          </p>
        </div>
      </section>

      <section className="pb-20">
        <div className="container mx-auto px-4 max-w-3xl">
          <Accordion type="single" collapsible className="space-y-3">
            {faqs.map((faq, i) => (
              <AccordionItem key={i} value={`faq-${i}`} className="bg-card border border-primary/10 rounded-lg px-6">
                <AccordionTrigger className="text-left font-serif font-semibold text-foreground hover:no-underline">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>

          <div className="text-center mt-12">
            <p className="text-muted-foreground mb-4">Still have questions?</p>
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
              <Button className="bg-accent text-accent-foreground hover:bg-accent/90 font-semibold">
                <MessageCircle className="w-4 h-4" />
                Ask on WhatsApp
              </Button>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FAQPage;
