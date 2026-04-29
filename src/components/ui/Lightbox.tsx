"use client";

import { useEffect, useCallback } from "react";
import Image from "next/image";

interface LightboxProps {
  images: { src: string; alt?: string; category?: string }[];
  currentIndex: number;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
}

export function Lightbox({ images, currentIndex, onClose, onPrev, onNext }: LightboxProps) {
  const current = images[currentIndex];

  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") onPrev();
      if (e.key === "ArrowRight") onNext();
    },
    [onClose, onPrev, onNext]
  );

  useEffect(() => {
    document.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [handleKeyDown]);

  if (!current) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center"
      onClick={onClose}
    >
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/90 backdrop-blur-sm animate-fade-in" />

      {/* Close button */}
      <button
        onClick={onClose}
        className="absolute top-4 right-4 z-[110] text-white/70 hover:text-white transition-colors p-2 rounded-full hover:bg-white/10"
        aria-label="Close lightbox"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <line x1="18" x2="6" y1="6" y2="18" />
          <line x1="6" x2="18" y1="6" y2="18" />
        </svg>
      </button>

      {/* Counter */}
      <div className="absolute top-4 left-4 z-[110] text-white/60 text-sm font-medium">
        {currentIndex + 1} / {images.length}
      </div>

      {/* Category badge */}
      {current.category && (
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-[110] text-white/70 text-xs font-medium uppercase tracking-widest bg-white/10 backdrop-blur-sm px-4 py-1.5 rounded-full">
          {current.category}
        </div>
      )}

      {/* Previous button */}
      {images.length > 1 && (
        <button
          onClick={(e) => {
            e.stopPropagation();
            onPrev();
          }}
          className="absolute left-3 sm:left-6 top-1/2 -translate-y-1/2 z-[110] text-white/60 hover:text-white transition-all p-2 sm:p-3 rounded-full hover:bg-white/10 bg-black/30 backdrop-blur-sm"
          aria-label="Previous image"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="15 18 9 12 15 6" />
          </svg>
        </button>
      )}

      {/* Next button */}
      {images.length > 1 && (
        <button
          onClick={(e) => {
            e.stopPropagation();
            onNext();
          }}
          className="absolute right-3 sm:right-6 top-1/2 -translate-y-1/2 z-[110] text-white/60 hover:text-white transition-all p-2 sm:p-3 rounded-full hover:bg-white/10 bg-black/30 backdrop-blur-sm"
          aria-label="Next image"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="9 18 15 12 9 6" />
          </svg>
        </button>
      )}

      {/* Image */}
      <div
        className="relative z-[105] max-w-[90vw] max-h-[85vh] flex items-center justify-center animate-scale-in"
        onClick={(e) => e.stopPropagation()}
      >
        <Image
          src={current.src}
          alt={current.alt || "Gallery image"}
          width={1200}
          height={900}
          className="max-w-full max-h-[85vh] w-auto h-auto object-contain rounded-lg shadow-2xl"
          sizes="90vw"
          priority
        />
      </div>
    </div>
  );
}
