import { ImageResponse } from "next/og";

export const alt = "BOAT3000 — craft-focused product studio";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
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
            fontSize: 26,
            letterSpacing: 4,
            color: "#6b6a63",
          }}
        >
          CRAFT-FOCUSED PRODUCT STUDIO
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ display: "flex", fontSize: 168, fontWeight: 800, letterSpacing: -6 }}>
            <span>BOAT3</span>
            <span style={{ color: "#E0342A" }}>0</span>
            <span>00</span>
          </div>
          <div style={{ fontSize: 34, color: "#3c3b35", marginTop: 8 }}>
            Local-first. Online too. We ship — weekly.
          </div>
        </div>
        <div style={{ fontSize: 24, color: "#9d9c94", letterSpacing: 2 }}>
          boat3000.studio
        </div>
      </div>
    ),
    { ...size },
  );
}
