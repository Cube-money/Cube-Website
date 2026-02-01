export default function TrustCta() {
  return (
    <>
      <style jsx>{`
        .trust-cta-stack {
          align-items: center;
          text-align: center;
        }
        @media (max-width: 767px) {
          .trust-cta-bg {
            object-position: 80% center;
          }
        }
      `}</style>
      <section
        className="relative w-full overflow-hidden border-t border-gray-500"
        style={{
          minHeight: "clamp(560px, 85vh, 1040px)",
          height: "auto",
          borderTop: "1px solid rgb(128, 128, 128)",
          position: "relative",
          padding: "clamp(48px, 10vh, 80px) 20px",
        }}
      >
        {/* Background image — on phone, focal point right */}
        <img
          src="/Trust/trustcta1.png"
          alt=""
          aria-hidden
          className="trust-cta-bg object-cover"
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
        {/* Centered stack: label → heading → body → CTA → microtext */}
        <div
          className="trust-cta-stack"
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            zIndex: 3,
            display: "flex",
            flexDirection: "column",
            width: "100%",
            maxWidth: "min(640px, calc(100% - 24px))",
            padding: "0 8px",
          }}
        >
          {/* Small Label */}
          <span
            style={{
              fontFamily: "Inter, sans-serif",
              fontSize: "11px",
              fontWeight: 500,
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              color: "rgba(255, 255, 255, 0.6)",
              WebkitFontSmoothing: "antialiased",
              marginBottom: "clamp(12px, 2vh, 18px)",
            }}
          >
            Ready when you are
          </span>

          {/* Headline */}
          <div
            style={{
              fontFamily:
                'var(--font-instrument-serif), "Instrument Serif", "Instrument Serif Placeholder", serif',
              fontStyle: "normal",
              fontWeight: 400,
              color: "rgb(255, 255, 255)",
              fontSize: "clamp(32px, 5vw, 56px)",
              letterSpacing: "-0.02em",
              lineHeight: "110%",
              WebkitFontSmoothing: "antialiased",
              marginBottom: "clamp(12px, 2vh, 18px)",
              whiteSpace: "normal",
              boxSizing: "border-box",
              display: "block",
              wordBreak: "break-word",
              overflowWrap: "break-word",
              width: "100%",
            }}
          >
            Start saving like a system.
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
              maxWidth: "560px",
            }}
          >
            Cube makes group saving feel automatic — with clear rules, shared visibility, and scheduled access.
          </span>

          {/* CTA Button */}
          <a
            href="/signup"
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
              marginTop: "clamp(20px, 3.5vh, 32px)",
            }}
          >
            <span
              style={{
                fontFamily: "Phonic, Helvetica, system-ui, -apple-system, 'system-ui', Arial, sans-serif",
                fontSize: "clamp(16px, 2vw, 18px)",
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
            No debt. No interest. Just structure.
          </span>
        </div>
      </section>
    </>
  );
}
