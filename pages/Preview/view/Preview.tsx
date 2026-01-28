import Image from "next/image";

export default function Preview() {
  return (
    <section
      style={{
        position: "relative",
        width: "100%",
        height: "100vh",
        overflow: "hidden",
        borderTop: "1px solid rgb(128, 128, 128)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "black",
      }}
    >
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
      {/* Left-positioned image */}
      <div
        style={{
          position: "absolute",
          left: "5%",
          top: 0,
          zIndex: 2,
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "flex-start",
        }}
      >
        <Image
          src="/preview/Demoflowerleft.png"
          alt="Flower"
          width={800}
          height={1200}
          style={{
            maxWidth: "100%",
            maxHeight: "100%",
            height: "auto",
            width: "auto",
            objectFit: "contain",
          }}
        />
      </div>
      {/* Center content */}
      <div
        style={{
          position: "absolute",
          top: "40%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          zIndex: 3,
          textAlign: "center",
        }}
      >
        <div
          style={{
            fontFamily: 'var(--font-instrument-serif), "Instrument Serif", "Instrument Serif Placeholder", serif',
            fontStyle: "normal",
            fontWeight: 400,
            color: "rgb(255, 255, 255)",
            fontSize: "clamp(28px, 4.5vw, 56px)",
            letterSpacing: "-0.02em",
            lineHeight: "100%",
            textAlign: "center",
            whiteSpace: "pre-line",
            boxSizing: "border-box",
            WebkitFontSmoothing: "antialiased",
            display: "block",
            wordBreak: "break-word",
            overflowWrap: "break-word",
            marginBottom: "16px",
          }}
        >
          This is what cube<br />coordination looks like.
        </div>
        
        {/* Subtext */}
        <span
          style={{
            fontFamily: "Inter, sans-serif",
            fontSize: "18px",
            fontWeight: 400,
            letterSpacing: "-0.25px",
            lineHeight: "26px",
            margin: "0 auto",
            fontStyle: "normal",
            WebkitFontSmoothing: "antialiased",
            color: "rgb(255, 255, 255)",
            maxWidth: "600px",
            display: "block",
            textAlign: "center",
            width: "100%",
          }}
        >
          In this example Cube, imagine you're saving for a new car.<br />
          On your own, reaching <span style={{ color: "#C1FF35" }}>$10,000</span> can take years.<br />
    
        </span>
        
      </div>

      {/* Vertical dashed line with gradient */}
      <div
        style={{
          position: "absolute",
          left: "50%",
          top: "60%",
          transform: "translateX(-50%)",
          width: "1px",
          height: "45vh",
          zIndex: 3,
          background: "linear-gradient(to bottom, #ffffff, #000000)",
          maskImage: "repeating-linear-gradient(to bottom, transparent, transparent 4px, black 4px, black 12px)",
          WebkitMaskImage: "repeating-linear-gradient(to bottom, transparent, transparent 4px, black 4px, black 12px)",
        }}
      />

      {/* Right-positioned image */}
      <div
        style={{
          position: "absolute",
          right: "5%",
          top: 0,
          zIndex: 2,
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "flex-end",
        }}
      >
        <Image
          src="/preview/Demoflowerright.png"
          alt="Flower"
          width={800}
          height={1200}
          style={{
            maxWidth: "100%",
            maxHeight: "100%",
            height: "auto",
            width: "auto",
            objectFit: "contain",
          }}
        />
      </div>
    </section>
  );
}
