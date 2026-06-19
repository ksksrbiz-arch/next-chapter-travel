import { ImageResponse } from "next/og";

// Apple touch icon: the same monogram, sized for home-screen bookmarks.
export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#B5663A",
          color: "#F3E7D2",
          fontSize: 96,
          fontWeight: 700,
          letterSpacing: -4,
        }}
      >
        NC
      </div>
    ),
    { ...size },
  );
}
