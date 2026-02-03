"use client";

import { useState } from "react";

export default function SignupMain() {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    if (!name.trim()) {
      setError("Please enter your name");
      return;
    }

    if (!email) {
      setError("Please enter your email");
      return;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setError("Please enter a valid email");
      return;
    }

    setIsLoading(true);

    // Simulate API call - replace with actual API
    await new Promise((resolve) => setTimeout(resolve, 1000));

    setIsLoading(false);
    setIsSubmitted(true);
  };

  return (
    <section
      style={{
        position: "relative",
        width: "100%",
        minHeight: "100dvh",
        overflow: "hidden",
        backgroundColor: "#0a0a0a",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        paddingTop: "env(safe-area-inset-top)",
        paddingBottom: "env(safe-area-inset-bottom)",
      }}
    >
      {/* Background video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
        width={1920}
        height={1080}
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover",
          zIndex: 0,
          backgroundColor: "#0a0a0a",
        }}
      >
        <source src="/Home/Hero/footervideo_compressed.mp4" type="video/mp4" />
      </video>

      {/* Dark overlay */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundColor: "rgba(0, 0, 0, 0.6)",
          zIndex: 1,
        }}
      />

      {/* Content */}
      <div
        style={{
          position: "relative",
          zIndex: 2,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          textAlign: "center",
          width: "100%",
          maxWidth: "min(520px, calc(100% - 32px))",
          padding: "clamp(32px, 8vh, 120px) clamp(16px, 4vw, 24px)",
          boxSizing: "border-box",
        }}
      >
        {!isSubmitted ? (
          <>
            {/* Small label */}
            <span
              style={{
                fontFamily: "Inter, sans-serif",
                fontSize: "11px",
                fontWeight: 500,
                letterSpacing: "0.2em",
                textTransform: "uppercase",
                color: "rgba(255, 255, 255, 0.7)",
                WebkitFontSmoothing: "antialiased",
                marginBottom: "clamp(16px, 2.5vh, 24px)",
              }}
            >
              Join the waitlist
            </span>

            {/* Headline */}
            <h1
              style={{
                fontFamily:
                  'var(--font-instrument-serif), "Instrument Serif", "Instrument Serif Placeholder", serif',
                fontStyle: "normal",
                fontWeight: 400,
                color: "rgb(255, 255, 255)",
                fontSize: "clamp(28px, 8vw, 56px)",
                letterSpacing: "-0.02em",
                lineHeight: "1.1",
                WebkitFontSmoothing: "antialiased",
                marginBottom: "clamp(10px, 1.5vh, 20px)",
                margin: 0,
              }}
            >
              Be first when Cube launches
            </h1>

            {/* Subtext */}
            <p
              style={{
                fontFamily: "Inter, sans-serif",
                fontSize: "clamp(14px, 4vw, 18px)",
                fontWeight: 400,
                letterSpacing: "-0.2px",
                lineHeight: "1.5",
                color: "rgba(255, 255, 255, 0.75)",
                WebkitFontSmoothing: "antialiased",
                marginBottom: "clamp(20px, 3vh, 40px)",
                maxWidth: "420px",
              }}
            >
              Get early access to a new way to save together. No interest, no lenders—just you and the people you trust.
            </p>

            {/* Form */}
            <form
              onSubmit={handleSubmit}
              style={{
                width: "100%",
                display: "flex",
                flexDirection: "column",
                gap: "clamp(10px, 1.5vh, 16px)",
              }}
            >
              {/* Name input */}
              <input
                type="text"
                placeholder="Your name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                autoComplete="name"
                style={{
                  width: "100%",
                  minHeight: "48px",
                  height: "clamp(48px, 7vh, 56px)",
                  padding: "0 clamp(16px, 4vw, 20px)",
                  borderRadius: "clamp(10px, 2vw, 12px)",
                  border: "1px solid rgba(255, 255, 255, 0.2)",
                  backgroundColor: "rgba(255, 255, 255, 0.08)",
                  color: "#fff",
                  fontFamily: "Inter, sans-serif",
                  fontSize: "16px",
                  outline: "none",
                  transition: "border-color 0.2s ease, background-color 0.2s ease",
                  boxSizing: "border-box",
                  WebkitAppearance: "none",
                  appearance: "none",
                }}
                onFocus={(e) => {
                  e.target.style.borderColor = "rgba(255, 255, 255, 0.4)";
                  e.target.style.backgroundColor = "rgba(255, 255, 255, 0.12)";
                }}
                onBlur={(e) => {
                  e.target.style.borderColor = "rgba(255, 255, 255, 0.2)";
                  e.target.style.backgroundColor = "rgba(255, 255, 255, 0.08)";
                }}
              />

              {/* Email input */}
              <input
                type="email"
                placeholder="Your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                autoComplete="email"
                inputMode="email"
                style={{
                  width: "100%",
                  minHeight: "48px",
                  height: "clamp(48px, 7vh, 56px)",
                  padding: "0 clamp(16px, 4vw, 20px)",
                  borderRadius: "clamp(10px, 2vw, 12px)",
                  border: error ? "1px solid #ff6b6b" : "1px solid rgba(255, 255, 255, 0.2)",
                  backgroundColor: "rgba(255, 255, 255, 0.08)",
                  color: "#fff",
                  fontFamily: "Inter, sans-serif",
                  fontSize: "16px",
                  outline: "none",
                  transition: "border-color 0.2s ease, background-color 0.2s ease",
                  boxSizing: "border-box",
                  WebkitAppearance: "none",
                  appearance: "none",
                }}
                onFocus={(e) => {
                  e.target.style.borderColor = error ? "#ff6b6b" : "rgba(255, 255, 255, 0.4)";
                  e.target.style.backgroundColor = "rgba(255, 255, 255, 0.12)";
                }}
                onBlur={(e) => {
                  e.target.style.borderColor = error ? "#ff6b6b" : "rgba(255, 255, 255, 0.2)";
                  e.target.style.backgroundColor = "rgba(255, 255, 255, 0.08)";
                }}
              />

              {/* Error message */}
              {error && (
                <span
                  style={{
                    fontFamily: "Inter, sans-serif",
                    fontSize: "13px",
                    color: "#ff6b6b",
                    textAlign: "left",
                  }}
                >
                  {error}
                </span>
              )}

              {/* Submit button */}
              <button
                type="submit"
                disabled={isLoading}
                style={{
                  width: "100%",
                  minHeight: "48px",
                  height: "clamp(48px, 7vh, 56px)",
                  borderRadius: "clamp(10px, 2vw, 12px)",
                  border: "none",
                  backgroundColor: "#C1FF35",
                  color: "rgb(17, 14, 8)",
                  fontFamily: "Inter, sans-serif",
                  fontSize: "clamp(16px, 4vw, 17px)",
                  fontWeight: 600,
                  cursor: isLoading ? "not-allowed" : "pointer",
                  opacity: isLoading ? 0.7 : 1,
                  transition: "transform 0.2s ease, opacity 0.2s ease",
                  marginTop: "clamp(4px, 1vh, 8px)",
                  WebkitTapHighlightColor: "transparent",
                }}
                onMouseEnter={(e) => {
                  if (!isLoading) e.currentTarget.style.transform = "scale(1.02)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "scale(1)";
                }}
              >
                {isLoading ? "Joining..." : "Join the waitlist"}
              </button>
            </form>

            {/* Trust text */}
            <span
              style={{
                fontFamily: "Inter, sans-serif",
                fontSize: "12px",
                fontWeight: 400,
                letterSpacing: "-0.01em",
                color: "rgba(255, 255, 255, 0.45)",
                WebkitFontSmoothing: "antialiased",
                marginTop: "clamp(16px, 2.5vh, 24px)",
              }}
            >
              No spam. We'll only email when we launch.
            </span>
          </>
        ) : (
          /* Success state */
          <>
            {/* Checkmark */}
            <div
              style={{
                width: "64px",
                height: "64px",
                borderRadius: "50%",
                backgroundColor: "#C1FF35",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                marginBottom: "clamp(20px, 3vh, 32px)",
              }}
            >
              <svg
                width="28"
                height="28"
                viewBox="0 0 24 24"
                fill="none"
                stroke="rgb(17, 14, 8)"
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <polyline points="20 6 9 17 4 12" />
              </svg>
            </div>

            {/* Success headline */}
            <h1
              style={{
                fontFamily:
                  'var(--font-instrument-serif), "Instrument Serif", "Instrument Serif Placeholder", serif',
                fontStyle: "normal",
                fontWeight: 400,
                color: "rgb(255, 255, 255)",
                fontSize: "clamp(26px, 7vw, 48px)",
                letterSpacing: "-0.02em",
                lineHeight: "1.1",
                WebkitFontSmoothing: "antialiased",
                marginBottom: "clamp(10px, 1.5vh, 20px)",
                margin: 0,
              }}
            >
              You're on the list
            </h1>

            {/* Success subtext */}
            <p
              style={{
                fontFamily: "Inter, sans-serif",
                fontSize: "clamp(14px, 4vw, 18px)",
                fontWeight: 400,
                letterSpacing: "-0.2px",
                lineHeight: "1.5",
                color: "rgba(255, 255, 255, 0.75)",
                WebkitFontSmoothing: "antialiased",
                marginBottom: "clamp(20px, 3vh, 40px)",
                maxWidth: "400px",
              }}
            >
              We'll let you know as soon as Cube is ready. Thanks for believing in a better way to save.
            </p>

            {/* Back to home button */}
            <a
              href="/"
              style={{
                textDecoration: "none",
                alignItems: "center",
                borderRadius: "clamp(24px, 4vw, 36px)",
                boxSizing: "border-box",
                display: "inline-flex",
                minHeight: "48px",
                height: "clamp(48px, 7vh, 50px)",
                justifyContent: "center",
                overflow: "hidden",
                padding: "0px clamp(20px, 4vw, 36px)",
                position: "relative",
                textAlign: "center",
                whiteSpace: "nowrap",
                backgroundColor: "rgba(255, 255, 255, 0.1)",
                border: "1px solid rgba(255, 255, 255, 0.25)",
                color: "rgb(255, 255, 255)",
                cursor: "pointer",
                WebkitFontSmoothing: "antialiased",
                WebkitTapHighlightColor: "transparent",
                transition: "background-color 0.2s ease",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = "rgba(255, 255, 255, 0.15)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = "rgba(255, 255, 255, 0.1)";
              }}
            >
              <span
                style={{
                  fontFamily: "Inter, sans-serif",
                  fontSize: "clamp(15px, 4vw, 16px)",
                  fontWeight: 500,
                  letterSpacing: "-0.25px",
                }}
              >
                Back to home
              </span>
            </a>
          </>
        )}
      </div>
    </section>
  );
}
