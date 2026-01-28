export default function HeroSection() {
  return (
    <section
      style={{
        position: "relative",
        width: "100%",
        height: "100vh",
        overflow: "hidden",
      }}
    >
      {/* Full-screen Video Background */}
      <video
        autoPlay
        loop
        muted
        playsInline
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover",
          zIndex: 0,
        }}
      >
        <source src="/Home/Hero/HomeHero.mp4" type="video/mp4" />
      </video>
      
      {/* Dark overlay - 10% opacity */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundColor: "rgba(0, 0, 0, 0.4)",
          zIndex: 1,
        }}
      />

      {/* Left-aligned Text Container */}
      <div
        style={{
          position: "absolute",
          top: "72%",
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
            fontSize: "clamp(40px, 6.5vw, 72px)",
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
          Be your own bank.
        </div>

        {/* Subtext */}
        <span
          style={{
            fontFamily: "Inter, sans-serif",
            fontSize: "18px",
            fontWeight: 400,
            letterSpacing: "-0.25px",
            lineHeight: "26px",
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
          Cube turns your circle into a financial engine
          Pool money together. Get access when you need it. Grow faster.
          No interest. No banks. No limits.
        </span>

        {/* Buttons */}
        <div style={{ display: "flex", gap: "12px", alignItems: "center", flexWrap: "wrap" }}>
          <a
            href="#"
            style={{
              textDecoration: "none",
              alignItems: "center",
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
              backgroundColor: "rgba(0, 0, 0, 0.4)",
              border: "1px solid rgba(255, 255, 255, 0.3)",
              color: "rgb(255, 255, 255)",
              cursor: "pointer",
              WebkitFontSmoothing: "antialiased",
            }}
          >
            <span
              style={{
                fontFamily: "Phonic, Helvetica, system-ui, -apple-system, 'system-ui', Arial, sans-serif",
                fontSize: "14px",
                fontWeight: 400,
                letterSpacing: "-0.25px",
                lineHeight: "22px",
                margin: 0,
                fontStyle: "normal",
                WebkitFontSmoothing: "antialiased",
              }}
            >
              Learn more
            </span>
          </a>
          <a
            href="#waitlist"
            style={{
              opacity: 0.85,
              textDecoration: "none",
              alignItems: "center",
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
                fontSize: "14px",
                fontWeight: 400,
                letterSpacing: "-0.25px",
                lineHeight: "22px",
                margin: 0,
                fontStyle: "normal",
                WebkitFontSmoothing: "antialiased",
              }}
            >
              Start Your Cube
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}
