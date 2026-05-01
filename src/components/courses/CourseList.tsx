"use client";

import { useState } from "react";
import { CourseCard } from "@/components/ui/CourseCard";
import { cn } from "@/lib/utils";

interface Course {
  id: string;
  title: string;
  description: string;
  price: string;
  priceMax?: string;
  image: string;
  category: string;
  duration?: string;
  level?: string;
  cta: string;
  isPremium?: boolean;
}

interface CourseListProps {
  courses: Course[];
}

export function CourseList({ courses }: CourseListProps) {
  const [activeCategory, setActiveCategory] = useState("All");

  const categories = ["All", "Art Courses", "Kids Art Programs", "Healing & Spiritual", "Premium Programs", "Online Courses"];

  const filteredCourses = courses.filter((course) => {
    if (activeCategory === "All") return true;
    if (activeCategory === "Kids Art Programs") return course.category.includes("Kids");
    if (activeCategory === "Healing & Spiritual") return course.category.includes("Healing") || course.category.includes("Spiritual") || course.category.includes("Transformation");
    if (activeCategory === "Premium Programs") return course.isPremium;
    if (activeCategory === "Online Courses") return course.category.includes("Online");
    return course.category.includes(activeCategory);
  });

  return (
    <div className="space-y-12">
      {/* Filter Bar */}
      <div className="flex flex-wrap justify-center gap-3">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setActiveCategory(category)}
            className={cn(
              "px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 border",
              activeCategory === category
                ? "bg-brand-600 text-white border-brand-600 shadow-md"
                : "bg-white text-muted-foreground border-gray-200 hover:border-brand-300 hover:text-brand-600"
            )}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        {filteredCourses.map((course) => (
          <CourseCard key={course.id} {...course} />
        ))}
      </div>

      {filteredCourses.length === 0 && (
        <div className="text-center py-20">
          <p className="text-lg text-muted-foreground">No programs found in this category. Check back soon!</p>
        </div>
      )}
    </div>
  );
}
