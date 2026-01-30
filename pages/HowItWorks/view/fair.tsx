export default function Fair() {
  return (
    <>
      <style jsx>{`
        .fair-stack {
          align-items: center;
          text-align: center;
        }
      `}</style>
      <section
        className="relative w-full overflow-hidden border-t border-gray-500"
        style={{
          height: "clamp(780px, 95vh, 1040px)",
          borderTop: "1px solid rgb(128, 128, 128)",
          background: "linear-gradient(to bottom, #595653, #BFB9B2)",
        }}
      >
        {/* Centered stack: heading → subtext → CTA → image */}
        <div
          className="fair-stack"
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            zIndex: 3,
            display: "flex",
            flexDirection: "column",
            width: "calc(100% - 32px)",
            maxWidth: "min(640px, 90%)",
            padding: "0 clamp(16px, 3vw, 0)",
          }}
        >
          {/* Main Heading */}
          <div
            style={{
              fontFamily:
                'var(--font-instrument-serif), "Instrument Serif", "Instrument Serif Placeholder", serif',
              fontStyle: "normal",
              fontWeight: 400,
              color: "rgb(255, 255, 255)",
              fontSize: "clamp(28px, 4.2vw, 48px)",
              letterSpacing: "-0.02em",
              lineHeight: "110%",
              WebkitFontSmoothing: "antialiased",
              marginBottom: "clamp(10px, 1.8vh, 14px)",
              whiteSpace: "normal",
              boxSizing: "border-box",
              display: "block",
              wordBreak: "break-word",
              overflowWrap: "break-word",
              width: "100%",
            }}
          >
            Designed for fairness and clarity
          </div>

          {/* Subtext */}
          <span
            style={{
              display: "block",
              fontFamily: "Inter, sans-serif",
              fontSize: "clamp(16px, 2.4vw, 20px)",
              fontWeight: 400,
              letterSpacing: "-0.25px",
              lineHeight: "clamp(22px, 3vw, 28px)",
              color: "rgb(255, 255, 255)",
              WebkitFontSmoothing: "antialiased",
              maxWidth: "600px",
            }}
          >
           Cube is structured so expectations are clear from the start. The group agrees on contribution amounts, timing, and order before the cycle begins, removing ambiguity and last-minute changes.
          </span>

          {/* CTA */}
          <a
            href="/stories"
            style={{
              alignSelf: "center",
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
              backgroundColor: "rgb(255, 255, 255)",
              border: "1px solid rgb(255, 255, 255)",
              color: "rgb(17, 14, 8)",
              cursor: "pointer",
              WebkitFontSmoothing: "antialiased",
              outline: "rgb(17, 14, 8) none 0px",
              marginTop: "clamp(16px, 3vh, 24px)",
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
              See the stories
            </span>
          </a>

          {/* Phone image - smaller, below CTA in stack */}
          <img
            src="/Home/Frame4/phoneframe4.png"
            alt="Phone"
            style={{
              marginTop: "clamp(24px, 4vh, 40px)",
              height: "clamp(200px, 38vh, 320px)",
              width: "auto",
              objectFit: "contain",
              alignSelf: "center",
            }}
          />
        </div>
      </section>
    </>
  );
}
