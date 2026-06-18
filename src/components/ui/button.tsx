import * as React from "react";
import Link from "next/link";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const button = cva(
  "inline-flex items-center justify-center gap-2 rounded-full font-semibold transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 focus-visible:ring-offset-paper disabled:cursor-not-allowed disabled:opacity-60",
  {
    variants: {
      variant: {
        primary: "bg-gold text-paper shadow-card hover:bg-ink hover:shadow-lift",
        ink: "bg-ink text-paper hover:bg-ink-soft hover:shadow-lift",
        outline: "border border-ink/25 text-ink hover:border-ink hover:bg-ink hover:text-paper",
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
