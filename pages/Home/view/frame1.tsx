export default function WhatIsCubeSection() {
  return (
    <>
      <style jsx>{`
        .frame1-heading {
          font-size: 88px;
        }
        @media (max-width: 480px) {
          .frame1-heading {
            font-size: 36px;
          }
        }
        .frame1-subtext {
          font-size: 22px;
          line-height: 30px;
        }
        @media (max-width: 480px) {
          .frame1-subtext {
            font-size: 16px;
            line-height: 24px;
          }
        }
        .frame1-btn {
          height: 44px;
          padding: 0 32px;
          border-radius: 36px;
        }
        @media (max-width: 480px) {
          .frame1-btn {
            height: 40px;
            padding: 0 24px;
            border-radius: 28px;
          }
        }
        .frame1-section {
          min-height: 100svh;
        }
        @media (max-width: 480px) {
          .frame1-section {
            min-height: 700px;
          }
        }
      `}</style>
    <section
      className="frame1-section"
      style={{
        position: "relative",
        width: "100%",
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
          width: "calc(100% - 48px)",
          maxWidth: "800px",
          padding: "0 24px",
        }}
      >
        {/* Main Heading */}
        <div
          className="frame1-heading"
          style={{
            fontFamily: 'var(--font-instrument-serif), "Instrument Serif", "Instrument Serif Placeholder", serif',
            fontStyle: "normal",
            fontWeight: 400,
            color: "rgb(255, 255, 255)",
            letterSpacing: "-0.02em",
            lineHeight: "100%",
            textAlign: "center",
            whiteSpace: "normal",
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
          className="frame1-subtext"
          style={{
            fontFamily: "Inter, sans-serif",
            fontWeight: 400,
            letterSpacing: "-0.25px",
            margin: 0,
            fontStyle: "normal",
            WebkitFontSmoothing: "antialiased",
            color: "rgb(255, 255, 255)",
            maxWidth: "600px",
            marginBottom: "24px",
          }}
        >
          When people coordinate, agree on timing, and move together, a system emerges one that's fair, predictable, and owned by the group itself.
        </span>
        
        {/* Sign up Button */}
        <a
          href="#waitlist"
          className="frame1-btn"
          style={{
            opacity: 0.85,
            textDecoration: "none",
            alignItems: "center",
            alignSelf: "center",
            boxSizing: "border-box",
            display: "inline-flex",
            justifyContent: "center",
            overflow: "hidden",
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
              fontSize: "14px",
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
    </>
  );
}
