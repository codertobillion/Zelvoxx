import { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/src/components/layout/Navbar";
import Footer from "@/src/components/layout/Footer";
import LegalContactSection from "@/src/components/legal/LegalContactSection";
import LegalPageLayout from "@/src/components/legal/LegalPageLayout";
import { legalSiteInfo } from "@/src/constants/data";

export const metadata: Metadata = {
  title: "Refund Policy | Zelvoxx",
  description: "Understand our refund policy for digital services. Learn about deposit terms, milestone refunds, and cancellation conditions.",
};

export default function RefundPolicyPage() {
  return (
    <main className="min-h-screen bg-background text-white selection:bg-primary/30">
      <Navbar />
      
      <LegalPageLayout title="Refund Policy" effectiveDate={legalSiteInfo.effectiveDate}>
          <section>
            <h2 className="text-2xl sm:text-3xl font-heading font-bold mb-4 text-white">
              Digital Services Nature
            </h2>
            <p className="text-white/70 font-body leading-relaxed">
              Due to the nature of digital services, custom development, and intellectual property creation, our refund policy is structured differently from physical products. Once work begins on your project, resources, time, and expertise are committed that cannot be recovered.
            </p>
          </section>

          <section>
            <h2 className="text-2xl sm:text-3xl font-heading font-bold mb-4 text-white">
              Non-Refundable Items
            </h2>
            <p className="text-white/70 font-body leading-relaxed mb-4">
              The following fees and payments are non-refundable:
            </p>
            <ul className="space-y-3 text-white/70 font-body">
              <li className="flex items-start gap-3">
                <span className="text-primary mt-1">•</span>
                <span><strong className="text-white">Initial Deposits:</strong> All project deposits are non-refundable once work has commenced</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary mt-1">•</span>
                <span><strong className="text-white">Strategy Fees:</strong> Strategy sessions, consultations, and planning fees are non-refundable</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary mt-1">•</span>
                <span><strong className="text-white">Completed Milestones:</strong> Any completed milestones, deliverables, or work products are non-refundable</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary mt-1">•</span>
                <span><strong className="text-white">Third-Party Costs:</strong> Any third-party expenses incurred on your behalf (software licenses, stock assets, etc.)</span>
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl sm:text-3xl font-heading font-bold mb-4 text-white">
              Partial Refund Considerations
            </h2>
            <p className="text-white/70 font-body leading-relaxed mb-4">
              Partial refunds may be considered under the following circumstances:
            </p>
            <ul className="space-y-3 text-white/70 font-body">
              <li className="flex items-start gap-3">
                <span className="text-primary mt-1">•</span>
                <span><strong className="text-white">Before Project Execution:</strong> If cancellation occurs before any project execution has begun</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary mt-1">•</span>
                <span><strong className="text-white">Zelvoxx Error:</strong> If we fail to deliver agreed-upon milestones due to our negligence</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary mt-1">•</span>
                <span><strong className="text-white">Mutual Agreement:</strong> By mutual written agreement between both parties</span>
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl sm:text-3xl font-heading font-bold mb-4 text-white">
              Refund Request Process
            </h2>
            <p className="text-white/70 font-body leading-relaxed mb-4">
              To request a refund consideration, please follow these steps:
            </p>
            <ol className="space-y-3 text-white/70 font-body list-decimal list-inside">
              <li>
                Submit a written refund request to{" "}
                <a href={`mailto:${legalSiteInfo.email}`} className="text-primary hover:underline">
                  {legalSiteInfo.email}
                </a>
              </li>
              <li>Include your project details, invoice number, and reason for refund request</li>
              <li>Allow 5-7 business days for our team to review your request</li>
              <li>We will respond with our decision and any applicable refund details</li>
            </ol>
          </section>

          <section>
            <h2 className="text-2xl sm:text-3xl font-heading font-bold mb-4 text-white">
              Project Cancellation
            </h2>
            <p className="text-white/70 font-body leading-relaxed mb-4">
              If you choose to cancel your project:
            </p>
            <ul className="space-y-3 text-white/70 font-body">
              <li className="flex items-start gap-3">
                <span className="text-primary mt-1">•</span>
                <span>All completed work remains billable and must be paid for</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary mt-1">•</span>
                <span>Any intellectual property created remains with Zelvoxx until full payment is received</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary mt-1">•</span>
                <span>Outstanding balances for completed work must be settled within 30 days of cancellation</span>
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl sm:text-3xl font-heading font-bold mb-4 text-white">
              Dispute Resolution
            </h2>
            <p className="text-white/70 font-body leading-relaxed">
              In the event of a dispute regarding refunds, we recommend first attempting to resolve the matter through direct communication with our team. If resolution cannot be reached, disputes may be subject to mediation or arbitration as outlined in our{" "}
              <Link href="/service-agreement" className="text-primary hover:underline">
                Service Agreement
              </Link>
              .
            </p>
          </section>

          <LegalContactSection
            heading="Contact us"
            intro="If you have questions about this Refund Policy, contact us:"
          />
      </LegalPageLayout>

      <Footer />
    </main>
  );
}
