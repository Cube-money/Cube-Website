import Image from "next/image";

export default function Frame4Section() {
  return (
    <>
      <style jsx>{`
        .frame4-section {
          height: 100svh;
        }
        @media (max-width: 480px) {
          .frame4-section {
            height: auto;
            min-height: 850px;
          }
        }
        .frame4-phone-desktop {
          display: block;
        }
        @media (max-width: 480px) {
          .frame4-phone-desktop {
            display: none;
          }
        }
        .frame4-text-container {
          top: 50%;
          left: 5%;
          transform: translateY(-50%);
          max-width: 50%;
          align-items: flex-start;
          text-align: left;
        }
        @media (max-width: 480px) {
          .frame4-text-container {
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            max-width: 90%;
            width: 90%;
            align-items: center;
            text-align: center;
          }
        }
        .frame4-heading {
          font-size: 88px;
          text-align: left;
        }
        @media (max-width: 480px) {
          .frame4-heading {
            font-size: 36px;
            text-align: center;
          }
        }
        .frame4-subtext {
          font-size: 22px;
          line-height: 30px;
          text-align: left;
        }
        @media (max-width: 480px) {
          .frame4-subtext {
            font-size: 16px;
            line-height: 24px;
            text-align: center;
          }
        }
        .frame4-btn {
          align-self: flex-start;
        }
        @media (max-width: 480px) {
          .frame4-btn {
            align-self: center;
          }
        }
        .frame4-phone-mobile {
          display: none;
        }
        @media (max-width: 480px) {
          .frame4-phone-mobile {
            display: block;
          }
        }
      `}</style>
    <section
      className="frame4-section relative w-full overflow-hidden border-t border-gray-500"
      style={{
        borderTop: "1px solid rgb(128, 128, 128)",
      }}
    >
      {/* Full-screen Image Background */}
      <Image
        src="/Home/frame2/Group 7.png"
        alt="What is Cube"
        fill
        priority={false}
        style={{
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
      
      {/* Phone overlay - right aligned, hidden on mobile */}
      <div
        className="frame4-phone-desktop"
        style={{
          position: "absolute",
          top: "50%",
          right: "clamp(20px, 10vw, 200px)",
          transform: "translateY(-50%)",
          height: "80%",
          width: "300px",
          zIndex: 2,
        }}
      >
        <Image
          src="/Home/Frame4/phoneframe4.png"
          alt="Phone"
          fill
          priority={false}
          style={{
            objectFit: "contain",
            objectPosition: "right center",
          }}
        />
      </div>
      
      {/* Text Container - left-aligned on desktop, centered on mobile */}
      <div
        className="frame4-text-container"
        style={{
          position: "absolute",
          zIndex: 3,
          display: "flex",
          flexDirection: "column",
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
            letterSpacing: "-0.02em",
            lineHeight: "100%",
            whiteSpace: "normal",
            boxSizing: "border-box",
            WebkitFontSmoothing: "antialiased",
            display: "block",
            marginBottom: "16px",
            wordBreak: "break-word",
            overflowWrap: "break-word",
            width: "100%",
          }}
        >
          Ditch the lenders and<br /> reclaim your freedom.
        </div>
        
        {/* Subtext */}
        <span
          className="frame4-subtext"
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
            display: "block",
          }}
        >
         A preview is worth a thousand word, go over a demo Cube in motion, from pooled contributions to randomized payouts across cycles.
        </span>
        
        {/* Sign up Button */}
        <a
          href="#waitlist"
          className="frame4-btn"
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
              fontSize: "clamp(16px, 2vw, 18px)",
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
        <div
          className="frame4-phone-mobile"
          style={{
            width: "280px",
            height: "400px",
            position: "relative",
            marginTop: "32px",
            alignSelf: "center",
          }}
        >
          <Image
            src="/Home/Frame4/phoneframe4.png"
            alt="Phone"
            fill
            priority={false}
            style={{
              objectFit: "contain",
            }}
          />
        </div>
      </div>
    </section>
    </>
  );
}
