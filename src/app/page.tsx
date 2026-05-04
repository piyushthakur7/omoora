"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ContactForm } from "@/components/ui/ContactForm";
import { testimonials } from "@/data/testimonials";
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
      <section className="relative overflow-hidden bg-brand-50 pt-12 pb-20 sm:pt-16 sm:pb-24">
        <div className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80" aria-hidden="true">
          <div className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-pastel-pink to-pastel-blue opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]" style={{ clipPath: "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)" }}></div>
        </div>
        <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="mx-auto max-w-2xl text-center lg:text-left lg:mx-0">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
              >
                <h1 className="text-5xl font-playfair tracking-tight text-foreground sm:text-7xl">
                  <span className="block mb-2 text-brand-700">Beyond Art.</span>
                  <span className="block text-4xl sm:text-6xl text-muted-foreground font-medium">A Creative Awakening.</span>
                </h1>
                <p className="mt-8 text-lg leading-8 text-muted-foreground">
                  Discover a unique combination of Art Education, Healing, and Transformation Services. Whether you are seeking creative skills or emotional growth, Omoora is your sanctuary.
                </p>
              </motion.div>
              <div className="mt-10 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 sm:gap-x-6 w-full sm:w-auto">
                <Link href="/courses" className="inline-flex w-full sm:w-auto items-center justify-center whitespace-nowrap rounded-full text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-600 focus-visible:ring-offset-2 bg-brand-600 text-white hover:bg-brand-700 shadow-sm h-12 px-8 text-base">
                  Explore Programs
                </Link>
                <Link href="#contact" className="inline-flex w-full sm:w-auto items-center justify-center whitespace-nowrap rounded-full text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-600 focus-visible:ring-offset-2 border border-brand-200 bg-white hover:bg-brand-50 text-foreground h-12 px-8 text-base">
                  Book Free Demo
                </Link>
              </div>
            </div>
            <div className="relative mx-auto w-full max-w-lg lg:max-w-none h-[400px] lg:h-[500px] rounded-2xl overflow-hidden shadow-2xl ring-1 ring-gray-900/10">
              <Image
                src="/images/site/home-hero.jpg"
                alt="Omoora - Beyond Art, A Creative Awakening"
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
      <section className="py-12 sm:py-16 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-center">
            <div className="lg:pr-8 lg:pt-4">
              <div className="lg:max-w-lg">
                <SectionHeading title="What We Do" centered={false} subtitle="IPA Arts Academy & Omoora" />
                <p className="mt-6 text-lg leading-8 text-muted-foreground">
                  Since 2010, IPA Arts Academy has nurtured creativity across all ages. With Omoora, we go beyond learning—creating a powerful space for inner transformation, emotional healing, and mindset elevation.
                </p>
                <dl className="mt-10 max-w-xl space-y-8 text-base leading-7 text-muted-foreground lg:max-w-none">
                  <div className="relative pl-8">
                    <dt className="inline font-semibold text-foreground">
                      <span className="absolute left-0 top-0 text-lg">✨</span>
                      Art Education.
                    </dt>
                    <dd className="inline"> Structured beginner to advanced programs in sketching, painting, and mandala art—building strong artistic foundations with creativity and confidence.</dd>
                  </div>
                  <div className="relative pl-8">
                    <dt className="inline font-semibold text-foreground">
                      <span className="absolute left-0 top-0 text-lg">✨</span>
                      Healing & Guidance.
                    </dt>
                    <dd className="inline"> Personalized sessions including energy healing, tarot guidance, and emotional release—helping you gain clarity, balance, and inner peace.</dd>
                  </div>
                  <div className="relative pl-8">
                    <dt className="inline font-semibold text-foreground">
                      <span className="absolute left-0 top-0 text-lg">✨</span>
                      Premium Transformation Programs.
                    </dt>
                    <dd className="inline"> Deep, result-oriented journeys designed to help you overcome emotional blocks, shift limiting beliefs, and step into abundance, confidence, and self-discovery. Designed for those ready to grow, heal, and transform their life through art and inner work.</dd>
                  </div>
                </dl>
              </div>
            </div>
            <div className="relative h-[400px] lg:h-[600px] w-full rounded-2xl overflow-hidden shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem] md:-ml-4 lg:-ml-0">
              <Image
                src="/images/site/what-we-do.jpg"
                alt="What We Do at Omoora - Art Education, Healing & Transformation"
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
                <dt className="text-xl font-playfair font-semibold leading-7 text-foreground flex items-center justify-center gap-2">
                  <span>✨</span> Kids & Teens
                </dt>
                <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-muted-foreground">
                  <p className="flex-auto">Build confidence, creativity, and strong artistic foundations from an early age—while nurturing focus, expression, and future-ready skills.</p>
                </dd>
              </div>
              <div className="flex flex-col items-center text-center">
                <dt className="text-xl font-playfair font-semibold leading-7 text-foreground flex items-center justify-center gap-2">
                  <span>✨</span> Adults & Professionals
                </dt>
                <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-muted-foreground">
                  <p className="flex-auto">Release stress, reconnect with creativity, and explore art as a powerful tool for relaxation, clarity, and personal growth.</p>
                </dd>
              </div>
              <div className="flex flex-col items-center text-center">
                <dt className="text-xl font-playfair font-semibold leading-7 text-foreground flex items-center justify-center gap-2">
                  <span>✨</span> Seekers & Healers
                </dt>
                <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-muted-foreground">
                  <p className="flex-auto">For those on a deeper journey—seeking emotional healing, inner clarity, and transformation through guided sessions, energy work, and art-based healing.</p>
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </section>

      {/* Brand Goals Section */}
      <section className="py-12 sm:py-16 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <SectionHeading 
            title="Our Brand Goals" 
            subtitle="At Omoora, our goals reflect what we stand for and what we aim to create in every life we touch."
          />
          
          <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
            <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-3">
              {[
                {
                  title: "To Inspire Inner Transformation",
                  description: "We aim to help individuals reconnect with themselves, heal emotionally, and grow through the power of art and conscious practices."
                },
                {
                  title: "To Redefine Healing Through Creativity",
                  description: "Our goal is to make art not just a skill, but a tool for healing, expression, and self-discovery."
                },
                {
                  title: "To Build a Safe & Empowering Space",
                  description: "We strive to create an environment where people feel seen, heard, and free to express without judgment."
                },
                {
                  title: "To Deliver Meaningful & Lasting Impact",
                  description: "Every session, course, and program is designed to create real, deep, and lasting transformation."
                },
                {
                  title: "To Create a Conscious Community",
                  description: "We aim to build a community of like-minded individuals who value growth, healing, and positive living."
                },
                {
                  title: "To Reach and Transform Lives Globally",
                  description: "Through online and offline platforms, our goal is to expand Omoora beyond boundaries and touch lives worldwide."
                },
                {
                  title: "To Stand as a Premium & Trusted Brand",
                  description: "We are committed to offering high-quality, impactful experiences that position Omoora as a leader in art-based healing."
                }
              ].map((goal, index) => (
                <div key={index} className="flex flex-col p-8 rounded-3xl bg-brand-50/30 border border-brand-100 hover:shadow-md transition-all duration-300">
                  <dt className="text-lg font-playfair font-semibold leading-7 text-foreground mb-3 flex gap-2">
                    <span className="text-brand-600">{index + 1}.</span>
                    {goal.title}
                  </dt>
                  <dd className="flex flex-auto flex-col text-sm leading-6 text-muted-foreground">
                    <p className="flex-auto">{goal.description}</p>
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-12 sm:py-16 bg-white relative">
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

      {/* Mission & Vision Section */}
      <section className="py-12 sm:py-16 bg-white overflow-hidden">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1 relative h-[500px] rounded-3xl overflow-hidden shadow-2xl rotate-2 hover:rotate-0 transition-transform duration-500 group">
              <Image
                src="/images/site/what-we-do.jpg"
                alt="Omoora Art Class"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
            </div>
            <div className="order-1 lg:order-2">
              <SectionHeading 
                title="Mission & Vision" 
                subtitle="The Essence of Omoora" 
                centered={false}
              />
              <div className="mt-8 space-y-6 text-lg text-muted-foreground leading-relaxed">
                <p>
                  Founded by IPA Arts Academy in 2010, Omoora was born from a simple yet profound realization: art is not just a skill to be learned, but a path to self-discovery and emotional healing.
                </p>
                <p>
                  Our mission is to provide a sanctuary where creativity meets spirituality. We aim to nurture the artist within everyone, helping them find balance, peace, and abundance through the transformative power of artistic expression.
                </p>
                <div className="pt-6 grid grid-cols-2 gap-8">
                  <div>
                    <h4 className="font-playfair font-bold text-foreground text-2xl mb-2">14+</h4>
                    <p className="text-sm uppercase tracking-wider">Years of Excellence</p>
                  </div>
                  <div>
                    <h4 className="font-playfair font-bold text-foreground text-2xl mb-2">5000+</h4>
                    <p className="text-sm uppercase tracking-wider">Students Nurtured</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-12 sm:py-16 bg-brand-50/50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <SectionHeading 
            title="What Our Students Say" 
            subtitle="Real stories of creativity, growth, and transformation from the Omoora community." 
          />
          
          <div className="mx-auto mt-16 columns-1 md:columns-2 lg:columns-3 gap-8 space-y-8">
            {testimonials.map((testimonial) => (
              <div 
                key={testimonial.id} 
                className="break-inside-avoid flex flex-col justify-between rounded-3xl bg-white p-8 shadow-sm ring-1 ring-brand-100 hover:shadow-xl transition-all duration-300 group"
              >
                <div className="relative">
                  <div className="text-4xl text-brand-200 font-playfair mb-4 group-hover:text-brand-400 transition-colors">"</div>
                  <p className="text-base leading-7 text-muted-foreground italic relative z-10">
                    {testimonial.quote}
                  </p>
                </div>
                <div className="mt-8 flex items-center gap-x-4 border-t border-brand-50 pt-6">
                  <div className="relative h-12 w-12 rounded-full overflow-hidden shadow-inner ring-2 ring-brand-50 group-hover:ring-brand-200 transition-all">
                    <Image
                      className="h-full w-full object-cover"
                      src={testimonial.image}
                      alt={testimonial.name}
                      fill
                    />
                  </div>
                  <div>
                    <div className="font-semibold text-foreground group-hover:text-brand-700 transition-colors">{testimonial.name}</div>
                    <div className="text-xs leading-5 text-brand-600/80 font-medium">{testimonial.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <Link 
              href="/testimonials" 
              className="inline-flex items-center text-brand-600 font-semibold hover:text-brand-800 transition-colors"
            >
              View More Stories & Gallery <span aria-hidden="true" className="ml-2">&rarr;</span>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
