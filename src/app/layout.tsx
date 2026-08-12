import type { Metadata, Viewport } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";

import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const jetBrainsMono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://hafizmahsan.github.io"),

  title: {
    default: "Hafiz Mahsan | Senior RPA Consultant & Solution Architect",
    template: "%s | Hafiz Mahsan",
  },

  description:
    "Professional portfolio of Hafiz Mahsan — Senior RPA Consultant, automation engineer and solution architect specializing in enterprise automation, RPA and technology solutions.",

  keywords: [
    "Hafiz Mahsan",
    "RPA Consultant",
    "Senior RPA Consultant",
    "RPA Developer",
    "Solution Architect",
    "Automation Consultant",
    "Enterprise Automation",
    "Robotic Process Automation",
    "RPA Saudi Arabia",
    "RPA Developer Saudi Arabia",
    "Automation Architecture",
    "Power Automate",
    "UiPath",
    "Blue Prism",
    "Enterprise Integration",
  ],

  authors: [
    {
      name: "Hafiz Mahsan",
      url: "https://hafizmahsan.github.io",
    },
  ],

  creator: "Hafiz Mahsan",

  category: "technology",

  applicationName: "Hafiz Mahsan Portfolio",

  referrer: "origin-when-cross-origin",

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },

  alternates: {
    canonical: "https://hafizmahsan.github.io",
  },

  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://hafizmahsan.github.io",
    siteName: "Hafiz Mahsan",
    title: "Hafiz Mahsan | Senior RPA Consultant & Solution Architect",
    description:
      "Senior RPA Consultant and Solution Architect specializing in enterprise automation, RPA, integration and technology solutions.",
  },

  twitter: {
    card: "summary_large_image",
    title: "Hafiz Mahsan | Senior RPA Consultant & Solution Architect",
    description:
      "Senior RPA Consultant and Solution Architect specializing in enterprise automation and RPA.",
  },

  manifest: "/site.webmanifest",
};

export const viewport: Viewport = {
  themeColor: "#07090d",
  colorScheme: "dark",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${inter.variable} ${jetBrainsMono.variable} bg-background font-sans text-foreground antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
