export default function StoriesThree() {
  const gap = "clamp(20px, 3vw, 32px)";
  const sectionPadding = "clamp(24px, 4vw, 48px)";

  return (
    <section
      className="relative w-full h-screen overflow-hidden flex flex-row items-stretch"
      style={{
        borderTop: "1px solid rgb(128, 128, 128)",
        backgroundColor: "#000000",
        padding: sectionPadding,
        gap,
        boxSizing: "border-box",
      }}
    >
      {/* Image - 30% - left - editorial: thin stroke, soft shadow, refined crop */}
      <div
        style={{
          flex: "3 1 0",
          minWidth: 0,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          boxSizing: "border-box",
        }}
      >
        <div
          style={{
            padding: "1px",
            borderRadius: "20px",
            background: "linear-gradient(135deg, #ffffff 0%, #888888 50%, #000000 100%)",
            width: "100%",
            maxHeight: "100%",
            boxSizing: "border-box",
            boxShadow: "0 24px 48px rgba(0, 0, 0, 0.25), 0 0 0 1px rgba(255, 255, 255, 0.08)",
          }}
        >
          <div
            style={{
              borderRadius: "19px",
              overflow: "hidden",
              width: "100%",
              height: "100%",
            }}
          >
            <img
              src="/stories/storyhero1.png"
              alt="Story"
              className="w-full object-cover object-center"
              style={{
                display: "block",
                height: "auto",
                maxHeight: "calc(100vh - 120px)",
                objectPosition: "center 20%",
              }}
            />
          </div>
        </div>
      </div>

      {/* Text frame - 70% - right - warm off-white for editorial feel */}
      <div
        style={{
          flex: "7 1 0",
          minWidth: 0,
          backgroundColor: "#f8f6f3",
          borderRadius: "16px",
          padding: "clamp(40px, 6vw, 72px)",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
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
          "I moved out without falling into debt."
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
            Moving out was supposed to feel exciting. Instead, it felt like math.
          </p>
          <p style={{ margin: "0 0 1em 0" }}>
            First month. Deposit. Utilities. Thousands of dollars up front, all at once.
          </p>
          <p style={{ margin: "0 0 1em 0" }}>
            I could&apos;ve put it on a credit card. I could&apos;ve taken a loan. But I didn&apos;t want my first step forward to start with something hanging over me.
          </p>
          <p style={{ margin: "0 0 1em 0" }}>
            So I started a Cube.
          </p>
          <p style={{ margin: "0 0 1em 0" }}>
            A few people I trust. A simple cycle. Everyone contributing, everyone taking their turn.
          </p>
          <p style={{ margin: "0 0 1em 0" }}>
            When my payout came, I signed the lease that week.
          </p>
          <p style={{ margin: 0 }}>
            No interest. No scrambling. Just a plan that moved as fast as life does.
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
          <span style={{ color: "#333" }}>Ethan</span> · Austin
          <br />
          <span style={{ fontSize: "12px", color: "#888", marginTop: "4px", display: "inline-block" }}>
            5 people · 6 week cycle · Move-out fund
          </span>
        </div>
      </div>
    </section>
  );
}
