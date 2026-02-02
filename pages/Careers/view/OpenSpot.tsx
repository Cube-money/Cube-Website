"use client";

export default function OpenSpot() {
  const positions = [
    {
      title: "Product Designer",
      location: "ON-SITE",
      type: "FULL-TIME",
      description: "Shape the future of group savings. Create intuitive, visually stunning experiences that make managing money together feel effortless.",
    },
    {
      title: "Senior Software Engineer",
      location: "REMOTE",
      type: "FULL-TIME",
      description: "Build the infrastructure that powers Cube. Work on scalable systems, real-time payments, and elegant APIs.",
    },
    {
      title: "Growth Marketing Lead",
      location: "REMOTE",
      type: "FULL-TIME",
      description: "Drive user acquisition and engagement. Develop strategies that help more people discover and trust Cube.",
    },
    {
      title: "Customer Success Manager",
      location: "HYBRID",
      type: "FULL-TIME",
      description: "Help define brand stories and shape engaging, authentic messaging that resonates with our community.",
    },
    {
      title: "Mobile Engineer (iOS/Android)",
      location: "REMOTE",
      type: "FULL-TIME",
      description: "Craft beautiful, performant mobile experiences. Build features that millions of users will rely on daily.",
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
        padding: "clamp(64px, 10vh, 120px) clamp(24px, 5vw, 80px)",
        boxSizing: "border-box",
        borderTop: "1px solid rgba(0, 0, 0, 0.1)",
      }}
    >
      <div
        className="flex flex-col lg:flex-row gap-12 lg:gap-20 max-w-[1400px] mx-auto"
      >
        {/* Left side - Header */}
        <div
          className="lg:w-[35%] lg:sticky lg:top-32 lg:self-start"
        >
          {/* Label */}
          <span
            style={{
              display: "inline-block",
              fontFamily: "Inter, sans-serif",
              fontSize: "11px",
              fontWeight: 500,
              letterSpacing: "0.15em",
              textTransform: "uppercase",
              color: "rgba(0, 0, 0, 0.5)",
              padding: "8px 16px",
              border: "1px solid rgba(0, 0, 0, 0.15)",
              borderRadius: "100px",
              marginBottom: "clamp(20px, 3vh, 32px)",
              WebkitFontSmoothing: "antialiased",
            }}
          >
            Open Positions
          </span>

          {/* Heading */}
          <h2
            style={{
              fontFamily: 'var(--font-instrument-serif), "Instrument Serif", Georgia, serif',
              fontSize: "clamp(36px, 5vw, 56px)",
              fontWeight: 400,
              letterSpacing: "-0.02em",
              lineHeight: 1.1,
              margin: 0,
              color: "#000",
              WebkitFontSmoothing: "antialiased",
            }}
          >
            Explore opportunities to grow with us
          </h2>
        </div>

        {/* Right side - Job listings */}
        <div
          className="lg:w-[65%]"
        >
          {positions.map((position, i) => (
            <div
              key={i}
              style={{
                borderTop: i === 0 ? "1px solid rgba(0, 0, 0, 0.1)" : "none",
                borderBottom: "1px solid rgba(0, 0, 0, 0.1)",
                padding: "clamp(24px, 4vh, 40px) 0",
              }}
            >
              {/* Location & Type tags */}
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "8px",
                  marginBottom: "clamp(12px, 2vh, 18px)",
                }}
              >
                <span
                  style={{
                    fontFamily: "Inter, sans-serif",
                    fontSize: "11px",
                    fontWeight: 500,
                    letterSpacing: "0.1em",
                    textTransform: "uppercase",
                    color: "rgba(0, 0, 0, 0.5)",
                    WebkitFontSmoothing: "antialiased",
                  }}
                >
                  LOCATION: {position.location}
                </span>
                <span
                  style={{
                    color: "rgba(0, 0, 0, 0.3)",
                    fontSize: "11px",
                  }}
                >
                  |
                </span>
                <span
                  style={{
                    fontFamily: "Inter, sans-serif",
                    fontSize: "11px",
                    fontWeight: 500,
                    letterSpacing: "0.1em",
                    textTransform: "uppercase",
                    color: "rgba(0, 0, 0, 0.5)",
                    WebkitFontSmoothing: "antialiased",
                  }}
                >
                  {position.type}
                </span>
              </div>

              {/* Title and View button row */}
              <div
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                  justifyContent: "space-between",
                  gap: "24px",
                  marginBottom: "clamp(8px, 1.5vh, 14px)",
                }}
              >
                <h3
                  style={{
                    fontFamily: 'var(--font-instrument-serif), "Instrument Serif", Georgia, serif',
                    fontSize: "clamp(24px, 3vw, 36px)",
                    fontWeight: 400,
                    letterSpacing: "-0.01em",
                    lineHeight: 1.2,
                    margin: 0,
                    color: "#000",
                    WebkitFontSmoothing: "antialiased",
                  }}
                >
                  {position.title}
                </h3>

                <a
                  href="https://www.linkedin.com/company/cubemoneyio/?viewAsMember=true"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    flexShrink: 0,
                    fontFamily: "Inter, sans-serif",
                    fontSize: "13px",
                    fontWeight: 500,
                    letterSpacing: "-0.01em",
                    color: "#000",
                    textDecoration: "none",
                    padding: "10px 20px",
                    border: "1px solid rgba(0, 0, 0, 0.2)",
                    borderRadius: "100px",
                    transition: "all 0.2s ease",
                    WebkitFontSmoothing: "antialiased",
                    whiteSpace: "nowrap",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = "#000";
                    e.currentTarget.style.color = "#fff";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = "transparent";
                    e.currentTarget.style.color = "#000";
                  }}
                >
                  View Offer
                </a>
              </div>

              {/* Description */}
              <p
                style={{
                  fontFamily: "Inter, sans-serif",
                  fontSize: "clamp(14px, 1.5vw, 16px)",
                  fontWeight: 400,
                  letterSpacing: "-0.01em",
                  lineHeight: 1.6,
                  margin: 0,
                  color: "rgba(0, 0, 0, 0.6)",
                  WebkitFontSmoothing: "antialiased",
                  maxWidth: "600px",
                }}
              >
                {position.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
