/* =====================================================
   Newsroom content store — announcements + essays
   -----------------------------------------------------
   Add a post = add an entry here. Same typed, version-
   controlled approach as content/work.ts; no CMS yet.
   Rendered by /newsroom and /newsroom/[slug].
   Some entries are plausible STUBS (marked) to be
   replaced with real material as the studio publishes.
===================================================== */

export type PostKind = "announcement" | "essay";

export const KIND_LABEL: Record<PostKind, string> = {
  announcement: "Announcement",
  essay: "Essay",
};

/** body is a small block list so posts stay typed + portable */
export type Block =
  | { type: "p"; text: string }
  | { type: "h"; text: string }
  | { type: "quote"; text: string };

export type Post = {
  /** url segment: /newsroom/<slug> */
  slug: string;
  title: string;
  kind: PostKind;
  /** ISO date, used for sorting */
  date: string;
  /** human display date */
  dateLabel: string;
  /** one–two lines for the index + meta description */
  excerpt: string;
  author: string;
  /** accent for the post, optional */
  accent?: "red" | "blue";
  body: Block[];
};

/* Newest first is handled by getter; author order here is by date. */
const ENTRIES: Post[] = [
  /* ---------------- STUB: launch note ---------------- */
  {
    slug: "the-studio-is-open",
    title: "The studio is open for projects",
    kind: "announcement",
    date: "2026-01-05",
    dateLabel: "5 January 2026",
    excerpt:
      "BOAT3000 is taking on a small slate of client work in 2026 — designed and built in weekly sprints, held to the same bar as our own products.",
    author: "Caleb Durojaiye",
    accent: "red",
    body: [
      {
        type: "p",
        text: "We spent last year building products we'd want to pay for — BOXTYPE chief among them. This year we're opening a few seats for client work, on the same terms we hold ourselves to: weekly sprints, real craft, and software that feels like it was made by someone who'd actually use it.",
      },
      {
        type: "h",
        text: "How we work",
      },
      {
        type: "p",
        text: "Every engagement starts with a free 30-minute call to scope the problem, then a clear proposal and timeline. From there it's weekly sprints with something real to look at at the end of each one — no months-long silence, no surprise invoices.",
      },
      {
        type: "quote",
        text: "We build for clients the way we build for ourselves: small, sharp, and honest about where things stand.",
      },
      {
        type: "p",
        text: "Bookings open from 5 January 2026. If you've got something you're building, tell us about it — we reply within one business day.",
      },
    ],
  },
  /* ---------------- STUB: first essay ---------------- */
  {
    slug: "local-first-and-online",
    title: "Local-first, and online",
    kind: "essay",
    date: "2026-02-18",
    dateLabel: "18 February 2026",
    excerpt:
      "Why we keep reaching for local-first software — what it gives the people using it, and what it asks of the people building it.",
    author: "Caleb Durojaiye",
    accent: "blue",
    body: [
      {
        type: "p",
        text: "Most software treats your data as something that lives on a server you don't own, reachable only when the network agrees. Local-first flips that: your data lives with you, sync is a convenience rather than a dependency, and the app keeps working on a plane, a train, or a bad connection.",
      },
      {
        type: "h",
        text: "What it gives the user",
      },
      {
        type: "p",
        text: "Speed that doesn't depend on a round-trip. Ownership that doesn't depend on a company staying in business. And a kind of calm — the quiet confidence that the thing you're working in is actually yours.",
      },
      {
        type: "h",
        text: "What it asks of the builder",
      },
      {
        type: "p",
        text: "More care up front: conflict resolution, sync semantics, and a data model you can reason about offline. It's harder. We think it's worth it, because the result is software that respects the person on the other side of the screen.",
      },
    ],
  },
];

/** Posts newest-first for display. */
export const POSTS: Post[] = [...ENTRIES].sort((a, b) =>
  a.date < b.date ? 1 : a.date > b.date ? -1 : 0,
);

export const POST_SLUGS = POSTS.map((p) => p.slug);

export function getPost(slug: string): Post | undefined {
  return POSTS.find((p) => p.slug === slug);
}
