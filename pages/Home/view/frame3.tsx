"use client";

import {
  GlowingStarsBackgroundCard,
  GlowingStarsDescription,
  GlowingStarsTitle,
  Icon,
} from "@/components/ui/glowing-stars";
import { Spotlight } from "@/components/ui/spotlight";

export default function FeaturesSection() {
  return (
    <>
      <style jsx>{`
        .cards-container-responsive {
          flex-direction: column;
          gap: 16px;
          align-items: center;
          width: calc(100% - 32px);
          max-width: min(360px, 100%);
          bottom: clamp(18%, 20vh, 26%);
        }
        @media (min-width: 900px) {
          .cards-container-responsive {
            flex-direction: row;
            gap: clamp(200px, 25vw, 400px);
            max-width: 1200px;
            width: calc(100% - 32px);
            bottom: clamp(12%, 16vh, 26%);
          }
        }
      `}</style>
    <section
      className="min-h-[480px] min-h-[62dvh] md:min-h-[120dvh]"
      style={{
        position: "relative",
        width: "100%",
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

      {/* Spotlight Effect */}
      <Spotlight
        className="-top-40 left-0 md:-top-20 md:left-60 z-[2]"
        fill="white"
      />

      {/* Header Text */}
      <div
        style={{
          position: "absolute",
          top: "clamp(10%, 12vh, 15%)",
          left: "50%",
          transform: "translateX(-50%)",
          zIndex: 2,
          textAlign: "center",
          width: "calc(100% - 32px)",
          maxWidth: "800px",
          padding: "0 clamp(16px, 3vw, 0)",
        }}
      >
        <div
          style={{
            fontFamily: 'var(--font-instrument-serif), "Instrument Serif", "Instrument Serif Placeholder", serif',
            fontStyle: "normal",
            fontWeight: 400,
            color: "rgb(255, 255, 255)",
            fontSize: "clamp(26px, 5vw, 56px)",
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
          How does zero debt, zero interest sounds?
        </div>
        
        {/* Subtext */}
        <span
          style={{
            fontFamily: "Inter, sans-serif",
            fontSize: "clamp(14px, 3vw, 18px)",
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
          }}
        >
          Save without debt or interest, and move way faster than traditional saving by pooling together instead of waiting months for slow, solo progress.
        </span>
      </div>

      {/* Cards Container - stacked on mobile, side-by-side on desktop */}
      <div
        className="cards-container-responsive"
        style={{
          position: "absolute",
          left: "50%",
          transform: "translateX(-50%)",
          zIndex: 2,
          padding: "0 clamp(16px, 3vw, 0)",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <GlowingStarsBackgroundCard showStars={false} imageSrc="/AbstractSymbols/Create2.png">
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

        <GlowingStarsBackgroundCard showStars={false} imageSrc="/AbstractSymbols/Join2.png">
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
    </>
  );
}
