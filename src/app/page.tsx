import Image from "next/image";
import Link from "next/link";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ContactForm } from "@/components/ui/ContactForm";
import { MapPin, MessageCircle } from "lucide-react";

function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  );
}

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-brand-50 pt-24 pb-32 sm:pt-32 sm:pb-40">
        <div className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80" aria-hidden="true">
          <div className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-pastel-pink to-pastel-blue opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]" style={{ clipPath: "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)" }}></div>
        </div>
        <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="mx-auto max-w-2xl text-center lg:text-left lg:mx-0">
              <h1 className="text-4xl font-playfair tracking-tight text-foreground sm:text-6xl text-balance">
                Beyond Art. A Creative Awakening.
              </h1>
              <p className="mt-6 text-lg leading-8 text-muted-foreground">
                Discover a unique combination of Art Education, Healing, and Transformation Services. Whether you are seeking creative skills or emotional growth, Omoora is your sanctuary.
              </p>
              <div className="mt-10 flex items-center justify-center lg:justify-start gap-x-6">
                <Link href="/courses" className="inline-flex items-center justify-center whitespace-nowrap rounded-full text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-600 focus-visible:ring-offset-2 bg-brand-600 text-white hover:bg-brand-700 shadow-sm h-12 px-8 text-base">
                  Explore Programs
                </Link>
                <Link href="#contact" className="inline-flex items-center justify-center whitespace-nowrap rounded-full text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-600 focus-visible:ring-offset-2 border border-brand-200 bg-white hover:bg-brand-50 text-foreground h-12 px-8 text-base">
                  Book Free Demo
                </Link>
              </div>
            </div>
            <div className="relative mx-auto w-full max-w-lg lg:max-w-none h-[400px] lg:h-[500px] rounded-2xl overflow-hidden shadow-2xl ring-1 ring-gray-900/10">
              <Image
                src="https://images.unsplash.com/photo-1541701494587-cb58502866ab?q=80&w=1200&auto=format&fit=crop"
                alt="Abstract art representing creative awakening"
                fill
                className="object-cover"
                priority
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </section>

      {/* About Omoora */}
      <section className="py-24 sm:py-32 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-center">
            <div className="lg:pr-8 lg:pt-4">
              <div className="lg:max-w-lg">
                <SectionHeading title="What We Do" centered={false} subtitle="IP Arts Academy & Omoora" />
                <p className="mt-6 text-lg leading-8 text-muted-foreground">
                  Since 2010, IP Arts Academy has nurtured creativity across all ages. With Omoora, we take a step further—combining art with deep emotional healing and mindset transformation.
                </p>
                <dl className="mt-10 max-w-xl space-y-8 text-base leading-7 text-muted-foreground lg:max-w-none">
                  <div className="relative pl-9">
                    <dt className="inline font-semibold text-foreground">
                      <div className="absolute left-1 top-1 h-5 w-5 rounded-full bg-brand-200"></div>
                      Art Education.
                    </dt>
                    <dd className="inline"> Beginner to advanced programs, including sketching, painting, and mandala art.</dd>
                  </div>
                  <div className="relative pl-9">
                    <dt className="inline font-semibold text-foreground">
                      <div className="absolute left-1 top-1 h-5 w-5 rounded-full bg-pastel-blue"></div>
                      Healing Services.
                    </dt>
                    <dd className="inline"> Energy healing, tarot guidance, and emotional healing through art.</dd>
                  </div>
                  <div className="relative pl-9">
                    <dt className="inline font-semibold text-foreground">
                      <div className="absolute left-1 top-1 h-5 w-5 rounded-full bg-pastel-pink"></div>
                      Premium Transformation.
                    </dt>
                    <dd className="inline"> Specialized programs for emotional growth, self-discovery, and abundance.</dd>
                  </div>
                </dl>
              </div>
            </div>
            <div className="relative h-[400px] lg:h-[600px] w-full rounded-2xl overflow-hidden shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem] md:-ml-4 lg:-ml-0">
              <Image
                src="https://images.unsplash.com/photo-1513364776144-60967b0f800f?q=80&w=1200&auto=format&fit=crop"
                alt="Artist working on a canvas"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Target Audience / Stats */}
      <section className="py-16 sm:py-24 bg-brand-50 border-y border-brand-100">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <SectionHeading title="For Everyone Seeking Growth" subtitle="Our programs are designed for all age groups and walks of life." />
          <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
            <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
              <div className="flex flex-col items-center text-center">
                <dt className="text-xl font-playfair font-semibold leading-7 text-foreground">Kids & Teens</dt>
                <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-muted-foreground">
                  <p className="flex-auto">Creative learning, skill development, and career-focused training for artistic growth.</p>
                </dd>
              </div>
              <div className="flex flex-col items-center text-center">
                <dt className="text-xl font-playfair font-semibold leading-7 text-foreground">Adults & Professionals</dt>
                <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-muted-foreground">
                  <p className="flex-auto">Hobby classes, stress relief, and professional learning to spark your creativity.</p>
                </dd>
              </div>
              <div className="flex flex-col items-center text-center">
                <dt className="text-xl font-playfair font-semibold leading-7 text-foreground">Spiritual Seekers</dt>
                <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-muted-foreground">
                  <p className="flex-auto">Healing, clarity, emotional release, and personal transformation.</p>
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 sm:py-32 bg-white relative">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <SectionHeading title="Begin Your Journey" subtitle="Ready to explore your creativity or find inner peace? Book a free demo or consultation today." />
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12 items-start max-w-5xl mx-auto">
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-playfair font-bold text-foreground">Contact Information</h3>
                <p className="mt-4 text-muted-foreground">
                  Feel free to reach out to us through any of these platforms or visit our studio.
                </p>
              </div>
              
              <div className="space-y-6">
                <a 
                  href="https://maps.app.goo.gl/A3fmZy4DyXtMSKzv6?g_st=awb" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 rounded-xl border border-brand-100 hover:border-brand-200 hover:bg-brand-50 transition-colors group"
                >
                  <div className="h-12 w-12 rounded-full bg-brand-100 flex items-center justify-center text-brand-600 group-hover:bg-brand-600 group-hover:text-white transition-colors">
                    <MapPin className="h-6 w-6" />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">Visit Our Studio</p>
                    <p className="text-sm text-muted-foreground">View on Google Maps</p>
                  </div>
                </a>
                
                <a 
                  href="https://whatsapp.com/channel/0029ValsEV9ATRSm8y6Vpc1t" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 rounded-xl border border-brand-100 hover:border-brand-200 hover:bg-brand-50 transition-colors group"
                >
                  <div className="h-12 w-12 rounded-full bg-green-100 flex items-center justify-center text-green-600 group-hover:bg-green-600 group-hover:text-white transition-colors">
                    <MessageCircle className="h-6 w-6" />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">WhatsApp Channel</p>
                    <p className="text-sm text-muted-foreground">Join for latest updates</p>
                  </div>
                </a>
                
                <a 
                  href="https://www.instagram.com/omoora_by_ipaartsacademy?utm_source=qr&igsh=MW03eGMzenFrNWJmNg==" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 rounded-xl border border-brand-100 hover:border-brand-200 hover:bg-brand-50 transition-colors group"
                >
                  <div className="h-12 w-12 rounded-full bg-pink-100 flex items-center justify-center text-pink-600 group-hover:bg-pink-600 group-hover:text-white transition-colors">
                    <InstagramIcon className="h-6 w-6" />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">Instagram</p>
                    <p className="text-sm text-muted-foreground">@omoora_by_ipaartsacademy</p>
                  </div>
                </a>
              </div>
            </div>
            
            <div className="p-8 rounded-2xl bg-white shadow-lg border border-brand-100">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
