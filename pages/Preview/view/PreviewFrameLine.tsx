"use client";

/**
 * Frame: Vertical dashed line connecting the demo (Frame 2) to "How Cube protects" (Frame 3).
 */
export default function PreviewFrameLine() {
  return (
    <section
      style={{
        position: "relative",
        width: "100%",
        height: "clamp(280px, 38vh, 420px)",
        flexShrink: 0,
        overflow: "visible",
        backgroundColor: "black",
        display: "flex",
        justifyContent: "center",
        alignItems: "flex-start",
        paddingTop: "clamp(24px, 4vh, 48px)",
        paddingBottom: 0,
      }}
    >
      <div
        style={{
          position: "relative",
          width: "1px",
          height: "clamp(380px, calc(85vh - 144px), 720px)",
        }}
      >
        {/* Faded lines left and right */}
        {[-24, -12, 12, 24].map((offset) => (
          <div
            key={offset}
            style={{
              position: "absolute",
              left: offset,
              top: 0,
              width: "1px",
              height: "100%",
              opacity: 0.35,
              background:
                "linear-gradient(to bottom, rgba(255,255,255,0.5), rgba(255,255,255,0.08), transparent)",
              maskImage:
                "repeating-linear-gradient(to bottom, transparent, transparent 4px, black 4px, black 12px)",
              WebkitMaskImage:
                "repeating-linear-gradient(to bottom, transparent, transparent 4px, black 4px, black 12px)",
            }}
          />
        ))}
        {/* Main center line */}
        <div
          style={{
            position: "absolute",
            left: 0,
            top: 0,
            width: "1px",
            height: "100%",
            background:
              "linear-gradient(to bottom, #ffffff, rgba(255,255,255,0.3), #000000)",
            maskImage:
              "repeating-linear-gradient(to bottom, transparent, transparent 4px, black 4px, black 12px)",
            WebkitMaskImage:
              "repeating-linear-gradient(to bottom, transparent, transparent 4px, black 4px, black 12px)",
          }}
        />
      </div>
    </section>
  );
}
