import { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, CheckCircle, Search, Zap, TrendingUp, Target, Users, MessageCircle, Calendar } from "lucide-react";
import { client } from "@/sanity/lib/client";
import { whyZelvoxQuery } from "@/sanity/lib/queries";
import Navbar from "@/src/components/layout/Navbar";
import Footer from "@/src/components/layout/Footer";

export const revalidate = 60;

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Why Zelvox | Premium Digital Growth Partner",
    description: "Discover why ambitious brands choose Zelvox as their digital growth partner. We build systems that scale, not just campaigns that run.",
  };
}

// Animation wrapper component for client-side animations
import WhyZelvoxContent from "./components/WhyZelvoxContent";

export default async function WhyZelvoxPage() {
  const data = await client.fetch(whyZelvoxQuery);

  return (
    <main className="min-h-screen bg-background text-white selection:bg-primary/30">
      <Navbar />
      <WhyZelvoxContent data={data} />
      <Footer />
    </main>
  );
}
