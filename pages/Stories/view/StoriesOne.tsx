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
      {/* Header Text */}
      <div
        style={{
          position: "absolute",
          top: "clamp(16%, 18vh, 22%)",
          left: "50%",
          transform: "translateX(-50%)",
          zIndex: 2,
          textAlign: "center",
          width: "calc(100% - 32px)",
          maxWidth: "800px",
          padding: "0 clamp(16px, 3vw, 0)",
        }}
      >
        <div
          style={{
            fontFamily: 'var(--font-instrument-serif), "Instrument Serif", "Instrument Serif Placeholder", serif',
            fontStyle: "normal",
            fontWeight: 400,
            color: "rgb(255, 255, 255)",
            fontSize: "clamp(32px, 4vw, 56px)",
            letterSpacing: "-0.02em",
            lineHeight: "100%",
            textAlign: "center",
            whiteSpace: "normal",
            boxSizing: "border-box",
            WebkitFontSmoothing: "antialiased",
            display: "inline-block",
            wordBreak: "break-word",
            overflowWrap: "break-word",
            marginBottom: "clamp(12px, 2vh, 16px)",
          }}
        >
          How does zero debt, zero interest sounds?
        </div>
        
        {/* Subtext */}
        <span
          style={{
            fontFamily: "Inter, sans-serif",
            fontSize: "clamp(18px, 2.2vw, 18px)",
            fontWeight: 400,
            letterSpacing: "-0.25px",
            lineHeight: "clamp(20px, 3vw, 26px)",
            margin: "0 auto",
            marginBottom: "clamp(28px, 5vh, 48px)",
            fontStyle: "normal",
            WebkitFontSmoothing: "antialiased",
            color: "rgb(255, 255, 255)",
            maxWidth: "600px",
            display: "block",
            textAlign: "center",
            width: "100%",
          }}
        >
          Save without debt or interest, and move way faster than traditional saving by pooling together instead of waiting months for slow, solo progress.
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
