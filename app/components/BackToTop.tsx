"use client";

/* Scrolls to the top of the current page. Works everywhere — including the
   homepage, where a link to "/" would do nothing because we're already there. */
export function BackToTop() {
  return (
    <button
      type="button"
      className="ulink foot-top"
      onClick={() =>
        window.scrollTo({
          top: 0,
          behavior: window.matchMedia("(prefers-reduced-motion: reduce)")
            .matches
            ? "auto"
            : "smooth",
        })
      }
    >
      back to top ↑
    </button>
  );
}
