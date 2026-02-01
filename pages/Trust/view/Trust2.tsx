export default function Trust2() {
  return (
    <section
      style={{
        position: "relative",
        width: "100%",
        height: "100vh",
        overflow: "hidden",
        borderTop: "1px solid rgb(128, 128, 128)",
        backgroundColor: "#303D44",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        WebkitFontSmoothing: "antialiased",
      }}
    >
      {/* Main layout — two columns, shifted left */}
      <div
        style={{
          position: "relative",
          zIndex: 2,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: "clamp(72px, 14vw, 200px)",
          width: "100%",
          maxWidth: "1200px",
          padding: "0 clamp(24px, 4vw, 48px)",
          marginRight: "clamp(64px, 12vw, 160px)",
        }}
      >
        {/* LEFT: Member List Component — premium Robinhood Gold style */}
        <div
          className="hidden md:block"
          style={{
            flex: "0 0 auto",
            width: "clamp(340px, 36vw, 420px)",
            marginRight: "clamp(24px, 4vw, 48px)",
          }}
        >
          {/* Outer gradient stroke */}
          <div
            style={{
              padding: "1px",
              background: "linear-gradient(145deg, rgba(255, 255, 255, 0.25) 0%, rgba(255, 255, 255, 0.08) 50%, rgba(255, 255, 255, 0.2) 100%)",
              borderRadius: "20px",
              boxShadow: "0 8px 32px rgba(0, 0, 0, 0.12)",
            }}
          >
            {/* Inner frosted container */}
            <div
              style={{
                background: "rgba(255, 255, 255, 0.04)",
                backdropFilter: "blur(12px)",
                WebkitBackdropFilter: "blur(12px)",
                borderRadius: "19px",
                padding: "clamp(28px, 3.5vw, 40px)",
              }}
            >
              {/* Header */}
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "12px",
                  marginBottom: "clamp(24px, 3vh, 32px)",
                }}
              >
                <span
                  style={{
                    fontFamily: "Inter, sans-serif",
                    fontSize: "11px",
                    fontWeight: 500,
                    letterSpacing: "0.12em",
                    textTransform: "uppercase",
                    color: "rgba(255, 255, 255, 0.5)",
                    WebkitFontSmoothing: "antialiased",
                  }}
                >
                  Members
                </span>
                <div
                  style={{
                    flex: 1,
                    height: "1px",
                    background: "linear-gradient(90deg, rgba(255, 255, 255, 0.15) 0%, transparent 100%)",
                  }}
                />
              </div>

              {/* Member rows */}
              <div style={{ display: "flex", flexDirection: "column", gap: "0" }}>
                {[
                  { name: "Sarah M.", status: "Paid", isPaid: true },
                  { name: "Omar K.", status: "Paid", isPaid: true },
                  { name: "Ethan R.", status: "Due", isPaid: false },
                  { name: "Priya S.", status: "Paid", isPaid: true },
                  { name: "You", status: "Paid", isPaid: true },
                ].map((member, i, arr) => (
                  <div
                    key={i}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      padding: "16px 0",
                      borderBottom: i < arr.length - 1 ? "1px solid rgba(255, 255, 255, 0.08)" : "none",
                    }}
                  >
                    <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
                      {/* Avatar with gradient ring */}
                      <div
                        style={{
                          padding: "2px",
                          background: member.isPaid
                            ? "linear-gradient(135deg, rgba(193, 255, 53, 0.6) 0%, rgba(193, 255, 53, 0.2) 100%)"
                            : "linear-gradient(135deg, rgba(255, 255, 255, 0.3) 0%, rgba(255, 255, 255, 0.1) 100%)",
                          borderRadius: "50%",
                        }}
                      >
                        <div
                          style={{
                            width: "44px",
                            height: "44px",
                            borderRadius: "50%",
                            backgroundColor: "rgba(48, 61, 68, 0.9)",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            color: "#fff",
                            fontSize: "16px",
                            fontWeight: 500,
                            fontFamily: "Inter, sans-serif",
                            WebkitFontSmoothing: "antialiased",
                          }}
                        >
                          {member.name.charAt(0)}
                        </div>
                      </div>
                      <span
                        style={{
                          fontFamily: "Inter, sans-serif",
                          fontSize: "15px",
                          fontWeight: 400,
                          color: "#fff",
                          WebkitFontSmoothing: "antialiased",
                        }}
                      >
                        {member.name}
                      </span>
                    </div>
                    {/* Status badge */}
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "6px",
                      }}
                    >
                      <div
                        style={{
                          width: "6px",
                          height: "6px",
                          borderRadius: "50%",
                          backgroundColor: member.isPaid ? "#C1FF35" : "rgba(255, 255, 255, 0.4)",
                        }}
                      />
                      <span
                        style={{
                          fontFamily: "Inter, sans-serif",
                          fontSize: "13px",
                          fontWeight: 500,
                          color: member.isPaid ? "rgba(193, 255, 53, 0.9)" : "rgba(255, 255, 255, 0.5)",
                          WebkitFontSmoothing: "antialiased",
                        }}
                      >
                        {member.status}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT: Text content — left aligned */}
        <div
          style={{
            flex: "1 1 auto",
            maxWidth: "480px",
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            textAlign: "left",
          }}
        >
          {/* Section Label */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "clamp(12px, 2vw, 16px)",
              marginBottom: "clamp(20px, 3vh, 32px)",
            }}
          >
            <div
              style={{
                width: "clamp(24px, 4vw, 40px)",
                height: "1px",
                background: "rgba(255, 255, 255, 0.3)",
              }}
            />
            <span
              style={{
                fontFamily: "Inter, sans-serif",
                fontSize: "11px",
                fontWeight: 600,
                letterSpacing: "0.25em",
                textTransform: "uppercase",
                color: "rgba(255, 255, 255, 0.5)",
                WebkitFontSmoothing: "antialiased",
              }}
            >
              Visibility
            </span>
          </div>

          {/* Headline */}
          <h2
            style={{
              fontFamily: 'var(--font-instrument-serif), "Instrument Serif", serif',
              fontSize: "clamp(36px, 5vw, 56px)",
              fontWeight: 400,
              color: "#fff",
              letterSpacing: "-0.02em",
              lineHeight: 1.1,
              margin: 0,
              marginBottom: "clamp(16px, 2.5vh, 24px)",
              WebkitFontSmoothing: "antialiased",
            }}
          >
            Everyone sees the same ledger.
          </h2>

          {/* Body */}
          <p
            style={{
              fontFamily: "Inter, sans-serif",
              fontSize: "clamp(16px, 1.8vw, 19px)",
              fontWeight: 400,
              letterSpacing: "-0.01em",
              lineHeight: 1.7,
              color: "rgba(255, 255, 255, 0.7)",
              margin: 0,
              maxWidth: "420px",
              WebkitFontSmoothing: "antialiased",
            }}
          >
            Contributions, payout order, and upcoming access are always clear,  so trust never depends on memory or screenshots.
          </p>
        </div>
      </div>

      {/* Bottom gradient — clear to black for smooth transition to next frame */}
      <div
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          height: "clamp(120px, 20vh, 200px)",
          background: "linear-gradient(to bottom, transparent 0%, rgba(0, 0, 0, 0.4) 50%, rgba(0, 0, 0, 1) 100%)",
          pointerEvents: "none",
          zIndex: 3,
        }}
      />
    </section>
  );
}
