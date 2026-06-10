import { ImageResponse } from "next/og";

import { getProject, PROJECT_SLUGS, STATUS_LABEL } from "@/content/work";

export const alt = "BOAT3000 case study";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export function generateStaticParams() {
  return PROJECT_SLUGS.map((slug) => ({ slug }));
}

export default async function OpengraphImage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const p = getProject(slug);
  const accent = p?.accent === "blue" ? "#5B92F2" : "#E0342A";

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: 80,
          background: "#F6F5F1",
          color: "#14130F",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            fontSize: 24,
            color: "#6b6a63",
            letterSpacing: 2,
          }}
        >
          <div style={{ display: "flex" }}>
            <span>BOAT3</span>
            <span style={{ color: "#E0342A" }}>0</span>
            <span>00</span>
            <span style={{ marginLeft: 16, color: "#9d9c94" }}>· WORK</span>
          </div>
          <div style={{ color: accent }}>
            {p ? STATUS_LABEL[p.status].toUpperCase() : ""}
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ fontSize: 140, fontWeight: 800, letterSpacing: -5 }}>
            {p?.name ?? "Work"}
          </div>
          <div
            style={{
              fontSize: 38,
              color: "#3c3b35",
              marginTop: 12,
              maxWidth: 1000,
            }}
          >
            {p?.tagline ?? ""}
          </div>
        </div>

        <div style={{ display: "flex", fontSize: 22, color: "#9d9c94", letterSpacing: 2 }}>
          {p?.liveUrl
            ? p.liveUrl.replace("https://", "")
            : "boat3000.studio/work"}
        </div>
      </div>
    ),
    { ...size },
  );
}
