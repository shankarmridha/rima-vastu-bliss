import { useState } from "react";
import { X } from "lucide-react";
import { Button } from "@/components/ui/button";

const filters = ["All", "Residential", "Commercial", "Before & After"];

const images = [
  { id: 1, category: "Residential", label: "Living Room — Vastu-Aligned Design", aspect: "tall", img: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=600&fit=crop" },
  { id: 2, category: "Commercial", label: "Corporate Office Reception", aspect: "wide", img: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=600&fit=crop" },
  { id: 3, category: "Before & After", label: "Kitchen Transformation — Before", aspect: "square", img: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=600&fit=crop" },
  { id: 4, category: "Residential", label: "Master Bedroom — Energy Balanced", aspect: "wide", img: "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?w=600&fit=crop" },
  { id: 5, category: "Before & After", label: "Kitchen Transformation — After", aspect: "square", img: "https://images.unsplash.com/photo-1556909114-44e3e70034e2?w=600&fit=crop" },
  { id: 6, category: "Commercial", label: "Retail Store — Prosperity Zone", aspect: "tall", img: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=600&fit=crop" },
  { id: 7, category: "Residential", label: "Pooja Room — Sacred Space Design", aspect: "square", img: "https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=600&fit=crop" },
  { id: 8, category: "Commercial", label: "Restaurant Layout — Vastu Optimised", aspect: "wide", img: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=600&fit=crop" },
  { id: 9, category: "Residential", label: "Children's Study Room", aspect: "tall", img: "https://images.unsplash.com/photo-1524758631624-e2822e304c36?w=600&fit=crop" },
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
          <h1 className="font-serif text-4xl md:text-5xl font-bold text-foreground leading-tight mb-4">Gallery</h1>
          <p className="text-muted-foreground text-lg leading-relaxed">
            A glimpse into the spaces we've harmonised through Vedic Vastu principles.
          </p>
        </div>
      </section>

      <section className="pb-20">
        <div className="container mx-auto px-4">
          {/* Filters */}
          <div className="flex flex-wrap gap-2 justify-center mb-8">
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
                <div className={`rounded-lg overflow-hidden transition-all group-hover:shadow-lg ${
                  img.aspect === "tall" ? "h-80" : img.aspect === "wide" ? "h-48" : "h-60"
                }`}>
                  <img src={img.img} alt={img.label} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" loading="lazy" />
                </div>
                <p className="text-xs text-muted-foreground mt-1 px-1">{img.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {lightboxImage && (
        <div className="fixed inset-0 z-[100] bg-foreground/90 flex items-center justify-center p-4" onClick={() => setLightbox(null)}>
          <button className="absolute top-4 right-4 text-footer-light hover:text-primary transition-colors" onClick={() => setLightbox(null)}>
            <X className="w-8 h-8" />
          </button>
          <div className="bg-card rounded-xl overflow-hidden max-w-2xl w-full" onClick={(e) => e.stopPropagation()}>
            <img src={lightboxImage.img} alt={lightboxImage.label} className="w-full max-h-[70vh] object-contain" />
            <div className="p-4 text-center">
              <p className="font-serif font-semibold text-foreground">{lightboxImage.label}</p>
              <p className="text-sm text-muted-foreground mt-1">{lightboxImage.category}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default GalleryPage;
