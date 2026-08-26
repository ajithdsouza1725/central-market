"use client";

import { useState, useCallback, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight, Maximize2 } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";

const galleryCategories = ["All", "Exterior", "Floor Plans", "Location"];

const galleryItems = [
  { id: 1, title: "Central Market Complex", category: "Exterior", image: "/images/hero.jpg" },
  { id: 2, title: "Building Panoramic View", category: "Exterior", image: "/images/building-wide.jpg" },
  { id: 3, title: "A Mangalore Classic — New Avatar", category: "Exterior", image: "/images/building-unveil.jpg" },
  { id: 4, title: "Shop Categories", category: "Exterior", image: "/images/shop-categories.jpg" },
  { id: 5, title: "Lower Ground & Ground Floor", category: "Floor Plans", image: "/images/floor-plan-ground.png" },
  { id: 6, title: "Upper Ground Floor", category: "Floor Plans", image: "/images/floor-plan-upper-ground.png" },
  { id: 7, title: "1st & 2nd Floor", category: "Floor Plans", image: "/images/floor-plan-1st-2nd.png" },
  { id: 8, title: "3rd Floor — Food Court", category: "Floor Plans", image: "/images/floor-plan-3rd.png" },
  { id: 9, title: "4th & Terrace — Parking", category: "Floor Plans", image: "/images/floor-plan-parking.jpg" },
  { id: 10, title: "Location Map — Mangaluru", category: "Location", image: "/images/location-map.png" },
];

export default function GalleryPage() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const filtered = activeCategory === "All" ? galleryItems : galleryItems.filter((i) => i.category === activeCategory);

  const goPrev = useCallback(() => {
    if (lightboxIndex !== null) setLightboxIndex(lightboxIndex === 0 ? filtered.length - 1 : lightboxIndex - 1);
  }, [lightboxIndex, filtered.length]);

  const goNext = useCallback(() => {
    if (lightboxIndex !== null) setLightboxIndex(lightboxIndex === filtered.length - 1 ? 0 : lightboxIndex + 1);
  }, [lightboxIndex, filtered.length]);

  // Keyboard navigation
  useEffect(() => {
    if (lightboxIndex === null) return;
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") goPrev();
      if (e.key === "ArrowRight") goNext();
      if (e.key === "Escape") setLightboxIndex(null);
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [lightboxIndex, goPrev, goNext]);

  return (
    <>
      {/* Header */}
      <section className="pt-28 pb-12 bg-warm relative">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 right-0 w-96 h-96 bg-teal/5 rounded-full" />
        </div>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
          <AnimatedSection>
            <p className="text-xs uppercase tracking-[0.2em] text-teal font-semibold font-heading mb-4">Gallery</p>
            <h1 className="text-4xl sm:text-5xl font-extrabold text-charcoal font-heading mb-4">
              If Seeing is Believing...{" "}
              <span className="text-gradient-teal">See It All</span>
            </h1>
            <p className="text-gray-600 max-w-2xl">
              Explore architectural renders, detailed floor plans, and
              location map of Central Market Complex.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Category Tabs */}
      <section className="sticky top-20 z-30 bg-white/95 backdrop-blur-md border-b border-gray-100 shadow-sm">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex flex-wrap gap-2">
            {galleryCategories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all ${
                  activeCategory === cat
                    ? "bg-teal text-white shadow-sm"
                    : "bg-gray-50 border border-gray-200 text-gray-500 hover:text-charcoal hover:border-teal/30"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-12 bg-gray-50 min-h-[60vh]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <AnimatePresence mode="popLayout">
              {filtered.map((item, i) => (
                <motion.div
                  key={item.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3, delay: i * 0.04 }}
                  className="group cursor-pointer"
                  onClick={() => setLightboxIndex(i)}
                >
                  <div className="card-lift rounded-2xl border border-gray-200 overflow-hidden bg-white">
                    <div className="relative aspect-4/3">
                      <Image
                        src={item.image}
                        alt={item.title}
                        fill
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors flex items-center justify-center">
                        <div className="opacity-0 group-hover:opacity-100 transition-opacity h-12 w-12 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center shadow-lg">
                          <Maximize2 className="h-5 w-5 text-charcoal" />
                        </div>
                      </div>
                    </div>
                    <div className="p-4">
                      <p className="text-sm font-semibold text-charcoal">{item.title}</p>
                      <p className="text-xs text-gray-400 mt-0.5">{item.category}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {lightboxIndex !== null && filtered[lightboxIndex] && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <div
              className="absolute inset-0 bg-charcoal/90 backdrop-blur-md"
              onClick={() => setLightboxIndex(null)}
            />
            <button
              onClick={() => setLightboxIndex(null)}
              className="absolute top-6 right-6 z-10 h-10 w-10 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-white/20 transition-colors"
            >
              <X className="h-5 w-5" />
            </button>
            <button
              onClick={goPrev}
              className="absolute left-4 sm:left-6 z-10 h-12 w-12 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-white/20 transition-colors"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>
            <button
              onClick={goNext}
              className="absolute right-4 sm:right-6 z-10 h-12 w-12 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-white/20 transition-colors"
            >
              <ChevronRight className="h-6 w-6" />
            </button>
            <motion.div
              key={filtered[lightboxIndex].id}
              className="relative z-10 w-full max-w-5xl mx-16 sm:mx-20"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
            >
              <div className="relative aspect-video rounded-2xl overflow-hidden border border-white/10 bg-black">
                <Image
                  src={filtered[lightboxIndex].image}
                  alt={filtered[lightboxIndex].title}
                  fill
                  sizes="100vw"
                  className="object-contain"
                  priority
                />
              </div>
              <div className="text-center mt-4">
                <p className="text-white font-bold font-heading text-lg">
                  {filtered[lightboxIndex].title}
                </p>
                <p className="text-sm text-white/60">
                  {filtered[lightboxIndex].category} · {lightboxIndex + 1} of{" "}
                  {filtered.length}
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
