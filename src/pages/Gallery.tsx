import { useState } from "react";
import { X } from "lucide-react";
import { Button } from "@/components/ui/button";

const filters = ["All", "Residential", "Commercial", "Before & After"];

const images = [
  { id: 1, category: "Residential", label: "Living Room — Vastu-Aligned Design", aspect: "tall" },
  { id: 2, category: "Commercial", label: "Corporate Office Reception", aspect: "wide" },
  { id: 3, category: "Before & After", label: "Kitchen Transformation — Before", aspect: "square" },
  { id: 4, category: "Residential", label: "Master Bedroom — Energy Balanced", aspect: "wide" },
  { id: 5, category: "Before & After", label: "Kitchen Transformation — After", aspect: "square" },
  { id: 6, category: "Commercial", label: "Retail Store — Prosperity Zone", aspect: "tall" },
  { id: 7, category: "Residential", label: "Pooja Room — Sacred Space Design", aspect: "square" },
  { id: 8, category: "Commercial", label: "Restaurant Layout — Vastu Optimised", aspect: "wide" },
  { id: 9, category: "Residential", label: "Children's Study Room", aspect: "tall" },
];

const GalleryPage = () => {
  const [activeFilter, setActiveFilter] = useState("All");
  const [lightbox, setLightbox] = useState<number | null>(null);

  const filtered = activeFilter === "All" ? images : images.filter((img) => img.category === activeFilter);
  const lightboxImage = images.find((img) => img.id === lightbox);

  return (
    <div>
      <section className="py-20 bg-gradient-to-b from-primary/5 to-transparent">
        <div className="container mx-auto px-4 text-center max-w-3xl">
          <p className="text-primary font-medium tracking-wider uppercase text-sm mb-4">Portfolio</p>
          <h1 className="font-serif text-4xl md:text-5xl font-bold text-foreground leading-tight mb-6">Gallery</h1>
          <p className="text-muted-foreground text-lg leading-relaxed">
            A glimpse into the spaces we've harmonised through Vedic Vastu principles.
          </p>
        </div>
      </section>

      <section className="pb-20">
        <div className="container mx-auto px-4">
          {/* Filters */}
          <div className="flex flex-wrap gap-2 justify-center mb-10">
            {filters.map((f) => (
              <Button
                key={f}
                variant={activeFilter === f ? "default" : "outline"}
                size="sm"
                onClick={() => setActiveFilter(f)}
                className={activeFilter === f ? "bg-primary text-primary-foreground" : ""}
              >
                {f}
              </Button>
            ))}
          </div>

          {/* Masonry Grid */}
          <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
            {filtered.map((img) => (
              <div
                key={img.id}
                className="break-inside-avoid cursor-pointer group"
                onClick={() => setLightbox(img.id)}
              >
                <div
                  className={`bg-primary/5 border border-primary/10 rounded-lg overflow-hidden flex items-center justify-center transition-all group-hover:shadow-lg group-hover:border-primary/30 ${
                    img.aspect === "tall" ? "h-80" : img.aspect === "wide" ? "h-48" : "h-60"
                  }`}
                >
                  <div className="text-center p-4">
                    <p className="text-muted-foreground text-sm">[Photo]</p>
                    <p className="text-xs text-muted-foreground mt-1">{img.label}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {lightboxImage && (
        <div className="fixed inset-0 z-[100] bg-foreground/90 flex items-center justify-center p-4" onClick={() => setLightbox(null)}>
          <button className="absolute top-4 right-4 text-primary-foreground hover:text-primary transition-colors" onClick={() => setLightbox(null)}>
            <X className="w-8 h-8" />
          </button>
          <div className="bg-card rounded-xl p-8 max-w-2xl w-full text-center" onClick={(e) => e.stopPropagation()}>
            <div className="bg-primary/5 h-80 rounded-lg flex items-center justify-center mb-4">
              <p className="text-muted-foreground">[Full-size Photo]</p>
            </div>
            <p className="font-serif font-semibold text-foreground">{lightboxImage.label}</p>
            <p className="text-sm text-muted-foreground mt-1">{lightboxImage.category}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default GalleryPage;
