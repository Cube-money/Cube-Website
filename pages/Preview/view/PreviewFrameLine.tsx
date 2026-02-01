"use client";

import { useEffect, useState } from "react";

const MOBILE_BREAKPOINT = 768;

/**
 * Frame: Vertical dashed line connecting the demo (Frame 2) to "How Cube protects" (Frame 3).
 */
export default function PreviewFrameLine() {
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
        height: isMobile ? "clamp(160px, 22vh, 220px)" : "clamp(280px, 38vh, 420px)",
        flexShrink: 0,
        overflow: "visible",
        backgroundColor: "black",
        display: "flex",
        justifyContent: "center",
        alignItems: "flex-start",
        paddingTop: isMobile ? "clamp(16px, 2.5vh, 28px)" : "clamp(24px, 4vh, 48px)",
        paddingBottom: 0,
      }}
    >
      {/* Wrapper wide enough to contain main + faded lines so they aren't clipped on phone */}
      <div
        style={{
          position: "relative",
          width: "49px",
          height: isMobile ? "clamp(200px, 55vh, 320px)" : "clamp(380px, calc(85vh - 144px), 720px)",
          flexShrink: 0,
        }}
      >
        {/* Faded lines left and right (centered in 49px: 24px + 1px + 24px) */}
        {[-24, -12, 12, 24].map((offset) => (
          <div
            key={offset}
            style={{
              position: "absolute",
              left: 24 + offset,
              top: 0,
              width: "1px",
              height: "100%",
              opacity: 0.35,
              background:
                "linear-gradient(to bottom, rgba(255,255,255,0.5), rgba(255,255,255,0.08), transparent)",
              maskImage:
                "repeating-linear-gradient(to bottom, transparent, transparent 4px, black 4px, black 12px)",
              WebkitMaskImage:
                "repeating-linear-gradient(to bottom, transparent, transparent 4px, black 4px, black 12px)",
            }}
          />
        ))}
        {/* Main center line */}
        <div
          style={{
            position: "absolute",
            left: 24,
            top: 0,
            width: "1px",
            height: "100%",
            background:
              "linear-gradient(to bottom, #ffffff, rgba(255,255,255,0.3), #000000)",
            maskImage:
              "repeating-linear-gradient(to bottom, transparent, transparent 4px, black 4px, black 12px)",
            WebkitMaskImage:
              "repeating-linear-gradient(to bottom, transparent, transparent 4px, black 4px, black 12px)",
          }}
        />
      </div>
    </section>
  );
}
