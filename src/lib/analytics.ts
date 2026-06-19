/**
 * Thin wrapper around Plausible (privacy-friendly, cookieless analytics).
 * The script is loaded in the root layout; pageviews are automatic. Use
 * `track()` to record custom goals/conversions from client components.
 */
declare global {
  interface Window {
    plausible?: (
      event: string,
      options?: { props?: Record<string, string | number | boolean>; callback?: () => void },
    ) => void;
  }
}

export function track(
  event: string,
  props?: Record<string, string | number | boolean>,
): void {
  if (typeof window !== "undefined" && typeof window.plausible === "function") {
    window.plausible(event, props ? { props } : undefined);
  }
}
