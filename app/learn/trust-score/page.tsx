"use client";

import Header from "@/utils/Header";
import Footer from "@/utils/Footer";
import Image from "next/image";

export default function TrustScorePage() {
  return (
    <main className="min-h-screen" style={{ backgroundColor: "#fcfaf7" }}>
      <Header />
      <div className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-6 items-start">
            {/* Left Section - Text */}
            <div style={{ display: "flex", flexDirection: "column", minHeight: "500px" }}>
              <div>
                <p
                  className="text-xs mb-8 uppercase"
                  style={{
                    fontFamily: "Inter, sans-serif",
                    color: "#666666",
                    fontWeight: 400,
                    letterSpacing: "0.05em",
                  }}
                >
                  CUBE LIBRARY · JAN 26, 2026
                </p>
                <h1
                  className="text-6xl sm:text-7xl lg:text-8xl leading-tight mb-8"
                  style={{
                    fontFamily: "var(--font-instrument-serif), serif",
                    color: "#222222",
                    fontWeight: 400,
                  }}
                >
                  What is a Trust<br />Score?
                </h1>
              </div>
              <div className="flex items-center justify-start" style={{ marginTop: "auto" }}>
                <a
                  href="#how-cube-knows"
                  style={{
                    width: "48px",
                    height: "48px",
                    borderRadius: "50%",
                    border: "1px solid #999999",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    cursor: "pointer",
                    textDecoration: "none",
                    transition: "opacity 0.2s",
                  }}
                  onClick={(e) => {
                    e.preventDefault();
                    document
                      .getElementById("how-cube-knows")
                      ?.scrollIntoView({ behavior: "smooth", block: "start" });
                  }}
                >
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M10 5V15M10 15L6 11M10 15L14 11"
                      stroke="#222222"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </a>
              </div>
            </div>

            {/* Right Section - Image Container */}
            <div>
              <div
                className="overflow-hidden"
                style={{
                  minHeight: "500px",
                  borderRadius: "0",
                  position: "relative",
                  backgroundColor: "#FFDDAA",
                }}
              >
                <div className="absolute inset-0 flex items-center justify-center p-10">
                  <Image
                    src="/learn/trust-score.png"
                    alt="Trust Score illustration"
                    width={900}
                    height={900}
                    style={{
                      maxWidth: "320px",
                      width: "55%",
                      height: "auto",
                      objectFit: "contain",
                    }}
                  />
                </div>
              </div>
            </div>
          </div>

          <div
            style={{
              width: "100%",
              height: "1px",
              backgroundColor: "#999999",
              marginTop: "40px",
            }}
          />

          {/* Content Section */}
          <div id="content" style={{ marginTop: "60px", maxWidth: "800px" }}>
            <h2
              id="how-cube-knows"
              className="text-4xl mb-6"
              style={{
                fontFamily: "var(--font-instrument-serif), serif",
                color: "#222222",
                fontWeight: 600,
                scrollMarginTop: "100px",
              }}
            >
              How Cube builds accountability by default
            </h2>

            <p
              className="text-base mb-6"
              style={{
                fontFamily: "Inter, sans-serif",
                color: "#222222",
                fontWeight: 400,
                lineHeight: "1.6",
              }}
            >
              Trust is the backbone of every Cube. That's why Trust Score exists.
            </p>

            <p
              className="text-base mb-8"
              style={{
                fontFamily: "Inter, sans-serif",
                color: "#222222",
                fontWeight: 400,
                lineHeight: "1.6",
              }}
            >
              When you join Cube, you start with a Trust Score of 100%. From there, your actions do the talking.
              Trust Score isn't about promises or intentions. It's a simple reflection of how reliably you show up
              for your Cube.
            </p>

            <h3
              className="text-3xl mb-4 mt-12"
              style={{
                fontFamily: "var(--font-instrument-serif), serif",
                color: "#222222",
                fontWeight: 600,
              }}
            >
              What Trust Score is
            </h3>

            <p
              className="text-base mb-6"
              style={{
                fontFamily: "Inter, sans-serif",
                color: "#222222",
                fontWeight: 400,
                lineHeight: "1.6",
              }}
            >
              Trust Score measures how consistently you contribute on time across all the Cubes you're part of.
              Every Cube you join feeds into one overall score, so your reputation follows you wherever you go.
            </p>

            <p
              className="text-base mb-6"
              style={{
                fontFamily: "Inter, sans-serif",
                color: "#222222",
                fontWeight: 400,
                lineHeight: "1.6",
              }}
            >
              When a winner is announced in a Cube, all other members have a 24–48 hour contribution window.
              Contribute within that window, and your Trust Score increases. Miss it, and your Trust Score takes a
              hit.
            </p>

            <p
              className="text-base mb-8"
              style={{
                fontFamily: "Inter, sans-serif",
                color: "#222222",
                fontWeight: 400,
                lineHeight: "1.6",
              }}
            >
              That's it. No hidden rules. No subjective judgment.
            </p>

            <p
              className="text-base mb-10"
              style={{
                fontFamily: "Inter, sans-serif",
                color: "#222222",
                fontWeight: 400,
                lineHeight: "1.6",
              }}
            >
              Your Trust Score is visible to everyone in your Cube. This transparency helps members understand who
              they're building with and creates shared accountability from day one.
            </p>

            <h3
              className="text-3xl mb-4 mt-12"
              style={{
                fontFamily: "var(--font-instrument-serif), serif",
                color: "#222222",
                fontWeight: 600,
              }}
            >
              What Trust Score is not
            </h3>

            <p
              className="text-base mb-6"
              style={{
                fontFamily: "Inter, sans-serif",
                color: "#222222",
                fontWeight: 400,
                lineHeight: "1.6",
              }}
            >
              Trust Score is not a credit score. It's not tied to your bank, your income, or your financial
              history. It's not influenced by how much money you have.
            </p>

            <p
              className="text-base mb-10"
              style={{
                fontFamily: "Inter, sans-serif",
                color: "#222222",
                fontWeight: 400,
                lineHeight: "1.6",
              }}
            >
              It only reflects one thing: whether you follow through.
            </p>

            <h3
              className="text-3xl mb-4 mt-12"
              style={{
                fontFamily: "var(--font-instrument-serif), serif",
                color: "#222222",
                fontWeight: 600,
              }}
            >
              How Trust Score changes
            </h3>

            <p
              className="text-base mb-6"
              style={{
                fontFamily: "Inter, sans-serif",
                color: "#222222",
                fontWeight: 400,
                lineHeight: "1.6",
              }}
            >
              On-time contributions increase your score. Missed or late contributions decrease your score.
              Completed cycles strengthen your score over time.
            </p>

            <p
              className="text-base mb-4"
              style={{
                fontFamily: "Inter, sans-serif",
                color: "#222222",
                fontWeight: 400,
                lineHeight: "1.6",
              }}
            >
              In the app, you'll see this reflected visually through circles:
            </p>

            <ul
              className="mb-6 ml-6"
              style={{
                fontFamily: "Inter, sans-serif",
                color: "#222222",
                fontWeight: 400,
                lineHeight: "1.6",
                listStyleType: "disc",
              }}
            >
              <li className="mb-2">Green circles show positive impact</li>
              <li className="mb-2">Red circles show negative impact</li>
              <li className="mb-2">Neutral circles mean no change yet</li>
              <li>Larger circles mean a bigger impact, so consistency matters more than one-off actions.</li>
            </ul>

            <h3
              className="text-3xl mb-4 mt-12"
              style={{
                fontFamily: "var(--font-instrument-serif), serif",
                color: "#222222",
                fontWeight: 600,
              }}
            >
              Why Cube uses Trust Score
            </h3>

            <p
              className="text-base mb-8"
              style={{
                fontFamily: "Inter, sans-serif",
                color: "#222222",
                fontWeight: 400,
                lineHeight: "1.6",
              }}
            >
              Cube is designed to feel safe without being rigid. Trust Score creates an environment where
              accountability is built in by default, not enforced through pressure or micromanagement.
            </p>

            <ul
              className="mb-8 ml-6"
              style={{
                fontFamily: "Inter, sans-serif",
                color: "#222222",
                fontWeight: 400,
                lineHeight: "1.6",
                listStyleType: "disc",
              }}
            >
              <li className="mb-2">You can quickly understand how reliable other members are.</li>
              <li className="mb-2">Others can trust that you'll show up when it's your turn.</li>
              <li>And everyone benefits from a system that rewards follow-through.</li>
            </ul>

            <p
              className="text-base"
              style={{
                fontFamily: "Inter, sans-serif",
                color: "#222222",
                fontWeight: 400,
                lineHeight: "1.6",
              }}
            >
              Trust isn't assumed on Cube. It's earned, visible, and shared.
            </p>
          </div>

          <div
            style={{
              width: "100%",
              height: "1px",
              backgroundColor: "#999999",
              marginTop: "60px",
            }}
          />

          <h2
            className="text-4xl mt-12 mb-8"
            style={{
              fontFamily: "var(--font-instrument-serif), serif",
              color: "#222222",
              fontWeight: 600,
            }}
          >
            Related Articles
          </h2>

          {/* Related Articles Cards (no images) */}
          <div className="grid md:grid-cols-3 gap-6 mt-8">
            <div>
              <div
                className="overflow-hidden"
                style={{ minHeight: "300px", borderRadius: "0", backgroundColor: "#f5f5f0" }}
              />
              <div className="pt-6">
                <p
                  className="text-xs mb-3"
                  style={{
                    fontFamily: "Inter, sans-serif",
                    color: "#666666",
                    fontWeight: 400,
                    letterSpacing: "0.05em",
                  }}
                >
                  CUBE LIBRARY · JAN 26, 2026
                </p>
                <h3
                  className="text-2xl mb-2"
                  style={{
                    fontFamily: "var(--font-instrument-serif), serif",
                    color: "#222222",
                    fontWeight: 600,
                  }}
                >
                  What is the badge system?
                </h3>
                <p className="text-sm" style={{ fontFamily: "Inter, sans-serif", color: "#666666", fontWeight: 400 }}>
                  Unveiling the Future of Web Design
                </p>
              </div>
            </div>

            <div>
              <div
                className="overflow-hidden"
                style={{ minHeight: "300px", borderRadius: "0", backgroundColor: "#ffe4d6" }}
              />
              <div className="pt-6">
                <p
                  className="text-xs mb-3"
                  style={{
                    fontFamily: "Inter, sans-serif",
                    color: "#666666",
                    fontWeight: 400,
                    letterSpacing: "0.05em",
                  }}
                >
                  CUBE LIBRARY · JAN 26, 2026
                </p>
                <h3
                  className="text-2xl mb-2"
                  style={{
                    fontFamily: "var(--font-instrument-serif), serif",
                    color: "#222222",
                    fontWeight: 600,
                  }}
                >
                  What is a Trust Score?
                </h3>
                <p className="text-sm" style={{ fontFamily: "Inter, sans-serif", color: "#666666", fontWeight: 400 }}>
                  Unveiling the Future of Web Design
                </p>
              </div>
            </div>

            <div>
              <div
                className="overflow-hidden"
                style={{ minHeight: "300px", borderRadius: "0", backgroundColor: "#e0f2fe" }}
              />
              <div className="pt-6">
                <p
                  className="text-xs mb-3"
                  style={{
                    fontFamily: "Inter, sans-serif",
                    color: "#666666",
                    fontWeight: 400,
                    letterSpacing: "0.05em",
                  }}
                >
                  CUBE LIBRARY · JAN 26, 2026
                </p>
                <h3
                  className="text-2xl mb-2"
                  style={{
                    fontFamily: "var(--font-instrument-serif), serif",
                    color: "#222222",
                    fontWeight: 600,
                  }}
                >
                  How are winners chosen?
                </h3>
                <p className="text-sm" style={{ fontFamily: "Inter, sans-serif", color: "#666666", fontWeight: 400 }}>
                  Unveiling the Future of Web Design
                </p>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mt-12">
            <div>
              <div
                className="overflow-hidden"
                style={{ minHeight: "300px", borderRadius: "0", backgroundColor: "#f0e7ff" }}
              />
              <div className="pt-6">
                <p
                  className="text-xs mb-3"
                  style={{
                    fontFamily: "Inter, sans-serif",
                    color: "#666666",
                    fontWeight: 400,
                    letterSpacing: "0.05em",
                  }}
                >
                  CUBE LIBRARY · JAN 26, 2026
                </p>
                <h3
                  className="text-2xl mb-2"
                  style={{
                    fontFamily: "var(--font-instrument-serif), serif",
                    color: "#222222",
                    fontWeight: 600,
                  }}
                >
                  How is contributions handled?
                </h3>
                <p className="text-sm" style={{ fontFamily: "Inter, sans-serif", color: "#666666", fontWeight: 400 }}>
                  Unveiling the Future of Web Design
                </p>
              </div>
            </div>

            <div>
              <div
                className="overflow-hidden"
                style={{ minHeight: "300px", borderRadius: "0", backgroundColor: "#dcfce7" }}
              />
              <div className="pt-6">
                <p
                  className="text-xs mb-3"
                  style={{
                    fontFamily: "Inter, sans-serif",
                    color: "#666666",
                    fontWeight: 400,
                    letterSpacing: "0.05em",
                  }}
                >
                  CUBE LIBRARY · JAN 26, 2026
                </p>
                <h3
                  className="text-2xl mb-2"
                  style={{
                    fontFamily: "var(--font-instrument-serif), serif",
                    color: "#222222",
                    fontWeight: 600,
                  }}
                >
                  How do invites work?
                </h3>
                <p className="text-sm" style={{ fontFamily: "Inter, sans-serif", color: "#666666", fontWeight: 400 }}>
                  Unveiling the Future of Web Design
                </p>
              </div>
            </div>

            <div>
              <div
                className="overflow-hidden"
                style={{ minHeight: "300px", borderRadius: "0", backgroundColor: "#fef3c7" }}
              />
              <div className="pt-6">
                <p
                  className="text-xs mb-3"
                  style={{
                    fontFamily: "Inter, sans-serif",
                    color: "#666666",
                    fontWeight: 400,
                    letterSpacing: "0.05em",
                  }}
                >
                  CUBE LIBRARY · JAN 26, 2026
                </p>
                <h3
                  className="text-2xl mb-2"
                  style={{
                    fontFamily: "var(--font-instrument-serif), serif",
                    color: "#222222",
                    fontWeight: 600,
                  }}
                >
                  How to submit a receipt?
                </h3>
                <p className="text-sm" style={{ fontFamily: "Inter, sans-serif", color: "#666666", fontWeight: 400 }}>
                  Unveiling the Future of Web Design
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}

