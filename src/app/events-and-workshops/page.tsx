import { Metadata } from "next";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { CourseCard } from "@/components/ui/CourseCard";
import { events, healingServices } from "@/data/events";

export const metadata: Metadata = {
  title: "Events, Workshops & Healing Services",
  description: "Join our creative weekend workshops, corporate events, and specialized emotional healing and tarot guidance sessions.",
};

export default function EventsPage() {
  return (
    <div className="bg-white min-h-screen py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <SectionHeading 
          title="Workshops & Events" 
          subtitle="Explore our short-term creative workshops and community events designed for quick learning and networking." 
        />
        
        <div className="mt-16 sm:mt-20">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {events.map((event) => (
              <CourseCard 
                key={event.id}
                title={event.title}
                description={event.description}
                price={event.price}
                priceMax={event.priceMax}
                image={event.image}
                category={event.category}
                cta="Register Now"
              />
            ))}
          </div>
        </div>

        <div className="mt-32">
          <SectionHeading 
            title="Healing & Spiritual Services" 
            subtitle="Personalized healing sessions to balance energy, release emotional blocks, and improve your overall well-being." 
          />
          <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-3">
            {healingServices.map((service) => (
              <div key={service.id} className="rounded-2xl border border-brand-100 bg-brand-50 p-8 shadow-sm text-center flex flex-col items-center">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white text-brand-600 shadow-sm mb-6 text-xl">
                  ✨
                </div>
                <h3 className="text-xl font-playfair font-semibold text-foreground mb-4">{service.title}</h3>
                <p className="text-sm text-muted-foreground flex-1 mb-6">{service.description}</p>
                <div className="w-full border-t border-brand-200 pt-6 mt-auto">
                  <p className="text-sm font-medium text-brand-700 mb-4">₹{service.price} - ₹{service.priceMax}</p>
                  <a href="/#contact" className="text-sm font-semibold text-brand-600 hover:text-brand-800 transition-colors">
                    Book Session &rarr;
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}
