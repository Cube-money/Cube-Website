export default function Support() {
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
        src="/Home/frame2/Group 6.png"
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
      
      {/* Left-aligned Text Container */}
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
            fontSize: "clamp(64px, 10vw, 120px)",
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
          How can we help?
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
         Contact our support team and with any questions or queries you may have.
        </span>
        
        {/* Contact Boxes */}
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            gap: "24px",
            marginTop: "32px",
          }}
        >
          {/* Phone Box */}
          <div
            style={{
              backgroundColor: "transparent",
              border: "1px solid rgb(255, 255, 255)",
              borderRadius: "8px",
              padding: "24px",
              width: "300px",
              minHeight: "180px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "flex-start",
              transition: "transform 0.3s ease",
              cursor: "pointer",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "scale(1.05)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "scale(1)";
            }}
          >
            <img
              src="/phone.png"
              alt="Phone"
              style={{ width: "40px", height: "40px", marginBottom: "12px", filter: "brightness(0) invert(1) drop-shadow(0 0 0.5px white)" }}
            />
            <h3
              style={{
                fontSize: "18px",
                fontWeight: 600,
                color: "rgb(255, 255, 255)",
                marginBottom: "8px",
                marginTop: "20px",
                fontFamily: "Inter, sans-serif",
              }}
            >
              Phone
            </h3>
            <p
              style={{
                fontSize: "16px",
                color: "rgb(255, 255, 255)",
                margin: 0,
                fontFamily: "Inter, sans-serif",
              }}
            >
              +1 (555) 123-4567
            </p>
          </div>

          {/* Email Box */}
          <div
            style={{
              backgroundColor: "transparent",
              border: "1px solid rgb(255, 255, 255)",
              borderRadius: "8px",
              padding: "24px",
              width: "300px",
              minHeight: "180px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "flex-start",
              transition: "transform 0.3s ease",
              cursor: "pointer",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "scale(1.05)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "scale(1)";
            }}
          >
            <img
              src="/message.png"
              alt="Email"
              style={{ width: "40px", height: "40px", marginBottom: "12px", filter: "brightness(0) invert(1) drop-shadow(0 0 0.5px white)" }}
            />
            <h3
              style={{
                fontSize: "18px",
                fontWeight: 600,
                color: "rgb(255, 255, 255)",
                marginBottom: "8px",
                marginTop: "20px",
                fontFamily: "Inter, sans-serif",
              }}
            >
              Email
            </h3>
            <p
              style={{
                fontSize: "16px",
                color: "rgb(255, 255, 255)",
                margin: 0,
                fontFamily: "Inter, sans-serif",
              }}
            >
              support@cubemoney.io
            </p>
          </div>

          {/* Third Box */}
          <div
            style={{
              backgroundColor: "transparent",
              border: "1px solid rgb(255, 255, 255)",
              borderRadius: "8px",
              padding: "24px",
              width: "300px",
              minHeight: "180px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "flex-start",
              transition: "transform 0.3s ease",
              cursor: "pointer",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "scale(1.05)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "scale(1)";
            }}
          >
            <img
              src="/explore.png"
              alt="Explore"
              style={{ width: "40px", height: "40px", marginBottom: "12px", filter: "brightness(0) invert(1) drop-shadow(0 0 0.5px white)" }}
            />
            <h3
              style={{
                fontSize: "18px",
                fontWeight: 600,
                color: "rgb(255, 255, 255)",
                marginBottom: "8px",
                marginTop: "20px",
                fontFamily: "Inter, sans-serif",
              }}
            >
              Explore the Library
            </h3>
            <p
              style={{
                fontSize: "16px",
                color: "rgb(255, 255, 255)",
                margin: 0,
                fontFamily: "Inter, sans-serif",
              }}
            >
              Not sure where to start? The lessons have you covered.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
