import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, Quote } from "lucide-react";
import { client } from "@/sanity/lib/client";
import { testimonialsQuery } from "@/sanity/lib/queries";
import { urlForImage } from "@/sanity/lib/image";
import Footer from "@/src/components/layout/Footer";

export const metadata: Metadata = {
  title: "Client Reviews | ZELVOX",
  description: "Read what our clients say about working with ZELVOX and the results we've delivered.",
};

export const revalidate = 60;

export default async function TestimonialsPage() {
  const testimonialsData = await client.fetch(testimonialsQuery).catch(() => []);

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
                Testimonials
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-black text-white leading-tight mb-6">
                What our clients <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-primary">say about us.</span>
              </h1>
              <p className="text-lg text-white/60 max-w-2xl mx-auto">
                Don't just take our word for it. Here's what industry leaders say about working with ZELVOX.
              </p>
            </div>
          </div>
        </section>

        {/* Testimonials Grid */}
        <section className="py-20 pb-32">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {testimonialsData.map((testimonial: any, idx: number) => {
                const imageUrl = urlForImage(testimonial.image);
                
                return (
                  <div
                    key={testimonial._id || idx}
                    className="relative p-8 rounded-2xl bg-[#0f0f14] border border-white/10 hover:border-primary/30 transition-all duration-300"
                  >
                    {/* Quote Icon */}
                    <Quote className="w-10 h-10 text-primary/20 mb-4" />
                    
                    {/* Review */}
                    <p className="text-white/80 text-lg leading-relaxed mb-8">
                      "{testimonial.review || testimonial.content}"
                    </p>
                    
                    {/* Author */}
                    <div className="flex items-center gap-4">
                      {imageUrl ? (
                        <div className="w-12 h-12 rounded-full overflow-hidden bg-white/10">
                          <Image
                            src={imageUrl.url()}
                            alt={testimonial.name}
                            width={48}
                            height={48}
                            className="object-cover w-full h-full"
                          />
                        </div>
                      ) : (
                        <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-white font-bold text-lg">
                          {testimonial.name?.charAt(0) || "C"}
                        </div>
                      )}
                      <div>
                        <h4 className="font-bold text-white">{testimonial.name}</h4>
                        <p className="text-white/50 text-sm">{testimonial.role}</p>
                        {testimonial.company && (
                          <p className="text-primary text-sm">{testimonial.company}</p>
                        )}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {testimonialsData.length === 0 && (
              <div className="text-center py-20">
                <p className="text-white/60">No testimonials yet. Be our first!</p>
              </div>
            )}
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 border-t border-white/5">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <h2 className="text-3xl md:text-4xl font-heading font-black text-white mb-6">
              Ready to be our next success story?
            </h2>
            <p className="text-white/60 mb-8 max-w-xl mx-auto">
              Join the growing list of businesses that have transformed their digital presence with ZELVOX.
            </p>
            <Link
              href="/"
              className="inline-block bg-primary hover:bg-primary/90 text-white px-8 py-4 rounded-full font-bold transition-all hover:scale-105"
            >
              Start Your Project
            </Link>
          </div>
        </section>
      </div>

      <Footer />
    </main>
  );
}
