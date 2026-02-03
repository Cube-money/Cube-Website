export default function BottomCta() {
  return (
    <>
      <style jsx>{`
        .cta-section {
          background: #ffffff;
        }
        .cta-container {
          flex-direction: column-reverse;
          gap: 32px;
        }
        @media (min-width: 900px) {
          .cta-container {
            flex-direction: row;
            gap: 64px;
          }
        }
        .cta-content {
          align-items: center;
          text-align: center;
        }
        @media (min-width: 900px) {
          .cta-content {
            align-items: flex-start;
            text-align: left;
          }
        }
        .cta-phone-wrapper {
          justify-content: center;
        }
        @media (min-width: 900px) {
          .cta-phone-wrapper {
            justify-content: flex-end;
          }
        }
        .cta-button {
          transition: all 0.2s ease;
        }
        .cta-button:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 24px rgba(0, 0, 0, 0.12);
        }
      `}</style>
      
      <section className="cta-section relative w-full overflow-hidden">
        <div
          style={{
            position: "relative",
            zIndex: 1,
            maxWidth: "1200px",
            margin: "0 auto",
            padding: "clamp(64px, 10vh, 120px) clamp(20px, 5vw, 48px)",
            minHeight: "clamp(600px, 85vh, 900px)",
            display: "flex",
            alignItems: "center",
          }}
        >
          <div
            className="cta-container"
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              width: "100%",
            }}
          >
            {/* Left content */}
            <div
              className="cta-content"
              style={{
                display: "flex",
                flexDirection: "column",
                flex: "1 1 50%",
                maxWidth: "540px",
              }}
            >
              {/* Small label (Inter) */}
              <span
                style={{
                  fontFamily: "Inter, sans-serif",
                  fontSize: "11px",
                  fontWeight: 500,
                  letterSpacing: "0.2em",
                  textTransform: "uppercase",
                  color: "rgba(0, 0, 0, 0.5)",
                  WebkitFontSmoothing: "antialiased",
                  marginBottom: "clamp(12px, 2vh, 18px)",
                  display: "block",
                }}
              >
                Get started
              </span>

              {/* Headline (Instrument Serif only) */}
              <h2
                style={{
                  fontFamily: 'var(--font-instrument-serif), "Instrument Serif", Georgia, serif',
                  fontWeight: 400,
                  color: "#1a1a1a",
                  fontSize: "clamp(32px, 5.5vw, 64px)",
                  letterSpacing: "-0.02em",
                  lineHeight: "105%",
                  margin: "0 0 clamp(14px, 2.5vh, 22px) 0",
                }}
              >
                Ready to save together?
              </h2>

              {/* Body (Inter) */}
              <p
                style={{
                  fontFamily: "Inter, sans-serif",
                  fontSize: "clamp(16px, 2.4vw, 20px)",
                  fontWeight: 400,
                  letterSpacing: "-0.25px",
                  lineHeight: "clamp(24px, 3.2vw, 30px)",
                  color: "rgba(0, 0, 0, 0.7)",
                  margin: "0 0 clamp(20px, 3vh, 28px) 0",
                  maxWidth: "520px",
                  WebkitFontSmoothing: "antialiased",
                }}
              >
                Cube is designed so expectations are clear from day one. Your group agrees on contributions, timing, and payout order before the cycle begins.
              </p>

              {/* Feature highlights (Inter) */}
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "10px",
                  marginBottom: "clamp(24px, 4vh, 36px)",
                  width: "100%",
                  maxWidth: "400px",
                }}
              >
                {[
                  { text: "No hidden fees or interest" },
                  { text: "Group verified contributions" },
                  { text: "Transparent payout schedule" },
                ].map((feature, i) => (
                  <div
                    key={i}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "10px",
                    }}
                  >
                    <span
                      style={{
                        fontFamily: "Inter, sans-serif",
                        fontSize: "14px",
                        fontWeight: 500,
                        color: "#22c55e",
                        flexShrink: 0,
                      }}
                    >
                      ✓
                    </span>
                    <span
                      style={{
                        fontFamily: "Inter, sans-serif",
                        fontSize: "14px",
                        fontWeight: 500,
                        color: "rgba(0, 0, 0, 0.75)",
                        WebkitFontSmoothing: "antialiased",
                      }}
                    >
                      {feature.text}
                    </span>
                  </div>
                ))}
              </div>

              {/* CTA Button (same as Frame4) */}
              <a
                href="/signup"
                className="cta-button self-center min-[900px]:self-start"
                style={{
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
                }}
              >
                <span
                  style={{
                    fontFamily: "Phonic, Helvetica, system-ui, -apple-system, 'system-ui', Arial, sans-serif",
                    fontSize: "clamp(15px, 2vw, 17px)",
                    fontWeight: 500,
                    letterSpacing: "-0.25px",
                    lineHeight: "clamp(20px, 3vw, 24px)",
                    margin: 0,
                    fontStyle: "normal",
                    WebkitFontSmoothing: "antialiased",
                  }}
                >
                  Start my Cube
                </span>
              </a>

              {/* Microtext (Inter) */}
              <span
                style={{
                  fontFamily: "Inter, sans-serif",
                  fontSize: "13px",
                  fontWeight: 400,
                  letterSpacing: "-0.01em",
                  color: "rgba(0, 0, 0, 0.45)",
                  WebkitFontSmoothing: "antialiased",
                  marginTop: "clamp(12px, 2vh, 18px)",
                  display: "block",
                }}
              >
                No debt. No interest. Just structure.
              </span>
            </div>

            {/* Right - Phone mockup */}
            <div
              className="cta-phone-wrapper"
              style={{
                display: "flex",
                flex: "1 1 45%",
                position: "relative",
              }}
            >
              <img
                src="/howitworks/howbt.png"
                alt="Cube app interface"
                style={{
                  position: "relative",
                  zIndex: 1,
                  height: "clamp(400px, 65vh, 600px)",
                  width: "auto",
                  objectFit: "contain",
                  filter: "drop-shadow(0 24px 48px rgba(0, 0, 0, 0.12))",
                }}
              />
            </div>
          </div>
        </div>

      </section>
    </>
  );
}
