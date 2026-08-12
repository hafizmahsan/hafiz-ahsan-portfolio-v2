import type { Metadata, Viewport } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Hafiz Ahsan | RPA Consultant & Solution Architect",
    template: "%s | Hafiz Ahsan",
  },
  description:
    "Professional portfolio of Hafiz Ahsan — Senior RPA Consultant, Automation Engineer and Solution Architect with 6+ years of IT experience.",
  keywords: [
    "Hafiz Ahsan",
    "RPA",
    "Robotic Process Automation",
    "RPA Consultant",
    "RPA Developer",
    "Solution Architect",
    "Automation",
    "Intelligent Automation",
    "Power Automate",
    "UiPath",
    "Enterprise Automation",
    "Saudi Arabia",
  ],
  authors: [
    {
      name: "Hafiz Ahsan",
    },
  ],
  creator: "Hafiz Ahsan",
  metadataBase: new URL("https://hafizmahsan.github.io"),
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://hafizmahsan.github.io",
    title: "Hafiz Ahsan | RPA Consultant & Solution Architect",
    description:
      "Senior RPA Consultant and Solution Architect specializing in enterprise automation, intelligent process automation and scalable digital solutions.",
    siteName: "Hafiz Ahsan",
  },
  twitter: {
    card: "summary_large_image",
    title: "Hafiz Ahsan | RPA Consultant & Solution Architect",
    description:
      "Senior RPA Consultant and Solution Architect specializing in enterprise automation and digital transformation.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  themeColor: "#05070A",
  colorScheme: "dark",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.variable} ${spaceGrotesk.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
