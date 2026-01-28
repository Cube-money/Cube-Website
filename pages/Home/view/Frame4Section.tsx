export default function Frame4Section() {
  return (
    <>
      <style jsx>{`
        .frame4-text-container {
          left: 50%;
          transform: translate(-50%, -50%);
          align-items: center;
          text-align: center;
        }
        @media (min-width: 900px) {
          .frame4-text-container {
            left: 5%;
            transform: translateY(-50%);
            align-items: flex-start;
            text-align: left;
          }
        }
        .frame4-heading {
          text-align: center;
        }
        @media (min-width: 900px) {
          .frame4-heading {
            text-align: left;
          }
        }
        .frame4-heading br {
          display: none;
        }
        @media (min-width: 900px) {
          .frame4-heading br {
            display: block;
          }
        }
        .frame4-subtext {
          text-align: center;
        }
        @media (min-width: 900px) {
          .frame4-subtext {
            text-align: left;
          }
        }
        .frame4-button {
          align-self: center;
        }
        @media (min-width: 900px) {
          .frame4-button {
            align-self: flex-start;
          }
        }
        .frame4-phone-desktop {
          display: none;
        }
        @media (min-width: 900px) {
          .frame4-phone-desktop {
            display: block;
          }
        }
        .frame4-phone-mobile {
          display: block;
        }
        @media (min-width: 900px) {
          .frame4-phone-mobile {
            display: none;
          }
        }
      `}</style>
    <section
      className="relative w-full h-screen overflow-hidden border-t border-gray-500"
      style={{
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
      
      {/* Phone overlay - right aligned on desktop only */}
      <img
        src="/Home/Frame4/phoneframe4.png"
        alt="Phone"
        className="frame4-phone-desktop"
        style={{
          position: "absolute",
          top: "50%",
          right: "clamp(20px, 10vw, 200px)",
          transform: "translateY(-50%)",
          height: "80%",
          width: "auto",
          objectFit: "contain",
          objectPosition: "right center",
          zIndex: 2,
        }}
      />
      
      {/* Text Container - left-aligned on desktop, centered on mobile */}
      <div
        className="frame4-text-container"
        style={{
          position: "absolute",
          top: "50%",
          zIndex: 3,
          display: "flex",
          flexDirection: "column",
          width: "calc(100% - 32px)",
          maxWidth: "clamp(90%, 45vw, 50%)",
          padding: "0 clamp(16px, 3vw, 0)",
        }}
      >
        {/* Main Heading */}
        <div
          className="frame4-heading"
          style={{
            fontFamily: 'var(--font-instrument-serif), "Instrument Serif", "Instrument Serif Placeholder", serif',
            fontStyle: "normal",
            fontWeight: 400,
            color: "rgb(255, 255, 255)",
            fontSize: "clamp(32px, 7vw, 88px)",
            letterSpacing: "-0.02em",
            lineHeight: "100%",
            whiteSpace: "normal",
            boxSizing: "border-box",
            WebkitFontSmoothing: "antialiased",
            display: "block",
            marginBottom: "clamp(12px, 2vh, 16px)",
            wordBreak: "break-word",
            overflowWrap: "break-word",
            width: "100%",
          }}
        >
          Ditch the lenders and<span className="hidden md:inline"><br /></span> reclaim your freedom.
        </div>
        
        {/* Subtext */}
        <span
          className="frame4-subtext"
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
            display: "block",
          }}
        >
         A preview is worth a thousand word, go over a demo Cube in motion, from pooled contributions to randomized payouts across cycles.
        </span>
        
        {/* Sign up Button */}
        <a
          href="#waitlist"
          className="frame4-button"
          style={{
            opacity: 0.85,
            textDecoration: "none",
            alignItems: "center",
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
            marginBottom: "clamp(24px, 4vh, 0)",
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

        {/* Phone image - shown below text on mobile only */}
        <img
          src="/Home/Frame4/phoneframe4.png"
          alt="Phone"
          className="frame4-phone-mobile md:hidden"
          style={{
            width: "clamp(280px, 70vw, 400px)",
            height: "auto",
            objectFit: "contain",
            marginTop: "clamp(24px, 5vh, 40px)",
            alignSelf: "center",
          }}
        />
      </div>
    </section>
    </>
  );
}
