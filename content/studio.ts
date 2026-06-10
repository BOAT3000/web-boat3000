/* =====================================================
   Studio content — people, testimonials, clients, principles
   Some entries are plausible STUBS (marked) to be replaced
   with real material as it's gathered (see lifecycle §8).
===================================================== */

export type Person = {
  name: string;
  role: string;
  /** monogram fallback shown when no avatar image exists */
  initials: string;
  bio: string;
  avatar?: string;
  links?: { label: string; url: string }[];
};

export const PEOPLE: Person[] = [
  {
    name: "Caleb Durojaiye",
    role: "Founder · Design & Engineering",
    initials: "CD",
    bio: "Designs and builds the studio's products and client work end to end — from the first Figma frame to the deployed code. Cares about local-first software, typography, and tools that feel like they were made by someone who'd use them.",
    links: [
      { label: "GitHub", url: "https://github.com/dco2" },
      { label: "Twitter", url: "https://twitter.com/vocaldeathstar" },
    ],
  },
  // STUB — second seat / collaborator. Replace with real person when added.
  {
    name: "A small bench",
    role: "Trusted collaborators",
    initials: "✦",
    bio: "Beyond the core, the studio works with a small, recurring bench of collaborators — motion, illustration, copy — pulled in per project so the work stays sharp without the overhead of a big agency.",
  },
];

export type Testimonial = {
  quote: string;
  name: string;
  role: string;
};

// STUB testimonials — replace with real, attributed quotes (lifecycle §8).
export const TESTIMONIALS: Testimonial[] = [
  {
    quote:
      "They shipped in a week what our last agency quoted a quarter for — and we could watch it happen the whole time.",
    name: "Founder",
    role: "B2B SaaS (YC-backed)",
  },
  {
    quote:
      "It didn't feel like outsourcing. It felt like having the best designer and engineer we couldn't afford to hire full-time.",
    name: "Co-founder",
    role: "AI tooling startup",
  },
  {
    quote:
      "The handoff was the cleanest our engineers have ever seen. Dev-mode Figma, docs, the lot.",
    name: "Head of Product",
    role: "Web3 infrastructure",
  },
];

export type Principle = { title: string; body: string };

export const PRINCIPLES: Principle[] = [
  {
    title: "We build what we'd pay for",
    body: "Our own products (BOXTYPE, Oculos, Bracelet) are the bar. If we wouldn't use it, we won't ship it to you.",
  },
  {
    title: "No big reveal",
    body: "You see the work as it happens — daily. Designs and builds evolve in the open, and you comment on them as they go.",
  },
  {
    title: "Weekly sprints, fixed scope",
    body: "One focused week at a time. A clear backlog, a clear price, no retainer theatre.",
  },
  {
    title: "Local-first, online too",
    body: "We love software that keeps working when the connection doesn't — and reconciles cleanly when it returns.",
  },
];

// "Teams we've worked with have been featured by" — kept honest as press, not client logos.
export const PRESS = ["Y Combinator", "TechCrunch", "Forbes", "BBC"];
