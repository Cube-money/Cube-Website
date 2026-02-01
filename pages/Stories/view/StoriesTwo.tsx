export default function StoriesTwo() {
  const gap = "clamp(20px, 3vw, 32px)";
  const sectionPadding = "clamp(24px, 4vw, 48px)";

  return (
    <section
      className="relative w-full min-h-screen overflow-hidden flex flex-col md:flex-row md:h-screen items-center justify-center md:items-stretch"
      style={{
        borderTop: "1px solid rgb(128, 128, 128)",
        backgroundColor: "#000000",
        padding: sectionPadding,
        gap,
        boxSizing: "border-box",
      }}
    >
      {/* Text frame - full width on mobile, 70% on desktop */}
      <div
        className="w-full max-w-full md:flex-[7] md:min-w-0 md:max-w-none flex flex-col justify-center order-1"
        style={{
          backgroundColor: "#f8f6f3",
          borderRadius: "16px",
          padding: "clamp(24px, 5vw, 72px)",
          boxSizing: "border-box",
          boxShadow: "0 4px 24px rgba(0, 0, 0, 0.08)",
          border: "1px solid rgba(0, 0, 0, 0.06)",
        }}
      >
        <span
          style={{
            fontFamily: "Inter, sans-serif",
            fontSize: "11px",
            fontWeight: 600,
            letterSpacing: "0.2em",
            textTransform: "uppercase",
            color: "#888",
            marginBottom: "clamp(12px, 1.5vh, 18px)",
            display: "block",
          }}
        >
          Story
        </span>
        <div
          style={{
            fontFamily: 'var(--font-instrument-serif), "Instrument Serif", "Instrument Serif Placeholder", serif',
            fontStyle: "italic",
            fontWeight: 400,
            color: "#0a0a0a",
            fontSize: "clamp(26px, 3.5vw, 42px)",
            letterSpacing: "-0.02em",
            lineHeight: "1.15",
            textAlign: "left",
            whiteSpace: "normal",
            boxSizing: "border-box",
            WebkitFontSmoothing: "antialiased",
            display: "block",
            marginBottom: "clamp(16px, 2.5vh, 24px)",
            wordBreak: "break-word",
            overflowWrap: "break-word",
          }}
        >
          "I needed something more reliable than a loan."
        </div>
        <div
          style={{
            fontFamily: "Inter, sans-serif",
            fontSize: "clamp(14px, 1.6vw, 16px)",
            fontWeight: 400,
            letterSpacing: "-0.01em",
            lineHeight: "1.75",
            margin: 0,
            marginBottom: "clamp(20px, 3vh, 28px)",
            fontStyle: "normal",
            WebkitFontSmoothing: "antialiased",
            color: "#444",
            textAlign: "left",
            display: "block",
          }}
        >
          <p style={{ margin: "0 0 1em 0" }}>
            Running a small business means the numbers never stop moving. Inventory, rent, payroll, equipment. Something always comes first.
          </p>
          <p style={{ margin: "0 0 1em 0" }}>
            I used to rely on credit whenever cash got tight. Not because I wanted to, but because it was the only system that moved fast enough.
          </p>
          <p style={{ margin: "0 0 1em 0" }}>
            Cube gave me another option.
          </p>
          <p style={{ margin: "0 0 1em 0" }}>
            I started a cycle with a few people I trust. We contributed on schedule, rotated access, and kept everything clear. When my payout came, it wasn&apos;t a bailout. It was planned.
          </p>
          <p style={{ margin: "0 0 1em 0" }}>
            That&apos;s what changed everything.
          </p>
          <p style={{ margin: 0 }}>
            Not debt. Not waiting. Just a structure that let me keep building without falling behind.
          </p>
        </div>
        {/* Attribution */}
        <div
          style={{
            fontFamily: "Inter, sans-serif",
            fontSize: "13px",
            fontWeight: 500,
            letterSpacing: "0.02em",
            color: "#666",
            display: "block",
          }}
        >
          <span style={{ color: "#333" }}>Omar</span> · Washington, D.C.
          <br />
          <span style={{ fontSize: "12px", color: "#888", marginTop: "4px", display: "inline-block" }}>
            6 people · Monthly cycle · Working capital
          </span>
        </div>
      </div>

      {/* Image - full width on mobile below text, 30% on desktop */}
      <div
        className="w-full flex shrink-0 justify-center items-center order-2 md:flex-[3] md:min-w-0"
        style={{ boxSizing: "border-box" }}
      >
        <div
          className="w-full max-w-[200px] md:max-w-none"
          style={{
            padding: "1px",
            borderRadius: "20px",
            background: "linear-gradient(135deg, #ffffff 0%, #888888 50%, #000000 100%)",
            boxSizing: "border-box",
            boxShadow: "0 24px 48px rgba(0, 0, 0, 0.25), 0 0 0 1px rgba(255, 255, 255, 0.08)",
          }}
        >
          <div
            style={{
              borderRadius: "19px",
              overflow: "hidden",
              width: "100%",
            }}
          >
            <img
              src="/stories/storyhero2.png"
              alt="Story"
              className="w-full object-cover object-center max-h-[50vh] md:max-h-[calc(100vh-120px)]"
              style={{
                display: "block",
                height: "auto",
                objectPosition: "center 20%",
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
