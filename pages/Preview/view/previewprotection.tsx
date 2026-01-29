"use client";

import {
  GlowingStarsBackgroundCard,
  GlowingStarsDescription,
  GlowingStarsTitle,
} from "@/components/ui/glowing-stars";

const protectionFeatures = [
  {
    title: "Trust score",
    description:
      "A living signal based on contribution history and consistency, helping groups stay aligned over time.",
  },
  {
    title: "Cube health",
    description:
      "A real-time view of a Cube's status, showing whether contributions and timing remain on track.",
  },
  {
    title: "Decentralized distribution",
    description:
      "Funds move according to pre-agreed rules, without a central party deciding who gets paid.",
  },
  {
    title: "Transaction verification",
    description:
      "Contributions and payouts are recorded and visible to contributors and recipients.",
  },
];

export default function PreviewProtection() {
  return (
    <section
      style={{
        position: "relative",
        width: "100%",
        minHeight: "clamp(420px, 80vh, 900px)",
        overflow: "hidden",
        borderTop: "1px solid rgb(128, 128, 128)",
        backgroundColor: "white",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        paddingTop: "clamp(40px, 6vh, 80px)",
        paddingBottom: "clamp(40px, 6vh, 80px)",
      }}
    >
      {/* Caption text (moved from Demoframe.tsx, black text for white background) */}
      <div
        style={{
          width: "min(560px, calc(100vw - 32px))",
          textAlign: "center",
          padding: "0 clamp(16px, 3vw, 0)",
        }}
      >
        <div
          style={{
            fontFamily:
              'var(--font-instrument-serif), "Instrument Serif", "Instrument Serif Placeholder", serif',
            fontStyle: "normal",
            fontWeight: 400,
            color: "rgb(0, 0, 0)",
            fontSize: "clamp(18px, 3.2vw, 34px)",
            letterSpacing: "-0.02em",
            lineHeight: "115%",
            whiteSpace: "pre-line",
            WebkitFontSmoothing: "antialiased",
          }}
        >
          {"How Cube protects every member"}
        </div>

        <span
          style={{
            display: "block",
            marginTop: "clamp(10px, 1.8vh, 14px)",
            fontFamily: "Inter, sans-serif",
            fontSize: "clamp(12px, 2.1vw, 16px)",
            fontWeight: 400,
            letterSpacing: "-0.25px",
            lineHeight: "clamp(18px, 2.6vw, 24px)",
            color: "rgb(0, 0, 0)",
            WebkitFontSmoothing: "antialiased",
          }}
        >
          Cube is designed with safeguards that keep groups fair, predictable, and transparent at every step.
        </span>
      </div>

      {/* 4 Glowing Star Cards - 1x4 grid */}
      <div
        className="grid grid-cols-2 lg:grid-cols-4 gap-4 mt-12 px-4 w-full max-w-6xl"
      >
        {protectionFeatures.map((feature, index) => (
          <GlowingStarsBackgroundCard key={index} className="max-w-none">
            <GlowingStarsTitle className="text-base">{feature.title}</GlowingStarsTitle>
            <div className="mt-2">
              <GlowingStarsDescription className="text-xs max-w-none">
                {feature.description}
              </GlowingStarsDescription>
            </div>
          </GlowingStarsBackgroundCard>
        ))}
      </div>

      {/* Black button */}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          marginTop: "clamp(32px, 6vh, 60px)",
        }}
      >
        <a
          href="/how-it-works"
          style={{
            textDecoration: "none",
          }}
        >
          <button
            type="button"
            style={{
              opacity: 0.95,
              alignItems: "center",
              alignSelf: "center",
              borderRadius: "36px",
              boxSizing: "border-box",
              display: "inline-flex",
              height: "44px",
              justifyContent: "center",
              overflow: "hidden",
              padding: "0px 32px",
              position: "relative",
              textAlign: "center",
              whiteSpace: "nowrap",
              backgroundColor: "rgb(0, 0, 0)",
              border: "1px solid rgba(255,255,255,0.85)",
              color: "rgb(255, 255, 255)",
              cursor: "pointer",
              WebkitFontSmoothing: "antialiased",
              userSelect: "none",
            }}
          >
            <span
              style={{
                fontFamily:
                  "Phonic, Helvetica, system-ui, -apple-system, 'system-ui', Arial, sans-serif",
                fontSize: "16px",
                fontWeight: 400,
                letterSpacing: "-0.25px",
                lineHeight: "24px",
              }}
            >
              See how it works
            </span>
          </button>
        </a>
      </div>
    </section>
  );
}
