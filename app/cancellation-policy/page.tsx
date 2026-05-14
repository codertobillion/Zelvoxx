import { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/src/components/layout/Navbar";
import Footer from "@/src/components/layout/Footer";
import LegalContactSection from "@/src/components/legal/LegalContactSection";
import LegalPageLayout from "@/src/components/legal/LegalPageLayout";
import { legalSiteInfo } from "@/src/constants/data";

export const metadata: Metadata = {
  title: "Cancellation Policy | Zelvoxx",
  description:
    "How to cancel a Zelvoxx project, what remains billable, and how cancellation interacts with refunds and intellectual property.",
};

export default function CancellationPolicyPage() {
  return (
    <main className="min-h-screen bg-background text-white selection:bg-primary/30">
      <Navbar />

      <LegalPageLayout title="Cancellation Policy" effectiveDate={legalSiteInfo.effectiveDate}>
          <section>
            <h2 className="text-2xl sm:text-3xl font-heading font-bold mb-4 text-white">
              How to cancel
            </h2>
            <p className="text-white/70 font-body leading-relaxed">
              You may cancel an engagement by providing written notice to{" "}
              <a href={`mailto:${legalSiteInfo.email}`} className="text-primary hover:underline">
                {legalSiteInfo.email}
              </a>{" "}
              from an authorized representative of your organization. Verbal cancellations are not effective until confirmed in writing. Cancellation takes effect on the date we acknowledge receipt unless a different effective date is agreed in writing.
            </p>
          </section>

          <section>
            <h2 className="text-2xl sm:text-3xl font-heading font-bold mb-4 text-white">
              Work that remains billable
            </h2>
            <p className="text-white/70 font-body leading-relaxed mb-4">
              Cancellation does not eliminate fees for work already performed or resources already delivered. Without limiting your SOW, the following typically remain billable:
            </p>
            <ul className="space-y-3 text-white/70 font-body">
              <li className="flex items-start gap-3">
                <span className="text-primary mt-1">•</span>
                <span>Any completed milestones, deliverables, or documented work products</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary mt-1">•</span>
                <span>Strategy sessions, audits, workshops, or consulting time already conducted</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary mt-1">•</span>
                <span>Third-party costs we incurred on your behalf with your approval (for example licenses, media, tooling)</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary mt-1">•</span>
                <span>Non-refundable deposits or fees described in your agreement or our{" "}
                  <Link href="/refund-policy" className="text-primary hover:underline">
                    Refund Policy
                  </Link>
                </span>
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl sm:text-3xl font-heading font-bold mb-4 text-white">
              Intellectual property and access
            </h2>
            <p className="text-white/70 font-body leading-relaxed">
              Custom work and related intellectual property rights are handled as described in our{" "}
              <Link href="/terms" className="text-primary hover:underline">
                Terms &amp; Conditions
              </Link>
              . Until outstanding amounts for delivered work are paid in full, Zelvoxx may retain rights in deliverables as stated in your agreement. Upon cancellation, access to tools, ad accounts, or environments may be adjusted consistent with security and payment status.
            </p>
          </section>

          <section>
            <h2 className="text-2xl sm:text-3xl font-heading font-bold mb-4 text-white">
              Outstanding balances
            </h2>
            <p className="text-white/70 font-body leading-relaxed">
              Any outstanding balances for completed work remain due according to the payment schedule in your agreement. If no schedule is specified, we may request payment within a reasonable period (for example thirty days from cancellation), unless otherwise agreed in writing.
            </p>
          </section>

          <section>
            <h2 className="text-2xl sm:text-3xl font-heading font-bold mb-4 text-white">
              Our right to suspend or end work
            </h2>
            <p className="text-white/70 font-body leading-relaxed">
              Zelvoxx may suspend or terminate services in cases such as non-payment, abusive conduct, illegal requests, or material breach of our terms, as described in our{" "}
              <Link href="/terms" className="text-primary hover:underline">
                Terms &amp; Conditions
              </Link>
              . Termination by Zelvoxx for cause does not remove your obligation to pay for work already delivered.
            </p>
          </section>

          <section>
            <h2 className="text-2xl sm:text-3xl font-heading font-bold mb-4 text-white">
              Related documents
            </h2>
            <p className="text-white/70 font-body leading-relaxed">
              For refund eligibility and process, see our{" "}
              <Link href="/refund-policy" className="text-primary hover:underline">
                Refund Policy
              </Link>
              . For how engagements are run day to day, see our{" "}
              <Link href="/service-agreement" className="text-primary hover:underline">
                Service Agreement
              </Link>
              .
            </p>
          </section>

          <LegalContactSection
            heading="Contact us"
            intro="Questions about cancellation? Contact us:"
          />
      </LegalPageLayout>

      <Footer />
    </main>
  );
}
