import Navbar from "@/src/components/layout/Navbar";
import Hero from "@/src/components/sections/Hero";
import TrustedBy from "@/src/components/sections/TrustedBy";
import Problem from "@/src/components/sections/Problem";
import SystemFlow from "@/src/components/sections/SystemFlow";
import BuiltForGrowth from "@/src/components/sections/BuiltForGrowth";
import Services from "@/src/components/sections/Services";
import Portfolio from "@/src/components/sections/Portfolio";
import CaseStudies from "@/src/components/sections/CaseStudies";
import Testimonials from "@/src/components/sections/Testimonials";
import Pricing from "@/src/components/sections/Pricing";
import Process from "@/src/components/sections/Process";
import WhyZelvox from "@/src/components/sections/WhyZelvox";
import CTA from "@/src/components/sections/CTA";
import Footer from "@/src/components/layout/Footer";
import { client } from "@/sanity/lib/client";
import { servicesQuery, portfolioQuery, caseStudiesQuery, testimonialsQuery } from "@/sanity/lib/queries";

export const revalidate = 60; // REVALIDATE DATA EVERY 60 SECONDS

export default async function Home() {
  const [servicesData, portfolioData, caseStudiesData, testimonialsData] = await Promise.all([
    client.fetch(servicesQuery).catch(() => []),
    client.fetch(portfolioQuery).catch(() => []),
    client.fetch(caseStudiesQuery).catch(() => []),
    client.fetch(testimonialsQuery).catch(() => [])
  ]);

  return (
    <main className="min-h-screen bg-background selection:bg-primary/30 relative">
      {/* Global Noise Texture for Premium Depth */}
      <div className="pointer-events-none fixed inset-0 z-50 h-full w-full opacity-[0.03] mix-blend-overlay" style={{ backgroundImage: "url('data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.65%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E')" }}></div>
      <Navbar />
      <Hero />
      <TrustedBy />
      <Problem />
      <SystemFlow />
      <BuiltForGrowth />
      <Services data={servicesData} />
      <Portfolio />
      <CaseStudies data={caseStudiesData} />
      <Testimonials data={testimonialsData} />
      <Pricing />
      <Process />
      <WhyZelvox />
      <CTA />
      <Footer />
    </main>
  );
}
