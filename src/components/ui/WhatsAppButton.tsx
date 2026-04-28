"use client";

import { MessageCircle } from "lucide-react";

export function WhatsAppButton() {
  return (
    <a
      href="https://whatsapp.com/channel/0029ValsEV9ATRSm8y6Vpc1t"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-8 right-8 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg transition-all duration-300 hover:scale-110 hover:shadow-xl active:scale-95"
      aria-label="Contact on WhatsApp"
    >
      <MessageCircle className="h-8 w-8" />
    </a>
  );
}
