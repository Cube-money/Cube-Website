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
        src="/Home/frame2/Group 16.png"
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
        }}
      >
        {/* Main Heading */}
        <div
          style={{
            fontFamily: 'var(--font-instrument-serif), "Instrument Serif", "Instrument Serif Placeholder", serif',
            fontStyle: "normal",
            fontWeight: 400,
            color: "rgb(255, 255, 255)",
            fontSize: "clamp(48px, 8vw, 88px)",
            letterSpacing: "-0.02em",
            lineHeight: "100%",
            textAlign: "center",
            whiteSpace: "nowrap",
            boxSizing: "border-box",
            WebkitFontSmoothing: "antialiased",
            display: "inline-block",
            marginBottom: "16px",
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
            fontSize: "22px",
            fontWeight: 400,
            letterSpacing: "-0.25px",
            lineHeight: "30px",
            margin: 0,
            fontStyle: "normal",
            WebkitFontSmoothing: "antialiased",
            color: "rgb(255, 255, 255)",
            maxWidth: "600px",
            marginBottom: "24px",
          }}
        >
          When people coordinate, agree on timing, and move together, a system emerges one that’s fair, predictable, and owned by the group itself.
        </span>
        
        {/* Sign up Button */}
        <a
          href="#waitlist"
          style={{
            opacity: 0.85,
            textDecoration: "none",
            alignItems: "center",
            alignSelf: "center",
            borderRadius: "36px",
            boxSizing: "border-box",
            display: "inline-flex",
            height: "44px",
            justifyContent: "center",
            overflow: "hidden",
            padding: "0px 32px",
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
              fontSize: "16px",
              fontWeight: 400,
              letterSpacing: "-0.25px",
              lineHeight: "24px",
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
