import { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/src/components/layout/Navbar";
import Footer from "@/src/components/layout/Footer";
import LegalContactSection from "@/src/components/legal/LegalContactSection";
import LegalPageLayout from "@/src/components/legal/LegalPageLayout";
import { legalSiteInfo } from "@/src/constants/data";

export const metadata: Metadata = {
  title: "DMCA Policy | Zelvoxx",
  description:
    "How to submit a copyright infringement notice regarding content on Zelvoxx.com and how we handle takedown requests.",
};

export default function DmcaPage() {
  return (
    <main className="min-h-screen bg-background text-white selection:bg-primary/30">
      <Navbar />

      <LegalPageLayout title="DMCA Policy" effectiveDate={legalSiteInfo.effectiveDate}>
          <section>
            <h2 className="text-2xl sm:text-3xl font-heading font-bold mb-4 text-white">
              Respect for intellectual property
            </h2>
            <p className="text-white/70 font-body leading-relaxed">
              Zelvoxx respects intellectual property rights. If you believe that material hosted on{" "}
              <a href={legalSiteInfo.website} className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">
                {legalSiteInfo.website}
              </a>{" "}
              infringes your copyright, you may submit a notice as described below. This process is intended for copyright claims only. For other disputes, contact us using the information at the bottom of this page.
            </p>
          </section>

          <section>
            <h2 className="text-2xl sm:text-3xl font-heading font-bold mb-4 text-white">
              What to include in your notice
            </h2>
            <p className="text-white/70 font-body leading-relaxed mb-4">
              To help us evaluate your request quickly, please include the following in writing:
            </p>
            <ul className="space-y-3 text-white/70 font-body">
              <li className="flex items-start gap-3">
                <span className="text-primary mt-1">•</span>
                <span>
                  <strong className="text-white">Your contact details:</strong> name, mailing address, telephone number, and email address
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary mt-1">•</span>
                <span>
                  <strong className="text-white">Identification of the copyrighted work:</strong> a description of the work you claim has been infringed, and—if applicable—the registration information or a representative list if multiple works are covered by a single notification
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary mt-1">•</span>
                <span>
                  <strong className="text-white">Identification of the material on our site:</strong> the URL(s) or other specific location(s) of the allegedly infringing material, plus any details that help us locate it
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary mt-1">•</span>
                <span>
                  <strong className="text-white">A good-faith statement:</strong> that you believe the use is not authorized by the copyright owner, its agent, or the law
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary mt-1">•</span>
                <span>
                  <strong className="text-white">Accuracy and authority:</strong> a statement that the information in the notification is accurate, and—under penalty of perjury where required—that you are authorized to act on behalf of the copyright owner
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary mt-1">•</span>
                <span>
                  <strong className="text-white">Signature:</strong> a physical or electronic signature of the person authorized to act on behalf of the copyright owner
                </span>
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl sm:text-3xl font-heading font-bold mb-4 text-white">
              Where to send your notice
            </h2>
            <p className="text-white/70 font-body leading-relaxed">
              Send your DMCA notice to{" "}
              <a href={`mailto:${legalSiteInfo.email}?subject=DMCA%20Notice`} className="text-primary hover:underline">
                {legalSiteInfo.email}
              </a>{" "}
              with the subject line &quot;DMCA Notice&quot;. We may request additional information if needed to process your request.
            </p>
          </section>

          <section>
            <h2 className="text-2xl sm:text-3xl font-heading font-bold mb-4 text-white">
              Our response
            </h2>
            <p className="text-white/70 font-body leading-relaxed">
              If we determine a notice is valid and complete, we may remove or disable access to the challenged material and may notify the party that posted the material, where appropriate. Submitting a false or misleading claim may carry legal consequences. Nothing in this policy constitutes legal advice; if you are unsure about your rights, consult an attorney.
            </p>
          </section>

          <section>
            <h2 className="text-2xl sm:text-3xl font-heading font-bold mb-4 text-white">
              Counter-notices
            </h2>
            <p className="text-white/70 font-body leading-relaxed">
              If you believe material was removed in error, you may be entitled to submit a counter-notification consistent with applicable law. Counter-notices should be sent to the same email address with the subject line &quot;DMCA Counter-Notification&quot; and include the information required by law.
            </p>
          </section>

          <section>
            <h2 className="text-2xl sm:text-3xl font-heading font-bold mb-4 text-white">
              Related policies
            </h2>
            <p className="text-white/70 font-body leading-relaxed">
              See also our{" "}
              <Link href="/copyright" className="text-primary hover:underline">
                Copyright
              </Link>{" "}
              page and{" "}
              <Link href="/privacy" className="text-primary hover:underline">
                Privacy Policy
              </Link>
              .
            </p>
          </section>

          <LegalContactSection
            heading="Contact us"
            intro="For general inquiries unrelated to a DMCA notice, contact us:"
          />
      </LegalPageLayout>

      <Footer />
    </main>
  );
}
