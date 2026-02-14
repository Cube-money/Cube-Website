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
        .frame3-section {
          min-height: 120svh;
        }
        @media (max-width: 480px) {
          .frame3-section {
            min-height: 850px;
          }
        }
        .frame3-heading {
          font-size: 56px;
        }
        @media (max-width: 480px) {
          .frame3-heading {
            font-size: 32px;
          }
        }
        .frame3-subtext {
          font-size: 18px;
          line-height: 26px;
        }
        @media (max-width: 480px) {
          .frame3-subtext {
            font-size: 15px;
            line-height: 22px;
          }
        }
        .frame3-cards {
          flex-direction: row;
          gap: clamp(200px, 25vw, 400px);
          bottom: clamp(24%, 28vh, 38%);
        }
        @media (max-width: 480px) {
          .frame3-cards {
            flex-direction: column;
            gap: 16px;
            bottom: 8%;
          }
        }
      `}</style>
    <section
      className="frame3-section"
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
          top: "12%",
          left: "50%",
          transform: "translateX(-50%)",
          zIndex: 2,
          textAlign: "center",
          width: "calc(100% - 48px)",
          maxWidth: "800px",
          padding: "0 24px",
        }}
      >
        <div
          className="frame3-heading"
          style={{
            fontFamily: 'var(--font-instrument-serif), "Instrument Serif", "Instrument Serif Placeholder", serif',
            fontStyle: "normal",
            fontWeight: 400,
            color: "rgb(255, 255, 255)",
            letterSpacing: "-0.02em",
            lineHeight: "100%",
            textAlign: "center",
            whiteSpace: "normal",
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
          className="frame3-subtext"
          style={{
            fontFamily: "Inter, sans-serif",
            fontWeight: 400,
            letterSpacing: "-0.25px",
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
          Progress doesn’t have to be slow. Save together, without debt or interest.
        </span>
      </div>

      {/* Cards Container - side-by-side on desktop, stacked on mobile */}
      <div
        className="frame3-cards"
        style={{
          position: "absolute",
          left: "50%",
          transform: "translateX(-50%)",
          zIndex: 2,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          maxWidth: "1200px",
          width: "calc(100% - 32px)",
        }}
      >
        <a
          href="https://apps.apple.com/us/app/cube-money-together/id6755666521"
          target="_blank"
          rel="noopener noreferrer"
          style={{ textDecoration: "none", display: "block", cursor: "pointer" }}
        >
          <GlowingStarsBackgroundCard showStars={false} imageSrc="/AbstractSymbols/Create2.png">
            <GlowingStarsTitle>Create a Cube</GlowingStarsTitle>
            <div className="flex justify-between items-end">
              <GlowingStarsDescription>
                Create your own savings circle & invite trusted members to join.
              </GlowingStarsDescription>
              <div className="h-8 w-8 rounded-full bg-[hsla(0,0%,100%,.1)] flex items-center justify-center">
                <Icon />
              </div>
            </div>
          </GlowingStarsBackgroundCard>
        </a>

        <a
          href="https://apps.apple.com/us/app/cube-money-together/id6755666521"
          target="_blank"
          rel="noopener noreferrer"
          style={{ textDecoration: "none", display: "block", cursor: "pointer" }}
        >
          <GlowingStarsBackgroundCard showStars={false} imageSrc="/AbstractSymbols/Join2.png">
            <GlowingStarsTitle>Join a Cube</GlowingStarsTitle>
            <div className="flex justify-between items-end">
              <GlowingStarsDescription>
                Join an existing Cube and save together with your circle.
              </GlowingStarsDescription>
              <div className="h-8 w-8 rounded-full bg-[hsla(0,0%,100%,.1)] flex items-center justify-center">
                <Icon />
              </div>
            </div>
          </GlowingStarsBackgroundCard>
        </a>
      </div>
    </section>
    </>
  );
}
