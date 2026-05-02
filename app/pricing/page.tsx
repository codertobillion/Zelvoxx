import { Metadata } from "next";
import { client } from "@/sanity/lib/client";
import { pricingQuery } from "@/sanity/lib/queries";
import Navbar from "@/src/components/layout/Navbar";
import Footer from "@/src/components/layout/Footer";
import PricingContentClient from "./components/PricingContentClient";

export const metadata: Metadata = {
  title: "Pricing | Zelvoxx",
  description: "Transparent pricing for premium digital growth systems. Choose the plan that fits your business goals.",
};

export const revalidate = 60;

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

export default async function PricingPage() {
  const pricingData = await client.fetch(pricingQuery).catch(() => []);
  const plans = pricingData.length > 0 ? pricingData : defaultPlans;

  return (
    <>
      <Navbar />
      <PricingContentClient plans={plans} />
      <Footer />
    </>
  );
}
