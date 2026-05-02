import { Metadata } from "next";
import { client } from "@/sanity/lib/client";
import { caseStudiesQuery } from "@/sanity/lib/queries";
import Navbar from "@/src/components/layout/Navbar";
import Footer from "@/src/components/layout/Footer";
import CaseStudiesContentClient from "./components/CaseStudiesContentClient";

export const metadata: Metadata = {
  title: "Case Studies | Zelvoxx",
  description: "Deep-dive case studies showcasing how we build digital growth systems that generate predictable revenue.",
};

export const revalidate = 60;

export default async function CaseStudiesPage() {
  const caseStudiesData = await client.fetch(caseStudiesQuery).catch(() => []);

  return (
    <>
      <Navbar />
      <CaseStudiesContentClient caseStudiesData={caseStudiesData} />
      <Footer />
    </>
  );
}
