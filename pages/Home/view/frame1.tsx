export default function WhatIsCubeSection() {
  return (
    <>
      <style jsx>{`
        .frame1-stack {
          align-items: center;
          text-align: center;
        }
        .frame1-section {
          min-height: 100svh;
        }
        @media (max-width: 480px) {
          .frame1-section {
            min-height: 700px;
          }
        }
        @media (max-width: 767px) {
          .frame1-bg {
            object-position: 60% center;
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
          padding: "clamp(48px, 10vh, 80px) 20px",
        }}
      >
        {/* Full-screen Image Background */}
        <img
          src="/Home/frame2/Group 24.png"
          alt=""
          aria-hidden
          className="frame1-bg"
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

        {/* Dark overlay for text readability */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(0, 0, 0, 0.35)",
            zIndex: 1,
          }}
        />

        {/* Centered stack: label → heading → body → CTA → microtext */}
        <div
          className="frame1-stack"
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            zIndex: 3,
            display: "flex",
            flexDirection: "column",
            width: "100%",
            maxWidth: "min(720px, calc(100% - 24px))",
            padding: "0 8px",
          }}
        >
          {/* Small Label */}
          <span
            style={{
              fontFamily: "Inter, sans-serif",
              fontSize: "11px",
              fontWeight: 500,
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              color: "rgb(255, 255, 255)",
              WebkitFontSmoothing: "antialiased",
              marginBottom: "clamp(12px, 2vh, 18px)",
            }}
          >
            A new way to save
          </span>

          {/* Headline */}
          <div
            style={{
              fontFamily:
                'var(--font-instrument-serif), "Instrument Serif", "Instrument Serif Placeholder", serif',
              fontStyle: "normal",
              fontWeight: 400,
              color: "rgb(255, 255, 255)",
              fontSize: "clamp(36px, 6vw, 72px)",
              letterSpacing: "-0.02em",
              lineHeight: "105%",
              WebkitFontSmoothing: "antialiased",
              marginBottom: "clamp(14px, 2.5vh, 22px)",
              whiteSpace: "normal",
              boxSizing: "border-box",
              display: "block",
              wordBreak: "break-word",
              overflowWrap: "break-word",
              width: "100%",
            }}
          >
            Rewrite the rules of money together.
          </div>

          {/* Body */}
          <span
            style={{
              display: "block",
              fontFamily: "Inter, sans-serif",
              fontSize: "clamp(16px, 2.4vw, 20px)",
              fontWeight: 400,
              letterSpacing: "-0.25px",
              lineHeight: "clamp(24px, 3.2vw, 30px)",
              color: "rgba(255, 255, 255, 0.85)",
              WebkitFontSmoothing: "antialiased",
              maxWidth: "560px",
            }}
          >
            When people coordinate, agree on timing, and move together, a system emerges. One that's fair, predictable, and owned by the group itself.
          </span>

          {/* CTA Button */}
          <a
            href="/how-it-works"
            style={{
              alignSelf: "center",
              textDecoration: "none",
              alignItems: "center",
              borderRadius: "clamp(28px, 3vw, 36px)",
              boxSizing: "border-box",
              display: "inline-flex",
              height: "clamp(44px, 5.5vh, 50px)",
              justifyContent: "center",
              overflow: "hidden",
              padding: "0px clamp(24px, 3.5vw, 36px)",
              position: "relative",
              textAlign: "center",
              whiteSpace: "nowrap",
              backgroundColor: "#C1FF35",
              border: "none",
              color: "rgb(17, 14, 8)",
              cursor: "pointer",
              WebkitFontSmoothing: "antialiased",
              marginTop: "clamp(20px, 3.5vh, 32px)",
              transition: "transform 0.2s ease, box-shadow 0.2s ease",
            }}
          >
            <span
              style={{
                fontFamily:
                  "Phonic, Helvetica, system-ui, -apple-system, 'system-ui', Arial, sans-serif",
                fontSize: "clamp(15px, 2vw, 17px)",
                fontWeight: 500,
                letterSpacing: "-0.25px",
                lineHeight: "clamp(20px, 3vw, 24px)",
                margin: 0,
                fontStyle: "normal",
                WebkitFontSmoothing: "antialiased",
              }}
            >
              Learn more
            </span>
          </a>

          {/* Microtext */}
          <span
            style={{
              fontFamily: "Inter, sans-serif",
              fontSize: "13px",
              fontWeight: 400,
              letterSpacing: "-0.01em",
              color: "rgba(255, 255, 255, 0.5)",
              WebkitFontSmoothing: "antialiased",
              marginTop: "clamp(12px, 2vh, 18px)",
            }}
          >
            Structure over luck. Coordination over debt.
          </span>
        </div>
      </section>
    </>
  );
}
