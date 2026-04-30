"use client";

import { useState, useCallback } from "react";
import Image from "next/image";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { gallery } from "@/data/gallery";
import { cn } from "@/lib/utils";
import { Lightbox } from "@/components/ui/Lightbox";

const categories = [
  "All",
  "Director's Work",
  "Exhibition Highlights",
  "Mandala Art",
  "Omoora Creations",
  "Student Creations",
  "Workshops & Events",
  "Social Feedbacks"
];

export default function GalleryPage() {
  const [filter, setFilter] = useState("All");
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const filteredGallery = filter === "All" 
    ? gallery 
    : gallery.filter(item => item.category === filter);

  const lightboxImages = filteredGallery.map((item) => ({
    src: item.src,
    alt: item.alt,
    category: item.category,
  }));

  const handlePrev = useCallback(() => {
    setLightboxIndex((prev) =>
      prev !== null ? (prev - 1 + filteredGallery.length) % filteredGallery.length : null
    );
  }, [filteredGallery.length]);

  const handleNext = useCallback(() => {
    setLightboxIndex((prev) =>
      prev !== null ? (prev + 1) % filteredGallery.length : null
    );
  }, [filteredGallery.length]);

  return (
    <div className="bg-white min-h-screen py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <SectionHeading 
          title="Our Visual Journey" 
          subtitle="Explore the moments, creations, and highlights that define the Omoora experience." 
        />
        
        {/* Filters */}
        <div className="mt-12 flex flex-wrap justify-center gap-3">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => {
                setFilter(category);
                setLightboxIndex(null);
              }}
              className={cn(
                "rounded-full px-5 py-2.5 text-sm font-semibold transition-all duration-300 border",
                filter === category 
                  ? "bg-brand-700 text-white border-brand-700 shadow-lg scale-105" 
                  : "bg-white text-foreground border-brand-100 hover:border-brand-300 hover:bg-brand-50"
              )}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Masonry Grid */}
        <div className="mt-16 columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
          {filteredGallery.map((item, index) => (
            <div
              key={item.id}
              className="relative overflow-hidden rounded-xl break-inside-avoid shadow-sm hover:shadow-md transition-shadow group cursor-pointer"
              onClick={() => setLightboxIndex(index)}
            >
              <Image
                src={item.src}
                alt={item.alt}
                width={800}
                height={item.id % 2 === 0 ? 1200 : 800}
                className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105"
                loading="lazy"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                <span className="p-4 text-white font-medium text-sm">{item.category}</span>
              </div>
            </div>
          ))}
        </div>
        
        {filteredGallery.length === 0 && (
          <div className="mt-16 text-center text-muted-foreground">
            No images found for this category.
          </div>
        )}
      </div>

      {/* Lightbox */}
      {lightboxIndex !== null && (
        <Lightbox
          images={lightboxImages}
          currentIndex={lightboxIndex}
          onClose={() => setLightboxIndex(null)}
          onPrev={handlePrev}
          onNext={handleNext}
        />
      )}
    </div>
  );
}
