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
            font-size: 40px;
          }
        }
        .careers-subtext {
          font-size: 18px;
          line-height: 26px;
        }
        @media (max-width: 480px) {
          .careers-subtext {
            font-size: 17px;
            line-height: 25px;
          }
        }
      `}</style>
    <section
      className="careers-section"
      style={{
        position: "relative",
        width: "100%",
        overflow: "hidden",
        borderTop: "1px solid rgb(128, 128, 128)",
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
        <source src="/Home/Hero/HomeHero2.mp4" type="video/mp4" />
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
          Careers
        </div>

        {/* Subtext */}
        <span
          className="careers-subtext"
          style={{
            fontFamily: "Inter, sans-serif",
            fontWeight: 400,
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
          Build the future of group saving with us. We're looking for people who care about structure, trust, and moving money forward, together.
        </span>

        {/* CTA Button */}
        <a
          href="#openings"
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
            backgroundColor: "rgb(204, 255, 0)",
            border: "1px solid rgb(204, 255, 0)",
            color: "rgb(17, 14, 8)",
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
            View openings
          </span>
        </a>
      </div>
    </section>
    </>
  );
}
