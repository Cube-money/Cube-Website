"use client";

export default function About3() {
  return (
    <section
      style={{
        position: "relative",
        width: "100%",
        minHeight: "100vh",
        overflow: "hidden",
        background: "linear-gradient(to bottom, #7A9598 0%, #032F4B 50%, #060611 100%)",
        borderTop: "1px solid rgb(128, 128, 128)",
      }}
    >
      {/* Elegant gradient orb - top right */}
      <div
        style={{
          position: "absolute",
          top: "-20%",
          right: "-10%",
          width: "60%",
          height: "80%",
          background: "radial-gradient(ellipse at center, rgba(193, 255, 53, 0.06) 0%, transparent 60%)",
          pointerEvents: "none",
        }}
      />
      
      {/* Elegant gradient orb - bottom left */}
      <div
        style={{
          position: "absolute",
          bottom: "-30%",
          left: "-15%",
          width: "50%",
          height: "70%",
          background: "radial-gradient(ellipse at center, rgba(255, 255, 255, 0.03) 0%, transparent 60%)",
          pointerEvents: "none",
        }}
      />

      {/* Content container */}
      <div
        className="flex flex-col lg:flex-row min-h-screen"
      >
        {/* Left side - Large typographic statement */}
        <div
          className="lg:w-[55%] flex items-center justify-center p-8 lg:p-16"
          style={{
            position: "relative",
            zIndex: 2,
          }}
        >
          <div
            style={{
              maxWidth: "600px",
            }}
          >
            {/* Small label */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "12px",
                marginBottom: "clamp(24px, 4vh, 40px)",
              }}
            >
              <div
                style={{
                  width: "32px",
                  height: "1px",
                  background: "linear-gradient(90deg, rgba(193, 255, 53, 0.6) 0%, transparent 100%)",
                }}
              />
              <span
                style={{
                  fontFamily: "Inter, sans-serif",
                  fontSize: "11px",
                  fontWeight: 500,
                  letterSpacing: "0.2em",
                  textTransform: "uppercase",
                  color: "rgba(193, 255, 53, 0.7)",
                  WebkitFontSmoothing: "antialiased",
                }}
              >
                Origin & Insight
              </span>
            </div>

            {/* Large statement */}
            <h2
              style={{
                fontFamily: 'var(--font-instrument-serif), "Instrument Serif", Georgia, serif',
                fontSize: "clamp(32px, 5vw, 64px)",
                fontWeight: 400,
                letterSpacing: "-0.02em",
                lineHeight: 1.1,
                margin: 0,
                color: "#fff",
                WebkitFontSmoothing: "antialiased",
                marginBottom: "clamp(20px, 3vh, 32px)",
              }}
            >
              This isn't a new idea.
            </h2>

            {/* Supporting text */}
            <p
              style={{
                fontFamily: "Inter, sans-serif",
                fontSize: "clamp(17px, 2vw, 21px)",
                fontWeight: 400,
                letterSpacing: "-0.01em",
                lineHeight: 1.7,
                margin: 0,
                color: "rgba(255, 255, 255, 0.6)",
                WebkitFontSmoothing: "antialiased",
                marginBottom: "clamp(16px, 2.5vh, 24px)",
              }}
            >
              For generations, communities around the world have pooled money to support one another,  from West African susus to Caribbean partner systems to Korean kyes.
            </p>

            <p
              style={{
                fontFamily: "Inter, sans-serif",
                fontSize: "clamp(17px, 2vw, 21px)",
                fontWeight: 400,
                letterSpacing: "-0.01em",
                lineHeight: 1.7,
                margin: 0,
                color: "rgba(255, 255, 255, 0.6)",
                WebkitFontSmoothing: "antialiased",
              }}
            >
              Cube brings that time-tested approach into a modern, transparent system  with the structure, security, and visibility that today's world requires.
            </p>
          </div>
        </div>

        {/* Right side - Visual element with gradient cards */}
        <div
          className="lg:w-[45%] flex items-center justify-center p-8 lg:p-16"
          style={{
            position: "relative",
            zIndex: 2,
          }}
        >
          <div
            style={{
              position: "relative",
              width: "100%",
              maxWidth: "420px",
            }}
          >
            {/* Stacked cards representing generations/history */}
            
            {/* Card 3 - Back */}
            <div
              style={{
                position: "absolute",
                top: "24px",
                left: "24px",
                right: "-24px",
                bottom: "-24px",
                background: "linear-gradient(145deg, rgba(255, 255, 255, 0.18) 0%, rgba(255, 255, 255, 0.12) 100%)",
                borderRadius: "24px",
                border: "1px solid rgba(255, 255, 255, 0.2)",
              }}
            />
            
            {/* Card 2 - Middle */}
            <div
              style={{
                position: "absolute",
                top: "12px",
                left: "12px",
                right: "-12px",
                bottom: "-12px",
                background: "linear-gradient(145deg, rgba(255, 255, 255, 0.28) 0%, rgba(255, 255, 255, 0.18) 100%)",
                borderRadius: "24px",
                border: "1px solid rgba(255, 255, 255, 0.25)",
              }}
            />

            {/* Card 1 - Front */}
            <div
              style={{
                position: "relative",
                padding: "clamp(32px, 5vw, 48px)",
                background: "linear-gradient(145deg, rgba(255, 255, 255, 0.92) 0%, rgba(255, 255, 255, 0.85) 100%)",
                borderRadius: "24px",
                border: "1px solid rgba(255, 255, 255, 0.5)",
                backdropFilter: "blur(12px)",
              }}
            >
              {/* Quote mark */}
              <div
                style={{
                  fontFamily: 'var(--font-instrument-serif), "Instrument Serif", Georgia, serif',
                  fontSize: "clamp(48px, 8vw, 72px)",
                  fontWeight: 400,
                  lineHeight: 1,
                  color: "rgba(0, 0, 0, 0.25)",
                  marginBottom: "clamp(16px, 2vh, 24px)",
                }}
              >
                "
              </div>

              {/* Historical quote */}
              <p
                style={{
                  fontFamily: 'var(--font-instrument-serif), "Instrument Serif", Georgia, serif',
                  fontStyle: "italic",
                  fontSize: "clamp(18px, 2.5vw, 24px)",
                  fontWeight: 400,
                  letterSpacing: "-0.01em",
                  lineHeight: 1.5,
                  margin: 0,
                  color: "rgba(0, 0, 0, 0.85)",
                  WebkitFontSmoothing: "antialiased",
                  marginBottom: "clamp(20px, 3vh, 28px)",
                }}
              >
                My mother reached her first goal because twelve women believed in her before she believed in herself.
                <br /><br />
                That's what this is. It always has been.
              </p>

              {/* Attribution line */}
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "12px",
                }}
              >
                <div
                  style={{
                    width: "32px",
                    height: "1px",
                    backgroundColor: "rgba(0, 0, 0, 0.12)",
                  }}
                />
                <span
                  style={{
                    fontFamily: "Inter, sans-serif",
                    fontSize: "13px",
                    fontWeight: 500,
                    letterSpacing: "0.05em",
                    color: "rgba(0, 0, 0, 0.45)",
                    WebkitFontSmoothing: "antialiased",
                  }}
                >
                  Passed down, not invented
                </span>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
