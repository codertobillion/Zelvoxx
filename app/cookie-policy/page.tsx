import { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/src/components/layout/Navbar";
import Footer from "@/src/components/layout/Footer";
import LegalContactSection from "@/src/components/legal/LegalContactSection";
import LegalPageLayout from "@/src/components/legal/LegalPageLayout";
import { legalSiteInfo } from "@/src/constants/data";

export const metadata: Metadata = {
  title: "Cookie Policy | Zelvoxx",
  description:
    "How Zelvoxx uses cookies and similar technologies on zelvoxx.com, including analytics, advertising, and your choices.",
};

export default function CookiePolicyPage() {
  return (
    <main className="min-h-screen bg-background text-white selection:bg-primary/30">
      <Navbar />

      <LegalPageLayout title="Cookie Policy" effectiveDate={legalSiteInfo.effectiveDate}>
          <section>
            <h2 className="text-2xl sm:text-3xl font-heading font-bold mb-4 text-white">
              What this policy covers
            </h2>
            <p className="text-white/70 font-body leading-relaxed">
              This Cookie Policy explains how Zelvoxx (&quot;we&quot;, &quot;our&quot;, &quot;us&quot;) uses cookies and similar technologies when you visit{" "}
              <a href={legalSiteInfo.website} className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">
                {legalSiteInfo.website}
              </a>
              . It should be read together with our{" "}
              <Link href="/privacy" className="text-primary hover:underline">
                Privacy Policy
              </Link>
              , which describes how we process personal data more broadly.
            </p>
          </section>

          <section>
            <h2 className="text-2xl sm:text-3xl font-heading font-bold mb-4 text-white">
              What cookies are
            </h2>
            <p className="text-white/70 font-body leading-relaxed">
              Cookies are small text files stored on your device when you visit a website. Similar technologies include pixels, tags, local storage, and scripts that recognize your device or browser. They help sites function, remember preferences, measure performance, and—in some cases—support advertising.
            </p>
          </section>

          <section>
            <h2 className="text-2xl sm:text-3xl font-heading font-bold mb-4 text-white">
              How we use cookies
            </h2>
            <p className="text-white/70 font-body leading-relaxed mb-4">
              Depending on your region and the choices presented on our site, we may use cookies for:
            </p>
            <ul className="space-y-3 text-white/70 font-body">
              <li className="flex items-start gap-3">
                <span className="text-primary mt-1">•</span>
                <span>
                  <strong className="text-white">Strictly necessary / functional:</strong> enabling core site features, security, load balancing, and remembering basic preferences where applicable.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary mt-1">•</span>
                <span>
                  <strong className="text-white">Analytics and performance:</strong> understanding how visitors use our site so we can improve content and experience. We may use tools such as Google Analytics.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary mt-1">•</span>
                <span>
                  <strong className="text-white">Marketing and advertising:</strong> measuring conversions, building audiences, and delivering more relevant ads. We may use tools such as Meta Pixel and advertising cookies where permitted.
                </span>
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl sm:text-3xl font-heading font-bold mb-4 text-white">
              Third-party tools
            </h2>
            <p className="text-white/70 font-body leading-relaxed mb-4">
              Third parties that set or read cookies on our behalf may include, for example:
            </p>
            <ul className="space-y-3 text-white/70 font-body">
              <li className="flex items-start gap-3">
                <span className="text-primary mt-1">•</span>
                <span>
                  <strong className="text-white">Google Analytics</strong> — site usage and performance metrics
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary mt-1">•</span>
                <span>
                  <strong className="text-white">Meta (Facebook) Pixel</strong> — advertising and conversion measurement
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary mt-1">•</span>
                <span>
                  <strong className="text-white">Calendly</strong> — scheduling embeds and related functionality
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary mt-1">•</span>
                <span>
                  <strong className="text-white">Stripe</strong> — payment-related sessions and fraud prevention when you pay through our flows
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary mt-1">•</span>
                <span>
                  <strong className="text-white">Hosting and infrastructure providers</strong> — delivery, security, and reliability of the site
                </span>
              </li>
            </ul>
            <p className="text-white/70 font-body leading-relaxed mt-4">
              Those providers have their own privacy and cookie notices. We encourage you to review their policies to understand how they process data.
            </p>
          </section>

          <section>
            <h2 className="text-2xl sm:text-3xl font-heading font-bold mb-4 text-white">
              Retention
            </h2>
            <p className="text-white/70 font-body leading-relaxed">
              How long a cookie lasts depends on whether it is a &quot;session&quot; cookie (deleted when you close your browser) or a &quot;persistent&quot; cookie (which remains for a set period or until you delete it). Retention periods vary by tool and purpose and may be updated as our site evolves.
            </p>
          </section>

          <section>
            <h2 className="text-2xl sm:text-3xl font-heading font-bold mb-4 text-white">
              Your choices
            </h2>
            <p className="text-white/70 font-body leading-relaxed mb-4">
              You can control cookies through your browser settings (including blocking or deleting cookies). You may also use industry opt-out tools where available (for example, advertising choice programs offered in your region). Note that blocking certain cookies can affect how the site or embedded tools work.
            </p>
            <p className="text-white/70 font-body leading-relaxed">
              Where required by law, we will obtain consent before using non-essential cookies and provide a way to update your preferences.
            </p>
          </section>

          <section>
            <h2 className="text-2xl sm:text-3xl font-heading font-bold mb-4 text-white">
              Updates
            </h2>
            <p className="text-white/70 font-body leading-relaxed">
              We may update this Cookie Policy from time to time. When we do, we will revise the effective date at the top of this page. Continued use of the site after changes means you acknowledge the updated policy, subject to any additional requirements under applicable law.
            </p>
          </section>

          <LegalContactSection
            heading="Contact us"
            intro="Questions about cookies or this Cookie Policy? Contact us:"
          />
      </LegalPageLayout>

      <Footer />
    </main>
  );
}
