import { ImageResponse } from "next/og";

export const alt = "Colibird — Infraestructura Financiera B2B para LATAM";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "center",
          background: "linear-gradient(135deg, #08080F 0%, #141428 55%, #1a0a2e 100%)",
          padding: "72px 80px",
        }}
      >
        <div
          style={{
            fontSize: 72,
            fontWeight: 800,
            letterSpacing: "-0.03em",
            background: "linear-gradient(135deg, #a855f7 0%, #ec4899 100%)",
            backgroundClip: "text",
            color: "transparent",
            marginBottom: 24,
          }}
        >
          Colibird
        </div>
        <div
          style={{
            fontSize: 36,
            fontWeight: 600,
            color: "#f9fafb",
            lineHeight: 1.25,
            maxWidth: 900,
            marginBottom: 20,
          }}
        >
          Infraestructura Financiera B2B para LATAM
        </div>
        <div
          style={{
            fontSize: 24,
            color: "#9ca3af",
            lineHeight: 1.4,
            maxWidth: 820,
          }}
        >
          SCF · Confirming · eCheqs · Pagos B2B · LMCP · API-first
        </div>
      </div>
    ),
    { ...size },
  );
}
