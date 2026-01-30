"use client";

import {
  GlowingStarsBackgroundCard,
  GlowingStarsDescription,
  GlowingStarsTitle,
  Icon,
} from "@/components/ui/glowing-stars";
import BentoGridDemo from "@/components/bento-grid-demo";

export default function HowItWorksSection() {
  return (
    <section
      className="h-140-dvh min-h-140-dvh"
      style={{
        position: "relative",
        width: "100%",
        paddingBottom: "80px",
        overflow: "hidden",
        borderTop: "1px solid rgb(128, 128, 128)",
      }}
    >
      {/* Full-screen Image Background */}
      <img
        src="/Home/frame2/Group 30.png"
        alt="Background"
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover",
          zIndex: 0,
        }}
      />
      
      {/* Dark overlay - 20% opacity */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundColor: "rgba(0, 0, 0, 0.2)",
          zIndex: 1,
        }}
      />
      
      {/* Content - vertically centered */}
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: "100%",
          zIndex: 2,
          textAlign: "center",
        }}
      >
        <div
          style={{
            fontFamily: 'var(--font-instrument-serif), "Instrument Serif", "Instrument Serif Placeholder", serif',
            fontStyle: "normal",
            fontWeight: 400,
            color: "rgb(255, 255, 255)",
            fontSize: "clamp(32px, 4vw, 56px)",
            letterSpacing: "-0.02em",
            lineHeight: "100%",
            textAlign: "center",
            whiteSpace: "normal",
            boxSizing: "border-box",
            WebkitFontSmoothing: "antialiased",
            display: "inline-block",
            wordBreak: "break-word",
            overflowWrap: "break-word",
            marginBottom: "clamp(12px, 2vh, 16px)",
          }}
        >
          Explore the library
        </div>
        
        {/* Subtext */}
        <span
          style={{
            fontFamily: "Inter, sans-serif",
            fontSize: "clamp(18px, 2.2vw, 18px)",
            fontWeight: 400,
            letterSpacing: "-0.25px",
            lineHeight: "clamp(20px, 3vw, 26px)",
            margin: "0 auto",
            fontStyle: "normal",
            WebkitFontSmoothing: "antialiased",
            color: "rgb(255, 255, 255)",
            maxWidth: "600px",
            display: "block",
            textAlign: "center",
            width: "100%",
            padding: "0 clamp(16px, 3vw, 0)",
          }}
        >
          Learn how coordination, trust, and shared timing come together to form a fair financial system.
        </span>
        
        {/* Sign up Button */}
        <a
          href="#waitlist"
          style={{
            marginTop: "24px",
            opacity: 0.85,
            textDecoration: "none",
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
            backgroundColor: "rgb(204, 255, 0)",
            border: "1px solid rgb(204, 255, 0)",
            color: "rgb(17, 14, 8)",
            cursor: "pointer",
            WebkitFontSmoothing: "antialiased",
            outline: "rgb(17, 14, 8) none 0px",
          }}
        >
          <span
            style={{
              fontFamily: "Phonic, Helvetica, system-ui, -apple-system, 'system-ui', Arial, sans-serif",
              fontSize: "clamp(16px, 2vw, 18px)",
              fontWeight: 400,
              letterSpacing: "-0.25px",
              lineHeight: "24px",
              margin: 0,
              fontStyle: "normal",
              WebkitFontSmoothing: "antialiased",
            }}
          >
            Sign up
          </span>
        </a>
        
        {/* BentoGrid Component */}
        <div style={{ marginTop: "60px", position: "relative" }}>
          <BentoGridDemo />
        </div>
      </div>
    </section>
  );
}
