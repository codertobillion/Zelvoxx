import { Metadata } from "next";
import Navbar from "@/src/components/layout/Navbar";
import Footer from "@/src/components/layout/Footer";
import ContactContent from "./components/ContactContent";

export const revalidate = 60;

export const metadata: Metadata = {
  title: "Contact Us | Let's Build Something Great | Zelvoxx",
  description: "Ready to scale your business? Get in touch with our team. We'll respond within 24 hours to discuss your project and goals.",
};

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-background text-white selection:bg-primary/30">
      <Navbar />
      <ContactContent />
      <Footer />
    </main>
  );
}
