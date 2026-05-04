"use client";

import { useState, useEffect } from "react";
import { X, Calendar, MapPin, AlertTriangle, ArrowRight } from "lucide-react";
import { buttonVariants } from "./Button";
import Link from "next/link";
import Image from "next/image";

export function DualWorkshopPopup() {
  const [showWomens, setShowWomens] = useState(false);
  const [showCamp, setShowCamp] = useState(false);

  useEffect(() => {
    // Show both popups shortly after the page loads
    const timer = setTimeout(() => {
      setShowWomens(true);
      setShowCamp(true);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  if (!showWomens && !showCamp) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
      
      {/* Camp Popup (Back Card) */}
      {showCamp && (
        <div 
          className={`absolute w-full max-w-lg max-h-[90vh] overflow-y-auto bg-white rounded-2xl shadow-2xl transition-all duration-500
            ${showWomens 
              ? '-translate-x-2 -translate-y-4 scale-95 opacity-60 md:-translate-x-8 md:-translate-y-6 md:rotate-[-3deg]' 
              : 'translate-x-0 translate-y-0 scale-100 opacity-100 rotate-0 relative z-20 animate-in zoom-in-95'}
          `}
          role="dialog"
          aria-modal="true"
        >
          {(!showWomens) && (
            <button
              onClick={() => setShowCamp(false)}
              className="absolute right-4 top-4 p-2 text-gray-400 hover:text-gray-700 hover:bg-gray-100 rounded-full transition-colors z-10"
              aria-label="Close popup"
            >
              <X className="w-5 h-5" />
            </button>
          )}

          <div className="w-full bg-white rounded-t-2xl overflow-hidden border-b border-gray-100">
            <Image 
              src="/images/site/popup-camp.jpeg"
              alt="Gut Healing Consultation Camp"
              width={1200}
              height={1200}
              className="w-full h-auto"
            />
          </div>

          <div className="p-6 sm:p-8 pt-6">
            <div className="inline-block px-3 py-1 mb-4 text-xs font-semibold tracking-wider text-brand-700 uppercase bg-brand-100 rounded-full">
              Special Camp
            </div>
            
            <h2 className="text-2xl font-playfair font-bold text-gray-900 mb-3">
              Struggling with gut issues that just don’t go away?
            </h2>
            
            <p className="text-gray-600 mb-5 text-sm leading-relaxed">
              Bloating, acidity, low immunity, allergies… These are not random — they are signs your gut needs healing.
            </p>
            
            <div className="bg-brand-50 border border-brand-100 p-4 rounded-xl mb-6">
              <p className="text-brand-800 font-medium mb-2 text-sm flex items-start gap-2">
                <span className="shrink-0 mt-0.5">✨</span>
                <span>It’s time to treat the root cause, not just the symptoms.</span>
              </p>
              <p className="text-sm text-gray-700 leading-relaxed">
                We’re bringing a special <strong>Gut Healing Consultation Camp</strong> at OMOORA with<br/>
                <strong className="text-brand-900">Dr. Shubham Ajmani</strong> (Ayurveda Gut Specialist)
              </p>
            </div>

            <ul className="space-y-3 mb-6 text-sm text-gray-700 font-medium">
              <li className="flex items-center gap-2">
                <span className="text-green-600">🌿</span> Heal your gut naturally
              </li>
              <li className="flex items-center gap-2">
                <span className="text-green-600">🌿</span> Restore your gut biome
              </li>
              <li className="flex items-center gap-2">
                <span className="text-green-600">🌿</span> Improve digestion & immunity
              </li>
              <li className="flex items-center gap-2">
                <span className="text-green-600">🌿</span> Get long-term relief
              </li>
            </ul>

            <div className="grid grid-cols-2 gap-4 mb-6">
              <div className="bg-gray-50 border border-gray-100 p-3 rounded-lg flex flex-col items-center text-center">
                <Calendar className="w-5 h-5 text-brand-600 mb-2" />
                <p className="text-sm font-semibold text-gray-900">24th May 2026</p>
              </div>
              <div className="bg-gray-50 border border-gray-100 p-3 rounded-lg flex flex-col items-center text-center">
                <MapPin className="w-5 h-5 text-brand-600 mb-2" />
                <p className="text-sm font-semibold text-gray-900">OMOORA</p>
              </div>
            </div>

            <div className="flex gap-4">
              <button 
                className={buttonVariants({ variant: "outline", className: "w-full" })} 
                onClick={() => setShowCamp(false)}
                disabled={showWomens}
              >
                Maybe Later
              </button>
              <Link 
                href="/#contact" 
                className={buttonVariants({ variant: "default", className: "w-full group" })}
                onClick={() => setShowCamp(false)}
                tabIndex={showWomens ? -1 : 0}
              >
                Book Now
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>

            <div className="mt-6 pt-4 border-t border-gray-100 text-center text-xs text-gray-500 space-y-1">
              <p className="font-semibold text-gray-700">Omoora Art & Design Studio</p>
              <p>By IPAArtsAcademy | Since 2010</p>
              <p className="pt-1">Contact: 07042130555, 7042104555</p>
            </div>
          </div>
          
          {/* Overlay to click and bring to front if it's in the background */}
          {showWomens && (
            <div 
              className="absolute inset-0 z-50 cursor-pointer" 
              onClick={() => {
                // Swap them: close womens to reveal this one
                setShowWomens(false);
              }}
              title="Click to view"
            />
          )}
        </div>
      )}

      {/* Womens Healing Popup (Front Card) */}
      {showWomens && (
        <div 
          className="relative w-full max-w-lg max-h-[90vh] overflow-y-auto bg-white rounded-2xl shadow-2xl animate-in zoom-in-95 fade-in duration-300 z-10"
          role="dialog"
          aria-modal="true"
        >
          <button
            onClick={() => setShowWomens(false)}
            className="absolute right-4 top-4 p-2 text-gray-400 hover:text-gray-700 hover:bg-gray-100 rounded-full transition-colors z-10"
            aria-label="Close popup"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="w-full bg-white rounded-t-2xl overflow-hidden border-b border-rose-50">
            <Image 
              src="/images/site/popup-womens.jpeg"
              alt="Women's Healing Workshop"
              width={1200}
              height={1200}
              className="w-full h-auto"
            />
          </div>

          <div className="p-6 sm:p-8 pt-6">
            <div className="inline-block px-3 py-1 mb-4 text-xs font-semibold tracking-wider text-rose-700 uppercase bg-rose-100 rounded-full">
              Special Workshop
            </div>
            
            <h2 className="text-2xl font-playfair font-bold text-gray-900 mb-3">
              You’re not “too much.”
            </h2>
            
            <p className="text-gray-600 mb-2 text-sm leading-relaxed">
              You just never learned how to process what you feel. And it shows up as:
            </p>
            <ul className="list-disc list-inside text-gray-600 mb-5 text-sm ml-2">
              <li>Overthinking</li>
              <li>Emotional exhaustion</li>
              <li>Repeating unhealthy relationship patterns</li>
            </ul>
            
            <div className="bg-rose-50 border border-rose-100 p-4 rounded-xl mb-6">
              <p className="text-rose-800 font-medium mb-2 text-sm flex items-start gap-2">
                <span className="shrink-0 mt-0.5">✨</span>
                <span>This is exactly what we’ll work on.</span>
              </p>
              <p className="text-sm text-gray-700 leading-relaxed mt-2">
                <strong>Women’s Healing Workshop</strong> with<br/>
                <strong className="text-rose-900">Dr. Kavita Kabria</strong>
              </p>
            </div>

            <p className="text-sm font-semibold text-gray-900 mb-2">✨ You will learn to:</p>
            <ul className="space-y-2 mb-6 text-sm text-gray-700">
              <li className="flex items-start gap-2">
                <span className="text-rose-500 mt-0.5">•</span> Release emotional wounds & build self-worth
              </li>
              <li className="flex items-start gap-2">
                <span className="text-rose-500 mt-0.5">•</span> Understand triggers & set boundaries
              </li>
            </ul>

            <div className="grid grid-cols-2 gap-4 mb-6">
              <div className="bg-gray-50 border border-gray-100 p-3 rounded-lg flex flex-col items-center text-center">
                <Calendar className="w-5 h-5 text-rose-600 mb-2" />
                <p className="text-sm font-semibold text-gray-900">10th May</p>
              </div>
              <div className="bg-gray-50 border border-gray-100 p-3 rounded-lg flex flex-col items-center text-center">
                <MapPin className="w-5 h-5 text-rose-600 mb-2" />
                <p className="text-sm font-semibold text-gray-900">Gurgaon</p>
              </div>
            </div>

            <div className="flex gap-4">
              <button 
                className={buttonVariants({ variant: "outline", className: "w-full" })} 
                onClick={() => setShowWomens(false)}
              >
                Maybe Later
              </button>
              <a 
                href="https://wa.me/919971880693?text=HEAL" 
                target="_blank"
                rel="noopener noreferrer"
                className={buttonVariants({ variant: "default", className: "w-full group bg-rose-600 hover:bg-rose-700 focus-visible:ring-rose-600" })}
                onClick={() => setShowWomens(false)}
              >
                Book Now
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>

            <div className="mt-6 pt-4 border-t border-rose-100 text-center text-xs text-gray-500 space-y-1">
              <p className="font-semibold text-gray-700">Omoora Art & Design Studio</p>
              <p>By IPAArtsAcademy | Since 2010</p>
              <p className="pt-1">Contact: 07042130555, 7042104555</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
