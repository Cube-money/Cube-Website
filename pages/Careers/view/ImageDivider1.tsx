"use client";

export default function ImageDivider1() {
  return (
    <section
      style={{
        position: "relative",
        width: "100%",
        overflow: "hidden",
        backgroundColor: "#ffffff",
        padding: "clamp(48px, 8vh, 80px) 0",
      }}
    >
      {/* Image - centered with gradient mask */}
      <div
        className="relative mx-auto w-[calc(100%-32px)] max-w-[min(95vw,1000px)] overflow-hidden"
      >
        <img
          src="/AbstractSymbols/Careerdivideo1.png"
          alt=""
          style={{
            width: "100%",
            height: "auto",
            display: "block",
            objectFit: "cover",
          }}
        />
        {/* Top edge gradient - smooth blend into white */}
        <div
          style={{
            position: "absolute",
            left: 0,
            right: 0,
            top: 0,
            height: "40%",
            background: "linear-gradient(to bottom, #ffffff 0%, rgba(255,255,255,0.8) 30%, rgba(255,255,255,0) 100%)",
            pointerEvents: "none",
          }}
        />
        {/* Bottom edge gradient - smooth blend into white */}
        <div
          style={{
            position: "absolute",
            left: 0,
            right: 0,
            bottom: 0,
            height: "40%",
            background: "linear-gradient(to top, #ffffff 0%, rgba(255,255,255,0.8) 30%, rgba(255,255,255,0) 100%)",
            pointerEvents: "none",
          }}
        />
        {/* Left edge gradient - smooth blend into white */}
        <div
          style={{
            position: "absolute",
            left: 0,
            top: 0,
            bottom: 0,
            width: "35%",
            background: "linear-gradient(to right, #ffffff 0%, rgba(255,255,255,0.8) 30%, rgba(255,255,255,0) 100%)",
            pointerEvents: "none",
          }}
        />
        {/* Right edge gradient - smooth blend into white */}
        <div
          style={{
            position: "absolute",
            right: 0,
            top: 0,
            bottom: 0,
            width: "35%",
            background: "linear-gradient(to left, #ffffff 0%, rgba(255,255,255,0.8) 30%, rgba(255,255,255,0) 100%)",
            pointerEvents: "none",
          }}
        />
      </div>
    </section>
  );
}
