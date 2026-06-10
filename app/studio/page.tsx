import Link from "next/link";
import type { Metadata } from "next";

import { PEOPLE, TESTIMONIALS, PRINCIPLES, PRESS } from "@/content/studio";
import { SiteHeader } from "@/app/components/SiteHeader";
import { SiteFooter } from "@/app/components/SiteFooter";

export const metadata: Metadata = {
  title: "Studio",
  description:
    "BOAT3000 is a craft-focused, two-person product studio. We design and build beautiful software in weekly sprints, and ship a small slate of our own opinionated tools.",
  alternates: { canonical: "/studio" },
};

export default function StudioPage() {
  return (
    <>
      <SiteHeader />
      <main className="page">
        {/* hero */}
        <section className="wrap st-hero">
          <span className="idx mono">The studio</span>
          <h1>
            A small house
            <br />
            with a slate.
          </h1>
          <p className="st-lede">
            BOAT3000 is a craft-focused product studio. We design, brand, and
            build beautiful software in weekly sprints{" "}
            <span className="blue mono">**</span> and we ship our own opinionated
            tools alongside the client work. We build products we&apos;d love to
            pay for. <span className="red">We also build for clients.</span>
          </p>
        </section>

        {/* people */}
        <section className="wrap st-people">
          <span className="idx mono">01 / Who we are</span>
          <div className="st-people-grid">
            {PEOPLE.map((p) => (
              <article className="person" key={p.name}>
                <div className="person-avatar" aria-hidden="true">
                  {p.initials}
                </div>
                <div className="person-body">
                  <h2>{p.name}</h2>
                  <div className="person-role mono">{p.role}</div>
                  <p>{p.bio}</p>
                  {p.links && (
                    <div className="person-links mono">
                      {p.links.map((l) => (
                        <a
                          key={l.label}
                          href={l.url}
                          className="ulink"
                          target="_blank"
                          rel="noreferrer"
                        >
                          {l.label} ↗
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* principles */}
        <section className="wrap st-principles">
          <span className="idx mono">02 / How we think</span>
          <div className="st-principles-grid">
            {PRINCIPLES.map((pr) => (
              <div className="principle" key={pr.title}>
                <h3>{pr.title}</h3>
                <p>{pr.body}</p>
              </div>
            ))}
          </div>
        </section>

        {/* testimonials */}
        <section className="wrap st-quotes">
          <span className="idx mono">03 / In their words</span>
          <div className="st-quotes-grid">
            {TESTIMONIALS.map((t, i) => (
              <blockquote className="quote" key={i}>
                <p>“{t.quote}”</p>
                <footer className="mono">
                  <span className="qn">{t.name}</span>
                  <span className="qr">{t.role}</span>
                </footer>
              </blockquote>
            ))}
          </div>
        </section>

        {/* press */}
        <section className="wrap st-press">
          <div className="st-press-inner">
            <span className="lab mono">
              Teams we&apos;ve worked with have been featured by
            </span>
            <div className="st-press-logos">
              {PRESS.map((name) => (
                <span key={name}>{name}</span>
              ))}
            </div>
          </div>
        </section>

        {/* cta */}
        <section className="wrap st-cta">
          <h2>
            Want to see how we&apos;d <Link href="/process">work with you?</Link>
          </h2>
          <div className="st-cta-actions">
            <Link href="/contact" className="pill dark">
              Book a call <span className="arr">→</span>
            </Link>
            <Link href="/work" className="pill">
              See the work <span className="arr">→</span>
            </Link>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
