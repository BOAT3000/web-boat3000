import Link from "next/link";
import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { POSTS, POST_SLUGS, KIND_LABEL, getPost } from "@/content/newsroom";
import { SiteHeader } from "@/app/components/SiteHeader";
import { SiteFooter } from "@/app/components/SiteFooter";

type Params = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return POST_SLUGS.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.excerpt,
    alternates: { canonical: `/newsroom/${post.slug}` },
    openGraph: {
      title: `${post.title} · BOAT3000`,
      description: post.excerpt,
      url: `/newsroom/${post.slug}`,
      type: "article",
    },
  };
}

export default async function NewsroomPost({ params }: Params) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();

  const idx = POST_SLUGS.indexOf(post.slug);
  const next = POSTS[(idx + 1) % POSTS.length];

  return (
    <>
      <SiteHeader />
      <main className={`page nr-post accent-${post.accent ?? "red"}`}>
        <article className="wrap nr-article">
          <div className="nr-eyebrow mono">
            <Link href="/newsroom" className="ulink">
              ← Newsroom
            </Link>
            <span className="nr-kind">{KIND_LABEL[post.kind]}</span>
          </div>

          <h1>{post.title}</h1>

          <div className="nr-byline mono">
            <span>{post.author}</span>
            <time dateTime={post.date}>{post.dateLabel}</time>
          </div>

          <div className="nr-body">
            {post.body.map((block, i) => {
              if (block.type === "h") return <h2 key={i}>{block.text}</h2>;
              if (block.type === "quote")
                return <blockquote key={i}>{block.text}</blockquote>;
              return <p key={i}>{block.text}</p>;
            })}
          </div>
        </article>

        {next.slug !== post.slug && (
          <section className="wrap cs-next">
            <Link href={`/newsroom/${next.slug}`} className="cs-next-link">
              <span className="mono lab">Next post</span>
              <span className="cs-next-name">
                {next.title} <span className="arr">→</span>
              </span>
            </Link>
          </section>
        )}
      </main>
      <SiteFooter />
    </>
  );
}
