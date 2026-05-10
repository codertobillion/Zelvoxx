import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const poppins = Poppins({
  weight: ["400", "600", "700", "800"],
  subsets: ["latin"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://Zelvoxx.com"),
  title: "Zelvoxx - Premium Digital Growth Agency",
  description:
    "We architect premium digital growth systems that generate predictable revenue and dominate industries.",
};

import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className="dark scroll-smooth overflow-x-hidden text-[15px] sm:text-[16px]"
    >
      <body
        className={`${inter.variable} ${poppins.variable} antialiased bg-background text-white overflow-x-hidden min-h-screen`}
      >
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}