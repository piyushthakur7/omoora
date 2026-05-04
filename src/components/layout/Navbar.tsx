"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X, Camera, MapPin, MessageCircle } from "lucide-react";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";
import Image from "next/image";


const navigation = [
  { name: "Home", href: "/" },
  { name: "Courses", href: "/courses" },
  { name: "Gallery", href: "/gallery" },
  { name: "Director Profile", href: "/director-profile" },
  { name: "Events & Workshops", href: "/events-and-workshops" },
  { name: "Testimonials", href: "/testimonials" },
];

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 w-full border-b border-white/20 bg-white/70 backdrop-blur-xl shadow-sm">
      <nav className="mx-auto flex max-w-7xl items-center justify-between p-4 lg:px-8">
        
        {/* Logo */}
        <div className="flex lg:flex-1">
          <Link href="/" className="flex items-center gap-3 group">
            <div className="relative h-12 w-12 shrink-0 overflow-hidden transition-transform duration-300 group-hover:scale-105">
              <Image 
                src="/logofinal.jpeg" 
                alt="Omoora Logo" 
                fill 
                className="object-contain"
                priority
              />
            </div>
            <div className="flex flex-col justify-center">
              <span className="font-playfair font-bold text-xl md:text-2xl tracking-tight bg-gradient-to-r from-brand-800 via-brand-600 to-brand-800 bg-clip-text text-transparent leading-none">
                Omoora
              </span>
              <span className="text-[9px] sm:text-[10px] md:text-xs text-muted-foreground leading-tight mt-1 hidden xs:block sm:block font-medium">
                Art & Design Studio <br />
                By IPAArtsAcademy Since 2010
              </span>
            </div>
          </Link>
        </div>

        {/* Mobile Button */}
        <div className="flex lg:hidden">
          <button
            onClick={() => setMobileMenuOpen(true)}
            className="p-2 rounded-md text-muted-foreground hover:bg-black/5"
          >
            <Menu className="h-6 w-6" />
          </button>
        </div>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-8">
          {navigation.map((item) => {
            const isActive = pathname === item.href;

            return (
              <Link
                key={item.name}
                href={item.href}
                className={cn(
                  "group relative px-3 py-2 text-sm font-medium transition-all duration-300",
                  isActive
                    ? "text-brand-600"
                    : "text-foreground/80 hover:text-brand-600"
                )}
              >
                {item.name}

                {/* Animated underline */}
                <span
                  className={cn(
                    "absolute left-0 -bottom-1 h-[2px] w-full bg-gradient-to-r from-brand-400 to-pastel-gold transition-transform duration-300 origin-left",
                    isActive ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
                  )}
                />
              </Link>
            );
          })}
        </div>

        {/* CTA */}
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <Link
            href="/#contact"
            className="relative overflow-hidden rounded-full bg-gradient-to-r from-brand-600 to-brand-700 px-8 py-3 text-sm font-bold text-white shadow-md transition-all duration-300 hover:shadow-lg hover:scale-105 active:scale-95"
          >
            <span className="relative z-10 uppercase tracking-wider">Book Free Demo</span>
            <span className="absolute inset-0 bg-white/20 opacity-0 hover:opacity-100 transition-opacity duration-300" />
          </Link>
        </div>
      </nav>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden">
          {/* Overlay */}
          <div
            className="fixed inset-0 bg-black/40 backdrop-blur-md z-[90]"
            onClick={() => setMobileMenuOpen(false)}
          />

          {/* Panel */}
          <div className="fixed inset-y-0 right-0 w-full max-w-sm bg-white border-l border-brand-100 shadow-2xl z-[100] p-6 animate-in slide-in-from-right duration-300">
            
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="relative h-10 w-10 shrink-0">
                  <Image 
                    src="/logofinal.jpeg" 
                    alt="Omoora Logo" 
                    fill 
                    className="object-contain"
                  />
                </div>
                <div className="flex flex-col justify-center">
                  <span className="font-playfair font-semibold text-lg leading-none">Omoora</span>
                  <span className="text-[9px] text-muted-foreground leading-tight mt-1 font-medium">
                    Art & Design Studio <br />
                    By IPAArtsAcademy Since 2010
                  </span>
                </div>
              </div>
              <button onClick={() => setMobileMenuOpen(false)}>
                <X className="h-6 w-6" />
              </button>
            </div>

            <div className="mt-8 space-y-3">
              {navigation.map((item) => {
                const isActive = pathname === item.href;

                return (
                  <Link
                    key={item.name}
                    href={item.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className={cn(
                      "block rounded-xl px-4 py-3 text-base font-medium transition-all duration-200 border",
                      isActive
                        ? "bg-brand-100 border-brand-200 text-brand-700 shadow-sm"
                        : "bg-white border-brand-50 text-foreground hover:bg-brand-50 hover:border-brand-100 shadow-sm"
                    )}
                  >
                    {item.name}
                  </Link>
                );
              })}
            </div>

            <div className="mt-6">
              <Link
                href="/#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="block text-center rounded-full bg-brand-600 px-4 py-2.5 text-white font-semibold transition-all hover:bg-brand-700"
              >
                Book Free Demo
              </Link>
            </div>

            {/* Social Links in Mobile Menu */}
            <div className="mt-10 flex items-center justify-center gap-8 border-t border-brand-100 pt-8">
              <a 
                href="https://www.instagram.com/omoora_by_ipaartsacademy?utm_source=qr&igsh=MW03eGMzenFrNWJmNg==" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-brand-600 transition-colors"
              >
                <Camera className="h-6 w-6" />
              </a>
              <a 
                href="https://whatsapp.com/channel/0029ValsEV9ATRSm8y6Vpc1t" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-brand-600 transition-colors"
              >
                <MessageCircle className="h-6 w-6" />
              </a>
              <a 
                href="https://maps.app.goo.gl/A3fmZy4DyXtMSKzv6?g_st=awb" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-brand-600 transition-colors"
              >
                <MapPin className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}