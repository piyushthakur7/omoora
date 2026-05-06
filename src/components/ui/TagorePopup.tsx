"use client";

import { useState, useEffect } from "react";
import { X, ArrowRight } from "lucide-react";
import { buttonVariants } from "./Button";
import Image from "next/image";

export function TagorePopup() {
  const [showTagore, setShowTagore] = useState(false);

  useEffect(() => {
    // Show popup shortly after the page loads
    const timer = setTimeout(() => {
      setShowTagore(true);
    }, 1200);

    return () => clearTimeout(timer);
  }, []);

  if (!showTagore) return null;

  return (
    <div className="fixed inset-0 z-[120] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
      <div 
        className="relative w-full max-w-lg max-h-[90vh] overflow-y-auto bg-white rounded-2xl shadow-2xl animate-in zoom-in-95 fade-in duration-300 z-10"
        role="dialog"
        aria-modal="true"
      >
        <button
          onClick={() => setShowTagore(false)}
          className="absolute right-4 top-4 p-2 text-gray-500 hover:text-gray-800 hover:bg-gray-100 rounded-full transition-colors z-20 bg-white/80 backdrop-blur"
          aria-label="Close popup"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="w-full bg-[#f8f5f0] rounded-t-2xl overflow-hidden border-b border-[#e8dfcf]">
          {/* We use a placeholder image path. The user should upload the attached image to this path. */}
          <div className="relative w-full aspect-[3/4] sm:aspect-square">
            <Image 
              src="/images/site/popup-tagore.jpeg"
              alt="Rabindranath Tagore Birth Anniversary"
              fill
              className="object-cover"
              onError={(e) => {
                // If the user hasn't uploaded the image yet, show a fallback layout
                e.currentTarget.style.display = 'none';
              }}
            />
            {/* Fallback layout if the image isn't available */}
            <div className="absolute inset-0 flex flex-col items-center justify-center p-8 text-center bg-[#f8f5f0] text-[#5c4d3c] -z-10">
               <h3 className="text-xl font-playfair font-semibold mb-2 text-[#8c7355]">Celebrating</h3>
               <h2 className="text-3xl font-playfair font-bold uppercase mb-2">Rabindranath<br/>Tagore</h2>
               <p className="tracking-widest uppercase text-xs font-semibold mb-6">Birth Anniversary</p>
               <div className="w-16 h-1 bg-[#d1c8b8] mb-6"></div>
               <p className="font-playfair text-lg italic">Saturday 9th MAY</p>
            </div>
          </div>
        </div>

        <div className="p-6 sm:p-8 pt-6 bg-white">
          <div className="inline-block px-3 py-1 mb-4 text-xs font-semibold tracking-wider text-[#7a5c3a] uppercase bg-[#f5ebd8] rounded-full">
            Art Activity
          </div>
          
          <h2 className="text-2xl font-playfair font-bold text-gray-900 mb-3">
            Celebrate with Art! 🎨
          </h2>
          
          <p className="text-gray-700 mb-5 text-sm leading-relaxed">
            We are celebrating Rabindranath Tagore’s birthday with artworks inspired by his style. 
          </p>
          
          <div className="bg-[#fcfbf9] border border-[#e5e0d8] p-5 rounded-xl mb-6 shadow-sm">
            <p className="text-[#5c4d3c] font-semibold mb-3 text-sm flex items-center gap-2">
              <span className="shrink-0 mt-0.5">📌</span>
              <span>For this activity, children are requested to bring:</span>
            </p>
            <ul className="space-y-2 text-sm text-gray-700 font-medium ml-1">
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#8c7355]"></span> Black permanent marker
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#8c7355]"></span> Acrylic colours
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#8c7355]"></span> Palette knife
              </li>
            </ul>
          </div>

          <p className="text-center text-gray-600 font-medium italic mb-6">Thank you!</p>

          <div className="flex gap-4">
            <button 
              className={buttonVariants({ variant: "outline", className: "w-full border-[#d1c8b8] text-[#5c4d3c] hover:bg-[#f5ebd8]" })} 
              onClick={() => setShowTagore(false)}
            >
              Maybe Later
            </button>
            <a 
              href="https://wa.me/919971880693?text=Hi,%20I%20would%20like%20to%20register%20my%20child%20for%20the%20Tagore%20Art%20Activity." 
              target="_blank"
              rel="noopener noreferrer"
              className={buttonVariants({ variant: "default", className: "w-full group bg-[#8c7355] hover:bg-[#7a5c3a] text-white focus-visible:ring-[#8c7355]" })}
              onClick={() => setShowTagore(false)}
            >
              Contact Us
              <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
          
          <div className="mt-6 pt-4 border-t border-[#f5ebd8] text-center text-xs text-gray-500 space-y-1">
            <p className="font-semibold text-gray-700">Omoora Art &amp; Design Studio</p>
            <p>By IPAArtsAcademy | Since 2010</p>
            <p className="pt-1">Contact: 07042130555, 7042104555</p>
          </div>
        </div>
      </div>
    </div>
  );
}
