import Image from "next/image";
import Link from "next/link";
import { buttonVariants } from "./Button";
import { cn } from "@/lib/utils";

interface CourseCardProps {
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

export function CourseCard({
  title,
  description,
  price,
  priceMax,
  image,
  category,
  duration,
  level,
  cta,
  isPremium,
}: CourseCardProps) {
  return (
    <div className={cn(
      "flex flex-col overflow-hidden rounded-2xl bg-white shadow-md transition-all hover:shadow-xl border",
      isPremium ? "border-brand-300 ring-1 ring-brand-300" : "border-gray-100"
    )}>
      <div className="relative h-48 w-full sm:h-56">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        {isPremium && (
          <div className="absolute top-4 right-4 rounded-full bg-gradient-to-r from-pastel-gold to-brand-300 px-3 py-1 text-xs font-semibold text-brand-900 shadow-sm">
            Premium
          </div>
        )}
        <div className="absolute top-4 left-4 rounded-full bg-white/90 backdrop-blur-sm px-3 py-1 text-xs font-medium text-gray-800 shadow-sm">
          {category}
        </div>
      </div>
      <div className="flex flex-1 flex-col p-6">
        <div className="flex-1">
          <h3 className="text-xl font-playfair font-semibold text-foreground">{title}</h3>
          {(duration || level) && (
            <div className="mt-2 flex flex-wrap gap-2 text-xs text-muted-foreground">
              {duration && <span>⏱️ {duration}</span>}
              {level && <span>🎓 {level}</span>}
            </div>
          )}
          <p className="mt-4 text-sm leading-6 text-muted-foreground line-clamp-3">{description}</p>
        </div>
        <div className="mt-6 flex items-center justify-between">
          <div>
            <p className="text-xs text-muted-foreground">Starting from</p>
            <p className="text-lg font-semibold text-foreground">₹{price}</p>
          </div>
          <Link 
            href="/#contact" 
            className={buttonVariants({ size: "sm", variant: isPremium ? "default" : "outline" })}
          >
            {cta}
          </Link>
        </div>
      </div>
    </div>
  );
}
