/* =====================================================
   Work / case-study content store
   -----------------------------------------------------
   Add a project = add an entry here. No CMS (yet); typed,
   version-controlled, rendered by /work and /work/[slug].
   Migrate to Sanity/Payload only once cadence demands it
   (see .narrative/13-revamp-plan.md, Phase 6).
===================================================== */

export type ProjectStatus = "shipped" | "live" | "in-development";

export type MediaItem = {
  src: string;
  caption: string;
  /** "poster" renders a branded placeholder (for coming-soon work with no asset) */
  kind?: "image" | "video" | "poster";
  /** optional AV1 encode, preferred by browsers that can decode it (src stays the h264 fallback) */
  av1Src?: string;
  /** phone-shaped media — gallery renders it at its native tall aspect instead of the 4:3 crop */
  portrait?: boolean;
};

/** A demo scene captured both landscape (desktop) and vertical (mobile).
   Media lives at /public/oculos/<key>-{wide,tall}.{mp4,av1.mp4,webp}. */
export type Scene = {
  /** file-path key + react key */
  key: string;
  /** who's at the keyboard, shown as the eyebrow */
  role: string;
  /** the one-line headline for the scene */
  title: string;
  /** the story the clip tells */
  story: string;
};

export type Project = {
  /** url segment: /work/<slug> */
  slug: string;
  name: string;
  /** one-line, shown under the title */
  tagline: string;
  /** "Studio release" | "Client work" etc. */
  category: string;
  status: ProjectStatus;
  /** display year / range */
  year: string;
  /** what we did, e.g. ["Product design", "Engineering"] */
  roles: string[];
  /** live product subdomain, if any */
  liveUrl?: string;
  /** accent for this case study */
  accent?: "red" | "blue";
  /** cover for the index card + case-study hero */
  cover: MediaItem;
  /** 1–2 sentence summary for the index + meta description */
  summary: string;
  /** the case-study body */
  problem: string;
  approach: string;
  highlights: { title: string; body: string }[];
  /** outcome / status note — honest, even when "in development" */
  outcome: string;
  stack: string[];
  gallery?: MediaItem[];
  /** scene-by-scene demo walkthrough; first scene doubles as the hero film */
  scenes?: Scene[];
};

export const PROJECTS: Project[] = [
  /* ---------------- BOXTYPE ---------------- */
  {
    slug: "boxtype",
    name: "BOXTYPE",
    tagline: "A random-access text editor for the box model.",
    category: "Studio release",
    status: "shipped",
    year: "2025",
    roles: ["Product design", "Engineering", "Brand"],
    liveUrl: "https://boxtype.boat3000.studio",
    accent: "red",
    cover: {
      src: "/boxtype/demo.mp4",
      av1Src: "/boxtype/demo-av1.mp4",
      caption: "BOXTYPE · live demo",
      kind: "video",
    },
    summary:
      "A text editor that throws out the line-as-a-stack. Instead of appending characters left-to-right, BOXTYPE gives you an infinite page. Place the cursor anywhere and type, like pen on paper.",
    problem:
      "Every text editor inherits the same 50-year-old assumption: a document is a stack of lines and you type at the end of one. That's great for prose and terrible for the way people actually sketch with type: laying out, spacing, and composing on a surface. We wanted to see what an editor feels like when the page is a grid you can address directly.",
    approach:
      "We modelled the document as a page of cells with true random access: every cell is addressable, the cursor can jump anywhere, and editing is modal in the Vim tradition so power users keep their hands on the keys. The whole thing is keyboard-first, with editable, platform-aware shortcuts for navigation, editing and clipboard work.",
    highlights: [
      {
        title: "Random access",
        body: "Jump the cursor to any cell instantly, with no line-by-line navigation. The page is a canvas, not a queue.",
      },
      {
        title: "Modal editing",
        body: "Vim-like modes mean the muscle memory transfers. Navigate, edit, yank and paste without leaving the home row.",
      },
      {
        title: "Editable shortcuts",
        body: "Every binding is remappable and platform-aware, so the editor bends to your hands instead of the other way round.",
      },
    ],
    outcome:
      "Shipped as a studio release and a proof-of-craft: a small, opinionated tool we built because we wanted to use it. Built test-first, it's the kind of thing that shows what we hold client work to.",
    stack: ["React", "TypeScript", "Vite", "Framer Motion", "Vitest"],
    gallery: [
      {
        src: "/boxtype/mobile.mp4",
        caption: "Typing on the page, on mobile",
        kind: "video",
        portrait: true,
      },
    ],
  },

  /* ---------------- OCULOS (ex receipt-shop) ---------------- */
  {
    slug: "oculos",
    name: "Oculos",
    tagline: "The merchant operating system for independent shops.",
    category: "Studio release",
    status: "live",
    year: "2025–26",
    roles: ["Product design", "Engineering", "Brand"],
    liveUrl: "https://oculos.boat3000.studio",
    accent: "blue",
    cover: {
      src: "/oculos/cashier-wide.jpg",
      caption: "Oculos · point of sale",
      kind: "image",
    },
    summary:
      "A merchant operating system for independent shops: a fast point of sale, inventory, profit, shifts, customer credit and an anti-theft audit in one place. Past recording what was sold, it tells the owner what was actually earned, what's missing, and who handled it.",
    problem:
      "An independent shop runs on a bank POS, a notebook, and the owner's memory. The POS records what was sold but never what it earned, and the notebook drifts the moment a second person is behind the counter: stock counts go stale, shift handovers lose cash, refunds and discounts go unrecorded, and nobody can say what the day actually made or where the money leaked. The tools that fix this are priced and shaped for chains, not a one-to-five-branch shop.",
    approach:
      "We built Oculos around the real shape of a shop and the question a bank POS dodges: what did you earn, and what's missing? A fast point of sale takes cash, card, transfer, split or credit on any terminal, and every sale, void, discount and stock movement writes itself to one auditable ledger across every location. On top of that sits the wedge: an owner-only daily performance report, profit and margin, and anti-theft exception alerts that learn what's normal for each cashier. It is Naira-native, and it keeps working at the counter when the connection drops.",
    highlights: [
      {
        title: "One screen, every morning",
        body: "The daily performance report: the day's sales and profit, the cash and transfer you should be holding, what is running low and who is slow. The number a bank POS makes you work out yourself.",
      },
      {
        title: "Sales is vanity, profit is the point",
        body: "Set cost prices and read gross profit and margin, per day and per product. Owner-only, so cashiers sell while you alone see what the shop really made.",
      },
      {
        title: "Business CCTV for money and stock",
        body: "Oculos learns what is normal for each cashier, then flags the outliers: void spikes, refund abuse, discounts to friends, no-sale drawer opens, edits after close.",
      },
      {
        title: "The shelf and the system agree",
        body: "Every sale, restock and adjustment moves one auditable ledger across one to five locations, with reorder alerts before you run out and owner, manager and cashier roles that keep everyone in their lane.",
      },
    ],
    outcome:
      "Live as a studio release (formerly prototyped as “receipt-shop”). It's our most production-grade product: multi-tenant, Naira-native, and heavily tested with integration, end-to-end and component suites. It's our clearest evidence that the studio ships real, durable software, not just interfaces.",
    stack: [
      "Next.js",
      "TypeScript",
      "Prisma",
      "PostgreSQL",
      "Clerk",
      "Playwright",
      "Storybook",
    ],
    scenes: [
      {
        key: "cashier",
        role: "Your cashier",
        title: "A sale, end to end",
        story:
          "Your cashier signs in, opens her shift with a cash float, rings up a few items and takes cash. The receipt prints, and your drawer and stock update themselves. Your whole counter, in under a minute.",
      },
      {
        key: "manager",
        role: "Your manager",
        title: "A refund, and a stock fix",
        story:
          "A customer brings something back. Your manager pulls up the original sale, refunds it with a reason on the record, then corrects a miscounted product. Every adjustment is logged, so nothing happens in the dark.",
      },
      {
        key: "review",
        role: "You, the owner",
        title: "The whole day, one screen",
        story:
          "From one screen you read the day: your takings, the cash you should be holding, red flags, owner-only profit and margin, the activity log, and your live catalog. No spreadsheet stitching.",
      },
      {
        key: "import",
        role: "You, the owner",
        title: "Catalog, from a spreadsheet",
        story:
          "You point Oculos at a CSV, review a validated preview that catches the problems before they land, and commit. Your products go live in the catalog, hundreds at once and none by hand.",
      },
      {
        key: "investigation",
        role: "You, the owner",
        title: "Catching what slips",
        story:
          "One of your managers opened the drawer five times with no sale. Your morning report flags it by name, and one tap drops you into the activity log: every no-sale, timestamped. Your books defend themselves.",
      },
    ],
  },

  /* ---------------- BRACELET ---------------- */
  {
    slug: "bracelet",
    name: "Bracelet",
    tagline: "Anki × Obsidian — flashcards that link.",
    category: "Studio release",
    status: "in-development",
    year: "2026",
    roles: ["Product design", "Engineering", "Research"],
    accent: "red",
    cover: { src: "/bracelet-desktop.png", caption: "Bracelet · study view" },
    summary:
      "A learning app that merges spaced-repetition flashcards with networked notes. The best of Anki and Obsidian: atomic cards that link to each other, so a study session can branch into the wider web of what you know.",
    problem:
      "Spaced repetition (Anki) is unbeatable for retention but treats every card as an island. Networked notes (Obsidian) capture how ideas connect but don't help you actually remember them. Learners end up running two systems that never talk — atomic recall on one side, context and connection on the other.",
    approach:
      "Bracelet is a single app, with its own codebase, that extends what Anki makes possible rather than sitting on top of it. Cards are atomic and reviewable, but they're also linkable: while studying a card you can step sideways into a linked note even if it isn't in today's queue. Each note stays small, but the network around it holds the context — recall and understanding in one place.",
    highlights: [
      {
        title: "Linkable flashcards",
        body: "Cards reference other cards. Knowledge stops being a flat deck and becomes a graph you can traverse.",
      },
      {
        title: "Branching study",
        body: "Mid-review, follow a link into related material and come back. Study the thing you're due — and the thing it connects to.",
      },
      {
        title: "Atomic, but contextual",
        body: "Each note stays as small as it should be; the surrounding network carries the larger meaning.",
      },
    ],
    outcome:
      "In active development through 2026 — one of the studio's original product bets. We're sharing the thinking early; the build follows.",
    stack: ["In design"],
    gallery: [
      { src: "/bracelet-mobile.png", caption: "Study, mobile" },
      { src: "/bracelet-mobile-2.png", caption: "Linked notes" },
    ],
  },

  /* ---------------- PEAKERSPACE ---------------- */
  {
    slug: "peakerspace",
    name: "Peakerspace",
    tagline: "Communal music listening — online and off.",
    category: "Studio concept",
    status: "in-development",
    year: "2026",
    roles: ["Concept", "Product design", "Research"],
    accent: "blue",
    cover: { src: "", caption: "Peakerspace", kind: "poster" },
    summary:
      "A communal listening project in two halves: the social ritual of listening together — the way hi-fi listening bars have revived — and an app that builds you a playlist for the feeling you want, not the history you have.",
    problem:
      "Streaming made music infinite and, somehow, lonely. We listen alone, in the background, fed tracks by an algorithm that mostly reflects our past. Two things got lost: the ritual of listening together — intentional, high-fidelity, shared — and the simple act of choosing music by how you want to feel rather than what you played last week.",
    approach:
      "Peakerspace treats those as one idea. There's a space: curated communal listening — sessions and events built around real sound and being in a room with other people, in the lineage of the Japanese kissa and today's listening bars. And there's an app: tell it the emotion you want to feel or the sonic you're craving, and it composes a playlist for that — starting from the feeling, not your listening history.",
    highlights: [
      {
        title: "Listen together, on purpose",
        body: "Communal sessions — in a room or in a shared online space — where the music is the point, not the backdrop.",
      },
      {
        title: "Start from the feeling",
        body: "Name the mood or the sonic you're craving; get a playlist composed for where you want to go, not where you've been.",
      },
      {
        title: "High fidelity, low friction",
        body: "The intention and care of a listening bar, made portable — the ritual without the gatekeeping.",
      },
    ],
    outcome:
      "In conception through 2026 — an early studio bet on music as something we do together and on purpose. We're sharing the thinking first; the build follows.",
    stack: ["In conception"],
  },
];

export const STATUS_LABEL: Record<ProjectStatus, string> = {
  shipped: "Shipped",
  live: "Live",
  "in-development": "In development",
};

export function getProject(slug: string): Project | undefined {
  return PROJECTS.find((p) => p.slug === slug);
}

/** ordered slugs, for prev/next navigation */
export const PROJECT_SLUGS = PROJECTS.map((p) => p.slug);
