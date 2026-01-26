"use client";

import {
  GlowingStarsBackgroundCard,
  GlowingStarsDescription,
  GlowingStarsTitle,
  Icon,
} from "@/components/ui/glowing-stars";

export default function FeaturesSection() {
  return (
    <section
      style={{
        position: "relative",
        width: "100%",
        height: "120vh",
        overflow: "hidden",
      }}
    >
      {/* Background Image */}
      <img
        src="/Home/frame2/Group 11.png"
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
      
      {/* Dark overlay for readability */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundColor: "rgba(0, 0, 0, 0.3)",
          zIndex: 1,
        }}
      />

      {/* Header Text */}
      <div
        style={{
          position: "absolute",
          top: "15%",
          left: "50%",
          transform: "translateX(-50%)",
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
            fontSize: "clamp(28px, 4.5vw, 56px)",
            letterSpacing: "-0.02em",
            lineHeight: "100%",
            textAlign: "center",
            whiteSpace: "nowrap",
            boxSizing: "border-box",
            WebkitFontSmoothing: "antialiased",
            display: "inline-block",
            wordBreak: "break-word",
            overflowWrap: "break-word",
            marginBottom: "16px",
          }}
        >
          How does zero debt, zero interest sounds?
        </div>
        
        {/* Subtext */}
        <span
          style={{
            fontFamily: "Inter, sans-serif",
            fontSize: "18px",
            fontWeight: 400,
            letterSpacing: "-0.25px",
            lineHeight: "26px",
            margin: "0 auto",
            fontStyle: "normal",
            WebkitFontSmoothing: "antialiased",
            color: "rgb(255, 255, 255)",
            maxWidth: "600px",
            display: "block",
            textAlign: "center",
            width: "100%",
          }}
        >
          When people coordinate, agree on timing, and move together, a system emerges one that's fair, predictable, and owned by the group itself.
        </span>
      </div>

      {/* Cards Container - Lower Position */}
      <div
        style={{
          position: "absolute",
          bottom: "26%",
          left: "50%",
          transform: "translateX(-50%)",
          zIndex: 2,
          display: "flex",
          flexDirection: "row",
          gap: "350px",
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
        }}
      >
        <GlowingStarsBackgroundCard imageSrc="/AbstractSymbols/Create2.png">
          <GlowingStarsTitle>Create a Cube</GlowingStarsTitle>
          <div className="flex justify-between items-end">
            <GlowingStarsDescription>
              Create your own savings circle and invite trusted members to join.
            </GlowingStarsDescription>
            <div className="h-8 w-8 rounded-full bg-[hsla(0,0%,100%,.1)] flex items-center justify-center">
              <Icon />
            </div>
          </div>
        </GlowingStarsBackgroundCard>

        <GlowingStarsBackgroundCard imageSrc="/AbstractSymbols/Join2.png">
          <GlowingStarsTitle>Join a Cube</GlowingStarsTitle>
          <div className="flex justify-between items-end">
            <GlowingStarsDescription>
              Join an existing Cube and build wealth through community savings.
            </GlowingStarsDescription>
            <div className="h-8 w-8 rounded-full bg-[hsla(0,0%,100%,.1)] flex items-center justify-center">
              <Icon />
            </div>
          </div>
        </GlowingStarsBackgroundCard>
      </div>
    </section>
  );
}
