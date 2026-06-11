import Link from "next/link";
import type { Metadata } from "next";

import { SiteHeader } from "@/app/components/SiteHeader";
import { SiteFooter } from "@/app/components/SiteFooter";
import { ContactForm } from "./ContactForm";

export const metadata: Metadata = {
  title: "Start a project",
  description:
    "Tell BOAT3000 about your project, or book a free 30-minute call. We design and build beautiful software in weekly sprints.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <>
      <SiteHeader />
      <main className="page">
        <section className="wrap ct-hero">
          <span className="idx mono">Start a project</span>
          <h1>
            Tell us what you&apos;re
            <br />
            building.
          </h1>
          <p className="st-lede">
            A free 30-minute call, or a few lines below. We reply within one
            business day <span className="red mono">**</span> bookings open from 5
            Jan &apos;26.
          </p>
        </section>

        <section className="wrap ct-grid">
          {/* form — submitted to Netlify Forms via fetch (see ContactForm) */}
          <ContactForm />

          {/* aside */}
          <aside className="ct-aside">
            <div className="ct-block">
              <span className="lab mono">Prefer to talk?</span>
              <a
                href="https://cal.com/boat3000"
                className="pill"
                target="_blank"
                rel="noreferrer"
              >
                Book a 30-min call <span className="arr">↗</span>
              </a>
            </div>
            <div className="ct-block">
              <span className="lab mono">Or just email</span>
              <a href="mailto:hello@boat3000.studio" className="ulink ct-email">
                hello@boat3000.studio
              </a>
            </div>
            <div className="ct-block">
              <span className="lab mono">What happens next</span>
              <ol className="ct-next mono">
                <li>We reply within a business day.</li>
                <li>A free 30-min call to scope it.</li>
                <li>A clear proposal &amp; timeline.</li>
              </ol>
              <Link href="/process" className="ulink mono">
                See our full process →
              </Link>
            </div>
          </aside>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
