"use client";

import { useState, useEffect } from "react";
import { X, Calendar, MapPin, AlertTriangle, ArrowRight } from "lucide-react";
import { buttonVariants } from "./Button";
import Link from "next/link";

export function WomensHealingPopup() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // Show the popup shortly after the page loads
    const timer = setTimeout(() => {
      setIsOpen(true);
    }, 1500);

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
              <strong className="text-rose-900">Dr. Kavita Kabria</strong><br/>
              <span className="text-xs text-gray-600">(Psychologist & Inner Child Trauma Specialist)</span>
            </p>
          </div>

          <p className="text-sm font-semibold text-gray-900 mb-2">✨ You will learn to:</p>
          <ul className="space-y-2 mb-6 text-sm text-gray-700">
            <li className="flex items-start gap-2">
              <span className="text-rose-500 mt-0.5">•</span> Release emotional wounds
            </li>
            <li className="flex items-start gap-2">
              <span className="text-rose-500 mt-0.5">•</span> Understand triggers & patterns
            </li>
            <li className="flex items-start gap-2">
              <span className="text-rose-500 mt-0.5">•</span> Build self-worth
            </li>
            <li className="flex items-start gap-2">
              <span className="text-rose-500 mt-0.5">•</span> Set healthy boundaries
            </li>
            <li className="flex items-start gap-2">
              <span className="text-rose-500 mt-0.5">•</span> Create peaceful relationships
            </li>
          </ul>

          <p className="text-sm italic text-gray-600 mb-6 border-l-2 border-rose-200 pl-3">
            💫 Not just a session — a deep emotional reset.
          </p>

          <div className="grid grid-cols-2 gap-4 mb-6">
            <div className="bg-gray-50 border border-gray-100 p-3 rounded-lg flex flex-col items-center text-center">
              <Calendar className="w-5 h-5 text-rose-600 mb-2" />
              <p className="text-sm font-semibold text-gray-900">10th May</p>
              <p className="text-xs text-gray-500">11 AM – 2 PM</p>
            </div>
            <div className="bg-gray-50 border border-gray-100 p-3 rounded-lg flex flex-col items-center text-center">
              <MapPin className="w-5 h-5 text-rose-600 mb-2" />
              <p className="text-sm font-semibold text-gray-900">Gurgaon</p>
            </div>
          </div>

          <div className="flex items-center gap-3 text-rose-800 bg-rose-50 border border-rose-200 p-3 rounded-lg mb-6 text-sm">
            <AlertTriangle className="w-5 h-5 shrink-0 text-rose-600" />
            <p><strong>Only 20 seats</strong> (for deep work)</p>
          </div>

          <div className="text-center mb-6">
            <p className="font-semibold text-gray-900 mb-1">👉 DM "HEAL" or WhatsApp</p>
            <p className="text-brand-600 font-bold mb-1">9971880693 / 7042130555</p>
            <p className="text-sm text-gray-600">Don’t wait. Start healing ❤️</p>
          </div>

          <div className="flex gap-4">
            <button 
              className={buttonVariants({ variant: "outline", className: "w-full" })} 
              onClick={() => setIsOpen(false)}
            >
              Maybe Later
            </button>
            <a 
              href="https://wa.me/919971880693?text=HEAL" 
              target="_blank"
              rel="noopener noreferrer"
              className={buttonVariants({ variant: "default", className: "w-full group bg-rose-600 hover:bg-rose-700 focus-visible:ring-rose-600" })}
              onClick={() => setIsOpen(false)}
            >
              Book Now
              <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
