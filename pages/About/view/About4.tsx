"use client";

export default function About4() {
  const values = [
    {
      title: "Clarity",
      description: "Every rule, every payout, every member status, visible to all.",
    },
    {
      title: "Fairness",
      description: "Access rotates. No one jumps the line. The system treats everyone equally.",
    },
    {
      title: "Shared Responsibility",
      description: "Coordination over control. The group moves together, or not at all.",
    },
    {
      title: "Long-term Thinking",
      description: "We build for trust that compounds, not growth that extracts.",
    },
  ];

  return (
    <section
      style={{
        position: "relative",
        width: "100%",
        minHeight: "100vh",
        overflow: "hidden",
        backgroundColor: "#fff",
        borderTop: "1px solid rgba(0, 0, 0, 0.1)",
      }}
    >
      {/* Main content - reversed layout from About3 */}
      <div
        className="flex flex-col-reverse lg:flex-row min-h-screen"
      >
        {/* Left side - Image placeholder */}
        <div
          className="lg:w-[45%] relative"
          style={{
            minHeight: "clamp(300px, 50vh, 500px)",
          }}
        >
          {/* Placeholder image container */}
          <div
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              backgroundColor: "#f5f5f5",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            {/* Placeholder - replace with actual image */}
            <img
              src="/AboutUs/aboutusimage.png"
              alt="Values"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                objectPosition: "center",
              }}
            />
            {/* Gradient overlay for smooth blend */}
            <div
              className="hidden lg:block"
              style={{
                position: "absolute",
                top: 0,
                right: 0,
                bottom: 0,
                width: "30%",
                background: "linear-gradient(to left, #ffffff 0%, rgba(255,255,255,0) 100%)",
                pointerEvents: "none",
              }}
            />
          </div>
        </div>

        {/* Right side - Values content */}
        <div
          className="lg:w-[55%] flex items-center"
          style={{
            padding: "clamp(48px, 8vh, 96px) clamp(24px, 5vw, 80px)",
          }}
        >
          <div
            style={{
              maxWidth: "560px",
              marginLeft: "auto",
              marginRight: "auto",
            }}
          >
            {/* Small label */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "12px",
                marginBottom: "clamp(20px, 3vh, 32px)",
              }}
            >
              <div
                style={{
                  width: "32px",
                  height: "1px",
                  background: "linear-gradient(90deg, rgba(0, 0, 0, 0.4) 0%, transparent 100%)",
                }}
              />
              <span
                style={{
                  fontFamily: "Inter, sans-serif",
                  fontSize: "11px",
                  fontWeight: 500,
                  letterSpacing: "0.2em",
                  textTransform: "uppercase",
                  color: "rgba(0, 0, 0, 0.45)",
                  WebkitFontSmoothing: "antialiased",
                }}
              >
                Values & Direction
              </span>
            </div>

            {/* Main statement */}
            <h2
              style={{
                fontFamily: 'var(--font-instrument-serif), "Instrument Serif", Georgia, serif',
                fontSize: "clamp(28px, 4vw, 48px)",
                fontWeight: 400,
                letterSpacing: "-0.02em",
                lineHeight: 1.15,
                margin: 0,
                color: "#000",
                WebkitFontSmoothing: "antialiased",
                marginBottom: "clamp(16px, 2.5vh, 24px)",
              }}
            >
              The goal isn't to replace institutions,  it's to give people another way to move forward together.
            </h2>

            {/* Supporting text */}
            <p
              style={{
                fontFamily: "Inter, sans-serif",
                fontSize: "clamp(15px, 1.8vw, 18px)",
                fontWeight: 400,
                letterSpacing: "-0.01em",
                lineHeight: 1.7,
                margin: 0,
                color: "rgba(0, 0, 0, 0.55)",
                WebkitFontSmoothing: "antialiased",
                marginBottom: "clamp(32px, 5vh, 48px)",
              }}
            >
              Cube is built around clarity, fairness, and shared responsibility. These aren't features. They're the foundation.
            </p>

            {/* Values grid */}
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(2, 1fr)",
                gap: "clamp(20px, 3vw, 32px)",
                marginBottom: "clamp(32px, 5vh, 48px)",
              }}
            >
              {values.map((value, i) => (
                <div
                  key={i}
                  style={{
                    paddingBottom: "clamp(16px, 2vh, 24px)",
                    borderBottom: "1px solid rgba(0, 0, 0, 0.08)",
                  }}
                >
                  <h3
                    style={{
                      fontFamily: 'var(--font-instrument-serif), "Instrument Serif", Georgia, serif',
                      fontSize: "clamp(18px, 2vw, 22px)",
                      fontWeight: 400,
                      letterSpacing: "-0.01em",
                      lineHeight: 1.2,
                      margin: 0,
                      color: "#000",
                      WebkitFontSmoothing: "antialiased",
                      marginBottom: "8px",
                    }}
                  >
                    {value.title}
                  </h3>
                  <p
                    style={{
                      fontFamily: "Inter, sans-serif",
                      fontSize: "clamp(13px, 1.4vw, 15px)",
                      fontWeight: 400,
                      letterSpacing: "-0.01em",
                      lineHeight: 1.5,
                      margin: 0,
                      color: "rgba(0, 0, 0, 0.5)",
                      WebkitFontSmoothing: "antialiased",
                    }}
                  >
                    {value.description}
                  </p>
                </div>
              ))}
            </div>

            {/* Soft CTA */}
            <a
              href="/how-it-works"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                fontFamily: "Inter, sans-serif",
                fontSize: "15px",
                fontWeight: 500,
                letterSpacing: "-0.01em",
                color: "#000",
                textDecoration: "none",
                WebkitFontSmoothing: "antialiased",
                transition: "opacity 0.2s ease",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.opacity = "0.6";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.opacity = "1";
              }}
            >
              Learn how Cube works
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="5" y1="12" x2="19" y2="12" />
                <polyline points="12 5 19 12 12 19" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
