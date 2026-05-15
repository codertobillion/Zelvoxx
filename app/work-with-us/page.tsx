import { Metadata } from "next";
import Navbar from "@/src/components/layout/Navbar";
import Footer from "@/src/components/layout/Footer";
import WorkWithUsContent from "./components/WorkWithUsContent";

export const revalidate = 60;

export const metadata: Metadata = {
  title: "Work With Us | Careers at Zelvoxx",
  description:
    "Join Zelvoxx and work on premium websites, branding, ads, automation, and digital growth systems. Explore remote, hybrid, and on-site opportunities.",
};

export default function WorkWithUsPage() {
  return (
    <main className="min-h-screen bg-background text-white selection:bg-primary/30">
      <Navbar />
      <WorkWithUsContent />
      <Footer />
    </main>
  );
}
