import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const poppins = Poppins({ 
  weight: ["400", "600", "700", "800"],
  subsets: ["latin"], 
  variable: "--font-poppins" 
});

export const metadata: Metadata = {
  metadataBase: new URL("https://zelvox.com"),
  title: "ZELVOX - Premium Digital Growth Agency",
  description: "We architect premium digital growth systems that generate predictable revenue and dominate industries. Custom software, sleek funnels, and precision scaling.",
  keywords: ["digital agency", "growth systems", "premium web design", "Custom SaaS", "B2B marketing"],
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "ZELVOX | Build. Scale. Dominate.",
    description: "High-end digital agency prioritizing custom growth systems.",
    url: "https://zelvox.com",
    siteName: "ZELVOX",
    images: [
      {
        url: "https://zelvox.com/og-placeholder.jpg",
        width: 1200,
        height: 630,
        alt: "ZELVOX Premium Digital Agency",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "ZELVOX | Build. Scale. Dominate.",
    description: "High-end digital agency prioritizing custom growth systems.",
    creator: "@zelvox",
    images: ["https://zelvox.com/og-placeholder.jpg"],
  },
};

import CustomCursor from "@/src/components/ui/CustomCursor";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth overflow-x-hidden text-[14px] md:text-[16px]">
      <body className={`${inter.variable} ${poppins.variable} antialiased bg-background text-white font-body leading-relaxed overflow-x-hidden w-full relative`}>
        <CustomCursor />
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
