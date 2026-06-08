import Link from "next/link";
import type { Metadata } from "next";

import { SiteHeader } from "@/app/components/SiteHeader";
import { SiteFooter } from "@/app/components/SiteFooter";

export const metadata: Metadata = {
  title: "Process",
  description:
    "How a project moves through BOAT3000 — call, scope, build, review, handoff, aftercare. Weekly sprints, daily visibility, no big reveal at the end.",
  alternates: { canonical: "/process" },
};

type Phase = {
  n: string;
  name: string;
  body: string;
  youGet: string;
  tools: string;
};

const PHASES: Phase[] = [
  {
    n: "01",
    name: "The call",
    body: "A free 30-minute call so we understand your business and the real problem — not just the feature you asked for. We qualify fit both ways.",
    youGet: "A written recap and a recommended next step within a day.",
    tools: "Cal.com · Meet",
  },
  {
    n: "02",
    name: "Scope & agreement",
    body: "We turn the problem into a scoped backlog: how many sprints, what's in, what's explicitly out, the price and the timeline. Then a simple contract and a deposit.",
    youGet: "A clear proposal, a signable SOW, and a deposit receipt.",
    tools: "Notion · Documenso · Stripe",
  },
  {
    n: "03",
    name: "Kickoff",
    body: "Before any work starts we stand up your workspace: a project file in your name you have read-access to, a shared channel, the backlog, the design file and the repo.",
    youGet: "Access to your Project Hub and a shared Slack channel.",
    tools: "Notion · Slack · Linear · Figma",
  },
  {
    n: "04",
    name: "The build",
    body: "Monday to Friday, focused work against the backlog. Progress is visible daily — designs and code evolve in the open, not saved for a reveal at the end.",
    youGet: "Daily progress, live Figma and preview links that update as we go.",
    tools: "Figma · GitHub · Loom",
  },
  {
    n: "05",
    name: "Review & feedback",
    body: "A weekly review of what shipped, with feedback captured where the work lives — Figma comments on design, PR comments on code, pins on live previews. We reply same day; you steer without derailing the sprint.",
    youGet: "A resolved-feedback log and a fresh changelog each week.",
    tools: "Figma · GitHub · Markup",
  },
  {
    n: "06",
    name: "Handoff & aftercare",
    body: "We ship the deliverables — developer-ready Figma, prototypes, experience docs, and/or the deployed build and repo — then keep the door open for snags and the next sprint.",
    youGet: "The full handoff package, a walkthrough, and a support window.",
    tools: "Figma Dev Mode · GitHub · Loom",
  },
];

const STACK = [
  "Linear",
  "Slack",
  "Figma",
  "Notion",
  "GitHub",
  "Stripe",
  "Cal.com",
  "Loom",
];

export default function ProcessPage() {
  return (
    <>
      <SiteHeader />
      <main className="page">
        <section className="wrap st-hero">
          <span className="idx mono">How we work</span>
          <h1>
            Daily collaboration.
            <br />
            No big reveal.
          </h1>
          <p className="st-lede">
            We work in weekly sprints, and you see the work as it happens. Here
            is exactly what a project looks like from the first call to handover{" "}
            <span className="blue mono">**</span> the software-studio version of
            walking into a workshop and watching the thing get made.
          </p>
        </section>

        {/* the arc */}
        <section className="wrap pr-arc">
          {PHASES.map((p) => (
            <div className="pr-phase" key={p.n}>
              <div className="pr-phase-n mono">{p.n}</div>
              <div className="pr-phase-main">
                <h2>{p.name}</h2>
                <p>{p.body}</p>
              </div>
              <div className="pr-phase-meta">
                <div>
                  <span className="lab mono">You get</span>
                  {p.youGet}
                </div>
                <div className="pr-tools mono">{p.tools}</div>
              </div>
            </div>
          ))}
        </section>

        {/* feedback promise */}
        <section className="wrap pr-promise">
          <p>
            The thing most studios bury: <strong>feedback lives where the work
            lives</strong>, you give it once a week, and nothing is &ldquo;done&rdquo;
            until it&apos;s written down. You always know where to look and when
            you&apos;ll hear from us.
          </p>
        </section>

        {/* pricing + stack */}
        <section className="wrap pr-price">
          <div className="pr-price-card">
            <b>$5k per sprint</b>
            <span>most projects need 1–2 sprints</span>
            <span>
              deliverables: developer-ready Figma, prototypes &amp; experience
              docs
            </span>
          </div>
          <div className="pr-stack">
            <span className="lab mono">The tools we run on</span>
            <ul>
              {STACK.map((s) => (
                <li key={s} className="mono">
                  {s}
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="wrap st-cta">
          <h2>
            Sound like a fit? <Link href="/contact">Let&apos;s talk.</Link>
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
