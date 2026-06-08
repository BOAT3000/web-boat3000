import Link from "next/link";

/* Persistent header for sub-pages (work, case studies, etc.).
   The home page keeps its own hero masthead + scroll-aware topbar. */
export function SiteHeader() {
  return (
    <header className="subnav">
      <Link href="/" className="wordmark" aria-label="BOAT3000 — home">
        BOAT3<span className="o">0</span>00
      </Link>
      <nav>
        <Link href="/work" className="nl">
          Work
        </Link>
        <Link href="/studio" className="nl">
          Studio
        </Link>
        <Link href="/process" className="nl">
          Process
        </Link>
        <Link
          href="/contact"
          className="pill dark"
          style={{ padding: "8px 16px", fontSize: 13 }}
        >
          Book a call <span className="arr">→</span>
        </Link>
      </nav>
    </header>
  );
}
