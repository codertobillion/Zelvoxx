import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, Star, Quote, Globe, ArrowUpRight } from "lucide-react";
import { client } from "@/sanity/lib/client";
import { testimonialBySlugQuery } from "@/sanity/lib/queries";
import { urlForImage } from "@/sanity/lib/image";
import Navbar from "@/src/components/layout/Navbar";
import Footer from "@/src/components/layout/Footer";
import CTASection from "@/src/components/ui/CTASection";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const testimonial = await client.fetch(testimonialBySlugQuery, { slug });

  if (!testimonial) {
    return {
      title: "Testimonial Not Found | ZELVOX",
    };
  }

  return {
    title: `${testimonial.name} - Client Testimonial | ZELVOX`,
    description: testimonial.excerpt || testimonial.content,
  };
}

export default async function TestimonialPage({ params }: Props) {
  const { slug } = await params;

  const testimonial = await client.fetch(testimonialBySlugQuery, { slug });

  if (!testimonial) {
    notFound();
  }

  const imageUrl = testimonial.image ? urlForImage(testimonial.image) : null;
  const companyLogoUrl = testimonial.companyLogo ? urlForImage(testimonial.companyLogo) : null;

  return (
    <main className="min-h-screen bg-background text-white selection:bg-primary/30">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-24 pb-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent pointer-events-none" />

        <div className="max-w-4xl mx-auto px-6 relative z-10">
          {/* Back Link */}
          <Link
            href="/testimonials"
            className="inline-flex items-center gap-2 text-white/50 hover:text-primary transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Testimonials
          </Link>

          {/* Client Info */}
          <div className="flex flex-col md:flex-row items-start md:items-center gap-6 mb-8">
            {imageUrl ? (
              <div className="relative w-24 h-24 rounded-full overflow-hidden border-2 border-primary/30">
                <Image
                  src={imageUrl.url()}
                  alt={testimonial.name}
                  fill
                  className="object-cover"
                />
              </div>
            ) : (
              <div className="w-24 h-24 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-3xl font-bold">
                {testimonial.name?.charAt(0)}
              </div>
            )}

            <div>
              <h1 className="text-3xl md:text-4xl font-heading font-black text-white mb-2">
                {testimonial.name}
              </h1>
              <p className="text-white/60">
                {testimonial.role} at {testimonial.company}
              </p>
            </div>
          </div>

          {/* Star Rating */}
          <div className="flex items-center gap-1 mb-8">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className={`w-6 h-6 ${
                  i < (testimonial.rating || 5)
                    ? "fill-primary text-primary"
                    : "text-white/20"
                }`}
              />
            ))}
            <span className="ml-2 text-white/60 text-sm">
              {testimonial.rating || 5}/5 Rating
            </span>
          </div>
        </div>
      </section>

      {/* Testimonial Content */}
      <section className="py-8">
        <div className="max-w-4xl mx-auto px-6">
          {/* Main Quote */}
          <div className="relative">
            <Quote className="absolute -top-4 -left-2 w-16 h-16 text-primary/10" />
            <blockquote className="relative text-2xl md:text-3xl text-white/90 leading-relaxed pl-8 border-l-2 border-primary">
              &ldquo;{testimonial.content}&rdquo;
            </blockquote>
          </div>

          {/* Full Story */}
          {testimonial.fullStory && (
            <div className="mt-12">
              <h2 className="text-xl font-bold text-white mb-4">The Full Story</h2>
              <div className="prose prose-invert prose-lg max-w-none">
                <p className="text-white/70 leading-relaxed whitespace-pre-wrap">
                  {testimonial.fullStory}
                </p>
              </div>
            </div>
          )}

          {/* Social Links */}
          {testimonial.socialLinks && (
            <div className="mt-10 flex items-center gap-4">
              <span className="text-white/50 text-sm">Connect:</span>
              {testimonial.socialLinks.linkedin && (
                <a
                  href={testimonial.socialLinks.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 bg-white/5 rounded-lg hover:bg-primary/20 transition-colors text-white/70 hover:text-white"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </a>
              )}
              {testimonial.socialLinks.twitter && (
                <a
                  href={testimonial.socialLinks.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 bg-white/5 rounded-lg hover:bg-primary/20 transition-colors text-white/70 hover:text-white"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                  </svg>
                </a>
              )}
              {testimonial.socialLinks.website && (
                <a
                  href={testimonial.socialLinks.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 bg-white/5 rounded-lg hover:bg-primary/20 transition-colors"
                >
                  <Globe className="w-5 h-5 text-white/70" />
                </a>
              )}
            </div>
          )}
        </div>
      </section>

      {/* Related Case Study */}
      {testimonial.caseStudy && (
        <section className="py-16 border-t border-white/5">
          <div className="max-w-4xl mx-auto px-6">
            <h2 className="text-2xl font-bold text-white mb-6">Related Case Study</h2>
            <Link
              href={`/case-study/${testimonial.caseStudy.slug}`}
              className="group block bg-[#0f0f14] rounded-2xl p-6 border border-white/5 hover:border-primary/30 transition-all duration-300"
            >
              <div className="flex items-start justify-between">
                <div>
                  <span className="text-sm text-primary font-semibold">Case Study</span>
                  <h3 className="text-xl font-bold text-white mt-1 group-hover:text-primary transition-colors">
                    {testimonial.caseStudy.title}
                  </h3>
                  <p className="text-white/50 mt-2">{testimonial.caseStudy.excerpt}</p>
                  {testimonial.caseStudy.result && (
                    <p className="text-primary mt-4 font-semibold">
                      Result: {testimonial.caseStudy.result}
                    </p>
                  )}
                </div>
                <ArrowUpRight className="w-6 h-6 text-white/30 group-hover:text-primary transition-colors" />
              </div>
            </Link>
          </div>
        </section>
      )}

      {/* More Testimonials */}
      {testimonial.relatedTestimonials && testimonial.relatedTestimonials.length > 0 && (
        <section className="py-16 border-t border-white/5">
          <div className="max-w-7xl mx-auto px-6">
            <h2 className="text-2xl font-bold text-white mb-8">More Client Stories</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {testimonial.relatedTestimonials.map((t: any) => {
                const thumbUrl = t.image ? urlForImage(t.image) : null;
                return (
                  <Link
                    key={t._id}
                    href={`/testimonial/${t.slug}`}
                    className="group block bg-[#0f0f14] rounded-xl p-6 border border-white/5 hover:border-primary/30 transition-all duration-300 hover:-translate-y-1"
                  >
                    <div className="flex items-center gap-3 mb-4">
                      {thumbUrl ? (
                        <div className="relative w-12 h-12 rounded-full overflow-hidden">
                          <Image
                            src={thumbUrl.url()}
                            alt={t.name}
                            fill
                            className="object-cover"
                          />
                        </div>
                      ) : (
                        <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center font-bold">
                          {t.name?.charAt(0)}
                        </div>
                      )}
                      <div>
                        <h4 className="font-semibold text-white group-hover:text-primary transition-colors">
                          {t.name}
                        </h4>
                        <p className="text-white/50 text-sm">{t.role} at {t.company}</p>
                      </div>
                    </div>
                    <p className="text-white/60 text-sm line-clamp-3">{t.excerpt}</p>
                  </Link>
                );
              })}
            </div>
          </div>
        </section>
      )}

      {/* CTA Section */}
      <CTASection
        title="Join our satisfied clients"
        subtitle="Experience the same results-driven approach that transformed their businesses."
        primaryCtaText="Start Your Project"
        secondaryCtaText="View Case Studies"
        secondaryCtaLink="/case-studies"
      />

      <Footer />
    </main>
  );
}
