"use client";

export default function StoriesOne() {
  return (
    <>
    <section
      className="h-screen"
      style={{
        position: "relative",
        width: "100%",
        overflow: "hidden",
        backgroundColor: "#000000",
      }}
    >
      {/* Editorial Story Text */}
      <div
        style={{
          position: "absolute",
          top: "clamp(6%, 8vh, 10%)",
          left: "50%",
          transform: "translateX(-50%)",
          zIndex: 2,
          textAlign: "center",
          width: "calc(100% - 32px)",
          maxWidth: "680px",
          padding: "0 clamp(16px, 3vw, 0)",
        }}
      >
        {/* Editorial label */}
        <span
          style={{
            fontFamily: "Inter, sans-serif",
            fontSize: "11px",
            fontWeight: 600,
            letterSpacing: "0.2em",
            textTransform: "uppercase",
            color: "rgba(255, 255, 255, 0.5)",
            marginBottom: "clamp(12px, 1.5vh, 18px)",
            display: "block",
          }}
        >
          Story
        </span>

        {/* Main quote headline */}
        <div
          style={{
            fontFamily: 'var(--font-instrument-serif), "Instrument Serif", "Instrument Serif Placeholder", serif',
            fontStyle: "italic",
            fontWeight: 400,
            color: "rgb(255, 255, 255)",
            fontSize: "clamp(26px, 3.2vw, 40px)",
            letterSpacing: "-0.02em",
            lineHeight: "1.15",
            textAlign: "center",
            whiteSpace: "normal",
            boxSizing: "border-box",
            WebkitFontSmoothing: "antialiased",
            display: "block",
            wordBreak: "break-word",
            overflowWrap: "break-word",
            marginBottom: "clamp(14px, 2vh, 22px)",
          }}
        >
          "Cube replaced the credit card I almost used."
        </div>
        
        {/* Story body */}
        <div
          style={{
            fontFamily: "Inter, sans-serif",
            fontSize: "clamp(15px, 1.7vw, 17px)",
            fontWeight: 400,
            letterSpacing: "-0.01em",
            lineHeight: "1.7",
            margin: "0 auto",
            marginBottom: "clamp(14px, 2vh, 20px)",
            fontStyle: "normal",
            WebkitFontSmoothing: "antialiased",
            color: "rgba(255, 255, 255, 0.85)",
            maxWidth: "640px",
            display: "block",
            textAlign: "center",
            width: "100%",
          }}
        >
          <p style={{ margin: "0 0 1em 0" }}>
            My car repair was $1,300. I was ready to finance it. Instead, my Cube payout arrived that week. I covered it immediately.
          </p>
          <p style={{ margin: 0 }}>
            No balance carried forward. Just the cycle doing its job.
          </p>
        </div>

        {/* Attribution */}
        <span
          style={{
            fontFamily: "Inter, sans-serif",
            fontSize: "13px",
            fontWeight: 500,
            letterSpacing: "0.05em",
            color: "rgba(255, 255, 255, 0.4)",
            display: "block",
            textAlign: "center",
          }}
        >
          Sarah · Los Angeles
        </span>
      </div>

      {/* Image below text - rounded corners, edge gradients blend into black */}
      <div
        style={{
          position: "absolute",
          top: "68%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          zIndex: 1,
          width: "calc(100% - 32px)",
          maxWidth: "min(95vw, 780px)",
          borderRadius: "24px",
          overflow: "hidden",
          boxShadow: "0 24px 48px rgba(0, 0, 0, 0.4)",
        }}
      >
        <img
          src="/stories/StoryOne.png"
          alt="Story"
          style={{
            width: "100%",
            height: "auto",
            display: "block",
            objectFit: "cover",
          }}
        />
        {/* Top edge gradient - soft blend into black */}
        <div
          style={{
            position: "absolute",
            left: 0,
            right: 0,
            top: 0,
            height: "20%",
            background: "linear-gradient(to bottom, #000000 0%, transparent 100%)",
            pointerEvents: "none",
          }}
        />
        {/* Bottom edge gradient - soft blend into black */}
        <div
          style={{
            position: "absolute",
            left: 0,
            right: 0,
            bottom: 0,
            height: "20%",
            background: "linear-gradient(to top, #000000 0%, transparent 100%)",
            pointerEvents: "none",
          }}
        />
        {/* Left edge gradient - soft blend into black */}
        <div
          style={{
            position: "absolute",
            left: 0,
            top: 0,
            bottom: 0,
            width: "20%",
            background: "linear-gradient(to right, #000000 0%, transparent 100%)",
            pointerEvents: "none",
          }}
        />
        {/* Right edge gradient - soft blend into black */}
        <div
          style={{
            position: "absolute",
            right: 0,
            top: 0,
            bottom: 0,
            width: "20%",
            background: "linear-gradient(to left, #000000 0%, transparent 100%)",
            pointerEvents: "none",
          }}
        />
      </div>
    </section>
    </>
  );
}
