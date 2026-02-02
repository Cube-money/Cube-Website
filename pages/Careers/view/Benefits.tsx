export default function Benefits() {
  const benefits = [
    {
      icon: "/CareerIcon/healthcare.png",
      title: "Full healthcare",
      description: "High-coverage medical, dental & vision coverage for individuals and families",
    },
    {
      icon: "/CareerIcon/pto.png",
      title: "Generous PTO",
      description: "Take the time you need, when you need it—including generous parental leave",
    },
    {
      icon: "/CareerIcon/retire.png",
      title: "Retirement planning",
      description: "Take advantage of our 401(k) plan including contribution matching",
    },
    {
      icon: "/CareerIcon/workFromAnywhere.png",
      title: "Work from anywhere",
      description: "We are a remote-first company, so you can work from anywhere you like in the U.S.",
    },
    {
      icon: "/CareerIcon/robustCompesation.png",
      title: "Robust compensation",
      description: "We offer competitive salary bands and stock options",
    },
    {
      icon: "/CareerIcon/discount.png",
      title: "Employee discount",
      description: "Employees can take advantage of product discounts",
    },
    {
      icon: "/CareerIcon/utility.png",
      title: "Utility stipend",
      description: "An extra $75 each month to cover extra cell phone, internet, or data usage",
    },
    {
      icon: "/CareerIcon/spending.png",
      title: "Spending accounts",
      description: "Options for additional HSA and FSA plans to help toward healthcare costs",
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
        WebkitFontSmoothing: "antialiased",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "flex-start",
        padding: "clamp(64px, 10vh, 120px) clamp(20px, 4vw, 64px)",
        boxSizing: "border-box",
        borderTop: "1px solid rgb(128, 128, 128)",
      }}
    >
      {/* Header Section */}
      <div
        style={{
          textAlign: "center",
          marginBottom: "clamp(48px, 8vh, 80px)",
          maxWidth: "720px",
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
              width: "40px",
              height: "1px",
              background: "linear-gradient(90deg, transparent 0%, rgba(0, 0, 0, 0.3) 100%)",
            }}
          />
          <span
            style={{
              fontFamily: "Inter, sans-serif",
              fontSize: "11px",
              fontWeight: 500,
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              color: "rgba(0, 0, 0, 0.5)",
              WebkitFontSmoothing: "antialiased",
            }}
          >
            Why Join Us
          </span>
          <div
            style={{
              width: "40px",
              height: "1px",
              background: "linear-gradient(90deg, rgba(0, 0, 0, 0.3) 0%, transparent 100%)",
            }}
          />
        </div>

        {/* Headline */}
        <h2
          style={{
            fontFamily: 'var(--font-instrument-serif), "Instrument Serif", Georgia, serif',
            fontSize: "clamp(36px, 6vw, 72px)",
            fontWeight: 400,
            letterSpacing: "-0.02em",
            lineHeight: 1.1,
            margin: 0,
            color: "#000",
            WebkitFontSmoothing: "antialiased",
            marginBottom: "clamp(16px, 3vh, 28px)",
          }}
        >
          Benefits and beyond
        </h2>

        {/* Subheader */}
        <p
          style={{
            fontFamily: "Inter, sans-serif",
            fontSize: "clamp(16px, 2vw, 20px)",
            fontWeight: 400,
            letterSpacing: "-0.01em",
            lineHeight: 1.6,
            margin: 0,
            color: "rgba(0, 0, 0, 0.6)",
            WebkitFontSmoothing: "antialiased",
            maxWidth: "600px",
            marginLeft: "auto",
            marginRight: "auto",
          }}
        >
          When it comes to taking care of our team, benefits are just the beginning. Our offering is designed to help you live your best and healthiest life, both at work and away.
        </p>
      </div>

      {/* Benefits Grid */}
      <div
        className="grid w-full max-w-[1200px] grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4"
      >
        {benefits.map((benefit, i) => (
          <div
            key={i}
            style={{
              border: "1px solid rgba(0, 0, 0, 0.1)",
              borderRadius: "16px",
              transition: "all 0.3s ease",
              backgroundColor: "#fff",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = "rgba(0, 0, 0, 0.25)";
              e.currentTarget.style.transform = "translateY(-4px)";
              e.currentTarget.style.boxShadow = "0 12px 40px rgba(0, 0, 0, 0.08)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = "rgba(0, 0, 0, 0.1)";
              e.currentTarget.style.transform = "translateY(0)";
              e.currentTarget.style.boxShadow = "none";
            }}
          >
            {/* Inner container */}
            <div
              style={{
                width: "100%",
                height: "100%",
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
                padding: "clamp(24px, 3vw, 32px)",
                boxSizing: "border-box",
                WebkitFontSmoothing: "antialiased",
                minHeight: "220px",
              }}
            >
              {/* Icon */}
              <div
                style={{
                  width: "52px",
                  height: "52px",
                  marginBottom: "clamp(16px, 2vh, 24px)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <img
                  src={benefit.icon}
                  alt={benefit.title}
                  style={{
                    width: "48px",
                    height: "48px",
                    objectFit: "contain",
                  }}
                />
              </div>

              {/* Title */}
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
                  marginBottom: "clamp(8px, 1.5vh, 12px)",
                }}
              >
                {benefit.title}
              </h3>

              {/* Description */}
              <p
                style={{
                  fontFamily: "Inter, sans-serif",
                  fontSize: "clamp(13px, 1.4vw, 15px)",
                  fontWeight: 400,
                  letterSpacing: "-0.01em",
                  lineHeight: 1.55,
                  margin: 0,
                  color: "rgba(0, 0, 0, 0.55)",
                  WebkitFontSmoothing: "antialiased",
                }}
              >
                {benefit.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
