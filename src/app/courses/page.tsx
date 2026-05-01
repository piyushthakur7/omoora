import { Metadata } from "next";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { CourseList } from "@/components/courses/CourseList";
import { courses } from "@/data/courses";

export const metadata: Metadata = {
  title: "Art Courses & Transformation Programs",
  description: "Explore our range of art courses, from Foundation Art Programs and Diplomas to Mandala Art and Premium Transformation Programs.",
};

export default function CoursesPage() {
  return (
    <div className="bg-brand-50 min-h-screen py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <SectionHeading 
          title="Our Programs" 
          subtitle="Discover the perfect course for your creative journey, whether you are a beginner or a spiritual seeker looking for transformation." 
        />
        
        <div className="mt-16">
          <CourseList courses={courses} />
        </div>

        <div className="mt-24 bg-white p-12 rounded-3xl border border-brand-100 shadow-sm text-center">
          <h3 className="text-2xl font-playfair font-semibold text-foreground mb-4">Interested in something custom?</h3>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            We offer personalized programs and corporate workshops tailored to your specific needs and goals. Reach out to us for a consultation.
          </p>
          <a href="/#contact" className="inline-flex items-center justify-center px-8 py-3 rounded-full bg-brand-600 text-white font-medium hover:bg-brand-700 transition-all">
            Get in Touch
          </a>
        </div>
      </div>
    </div>
  );
}
