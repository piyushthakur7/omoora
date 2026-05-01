import Image from "next/image";
import { Metadata } from "next";
import { SectionHeading } from "@/components/ui/SectionHeading";

export const metadata: Metadata = {
  title: "Director Profile | Tanvee P Rathore",
  description: "Learn more about Tanvee P Rathore, visionary leader, healer, and creative entrepreneur behind IP Arts Academy and OMOORA.",
};

export default function DirectorProfilePage() {
  return (
    <div className="bg-brand-50 min-h-screen py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-12 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-12">
          
          <div className="lg:col-span-4 space-y-8">
            <div className="relative aspect-[4/5] w-full max-w-md mx-auto lg:mx-0 rounded-2xl overflow-hidden shadow-2xl ring-1 ring-gray-900/10">
              <Image
                src="/images/site/director-profile.jpg"
                alt="Tanvee P Rathore - Director of Omoora"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-sm ring-1 ring-gray-900/5">
              <h3 className="text-lg font-semibold text-foreground mb-4 font-playfair">Connect</h3>
              <ul className="space-y-4 text-sm text-muted-foreground">
                <li className="flex items-start gap-3">
                  <span className="text-lg">📍</span>
                  <span className="font-medium text-foreground pt-0.5">IP Arts Academy</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-lg">🌐</span>
                  <span className="font-medium text-foreground pt-0.5">Brand: OMOORA</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-lg">📲</span>
                  <span className="font-medium text-foreground pt-0.5">Instagram: @omoora</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-lg">💫</span>
                  <span className="font-medium text-foreground pt-0.5">Spiritual Brand: Spiritual Bliss by Tanvee P Rathore</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="lg:col-span-8 lg:pl-8">
            <SectionHeading 
              title="Meet Tanvee P Rathore" 
              subtitle="Founder & Director – IP Arts Academy | Founder – OMOORA | Spiritual Healer | Mandala Expert | Transformation Coach | Author"
              centered={false} 
            />
            
            <blockquote className="mt-8 border-l-4 border-brand-300 pl-6 text-xl italic font-playfair leading-8 text-foreground">
              "Art is not just creation — it is a gateway to healing, awareness, and transformation."
            </blockquote>

            <div className="mt-10 space-y-10 text-base leading-7 text-muted-foreground">
              <div>
                <h3 className="text-2xl font-semibold text-foreground mb-4 font-playfair">About Tanvee</h3>
                <p>
                  Tanvee P Rathore is a visionary leader, healer, and creative entrepreneur redefining the space where art, spirituality, and transformation meet. With a powerful blend of intuition, creativity, and structured teaching, she has built platforms that don't just teach — they transform lives. Through her work, individuals experience emotional healing, self-discovery, and a deeper connection with their inner self.
                </p>
                <p className="mt-4">
                  Her approach is unique: she doesn't just create artists — she nurtures aware, confident, and aligned individuals.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-semibold text-foreground mb-4 font-playfair">Brands & Leadership</h3>
                <div className="space-y-4">
                  <div className="bg-white p-5 rounded-xl shadow-sm border border-brand-100">
                    <h4 className="font-semibold text-brand-800 text-lg">IP Arts Academy</h4>
                    <p className="mt-2 text-sm">A structured creative institution offering professional art education blended with emotional and creative development.</p>
                  </div>
                  <div className="bg-white p-5 rounded-xl shadow-sm border border-brand-100">
                    <h4 className="font-semibold text-brand-800 text-lg">OMOORA</h4>
                    <p className="mt-2 text-sm">A soul-led transformational brand focused on healing, energy alignment, and conscious living, designed to elevate individuals at a deeper level.</p>
                  </div>
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-2xl font-semibold text-foreground mb-4 font-playfair">Vision</h3>
                  <p className="bg-brand-100/50 p-4 rounded-lg italic">
                    "To create a global movement where art becomes a tool for healing, empowerment, and inner awakening."
                  </p>
                </div>
                <div>
                  <h3 className="text-2xl font-semibold text-foreground mb-4 font-playfair">Mission</h3>
                  <ul className="list-disc pl-5 space-y-2">
                    <li>To empower individuals through art and healing practices</li>
                    <li>To create financially independent and confident creators</li>
                    <li>To expand OMOORA into a global spiritual and transformational brand</li>
                    <li>To bridge creativity with consciousness for deeper life impact</li>
                  </ul>
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-semibold text-foreground mb-4 font-playfair">Expertise & Signature Work</h3>
                <div className="grid sm:grid-cols-2 gap-x-8 gap-y-6">
                  <div>
                    <h4 className="font-semibold text-brand-700 mb-2">Areas of Expertise</h4>
                    <ul className="list-disc pl-5 space-y-1 text-sm">
                      <li>Mandala Art & Sacred Geometry</li>
                      <li>Art Therapy & Emotional Healing</li>
                      <li>Spiritual Healing & Energy Work</li>
                      <li>Tarot & Intuitive Guidance</li>
                      <li>Creative Transformation Coaching</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-brand-700 mb-2">Signature Programs</h4>
                    <ul className="list-disc pl-5 space-y-1 text-sm">
                      <li>Certified Mandala Artist & Therapist Programs</li>
                      <li>Art + Healing Workshops & Retreats</li>
                      <li>Personal Healing & Energy Sessions</li>
                      <li>Transformation-Based Courses</li>
                      <li>Community Healing Experiences through Art</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-semibold text-foreground mb-4 font-playfair">Achievements & Recognition</h3>
                <ul className="space-y-3 bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                  <li className="flex items-start gap-3"><span className="text-xl">🏆</span> <span>State Award Recipient for excellence in art & creative contribution</span></li>
                  <li className="flex items-start gap-3"><span className="text-xl">📖</span> <span>Author of the book: "The Secrets of Mandala"</span></li>
                  <li className="flex items-start gap-3"><span className="text-xl">📘</span> <span>India Book of Records Holder (Record Breaker)</span></li>
                  <li className="flex items-start gap-3"><span className="text-xl">🥇</span> <span>Honored with multiple awards for contribution in art, creativity, and healing</span></li>
                  <li className="flex items-start gap-3"><span className="text-xl">🎓</span> <span>Successfully built and led IP Arts Academy with structured programs</span></li>
                  <li className="flex items-start gap-3"><span className="text-xl">🌍</span> <span>Established OMOORA as a unique Art + Healing + Spiritual brand</span></li>
                  <li className="flex items-start gap-3"><span className="text-xl">👩‍🎓</span> <span>Mentored and trained numerous students in mandala and creative arts</span></li>
                  <li className="flex items-start gap-3"><span className="text-xl">✨</span> <span>Created a niche in Art + Healing + Transformation industry</span></li>
                </ul>
              </div>

              <div>
                <h3 className="text-2xl font-semibold text-foreground mb-4 font-playfair">What Makes Her Unique</h3>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="bg-brand-50 p-4 rounded-lg border border-brand-100">
                    <p className="font-medium text-foreground">A rare combination of Artist + Healer + Coach</p>
                  </div>
                  <div className="bg-brand-50 p-4 rounded-lg border border-brand-100">
                    <p className="font-medium text-foreground">Focuses on deep transformation, not just skill-building</p>
                  </div>
                  <div className="bg-brand-50 p-4 rounded-lg border border-brand-100">
                    <p className="font-medium text-foreground">Blends intuition with practical systems</p>
                  </div>
                  <div className="bg-brand-50 p-4 rounded-lg border border-brand-100">
                    <p className="font-medium text-foreground">Creates powerful, safe spaces for emotional expression and healing</p>
                  </div>
                </div>
              </div>

            </div>
            
            <div className="mt-12 pt-8 border-t border-gray-200">
              <a href="/#contact" className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-brand-600 hover:bg-brand-700 transition-colors">
                Book a consultation with Tanvee <span aria-hidden="true" className="ml-2">&rarr;</span>
              </a>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
