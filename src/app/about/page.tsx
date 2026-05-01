import { Metadata } from "next";
import { SectionHeading } from "@/components/ui/SectionHeading";
import Image from "next/image";

export const metadata: Metadata = {
  title: "About Omoora | Our Mission & Vision",
  description: "Learn about Omoora, where art meets healing. Discover our brand goals, mission, and the story of IP Arts Academy.",
};

const brandGoals = [
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
];

export default function AboutPage() {
  return (
    <div className="bg-white min-h-screen pt-24 pb-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        
        {/* Intro Section */}
        <div className="mx-auto max-w-3xl text-center mb-20">
          <SectionHeading 
            title="About Omoora" 
            subtitle="IP Arts Academy & Omoora — A Legacy of Creativity and Healing since 2010." 
          />
          <p className="mt-8 text-lg leading-8 text-muted-foreground">
            Since 2010, IP Arts Academy has nurtured creativity across all ages. With Omoora, we go beyond learning—creating a powerful space for inner transformation, emotional healing, and mindset elevation.
          </p>
        </div>

        {/* Brand Goals Section */}
        <div className="mt-24">
          <SectionHeading 
            title="Our Brand Goals" 
            subtitle="At Omoora, our goals reflect what we stand for and what we aim to create in every life we touch."
          />
          
          <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
            <dl className="grid max-w-xl grid-cols-1 gap-x-12 gap-y-12 lg:max-w-none lg:grid-cols-3">
              {brandGoals.map((goal, index) => (
                <div key={index} className="flex flex-col p-8 rounded-3xl bg-brand-50/50 border border-brand-100 hover:shadow-lg transition-all duration-300">
                  <dt className="text-xl font-playfair font-semibold leading-7 text-foreground mb-4">
                    <span className="text-brand-600 mr-2">{index + 1}.</span>
                    {goal.title}
                  </dt>
                  <dd className="flex flex-auto flex-col text-base leading-7 text-muted-foreground">
                    <p className="flex-auto">{goal.description}</p>
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>

        {/* Story Section */}
        <div className="mt-32 grid lg:grid-cols-2 gap-16 items-center">
          <div className="relative h-[500px] rounded-3xl overflow-hidden shadow-2xl">
            <Image
              src="/images/site/what-we-do.jpg"
              alt="Omoora Story"
              fill
              className="object-cover"
            />
          </div>
          <div>
            <h3 className="text-3xl font-playfair font-bold text-foreground mb-6">Redefining the space where art and spirituality meet</h3>
            <div className="space-y-6 text-lg text-muted-foreground">
              <p>
                Founded by Tanvee P Rathore, Omoora is a soul-led transformational brand focused on healing, energy alignment, and conscious living.
              </p>
              <p>
                We believe that art is not just creation — it is a gateway to healing, awareness, and transformation. Our approach combines structured creative teaching with intuitive healing practices to nurture aware, confident, and aligned individuals.
              </p>
              <div className="pt-6 border-t border-brand-100">
                <p className="font-playfair italic text-xl text-foreground">
                  "Our mission is to create a global movement where art becomes a tool for healing, empowerment, and inner awakening."
                </p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
