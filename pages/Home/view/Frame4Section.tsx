export default function Frame4Section() {
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
        src="/Home/frame2/Group 7.png"
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
      
      {/* Phone overlay - right aligned, vertically centered */}
      <img
        src="/Home/Frame4/phoneframe4.png"
        alt="Phone"
        style={{
          position: "absolute",
          top: "50%",
          right: 200,
          transform: "translateY(-50%)",
          height: "80%",
          width: "auto",
          objectFit: "contain",
          objectPosition: "right center",
          zIndex: 2,
        }}
      />
      
      {/* Left-aligned Text Container - original Frame4Section */}
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "5%",
          transform: "translateY(-50%)",
          zIndex: 3,
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          textAlign: "left",
          maxWidth: "50%",
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
            textAlign: "left",
            whiteSpace: "normal",
            boxSizing: "border-box",
            WebkitFontSmoothing: "antialiased",
            display: "block",
            marginBottom: "16px",
            wordBreak: "break-word",
            overflowWrap: "break-word",
          }}
        >
          Ditch the lenders and reclaim your freedom.
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
            textAlign: "left",
            display: "block",
          }}
        >
         A preview is worth a thousand word, go over a demo Cube in motion, from pooled contributions to randomized payouts across cycles.
        </span>
        
        {/* Sign up Button */}
        <a
          href="#waitlist"
          style={{
            opacity: 0.85,
            textDecoration: "none",
            alignItems: "center",
            alignSelf: "flex-start",
            borderRadius: "36px",
            boxSizing: "border-box",
            display: "inline-flex",
            height: "44px",
            justifyContent: "center",
            overflow: "hidden",
            padding: "0px 32px",
            position: "relative",
            textAlign: "left",
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
