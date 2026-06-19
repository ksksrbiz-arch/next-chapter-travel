import type { Metadata, Viewport } from "next";
import { Pinyon_Script, Mulish } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { JsonLd } from "@/components/json-ld";
import { CookieConsent } from "@/components/cookie-consent";
import { ScrollProgress } from "@/components/scroll-progress";
import { BackToTop } from "@/components/back-to-top";

// Pinyon Script — the flowing brand hand used for section kickers & the wordmark.
const script = Pinyon_Script({
  subsets: ["latin"],
  weight: "400",
  display: "swap",
  variable: "--font-script",
});

// Mulish — clean, professional sans for body, UI, and headlines.
const mulish = Mulish({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-mulish",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://nextchaptertravel.com"),
  title: {
    default: "Next Chapter Travel — Your Next Chapter of Travel",
    template: "%s · Next Chapter Travel",
  },
  description:
    "A boutique travel agency for theme-park adventures and luxury cruises. Real specialists, one agency, every detail handled. Start your next chapter of travel.",
  keywords: [
    "travel agency",
    "Disney travel planner",
    "Universal vacation planner",
    "luxury cruise planner",
    "all-inclusive resorts",
    "family travel",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Next Chapter Travel — Your Next Chapter of Travel",
    description:
      "Theme-park adventures and luxury cruises, planned end to end. Real specialists, one agency.",
    url: "https://nextchaptertravel.com",
    siteName: "Next Chapter Travel",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Next Chapter Travel — Your Next Chapter of Travel",
    description:
      "Theme-park adventures and luxury cruises, planned end to end. Real specialists, one agency.",
  },
  manifest: "/manifest.webmanifest",
  icons: {
    icon: "/icon",
    apple: "/apple-icon",
  },
};

export const viewport: Viewport = {
  themeColor: "#B5663A",
  colorScheme: "light",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${script.variable} ${mulish.variable}`}>
      <head>
        {/* Speed up the first image (LCP) and analytics handshakes. */}
        <link rel="preconnect" href="https://images.unsplash.com" />
        <link rel="preconnect" href="https://plausible.io" />
      </head>
      <body className="min-h-dvh">
        {/* Privacy-friendly, cookieless analytics by Plausible. */}
        <Script
          defer
          src="https://plausible.io/js/pa-Vd3C4AtnUukMi8-1m_JyU.js"
          strategy="afterInteractive"
        />
        <Script id="plausible-init" strategy="afterInteractive">
          {`window.plausible=window.plausible||function(){(plausible.q=plausible.q||[]).push(arguments)},plausible.init=plausible.init||function(i){plausible.o=i||{}};plausible.init()`}
        </Script>
        <JsonLd />
        <ScrollProgress />
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded-md focus:bg-ink focus:px-4 focus:py-2 focus:text-paper"
        >
          Skip to content
        </a>
        <SiteHeader />
        <main id="main">{children}</main>
        <SiteFooter />
        <CookieConsent />
        <BackToTop />
      </body>
    </html>
  );
}
