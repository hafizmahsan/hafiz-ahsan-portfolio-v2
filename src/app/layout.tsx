import type { Metadata, Viewport } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";

import "./globals.css";

import { profile } from "@/data/profile";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://hafizmahsan.github.io"),

  title: {
    default: `${profile.name} — Senior RPA Consultant & Solution Architect`,
    template: `%s | ${profile.name}`,
  },

  description:
    "Professional portfolio of Hafiz Mahsan — Senior RPA Consultant and Solution Architect specializing in enterprise automation, RPA, process engineering and scalable technology solutions.",

  keywords: [
    "Hafiz Mahsan",
    "RPA Consultant",
    "Senior RPA Consultant",
    "RPA Developer",
    "Solution Architect",
    "Automation",
    "Enterprise Automation",
    "UiPath",
    "RPA Architecture",
    "Saudi Arabia",
    "IT Consultant",
  ],

  authors: [
    {
      name: profile.name,
    },
  ],

  creator: profile.name,

  applicationName: "Hafiz Mahsan Portfolio",

  alternates: {
    canonical: "/",
  },

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

  openGraph: {
    type: "website",
    locale: "en_US",
    url: "/",
    siteName: `${profile.name} Portfolio`,
    title: `${profile.name} — Senior RPA Consultant & Solution Architect`,
    description:
      "Enterprise RPA, automation architecture and technology solutions.",
  },

  twitter: {
    card: "summary_large_image",
    title: `${profile.name} — Senior RPA Consultant & Solution Architect`,
    description:
      "Enterprise RPA, automation architecture and technology solutions.",
  },

  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
  colorScheme: "dark",
  themeColor: "#07090d",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.variable} ${jetbrainsMono.variable} bg-background font-sans text-foreground antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
