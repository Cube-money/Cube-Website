export default function Press() {
  return (
    <>
      <style jsx>{`
        .press-container {
          flex-direction: row;
          height: 100vh;
        }
        @media (max-width: 480px) {
          .press-container {
            flex-direction: column;
            height: auto;
            min-height: 100vh;
          }
        }
        .press-image-container {
          width: 35%;
          min-height: auto;
        }
        @media (max-width: 480px) {
          .press-image-container {
            width: 100%;
            min-height: 300px;
          }
        }
        .press-content-container {
          width: 65%;
        }
        @media (max-width: 480px) {
          .press-content-container {
            width: 100%;
          }
        }
        .press-divider {
          display: block;
        }
        @media (max-width: 480px) {
          .press-divider {
            display: none;
          }
        }
        .press-heading {
          font-size: clamp(36px, 5vw, 64px);
        }
        @media (max-width: 480px) {
          .press-heading {
            font-size: 38px;
          }
        }
        .press-body {
          font-size: clamp(16px, 1.8vw, 19px);
        }
        @media (max-width: 480px) {
          .press-body {
            font-size: 17px;
          }
        }
        .press-label {
          font-size: 11px;
        }
        @media (max-width: 480px) {
          .press-label {
            font-size: 12px;
          }
        }
      `}</style>
    <section
      className="relative w-full min-h-screen overflow-hidden"
      style={{
        borderTop: "1px solid rgb(128, 128, 128)",
      }}
    >
      <div className="press-container w-full flex overflow-hidden">
        {/* LEFT 35% — Image */}
        <div
          className="press-image-container min-w-0 overflow-hidden relative"
        >
          <img
            src="/Press/PressImage4.png"
            alt="Press"
            className="w-full h-full object-cover object-center"
            style={{ display: "block" }}
          />
          {/* Subtle dark overlay on image */}
          <div
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              backgroundColor: "rgba(0, 0, 0, 0.1)",
              pointerEvents: "none",
            }}
          />
        </div>

        {/* Stroke divider */}
        <div
          className="press-divider flex-shrink-0 w-px self-stretch"
          style={{ backgroundColor: "rgb(128, 128, 128)" }}
        />

        {/* RIGHT 65% — Content centered within this area */}
        <div
          className="press-content-container min-w-0 overflow-hidden relative"
          style={{
            backgroundColor: "#fff",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {/* Content container — centered in right panel */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
              textAlign: "left",
              maxWidth: "520px",
              padding: "clamp(32px, 5vw, 64px)",
              width: "100%",
            }}
          >
            {/* Small Label */}
            <span
              className="press-label"
              style={{
                fontFamily: "Inter, sans-serif",
                fontWeight: 500,
                letterSpacing: "0.2em",
                textTransform: "uppercase",
                color: "rgba(0, 0, 0, 0.45)",
                WebkitFontSmoothing: "antialiased",
                marginBottom: "clamp(16px, 2.5vh, 24px)",
              }}
            >
              Press & Media
            </span>

            {/* Headline */}
            <h1
              className="press-heading"
              style={{
                fontFamily: 'var(--font-instrument-serif), "Instrument Serif", Georgia, serif',
                fontStyle: "normal",
                fontWeight: 400,
                color: "rgb(17, 17, 17)",
                letterSpacing: "-0.02em",
                lineHeight: "105%",
                WebkitFontSmoothing: "antialiased",
                marginBottom: "clamp(16px, 2.5vh, 24px)",
                margin: 0,
              }}
            >
              The story behind Cube.
            </h1>

            {/* Body */}
            <p
              className="press-body"
              style={{
                fontFamily: "Inter, sans-serif",
                fontWeight: 400,
                letterSpacing: "-0.01em",
                lineHeight: 1.7,
                color: "rgba(0, 0, 0, 0.65)",
                WebkitFontSmoothing: "antialiased",
                marginBottom: "clamp(28px, 4vh, 40px)",
                maxWidth: "460px",
                marginTop: "clamp(8px, 1.5vh, 16px)",
              }}
            >
              We're building the financial infrastructure for group saving. Here you'll find press releases, brand assets, and media contacts.
            </p>

            {/* Contact boxes — styled like Support but without icons */}
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "clamp(12px, 2vh, 18px)",
                width: "100%",
              }}
            >
              {/* Press Inquiries Box */}
              <div
                style={{
                  padding: "clamp(20px, 3vh, 28px)",
                  border: "1px solid rgba(0, 0, 0, 0.12)",
                  borderRadius: "12px",
                  backgroundColor: "rgba(0, 0, 0, 0.02)",
                  transition: "all 0.3s ease",
                  cursor: "pointer",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = "rgba(0, 0, 0, 0.04)";
                  e.currentTarget.style.borderColor = "rgba(0, 0, 0, 0.2)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = "rgba(0, 0, 0, 0.02)";
                  e.currentTarget.style.borderColor = "rgba(0, 0, 0, 0.12)";
                }}
              >
                <h3
                  style={{
                    fontFamily: "Inter, sans-serif",
                    fontSize: "15px",
                    fontWeight: 600,
                    color: "rgb(17, 17, 17)",
                    marginBottom: "6px",
                    margin: 0,
                    WebkitFontSmoothing: "antialiased",
                  }}
                >
                  Press Inquiries
                </h3>
                <p
                  style={{
                    fontFamily: "Inter, sans-serif",
                    fontSize: "14px",
                    color: "rgba(0, 0, 0, 0.55)",
                    margin: 0,
                    marginTop: "6px",
                    WebkitFontSmoothing: "antialiased",
                  }}
                >
                  press@cubemoney.io
                </p>
              </div>

              {/* Brand Assets Box */}
              <div
                style={{
                  padding: "clamp(20px, 3vh, 28px)",
                  border: "1px solid rgba(0, 0, 0, 0.12)",
                  borderRadius: "12px",
                  backgroundColor: "rgba(0, 0, 0, 0.02)",
                  transition: "all 0.3s ease",
                  cursor: "pointer",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = "rgba(0, 0, 0, 0.04)";
                  e.currentTarget.style.borderColor = "rgba(0, 0, 0, 0.2)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = "rgba(0, 0, 0, 0.02)";
                  e.currentTarget.style.borderColor = "rgba(0, 0, 0, 0.12)";
                }}
              >
                <h3
                  style={{
                    fontFamily: "Inter, sans-serif",
                    fontSize: "15px",
                    fontWeight: 600,
                    color: "rgb(17, 17, 17)",
                    marginBottom: "6px",
                    margin: 0,
                    WebkitFontSmoothing: "antialiased",
                  }}
                >
                  Brand Assets
                </h3>
                <p
                  style={{
                    fontFamily: "Inter, sans-serif",
                    fontSize: "14px",
                    color: "rgba(0, 0, 0, 0.55)",
                    margin: 0,
                    marginTop: "6px",
                    WebkitFontSmoothing: "antialiased",
                  }}
                >
                  Download logos, screenshots, and guidelines
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    </>
  );
}
