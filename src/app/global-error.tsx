"use client";

/**
 * Replaces the root layout when the layout itself throws, so it must be fully
 * self-contained (its own <html>/<body>, inline styles — the app CSS may not
 * have loaded). Kept minimal and on-brand.
 */
export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <html lang="en">
      <body
        style={{
          margin: 0,
          minHeight: "100dvh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#D9B68C",
          color: "#2A211A",
          fontFamily:
            "ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, sans-serif",
          padding: "2rem",
          textAlign: "center",
        }}
      >
        <div style={{ maxWidth: "32rem" }}>
          <h1 style={{ fontSize: "1.75rem", fontWeight: 800, margin: "0 0 0.75rem" }}>
            Something went wrong.
          </h1>
          <p style={{ color: "rgba(42,33,26,0.8)", lineHeight: 1.6, margin: "0 0 1.5rem" }}>
            Sorry about that. Please try again — and if it keeps happening, email us at{" "}
            <a href="mailto:nextchaptertravel26@gmail.com" style={{ color: "#9C4A28", fontWeight: 600 }}>
              nextchaptertravel26@gmail.com
            </a>
            .
          </p>
          <button
            onClick={() => reset()}
            style={{
              cursor: "pointer",
              border: "2px solid #9C4A28",
              background: "#9C4A28",
              color: "#F3E7D2",
              fontWeight: 700,
              borderRadius: "9999px",
              padding: "0.75rem 1.75rem",
              fontSize: "0.95rem",
            }}
          >
            Try again
          </button>
          {error.digest && (
            <p style={{ marginTop: "1.5rem", fontSize: "0.75rem", color: "rgba(42,33,26,0.55)" }}>
              Reference: {error.digest}
            </p>
          )}
        </div>
      </body>
    </html>
  );
}
