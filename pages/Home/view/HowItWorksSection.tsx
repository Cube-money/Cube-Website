"use client";

import Link from "next/link";

export default function HowItWorksSection() {
  const learnTopics = [
    {
      title: "What is a Trust Score?",
      teaser: "Your actions do the talking. A simple reflection of how reliably you show up.",
      image: "/learn/trust-score.png",
      href: "/learn/trust-score",
      bgColor: "#FFDDAA",
      span: "large",
    },
    {
      title: "How are winners chosen?",
      teaser: "Rules locked in from day one. No tweaks mid-stream.",
      image: "/learn/choosing-winner.png",
      href: "/learn/choosing-winner",
      bgColor: "#008BF2",
      span: "small",
    },
    {
      title: "Learn about payouts",
      teaser: "Fast, direct, and predictable. Money moves straight to you.",
      image: "/learn/payouts.png",
      href: "/learn/payouts",
      bgColor: "#D2C1FF",
      span: "small",
    },
    {
      title: "How to create a Cube?",
      teaser: "Define structure upfront. Everything runs smoothly later.",
      image: "/learn/create-cube.png",
      href: "/learn/create-cube",
      bgColor: "#FF9DB6",
      span: "large",
    },
  ];

  return (
    <>
      <style jsx>{`
        .frame5-section {
          min-height: 100vh;
          padding-bottom: 80px;
        }
        @media (max-width: 480px) {
          .frame5-section {
            min-height: auto;
            padding-bottom: 40px;
            padding-top: 60px;
          }
        }
        .frame5-heading {
          font-size: 56px;
        }
        @media (max-width: 480px) {
          .frame5-heading {
            font-size: 32px;
          }
        }
        .frame5-subtext {
          font-size: 18px;
          line-height: 26px;
        }
        @media (max-width: 480px) {
          .frame5-subtext {
            font-size: 15px;
            line-height: 22px;
            padding: 0 24px;
          }
        }
        .bento-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 16px;
          max-width: 1000px;
          margin: 0 auto;
        }
        @media (max-width: 768px) {
          .bento-grid {
            grid-template-columns: 1fr;
            gap: 12px;
          }
        }
        .bento-card {
          position: relative;
          border-radius: 20px;
          overflow: hidden;
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          cursor: pointer;
        }
        .bento-card:hover {
          transform: translateY(-4px) scale(1.01);
        }
        .bento-card.large {
          grid-column: span 1;
        }
        @media (min-width: 769px) {
          .bento-card.large {
            grid-column: span 1;
          }
        }
        .bento-card-inner {
          position: relative;
          height: 100%;
          min-height: 280px;
          padding: 24px;
          display: flex;
          flex-direction: column;
          background: rgba(255, 255, 255, 0.9);
          backdrop-filter: blur(20px);
          border: 1px solid rgba(255, 255, 255, 0.5);
          border-radius: 20px;
          overflow: hidden;
        }
        @media (max-width: 480px) {
          .bento-card-inner {
            min-height: 240px;
            padding: 20px;
          }
        }
        .bento-card:hover .bento-card-inner {
          border-color: rgba(255, 255, 255, 0.8);
          background: rgba(255, 255, 255, 0.95);
        }
        .bento-image-container {
          position: absolute;
          top: 50%;
          right: 16px;
          transform: translateY(-50%);
          width: 45%;
          max-width: 160px;
          aspect-ratio: 1;
          border-radius: 16px;
          overflow: hidden;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
        }
        .bento-card:hover .bento-image-container {
          transform: translateY(-50%) scale(1.05);
        }
        .bento-image-container img {
          width: 85%;
          height: 85%;
          object-fit: contain;
          transition: transform 0.4s ease;
        }
        .bento-card:hover .bento-image-container img {
          transform: scale(1.1);
        }
        .bento-content {
          position: relative;
          z-index: 2;
          max-width: 55%;
          display: flex;
          flex-direction: column;
          justify-content: center;
          flex: 1;
        }
        @media (max-width: 480px) {
          .bento-content {
            max-width: 60%;
          }
          .bento-image-container {
            width: 40%;
            max-width: 120px;
          }
        }
        .bento-label {
          font-family: Inter, sans-serif;
          font-size: 10px;
          font-weight: 500;
          letter-spacing: 0.15em;
          text-transform: uppercase;
          color: rgba(0, 0, 0, 0.45);
          margin-bottom: 8px;
        }
        .bento-title {
          font-family: var(--font-instrument-serif), "Instrument Serif", Georgia, serif;
          font-size: clamp(18px, 2.5vw, 24px);
          font-weight: 400;
          letter-spacing: -0.02em;
          line-height: 1.2;
          color: #000;
          margin-bottom: 8px;
          -webkit-font-smoothing: antialiased;
        }
        .bento-teaser {
          font-family: Inter, sans-serif;
          font-size: clamp(13px, 1.5vw, 14px);
          font-weight: 400;
          letter-spacing: -0.01em;
          line-height: 1.5;
          color: rgba(0, 0, 0, 0.55);
          -webkit-font-smoothing: antialiased;
        }
        .bento-arrow {
          position: absolute;
          top: 24px;
          right: 24px;
          width: 32px;
          height: 32px;
          border-radius: 50%;
          background: rgba(0, 0, 0, 0.06);
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.3s ease;
          opacity: 0;
        }
        .bento-card:hover .bento-arrow {
          opacity: 1;
          background: rgba(0, 0, 0, 0.1);
        }
        .bento-glow {
          position: absolute;
          top: -50%;
          right: -20%;
          width: 60%;
          height: 100%;
          background: radial-gradient(ellipse at center, rgba(0,0,0,0.03) 0%, transparent 70%);
          pointer-events: none;
          transition: opacity 0.4s ease;
          opacity: 0;
        }
        .bento-card:hover .bento-glow {
          opacity: 1;
        }
      `}</style>
    <section
      className="frame5-section"
      style={{
        position: "relative",
        width: "100%",
        overflow: "hidden",
        borderTop: "1px solid rgb(128, 128, 128)",
        padding: "clamp(60px, 10vh, 100px) clamp(16px, 4vw, 32px)",
      }}
    >
      {/* Full-screen Image Background */}
      <img
        src="/Home/frame2/Group 30.png"
        alt="Background"
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
      
      {/* Dark overlay */}
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
      
      {/* Content */}
      <div
        style={{
          position: "relative",
          width: "100%",
          zIndex: 2,
          textAlign: "center",
        }}
      >
        <div
          className="frame5-heading"
          style={{
            fontFamily: 'var(--font-instrument-serif), "Instrument Serif", "Instrument Serif Placeholder", serif',
            fontStyle: "normal",
            fontWeight: 400,
            color: "rgb(255, 255, 255)",
            letterSpacing: "-0.02em",
            lineHeight: "100%",
            textAlign: "center",
            whiteSpace: "normal",
            boxSizing: "border-box",
            WebkitFontSmoothing: "antialiased",
            display: "inline-block",
            wordBreak: "break-word",
            overflowWrap: "break-word",
            marginBottom: "16px",
          }}
        >
          Explore the library
        </div>
        
        {/* Subtext */}
        <span
          className="frame5-subtext"
          style={{
            fontFamily: "Inter, sans-serif",
            fontWeight: 400,
            letterSpacing: "-0.25px",
            margin: "0 auto",
            fontStyle: "normal",
            WebkitFontSmoothing: "antialiased",
            color: "rgb(255, 255, 255)",
            maxWidth: "600px",
            display: "block",
            textAlign: "center",
            width: "100%",
          }}
        >
          Learn how coordination, trust, and shared timing come together to form a fair financial system.
        </span>
        
        {/* CTA Button */}
        <a
          href="/learn"
          style={{
            marginTop: "24px",
            textDecoration: "none",
            alignItems: "center",
            alignSelf: "center",
            borderRadius: "36px",
            boxSizing: "border-box",
            display: "inline-flex",
            height: "44px",
            justifyContent: "center",
            overflow: "hidden",
            padding: "0px 32px",
            position: "relative",
            textAlign: "center",
            whiteSpace: "nowrap",
            backgroundColor: "rgb(204, 255, 0)",
            border: "1px solid rgb(204, 255, 0)",
            color: "rgb(17, 14, 8)",
            cursor: "pointer",
            WebkitFontSmoothing: "antialiased",
            transition: "opacity 0.2s ease",
          }}
        >
          <span
            style={{
              fontFamily: "Phonic, Helvetica, system-ui, -apple-system, 'system-ui', Arial, sans-serif",
              fontSize: "clamp(16px, 2vw, 18px)",
              fontWeight: 400,
              letterSpacing: "-0.25px",
              lineHeight: "24px",
              margin: 0,
              fontStyle: "normal",
              WebkitFontSmoothing: "antialiased",
            }}
          >
            View all
          </span>
        </a>
        
        {/* Premium Bento Grid */}
        <div className="bento-grid" style={{ marginTop: "clamp(32px, 5vh, 56px)" }}>
          {learnTopics.map((topic, index) => (
            <Link
              key={index}
              href={topic.href}
              className={`bento-card ${topic.span}`}
              style={{ textDecoration: "none" }}
            >
              <div className="bento-card-inner">
                {/* Glow effect on hover */}
                <div className="bento-glow" />
                
                {/* Arrow indicator */}
                <div className="bento-arrow">
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="black"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <line x1="7" y1="17" x2="17" y2="7" />
                    <polyline points="7 7 17 7 17 17" />
                  </svg>
                </div>
                
                {/* Image container with colored background */}
                <div
                  className="bento-image-container"
                  style={{ backgroundColor: topic.bgColor }}
                >
                  <img
                    src={topic.image}
                    alt={topic.title}
                    loading="lazy"
                  />
                </div>
                
                {/* Content */}
                <div className="bento-content">
                  <span className="bento-label">Cube Library</span>
                  <h3 className="bento-title">{topic.title}</h3>
                  <p className="bento-teaser">{topic.teaser}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
    </>
  );
}
