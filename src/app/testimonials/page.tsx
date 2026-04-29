import { Metadata } from "next";
import Image from "next/image";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { testimonials } from "@/data/testimonials";
import { TestimonialGallery } from "@/components/ui/TestimonialGallery";

export const metadata: Metadata = {
  title: "Testimonials & Success Stories",
  description: "Read what our students and clients have to say about their experience with Omoora's art courses and healing programs.",
};

export default function TestimonialsPage() {
  return (
    <div className="bg-white min-h-screen py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <SectionHeading 
          title="Stories of Transformation" 
          subtitle="Discover how Omoora has impacted the lives of our students and clients through art and healing." 
        />
        
        <div className="mx-auto mt-16 flow-root max-w-2xl sm:mt-20 lg:mx-0 lg:max-w-none">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {testimonials.map((testimonial) => (
              <div key={testimonial.id} className="flex flex-col justify-between rounded-2xl bg-brand-50 p-8 shadow-sm ring-1 ring-brand-100/50 relative">
                <div className="absolute -top-4 right-8 text-6xl text-brand-200 font-playfair opacity-50">"</div>
                <div>
                  <div className="flex gap-x-1 text-brand-500 mb-6">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <svg key={i} className="h-5 w-5 flex-none" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                        <path fillRule="evenodd" d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z" clipRule="evenodd" />
                      </svg>
                    ))}
                  </div>
                  <p className="text-base leading-7 text-muted-foreground italic relative z-10">
                    "{testimonial.quote}"
                  </p>
                </div>
                <div className="mt-8 flex items-center gap-x-4 border-t border-brand-200/50 pt-6">
                  <Image
                    className="h-12 w-12 rounded-full bg-gray-50 object-cover"
                    src={testimonial.image}
                    alt={testimonial.name}
                    width={48}
                    height={48}
                  />
                  <div>
                    <div className="font-semibold text-foreground">{testimonial.name}</div>
                    <div className="text-sm leading-6 text-brand-700">{testimonial.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <TestimonialGallery />
      </div>
    </div>
  );
}
