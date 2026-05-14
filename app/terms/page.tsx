import { Metadata } from "next";
import Navbar from "@/src/components/layout/Navbar";
import Footer from "@/src/components/layout/Footer";
import LegalContactSection from "@/src/components/legal/LegalContactSection";
import LegalPageLayout from "@/src/components/legal/LegalPageLayout";
import { legalSiteInfo } from "@/src/constants/data";

export const metadata: Metadata = {
  title: "Terms & Conditions | Zelvoxx",
  description: "Read our terms and conditions to understand your rights and responsibilities when using Zelvoxx services.",
};

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-background text-white selection:bg-primary/30">
      <Navbar />
      
      <LegalPageLayout title="Terms & Conditions" effectiveDate={legalSiteInfo.effectiveDate}>
          <section>
            <h2 className="text-2xl sm:text-3xl font-heading font-bold mb-4 text-white">
              Agreement to Terms
            </h2>
            <p className="text-white/70 font-body leading-relaxed">
              By using Zelvoxx services or accessing our website, you agree to be bound by these Terms & Conditions. If you do not agree to these terms, please do not use our services. These terms constitute a legally binding agreement between you and Zelvoxx.
            </p>
          </section>

          <section>
            <h2 className="text-2xl sm:text-3xl font-heading font-bold mb-4 text-white">
              Our Services
            </h2>
            <p className="text-white/70 font-body leading-relaxed mb-4">
              Zelvoxx provides premium digital services including but not limited to:
            </p>
            <ul className="space-y-3 text-white/70 font-body">
              <li className="flex items-start gap-3">
                <span className="text-primary mt-1">•</span>
                <span><strong className="text-white">Digital Marketing:</strong> Strategic marketing campaigns and advertising management</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary mt-1">•</span>
                <span><strong className="text-white">Website Development:</strong> Custom web design and full-stack development</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary mt-1">•</span>
                <span><strong className="text-white">Branding:</strong> Brand positioning, identity design, and visual systems</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary mt-1">•</span>
                <span><strong className="text-white">Automation:</strong> Sales automation, CRM implementation, and workflow optimization</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary mt-1">•</span>
                <span><strong className="text-white">Growth Services:</strong> SEO, content systems, and revenue optimization</span>
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl sm:text-3xl font-heading font-bold mb-4 text-white">
              Payment Terms
            </h2>
            <p className="text-white/70 font-body leading-relaxed mb-4">
              All payments are governed by the following terms:
            </p>
            <ul className="space-y-3 text-white/70 font-body">
              <li className="flex items-start gap-3">
                <span className="text-primary mt-1">•</span>
                <span><strong className="text-white">Non-Refundable Deposits:</strong> Once work has commenced on your project, payments become non-refundable</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary mt-1">•</span>
                <span><strong className="text-white">Timeline Impact:</strong> Delays in client approvals or feedback may impact project timelines and delivery dates</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary mt-1">•</span>
                <span><strong className="text-white">Payment Schedule:</strong> Payment schedules will be outlined in your project agreement and must be adhered to</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary mt-1">•</span>
                <span><strong className="text-white">Late Payments:</strong> Late payments may result in project suspension or additional fees</span>
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl sm:text-3xl font-heading font-bold mb-4 text-white">
              Intellectual Property
            </h2>
            <p className="text-white/70 font-body leading-relaxed mb-4">
              Intellectual property rights are protected under the following terms:
            </p>
            <ul className="space-y-3 text-white/70 font-body">
              <li className="flex items-start gap-3">
                <span className="text-primary mt-1">•</span>
                <span><strong className="text-white">Ownership:</strong> All custom work, designs, code, and assets remain the property of Zelvoxx until full payment is completed</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary mt-1">•</span>
                <span><strong className="text-white">Transfer:</strong> Full intellectual property rights transfer to the client only upon complete payment and project delivery</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary mt-1">•</span>
                <span><strong className="text-white">Third-Party Assets:</strong> Licensed third-party assets remain subject to their respective license agreements</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary mt-1">•</span>
                <span><strong className="text-white">Portfolio Rights:</strong> Zelvoxx retains the right to showcase completed work in our portfolio and marketing materials</span>
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl sm:text-3xl font-heading font-bold mb-4 text-white">
              Limitation of Liability
            </h2>
            <p className="text-white/70 font-body leading-relaxed mb-4">
              Zelvoxx is not responsible for the following:
            </p>
            <ul className="space-y-3 text-white/70 font-body">
              <li className="flex items-start gap-3">
                <span className="text-primary mt-1">•</span>
                <span><strong className="text-white">Indirect Losses:</strong> Any indirect, incidental, special, or consequential damages</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary mt-1">•</span>
                <span><strong className="text-white">Platform Outages:</strong> Service interruptions due to third-party platform outages or maintenance</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary mt-1">•</span>
                <span><strong className="text-white">Policy Changes:</strong> Impact from ad platform policy changes, algorithm updates, or third-party service modifications</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary mt-1">•</span>
                <span><strong className="text-white">Third-Party Issues:</strong> Problems arising from third-party services, tools, or integrations</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary mt-1">•</span>
                <span><strong className="text-white">Client Actions:</strong> Results impacted by client decisions, content, or actions outside our control</span>
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl sm:text-3xl font-heading font-bold mb-4 text-white">
              Termination
            </h2>
            <p className="text-white/70 font-body leading-relaxed mb-4">
              We reserve the right to terminate services under the following circumstances:
            </p>
            <ul className="space-y-3 text-white/70 font-body">
              <li className="flex items-start gap-3">
                <span className="text-primary mt-1">•</span>
                <span><strong className="text-white">Abuse:</strong> Abuse of our services, team members, or systems</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary mt-1">•</span>
                <span><strong className="text-white">Non-Payment:</strong> Failure to make payments as agreed</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary mt-1">•</span>
                <span><strong className="text-white">Policy Violations:</strong> Violation of these terms or any applicable laws</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary mt-1">•</span>
                <span><strong className="text-white">Mutual Agreement:</strong> By mutual written agreement between both parties</span>
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl sm:text-3xl font-heading font-bold mb-4 text-white">
              Client Responsibilities
            </h2>
            <p className="text-white/70 font-body leading-relaxed mb-4">
              As a client, you are responsible for:
            </p>
            <ul className="space-y-3 text-white/70 font-body">
              <li className="flex items-start gap-3">
                <span className="text-primary mt-1">•</span>
                <span><strong className="text-white">Accurate Information:</strong> Providing accurate, complete, and timely information</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary mt-1">•</span>
                <span><strong className="text-white">Timely Approvals:</strong> Providing approvals and feedback within agreed timeframes</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary mt-1">•</span>
                <span><strong className="text-white">Required Assets:</strong> Providing necessary content, images, branding assets, and access credentials</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary mt-1">•</span>
                <span><strong className="text-white">Communication:</strong> Maintaining open and responsive communication throughout the project</span>
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl sm:text-3xl font-heading font-bold mb-4 text-white">
              Governing Law
            </h2>
            <p className="text-white/70 font-body leading-relaxed">
              These Terms & Conditions shall be governed by and construed in accordance with the laws of the jurisdiction in which Zelvoxx operates. Any disputes arising under these terms shall be subject to the exclusive jurisdiction of the courts in that jurisdiction.
            </p>
          </section>

          <LegalContactSection
            heading="Contact us"
            intro="If you have questions about these Terms & Conditions, contact us:"
          />
      </LegalPageLayout>

      <Footer />
    </main>
  );
}
