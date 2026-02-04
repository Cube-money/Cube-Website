import Image from "next/image";

export default function Basics() {
  return (
    <>
      <style jsx>{`
        .frame4-text-container {
          left: 50%;
          transform: translateX(-50%);
          top: 12%;
          align-items: center;
          text-align: center;
        }
        @media (min-width: 900px) {
          .frame4-text-container {
            left: 14%;
            top: 50%;
            transform: translateY(-50%);
            align-items: flex-start;
            text-align: left;
          }
        }
        .frame4-heading {
          text-align: center;
        }
        @media (min-width: 900px) {
          .frame4-heading {
            text-align: left;
          }
        }
        .frame4-heading br {
          display: none;
        }
        @media (min-width: 900px) {
          .frame4-heading br {
            display: block;
          }
        }
        .frame4-subtext {
          text-align: center;
        }
        @media (min-width: 900px) {
          .frame4-subtext {
            text-align: left;
          }
        }
        .frame4-button {
          align-self: center;
        }
        @media (min-width: 900px) {
          .frame4-button {
            align-self: flex-start;
          }
        }
        .frame4-image-container {
          position: absolute;
          left: 50%;
          transform: translateX(-50%);
          bottom: 5%;
          top: auto;
          right: auto;
          height: auto;
          z-index: 2;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        @media (min-width: 900px) {
          .frame4-image-container {
            left: auto;
            bottom: auto;
            transform: none;
            right: 6%;
            top: 0;
            height: 100%;
            justify-content: flex-end;
          }
        }
      `}</style>
      <section
        className="relative w-full overflow-hidden border-t border-gray-500"
        style={{
          minHeight: "clamp(520px, 80vh, 860px)",
          borderTop: "1px solid rgb(128, 128, 128)",
          backgroundColor: "#000000",
        }}
      >
        {/* Text Container - upper area on mobile, left side on desktop */}
        <div
          className="frame4-text-container"
          style={{
            position: "absolute",
            zIndex: 3,
            display: "flex",
            flexDirection: "column",
            width: "calc(100% - 32px)",
            maxWidth: "clamp(90%, 52vw, 620px)",
            padding: "0 clamp(16px, 3vw, 0)",
          }}
        >
          {/* Small label (Inter, same as Frame4) */}
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
              display: "block",
            }}
          >
            The cycle
          </span>

          {/* Headline (Instrument Serif, same as Frame4) */}
          <div
            className="frame4-heading"
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
              marginBottom: "clamp(14px, 2.5vh, 22px)",
              whiteSpace: "normal",
              boxSizing: "border-box",
              display: "block",
              wordBreak: "break-word",
              overflowWrap: "break-word",
              width: "100%",
            }}
          >
            A repeating financial cycle
          </div>

          {/* Body (Inter, same size and look as Frame4) */}
          <span
            className="frame4-subtext"
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
              marginBottom: "clamp(20px, 3vh, 28px)",
            }}
          >
            The process continues across cycles until everyone has received their turn.
          </span>

          {/* CTA button (same as Frame4 / HowItWorks) */}
          <a
            href="/trust"
            className="frame4-button"
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
              Learn more
            </span>
          </a>

          {/* Microtext (Inter, same as Frame4) */}
          <span
            style={{
              fontFamily: "Inter, sans-serif",
              fontSize: "13px",
              fontWeight: 400,
              letterSpacing: "-0.01em",
              color: "rgba(255, 255, 255, 0.5)",
              WebkitFontSmoothing: "antialiased",
              marginTop: "clamp(12px, 2vh, 18px)",
              display: "block",
            }}
          >
            Real people. Real cycles.
          </span>
        </div>

        {/* Image: below text on mobile, right side on desktop */}
        <div className="frame4-image-container">
          <Image
            src="/howitworks/cyclehow2.png"
            alt="Cycle"
            width={800}
            height={800}
            className="max-w-[min(280px,70vw)] max-h-[40vh] md:max-w-[min(560px,48vw)] md:max-h-[85vh]"
            style={{
              height: "auto",
              width: "auto",
              objectFit: "contain",
            }}
          />
        </div>
      </section>
    </>
  );
}
