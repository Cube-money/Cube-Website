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
          height: "clamp(840px, 100vh, 1120px)",
          borderTop: "1px solid rgb(128, 128, 128)",
          background: "linear-gradient(to bottom, #595653, #BFB9B2)",
        }}
      >
        {/* Editorial stack: label → headline → body → CTA → microtext → image */}
        <div
          className="fair-stack"
          style={{
            position: "absolute",
            top: "22%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            zIndex: 3,
            display: "flex",
            flexDirection: "column",
            width: "calc(100% - 32px)",
            maxWidth: "min(820px, 92%)",
            padding: "0 clamp(16px, 3vw, 0)",
          }}
        >
          {/* Headline (Instrument Serif, same as Frame4) */}
          <div
            style={{
              fontFamily:
                'var(--font-instrument-serif), "Instrument Serif", "Instrument Serif Placeholder", serif',
              fontStyle: "normal",
              fontWeight: 400,
              color: "rgb(255, 255, 255)",
              fontSize: "clamp(32px, 5.5vw, 64px)",
              letterSpacing: "-0.02em",
              lineHeight: "105%",
              WebkitFontSmoothing: "antialiased",
              marginTop: "clamp(12px, 2vh, 18px)",
              marginBottom: "clamp(14px, 2.5vh, 22px)",
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

          {/* Body (Inter, same size and look as Frame4) */}
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
              maxWidth: "640px",
              marginBottom: "clamp(10px, 1.5vh, 16px)",
            }}
          >
            Cube is structured so expectations are clear from the start. The group agrees on contribution amounts, timing, and order before the cycle begins, removing ambiguity and last-minute changes.
          </span>

          {/* CTA button (same as Frame4) */}
          <a
            href="/stories"
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
              marginTop: "clamp(16px, 3vh, 24px)",
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
              See the stories
            </span>
          </a>
        </div>

        {/* Phone image - anchored to bottom of section, bigger */}
        <img
          src="/howitworks/fairhow.png"
          alt="Cube app screen"
          style={{
            position: "absolute",
            bottom: 0,
            left: "50%",
            transform: "translateX(-50%)",
            height: "clamp(380px, 58vh, 580px)",
            width: "auto",
            objectFit: "contain",
            zIndex: 2,
          }}
        />
      </section>
    </>
  );
}
