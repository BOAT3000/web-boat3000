import Link from "next/link";
import type { Metadata } from "next";

import { PROJECTS, STATUS_LABEL } from "@/content/work";
import { SiteHeader } from "@/app/components/SiteHeader";
import { SiteFooter } from "@/app/components/SiteFooter";
import { Media } from "@/app/components/Media";

export const metadata: Metadata = {
  title: "Work",
  description:
    "Selected work from BOAT3000 — studio releases and client projects. BOXTYPE, Oculos, Bracelet, and more.",
  alternates: { canonical: "/work" },
};

export default function WorkIndex() {
  return (
    <>
      <SiteHeader />
      <main className="page">
        <section className="wrap wk-hero">
          <span className="idx mono">Selected work</span>
          <h1>
            Things we&apos;ve made,
            <br />
            and things we&apos;re making.
          </h1>
          <p>
            We build products we&apos;d love to pay for{" "}
            <span className="red">**</span> and we build for clients too. A small
            slate, held to one bar of craft.
          </p>
        </section>

        <section className="wrap wk-list">
          {PROJECTS.map((p, i) => (
            <Link
              key={p.slug}
              href={`/work/${p.slug}`}
              className={`wk-card accent-${p.accent ?? "red"}`}
            >
              <div className="wk-card-media">
                <Media item={p.cover} />
                <span className={`status status-${p.status}`}>
                  {STATUS_LABEL[p.status]}
                </span>
              </div>
              <div className="wk-card-body">
                <span className="num mono">{String(i + 1).padStart(2, "0")}</span>
                <div className="wk-card-text">
                  <h2>{p.name}</h2>
                  <p>{p.tagline}</p>
                </div>
                <div className="wk-meta mono">
                  <span>{p.category}</span>
                  <span>{p.year}</span>
                  <span className="arr">View →</span>
                </div>
              </div>
            </Link>
          ))}
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
