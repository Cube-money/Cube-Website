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
    <>
      <style jsx>{`
        .hero-text-container {
          top: 65%;
          left: 5%;
          max-width: 50%;
          width: 50%;
        }
        @media (max-width: 480px) {
          .hero-text-container {
            top: 70%;
            left: 5%;
            max-width: 90%;
            width: 90%;
          }
        }
        .hero-section {
          min-height: 100svh;
        }
        @media (max-width: 480px) {
          .hero-section {
            min-height: 750px;
          }
        }
        .hero-heading {
          font-size: 72px;
        }
        @media (max-width: 480px) {
          .hero-heading {
            font-size: 40px;
          }
        }
        .hero-subtext {
          font-size: 18px;
          line-height: 26px;
        }
        @media (max-width: 480px) {
          .hero-subtext {
            font-size: 16px;
            line-height: 24px;
          }
        }
        .hero-btn {
          height: 44px;
          padding: 0 32px;
          border-radius: 36px;
        }
        @media (max-width: 480px) {
          .hero-btn {
            height: 40px;
            padding: 0 20px;
            border-radius: 28px;
          }
        }
        .hero-btn-text {
          font-size: 14px;
        }
        @media (max-width: 480px) {
          .hero-btn-text {
            font-size: 14px;
          }
        }
      `}</style>
    <section
      className="hero-section pt-20"
      style={{
        position: "relative",
        width: "100%",
        overflow: "hidden",
        backgroundColor: "#0a0a0a",
        minHeight: "100svh",
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
        width={1920}
        height={1080}
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover",
          zIndex: 0,
          backgroundColor: "#0a0a0a",
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
        className="hero-text-container"
        style={{
          position: "absolute",
          top: "72%",
          left: "5%",
          maxWidth: "clamp(90%, 70vw, 50%)",
          width: "clamp(90%, 70vw, 50%)",
          transform: "translateY(-50%)",
          zIndex: 3,
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          textAlign: "left",
        }}
      >
        {/* Main Heading */}
        <div
          className="hero-heading"
          style={{
            fontFamily: 'var(--font-instrument-serif), "Instrument Serif", "Instrument Serif Placeholder", serif',
            fontStyle: "normal",
            fontWeight: 400,
            fontSize: "clamp(40px, 8vw, 72px)",
            color: "rgb(255, 255, 255)",
            letterSpacing: "-0.02em",
            lineHeight: "100%",
            textAlign: "left",
            whiteSpace: "normal",
            boxSizing: "border-box",
            WebkitFontSmoothing: "antialiased",
            display: "block",
            marginBottom: "16px",
            wordBreak: "break-word",
            overflowWrap: "break-word",
          }}
        >
          Be your own bank.
        </div>

        {/* Subtext */}
        <span
          className="hero-subtext"
          style={{
            fontFamily: "Inter, sans-serif",
            fontWeight: 400,
            fontSize: "clamp(14px, 2vw, 18px)",
            lineHeight: "clamp(22px, 3vw, 26px)",
            letterSpacing: "-0.25px",
            margin: 0,
            fontStyle: "normal",
            WebkitFontSmoothing: "antialiased",
            color: "rgb(255, 255, 255)",
            maxWidth: "600px",
            marginBottom: "24px",
            textAlign: "left",
            display: "block",
          }}
        >
          Cube turns your circle into a financial engine
          Pool money together. Get access when you need it. Grow faster.
          No interest. No banks. No limits.
        </span>

        {/* Buttons */}
        <div style={{ display: "flex", gap: "12px", alignItems: "center", flexWrap: "wrap" }}>
          <a
            href="#"
            className="hero-btn"
            style={{
              textDecoration: "none",
              alignItems: "center",
              boxSizing: "border-box",
              display: "inline-flex",
              justifyContent: "center",
              overflow: "hidden",
              position: "relative",
              textAlign: "center",
              whiteSpace: "nowrap",
              height: "clamp(40px, 5vh, 44px)",
              padding: "0 clamp(20px, 3vw, 32px)",
              borderRadius: "clamp(28px, 4vw, 36px)",
              backgroundColor: "rgba(0, 0, 0, 0.4)",
              border: "1px solid rgba(255, 255, 255, 0.3)",
              color: "rgb(255, 255, 255)",
              cursor: "pointer",
              WebkitFontSmoothing: "antialiased",
            }}
          >
            <span
              className="hero-btn-text"
              style={{
                fontFamily: "Phonic, Helvetica, system-ui, -apple-system, 'system-ui', Arial, sans-serif",
                fontWeight: 400,
                fontSize: "clamp(13px, 1.5vw, 14px)",
                letterSpacing: "-0.25px",
                lineHeight: "22px",
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
            className="hero-btn"
            style={{
              opacity: 0.85,
              textDecoration: "none",
              alignItems: "center",
              boxSizing: "border-box",
              display: "inline-flex",
              justifyContent: "center",
              overflow: "hidden",
              position: "relative",
              textAlign: "center",
              whiteSpace: "nowrap",
              height: "clamp(40px, 5vh, 44px)",
              padding: "0 clamp(20px, 3vw, 32px)",
              borderRadius: "clamp(28px, 4vw, 36px)",
              backgroundColor: "rgb(204, 255, 0)",
              border: "1px solid rgb(204, 255, 0)",
              color: "rgb(17, 14, 8)",
              cursor: "pointer",
              WebkitFontSmoothing: "antialiased",
              outline: "rgb(17, 14, 8) none 0px",
            }}
          >
            <span
              className="hero-btn-text"
              style={{
                fontFamily: "Phonic, Helvetica, system-ui, -apple-system, 'system-ui', Arial, sans-serif",
                fontWeight: 400,
                fontSize: "clamp(13px, 1.5vw, 14px)",
                letterSpacing: "-0.25px",
                lineHeight: "22px",
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
    </>
  );
}
