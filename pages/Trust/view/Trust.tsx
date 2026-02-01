export default function Trust() {
  return (
    <section
      style={{
        position: "relative",
        width: "100%",
        height: "100vh",
        overflow: "hidden",
        borderTop: "1px solid rgb(128, 128, 128)",
      }}
    >
      {/* Full-screen Image Background */}
      <img
        src="/Home/frame2/Group 301.png"
        alt="Trust"
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

      {/* Headline + Subhead */}
      <div
        style={{
          position: "absolute",
          top: "clamp(100px, 15vh, 140px)",
          left: "50%",
          transform: "translateX(-50%)",
          zIndex: 4,
          textAlign: "center",
          width: "calc(100% - 32px)",
          maxWidth: "min(95vw, 960px)",
        }}
      >
        {/* Headline */}
        <div
          style={{
            fontFamily: 'var(--font-instrument-serif), "Instrument Serif", serif',
            fontSize: "clamp(40px, 7vw, 80px)",
            fontWeight: 400,
            color: "#fff",
            letterSpacing: "-0.02em",
            lineHeight: 1.1,
            marginBottom: "clamp(16px, 2.5vh, 24px)",
            WebkitFontSmoothing: "antialiased",
          }}
        >
          Trust is the product.
        </div>

        {/* Subhead — one line, no wrap */}
        <span
          style={{
            fontFamily: "Inter, sans-serif",
            fontSize: "clamp(16px, 2.2vw, 22px)",
            fontWeight: 400,
            letterSpacing: "-0.01em",
            lineHeight: 1.5,
            color: "rgba(255, 255, 255, 0.85)",
            display: "block",
            whiteSpace: "nowrap",
            WebkitFontSmoothing: "antialiased",
          }}
        >
          Cube makes saving with others feel structured, scheduled, and safe.
        </span>
      </div>

      {/* Gold safe image — middle layer */}
      <img
        src="/Trust/Goldsafe.png"
        alt="Trust"
        style={{
          position: "absolute",
          top: "65%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          zIndex: 2,
          maxWidth: "min(70vw, 680px)",
          width: "auto",
          height: "auto",
          objectFit: "contain",
        }}
      />

      {/* Subtext — below safe, in front */}
      <div
        style={{
          position: "absolute",
          bottom: "clamp(40px, 8vh, 80px)",
          left: "50%",
          transform: "translateX(-50%)",
          zIndex: 4,
          textAlign: "center",
        }}
      >
        <span
          style={{
            fontFamily: "Inter, sans-serif",
            fontSize: "clamp(14px, 1.8vw, 18px)",
            fontWeight: 400,
            letterSpacing: "0.02em",
            color: "rgba(255, 255, 255, 0.6)",
            fontStyle: "italic",
            WebkitFontSmoothing: "antialiased",
          }}
        >
          Because money works better when it’s clear.
        </span>
      </div>
    </section>
  );
}
