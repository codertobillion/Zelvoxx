import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, ArrowUpRight, Clock, Briefcase, TrendingUp, Lightbulb, Target } from "lucide-react";
import { client } from "@/sanity/lib/client";
import { caseStudyBySlugQuery, relatedCaseStudiesQuery } from "@/sanity/lib/queries";
import { urlForImage } from "@/sanity/lib/image";
import Navbar from "@/src/components/layout/Navbar";
import Footer from "@/src/components/layout/Footer";
import CTASection from "@/src/components/ui/CTASection";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const caseStudy = await client.fetch(caseStudyBySlugQuery, { slug });

  if (!caseStudy) {
    return {
      title: "Case Study Not Found | Zelvoxx",
    };
  }

  return {
    title: `${caseStudy.title} | Case Study | Zelvoxx`,
    description: caseStudy.excerpt,
  };
}

export default async function CaseStudyPage({ params }: Props) {
  const { slug } = await params;

  const [caseStudy, relatedCaseStudies] = await Promise.all([
    client.fetch(caseStudyBySlugQuery, { slug }),
    client.fetch(relatedCaseStudiesQuery, { slug }),
  ]);

  if (!caseStudy) {
    notFound();
  }

  const heroImageUrl = caseStudy.heroImage ? urlForImage(caseStudy.heroImage) : null;
  const clientLogoUrl = caseStudy.clientLogo ? urlForImage(caseStudy.clientLogo) : null;

  return (
    <main className="min-h-screen bg-background text-white selection:bg-primary/30">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-24 pb-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent pointer-events-none" />

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          {/* Back Link */}
          <Link
            href="/case-studies"
            className="inline-flex items-center gap-2 text-white/50 hover:text-primary transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Case Studies
          </Link>

          {/* Header */}
          <div className="max-w-4xl">
            {/* Industry Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
              <Briefcase className="w-4 h-4 text-primary" />
              <span className="text-sm font-semibold text-primary">{caseStudy.industry}</span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-black text-white leading-tight mb-6">
              {caseStudy.title}
            </h1>

            {caseStudy.excerpt && (
              <p className="text-xl text-white/60 max-w-2xl leading-relaxed">
                {caseStudy.excerpt}
              </p>
            )}
          </div>

          {/* Hero Image */}
          {heroImageUrl && (
            <div className="mt-12 relative rounded-2xl overflow-hidden aspect-video">
              <Image
                src={heroImageUrl.url()}
                alt={caseStudy.title}
                fill
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent" />
            </div>
          )}
        </div>
      </section>

      {/* Case Study Content */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-12">
              {/* Problem Section */}
              {caseStudy.problem && (
                <div className="bg-[#0f0f14] rounded-2xl p-8 border border-white/5">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-12 h-12 rounded-xl bg-red-500/10 flex items-center justify-center">
                      <Lightbulb className="w-6 h-6 text-red-400" />
                    </div>
                    <h2 className="text-2xl font-bold text-white">The Problem</h2>
                  </div>
                  <p className="text-white/70 text-lg leading-relaxed whitespace-pre-wrap">
                    {caseStudy.problem}
                  </p>
                </div>
              )}

              {/* Solution Section */}
              {caseStudy.solution && (
                <div className="bg-[#0f0f14] rounded-2xl p-8 border border-white/5">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                      <Target className="w-6 h-6 text-primary" />
                    </div>
                    <h2 className="text-2xl font-bold text-white">Our Solution</h2>
                  </div>
                  <p className="text-white/70 text-lg leading-relaxed whitespace-pre-wrap">
                    {caseStudy.solution}
                  </p>
                </div>
              )}

              {/* Result Section */}
              {caseStudy.result && (
                <div className="bg-gradient-to-br from-primary/10 to-accent/10 rounded-2xl p-8 border border-primary/20">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center">
                      <TrendingUp className="w-6 h-6 text-primary" />
                    </div>
                    <h2 className="text-2xl font-bold text-white">The Result</h2>
                  </div>
                  <p className="text-white/70 text-lg leading-relaxed whitespace-pre-wrap">
                    {caseStudy.result}
                  </p>
                </div>
              )}

              {/* Key Results Grid */}
              {caseStudy.results && caseStudy.results.length > 0 && (
                <div>
                  <h3 className="text-xl font-bold text-white mb-6">Key Metrics</h3>
                  <div className="grid sm:grid-cols-3 gap-4">
                    {caseStudy.results.map((result: any, index: number) => (
                      <div
                        key={index}
                        className="bg-[#0f0f14] rounded-xl p-6 border border-white/5 text-center"
                      >
                        <div className="text-3xl font-black text-primary mb-2">
                          {result.value}
                        </div>
                        <div className="text-white/60 text-sm">{result.label}</div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Technologies */}
              {caseStudy.technologies && caseStudy.technologies.length > 0 && (
                <div>
                  <h3 className="text-xl font-bold text-white mb-4">Technologies Used</h3>
                  <div className="flex flex-wrap gap-2">
                    {caseStudy.technologies.map((tech: string, index: number) => (
                      <span
                        key={index}
                        className="px-4 py-2 bg-white/5 rounded-full text-white/70 text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Client Info Card */}
              <div className="bg-[#0f0f14] rounded-2xl p-6 border border-white/5 sticky top-24">
                <h3 className="text-lg font-bold text-white mb-4">Project Details</h3>

                <div className="space-y-4">
                  {caseStudy.clientName && (
                    <div className="flex items-start gap-3">
                      <div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center flex-shrink-0">
                        {clientLogoUrl ? (
                          <Image
                            src={clientLogoUrl.url()}
                            alt={caseStudy.clientName}
                            width={24}
                            height={24}
                            className="object-contain"
                          />
                        ) : (
                          <span className="text-sm font-bold text-primary">
                            {caseStudy.clientName.charAt(0)}
                          </span>
                        )}
                      </div>
                      <div>
                        <p className="text-white/50 text-sm">Client</p>
                        <p className="font-semibold text-white">{caseStudy.clientName}</p>
                      </div>
                    </div>
                  )}

                  {caseStudy.duration && (
                    <div className="flex items-start gap-3">
                      <div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center flex-shrink-0">
                        <Clock className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <p className="text-white/50 text-sm">Duration</p>
                        <p className="font-semibold text-white">{caseStudy.duration}</p>
                      </div>
                    </div>
                  )}

                  {caseStudy.industry && (
                    <div className="flex items-start gap-3">
                      <div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center flex-shrink-0">
                        <Briefcase className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <p className="text-white/50 text-sm">Industry</p>
                        <p className="font-semibold text-white">{caseStudy.industry}</p>
                      </div>
                    </div>
                  )}
                </div>

                {/* CTA Button */}
                <Link
                  href="https://calendly.com/Zelvoxx"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 block w-full text-center bg-primary hover:bg-primary/90 text-white py-3 rounded-xl font-semibold transition-all hover:scale-105"
                >
                  Start Similar Project
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Case Studies */}
      {relatedCaseStudies && relatedCaseStudies.length > 0 && (
        <section className="py-16 border-t border-white/5">
          <div className="max-w-7xl mx-auto px-6">
            <h2 className="text-2xl font-bold text-white mb-8">More Case Studies</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {relatedCaseStudies.map((study: any) => {
                const thumbUrl = study.thumbnail ? urlForImage(study.thumbnail) : null;
                // Fallback to _id if no slug
                const studySlug = study.slug || study._id;
                const href = studySlug ? `/case-study/${studySlug}` : "#";
                const displayTitle = study.title || study.clientName || "Case Study";

                return (
                  <Link
                    key={study._id}
                    href={href}
                    className="group block bg-[#0f0f14] rounded-xl overflow-hidden border border-white/5 hover:border-primary/30 transition-all duration-300 hover:-translate-y-1"
                  >
                    {/* Image or Fallback */}
                    <div className="relative h-48 overflow-hidden bg-gradient-to-br from-primary/20 to-accent/20">
                      {thumbUrl ? (
                        <Image
                          src={thumbUrl.url()}
                          alt={displayTitle}
                          fill
                          className="object-cover group-hover:scale-105 transition duration-500"
                        />
                      ) : (
                        <div className="w-full h-full flex items-center justify-center">
                          <span className="text-5xl font-black text-white/10">{displayTitle.charAt(0)}</span>
                        </div>
                      )}
                      <div className="absolute inset-0 bg-gradient-to-t from-[#0f0f14] to-transparent" />
                    </div>

                    <div className="p-6">
                      {study.industry && (
                        <span className="text-xs text-primary font-semibold">{study.industry}</span>
                      )}
                      <h3 className="text-lg font-bold text-white mt-2 group-hover:text-primary transition-colors">
                        {displayTitle}
                      </h3>
                      {study.excerpt && (
                        <p className="text-white/50 text-sm mt-2 line-clamp-2">{study.excerpt}</p>
                      )}
                      {study.result && (
                        <p className="text-primary text-sm mt-3 font-semibold">{study.result}</p>
                      )}
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        </section>
      )}

      {/* CTA Section */}
      <CTASection
        title="Want results like these?"
        subtitle="Let's discuss how we can build a custom digital growth system for your business."
        primaryCtaText="Book a Free Strategy Call"
        secondaryCtaText="View All Services"
        secondaryCtaLink="/pricing"
      />

      <Footer />
    </main>
  );
}