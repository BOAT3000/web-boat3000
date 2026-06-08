import type { MediaItem } from "@/content/work";

/* Renders an image or autoplaying muted video from a MediaItem. */
export function Media({
  item,
  className,
}: {
  item: MediaItem;
  className?: string;
}) {
  if (item.kind === "poster") {
    return (
      <div className={`poster ${className ?? ""}`} aria-label={item.caption}>
        <span className="poster-mark">{item.caption}</span>
        <span className="poster-soon mono">coming soon</span>
      </div>
    );
  }
  if (item.kind === "video") {
    return (
      <video
        className={className}
        src={item.src}
        autoPlay
        loop
        muted
        playsInline
      />
    );
  }
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img className={className} src={item.src} alt={item.caption} />
  );
}
