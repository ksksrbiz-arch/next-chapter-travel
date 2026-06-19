import { ImageResponse } from "next/og";

// 1200x630 share card. Self-contained, system fonts only.
export const alt = "Next Chapter Travel — Where every journey begins a new chapter";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: "linear-gradient(135deg, #2A211A 0%, #9C4A28 55%, #B5663A 100%)",
          color: "#F3E7D2",
          fontFamily: "Georgia, 'Times New Roman', serif",
          padding: 80,
          textAlign: "center",
        }}
      >
        <div
          style={{
            fontSize: 30,
            letterSpacing: 8,
            textTransform: "uppercase",
            color: "#F3E7D2",
            opacity: 0.85,
            marginBottom: 24,
          }}
        >
          Boutique Travel Agency
        </div>
        <div
          style={{
            fontSize: 104,
            fontWeight: 700,
            lineHeight: 1.05,
            color: "#F3E7D2",
          }}
        >
          Next Chapter Travel
        </div>
        <div
          style={{
            fontSize: 38,
            fontStyle: "italic",
            color: "#F3E7D2",
            opacity: 0.92,
            marginTop: 32,
          }}
        >
          Where every journey begins a new chapter
        </div>
        <div
          style={{
            display: "flex",
            marginTop: 56,
            width: 120,
            height: 4,
            borderRadius: 999,
            background: "#F3E7D2",
            opacity: 0.7,
          }}
        />
      </div>
    ),
    { ...size },
  );
}
