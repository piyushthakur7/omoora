"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";

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
          <Link href="/" className="flex items-center gap-2">
            <div className="flex h-10 w-10 items-center justify-center rounded-full 
              bg-gradient-to-tr from-brand-400 via-brand-300 to-pastel-gold 
              text-white font-playfair font-bold text-xl shadow-md ring-2 ring-white/50">
              O
            </div>
            <span className="font-playfair font-semibold text-xl tracking-wide bg-gradient-to-r from-brand-600 to-pastel-gold bg-clip-text text-transparent">
              Omoora
            </span>
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
        <div className="hidden lg:flex items-center gap-6">
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
            className="relative overflow-hidden rounded-full bg-gradient-to-r from-brand-500 to-brand-600 px-6 py-2.5 text-sm font-semibold text-white shadow-md transition-all duration-300 hover:shadow-lg hover:scale-105 active:scale-95"
          >
            <span className="relative z-10">Book Free Demo</span>
            <span className="absolute inset-0 bg-white/10 opacity-0 hover:opacity-100 transition-opacity duration-300" />
          </Link>
        </div>
      </nav>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden">
          {/* Overlay */}
          <div
            className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40"
            onClick={() => setMobileMenuOpen(false)}
          />

          {/* Panel */}
          <div className="fixed right-0 top-0 h-full w-full max-w-sm bg-white/80 backdrop-blur-xl shadow-xl z-50 p-6 animate-in slide-in-from-right duration-300">
            
            <div className="flex items-center justify-between">
              <span className="font-playfair font-semibold text-lg">Omoora</span>
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
                      "block rounded-lg px-4 py-2 text-base font-medium transition",
                      isActive
                        ? "bg-brand-50 text-brand-600"
                        : "hover:bg-black/5"
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
                className="block text-center rounded-full bg-brand-600 px-4 py-2.5 text-white font-semibold"
              >
                Book Free Demo
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}