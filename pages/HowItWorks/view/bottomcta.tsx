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
              {/* Main Heading */}
              <h2
                style={{
                  fontFamily: 'var(--font-instrument-serif), "Instrument Serif", Georgia, serif',
                  fontWeight: 400,
                  color: "#1a1a1a",
                  fontSize: "clamp(32px, 5vw, 56px)",
                  letterSpacing: "-0.025em",
                  lineHeight: "1.1",
                  margin: "0 0 20px 0",
                }}
              >
                Ready to save
                <br />
                <span style={{ color: "#2d2d2d" }}>together?</span>
              </h2>

              {/* Subtext */}
              <p
                style={{
                  fontFamily: "Inter, sans-serif",
                  fontSize: "clamp(16px, 1.8vw, 18px)",
                  fontWeight: 400,
                  lineHeight: "1.65",
                  color: "#5c5c5c",
                  margin: "0 0 32px 0",
                  maxWidth: "460px",
                }}
              >
                Cube is designed so expectations are clear from day one. Your group agrees on contributions, timing, and payout order before the cycle begins.
              </p>

              {/* Feature highlights */}
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "12px",
                  marginBottom: "36px",
                  width: "100%",
                  maxWidth: "400px",
                }}
              >
                {[
                  { text: "No hidden fees or interest" },
                  { text: "Group-verified contributions" },
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
                        fontSize: "15px",
                        fontWeight: 500,
                        color: "#1a1a1a",
                        flexShrink: 0,
                      }}
                    >
                      ✓
                    </span>
                    <span
                      style={{
                        fontFamily: "Inter, sans-serif",
                        fontSize: "15px",
                        fontWeight: 500,
                        color: "#2d2d2d",
                      }}
                    >
                      {feature.text}
                    </span>
                  </div>
                ))}
              </div>

              {/* CTA Button */}
              <a
                href="/stories"
                className="cta-button self-center min-[900px]:self-start"
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
                  Create my cube
                </span>
              </a>
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
                src="/Home/Frame4/phoneframe4.png"
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

        {/* Bottom trust bar */}
        <div
          style={{
            borderTop: "1px solid rgba(0, 0, 0, 0.06)",
            backgroundColor: "rgba(255, 255, 255, 0.6)",
            backdropFilter: "blur(8px)",
            padding: "20px clamp(20px, 5vw, 48px)",
          }}
        >
          <div
            style={{
              maxWidth: "1200px",
              margin: "0 auto",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "clamp(24px, 5vw, 48px)",
              flexWrap: "wrap",
            }}
          >
            {[
              { value: "0%", label: "Interest" },
              { value: "100%", label: "Transparency" },
              { value: "24/7", label: "Access" },
            ].map((stat, i) => (
              <div
                key={i}
                style={{
                  display: "flex",
                  alignItems: "baseline",
                  gap: "8px",
                }}
              >
                <span
                  style={{
                    fontFamily: 'var(--font-instrument-serif), "Instrument Serif", Georgia, serif',
                    fontSize: "clamp(24px, 3vw, 32px)",
                    fontWeight: 400,
                    color: "#1a1a1a",
                  }}
                >
                  {stat.value}
                </span>
                <span
                  style={{
                    fontFamily: "Inter, sans-serif",
                    fontSize: "14px",
                    fontWeight: 500,
                    color: "#8c8c8c",
                    textTransform: "uppercase",
                    letterSpacing: "0.05em",
                  }}
                >
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
