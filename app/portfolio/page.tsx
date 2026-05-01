import { Metadata } from "next";
import { client } from "@/sanity/lib/client";
import { caseStudiesQuery } from "@/sanity/lib/queries";
import Navbar from "@/src/components/layout/Navbar";
import Footer from "@/src/components/layout/Footer";
import PortfolioContentClient from "./components/PortfolioContentClient";

export const metadata: Metadata = {
  title: "Our Work | ZELVOX",
  description: "View our portfolio of premium digital growth systems that generate predictable revenue.",
};

export const revalidate = 60;

export default async function PortfolioPage() {
  const caseStudiesData = await client.fetch(caseStudiesQuery).catch(() => []);

  return (
    <>
      <Navbar />
      <PortfolioContentClient caseStudiesData={caseStudiesData} />
      <Footer />
    </>
  );
}
