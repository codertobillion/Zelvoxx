import { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, Check } from "lucide-react";
import { client } from "@/sanity/lib/client";
import { pricingQuery } from "@/sanity/lib/queries";
import { CALENDLY_URL } from "@/src/constants/data";
import Footer from "@/src/components/layout/Footer";

export const metadata: Metadata = {
  title: "Pricing | ZELVOX",
  description: "Transparent pricing for premium digital growth systems. Choose the plan that fits your business goals.",
};

export const revalidate = 60;

export default async function PricingPage() {
  const pricingData = await client.fetch(pricingQuery).catch(() => []);

  // Default pricing plans if Sanity data is empty
  const defaultPlans = [
    {
      _id: "starter",
      name: "Starter",
      slug: "starter",
      description: "Perfect for small businesses getting started with digital growth.",
      price: "$2,999",
      priceNote: "Starting at",
      popular: false,
      features: [
        "Custom Landing Page",
        "Basic SEO Setup",
        "Google Analytics",
        "Mobile Responsive",
        "2 Revision Rounds",
        "14-Day Delivery"
      ],
      ctaText: "Get Started"
    },
    {
      _id: "growth",
      name: "Growth",
      slug: "growth",
      description: "Comprehensive solution for businesses ready to scale.",
      price: "$7,999",
      priceNote: "Starting at",
      popular: true,
      features: [
        "Full Website (5-7 pages)",
        "Advanced SEO & Blog Setup",
        "Conversion Tracking",
        "Sales Funnel Design",
        "Email Capture System",
        "A/B Testing Setup",
        "5 Revision Rounds",
        "30-Day Support"
      ],
      ctaText: "Most Popular"
    },
    {
      _id: "enterprise",
      name: "Enterprise",
      slug: "enterprise",
      description: "Custom solutions for established brands and complex projects.",
      price: "Custom",
      priceNote: "",
      popular: false,
      features: [
        "Everything in Growth",
        "Custom Web Application",
        "CRM Integration",
        "Marketing Automation",
        "Advanced Analytics",
        "Priority Support",
        "Dedicated Manager",
        "Unlimited Revisions"
      ],
      ctaText: "Contact Us"
    }
  ];

  const plans = pricingData.length > 0 ? pricingData : defaultPlans;

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
                Pricing
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-black text-white leading-tight mb-6">
                Simple, <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-primary">transparent pricing.</span>
              </h1>
              <p className="text-lg text-white/60 max-w-2xl mx-auto">
                No hidden fees. No surprises. Just premium digital growth systems that deliver results.
              </p>
            </div>
          </div>
        </section>

        {/* Pricing Cards */}
        <section className="py-20 pb-32">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {plans.map((plan: any) => (
                <div
                  key={plan._id}
                  className={`relative p-8 rounded-2xl transition-all duration-300 ${
                    plan.popular
                      ? "bg-gradient-to-b from-primary/20 to-[#0f0f14] border-2 border-primary scale-105 z-10"
                      : "bg-[#0f0f14] border border-white/10 hover:border-primary/30"
                  }`}
                >
                  {/* Popular Badge */}
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                      <span className="bg-primary text-white px-4 py-1 rounded-full text-sm font-bold">
                        Most Popular
                      </span>
                    </div>
                  )}

                  {/* Plan Name */}
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <p className="text-white/60 text-sm mb-6">{plan.description}</p>

                  {/* Price */}
                  <div className="mb-8">
                    {plan.priceNote && (
                      <span className="text-white/50 text-sm">{plan.priceNote}</span>
                    )}
                    <div className="flex items-baseline gap-1">
                      <span className="text-4xl md:text-5xl font-black text-white">{plan.price}</span>
                    </div>
                  </div>

                  {/* Features */}
                  <ul className="space-y-4 mb-8">
                    {plan.features?.map((feature: string, idx: number) => (
                      <li key={idx} className="flex items-start gap-3">
                        <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                        <span className="text-white/80">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  {/* CTA */}
                  <a
                    href={CALENDLY_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`block w-full text-center py-4 rounded-xl font-bold transition-all hover:scale-105 ${
                      plan.popular
                        ? "bg-primary text-white hover:bg-primary/90"
                        : "bg-white/10 text-white hover:bg-white/20"
                    }`}
                  >
                    {plan.ctaText}
                  </a>
                </div>
              ))}
            </div>

            {/* Custom Quote */}
            <div className="mt-16 text-center">
              <p className="text-white/60 mb-4">
                Need something custom? We build bespoke solutions for complex requirements.
              </p>
              <a
                href={CALENDLY_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block text-primary hover:underline font-semibold"
              >
                Schedule a consultation →
              </a>
            </div>
          </div>
        </section>
      </div>

      <Footer />
    </main>
  );
}
