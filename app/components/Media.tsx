import type { MediaItem } from "@/content/work";

/* Main profile, level 5.1, 10-bit — matches our AV1 encodes; lets
   browsers reject the source from the type alone instead of fetching it. */
export const AV1_MP4_TYPE = 'video/mp4; codecs="av01.0.13M.10"';

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
      <video className={className} autoPlay loop muted playsInline>
        {item.av1Src && <source src={item.av1Src} type={AV1_MP4_TYPE} />}
        <source src={item.src} type="video/mp4" />
      </video>
    );
  }
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img className={className} src={item.src} alt={item.caption} />
  );
}
