export default function StoriesTwo() {
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
      {/* Text frame - 70% - warm off-white for editorial feel */}
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
            marginBottom: "clamp(16px, 2vh, 24px)",
            display: "block",
          }}
        >
          Story
        </span>
        <div
          style={{
            fontFamily: 'var(--font-instrument-serif), "Instrument Serif", "Instrument Serif Placeholder", serif',
            fontStyle: "normal",
            fontWeight: 400,
            color: "#0a0a0a",
            fontSize: "clamp(32px, 4.5vw, 56px)",
            letterSpacing: "-0.03em",
            lineHeight: "1.1",
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
          Placeholder heading
        </div>
        <span
          style={{
            fontFamily: "Inter, sans-serif",
            fontSize: "clamp(16px, 2vw, 19px)",
            fontWeight: 400,
            letterSpacing: "-0.01em",
            lineHeight: "1.7",
            margin: 0,
            fontStyle: "normal",
            WebkitFontSmoothing: "antialiased",
            color: "#444",
            textAlign: "left",
            display: "block",
          }}
        >
          Placeholder text for leading copy. Replace with your story content.
        </span>
      </div>

      {/* Image - 30% - editorial: thin stroke, soft shadow, refined crop */}
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
              src="/stories/storyhero2.png"
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
    </section>
  );
}
