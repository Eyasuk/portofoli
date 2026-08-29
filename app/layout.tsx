import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import {
  GeistPixelSquare,
  GeistPixelGrid,
  GeistPixelCircle,
  GeistPixelTriangle,
  GeistPixelLine,
} from "geist/font/pixel";
import "./globals.css";
import { defaultTheme, themeIds } from "@/lib/themes";
import { keywords, site } from "@/lib/site";
import { JsonLd } from "@/components/jsonLd";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} | ${site.jobTitle}`,
    template: `%s | ${site.name}`,
  },
  description: site.description,
  applicationName: site.name,
  authors: [{ name: site.name, url: site.url }],
  creator: site.name,
  publisher: site.name,
  category: "technology",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: `${site.name} | ${site.jobTitle}`,
    description: site.shortDescription,
    url: site.url,
    siteName: site.name,
    images: [
      {
        url: site.portrait.url,
        width: site.portrait.width,
        height: site.portrait.height,
        alt: site.portrait.alt,
        type: "image/png",
      },
    ],
    locale: "en_US",
    type: "profile",
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.name} | ${site.jobTitle}`,
    description: site.shortDescription,
    site: site.twitter,
    creator: site.twitter,
    images: [site.portrait.url],
  },
  keywords,
  icons: {
    icon: "/favicon.ico",
  },
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      // Let Google use full size thumbnails and untruncated snippets.
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  // Paste the token from Google Search Console here once the property is
  // verified, then redeploy:
  // verification: { google: "..." },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // Applied before first paint so the stored theme never flashes the default.
  const themeScript = `(function(){try{var t=localStorage.getItem("theme");if(t&&${JSON.stringify(
    themeIds
  )}.indexOf(t)>-1){document.documentElement.dataset.theme=t}}catch(e){}})()`;

  return (
    <html lang="en" data-theme={defaultTheme}>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
        <JsonLd />
      </head>
      <body
        className={`${GeistSans.variable} ${GeistMono.variable} ${GeistPixelSquare.variable} ${GeistPixelGrid.variable} ${GeistPixelCircle.variable} ${GeistPixelTriangle.variable} ${GeistPixelLine.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
