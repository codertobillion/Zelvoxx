import { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/src/components/layout/Navbar";
import Footer from "@/src/components/layout/Footer";
import LegalContactSection from "@/src/components/legal/LegalContactSection";
import LegalPageLayout from "@/src/components/legal/LegalPageLayout";
import { legalSiteInfo } from "@/src/constants/data";

export const metadata: Metadata = {
  title: "Disclaimer | Zelvoxx",
  description:
    "Important limitations on Zelvoxx marketing, website, and growth services: no guaranteed results; case studies and testimonials are illustrative.",
};

export default function DisclaimerPage() {
  return (
    <main className="min-h-screen bg-background text-white selection:bg-primary/30">
      <Navbar />

      <LegalPageLayout title="Disclaimer" effectiveDate={legalSiteInfo.effectiveDate}>
          <section>
            <h2 className="text-2xl sm:text-3xl font-heading font-bold mb-4 text-white">
              General information only
            </h2>
            <p className="text-white/70 font-body leading-relaxed">
              Content on this website and in our proposals, audits, and communications is for general informational purposes. It is not legal, tax, accounting, or investment advice. You should consult qualified professionals for advice tailored to your situation.
            </p>
          </section>

          <section>
            <h2 className="text-2xl sm:text-3xl font-heading font-bold mb-4 text-white">
              No guarantee of results
            </h2>
            <p className="text-white/70 font-body leading-relaxed mb-4">
              Digital marketing, advertising, websites, branding, and automation outcomes depend on many factors outside our control, including but not limited to:
            </p>
            <ul className="space-y-3 text-white/70 font-body">
              <li className="flex items-start gap-3">
                <span className="text-primary mt-1">•</span>
                <span>Your business model, offer, pricing, operations, and fulfillment capacity</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary mt-1">•</span>
                <span>Advertising budget, creative quality, targeting, and competitive dynamics</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary mt-1">•</span>
                <span>Market conditions, seasonality, and macroeconomic factors</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary mt-1">•</span>
                <span>Implementation speed, internal approvals, and the accuracy of information you provide</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary mt-1">•</span>
                <span>Third-party platforms, policy changes, outages, algorithm updates, and account restrictions</span>
              </li>
            </ul>
            <p className="text-white/70 font-body leading-relaxed mt-4">
              Zelvoxx does not guarantee any specific revenue, profit, ROI, lead volume, ranking position, conversion rate, or growth outcome. Past performance—whether ours or a client&apos;s—is not a reliable indicator of future results.
            </p>
          </section>

          <section>
            <h2 className="text-2xl sm:text-3xl font-heading font-bold mb-4 text-white">
              Case studies, examples, and testimonials
            </h2>
            <p className="text-white/70 font-body leading-relaxed">
              Case studies, screenshots, metrics, and testimonials on our website or in our materials are provided for informational and illustrative purposes. Figures may be rounded, summarized, or presented without full context. They are not promises that similar results will occur for your business.
            </p>
          </section>

          <section>
            <h2 className="text-2xl sm:text-3xl font-heading font-bold mb-4 text-white">
              Third parties and external links
            </h2>
            <p className="text-white/70 font-body leading-relaxed">
              Our website may reference or link to third-party tools, platforms, or content. We do not control those third parties and are not responsible for their availability, policies, pricing, or performance. Your use of third-party services is at your own risk and subject to their terms.
            </p>
          </section>

          <section>
            <h2 className="text-2xl sm:text-3xl font-heading font-bold mb-4 text-white">
              Relationship to other terms
            </h2>
            <p className="text-white/70 font-body leading-relaxed">
              This Disclaimer supplements our{" "}
              <Link href="/terms" className="text-primary hover:underline">
                Terms &amp; Conditions
              </Link>
              ,{" "}
              <Link href="/service-agreement" className="text-primary hover:underline">
                Service Agreement
              </Link>{" "}
              (where applicable), and any written statement of work or order form signed for your engagement. If there is a conflict, the written agreement for your specific project controls.
            </p>
          </section>

          <LegalContactSection
            heading="Contact us"
            intro="Questions about this Disclaimer? Contact us:"
          />
      </LegalPageLayout>

      <Footer />
    </main>
  );
}
