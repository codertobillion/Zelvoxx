import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, ArrowUpRight, TrendingUp } from "lucide-react";
import { client } from "@/sanity/lib/client";
import { caseStudiesQuery } from "@/sanity/lib/queries";
import { urlForImage } from "@/sanity/lib/image";
import Footer from "@/src/components/layout/Footer";

export const metadata: Metadata = {
  title: "Case Studies | ZELVOX",
  description: "Deep-dive case studies showcasing how we build digital growth systems that generate predictable revenue.",
};

export const revalidate = 60;

export default async function CaseStudiesPage() {
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
                Case Studies
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-black text-white leading-tight mb-6">
                Deep-dive <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-primary">success stories.</span>
              </h1>
              <p className="text-lg text-white/60 max-w-2xl mx-auto">
                See exactly how we transform businesses with conversion-focused digital systems.
              </p>
            </div>
          </div>
        </section>

        {/* Case Studies Grid */}
        <section className="py-20 pb-32">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {caseStudiesData.map((study: any, idx: number) => {
                const imageUrl = urlForImage(study.image);
                
                return (
                  <div
                    key={study._id || idx}
                    className="group relative rounded-2xl overflow-hidden bg-[#0f0f14] border border-white/10 hover:border-primary/40 transition-all duration-300"
                  >
                    {/* Image */}
                    {imageUrl ? (
                      <div className="relative h-[200px] overflow-hidden">
                        <Image
                          src={imageUrl.url()}
                          alt={study.clientName || study.title}
                          fill
                          sizes="(max-width: 768px) 100vw, 33vw"
                          className="object-cover group-hover:scale-105 transition duration-500"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#0f0f14] to-transparent" />
                      </div>
                    ) : (
                      <div className="h-[200px] bg-gradient-to-br from-primary/20 to-accent/20" />
                    )}

                    {/* Content */}
                    <div className="p-6">
                      <span className="text-xs px-3 py-1 bg-white/10 rounded-full text-white/70 mb-4 inline-block">
                        {study.industry || study.niche || "Case Study"}
                      </span>
                      
                      <h3 className="text-xl font-bold text-white mb-2">
                        {study.clientName || study.title}
                      </h3>
                      
                      <div className="flex items-center gap-2 text-primary mb-4">
                        <TrendingUp className="w-4 h-4" />
                        <span className="font-semibold">{study.result}</span>
                      </div>
                      
                      <p className="text-white/60 text-sm line-clamp-3 mb-6">
                        {study.problem}
                      </p>

                      {/* CTA */}
                      {study.slug && (
                        <Link
                          href={`/case-study/${study.slug}`}
                          className="inline-flex items-center gap-2 text-sm font-semibold text-white hover:text-primary transition-colors"
                        >
                          Read Full Case Study
                          <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                        </Link>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>

            {caseStudiesData.length === 0 && (
              <div className="text-center py-20">
                <p className="text-white/60">No case studies found. Check back soon!</p>
              </div>
            )}
          </div>
        </section>
      </div>

      <Footer />
    </main>
  );
}
