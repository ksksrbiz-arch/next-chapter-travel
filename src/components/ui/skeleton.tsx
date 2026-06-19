/**
 * Skeleton placeholder block. Pulls its shimmer + reduced-motion handling
 * from the `.skeleton` class in globals.css, so it's animation-safe by default.
 */
export function Skeleton({ className = "" }: { className?: string }) {
  return <div aria-hidden className={`skeleton ${className}`} />;
}
