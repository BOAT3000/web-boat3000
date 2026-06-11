import Link from "next/link";

/* Studio footer, shared across the homepage and every sub-page.
   CTA band -> wrapping link columns -> legal bar -> giant wordmark.
   The columns are a responsive grid so they never overflow on mobile. */
export function SiteFooter() {
  return (
    <footer className="site-footer" id="book">
      <div className="wrap">
        {/* ---- CTA ---- */}
        <div className="foot-cta">
          <svg
            className="bcall"
            width="120"
            height="120"
            viewBox="0 0 120 120"
            aria-label="Book a call"
          >
            <defs>
              <path
                id="bcfoot-sub"
                d="M60,60 m-46,0 a46,46 0 1,1 92,0 a46,46 0 1,1 -92,0"
              />
            </defs>
            <g className="ring">
              <text
                fontSize="10.5"
                fill="#F6F5F1"
                fontFamily="var(--font-mono), monospace"
              >
                <textPath
                  href="#bcfoot-sub"
                  textLength="289"
                  lengthAdjust="spacingAndGlyphs"
                >
                  BOOK A CALL · BOOK A CALL ·{" "}
                </textPath>
              </text>
            </g>
            <path
              transform="translate(47,47) scale(0.105)"
              fill="#E0342A"
              d="M231.88 175.08A56.26 56.26 0 0 1 176 224C96.6 224 32 159.4 32 80a56.26 56.26 0 0 1 48.92-55.88a16 16 0 0 1 16.62 9.52l21.12 47.15v.12A16 16 0 0 1 117.39 96c-.18.27-.37.52-.57.77L96 121.45c7.49 15.22 23.41 31 38.83 38.51l24.34-20.71a8 8 0 0 1 .75-.56a16 16 0 0 1 15.17-1.4l.13.06l47.11 21.11a16 16 0 0 1 9.55 16.62"
            />
          </svg>
          <h3>
            We&apos;d love to hear about{" "}
            <Link href="/contact">your project.</Link>
          </h3>
          <Link href="/contact" className="pill ghost-d">
            Start a project <span className="arr">→</span>
          </Link>
        </div>

        {/* ---- link columns ---- */}
        <nav className="foot-nav" aria-label="Footer">
          <div className="foot-col">
            <span className="foot-col-h mono">Explore</span>
            <Link href="/work">Work</Link>
            <Link href="/studio">Studio</Link>
            <Link href="/process">Process</Link>
            <Link href="/newsroom">Newsroom</Link>
          </div>
          <div className="foot-col">
            <span className="foot-col-h mono">Products</span>
            <Link href="/work/boxtype">BOXTYPE</Link>
            <Link href="/work/oculos">Oculos</Link>
            <Link href="/work/bracelet">Bracelet</Link>
          </div>
          <div className="foot-col">
            <span className="foot-col-h mono">Connect</span>
            <Link href="/contact">Contact</Link>
            <a href="https://cal.com/boat3000" target="_blank" rel="noreferrer">
              Book a call <span className="ext">↗</span>
            </a>
            <a href="mailto:hello@boat3000.studio">Email</a>
            <a
              href="https://github.com/BOAT3000/"
              target="_blank"
              rel="noreferrer"
            >
              GitHub <span className="ext">↗</span>
            </a>
            <a
              href="https://x.com/localboatstudio"
              target="_blank"
              rel="noreferrer"
            >
              Twitter <span className="ext">↗</span>
            </a>
          </div>
        </nav>

        {/* ---- legal bar ---- */}
        <div className="foot-bottom">
          <Link href="/" className="ulink">
            home ↑
          </Link>
          <span>
            ™ 2026 · BOAT3000 studio ·{" "}
            <Link href="/privacy" className="ulink">
              Privacy
            </Link>{" "}
            ·{" "}
            <Link href="/colophon" className="ulink">
              Colophon
            </Link>
          </span>
          <span>local-first &amp; online · ✶</span>
        </div>
      </div>
      <div className="giant" aria-hidden="true">
        BOAT3<span className="o">0</span>00
      </div>
    </footer>
  );
}
