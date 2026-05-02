"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowLeft, Quote, Star, MessageCircle } from "lucide-react";
import { urlForImage } from "@/sanity/lib/image";

interface TestimonialsContentClientProps {
  testimonialsData: any[];
}

export default function TestimonialsContentClient({ testimonialsData }: TestimonialsContentClientProps) {
  return (
    <main className="min-h-screen bg-background text-white selection:bg-primary/30">
      {/* Global Noise Texture */}
      <div className="pointer-events-none fixed inset-0 z-50 h-full w-full opacity-[0.03] mix-blend-overlay" style={{ backgroundImage: "url('data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.65%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E')" }}></div>

      {/* Page Content */}
      <div className="pt-24">
        {/* Page Header */}
        <section className="py-20 md:py-32 bg-background relative overflow-hidden">
          {/* Background Effects */}
          <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent pointer-events-none" />
          <motion.div
            animate={{ opacity: [0.3, 0.5, 0.3], scale: [1, 1.2, 1] }}
            transition={{ duration: 8, repeat: Infinity, repeatType: "reverse" }}
            className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-primary/10 blur-[150px] rounded-full pointer-events-none"
          />
          <motion.div
            animate={{ opacity: [0.2, 0.4, 0.2], scale: [1, 1.1, 1] }}
            transition={{ duration: 10, repeat: Infinity, repeatType: "reverse", delay: 2 }}
            className="absolute bottom-1/4 left-0 w-[400px] h-[400px] bg-accent/10 blur-[120px] rounded-full pointer-events-none"
          />
          
          <div className="max-w-7xl mx-auto px-6 relative z-10">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center max-w-3xl mx-auto"
            >
              <Link 
                href="/" 
                className="inline-flex items-center gap-2 text-sm text-white/50 hover:text-primary transition-colors mb-8"
              >
                <ArrowLeft className="w-4 h-4" />
                Back to Home
              </Link>

              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6"
              >
                <MessageCircle className="w-4 h-4 text-primary" />
                <span className="text-xs font-bold tracking-wider text-primary uppercase">Client Reviews</span>
              </motion.div>

              <h1 className="text-4xl md:text-5xl lg:text-7xl font-heading font-black text-white leading-tight mb-6">
                What our clients{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent via-primary to-accent bg-300% animate-gradient">
                  say about us.
                </span>
              </h1>
              <p className="text-lg md:text-xl text-white/60 max-w-2xl mx-auto leading-relaxed">
                Don&apos;t just take our word for it. Here&apos;s what industry leaders say about working with Zelvoxx.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Testimonials Grid */}
        <section className="py-20 pb-32">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {testimonialsData.map((testimonial: any, idx: number) => {
                const imageUrl = urlForImage(testimonial.image);
                
                return (
                  <motion.div
                    key={testimonial._id || idx}
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.6, delay: idx * 0.1 }}
                    className="relative p-8 rounded-2xl bg-[#0f0f14] border border-white/10 hover:border-primary/30 transition-all duration-300 hover:-translate-y-2 group"
                  >
                    {/* Stars */}
                    <div className="flex gap-1 mb-4">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                      ))}
                    </div>
                    
                    {/* Quote Icon */}
                    <Quote className="w-10 h-10 text-primary/20 mb-4" />
                    
                    {/* Review */}
                    <p className="text-white/80 text-lg leading-relaxed mb-8">
                      &quot;{testimonial.review || testimonial.content}&quot;
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
                  </motion.div>
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
              Join the growing list of businesses that have transformed their digital presence with Zelvoxx.
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
    </main>
  );
}
