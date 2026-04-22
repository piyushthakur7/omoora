"use client";

import { useState } from "react";
import Image from "next/image";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { gallery } from "@/data/gallery";
import { cn } from "@/lib/utils";

const categories = ["All", "Art", "Workshops", "Events"];

export default function GalleryPage() {
  const [filter, setFilter] = useState("All");

  const filteredGallery = filter === "All" 
    ? gallery 
    : gallery.filter(item => item.category === filter);

  return (
    <div className="bg-white min-h-screen py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <SectionHeading 
          title="Our Gallery" 
          subtitle="Explore the beautiful artwork and moments captured at Omoora Studio." 
        />
        
        {/* Filters */}
        <div className="mt-12 flex flex-wrap justify-center gap-4">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setFilter(category)}
              className={cn(
                "rounded-full px-6 py-2 text-sm font-medium transition-colors border",
                filter === category 
                  ? "bg-brand-600 text-white border-brand-600 shadow-md" 
                  : "bg-white text-foreground border-brand-200 hover:bg-brand-50"
              )}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Masonry Grid */}
        <div className="mt-16 columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
          {filteredGallery.map((item) => (
            <div key={item.id} className="relative overflow-hidden rounded-xl break-inside-avoid shadow-sm hover:shadow-md transition-shadow group">
              <Image
                src={item.src}
                alt={item.alt}
                width={800}
                height={item.id % 2 === 0 ? 1200 : 800} // Simulate varying heights for masonry
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
    </div>
  );
}
