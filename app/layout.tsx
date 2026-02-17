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

export const metadata: Metadata = {
  metadataBase: new URL("https://eyasuk.semayi.xyz"),
  title: "Eyasu Kibru",
  description:
    "Computer Engineer from Addis Ababa, Ethiopia and full stack developer focused on practical solutions and open-source values.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Eyasu Kibru",
    description:
      "Computer Engineer from Addis Ababa, Ethiopia and full stack developer focused on practical solutions and open-source values.",
    url: "https://eyasuk.semayi.xyz",
    siteName: "Eyasu Kibru",
    images: [
      {
        url: "/mine1.png",
        alt: "Eyasu Kibru portrait",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Eyasu Kibru",
    description:
      "Computer Engineer from Addis Ababa, Ethiopia and full stack developer focused on practical solutions and open-source values.",
    creator: "@Eyasu_kga",
    images: ["/mine1.png"],
  },
  keywords: [
    "Eyasu Kibru",
    "Computer Engineer",
    "Full Stack Developer",
    "Addis Ababa",
    "Ethiopia",
    "Open Source",
    "Software Engineer",
    "Web Development",
    "warka fitness",
    "solicy",
    "create a website in Ethiopia",
    "out source"
  ],
  icons: {
    icon: "/favicon.ico",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${GeistSans.variable} ${GeistMono.variable} ${GeistPixelSquare.variable} ${GeistPixelGrid.variable} ${GeistPixelCircle.variable} ${GeistPixelTriangle.variable} ${GeistPixelLine.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
