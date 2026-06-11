"use client";

import { useState } from "react";

type Status = "idle" | "submitting" | "sent" | "error";

/* Netlify Forms + the Next.js runtime don't mix when you POST straight to a
   page route — the Next function swallows the request before Netlify's form
   processor sees it. So we submit via fetch to "/" (a static path Netlify
   intercepts) with the urlencoded body, then show our own confirmation. */
export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;

    // Honeypot: if the hidden field is filled, silently "succeed".
    const honeypot = (form.elements.namedItem("bot-field") as HTMLInputElement)
      ?.value;
    if (honeypot) {
      setStatus("sent");
      return;
    }

    setStatus("submitting");
    const data = new FormData(form);
    const body = new URLSearchParams(
      data as unknown as Record<string, string>,
    ).toString();

    try {
      const res = await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body,
      });
      if (!res.ok) throw new Error(`Bad status ${res.status}`);
      form.reset();
      setStatus("sent");
    } catch {
      setStatus("error");
    }
  }

  if (status === "sent") {
    return (
      <div className="ct-thanks" role="status" aria-live="polite">
        <span className="ct-thanks-mark mono">✶</span>
        <h2>Thank you — we&apos;ve got it.</h2>
        <p>
          A real human at the studio will read this and reply within one
          business day. In the meantime, if anything urgent comes up you can
          always reach us at{" "}
          <a href="mailto:hello@boat3000.studio" className="ulink">
            hello@boat3000.studio
          </a>
          .
        </p>
        <button
          type="button"
          className="ulink mono ct-thanks-again"
          onClick={() => setStatus("idle")}
        >
          Send another →
        </button>
      </div>
    );
  }

  return (
    <form
      className="ct-form"
      name="contact"
      method="POST"
      data-netlify="true"
      data-netlify-honeypot="bot-field"
      onSubmit={handleSubmit}
    >
      <input type="hidden" name="form-name" value="contact" />
      <p className="ct-hp">
        <label>
          Don&apos;t fill this out: <input name="bot-field" />
        </label>
      </p>

      <div className="ct-row">
        <label className="ct-field">
          <span className="mono">Your name</span>
          <input type="text" name="name" required autoComplete="name" />
        </label>
        <label className="ct-field">
          <span className="mono">Email</span>
          <input type="email" name="email" required autoComplete="email" />
        </label>
      </div>

      <div className="ct-row">
        <label className="ct-field">
          <span className="mono">Company / product</span>
          <input type="text" name="company" autoComplete="organization" />
        </label>
        <label className="ct-field">
          <span className="mono">What do you need?</span>
          <select name="project_type" defaultValue="">
            <option value="" disabled>
              Choose one…
            </option>
            <option>Product design (UX/UI)</option>
            <option>Branding &amp; identity</option>
            <option>Website (Framer / Webflow / custom)</option>
            <option>Full product build</option>
            <option>Something else</option>
          </select>
        </label>
      </div>

      <label className="ct-field">
        <span className="mono">Rough budget</span>
        <select name="budget" defaultValue="">
          <option value="" disabled>
            Choose one…
          </option>
          <option>~$5k (one sprint)</option>
          <option>$10k–$20k (a few sprints)</option>
          <option>$20k+</option>
          <option>Not sure yet</option>
        </select>
      </label>

      <label className="ct-field">
        <span className="mono">Tell us about it</span>
        <textarea
          name="message"
          rows={5}
          required
          placeholder="What are you building, and what does success look like?"
        />
      </label>

      {status === "error" && (
        <p className="ct-error mono" role="alert">
          Something went wrong sending that. Please email us directly at{" "}
          <a href="mailto:hello@boat3000.studio" className="ulink">
            hello@boat3000.studio
          </a>
          .
        </p>
      )}

      <button
        type="submit"
        className="pill dark ct-submit"
        disabled={status === "submitting"}
      >
        {status === "submitting" ? "Sending…" : "Send it"}{" "}
        <span className="arr">→</span>
      </button>
    </form>
  );
}
