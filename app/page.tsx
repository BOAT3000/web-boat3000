"use client";

import {
  useEffect,
  useRef,
  useState,
  type ReactNode,
} from "react";
import Link from "next/link";

import { SiteFooter } from "@/app/components/SiteFooter";

/* ---------- wordmark ---------- */
function Wordmark({
  className = "",
  style,
}: {
  className?: string;
  style?: React.CSSProperties;
}) {
  return (
    <span className={`wordmark ${className}`} style={style}>
      BOAT3<span className="o">0</span>00
    </span>
  );
}

/* ---------- scroll reveal hook ---------- */
function useReveal<T extends HTMLElement>() {
  const ref = useRef<T>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const reduce = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (reduce) {
      el.classList.add("in");
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) {
            e.target.classList.add("in");
            io.unobserve(e.target);
          }
        }
      },
      { rootMargin: "0px 0px -10% 0px" }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return ref;
}

function Reveal({
  children,
  className = "",
  style,
}: {
  children: ReactNode;
  className?: string;
  style?: React.CSSProperties;
}) {
  const ref = useReveal<HTMLDivElement>();
  return (
    <div ref={ref} className={`reveal ${className}`} style={style}>
      {children}
    </div>
  );
}

/* ---------- ticker items ---------- */
const TICKER = [
  "CRAFT-FOCUSED PRODUCT STUDIO",
  "LOCAL-FIRST & ONLINE PRODUCTS",
  "WEEKLY SPRINTS · $5K",
  "B2B · AI · WEB3",
  "BOOKINGS OPEN 5 JAN '26",
];

function TickerRun() {
  return (
    <div className="run">
      {[...TICKER, ...TICKER].map((t, i) => (
        <span key={i}>
          <span className="bolt">✦</span> {t}
        </span>
      ))}
    </div>
  );
}

/* ---------- FAQ accordion (native details + animated height) ---------- */
type QA = { q: string; a: string };
const FAQS: QA[] = [
  {
    q: "Can you handle branding, product, and website work?",
    a: "Absolutely. Whether you need a new brand identity, a Framer/Webflow site, or a full product UX/UI overhaul. We've done it all, and fast. Mix and match based on what matters most right now.",
  },
  {
    q: "What is the deliverable during a project?",
    a: "Developer-ready Figma files, interactive prototypes, and clear experience documentation. We focus on designs that are easy to implement, ensuring a smooth handoff to your development team.",
  },
  {
    q: "How do you communicate during a project?",
    a: "Linear, Slack, Figma, and Notion. A dedicated Slack channel for real-time updates, Linear to keep things organized, Figma for design collaboration you can comment on as it evolves, and Notion for key decisions, so you always have a reference point.",
  },
  {
    q: "What is involved during a project?",
    a: "Daily collaboration. You see progress as it happens. No big reveal at the end.",
  },
  {
    q: "How long does it take?",
    a: "5 days. Monday to Friday. We work in focused sprints to deliver high-quality results quickly.",
  },
];

function FaqItem({ qa, defaultOpen }: { qa: QA; defaultOpen?: boolean }) {
  const detailsRef = useRef<HTMLDetailsElement>(null);
  const ansRef = useRef<HTMLDivElement>(null);

  const sync = (open: boolean) => {
    const ans = ansRef.current;
    if (!ans) return;
    ans.style.maxHeight = open ? `${ans.scrollHeight}px` : "0px";
  };

  useEffect(() => {
    sync(!!defaultOpen);
    const onResize = () => sync(!!detailsRef.current?.open);
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <details
      ref={detailsRef}
      className="qa"
      open={defaultOpen}
      onToggle={() => sync(!!detailsRef.current?.open)}
    >
      <summary>
        {qa.q}
        <span className="pm" />
      </summary>
      <div className="ans" ref={ansRef}>
        <p>{qa.a}</p>
      </div>
    </details>
  );
}

/* ---------- inline glyphs ---------- */
function YcLogo() {
  return (
    <svg width="18" height="18" viewBox="0 0 256 256" aria-hidden="true">
      <rect fill="#FB651E" width="256" height="256" rx="6" />
      <path
        fill="#fff"
        d="M119.37 144.75 75.43 62.43h20.08l25.85 52.09c.4.93.86 1.89 1.39 2.88.53.99 1 2.02 1.39 3.08.27.4.47.76.6 1.1.13.33.26.63.4.89.66 1.33 1.26 2.62 1.79 3.88.53 1.26.99 2.42 1.39 3.48 1.06-2.25 2.22-4.67 3.48-7.26 1.26-2.58 2.55-5.27 3.88-8.05l26.24-52.09h18.69l-44.34 83.31v53.09h-16.9z"
      />
    </svg>
  );
}

export default function Home() {
  const [showTop, setShowTop] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const heroRef = useRef<HTMLElement>(null);

  // enable hide-then-reveal once JS is active (SSR shows full content)
  useEffect(() => {
    document.documentElement.classList.add("anim");
    return () => document.documentElement.classList.remove("anim");
  }, []);

  // sticky condensed header after hero scrolls out
  useEffect(() => {
    const onScroll = () => {
      const h = heroRef.current?.offsetHeight ?? window.innerHeight;
      setShowTop(window.scrollY > h - 80);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    onScroll();
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      {/* ===== STICKY CONDENSED HEADER ===== */}
      <div className={`topbar ${showTop ? "show" : ""}`}>
        <a href="#top">
          <Wordmark />
        </a>
        <nav>
          <a href="#products" className="nl">
            Products
          </a>
          <Link href="/studio" className="nl">
            Studio
          </Link>
          <Link href="/work" className="nl">
            Work
          </Link>
          <Link
            href="/contact"
            className="pill dark"
            style={{ padding: "8px 16px", fontSize: 13 }}
          >
            Book a call <span className="arr">→</span>
          </Link>
        </nav>
      </div>

      {/* ===== MOBILE MENU ===== */}
      <div className={`mmenu ${menuOpen ? "open" : ""}`}>
        <div className="top">
          <Wordmark style={{ fontSize: 20 }} />
          <button className="close" aria-label="Close" onClick={closeMenu}>
            ✕
          </button>
        </div>
        <nav>
          <a href="#products" onClick={closeMenu}>
            Products<span className="o">.</span>
          </a>
          <Link href="/studio" onClick={closeMenu}>
            Studio<span className="o">.</span>
          </Link>
          <Link href="/work" onClick={closeMenu}>
            Work<span className="o">.</span>
          </Link>
          <Link href="/process" onClick={closeMenu}>
            Process<span className="o">.</span>
          </Link>
          <Link href="/contact" onClick={closeMenu}>
            Book a call<span className="o">.</span>
          </Link>
        </nav>
        <div className="mfoot">
          <span>hello@boat3000.studio</span>
          <span>● open · 5 jan &apos;26</span>
        </div>
      </div>

      <a id="top" />

      {/* ===== HERO ===== */}
      <header className="hero wrap" ref={heroRef}>
        <div className="masthead">
          <a href="#top" className="mk">
            <Wordmark />
          </a>
          <nav className="nav-index">
            <a href="#products">Products</a>
            <Link href="/studio">Studio</Link>
            <Link href="/work">Work</Link>
            <Link href="/process">Process</Link>
          </nav>
          <div className="office">
            <b>Studio · open</b>
            <br />
            <span className="dotline">
              <span className="dot" /> bookings from 5 jan &apos;26
            </span>
            <br />
            <a href="mailto:hello@boat3000.studio" className="ulink">
              hello@boat3000.studio
            </a>
          </div>
          <button
            className="hamb"
            aria-label="Menu"
            onClick={() => setMenuOpen(true)}
          >
            <span />
          </button>
        </div>

        <div className="hero-body">
          <div className="hero-boat-scene">
            <span className="hero-water" aria-hidden="true" />
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              className="hero-boat"
              src="/boat.png"
              alt="BOAT3000 red paper boat"
            />
          </div>

          <h1>
            The
            <span className="lf-ins">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                className="lf-insert"
                src="/local-first.png"
                alt="local-first"
              />
            </span>{" "}
            Studio.
            <br />
            good taste meets <span className="ghost">functional.</span>
          </h1>

          <div className="hero-foot">
            <p className="hero-copy">
              <span>We design, brand, and build beautiful software for you.</span>
              <span>
                We love <span className="blue">**</span>products that work
                offline, even at sea.
              </span>
              <span>We ship products that work for you.</span>
            </p>
            <Link href="/contact" className="pill dark">
              Book a call <span className="arr">→</span>
            </Link>
          </div>
        </div>
      </header>

      {/* ===== TICKER ===== */}
      <div className="ticker">
        <TickerRun />
      </div>

      {/* ===== PRODUCTS ===== */}
      <section className="products sec-pad" id="products">
        <div className="wrap">
          <Reveal
            className="sec-head"
            style={{ justifyContent: "space-between", width: "100%" }}
          >
            <div style={{ display: "flex", alignItems: "baseline", gap: 14 }}>
              <span className="idx">01 /</span>
              <h2>Studio releases</h2>
            </div>
            <Link href="/work" className="pill" style={{ alignSelf: "center" }}>
              All work <span className="arr">→</span>
            </Link>
          </Reveal>
          <div className="prod-grid">
            <Reveal>
              <p className="prod-lead">
                We build products we&apos;d love to pay for.{" "}
                <span className="red">We also build for clients.</span>
              </p>
              <div className="prod-list">
                <Link href="/work/boxtype" className="prod-item">
                  <span className="pname">BOXTYPE</span>
                  <span className="pdesc">
                    a random-access editor for the box model
                  </span>
                  <span className="pmeta">shipped</span>
                </Link>
                <Link href="/work/oculos" className="prod-item">
                  <span className="pname">OCULOS</span>
                  <span className="pdesc">
                    a retail operating system for shops
                  </span>
                  <span className="pmeta live">live</span>
                </Link>
                <Link href="/work/bracelet" className="prod-item">
                  <span className="pname">BRACELET</span>
                  <span className="pdesc">
                    anki × obsidian, networked study
                  </span>
                  <span className="pmeta">in dev</span>
                </Link>
                <Link href="/work/peakerspace" className="prod-item">
                  <span className="pname">PEAKERSPACE</span>
                  <span className="pdesc">
                    communal listening, online &amp; off
                  </span>
                  <span className="pmeta">coming soon</span>
                </Link>
              </div>
            </Reveal>

            {/* fanned specimen stage */}
            <Reveal className="stage">
              <div className="spec v1">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/bracelet-mobile.png" alt="BRACELET mobile" />
              </div>
              <div className="spec v2">
                <video
                  src="/boxtype-demo.mp4"
                  autoPlay
                  loop
                  muted
                  playsInline
                />
              </div>
              <div className="spec v3">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/bracelet-mobile-2.png" alt="BRACELET study view" />
              </div>
              <span className="tag">
                BOXTYPE · BRACELET · studio releases
              </span>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ===== STUDIO + PROCESS ===== */}
      <section className="studio sec-pad" id="studio">
        <div className="gridlines" />
        <div className="wrap">
          <Reveal className="sec-head">
            <span className="idx">02 /</span>
            <h2>The studio</h2>
          </Reveal>
          <div className="studio-grid">
            <Reveal className="about">
              <p className="lede">
                Hello, this is{" "}
                <span className="wordmark" style={{ fontSize: "inherit", display: "inline" }}>
                  BOAT3<span className="o">0</span>00
                </span>
                , a dev &amp; design studio for B2B, AI &amp; Web3 founders.
              </p>
              <p>
                We build products we&apos;d love to pay for, and we build for
                clients too. We&apos;ve worked with teams featured by
                Y&nbsp;Combinator, TechCrunch, Forbes and the BBC.
              </p>
              <p>
                We work in weekly sprints. It&apos;s deep, collaborative work,
                the kind that ships beautiful experiences really quickly.{" "}
                <span className="blue mono">**</span> local-first, and online
                products too.{" "}
                <span className="mono" style={{ color: "var(--ink-soft)" }}>
                  * your offline is where important work can happen.
                </span>
              </p>
              <div className="featured">
                <div className="lab">Clients featured by</div>
                <div className="logos">
                  <span className="ic">
                    <YcLogo />
                    Combinator
                  </span>
                  <span className="ic">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src="/techcrunch.jpg"
                      alt=""
                      width={16}
                      height={16}
                      style={{ borderRadius: 3 }}
                    />
                    TechCrunch
                  </span>
                  <span>Forbes</span>
                  <span>BBC</span>
                </div>
              </div>
            </Reveal>

            <Reveal className="proc">
              <div className="step">
                <div className="n">Step 1 · the call</div>
                <p>
                  You book a free 30-minute call so we understand your business
                  and the specific problems you want solved.{" "}
                  <a href="#book" className="ulink">
                    Book it here
                  </a>
                  , or just text us.
                </p>
              </div>
              <div className="step">
                <div className="n">Step 2 · the agreement</div>
                <p>
                  We agree on timeline and scope, and create a project-file in
                  your name that you have read-access to.
                </p>
              </div>
              <div className="step">
                <div className="n">Step 3 · the work</div>
                <p>
                  We carry you along daily as we work through the backlog. No
                  big reveal at the end. You see progress as it happens.
                  We&apos;re your partner at every step.
                </p>
              </div>
              <div className="price">
                <b>$5k per sprint</b> · most projects need 1–2 sprints
                <br />
                deliverables: developer-ready Figma, prototypes &amp; experience
                docs
                <br />
                tools: Linear · Slack · Figma · Notion
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ===== SELECTED WORK ===== */}
      <section className="work sec-pad" id="work">
        <div className="wrap">
          <Reveal
            className="sec-head"
            style={{ justifyContent: "space-between", width: "100%" }}
          >
            <div style={{ display: "flex", alignItems: "baseline", gap: 14 }}>
              <span className="idx">03 /</span>
              <h2>Some of our designs</h2>
            </div>
            <Link href="/work" className="pill" style={{ alignSelf: "center" }}>
              View all work <span className="arr">→</span>
            </Link>
          </Reveal>
          <Reveal className="gal">
            <div className="shot big">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/mockup-1.png" alt="commissioned product work" />
              <span className="cap">Fund composition · Web3</span>
            </div>
            <div className="shot tall">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/bracelet-mobile.png" alt="mobile study app" />
              <span className="cap">Study app · iOS</span>
            </div>
            <div className="shot half">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/bracelet-desktop.png" alt="desktop landing" />
              <span className="cap">Bracelet · landing</span>
            </div>
            <div className="shot half">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/mockup-2.png" alt="audio model dashboard" />
              <span className="cap">Whisper models · macOS</span>
            </div>
            <div className="shot tall">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/bracelet-mobile-2.png" alt="study tracks" />
              <span className="cap">Study tracks · iOS</span>
            </div>
            <div className="shot big">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/mockup-3.png" alt="dark product ui" />
              <span className="cap">Asset pool · dashboard</span>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ===== FAQ ===== */}
      <section className="faq sec-pad" id="faq">
        <div className="wrap">
          <div className="faq-grid">
            <Reveal className="side">
              <div className="sec-head" style={{ marginBottom: 0 }}>
                <span className="idx">04 /</span>
                <h2>FAQ</h2>
              </div>
              <p>
                Everything else lives on the call. <span className="red">**</span>{" "}
                if it isn&apos;t here, ask us directly.
              </p>
            </Reveal>
            <Reveal>
              {FAQS.map((qa, i) => (
                <FaqItem key={i} qa={qa} defaultOpen={i === 0} />
              ))}
            </Reveal>
          </div>
        </div>
      </section>

      {/* ===== FOOTER ===== */}
      <SiteFooter />
    </>
  );
}
