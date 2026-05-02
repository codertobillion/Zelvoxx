import { Metadata } from "next";
import { client } from "@/sanity/lib/client";
import { testimonialsQuery } from "@/sanity/lib/queries";
import Navbar from "@/src/components/layout/Navbar";
import Footer from "@/src/components/layout/Footer";
import TestimonialsContentClient from "./components/TestimonialsContentClient";

export const metadata: Metadata = {
  title: "Client Reviews | Zelvoxx",
  description: "Read what our clients say about working with Zelvoxx and the results we've delivered.",
};

export const revalidate = 60;

export default async function TestimonialsPage() {
  const testimonialsData = await client.fetch(testimonialsQuery).catch(() => []);

  return (
    <>
      <Navbar />
      <TestimonialsContentClient testimonialsData={testimonialsData} />
      <Footer />
    </>
  );
}
