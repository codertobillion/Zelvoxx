import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, ArrowRight, Check, Clock, DollarSign, ArrowUpRight, Sparkles } from "lucide-react";
import { client } from "@/sanity/lib/client";
import { serviceBySlugQuery } from "@/sanity/lib/queries";
import { urlForImage } from "@/sanity/lib/image";
import Navbar from "@/src/components/layout/Navbar";
import Footer from "@/src/components/layout/Footer";
import CTASection from "@/src/components/ui/CTASection";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const service = await client.fetch(serviceBySlugQuery, { slug });

  if (!service) {
    return {
      title: "Service Not Found | Zelvoxx",
    };
  }

  return {
    title: `${service.title} | Service | Zelvoxx`,
    description: service.shortDescription,
  };
}

export default async function ServicePage({ params }: Props) {
  const { slug } = await params;

  const service = await client.fetch(serviceBySlugQuery, { slug });

  if (!service) {
    notFound();
  }

  const heroImageUrl = service.heroImage ? urlForImage(service.heroImage) : null;

  return (
    <main className="min-h-screen bg-background text-white selection:bg-primary/30">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-24 pb-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent pointer-events-none" />

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          {/* Back Link */}
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-white/50 hover:text-primary transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </Link>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Content */}
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
                <Sparkles className="w-4 h-4 text-primary" />
                <span className="text-sm font-semibold text-primary">Our Services</span>
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-black text-white leading-tight mb-6">
                {service.title}
              </h1>

              <p className="text-xl text-white/60 leading-relaxed mb-8">
                {service.shortDescription}
              </p>

              {/* Quick Info */}
              <div className="flex flex-wrap gap-4 mb-8">
                {service.duration && (
                  <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#0f0f14] rounded-full border border-white/5">
                    <Clock className="w-4 h-4 text-primary" />
                    <span className="text-white/70 text-sm">{service.duration}</span>
                  </div>
                )}
                {service.pricing && (
                  <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#0f0f14] rounded-full border border-white/5">
                    <DollarSign className="w-4 h-4 text-primary" />
                    <span className="text-white/70 text-sm">{service.pricing}</span>
                  </div>
                )}
              </div>

              {/* CTA */}
              <Link
                href="https://calendly.com/Zelvoxx"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 bg-primary hover:bg-primary/90 text-white px-8 py-4 rounded-full font-bold text-lg transition-all hover:scale-105"
              >
                {service.ctaText || "Get Started"}
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>

            {/* Hero Image */}
            {heroImageUrl && (
              <div className="relative rounded-2xl overflow-hidden aspect-[4/3]">
                <Image
                  src={heroImageUrl.url()}
                  alt={service.title}
                  fill
                  className="object-cover"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/40 to-transparent" />
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Full Description */}
      {service.fullDescription && (
        <section className="py-16 border-t border-white/5">
          <div className="max-w-4xl mx-auto px-6">
            <h2 className="text-2xl font-bold text-white mb-6">About This Service</h2>
            <p className="text-white/70 text-lg leading-relaxed whitespace-pre-wrap">
              {service.fullDescription}
            </p>
          </div>
        </section>
      )}

      {/* Features */}
      {service.features && service.features.length > 0 && (
        <section className="py-16 bg-[#0f0f14]">
          <div className="max-w-7xl mx-auto px-6">
            <h2 className="text-2xl font-bold text-white mb-8">What&apos;s Included</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {service.features.map((feature: string, index: number) => (
                <div
                  key={index}
                  className="flex items-start gap-3 p-4 bg-background rounded-xl border border-white/5"
                >
                  <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check className="w-4 h-4 text-primary" />
                  </div>
                  <span className="text-white/80">{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Benefits */}
      {service.benefits && service.benefits.length > 0 && (
        <section className="py-16 border-t border-white/5">
          <div className="max-w-7xl mx-auto px-6">
            <h2 className="text-2xl font-bold text-white mb-8">Key Benefits</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {service.benefits.map((benefit: any, index: number) => (
                <div
                  key={index}
                  className="p-6 bg-[#0f0f14] rounded-2xl border border-white/5"
                >
                  <h3 className="text-lg font-semibold text-white mb-2">{benefit.title}</h3>
                  <p className="text-white/60">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Process */}
      {service.process && service.process.length > 0 && (
        <section className="py-16 bg-[#0f0f14]">
          <div className="max-w-7xl mx-auto px-6">
            <h2 className="text-2xl font-bold text-white mb-8">Our Process</h2>
            <div className="space-y-6">
              {service.process.map((step: any, index: number) => (
                <div key={index} className="flex gap-6">
                  <div className="flex flex-col items-center">
                    <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold">
                      {step.step || index + 1}
                    </div>
                    {index < service.process.length - 1 && (
                      <div className="w-0.5 h-full bg-white/10 mt-4" />
                    )}
                  </div>
                  <div className="pb-8">
                    <h3 className="text-lg font-semibold text-white mb-2">{step.title}</h3>
                    <p className="text-white/60">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Related Case Studies */}
      {service.relatedCaseStudies && service.relatedCaseStudies.length > 0 && (
        <section className="py-16 border-t border-white/5">
          <div className="max-w-7xl mx-auto px-6">
            <h2 className="text-2xl font-bold text-white mb-8">See This Service in Action</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {service.relatedCaseStudies.map((study: any) => {
                const thumbUrl = study.thumbnail ? urlForImage(study.thumbnail) : null;
                return (
                  <Link
                    key={study._id}
                    href={`/case-study/${study.slug}`}
                    className="group block bg-[#0f0f14] rounded-xl overflow-hidden border border-white/5 hover:border-primary/30 transition-all duration-300 hover:-translate-y-1"
                  >
                    {thumbUrl && (
                      <div className="relative h-48 overflow-hidden">
                        <Image
                          src={thumbUrl.url()}
                          alt={study.title}
                          fill
                          className="object-cover group-hover:scale-105 transition duration-500"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#0f0f14] to-transparent" />
                      </div>
                    )}
                    <div className="p-6">
                      <h3 className="text-lg font-bold text-white group-hover:text-primary transition-colors">
                        {study.title}
                      </h3>
                      <p className="text-white/50 text-sm mt-2 line-clamp-2">{study.excerpt}</p>
                      {study.result && (
                        <p className="text-primary text-sm mt-4 font-semibold">{study.result}</p>
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
        title={`Ready to get started with ${service.title}?`}
        subtitle="Let's discuss how this service can help transform your business and drive measurable results."
        primaryCtaText={service.ctaText || "Get Started"}
        secondaryCtaText="View Pricing"
        secondaryCtaLink="/pricing"
      />

      <Footer />
    </main>
  );
}
