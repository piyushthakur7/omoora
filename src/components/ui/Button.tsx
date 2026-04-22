import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

// I'll just extract the classes instead of installing cva to keep it simple.

export const buttonVariants = ({
  variant = "default",
  size = "default",
  className = "",
}: {
  variant?: "default" | "outline" | "ghost" | "link";
  size?: "default" | "sm" | "lg" | "icon";
  className?: string;
} = {}) => {
  return cn(
    "inline-flex items-center justify-center whitespace-nowrap rounded-full text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-600 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
    {
      "bg-brand-600 text-white hover:bg-brand-700 shadow-sm": variant === "default",
      "border border-brand-200 bg-white hover:bg-brand-50 text-foreground": variant === "outline",
      "hover:bg-brand-50 text-foreground": variant === "ghost",
      "text-brand-600 underline-offset-4 hover:underline": variant === "link",
      "h-10 px-6 py-2": size === "default",
      "h-9 rounded-md px-3": size === "sm",
      "h-12 rounded-full px-8 text-base": size === "lg",
      "h-10 w-10": size === "icon",
    },
    className
  );
};

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "default" | "outline" | "ghost" | "link";
  size?: "default" | "sm" | "lg" | "icon";
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={buttonVariants({ variant, size, className })}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button };
