import Link from "next/link";
import type { Metadata } from "next";

import { SiteHeader } from "@/app/components/SiteHeader";
import { SiteFooter } from "@/app/components/SiteFooter";

export const metadata: Metadata = {
  title: "Colophon",
  description: "How this site was made — type, tools, and colours.",
  alternates: { canonical: "/colophon" },
};

export default function ColophonPage() {
  return (
    <>
      <SiteHeader />
      <main className="page">
        <section className="wrap legal">
          <span className="idx mono">Colophon</span>
          <h1>Colophon</h1>
          <p className="legal-updated mono">A note on how this was made</p>

          <p>
            This site is the marketing home for BOAT3000, a craft-focused product
            studio. It&apos;s built and hosted the way we build everything —
            small, fast, and legible.
          </p>

          <h2>Type</h2>
          <p>
            Set in <strong>Schibsted Grotesk</strong> for display and interface,
            and <strong>JetBrains Mono</strong> for labels, eyebrows and the
            terminal-style footnotes.
          </p>

          <h2>Colour</h2>
          <p>
            Paper and ink, with two accents used sparingly — a red
            (<span className="red">#E0342A</span>) and a blue
            (<span className="blue">#5B92F2</span>).
          </p>

          <h2>Built with</h2>
          <p className="mono colophon-stack">
            Next.js · React · TypeScript · Tailwind CSS · deployed on Netlify ·
            served from <Link href="/" className="ulink">boat3000.studio</Link>
          </p>

          <h2>The slate</h2>
          <p>
            Our own products live on their own homes —{" "}
            <a
              href="https://boxtype.boat3000.studio"
              className="ulink"
              target="_blank"
              rel="noreferrer"
            >
              boxtype
            </a>
            ,{" "}
            <a
              href="https://oculos.boat3000.studio"
              className="ulink"
              target="_blank"
              rel="noreferrer"
            >
              oculos
            </a>{" "}
            and bracelet — all under{" "}
            <span className="mono">*.boat3000.studio</span>.
          </p>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
