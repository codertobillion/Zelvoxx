import { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, CheckCircle, Search, Zap, TrendingUp, Target, Users, MessageCircle, Calendar } from "lucide-react";
import { client } from "@/sanity/lib/client";
import { whyZelvoxxQuery } from "@/sanity/lib/queries";
import Navbar from "@/src/components/layout/Navbar";
import Footer from "@/src/components/layout/Footer";

export const revalidate = 60;

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Why Zelvoxx | Premium Digital Growth Partner",
    description: "Discover why ambitious brands choose Zelvoxx as their digital growth partner. We build systems that scale, not just campaigns that run.",
  };
}

// Animation wrapper component for client-side animations
import WhyZelvoxxContent from "./components/WhyZelvoxxContent";

export default async function WhyZelvoxxPage() {
  const data = await client.fetch(whyZelvoxxQuery);

  return (
    <main className="min-h-screen bg-background text-white selection:bg-primary/30">
      <Navbar />
      <WhyZelvoxxContent data={data} />
      <Footer />
    </main>
  );
}
