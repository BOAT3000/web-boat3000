import Link from "next/link";
import type { Metadata } from "next";
import { notFound } from "next/navigation";

import {
  PROJECTS,
  PROJECT_SLUGS,
  STATUS_LABEL,
  getProject,
} from "@/content/work";
import { SiteHeader } from "@/app/components/SiteHeader";
import { SiteFooter } from "@/app/components/SiteFooter";
import { Media } from "@/app/components/Media";

type Params = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return PROJECT_SLUGS.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { slug } = await params;
  const p = getProject(slug);
  if (!p) return {};
  return {
    title: p.name,
    description: p.summary,
    alternates: { canonical: `/work/${p.slug}` },
    openGraph: {
      title: `${p.name} · BOAT3000`,
      description: p.summary,
      url: `/work/${p.slug}`,
      type: "article",
    },
  };
}

export default async function CaseStudy({ params }: Params) {
  const { slug } = await params;
  const p = getProject(slug);
  if (!p) notFound();

  const idx = PROJECT_SLUGS.indexOf(p.slug);
  const next = PROJECTS[(idx + 1) % PROJECTS.length];

  return (
    <>
      <SiteHeader />
      <main className={`page cs accent-${p.accent ?? "red"}`}>
        {/* ---- hero ---- */}
        <section className="wrap cs-hero">
          <div className="cs-eyebrow mono">
            <Link href="/work" className="ulink">
              ← Work
            </Link>
            <span className={`status status-${p.status}`}>
              {STATUS_LABEL[p.status]}
            </span>
          </div>
          <h1>{p.name}</h1>
          <p className="cs-tagline">{p.tagline}</p>

          <div className="cs-facts mono">
            <div>
              <span className="lab">Category</span>
              {p.category}
            </div>
            <div>
              <span className="lab">Year</span>
              {p.year}
            </div>
            <div>
              <span className="lab">Role</span>
              {p.roles.join(", ")}
            </div>
            {p.liveUrl && (
              <div>
                <span className="lab">Live</span>
                <a
                  href={p.liveUrl}
                  className="ulink"
                  target="_blank"
                  rel="noreferrer"
                >
                  {p.liveUrl.replace("https://", "")} ↗
                </a>
              </div>
            )}
          </div>
        </section>

        {/* ---- cover ---- */}
        <section className="wrap">
          <figure className="cs-cover">
            <Media item={p.cover} />
          </figure>
        </section>

        {/* ---- summary + narrative ---- */}
        <section className="wrap cs-body">
          <p className="cs-summary">{p.summary}</p>

          <div className="cs-section">
            <span className="idx mono">01 / The problem</span>
            <p>{p.problem}</p>
          </div>

          <div className="cs-section">
            <span className="idx mono">02 / The approach</span>
            <p>{p.approach}</p>
          </div>

          <div className="cs-section">
            <span className="idx mono">03 / What we built</span>
            <div className="cs-highlights">
              {p.highlights.map((h) => (
                <div className="cs-hl" key={h.title}>
                  <h3>{h.title}</h3>
                  <p>{h.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ---- gallery ---- */}
        {p.gallery && p.gallery.length > 0 && (
          <section className="wrap cs-gallery">
            {p.gallery.map((m, i) => (
              <figure className="cs-shot" key={i}>
                <Media item={m} />
                <figcaption className="mono">{m.caption}</figcaption>
              </figure>
            ))}
          </section>
        )}

        {/* ---- outcome + stack ---- */}
        <section className="wrap cs-outcome">
          <div className="cs-section" style={{ marginBottom: 0 }}>
            <span className="idx mono">04 / Where it stands</span>
            <p>{p.outcome}</p>
          </div>
          <aside className="cs-stack">
            <span className="lab mono">Built with</span>
            <ul>
              {p.stack.map((s) => (
                <li key={s} className="mono">
                  {s}
                </li>
              ))}
            </ul>
            {p.liveUrl && (
              <a href={p.liveUrl} className="pill dark" target="_blank" rel="noreferrer">
                Visit {p.name} <span className="arr">↗</span>
              </a>
            )}
          </aside>
        </section>

        {/* ---- next ---- */}
        <section className="wrap cs-next">
          <Link href={`/work/${next.slug}`} className="cs-next-link">
            <span className="mono lab">Next project</span>
            <span className="cs-next-name">
              {next.name} <span className="arr">→</span>
            </span>
          </Link>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
