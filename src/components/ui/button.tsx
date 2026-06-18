import * as React from "react";
import Link from "next/link";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const button = cva(
  "inline-flex items-center justify-center gap-2 rounded-full font-bold tracking-wide transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-clay focus-visible:ring-offset-2 focus-visible:ring-offset-paper disabled:cursor-not-allowed disabled:opacity-60",
  {
    variants: {
      variant: {
        // The signature "Start Planning!" pill — terracotta outline, fills on hover.
        primary: "border-2 border-clay text-clay hover:bg-clay hover:text-cream",
        solid: "bg-clay text-cream shadow-card hover:bg-ink hover:shadow-lift",
        ink: "bg-ink text-cream hover:bg-ink-soft hover:shadow-lift",
        outline: "border-2 border-ink/30 text-ink hover:border-ink hover:bg-ink hover:text-cream",
        paper: "bg-cream text-ink shadow-card hover:bg-cream-deep hover:shadow-lift",
        ghost: "text-ink hover:bg-ink/5",
      },
      size: {
        sm: "h-10 px-5 text-sm",
        md: "h-12 px-7 text-[0.95rem]",
        lg: "h-14 px-9 text-base",
      },
    },
    defaultVariants: { variant: "primary", size: "md" },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof button> {
  href?: string;
}

export function Button({ className, variant, size, href, ...props }: ButtonProps) {
  const classes = cn(button({ variant, size }), className);
  if (href) {
    return (
      <Link href={href} className={classes}>
        {props.children}
      </Link>
    );
  }
  return <button className={classes} {...props} />;
}
