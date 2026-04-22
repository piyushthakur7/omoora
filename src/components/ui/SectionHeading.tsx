import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
  className?: string;
}

export function SectionHeading({ title, subtitle, centered = true, className }: SectionHeadingProps) {
  return (
    <div className={cn("flex flex-col gap-3", centered && "items-center text-center", className)}>
      <h2 className="text-3xl font-playfair tracking-tight text-foreground sm:text-4xl">
        {title}
      </h2>
      {subtitle && (
        <p className="text-lg leading-8 text-muted-foreground max-w-2xl">
          {subtitle}
        </p>
      )}
      <div className={cn("h-1 w-20 bg-gradient-to-r from-brand-300 to-pastel-gold rounded-full mt-2", centered && "mx-auto")} />
    </div>
  );
}
