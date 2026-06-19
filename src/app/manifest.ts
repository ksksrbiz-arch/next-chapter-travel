import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Next Chapter Travel",
    short_name: "Next Chapter",
    description:
      "A boutique travel agency for theme-park adventures and luxury cruises.",
    start_url: "/",
    display: "standalone",
    background_color: "#F3E7D2",
    theme_color: "#B5663A",
    icons: [
      {
        src: "/icon",
        sizes: "32x32",
        type: "image/png",
      },
    ],
  };
}
