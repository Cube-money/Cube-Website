import React from "react";

export default function LearnWaitlistSection() {
  return (
    <section
      style={{
        position: "relative",
        width: "100%",
        height: "52vh",
        minHeight: "320px",
        overflow: "hidden",
        borderTop: "1px solid rgb(255, 255, 255)",
      }}
    >
      {/* Background Video */}
      <video
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
        <source src="/Home/Hero/footervideo.mp4" type="video/mp4" />
      </video>

      {/* Dark overlay */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundColor: "rgba(0, 0, 0, 0.7)",
          zIndex: 1,
        }}
      />

      {/* Content */}
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          zIndex: 2,
          textAlign: "center",
          width: "100%",
        }}
      >
        {/* Pill label */}
        <div
          style={{
            display: "inline-flex",
            alignItems: "center",
            justifyContent: "center",
            padding: "6px 16px",
            borderRadius: "999px",
            border: "1px solid rgba(255, 255, 255, 0.6)",
            marginBottom: "20px",
            backgroundColor: "rgba(0, 0, 0, 0.4)",
          }}
        >
          <span
            style={{
              fontFamily:
                'Inter, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
              fontSize: "12px",
              letterSpacing: "0.18em",
              textTransform: "uppercase",
              color: "rgba(255, 255, 255, 0.9)",
            }}
          >
            GET&nbsp;STARTED&nbsp;TODAY
          </span>
        </div>

        {/* Heading */}
        <div
          style={{
            fontFamily:
              'var(--font-instrument-serif), "Instrument Serif", serif',
            fontStyle: "normal",
            fontWeight: 400,
            color: "rgb(255, 255, 255)",
            fontSize: "clamp(32px, 4.5vw, 64px)",
            letterSpacing: "-0.02em",
            lineHeight: "1",
            textAlign: "center",
            boxSizing: "border-box",
            WebkitFontSmoothing: "antialiased",
            display: "block",
            wordBreak: "break-word",
            overflowWrap: "break-word",
            marginBottom: "32px",
          }}
        >
          Your turn is now!
        </div>

        {/* CTA Button */}
        <button
          type="button"
          style={{
            opacity: 0.9,
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
            outline: "none",
          }}
        >
          <span
            style={{
              fontFamily:
                "Phonic, Helvetica, system-ui, -apple-system, Arial, sans-serif",
              fontSize: "16px",
              fontWeight: 400,
              letterSpacing: "-0.25px",
              lineHeight: "24px",
              margin: 0,
              fontStyle: "normal",
              WebkitFontSmoothing: "antialiased",
            }}
          >
            Start my cube
          </span>
        </button>
      </div>
    </section>
  );
}

