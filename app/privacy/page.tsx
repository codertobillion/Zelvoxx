import { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/src/components/layout/Navbar";
import Footer from "@/src/components/layout/Footer";
import LegalContactSection from "@/src/components/legal/LegalContactSection";
import LegalPageLayout from "@/src/components/legal/LegalPageLayout";
import { legalSiteInfo } from "@/src/constants/data";

export const metadata: Metadata = {
  title: "Privacy Policy | Zelvoxx",
  description: "Learn how Zelvoxx collects, uses, and protects your personal data. Your privacy is our priority.",
};

export default function PrivacyPolicyPage() {
  return (
    <main className="min-h-screen bg-background text-white selection:bg-primary/30">
      <Navbar />
      
      <LegalPageLayout title="Privacy Policy" effectiveDate={legalSiteInfo.effectiveDate}>
          <section>
            <h2 className="text-2xl sm:text-3xl font-heading font-bold mb-4 text-white">
              Our Commitment to Your Privacy
            </h2>
            <p className="text-white/70 font-body leading-relaxed">
              Zelvoxx ("we", "our", "us") respects your privacy and is committed to protecting your personal data. This privacy policy will inform you as to how we look after your personal data when you visit our website and tell you about your privacy rights and how the law protects you.
            </p>
          </section>

          <section>
            <h2 className="text-2xl sm:text-3xl font-heading font-bold mb-4 text-white">
              Information We Collect
            </h2>
            <p className="text-white/70 font-body leading-relaxed mb-4">
              We may collect, use, store and transfer different kinds of personal data about you, which we have grouped together as follows:
            </p>
            <ul className="space-y-3 text-white/70 font-body">
              <li className="flex items-start gap-3">
                <span className="text-primary mt-1">•</span>
                <span><strong className="text-white">Identity Data:</strong> Name, email address, phone number</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary mt-1">•</span>
                <span><strong className="text-white">Business Data:</strong> Company name, business details, industry information</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary mt-1">•</span>
                <span><strong className="text-white">Technical Data:</strong> IP address, browser type, device information, website analytics and cookies</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary mt-1">•</span>
                <span><strong className="text-white">Profile Data:</strong> Your preferences, interests, and interactions with our services</span>
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl sm:text-3xl font-heading font-bold mb-4 text-white">
              How We Use Your Information
            </h2>
            <p className="text-white/70 font-body leading-relaxed mb-4">
              We will only use your personal data when the law allows us to. Most commonly, we will use your personal data in the following circumstances:
            </p>
            <ul className="space-y-3 text-white/70 font-body">
              <li className="flex items-start gap-3">
                <span className="text-primary mt-1">•</span>
                <span><strong className="text-white">Service Delivery:</strong> To provide, maintain, and improve our services</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary mt-1">•</span>
                <span><strong className="text-white">User Experience:</strong> To personalize and enhance your experience on our platform</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary mt-1">•</span>
                <span><strong className="text-white">Communication:</strong> To communicate with you about our services, updates, and offers</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary mt-1">•</span>
                <span><strong className="text-white">Marketing:</strong> For marketing and advertising purposes, with your consent</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary mt-1">•</span>
                <span><strong className="text-white">Analytics:</strong> To analyze usage patterns and improve our services</span>
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl sm:text-3xl font-heading font-bold mb-4 text-white">
              Data Protection
            </h2>
            <p className="text-white/70 font-body leading-relaxed">
              We have put in place appropriate security measures to prevent your personal data from being accidentally lost, used or accessed in an unauthorized way, altered or disclosed. We implement industry-standard security measures including encryption, secure servers, and regular security audits to protect your data.
            </p>
          </section>

          <section>
            <h2 className="text-2xl sm:text-3xl font-heading font-bold mb-4 text-white">
              Third-Party Services
            </h2>
            <p className="text-white/70 font-body leading-relaxed mb-4">
              We may use third-party services to help us operate our business and provide our services. These may include:
            </p>
            <ul className="space-y-3 text-white/70 font-body">
              <li className="flex items-start gap-3">
                <span className="text-primary mt-1">•</span>
                <span><strong className="text-white">Google Analytics:</strong> For website analytics and performance tracking</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary mt-1">•</span>
                <span><strong className="text-white">Meta Pixel:</strong> For advertising and conversion tracking</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary mt-1">•</span>
                <span><strong className="text-white">Calendly:</strong> For scheduling and appointment management</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary mt-1">•</span>
                <span><strong className="text-white">Stripe:</strong> For secure payment processing</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary mt-1">•</span>
                <span><strong className="text-white">Hosting Providers:</strong> For website and application hosting</span>
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl sm:text-3xl font-heading font-bold mb-4 text-white">
              Cookies and similar technologies
            </h2>
            <p className="text-white/70 font-body leading-relaxed">
              We use cookies and similar technologies to operate the site, measure performance, and support marketing where permitted. For categories of cookies, third-party tools we use, and your choices, see our{" "}
              <Link href="/cookie-policy" className="text-primary hover:underline">
                Cookie Policy
              </Link>
              .
            </p>
          </section>

          <section>
            <h2 className="text-2xl sm:text-3xl font-heading font-bold mb-4 text-white">
              Your Rights
            </h2>
            <p className="text-white/70 font-body leading-relaxed mb-4">
              Under certain circumstances, you have rights under data protection laws in relation to your personal data, including the right to:
            </p>
            <ul className="space-y-3 text-white/70 font-body">
              <li className="flex items-start gap-3">
                <span className="text-primary mt-1">•</span>
                <span><strong className="text-white">Access:</strong> Request access to your personal data</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary mt-1">•</span>
                <span><strong className="text-white">Correction:</strong> Request correction of inaccurate personal data</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary mt-1">•</span>
                <span><strong className="text-white">Deletion:</strong> Request deletion of your personal data</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary mt-1">•</span>
                <span><strong className="text-white">Objection:</strong> Object to processing of your personal data</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary mt-1">•</span>
                <span><strong className="text-white">Portability:</strong> Request transfer of your personal data</span>
              </li>
            </ul>
          </section>

          <LegalContactSection
            heading="Contact us"
            intro="If you have questions about this Privacy Policy or our privacy practices, contact us:"
          />
      </LegalPageLayout>

      <Footer />
    </main>
  );
}
