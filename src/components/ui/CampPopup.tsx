"use client";

import { useState, useEffect } from "react";
import { X, Calendar, MapPin, AlertTriangle, ArrowRight } from "lucide-react";
import { buttonVariants } from "./Button";
import Link from "next/link";

export function CampPopup() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // Show the popup shortly after the page loads
    const timer = setTimeout(() => {
      setIsOpen(true);
    }, 1200);

    return () => clearTimeout(timer);
  }, []);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
      {/* Modal Container */}
      <div 
        className="relative w-full max-w-lg max-h-[90vh] overflow-y-auto bg-white rounded-2xl shadow-2xl animate-in zoom-in-95 fade-in duration-300"
        role="dialog"
        aria-modal="true"
      >
        <button
          onClick={() => setIsOpen(false)}
          className="absolute right-4 top-4 p-2 text-gray-400 hover:text-gray-700 hover:bg-gray-100 rounded-full transition-colors z-10"
          aria-label="Close popup"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="p-8">
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

          <p className="text-sm italic text-gray-600 mb-6 border-l-2 border-brand-200 pl-3">
            💫 This is not just a consultation — it’s a step towards a healthier, balanced life.
          </p>

          <div className="grid grid-cols-2 gap-4 mb-6">
            <div className="bg-gray-50 border border-gray-100 p-3 rounded-lg flex flex-col items-center text-center">
              <Calendar className="w-5 h-5 text-brand-600 mb-2" />
              <p className="text-sm font-semibold text-gray-900">24th May 2026</p>
              <p className="text-xs text-gray-500">(Sunday)</p>
            </div>
            <div className="bg-gray-50 border border-gray-100 p-3 rounded-lg flex flex-col items-center text-center">
              <MapPin className="w-5 h-5 text-brand-600 mb-2" />
              <p className="text-sm font-semibold text-gray-900">OMOORA</p>
              <p className="text-xs text-gray-500">New Delhi</p>
            </div>
          </div>

          <div className="flex items-center gap-3 text-amber-800 bg-amber-50 border border-amber-200 p-3 rounded-lg mb-6 text-sm">
            <AlertTriangle className="w-5 h-5 shrink-0 text-amber-600" />
            <p><strong>Limited slots available</strong><br/><span className="text-xs opacity-90">Pre-booking mandatory</span></p>
          </div>

          <div className="text-center mb-6">
            <p className="font-semibold text-gray-900 mb-1">👉 DM now or call to reserve your slot</p>
            <p className="text-sm text-gray-600">Don’t ignore your body anymore. Start healing from within 🌿✨</p>
          </div>

          <div className="flex gap-4">
            <button 
              className={buttonVariants({ variant: "outline", className: "w-full" })} 
              onClick={() => setIsOpen(false)}
            >
              Maybe Later
            </button>
            <Link 
              href="/#contact" 
              className={buttonVariants({ variant: "default", className: "w-full group" })}
              onClick={() => setIsOpen(false)}
            >
              Book Now
              <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
