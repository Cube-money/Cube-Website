"use client";

import {
  GlowingStarsBackgroundCard,
  GlowingStarsDescription,
  GlowingStarsTitle,
} from "@/components/ui/glowing-stars";

export default function FeaturesSection() {
  return (
    <section
      style={{
        position: "relative",
        width: "100%",
        height: "100vh",
        overflow: "hidden",
        backgroundColor: "rgb(0, 0, 0)",
      }}
    >
      {/* Top Text Container */}
      <div
        style={{
          position: "absolute",
          top: "15%",
          left: "50%",
          transform: "translateX(-50%)",
          zIndex: 2,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          textAlign: "center",
        }}
      >
        {/* Main Heading */}
        <div
          style={{
            fontFamily: 'var(--font-instrument-serif), "Instrument Serif", "Instrument Serif Placeholder", serif',
            fontStyle: "normal",
            fontWeight: 400,
            color: "rgb(255, 255, 255)",
            fontSize: "clamp(32px, 5vw, 64px)",
            letterSpacing: "-0.02em",
            lineHeight: "100%",
            textAlign: "center",
            whiteSpace: "nowrap",
            boxSizing: "border-box",
            WebkitFontSmoothing: "antialiased",
            display: "inline-block",
            wordBreak: "break-word",
            overflowWrap: "break-word",
            marginBottom: "60px",
          }}
        >
          How does zero debt, zero interest sounds?
        </div>

        {/* 3 Cards Horizontally Stacked */}
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            gap: "24px",
            justifyContent: "center",
            alignItems: "center",
            width: "100%",
            maxWidth: "1200px",
            padding: "0 20px",
          }}
        >
          <GlowingStarsBackgroundCard>
            <GlowingStarsTitle>Zero Interest</GlowingStarsTitle>
            <div className="flex justify-between items-end">
              <GlowingStarsDescription>
                Save together without paying interest to banks or lenders.
              </GlowingStarsDescription>
            </div>
          </GlowingStarsBackgroundCard>

          <GlowingStarsBackgroundCard>
            <GlowingStarsTitle>Zero Debt</GlowingStarsTitle>
            <div className="flex justify-between items-end">
              <GlowingStarsDescription>
                Build wealth through community savings, not debt accumulation.
              </GlowingStarsDescription>
            </div>
          </GlowingStarsBackgroundCard>

          <GlowingStarsBackgroundCard>
            <GlowingStarsTitle>Full Control</GlowingStarsTitle>
            <div className="flex justify-between items-end">
              <GlowingStarsDescription>
                You decide the terms, amounts, and timing with your group.
              </GlowingStarsDescription>
            </div>
          </GlowingStarsBackgroundCard>
        </div>
      </div>
    </section>
  );
}
