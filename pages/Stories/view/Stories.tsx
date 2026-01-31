export default function Stories() {
  return (
    <section
      className="relative w-full h-screen overflow-hidden"
      style={{
        borderTop: "1px solid rgb(128, 128, 128)",
        backgroundColor: "#C8D1D6",
      }}
    >
      {/* 15% dark overlay on images */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundColor: "rgba(0, 0, 0, 0.2)",
          zIndex: 1,
          pointerEvents: "none",
        }}
      />

      {/* Dead-center text overlay */}
      <div
        style={{
          position: "absolute",
          top: "75%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          zIndex: 2,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
          width: "calc(100% - 32px)",
          maxWidth: "800px",
          padding: "0 clamp(16px, 3vw, 0)",
          pointerEvents: "none",
        }}
      >
        <div
          style={{
            fontFamily: 'var(--font-instrument-serif), "Instrument Serif", "Instrument Serif Placeholder", serif',
            fontStyle: "normal",
            fontWeight: 400,
            color: "rgb(255, 255, 255)",
            fontSize: "clamp(40px, 7vw, 88px)",
            letterSpacing: "-0.02em",
            lineHeight: "100%",
            textAlign: "center",
            whiteSpace: "normal",
            boxSizing: "border-box",
            WebkitFontSmoothing: "antialiased",
            display: "block",
            marginBottom: "clamp(12px, 2vh, 16px)",
            wordBreak: "break-word",
            overflowWrap: "break-word",
          }}
        >
          Stories
        </div>
        <span
          style={{
            fontFamily: "Inter, sans-serif",
            fontSize: "clamp(18px, 2.5vw, 22px)",
            fontWeight: 400,
            letterSpacing: "-0.25px",
            lineHeight: "clamp(20px, 3.5vw, 30px)",
            margin: 0,
            fontStyle: "normal",
            WebkitFontSmoothing: "antialiased",
            color: "rgb(255, 255, 255)",
            maxWidth: "600px",
            textAlign: "center",
          }}
        >
          Real stories from real Cubes.
        </span>
      </div>

      <div className="w-full h-full flex flex-row overflow-hidden">
        {/* 3 images side by side with stroke lines between */}
        <div className="flex-1 min-w-0 overflow-hidden">
          <img
            src="/stories/storyhero10.png"
            alt="Story 3"
            className="w-full h-full object-cover object-center"
            style={{ display: "block" }}
          />
        </div>
        <div
          className="flex-shrink-0 w-px self-stretch"
          style={{ backgroundColor: "rgb(128, 128, 128)" }}
        />
        <div className="flex-1 min-w-0 overflow-hidden">
          <img
            src="/stories/storyhero13.png"
            alt="Story 2"
            className="w-full h-full object-cover object-center"
            style={{ display: "block" }}
          />
        </div>
        <div
          className="flex-shrink-0 w-px self-stretch"
          style={{ backgroundColor: "rgb(128, 128, 128)" }}
        />
        <div className="flex-1 min-w-0 overflow-hidden">
          <img
            src="/stories/storyhero3.png"
            alt="Story 1"
            className="w-full h-full object-cover object-center"
            style={{ display: "block" }}
          />
        </div>
      </div>
    </section>
  );
}
