export default function BottomCta() {
  return (
    <>
      <style jsx>{`
        .cta-section {
          background: linear-gradient(180deg, #fafbfc 0%, #f0f2f5 100%);
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
        .feature-card {
          transition: all 0.2s ease;
        }
        .feature-card:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 24px rgba(0, 0, 0, 0.08);
        }
      `}</style>
      
      <section className="cta-section relative w-full overflow-hidden">
        {/* Subtle background pattern */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage: "radial-gradient(circle at 20% 50%, rgba(204, 255, 0, 0.08) 0%, transparent 50%), radial-gradient(circle at 80% 80%, rgba(204, 255, 0, 0.05) 0%, transparent 40%)",
            zIndex: 0,
          }}
        />
        
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
              {/* Badge */}
              <div
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "8px",
                  padding: "8px 16px",
                  backgroundColor: "rgba(204, 255, 0, 0.15)",
                  borderRadius: "100px",
                  marginBottom: "24px",
                  width: "fit-content",
                }}
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" fill="#1a1a1a"/>
                </svg>
                <span
                  style={{
                    fontFamily: "Inter, sans-serif",
                    fontSize: "13px",
                    fontWeight: 600,
                    color: "#1a1a1a",
                    letterSpacing: "0.02em",
                  }}
                >
                  Built for transparency
                </span>
              </div>

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
                  { icon: "✓", text: "No hidden fees or interest" },
                  { icon: "✓", text: "Group-verified contributions" },
                  { icon: "✓", text: "Transparent payout schedule" },
                ].map((feature, i) => (
                  <div
                    key={i}
                    className="feature-card"
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "12px",
                      padding: "14px 18px",
                      backgroundColor: "#ffffff",
                      borderRadius: "12px",
                      boxShadow: "0 2px 8px rgba(0, 0, 0, 0.04)",
                      border: "1px solid rgba(0, 0, 0, 0.04)",
                    }}
                  >
                    <div
                      style={{
                        width: "24px",
                        height: "24px",
                        borderRadius: "50%",
                        backgroundColor: "rgba(204, 255, 0, 0.3)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        fontSize: "12px",
                        fontWeight: 700,
                        color: "#1a1a1a",
                        flexShrink: 0,
                      }}
                    >
                      {feature.icon}
                    </div>
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

              {/* CTA Buttons */}
              <div
                style={{
                  display: "flex",
                  gap: "12px",
                  flexWrap: "wrap",
                }}
              >
                <a
                  href="#waitlist"
                  className="cta-button"
                  style={{
                    textDecoration: "none",
                    display: "inline-flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: "8px",
                    padding: "16px 32px",
                    backgroundColor: "#1a1a1a",
                    borderRadius: "12px",
                    color: "#ffffff",
                    fontFamily: "Inter, sans-serif",
                    fontSize: "15px",
                    fontWeight: 600,
                    border: "none",
                    cursor: "pointer",
                  }}
                >
                  Join the waitlist
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </a>
                <a
                  href="/stories"
                  className="cta-button"
                  style={{
                    textDecoration: "none",
                    display: "inline-flex",
                    alignItems: "center",
                    justifyContent: "center",
                    padding: "16px 28px",
                    backgroundColor: "transparent",
                    borderRadius: "12px",
                    color: "#1a1a1a",
                    fontFamily: "Inter, sans-serif",
                    fontSize: "15px",
                    fontWeight: 600,
                    border: "1px solid rgba(0, 0, 0, 0.12)",
                    cursor: "pointer",
                  }}
                >
                  Read stories
                </a>
              </div>
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
              {/* Glow effect behind phone */}
              <div
                style={{
                  position: "absolute",
                  top: "50%",
                  left: "50%",
                  transform: "translate(-50%, -50%)",
                  width: "80%",
                  height: "80%",
                  background: "radial-gradient(circle, rgba(204, 255, 0, 0.2) 0%, transparent 70%)",
                  borderRadius: "50%",
                  filter: "blur(40px)",
                  zIndex: 0,
                }}
              />
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
