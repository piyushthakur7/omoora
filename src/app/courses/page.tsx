import { Metadata } from "next";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { CourseCard } from "@/components/ui/CourseCard";
import { courses } from "@/data/courses";

export const metadata: Metadata = {
  title: "Art Courses & Transformation Programs",
  description: "Explore our range of art courses, from Foundation Art Programs and Diplomas to Mandala Art and Premium Transformation Programs.",
};

export default function CoursesPage() {
  const standardCourses = courses.filter((c) => !c.isPremium);
  const premiumCourses = courses.filter((c) => c.isPremium);

  return (
    <div className="bg-brand-50 min-h-screen py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <SectionHeading 
          title="Our Programs" 
          subtitle="Discover the perfect course for your creative journey, whether you are a beginner or a spiritual seeker looking for transformation." 
        />
        
        <div className="mt-16 sm:mt-20">
          <h3 className="text-2xl font-playfair font-semibold text-foreground mb-8 border-b border-brand-200 pb-2">
            Art Education & Certification
          </h3>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {standardCourses.map((course) => (
              <CourseCard key={course.id} {...course} />
            ))}
          </div>
        </div>

        {premiumCourses.length > 0 && (
          <div className="mt-24">
            <h3 className="text-2xl font-playfair font-semibold text-foreground mb-8 border-b border-brand-200 pb-2 flex items-center gap-2">
              <span className="text-pastel-gold">✨</span> Premium Transformation Programs
            </h3>
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
              {premiumCourses.map((course) => (
                <CourseCard key={course.id} {...course} />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
