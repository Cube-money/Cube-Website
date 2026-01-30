"use client";

import { useRef, useEffect } from "react";

export default function HeroSection() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    video.play().catch(() => {});
  }, []);

  return (
    <section
      style={{
        position: "relative",
        width: "100%",
        height: "100vh",
        overflow: "hidden",
      }}
    >
      {/* Full-screen Video Background */}
      <video
        ref={videoRef}
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover",
          zIndex: 0,
        }}
      >
        <source src="/Home/Hero/HomeHero.mp4" type="video/mp4" />
      </video>
      
      {/* Dark overlay - 10% opacity */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundColor: "rgba(0, 0, 0, 0.4)",
          zIndex: 1,
        }}
      />

      {/* Left-aligned Text Container */}
      <div
        className="top-[78%] md:top-[65%]"
        style={{
          position: "absolute",
          left: "clamp(5%, 4vw, 5%)",
          transform: "translateY(-50%)",
          zIndex: 3,
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          textAlign: "left",
          maxWidth: "clamp(90%, 50vw, 50%)",
          width: "calc(100% - clamp(10%, 8vw, 10%))",
          padding: "0 clamp(16px, 2vw, 0)",
        }}
      >
        {/* Main Heading */}
        <div
          style={{
            fontFamily: 'var(--font-instrument-serif), "Instrument Serif", "Instrument Serif Placeholder", serif',
            fontStyle: "normal",
            fontWeight: 400,
            color: "rgb(255, 255, 255)",
            fontSize: "clamp(40px, 6vw, 72px)",
            letterSpacing: "-0.02em",
            lineHeight: "100%",
            textAlign: "left",
            whiteSpace: "normal",
            boxSizing: "border-box",
            WebkitFontSmoothing: "antialiased",
            display: "block",
            marginBottom: "clamp(12px, 2vh, 16px)",
            wordBreak: "break-word",
            overflowWrap: "break-word",
          }}
        >
          Be your own bank.
        </div>

        {/* Subtext */}
        <span
          style={{
            fontFamily: "Inter, sans-serif",
            fontSize: "clamp(18px, 2.5vw, 18px)",
            fontWeight: 400,
            letterSpacing: "-0.25px",
            lineHeight: "clamp(20px, 3.5vw, 26px)",
            margin: 0,
            fontStyle: "normal",
            WebkitFontSmoothing: "antialiased",
            color: "rgb(255, 255, 255)",
            maxWidth: "600px",
            marginBottom: "clamp(16px, 3vh, 24px)",
            textAlign: "left",
            display: "block",
          }}
        >
          Cube turns your circle into a financial engine
          Pool money together. Get access when you need it. Grow faster.
          No interest. No banks. No limits.
        </span>

        {/* Buttons */}
        <div style={{ display: "flex", gap: "clamp(8px, 1.5vw, 12px)", alignItems: "center", flexWrap: "wrap" }}>
          <a
            href="#"
            style={{
              textDecoration: "none",
              alignItems: "center",
              borderRadius: "clamp(28px, 3vw, 36px)",
              boxSizing: "border-box",
              display: "inline-flex",
              height: "clamp(40px, 5vh, 44px)",
              justifyContent: "center",
              overflow: "hidden",
              padding: "0px clamp(20px, 3vw, 32px)",
              position: "relative",
              textAlign: "center",
              whiteSpace: "nowrap",
              backgroundColor: "rgba(0, 0, 0, 0.4)",
              border: "1px solid rgba(255, 255, 255, 0.3)",
              color: "rgb(255, 255, 255)",
              cursor: "pointer",
              WebkitFontSmoothing: "antialiased",
            }}
          >
            <span
              style={{
                fontFamily: "Phonic, Helvetica, system-ui, -apple-system, 'system-ui', Arial, sans-serif",
                fontSize: "clamp(16px, 1.8vw, 14px)",
                fontWeight: 400,
                letterSpacing: "-0.25px",
                lineHeight: "clamp(18px, 2.5vw, 22px)",
                margin: 0,
                fontStyle: "normal",
                WebkitFontSmoothing: "antialiased",
              }}
            >
              Learn more
            </span>
          </a>
          <a
            href="#waitlist"
            style={{
              opacity: 0.85,
              textDecoration: "none",
              alignItems: "center",
              borderRadius: "clamp(28px, 3vw, 36px)",
              boxSizing: "border-box",
              display: "inline-flex",
              height: "clamp(40px, 5vh, 44px)",
              justifyContent: "center",
              overflow: "hidden",
              padding: "0px clamp(20px, 3vw, 32px)",
              position: "relative",
              textAlign: "left",
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
                fontSize: "clamp(16px, 1.8vw, 14px)",
                fontWeight: 400,
                letterSpacing: "-0.25px",
                lineHeight: "clamp(18px, 2.5vw, 22px)",
                margin: 0,
                fontStyle: "normal",
                WebkitFontSmoothing: "antialiased",
              }}
            >
              Start Your Cube
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}
