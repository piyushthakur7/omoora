import Image from "next/image";
import { Metadata } from "next";
import { SectionHeading } from "@/components/ui/SectionHeading";

export const metadata: Metadata = {
  title: "Director Profile | Ms. Shivani",
  description: "Learn more about the visionary behind Omoora, combining art education and spiritual healing.",
};

export default function DirectorProfilePage() {
  return (
    <div className="bg-brand-50 min-h-screen py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-12 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-center">
          
          <div className="relative aspect-[4/5] w-full max-w-md mx-auto lg:mx-0 rounded-2xl overflow-hidden shadow-2xl ring-1 ring-gray-900/10">
            <Image
              src="/images/site/director-profile.jpg"
              alt="Ms. Shivani - Director of Omoora"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>

          <div className="lg:pr-8">
            <SectionHeading 
              title="Meet The Director" 
              subtitle="Ms. Shivani — Visionary, Artist, and Healer"
              centered={false} 
            />
            
            <blockquote className="mt-8 border-l-4 border-brand-300 pl-6 text-xl italic font-playfair leading-8 text-foreground">
              "Art is not just what we create on a canvas; it is the journey of discovering the soul. Through Omoora, my mission is to awaken the creative spirit and heal from within."
            </blockquote>

            <div className="mt-10 space-y-6 text-base leading-8 text-muted-foreground">
              <p>
                With over a decade of experience in the art education sector since founding IP Arts Academy in 2010, Ms. Shivani has dedicated her life to nurturing creativity in individuals of all ages. 
              </p>
              <p>
                Recognizing the profound connection between creative expression and emotional well-being, she expanded her vision to create <strong>Omoora</strong>. This unique platform integrates traditional art education with spiritual healing, offering programs that foster both artistic skill and personal transformation.
              </p>
              <p>
                Certified in energy healing and tarot guidance, she personally oversees the premium transformation programs, ensuring every participant embarks on a fulfilling journey of self-discovery, abundance, and peace.
              </p>
            </div>
            
            <div className="mt-10">
              <a href="/#contact" className="inline-flex items-center text-brand-600 font-semibold hover:text-brand-800 transition-colors">
                Book a consultation with the Director <span aria-hidden="true" className="ml-2">&rarr;</span>
              </a>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
