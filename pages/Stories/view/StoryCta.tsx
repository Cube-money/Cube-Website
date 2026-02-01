"use client";

import { AuroraBackground } from "@/components/ui/aurora-background";

export default function StoryCta() {
  return (
    <>
      <style jsx>{`
        .story-cta-stack {
          align-items: center;
          text-align: center;
        }
      `}</style>
      <AuroraBackground
        className="relative w-full overflow-hidden border-t border-gray-500"
        style={{
          height: "clamp(780px, 95vh, 1040px)",
          borderTop: "1px solid rgb(128, 128, 128)",
        }}
      >
        {/* Centered stack: heading → body → CTA — dead center */}
        <div
          className="story-cta-stack"
          style={{
            position: "relative",
            zIndex: 3,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            textAlign: "center",
            width: "calc(100% - 32px)",
            maxWidth: "min(640px, 90%)",
            margin: "0 auto",
            padding: "0 clamp(16px, 3vw, 0)",
          }}
        >
          {/* Header (Serif) */}
          <div
            style={{
              fontFamily:
                'var(--font-instrument-serif), "Instrument Serif", "Instrument Serif Placeholder", serif',
              fontStyle: "normal",
              fontWeight: 400,
              color: "rgb(255, 255, 255)",
              fontSize: "clamp(28px, 4.2vw, 48px)",
              letterSpacing: "-0.02em",
              lineHeight: "110%",
              WebkitFontSmoothing: "antialiased",
              marginBottom: "clamp(14px, 2vh, 20px)",
              whiteSpace: "normal",
              boxSizing: "border-box",
              display: "block",
              wordBreak: "break-word",
              overflowWrap: "break-word",
              width: "100%",
            }}
          >
            Start your own story.
          </div>

          {/* Explanatory Body (Inter) */}
          <div
            style={{
              display: "block",
              fontFamily: "Inter, sans-serif",
              fontSize: "clamp(16px, 2.2vw, 19px)",
              fontWeight: 400,
              letterSpacing: "-0.01em",
              lineHeight: "1.65",
              color: "rgb(255, 255, 255)",
              WebkitFontSmoothing: "antialiased",
              maxWidth: "520px",
              marginBottom: "clamp(20px, 3vh, 28px)",
            }}
          >
            <p style={{ margin: "0 0 0.75em 0" }}>
              Every Cube begins the same way: a goal, a few people you trust, and a simple cycle that keeps everyone moving forward.
            </p>
            <p style={{ margin: 0 }}>
              No debt. No waiting alone.<br />
              Just structure, together.
            </p>
          </div>

          {/* Button (Best Conversion) */}
          <a
            href="/how-it-works"
            style={{
              alignSelf: "center",
              opacity: 0.95,
              textDecoration: "none",
              alignItems: "center",
              borderRadius: "clamp(28px, 3vw, 36px)",
              boxSizing: "border-box",
              display: "inline-flex",
              height: "clamp(40px, 5vh, 44px)",
              justifyContent: "center",
              overflow: "hidden",
              padding: "0px clamp(24px, 3vw, 36px)",
              position: "relative",
              textAlign: "center",
              whiteSpace: "nowrap",
              backgroundColor: "rgb(255, 255, 255)",
              border: "1px solid rgb(255, 255, 255)",
              color: "rgb(17, 14, 8)",
              cursor: "pointer",
              WebkitFontSmoothing: "antialiased",
              outline: "rgb(17, 14, 8) none 0px",
              marginTop: "clamp(8px, 1vh, 12px)",
            }}
          >
            <span
              style={{
                fontFamily: "Phonic, Helvetica, system-ui, -apple-system, 'system-ui', Arial, sans-serif",
                fontSize: "clamp(16px, 2vw, 18px)",
                fontWeight: 500,
                letterSpacing: "-0.25px",
                lineHeight: "clamp(20px, 3vw, 24px)",
                margin: 0,
                fontStyle: "normal",
                WebkitFontSmoothing: "antialiased",
              }}
            >
              Start my Cube
            </span>
          </a>
        </div>
      </AuroraBackground>
    </>
  );
}
