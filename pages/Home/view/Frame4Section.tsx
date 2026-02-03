export default function Frame4Section() {
  return (
    <>
      <style jsx>{`
        .frame4-section {
          height: 100svh;
          padding: clamp(48px, 10vh, 80px) 20px;
        }
        @media (max-width: 480px) {
          .frame4-section {
            height: auto;
            min-height: 850px;
          }
        }
        .frame4-phone-desktop {
          display: block;
        }
        @media (max-width: 480px) {
          .frame4-phone-desktop {
            display: none;
          }
        }
        .frame4-text-container {
          top: 50%;
          left: clamp(120px, 30%, 320px);
          transform: translateY(-50%);
          max-width: min(520px, 48%);
          align-items: flex-start;
          text-align: left;
        }
        @media (max-width: 480px) {
          .frame4-text-container {
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            max-width: 90%;
            width: 90%;
            align-items: center;
            text-align: center;
          }
        }
        .frame4-btn {
          align-self: flex-start;
        }
        @media (max-width: 480px) {
          .frame4-btn {
            align-self: center;
          }
        }
        .frame4-phone-mobile {
          display: none;
        }
        @media (max-width: 480px) {
          .frame4-phone-mobile {
            display: block;
          }
        }
        @media (max-width: 767px) {
          .frame4-bg {
            object-position: 40% center;
          }
        }
      `}</style>
      <section
        className="frame4-section relative w-full overflow-hidden border-t border-gray-500"
        style={{
          borderTop: "1px solid rgb(128, 128, 128)",
        }}
      >
        {/* Full screen image background */}
        <img
          src="/Home/frame2/Group 7.png"
          alt=""
          aria-hidden
          className="frame4-bg"
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

        {/* Phone overlay, right aligned, hidden on mobile */}
        <img
          src="/Home/Frame4/phoneframe4.png"
          alt="Phone"
          className="frame4-phone-desktop"
          style={{
            position: "absolute",
            top: "50%",
            right: "clamp(40px, 18vw, 280px)",
            transform: "translateY(-50%)",
            height: "80%",
            width: "auto",
            objectFit: "contain",
            objectPosition: "right center",
            zIndex: 2,
          }}
        />

        {/* Editorial stack: label, headline, body, CTA, microtext */}
        <div
          className="frame4-text-container"
          style={{
            position: "absolute",
            zIndex: 3,
            display: "flex",
            flexDirection: "column",
          }}
        >
          {/* Small label */}
          <span
            style={{
              fontFamily: "Inter, sans-serif",
              fontSize: "11px",
              fontWeight: 500,
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              color: "rgb(255, 255, 255)",
              WebkitFontSmoothing: "antialiased",
              marginTop: "clamp(24px, 4vh, 40px)",
              marginBottom: "clamp(12px, 2vh, 18px)",
            }}
          >
            See it in action
          </span>

          {/* Headline */}
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
              marginBottom: "clamp(14px, 2.5vh, 22px)",
              whiteSpace: "normal",
              boxSizing: "border-box",
              display: "block",
              wordBreak: "break-word",
              overflowWrap: "break-word",
              width: "100%",
            }}
          >
            Ditch the lenders. Reclaim your freedom.
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
              maxWidth: "520px",
              marginBottom: "clamp(20px, 3vh, 28px)",
            }}
          >
            A preview is worth a thousand words. Run through a demo Cube in motion: pooled contributions, randomized payouts, and clear cycles. No lenders, no fine print.
          </span>

          {/* CTA button */}
          <a
            href="/preview"
            className="frame4-btn"
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
              See the demo
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
            No signup required. Just watch and learn.
          </span>

          {/* Phone image, shown below text on mobile only */}
          <img
            src="/Home/Frame4/phoneframe4.png"
            alt="Phone"
            className="frame4-phone-mobile"
            style={{
              width: "280px",
              height: "auto",
              objectFit: "contain",
              marginTop: "32px",
              alignSelf: "center",
            }}
          />
        </div>
      </section>
    </>
  );
}
