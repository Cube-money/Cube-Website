"use client";

import { useState } from "react";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "What is Cube?",
      answer: "Cube is a platform for group saving. You and people you trust contribute to a shared pool on a schedule, and each cycle, one member receives the full payout. No loans, no interest — just structured saving, together.",
    },
    {
      question: "Is Cube a loan or credit product?",
      answer: "No. Cube is not a loan, and there's no interest or debt involved. You're saving your own money alongside others. Access rotates fairly through the group based on agreed rules.",
    },
    {
      question: "How do I know I can trust my group members?",
      answer: "You choose who joins your Cube. Every member has a Trust Score based on their contribution history. You can see payment status, payout schedules, and group health at any time — so trust is visible, not assumed.",
    },
    {
      question: "What happens if someone misses a payment?",
      answer: "Cube has built-in guardrails. Members are notified of upcoming contributions, and the group can see who's current and who's at risk. If a payment is missed, the Trust Score reflects it — and the group decides how to proceed.",
    },
    {
      question: "How do payouts work?",
      answer: "Payouts follow a set rotation agreed upon when the Cube is created. When it's your turn, the pooled contributions are deposited directly into your verified bank account. No requests, no negotiations — just the system doing what was set.",
    },
    {
      question: "Is my money safe?",
      answer: "Yes. Contributions move via ACH to and from your verified bank account. Cube doesn't hold your funds — money flows directly between members according to the schedule. Every transaction is logged and visible to the group.",
    },
    {
      question: "How much does Cube cost?",
      answer: "Cube is free to use during beta. We'll share more about pricing as we grow, but our goal is to keep costs minimal and transparent — no hidden fees, ever.",
    },
    {
      question: "Who can start a Cube?",
      answer: "Anyone can start a Cube. You set the contribution amount, cycle frequency, and invite members you trust. Once everyone joins and verifies their account, the Cube begins.",
    },
  ];

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section
      style={{
        position: "relative",
        width: "100%",
        minHeight: "100vh",
        overflow: "hidden",
        backgroundColor: "#faf8f2",
        padding: "clamp(80px, 12vh, 140px) clamp(24px, 5vw, 80px)",
        boxSizing: "border-box",
        borderTop: "1px solid rgba(0, 0, 0, 0.1)",
      }}
    >
      <div
        className="flex flex-col lg:flex-row gap-12 lg:gap-20 max-w-[1300px] mx-auto"
      >
        {/* Left side - Header (sticky on desktop) */}
        <div
          className="lg:w-[35%] lg:sticky lg:top-32 lg:self-start"
        >
          {/* Heading */}
          <h2
            style={{
              fontFamily: 'var(--font-instrument-serif), "Instrument Serif", Georgia, serif',
              fontSize: "clamp(32px, 5vw, 48px)",
              fontWeight: 400,
              letterSpacing: "-0.02em",
              lineHeight: 1.15,
              margin: 0,
              color: "rgba(0, 0, 0, 0.89)",
              WebkitFontSmoothing: "antialiased",
              marginBottom: "clamp(16px, 2vh, 24px)",
            }}
          >
            Have questions?
            <br />
            We've got answers.
          </h2>

          {/* Subtext */}
          <p
            style={{
              fontFamily: "Inter, sans-serif",
              fontSize: "clamp(16px, 1.8vw, 18px)",
              fontWeight: 400,
              letterSpacing: "-0.01em",
              lineHeight: 1.6,
              margin: 0,
              color: "rgba(0, 0, 0, 0.54)",
              WebkitFontSmoothing: "antialiased",
              marginBottom: "clamp(24px, 4vh, 32px)",
              maxWidth: "400px",
            }}
          >
            Everything you need to know about how Cube works, from saving together to getting your payout.
          </p>

          {/* CTA Button */}
          <a
            href="/support"
            style={{
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              fontFamily: "Inter, sans-serif",
              fontSize: "15px",
              fontWeight: 500,
              letterSpacing: "-0.01em",
              color: "#fff",
              textDecoration: "none",
              backgroundColor: "#000",
              padding: "14px 28px",
              borderRadius: "100px",
              transition: "opacity 0.2s ease",
              WebkitFontSmoothing: "antialiased",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.opacity = "0.8";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.opacity = "1";
            }}
          >
            Contact support
          </a>
        </div>

        {/* Right side - FAQ items */}
        <div
          className="lg:w-[65%]"
        >
          {faqs.map((faq, index) => (
            <div
              key={index}
              style={{
                borderBottom: "1px solid rgba(0, 0, 0, 0.12)",
              }}
            >
              {/* Question header */}
              <button
                onClick={() => toggleFaq(index)}
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  width: "100%",
                  padding: "clamp(20px, 3vh, 28px) 0",
                  background: "none",
                  border: "none",
                  cursor: "pointer",
                  textAlign: "left",
                }}
              >
                <h3
                  style={{
                    fontFamily: "Inter, sans-serif",
                    fontSize: "clamp(16px, 1.8vw, 18px)",
                    fontWeight: 500,
                    letterSpacing: "-0.01em",
                    lineHeight: 1.4,
                    margin: 0,
                    color: "rgba(0, 0, 0, 0.89)",
                    WebkitFontSmoothing: "antialiased",
                    paddingRight: "16px",
                  }}
                >
                  {faq.question}
                </h3>

                {/* Toggle icon */}
                <div
                  style={{
                    flexShrink: 0,
                    width: "24px",
                    height: "24px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    transition: "transform 0.3s ease",
                    transform: openIndex === index ? "rotate(45deg)" : "rotate(0deg)",
                  }}
                >
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    style={{ color: "rgba(0, 0, 0, 0.54)" }}
                  >
                    <line x1="12" y1="5" x2="12" y2="19" />
                    <line x1="5" y1="12" x2="19" y2="12" />
                  </svg>
                </div>
              </button>

              {/* Answer content */}
              <div
                style={{
                  overflow: "hidden",
                  maxHeight: openIndex === index ? "500px" : "0px",
                  opacity: openIndex === index ? 1 : 0,
                  transition: "max-height 0.3s ease, opacity 0.3s ease",
                }}
              >
                <p
                  style={{
                    fontFamily: "Inter, sans-serif",
                    fontSize: "clamp(15px, 1.6vw, 16px)",
                    fontWeight: 400,
                    letterSpacing: "-0.01em",
                    lineHeight: 1.7,
                    margin: 0,
                    color: "rgba(0, 0, 0, 0.54)",
                    WebkitFontSmoothing: "antialiased",
                    paddingBottom: "clamp(20px, 3vh, 28px)",
                    paddingRight: "48px",
                  }}
                >
                  {faq.answer}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
