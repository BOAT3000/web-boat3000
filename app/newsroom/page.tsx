import Link from "next/link";
import type { Metadata } from "next";

import { POSTS, KIND_LABEL } from "@/content/newsroom";
import { SiteHeader } from "@/app/components/SiteHeader";
import { SiteFooter } from "@/app/components/SiteFooter";

export const metadata: Metadata = {
  title: "Newsroom",
  description:
    "Announcements and essays from BOAT3000 — studio releases, notes on craft, and how we think about building software.",
  alternates: { canonical: "/newsroom" },
};

export default function NewsroomIndex() {
  return (
    <>
      <SiteHeader />
      <main className="page">
        <section className="wrap wk-hero">
          <span className="idx mono">Newsroom</span>
          <h1>
            Announcements,
            <br />
            and a few essays.
          </h1>
          <p>
            What the studio is shipping, and the occasional longer thought on
            craft, tools, and the way we build.
          </p>
        </section>

        <section className="wrap nr-list">
          {POSTS.map((post) => (
            <Link
              key={post.slug}
              href={`/newsroom/${post.slug}`}
              className={`nr-card accent-${post.accent ?? "red"}`}
            >
              <div className="nr-card-meta mono">
                <span className="nr-kind">{KIND_LABEL[post.kind]}</span>
                <time dateTime={post.date}>{post.dateLabel}</time>
              </div>
              <div className="nr-card-text">
                <h2>{post.title}</h2>
                <p>{post.excerpt}</p>
              </div>
              <span className="nr-read mono">Read →</span>
            </Link>
          ))}
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
