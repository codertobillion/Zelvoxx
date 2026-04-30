import { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { client } from "@/sanity/lib/client";
import { caseStudiesQuery } from "@/sanity/lib/queries";
import PortfolioContent from "@/src/components/sections/PortfolioContent";
import Footer from "@/src/components/layout/Footer";

export const metadata: Metadata = {
  title: "Our Work | ZELVOX",
  description: "View our portfolio of premium digital growth systems that generate predictable revenue.",
};

export const revalidate = 60;

export default async function PortfolioPage() {
  const caseStudiesData = await client.fetch(caseStudiesQuery).catch(() => []);

  return (
    <main className="min-h-screen bg-background text-white">
      {/* Header */}
      <header className="fixed top-0 left-0 w-full z-50 glass border-b-0">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <Link href="/" className="text-2xl font-heading font-black text-white tracking-widest flex items-center gap-2">
            ZELVOX<span className="text-primary -ml-2">.</span>
          </Link>
          <Link 
            href="/" 
            className="flex items-center gap-2 text-sm font-semibold text-white/70 hover:text-primary transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back Home
          </Link>
        </div>
      </header>

      {/* Page Content */}
      <div className="pt-20">
        {/* Page Header */}
        <section className="py-20 md:py-32 bg-background relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent pointer-events-none" />
          
          <div className="max-w-7xl mx-auto px-6 relative z-10">
            <div className="text-center max-w-3xl mx-auto">
              <span className="text-xs font-bold tracking-[0.2em] text-primary uppercase mb-6 block">
                Portfolio
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-black text-white leading-tight mb-6">
                Results that <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-primary">speak for themselves.</span>
              </h1>
              <p className="text-lg text-white/60 max-w-2xl mx-auto">
                Conversion-focused systems, measured by pipeline and revenue outcomes.
              </p>
            </div>
          </div>
        </section>

        {/* Portfolio Grid */}
        <PortfolioContent data={caseStudiesData} />
      </div>

      <Footer />
    </main>
  );
}
