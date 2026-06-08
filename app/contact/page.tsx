import Link from "next/link";
import type { Metadata } from "next";

import { SiteHeader } from "@/app/components/SiteHeader";
import { SiteFooter } from "@/app/components/SiteFooter";

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
          {/* form — handled by Netlify Forms (no backend needed) */}
          <form
            className="ct-form"
            name="contact"
            method="POST"
            data-netlify="true"
            data-netlify-honeypot="bot-field"
            action="/contact?sent=1"
          >
            <input type="hidden" name="form-name" value="contact" />
            <p className="ct-hp">
              <label>
                Don&apos;t fill this out: <input name="bot-field" />
              </label>
            </p>

            <div className="ct-row">
              <label className="ct-field">
                <span className="mono">Your name</span>
                <input type="text" name="name" required autoComplete="name" />
              </label>
              <label className="ct-field">
                <span className="mono">Email</span>
                <input type="email" name="email" required autoComplete="email" />
              </label>
            </div>

            <div className="ct-row">
              <label className="ct-field">
                <span className="mono">Company / product</span>
                <input type="text" name="company" autoComplete="organization" />
              </label>
              <label className="ct-field">
                <span className="mono">What do you need?</span>
                <select name="project_type" defaultValue="">
                  <option value="" disabled>
                    Choose one…
                  </option>
                  <option>Product design (UX/UI)</option>
                  <option>Branding &amp; identity</option>
                  <option>Website (Framer / Webflow / custom)</option>
                  <option>Full product build</option>
                  <option>Something else</option>
                </select>
              </label>
            </div>

            <label className="ct-field">
              <span className="mono">Rough budget</span>
              <select name="budget" defaultValue="">
                <option value="" disabled>
                  Choose one…
                </option>
                <option>~$5k (one sprint)</option>
                <option>$10k–$20k (a few sprints)</option>
                <option>$20k+</option>
                <option>Not sure yet</option>
              </select>
            </label>

            <label className="ct-field">
              <span className="mono">Tell us about it</span>
              <textarea
                name="message"
                rows={5}
                required
                placeholder="What are you building, and what does success look like?"
              />
            </label>

            <button type="submit" className="pill dark ct-submit">
              Send it <span className="arr">→</span>
            </button>
          </form>

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
