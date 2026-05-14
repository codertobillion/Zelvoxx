import { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/src/components/layout/Navbar";
import Footer from "@/src/components/layout/Footer";
import LegalContactSection from "@/src/components/legal/LegalContactSection";
import LegalPageLayout from "@/src/components/legal/LegalPageLayout";
import { legalSiteInfo } from "@/src/constants/data";

export const metadata: Metadata = {
  title: "Service Agreement | Zelvoxx",
  description:
    "How Zelvoxx engagements work: scope, timelines, deliverables, revisions, communication, and how this fits with your order form or statement of work.",
};

export default function ServiceAgreementPage() {
  return (
    <main className="min-h-screen bg-background text-white selection:bg-primary/30">
      <Navbar />

      <LegalPageLayout title="Service Agreement" effectiveDate={legalSiteInfo.effectiveDate}>
          <section>
            <h2 className="text-2xl sm:text-3xl font-heading font-bold mb-4 text-white">
              How this document applies
            </h2>
            <p className="text-white/70 font-body leading-relaxed">
              This Service Agreement describes the general operating terms for Zelvoxx engagements. Your specific project will also be governed by a proposal, order form, statement of work (&quot;SOW&quot;), or other written agreement that defines scope, fees, and milestones. If anything in this page conflicts with a signed SOW for your project, the SOW controls for that project.
            </p>
          </section>

          <section>
            <h2 className="text-2xl sm:text-3xl font-heading font-bold mb-4 text-white">
              Scope and deliverables
            </h2>
            <p className="text-white/70 font-body leading-relaxed mb-4">
              Before work begins, we align on:
            </p>
            <ul className="space-y-3 text-white/70 font-body">
              <li className="flex items-start gap-3">
                <span className="text-primary mt-1">•</span>
                <span>Objectives, channel scope (for example ads, web, automation), and success criteria at a high level</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary mt-1">•</span>
                <span>Deliverables, formats, and acceptance criteria where applicable</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary mt-1">•</span>
                <span>Dependencies such as access, assets, brand guidelines, and legal/compliance requirements you are responsible for</span>
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl sm:text-3xl font-heading font-bold mb-4 text-white">
              Timelines and approvals
            </h2>
            <p className="text-white/70 font-body leading-relaxed">
              Timelines are estimates based on agreed scope and a reasonable assumption of prompt client feedback. Delays in approvals, content delivery, access provisioning, or legal review may shift dates without constituting a breach by Zelvoxx. Where a schedule is critical, we recommend documenting milestones and turnaround times in the SOW.
            </p>
          </section>

          <section>
            <h2 className="text-2xl sm:text-3xl font-heading font-bold mb-4 text-white">
              Revisions and change requests
            </h2>
            <p className="text-white/70 font-body leading-relaxed mb-4">
              Unless otherwise stated in your SOW:
            </p>
            <ul className="space-y-3 text-white/70 font-body">
              <li className="flex items-start gap-3">
                <span className="text-primary mt-1">•</span>
                <span>Revisions are handled within the rounds or hours included in the agreed package</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary mt-1">•</span>
                <span>Requests outside the original scope may be quoted as a change order with additional fees and timeline impact</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary mt-1">•</span>
                <span>Feedback should be consolidated where possible so each revision round moves the work forward efficiently</span>
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl sm:text-3xl font-heading font-bold mb-4 text-white">
              Communication and meetings
            </h2>
            <p className="text-white/70 font-body leading-relaxed">
              We use agreed channels (for example email, project updates, and scheduled calls) to keep work on track. Meeting cadence and response-time expectations can be defined in the SOW. Urgent issues should be flagged clearly so we can prioritize appropriately.
            </p>
          </section>

          <section>
            <h2 className="text-2xl sm:text-3xl font-heading font-bold mb-4 text-white">
              Client responsibilities
            </h2>
            <p className="text-white/70 font-body leading-relaxed mb-4">
              You agree to:
            </p>
            <ul className="space-y-3 text-white/70 font-body">
              <li className="flex items-start gap-3">
                <span className="text-primary mt-1">•</span>
                <span>Provide accurate information about your business, products, audiences, and constraints</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary mt-1">•</span>
                <span>Provide timely approvals and consolidated feedback</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary mt-1">•</span>
                <span>Supply required content, assets, credentials, and legal permissions (including rights to use trademarks, images, and copy)</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary mt-1">•</span>
                <span>Comply with applicable laws and platform policies for your ads, website, and data collection</span>
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl sm:text-3xl font-heading font-bold mb-4 text-white">
              Payments, IP, liability, and termination
            </h2>
            <p className="text-white/70 font-body leading-relaxed">
              Payment terms, intellectual property ownership, limitations of liability, termination rights, and related matters are further described in our{" "}
              <Link href="/terms" className="text-primary hover:underline">
                Terms &amp; Conditions
              </Link>
              ,{" "}
              <Link href="/refund-policy" className="text-primary hover:underline">
                Refund Policy
              </Link>
              , and{" "}
              <Link href="/cancellation-policy" className="text-primary hover:underline">
                Cancellation Policy
              </Link>
              .
            </p>
          </section>

          <LegalContactSection
            heading="Contact us"
            intro="Questions about how we run engagements? Contact us:"
          />
      </LegalPageLayout>

      <Footer />
    </main>
  );
}
