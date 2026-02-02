"use client";

export default function About2() {
  return (
    <section
      style={{
        position: "relative",
        width: "100%",
        minHeight: "100vh",
        overflow: "hidden",
        backgroundColor: "#000",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "clamp(80px, 15vh, 160px) clamp(24px, 5vw, 80px)",
        boxSizing: "border-box",
        borderTop: "1px solid rgb(128, 128, 128)",
      }}
    >
      {/* Centered editorial content */}
      <div
        style={{
          maxWidth: "900px",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          textAlign: "center",
        }}
      >
        {/* Small label */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "16px",
            marginBottom: "clamp(32px, 5vh, 56px)",
          }}
        >
          <div
            style={{
              width: "48px",
              height: "1px",
              background: "linear-gradient(90deg, transparent 0%, rgba(255, 255, 255, 0.3) 100%)",
            }}
          />
          <span
            style={{
              fontFamily: "Inter, sans-serif",
              fontSize: "11px",
              fontWeight: 500,
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              color: "rgba(255, 255, 255, 0.4)",
              WebkitFontSmoothing: "antialiased",
            }}
          >
            The Why
          </span>
          <div
            style={{
              width: "48px",
              height: "1px",
              background: "linear-gradient(90deg, rgba(255, 255, 255, 0.3) 0%, transparent 100%)",
            }}
          />
        </div>

        {/* Grounding statement - large headline */}
        <h2
          style={{
            fontFamily: 'var(--font-instrument-serif), "Instrument Serif", Georgia, serif',
            fontSize: "clamp(28px, 5vw, 56px)",
            fontWeight: 400,
            letterSpacing: "-0.02em",
            lineHeight: 1.2,
            margin: 0,
            color: "#fff",
            WebkitFontSmoothing: "antialiased",
            marginBottom: "clamp(24px, 4vh, 40px)",
          }}
        >
          Cube exists to help people reach financial goals faster,  by saving together instead of alone.
        </h2>

        {/* Supporting paragraph - calm, founder-grade */}
        <p
          style={{
            fontFamily: "Inter, sans-serif",
            fontSize: "clamp(16px, 2vw, 20px)",
            fontWeight: 400,
            letterSpacing: "-0.01em",
            lineHeight: 1.7,
            margin: 0,
            color: "rgba(255, 255, 255, 0.55)",
            WebkitFontSmoothing: "antialiased",
            maxWidth: "680px",
            marginBottom: "clamp(32px, 5vh, 48px)",
          }}
        >
          Most people don't lack discipline. They lack access. Access to capital when they need it. Access to structure that holds them accountable. Access to a system that doesn't charge interest or require perfect credit.
        </p>

        {/* Second paragraph */}
        <p
          style={{
            fontFamily: "Inter, sans-serif",
            fontSize: "clamp(16px, 2vw, 20px)",
            fontWeight: 400,
            letterSpacing: "-0.01em",
            lineHeight: 1.7,
            margin: 0,
            color: "rgba(255, 255, 255, 0.55)",
            WebkitFontSmoothing: "antialiased",
            maxWidth: "680px",
          }}
        >
          That's why we built Cube. Not to reinvent saving, but to formalize something communities have done for generations, and make it work at scale, with trust built in.
        </p>
      </div>
    </section>
  );
}
