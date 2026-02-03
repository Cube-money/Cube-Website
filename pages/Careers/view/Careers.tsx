"use client";

import { useRef, useEffect } from "react";

export default function Careers() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    video.play().catch(() => {});
  }, []);

  return (
    <>
      <style jsx>{`
        .careers-section {
          height: 100svh;
        }
        @media (max-width: 480px) {
          .careers-section {
            min-height: 750px;
          }
        }
        .careers-text-container {
          top: 65%;
          left: 5%;
          max-width: 50%;
          width: 50%;
        }
        @media (max-width: 480px) {
          .careers-text-container {
            top: 70%;
            left: 5%;
            max-width: 90%;
            width: 90%;
          }
        }
        .careers-heading {
          font-size: 72px;
        }
        @media (max-width: 480px) {
          .careers-heading {
            font-size: 43px;
          }
        }
        .careers-subtext {
          font-size: 18px;
          line-height: 26px;
        }
        @media (max-width: 480px) {
          .careers-subtext {
            font-size: 20px;
            line-height: 28px;
          }
        }
      `}</style>
    <section
      className="careers-section"
      style={{
        position: "relative",
        width: "100%",
        height: "100svh",
        overflow: "hidden",
        borderTop: "1px solid rgb(128, 128, 128)",
        backgroundColor: "#0a0a0a",
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
        <source src="/Home/Hero/HomeHero2_compressed.mp4" type="video/mp4" />
      </video>

      {/* Dark overlay */}
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
        className="careers-text-container"
        style={{
          position: "absolute",
          top: "70%",
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
          className="careers-heading"
          style={{
            fontFamily: 'var(--font-instrument-serif), "Instrument Serif", "Instrument Serif Placeholder", serif',
            fontStyle: "normal",
            fontWeight: 400,
            fontSize: "clamp(36px, 8vw, 72px)",
            color: "rgb(255, 255, 255)",
            letterSpacing: "-0.02em",
            lineHeight: "1.05",
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
          Careers
        </div>

        {/* Subtext */}
        <span
          className="careers-subtext"
          style={{
            fontFamily: "Inter, sans-serif",
            fontWeight: 400,
            fontSize: "clamp(15px, 2.5vw, 18px)",
            lineHeight: "clamp(22px, 3vw, 26px)",
            letterSpacing: "-0.25px",
            margin: 0,
            fontStyle: "normal",
            WebkitFontSmoothing: "antialiased",
            color: "rgb(255, 255, 255)",
            maxWidth: "600px",
            marginBottom: "clamp(18px, 3vh, 24px)",
            textAlign: "left",
            display: "block",
          }}
        >
          Build the future of group saving with us. We're looking for people who care about structure, trust, and moving money forward, together.
        </span>

        {/* CTA Button */}
        <a
          href="#openings"
          style={{
            textDecoration: "none",
            alignItems: "center",
            borderRadius: "clamp(24px, 3vw, 36px)",
            boxSizing: "border-box",
            display: "inline-flex",
            minHeight: "48px",
            height: "clamp(44px, 5.5vh, 50px)",
            justifyContent: "center",
            overflow: "hidden",
            padding: "0 clamp(20px, 3vw, 32px)",
            position: "relative",
            textAlign: "center",
            whiteSpace: "nowrap",
            backgroundColor: "rgb(204, 255, 0)",
            border: "1px solid rgb(204, 255, 0)",
            color: "rgb(17, 14, 8)",
            cursor: "pointer",
            WebkitFontSmoothing: "antialiased",
            WebkitTapHighlightColor: "transparent",
          }}
        >
          <span
            style={{
              fontFamily: "Phonic, Helvetica, system-ui, -apple-system, 'system-ui', Arial, sans-serif",
              fontSize: "clamp(14px, 2vw, 16px)",
              fontWeight: 500,
              letterSpacing: "-0.25px",
              lineHeight: "1.25",
              margin: 0,
              fontStyle: "normal",
              WebkitFontSmoothing: "antialiased",
            }}
          >
            View openings
          </span>
        </a>
      </div>
    </section>
    </>
  );
}
