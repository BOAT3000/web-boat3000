import type { Metadata } from "next";

import { SiteHeader } from "@/app/components/SiteHeader";
import { SiteFooter } from "@/app/components/SiteFooter";

export const metadata: Metadata = {
  title: "Privacy",
  description: "How BOAT3000 handles the small amount of data it collects.",
  alternates: { canonical: "/privacy" },
};

export default function PrivacyPage() {
  return (
    <>
      <SiteHeader />
      <main className="page">
        <section className="wrap legal">
          <span className="idx mono">Privacy</span>
          <h1>Privacy</h1>
          <p className="legal-updated mono">Last updated · January 2026</p>

          <p>
            BOAT3000 is a small studio and collects as little as possible. This
            page explains what we collect and why.
          </p>

          <h2>What we collect</h2>
          <p>
            When you contact us through the form on this site or by email, we
            receive what you send us — your name, email, company, and the
            details of your enquiry. We use this only to reply and to scope
            potential work.
          </p>

          <h2>Analytics</h2>
          <p>
            We may use privacy-respecting, cookie-free analytics to understand,
            in aggregate, how the site is used. This does not identify you
            individually.
          </p>

          <h2>Service providers</h2>
          <p>
            We rely on a small set of trusted services to operate — for hosting,
            scheduling, e-signature, invoicing and project collaboration. Your
            information is shared with them only as needed to deliver the work,
            and each holds it under their own privacy terms.
          </p>

          <h2>Your information, your call</h2>
          <p>
            You can ask us at any time what we hold about you, or ask us to
            delete it. Email{" "}
            <a href="mailto:hello@boat3000.studio" className="ulink">
              hello@boat3000.studio
            </a>{" "}
            and we&apos;ll sort it out.
          </p>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
