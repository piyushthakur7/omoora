"use client";

import { useState, useCallback } from "react";
import Image from "next/image";
import { testimonialImages } from "@/data/testimonial-images";
import { cn } from "@/lib/utils";
import { Lightbox } from "./Lightbox";

const categories = ["All", ...Array.from(new Set(testimonialImages.map(img => img.category)))];

export function TestimonialGallery() {
  const [filter, setFilter] = useState("All");
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const filteredImages = filter === "All" 
    ? testimonialImages 
    : testimonialImages.filter(item => item.category === filter);

  const lightboxImages = filteredImages.map((item, index) => ({
    src: item.src,
    alt: `${item.category} testimonial image ${index + 1}`,
    category: item.category,
  }));

  const handlePrev = useCallback(() => {
    setLightboxIndex((prev) =>
      prev !== null ? (prev - 1 + filteredImages.length) % filteredImages.length : null
    );
  }, [filteredImages.length]);

  const handleNext = useCallback(() => {
    setLightboxIndex((prev) =>
      prev !== null ? (prev + 1) % filteredImages.length : null
    );
  }, [filteredImages.length]);

  return (
    <section className="mt-24">
      <div className="flex flex-col items-center">
        <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl text-center">
          Our Visual Journey
        </h2>
        <p className="mt-4 text-lg leading-8 text-muted-foreground text-center max-w-2xl">
          Explore the moments, creations, and highlights that define the Omoora experience.
        </p>

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
                "rounded-full px-5 py-2 text-sm font-medium transition-all duration-200 border",
                filter === category 
                  ? "bg-brand-600 text-white border-brand-600 shadow-lg scale-105" 
                  : "bg-white text-foreground border-brand-200 hover:bg-brand-50 hover:border-brand-300"
              )}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Masonry-like Grid */}
        <div className="mt-16 columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-4 space-y-4 w-full">
          {filteredImages.map((item, index) => (
            <div 
              key={`${item.src}-${index}`} 
              className="relative overflow-hidden rounded-2xl break-inside-avoid shadow-sm hover:shadow-xl transition-all duration-300 group cursor-pointer"
              onClick={() => setLightboxIndex(index)}
            >
              <Image
                src={item.src}
                alt={`${item.category} testimonial image`}
                width={600}
                height={800}
                className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-110"
                loading="lazy"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, (max-width: 1280px) 33vw, 25vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
                <span className="text-white/80 text-xs font-medium uppercase tracking-wider mb-1">{item.category}</span>
                <div className="h-0.5 w-8 bg-brand-400 group-hover:w-16 transition-all duration-500"></div>
              </div>
            </div>
          ))}
        </div>

        {filteredImages.length === 0 && (
          <div className="mt-16 text-center text-muted-foreground py-20 bg-brand-50/50 rounded-3xl w-full border border-dashed border-brand-200">
            <p className="text-lg">No images found in this category.</p>
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
    </section>
  );
}
