"use client";

export default function WaitlistSection() {
  return (
    <>
      <style jsx>{`
        .waitlist-stack {
          align-items: center;
          text-align: center;
        }
        .frame6-section {
          min-height: 50svh;
          padding: clamp(40px, 8vh, 64px) 20px;
        }
        @media (max-width: 480px) {
          .frame6-section {
            min-height: 300px;
          }
        }
      `}</style>
      <section
        className="frame6-section"
        style={{
          position: "relative",
          width: "100%",
          overflow: "hidden",
          borderTop: "1px solid rgb(255, 255, 255)",
        }}
      >
        {/* Background video */}
        <video
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            objectFit: "cover",
            zIndex: 0,
          }}
        >
          <source src="/Home/Hero/footervideo.mp4" type="video/mp4" />
        </video>

        {/* Dark overlay */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(0, 0, 0, 0.5)",
            zIndex: 1,
          }}
        />

        {/* Editorial stack: label, headline, short body, CTA, microtext */}
        <div
          className="waitlist-stack"
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            zIndex: 2,
            display: "flex",
            flexDirection: "column",
            width: "100%",
            maxWidth: "min(480px, calc(100% - 24px))",
            padding: "0 8px",
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
              marginBottom: "clamp(8px, 1.5vh, 14px)",
            }}
          >
            Join
          </span>

          {/* Headline */}
          <div
            style={{
              fontFamily:
                'var(--font-instrument-serif), "Instrument Serif", "Instrument Serif Placeholder", serif',
              fontStyle: "normal",
              fontWeight: 400,
              color: "rgb(255, 255, 255)",
              fontSize: "clamp(28px, 4.5vw, 44px)",
              letterSpacing: "-0.02em",
              lineHeight: "105%",
              WebkitFontSmoothing: "antialiased",
              marginBottom: "clamp(8px, 1.5vh, 14px)",
              whiteSpace: "normal",
              boxSizing: "border-box",
              display: "block",
              wordBreak: "break-word",
              overflowWrap: "break-word",
              width: "100%",
            }}
          >
            Your turn is now.
          </div>

          {/* Short body */}
          <span
            style={{
              display: "block",
              fontFamily: "Inter, sans-serif",
              fontSize: "clamp(14px, 2vw, 16px)",
              fontWeight: 400,
              letterSpacing: "-0.2px",
              lineHeight: "1.4",
              color: "rgba(255, 255, 255, 0.8)",
              WebkitFontSmoothing: "antialiased",
              marginBottom: "clamp(16px, 2.5vh, 24px)",
            }}
          >
            Save together. No lenders. Just you and the people you trust.
          </span>

          {/* CTA button */}
          <a
            href="/signup"
            style={{
              alignSelf: "center",
              textDecoration: "none",
              alignItems: "center",
              borderRadius: "clamp(24px, 3vw, 32px)",
              boxSizing: "border-box",
              display: "inline-flex",
              height: "clamp(40px, 5vh, 46px)",
              justifyContent: "center",
              overflow: "hidden",
              padding: "0px clamp(20px, 3vw, 28px)",
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
                fontSize: "clamp(14px, 1.8vw, 16px)",
                fontWeight: 500,
                letterSpacing: "-0.25px",
                lineHeight: "1.25",
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
              fontSize: "12px",
              fontWeight: 400,
              letterSpacing: "-0.01em",
              color: "rgba(255, 255, 255, 0.5)",
              WebkitFontSmoothing: "antialiased",
              marginTop: "clamp(10px, 1.5vh, 14px)",
            }}
          >
            No debt. No interest. Just structure, together.
          </span>
        </div>
      </section>
    </>
  );
}
