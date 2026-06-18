import type { Metadata } from "next";
import { Fraunces, Inter } from "next/font/google";
import "./globals.css";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";

const fraunces = Fraunces({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-fraunces",
  axes: ["opsz", "SOFT", "WONK"],
});

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://nextchaptertravel.com"),
  title: {
    default: "Next Chapter Travel — Your Next Chapter of Travel",
    template: "%s · Next Chapter Travel",
  },
  description:
    "A boutique travel agency for theme-park adventures and luxury cruises. Two specialists, one agency, every detail handled. Start your next chapter of travel.",
  keywords: [
    "travel agency",
    "Disney travel planner",
    "Universal vacation planner",
    "luxury cruise planner",
    "all-inclusive resorts",
    "family travel",
  ],
  openGraph: {
    title: "Next Chapter Travel — Your Next Chapter of Travel",
    description:
      "Theme-park adventures and luxury cruises, planned end to end. Two specialists, one agency.",
    url: "https://nextchaptertravel.com",
    siteName: "Next Chapter Travel",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${fraunces.variable} ${inter.variable}`}>
      <body className="min-h-dvh">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded-md focus:bg-ink focus:px-4 focus:py-2 focus:text-paper"
        >
          Skip to content
        </a>
        <SiteHeader />
        <main id="main">{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
