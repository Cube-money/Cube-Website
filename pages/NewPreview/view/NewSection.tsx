"use client";

import { useEffect, useState } from "react";
import {
  GlowingStarsBackgroundCard,
  GlowingStarsDescription,
  GlowingStarsTitle,
} from "@/components/ui/glowing-stars";

const MOBILE_BREAKPOINT = 768;

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

export default function NewSection() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const check = () =>
      setIsMobile(typeof window !== "undefined" && window.innerWidth < MOBILE_BREAKPOINT);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  return (
    <section
      style={{
        position: "relative",
        width: "100%",
        minHeight: isMobile ? "auto" : "clamp(420px, 80vh, 900px)",
        flexShrink: 0,
        overflow: "hidden",
        marginTop: isMobile ? "clamp(32px, 6vh, 48px)" : "clamp(80px, 15vh, 180px)",
        backgroundColor: "white",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        paddingTop: isMobile ? "clamp(32px, 6vh, 48px)" : "clamp(80px, 12vh, 140px)",
        paddingBottom: isMobile ? "clamp(24px, 4vh, 40px)" : "clamp(40px, 6vh, 80px)",
        paddingLeft: isMobile ? "20px" : undefined,
        paddingRight: isMobile ? "20px" : undefined,
        zIndex: 2,
        isolation: "isolate",
      }}
    >
      <div
        style={{
          width: "min(560px, calc(100vw - 40px))",
          maxWidth: "100%",
          textAlign: "center",
          padding: isMobile ? "0 8px" : "0 clamp(16px, 3vw, 0)",
        }}
      >
        <div
          style={{
            fontFamily:
              'var(--font-instrument-serif), "Instrument Serif", "Instrument Serif Placeholder", serif',
            fontStyle: "normal",
            fontWeight: 400,
            color: "rgb(0, 0, 0)",
            fontSize: isMobile ? "clamp(22px, 5.5vw, 28px)" : "clamp(18px, 3.2vw, 34px)",
            letterSpacing: "-0.02em",
            lineHeight: "115%",
            whiteSpace: "pre-line",
            WebkitFontSmoothing: "antialiased",
          }}
        >
          How Cube protects every member
        </div>

        <span
          style={{
            display: "block",
            marginTop: isMobile ? "10px" : "clamp(10px, 1.8vh, 14px)",
            fontFamily: "Inter, sans-serif",
            fontSize: isMobile ? "14px" : "clamp(12px, 2.1vw, 16px)",
            fontWeight: 400,
            letterSpacing: "-0.25px",
            lineHeight: isMobile ? "22px" : "clamp(18px, 2.6vw, 24px)",
            color: "rgb(0, 0, 0)",
            WebkitFontSmoothing: "antialiased",
          }}
        >
          Cube is designed with safeguards that keep groups fair, predictable,
          and transparent at every step.
        </span>
      </div>

      <div
        className={isMobile ? "grid grid-cols-1 gap-3 mt-8 w-full max-w-md" : "grid grid-cols-2 lg:grid-cols-4 gap-4 mt-12 px-4 w-full max-w-6xl"}
      >
        {protectionFeatures.map((feature, index) => (
          <GlowingStarsBackgroundCard
            key={index}
            className={isMobile ? "max-w-none p-3" : "max-w-none"}
          >
            <GlowingStarsTitle className={isMobile ? "text-sm" : "text-base"}>
              {feature.title}
            </GlowingStarsTitle>
            <div className={isMobile ? "mt-1.5" : "mt-2"}>
              <GlowingStarsDescription
                className={isMobile ? "text-xs max-w-none leading-snug" : "text-xs max-w-none"}
              >
                {feature.description}
              </GlowingStarsDescription>
            </div>
          </GlowingStarsBackgroundCard>
        ))}
      </div>

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          marginTop: isMobile ? "clamp(20px, 4vh, 32px)" : "clamp(32px, 6vh, 60px)",
          paddingLeft: isMobile ? "16px" : 0,
          paddingRight: isMobile ? "16px" : 0,
        }}
      >
        <a href="/how-it-works" style={{ textDecoration: "none" }}>
          <button
            type="button"
            style={{
              opacity: 0.95,
              alignItems: "center",
              alignSelf: "center",
              borderRadius: "36px",
              boxSizing: "border-box",
              display: "inline-flex",
              height: isMobile ? "40px" : "44px",
              justifyContent: "center",
              overflow: "hidden",
              padding: isMobile ? "0px 24px" : "0px 32px",
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
                fontSize: isMobile ? "14px" : "16px",
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
