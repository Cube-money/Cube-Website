export default function WhatIsCubeSection() {
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
        src="/Home/frame2/Group 24.png"
        alt="What is Cube"
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
      
      {/* Centered Text Container */}
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          zIndex: 2,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          textAlign: "center",
          width: "calc(100% - 32px)",
          maxWidth: "800px",
          padding: "0 clamp(16px, 3vw, 0)",
        }}
      >
        {/* Main Heading */}
        <div
          style={{
            fontFamily: 'var(--font-instrument-serif), "Instrument Serif", "Instrument Serif Placeholder", serif',
            fontStyle: "normal",
            fontWeight: 400,
            color: "rgb(255, 255, 255)",
            fontSize: "clamp(32px, 7vw, 88px)",
            letterSpacing: "-0.02em",
            lineHeight: "100%",
            textAlign: "center",
            whiteSpace: "normal",
            boxSizing: "border-box",
            WebkitFontSmoothing: "antialiased",
            display: "inline-block",
            marginBottom: "clamp(12px, 2vh, 16px)",
            wordBreak: "break-word",
            overflowWrap: "break-word",
          }}
        >
          Rewrite the rules of money together.
        </div>
        
        {/* Subtext */}
        <span
          style={{
            fontFamily: "Inter, sans-serif",
            fontSize: "clamp(14px, 2.5vw, 22px)",
            fontWeight: 400,
            letterSpacing: "-0.25px",
            lineHeight: "clamp(20px, 3.5vw, 30px)",
            margin: 0,
            fontStyle: "normal",
            WebkitFontSmoothing: "antialiased",
            color: "rgb(255, 255, 255)",
            maxWidth: "600px",
            marginBottom: "clamp(16px, 3vh, 24px)",
          }}
        >
          When people coordinate, agree on timing, and move together, a system emerges one that's fair, predictable, and owned by the group itself.
        </span>
        
        {/* Sign up Button */}
        <a
          href="#waitlist"
          style={{
            opacity: 0.85,
            textDecoration: "none",
            alignItems: "center",
            alignSelf: "center",
            borderRadius: "clamp(28px, 3vw, 36px)",
            boxSizing: "border-box",
            display: "inline-flex",
            height: "clamp(40px, 5vh, 44px)",
            justifyContent: "center",
            overflow: "hidden",
            padding: "0px clamp(20px, 3vw, 32px)",
            position: "relative",
            textAlign: "center",
            whiteSpace: "nowrap",
            backgroundColor: "rgb(204, 255, 0)",
            border: "1px solid rgb(204, 255, 0)",
            color: "rgb(17, 14, 8)",
            cursor: "pointer",
            WebkitFontSmoothing: "antialiased",
            outline: "rgb(17, 14, 8) none 0px",
          }}
        >
          <span
            style={{
              fontFamily: "Phonic, Helvetica, system-ui, -apple-system, 'system-ui', Arial, sans-serif",
              fontSize: "clamp(14px, 2vw, 16px)",
              fontWeight: 400,
              letterSpacing: "-0.25px",
              lineHeight: "clamp(20px, 3vw, 24px)",
              margin: 0,
              fontStyle: "normal",
              WebkitFontSmoothing: "antialiased",
            }}
          >
            Sign up
          </span>
        </a>
      </div>
    </section>
  );
}
