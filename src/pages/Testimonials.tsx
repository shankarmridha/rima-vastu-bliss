import { Star } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const testimonials = [
  { name: "Ananya S.", city: "Mumbai", stars: 5, type: "Residential", quote: "Rima Ma'am's guidance transformed our home. Within weeks of implementing her suggestions, we noticed a remarkable shift in the energy of our space. The constant tension in our household dissolved, and we started experiencing more harmony in our relationships. Her approach is both scientific and deeply intuitive.", avatar: "https://images.unsplash.com/photo-1594744803329-e58b31de8bf5?w=100&h=100&fit=crop&crop=face" },
  { name: "Rajesh K.", city: "Bangalore", stars: 5, type: "Commercial", quote: "As a sceptic, I was amazed by the results. Our office productivity improved noticeably after Rima Ma'am's commercial Vastu consultation. She identified issues we'd never have thought of and provided practical solutions that didn't disrupt our operations. Our revenue has grown consistently since.", avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face" },
  { name: "Priya M.", city: "London, UK", stars: 5, type: "Residential", quote: "Even though we consulted online from the UK, Rima Ma'am's analysis was incredibly thorough. She provided practical solutions that didn't require any structural changes. The best part is her lifetime support — we still reach out with questions, and she always responds warmly.", avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=100&h=100&fit=crop&crop=face" },
  { name: "Suresh & Meena T.", city: "Chennai", stars: 5, type: "Residential", quote: "We consulted Rima Ma'am before purchasing our new flat, and it was the best decision we made. She helped us choose between three shortlisted properties, explaining the Vastu merits of each. Our new home feels perfect, and we've had nothing but positive experiences since moving in.", avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&h=100&fit=crop&crop=face" },
  { name: "Fatima H.", city: "Dubai, UAE", stars: 5, type: "Commercial", quote: "Rima Ma'am helped us set up our new restaurant in Dubai with Vastu-aligned design. From the kitchen placement to the cash counter direction, every detail was considered. The restaurant has been thriving since opening day, and guests often comment on how warm and inviting the space feels.", avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=100&h=100&fit=crop&crop=face" },
  { name: "Amit G.", city: "Delhi", stars: 5, type: "Residential", quote: "After years of sleep issues and general unease in our bedroom, Rima Ma'am's consultation was a revelation. Simple changes — rearranging furniture, adjusting colours, and a few Vastu remedies — made an extraordinary difference. I now sleep soundly and wake up energised. Truly life-changing.", avatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=100&h=100&fit=crop&crop=face" },
];

const TestimonialsPage = () => {
  return (
    <div>
      <section className="py-20 bg-gradient-to-b from-primary/5 to-transparent">
        <div className="container mx-auto px-4 text-center max-w-3xl">
          <p className="text-primary font-medium tracking-wider uppercase text-sm mb-4">Testimonials</p>
          <h1 className="font-serif text-4xl md:text-5xl font-bold text-foreground leading-tight mb-4">Client Voices</h1>
          <p className="text-muted-foreground text-lg leading-relaxed italic">
            "Words from those whose spaces — and lives — have transformed."
          </p>
        </div>
      </section>

      <section className="pb-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.map((t) => (
              <Card key={t.name} className="border-primary/10 bg-card">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex gap-1">
                      {[...Array(t.stars)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-accent text-accent" />
                      ))}
                    </div>
                    <span className="text-xs font-medium text-primary bg-primary/10 px-2 py-1 rounded-full">{t.type}</span>
                  </div>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-4 italic">"{t.quote}"</p>
                  <div className="border-t border-border pt-4 flex items-center gap-3">
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
        </div>
      </section>
    </div>
  );
};

export default TestimonialsPage;
