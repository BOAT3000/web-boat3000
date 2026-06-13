"use client";

import { useEffect, useRef, useState } from "react";
import { AV1_MP4_TYPE } from "@/app/components/Media";

/* One demo scene, captured both landscape (desktop) and vertical (mobile).
   We pick the orientation that fits the viewport, lazy-load the sources only
   when the film nears the viewport, and play/pause as it scrolls in and out,
   so a page of scenes never downloads or decodes more than what's on screen. */

export type SceneSource = {
  /** H.264 source (the crisp original, or a full-res re-encode for >10MB clips) */
  src: string;
  /** optional AV1 encode, preferred when decodable */
  av1Src?: string;
  /** still frame (.jpg), shown before the video loads */
  poster: string;
};

export function SceneFilm({
  wide,
  tall,
  orientation = "auto",
  className,
}: {
  wide: SceneSource;
  tall: SceneSource;
  /** "auto" swaps to the vertical capture on phones; "wide" always lands­cape */
  orientation?: "auto" | "wide";
  className?: string;
}) {
  const wrapRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  // null until the client decides — avoids loading the wrong orientation first
  const [match, setMatch] = useState<boolean | null>(null);
  const [load, setLoad] = useState(false);

  // "wide" is fixed landscape; "auto" tracks the phone breakpoint.
  const portrait = orientation === "wide" ? false : match;

  // Subscribe to the breakpoint (auto mode only).
  useEffect(() => {
    if (orientation === "wide") return;
    const mq = window.matchMedia("(max-width: 768px)");
    const apply = () => setMatch(mq.matches);
    apply();
    mq.addEventListener("change", apply);
    return () => mq.removeEventListener("change", apply);
  }, [orientation]);

  // Load sources when near the viewport; play only while visible.
  useEffect(() => {
    const el = wrapRef.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setLoad(true);
          videoRef.current?.play().catch(() => {});
        } else {
          videoRef.current?.pause();
        }
      },
      { rootMargin: "200px 0px", threshold: 0.15 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  // When orientation flips after load, swap sources and resume playback.
  useEffect(() => {
    if (load && videoRef.current) {
      videoRef.current.load();
      videoRef.current.play().catch(() => {});
    }
  }, [portrait, load]);

  const s = portrait ? tall : wide;

  return (
    <div
      ref={wrapRef}
      className={`scene-film${portrait ? " is-tall" : ""} ${className ?? ""}`}
      data-ready={portrait === null ? "false" : "true"}
    >
      <video
        ref={videoRef}
        poster={s.poster}
        muted
        loop
        playsInline
        preload="none"
        key={portrait ? "tall" : "wide"}
      >
        {load && s.av1Src && <source src={s.av1Src} type={AV1_MP4_TYPE} />}
        {load && <source src={s.src} type="video/mp4" />}
      </video>
    </div>
  );
}
