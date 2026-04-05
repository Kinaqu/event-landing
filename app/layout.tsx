import type { Metadata } from "next";
import { IBM_Plex_Mono, IBM_Plex_Sans, Teko } from "next/font/google";

import "./globals.css";

const headline = Teko({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-headline",
});

const body = IBM_Plex_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-body",
});

const mono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-mono",
});

export const metadata: Metadata = {
  title: "Motion Week | Brooklyn festival for motion, image, and creative technology",
  description:
    "Motion Week is a four-day Brooklyn event for motion designers, creative technologists, filmmakers, and studio teams: talks, workshops, portfolio reviews, screenings, and night programming.",
  icons: {
    icon: "/icon.svg",
    shortcut: "/icon.svg",
    apple: "/icon.svg",
  },
  openGraph: {
    title: "Motion Week",
    description:
      "Four charged days of talks, workshops, screenings, reviews, and live visual culture in Brooklyn.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Motion Week",
    description:
      "A four-day Brooklyn event for motion design, creative technology, and screen-led visual culture.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${headline.variable} ${body.variable} ${mono.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}
