import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    template: "%s | Omoora Art & Design Studio",
    default: "Omoora | Beyond Art. A Creative Awakening.",
  },
  description: "Omoora by IP Arts Academy offers a unique combination of Art Education, Healing, and Transformation Services including sketch, mandala art, tarot, and energy healing.",
  keywords: ["art courses", "mandala art", "energy healing", "tarot guidance", "transformation programs", "IP Arts Academy"],
  openGraph: {
    title: "Omoora | Beyond Art. A Creative Awakening.",
    description: "Discover a unique combination of Art Education, Healing, and Transformation Services.",
    url: "https://omoora.example.com",
    siteName: "Omoora",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Omoora Art & Design Studio",
    description: "Discover a unique combination of Art Education, Healing, and Transformation Services.",
  },
  icons: {
    icon: "/logo.jpeg",
    apple: "/logo.jpeg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${playfair.variable} h-full antialiased scroll-smooth`}
    >
      <body className="min-h-full flex flex-col font-sans">
        {/* Analytics Placeholder */}
        {/* <script defer data-domain="omoora.example.com" src="https://plausible.io/js/script.js"></script> */}
        <Navbar />
        <main className="flex-1 flex flex-col">{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
