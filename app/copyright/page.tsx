import { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/src/components/layout/Navbar";
import Footer from "@/src/components/layout/Footer";
import LegalContactSection from "@/src/components/legal/LegalContactSection";
import LegalPageLayout from "@/src/components/legal/LegalPageLayout";
import { legalSiteInfo } from "@/src/constants/data";

export const metadata: Metadata = {
  title: "Copyright | Zelvoxx",
  description:
    "Copyright notice for Zelvoxx.com: ownership of site content, branding, and limitations on copying or commercial use.",
};

export default function CopyrightPage() {
  return (
    <main className="min-h-screen bg-background text-white selection:bg-primary/30">
      <Navbar />

      <LegalPageLayout title="Copyright" effectiveDate={legalSiteInfo.effectiveDate}>
          <section>
            <h2 className="text-2xl sm:text-3xl font-heading font-bold mb-4 text-white">
              Ownership
            </h2>
            <p className="text-white/70 font-body leading-relaxed">
              Unless otherwise stated, Zelvoxx owns or licenses all content published on{" "}
              <a href={legalSiteInfo.website} className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">
                {legalSiteInfo.website}
              </a>
              , including text, graphics, logos, icons, images, audio and video clips, layouts, selection and arrangement of content, code, and other materials (collectively, &quot;Site Content&quot;).
            </p>
          </section>

          <section>
            <h2 className="text-2xl sm:text-3xl font-heading font-bold mb-4 text-white">
              Limited license to you
            </h2>
            <p className="text-white/70 font-body leading-relaxed mb-4">
              We grant you a limited, non-exclusive, non-transferable license to access and view the Site Content for personal or internal business purposes in connection with evaluating or using Zelvoxx services. You may not:
            </p>
            <ul className="space-y-3 text-white/70 font-body">
              <li className="flex items-start gap-3">
                <span className="text-primary mt-1">•</span>
                <span>Copy, reproduce, distribute, publicly display, publicly perform, or create derivative works from Site Content without our prior written consent</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary mt-1">•</span>
                <span>Use Site Content for commercial exploitation unrelated to a legitimate engagement with Zelvoxx</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary mt-1">•</span>
                <span>Remove or alter any copyright, trademark, or proprietary notices</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary mt-1">•</span>
                <span>Use automated means to scrape, harvest, or extract Site Content at scale in a way that burdens our systems or violates our terms</span>
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl sm:text-3xl font-heading font-bold mb-4 text-white">
              Client deliverables
            </h2>
            <p className="text-white/70 font-body leading-relaxed">
              Custom work created for clients is governed by the applicable agreement and our{" "}
              <Link href="/terms" className="text-primary hover:underline">
                Terms &amp; Conditions
              </Link>
              . Website content describing client results, portfolio items, or case studies may include materials used with permission or under license; rights in those materials may belong to third parties.
            </p>
          </section>

          <section>
            <h2 className="text-2xl sm:text-3xl font-heading font-bold mb-4 text-white">
              Trademarks
            </h2>
            <p className="text-white/70 font-body leading-relaxed">
              &quot;Zelvoxx&quot; and related branding are trademarks of Zelvoxx. Third-party names and marks appearing on the site are the property of their respective owners. Use of third-party marks does not imply endorsement.
            </p>
          </section>

          <section>
            <h2 className="text-2xl sm:text-3xl font-heading font-bold mb-4 text-white">
              Infringement concerns
            </h2>
            <p className="text-white/70 font-body leading-relaxed">
              If you believe content on our website infringes your copyright, please review our{" "}
              <Link href="/dmca" className="text-primary hover:underline">
                DMCA Policy
              </Link>{" "}
              and follow the notice procedure described there.
            </p>
          </section>

          <LegalContactSection
            heading="Contact us"
            intro="Copyright licensing inquiries or general questions? Contact us:"
          />
      </LegalPageLayout>

      <Footer />
    </main>
  );
}
