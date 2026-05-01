import Image from "next/image";
import Link from "next/link";
import { Camera, MapPin, MessageCircle } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-brand-50 border-t border-brand-200 mt-auto">
      <div className="mx-auto max-w-7xl px-6 pb-8 pt-16 sm:pt-24 lg:px-8 lg:pt-32">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          <div className="space-y-8">
            <Link href="/" className="flex items-center gap-3 group">
              <div className="relative h-12 w-12 overflow-hidden transition-transform duration-300 group-hover:scale-110">
                <Image 
                  src="/logofinal.jpeg" 
                  alt="Omoora Logo" 
                  fill 
                  className="object-contain"
                />
              </div>
              <span className="font-playfair font-bold text-2xl tracking-tight text-foreground">
                Omoora
              </span>
            </Link>
            <p className="text-sm leading-6 text-muted-foreground max-w-xs">
              Beyond Art. A Creative Awakening. <br />
              By IP Arts Academy • Since 2010. Offering a unique combination of Art Education, Healing, and Transformation Services.
            </p>
            <div className="flex space-x-6">
              <a href="https://maps.app.goo.gl/A3fmZy4DyXtMSKzv6?g_st=awb" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-brand-600">
                <span className="sr-only">Google Maps</span>
                <MapPin className="h-6 w-6" />
              </a>
              <a href="https://www.instagram.com/omoora_by_ipaartsacademy?utm_source=qr&igsh=MW03eGMzenFrNWJmNg==" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-brand-600">
                <span className="sr-only">Instagram</span>
                <Camera className="h-6 w-6" />
              </a>
              <a href="https://whatsapp.com/channel/0029ValsEV9ATRSm8y6Vpc1t" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-brand-600">
                <span className="sr-only">WhatsApp</span>
                <MessageCircle className="h-6 w-6" />
              </a>
            </div>
          </div>
          <div className="mt-16 grid grid-cols-2 gap-8 xl:col-span-2 xl:mt-0">
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold leading-6 text-foreground font-playfair">Programs</h3>
                <ul role="list" className="mt-6 space-y-4">
                  <li>
                    <Link href="/courses" className="text-sm leading-6 text-muted-foreground hover:text-brand-600">
                      Art Courses
                    </Link>
                  </li>
                  <li>
                    <Link href="/events-and-workshops" className="text-sm leading-6 text-muted-foreground hover:text-brand-600">
                      Workshops
                    </Link>
                  </li>
                  <li>
                    <Link href="/courses" className="text-sm leading-6 text-muted-foreground hover:text-brand-600">
                      Healing Services
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="mt-10 md:mt-0">
                <h3 className="text-sm font-semibold leading-6 text-foreground font-playfair">Company</h3>
                <ul role="list" className="mt-6 space-y-4">
                  <li>
                    <Link href="/director-profile" className="text-sm leading-6 text-muted-foreground hover:text-brand-600">
                      Director Profile
                    </Link>
                  </li>
                  <li>
                    <Link href="/testimonials" className="text-sm leading-6 text-muted-foreground hover:text-brand-600">
                      Testimonials
                    </Link>
                  </li>
                  <li>
                    <Link href="/gallery" className="text-sm leading-6 text-muted-foreground hover:text-brand-600">
                      Gallery
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-16 border-t border-brand-200 pt-8 sm:mt-20 lg:mt-24 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs leading-5 text-muted-foreground">
            &copy; {new Date().getFullYear()} Omoora. All rights reserved.
          </p>
          <p className="text-xs leading-5 text-muted-foreground">
            Developed by <a href="https://www.webtotalsolution.com" target="_blank" rel="noopener noreferrer" className="font-semibold text-brand-600 hover:text-brand-700 hover:underline">Web Total Solution</a>
          </p>
        </div>
      </div>
    </footer>
  );
}
