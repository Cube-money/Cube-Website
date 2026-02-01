export default function Guard() {
  const blocks = [
    {
      label: "Trust Score",
      headline: "Trust becomes measurable.",
      body: "Cube doesn't run on vibes or reminders. Consistency becomes a visible signal — so groups stay aligned before problems start.",
      image: "/Trust/trustcard1.png",
    },
    {
      label: "Cube Health",
      headline: "The cycle stays on track.",
      body: "Every Cube has a live status: who's current, what's upcoming, what's at risk — so momentum never breaks silently.",
      image: "/Trust/trustcard5.png",
    },
    {
      label: "Rule-Based Distribution",
      headline: "Access rotates, not negotiated.",
      body: "Payouts move exactly as agreed, on schedule. No central person deciding. No last-minute reshuffling. Just the system doing what was set.",
      image: "/Trust/trustcard2.png",
    },
    {
      label: "Verified Ledger",
      headline: "Every transaction is verified.",
      body: "Every contribution and payout is recorded and shared. So trust doesn't depend on screenshots, memory, or group chat confusion.",
      image: "/Trust/trustcard4.png",
    },
  ];

  return (
    <section
      style={{
        position: "relative",
        width: "100%",
        minHeight: "100vh",
        overflow: "hidden",
        backgroundColor: "#000",
        WebkitFontSmoothing: "antialiased",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "flex-start",
        padding: "clamp(48px, 6vw, 80px) clamp(32px, 5vw, 64px)",
        boxSizing: "border-box",
      }}
    >
      {/* Header */}
      <div
        style={{
          textAlign: "center",
          marginBottom: "clamp(48px, 6vh, 72px)",
          maxWidth: "700px",
        }}
      >
        {/* Label */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "12px",
            marginBottom: "clamp(16px, 2.5vh, 24px)",
          }}
        >
          <div
            style={{
              width: "32px",
              height: "1px",
              background: "linear-gradient(90deg, transparent 0%, rgba(255, 255, 255, 0.3) 100%)",
            }}
          />
          <span
            style={{
              fontFamily: "Inter, sans-serif",
              fontSize: "11px",
              fontWeight: 500,
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              color: "rgba(255, 255, 255, 0.5)",
              WebkitFontSmoothing: "antialiased",
            }}
          >
            The Guardrails
          </span>
          <div
            style={{
              width: "32px",
              height: "1px",
              background: "linear-gradient(90deg, rgba(255, 255, 255, 0.3) 0%, transparent 100%)",
            }}
          />
        </div>

        {/* Headline */}
        <h2
          style={{
            fontFamily: 'var(--font-instrument-serif), "Instrument Serif", Georgia, serif',
            fontSize: "clamp(36px, 5vw, 56px)",
            fontWeight: 400,
            letterSpacing: "-0.02em",
            lineHeight: 1.15,
            margin: 0,
            color: "#fff",
            WebkitFontSmoothing: "antialiased",
          }}
        >
          Four pillars that keep every Cube accountable.
        </h2>
      </div>

      {/* 2x2 grid — premium layout */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gridTemplateRows: "1fr 1fr",
          width: "100%",
          maxWidth: "1000px",
          flex: 1,
          gap: "clamp(48px, 8vw, 80px)",
          boxSizing: "border-box",
        }}
      >
        {blocks.map((block, i) => (
          <div
            key={i}
            style={{
              padding: "1px",
              background: "linear-gradient(145deg, rgba(255, 255, 255, 0.4) 0%, rgba(160, 160, 160, 0.25) 40%, rgba(100, 100, 100, 0.2) 50%, rgba(160, 160, 160, 0.25) 60%, rgba(255, 255, 255, 0.15) 100%)",
              borderRadius: "20px",
              display: "flex",
              flexDirection: "column",
              minHeight: 0,
            }}
          >
            {/* Inner container */}
            <div
              style={{
                width: "100%",
                height: "100%",
                flex: 1,
                background: "linear-gradient(180deg, rgba(18, 18, 18, 1) 0%, rgba(0, 0, 0, 1) 100%)",
                borderRadius: "19px",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                padding: "clamp(32px, 5vw, 56px) clamp(24px, 4vw, 40px)",
                boxSizing: "border-box",
                WebkitFontSmoothing: "antialiased",
                position: "relative",
                overflow: "hidden",
              }}
            >
              {/* Subtle glow accent */}
              <div
                style={{
                  position: "absolute",
                  top: "-50%",
                  left: "50%",
                  transform: "translateX(-50%)",
                  width: "80%",
                  height: "60%",
                  background: "radial-gradient(ellipse at center, rgba(193, 255, 53, 0.04) 0%, transparent 70%)",
                  pointerEvents: "none",
                }}
              />

              {/* Content — text block has fixed min-height so label/headline/body align across all cards */}
              <div
                style={{
                  position: "relative",
                  zIndex: 1,
                  width: "100%",
                  maxWidth: "340px",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                {/* Text block: same height on every card for perfect alignment */}
                <div
                  style={{
                    width: "100%",
                    minHeight: "clamp(200px, 28vh, 260px)",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "flex-start",
                    gap: "clamp(12px, 2vh, 20px)",
                    textAlign: "center",
                  }}
                >
                  {/* Label */}
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "10px",
                    }}
                  >
                    <div
                      style={{
                        width: "20px",
                        height: "1px",
                        background: "linear-gradient(90deg, transparent 0%, rgba(193, 255, 53, 0.5) 100%)",
                      }}
                    />
                    <span
                      style={{
                        fontFamily: "Inter, sans-serif",
                        fontSize: "11px",
                        fontWeight: 500,
                        letterSpacing: "0.15em",
                        textTransform: "uppercase",
                        color: "rgba(193, 255, 53, 0.7)",
                        WebkitFontSmoothing: "antialiased",
                      }}
                    >
                      {block.label}
                    </span>
                    <div
                      style={{
                        width: "20px",
                        height: "1px",
                        background: "linear-gradient(90deg, rgba(193, 255, 53, 0.5) 0%, transparent 100%)",
                      }}
                    />
                  </div>

                  {/* Headline */}
                  <h3
                    style={{
                      fontFamily: 'var(--font-instrument-serif), "Instrument Serif", Georgia, serif',
                      fontSize: "clamp(26px, 3.5vw, 36px)",
                      fontWeight: 400,
                      letterSpacing: "-0.02em",
                      lineHeight: 1.2,
                      margin: 0,
                      color: "#fff",
                      WebkitFontSmoothing: "antialiased",
                    }}
                  >
                    {block.headline}
                  </h3>

                  {/* Body */}
                  <p
                    style={{
                      fontFamily: "Inter, sans-serif",
                      fontSize: "clamp(14px, 1.6vw, 16px)",
                      fontWeight: 400,
                      letterSpacing: "-0.01em",
                      lineHeight: 1.65,
                      margin: 0,
                      color: "rgba(255, 255, 255, 0.6)",
                      WebkitFontSmoothing: "antialiased",
                      maxWidth: "100%",
                    }}
                  >
                    {block.body}
                  </p>
                </div>

                {/* Card image — same size on all cards */}
                <div
                  style={{
                    width: "100%",
                    maxWidth: "300px",
                    minHeight: "clamp(160px, 22vh, 220px)",
                    marginTop: "clamp(12px, 2vh, 20px)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <img
                    src={block.image}
                    alt={block.label}
                    style={{
                      maxWidth: "100%",
                      maxHeight: "220px",
                      height: "auto",
                      objectFit: "contain",
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
