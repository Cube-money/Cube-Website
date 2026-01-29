"use client";

import Header from "@/utils/Header";
import Footer from "@/utils/Footer";
import Image from "next/image";

export default function ChoosingWinnerPage() {
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
                  How are winners<br />chosen?
                </h1>
              </div>
              <div className="flex items-center justify-start" style={{ marginTop: "auto" }}>
                <a
                  href="#how-cube-chooses"
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
                      .getElementById("how-cube-chooses")
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
                  backgroundColor: "#008BF2",
                }}
              >
                <div className="absolute inset-0 flex items-center justify-center p-10">
                  <Image
                    src="/learn/choosing-winner.png"
                    alt="Choosing winner illustration"
                    width={900}
                    height={900}
                    style={{
                      maxWidth: "520px",
                      width: "85%",
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
            <div id="how-cube-chooses" style={{ scrollMarginTop: "100px" }} />
            <p
              className="text-4xl sm:text-5xl mb-4"
              style={{
                fontFamily: "var(--font-instrument-serif), serif",
                color: "#222222",
                fontWeight: 400,
                lineHeight: "1.15",
              }}
            >
              Fair by design. No favors. No guessing.
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
              Every Cube runs on one simple rule:{" "}
              <strong style={{ fontWeight: 700 }}>winners are chosen at random each cycle.</strong>
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
              When you create or join a Cube, everyone agrees upfront on the <strong style={{ fontWeight: 700 }}>cycle duration</strong>.
              That can be weekly, bi-weekly, monthly, or every three months. Once the cycle starts, the rules are locked
              in. No one can tweak them mid-stream. No one can influence the outcome.
            </p>

            <h3
              className="text-2xl mb-4"
              style={{
                fontFamily: "var(--font-instrument-serif), serif",
                color: "#222222",
                fontWeight: 600,
              }}
            >
              How the selection works
            </h3>
            <p
              className="text-base mb-4"
              style={{
                fontFamily: "Inter, sans-serif",
                color: "#222222",
                fontWeight: 400,
                lineHeight: "1.6",
              }}
            >
              At the start of each cycle, Cube randomly selects one eligible member as the winner. The selection is
              fully automated and not controlled by any member or by the Cube creator.
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
              When a winner is chosen, everyone in the Cube is notified immediately. There’s no waiting, no manual
              confirmation, and no behind-the-scenes decision making.
            </p>

            <p
              className="text-base mb-3"
              style={{
                fontFamily: "Inter, sans-serif",
                color: "#222222",
                fontWeight: 600,
                lineHeight: "1.6",
              }}
            >
              If you’re selected as the winner:
            </p>
            <ul
              className="text-base mb-6"
              style={{
                fontFamily: "Inter, sans-serif",
                color: "#222222",
                fontWeight: 400,
                lineHeight: "1.8",
                paddingLeft: "1.25rem",
                listStyleType: "disc",
              }}
            >
              <li>You’ll receive a notification letting you know</li>
              <li>Other members will send you their contributions</li>
              <li>You are not required to send a contribution for that cycle</li>
            </ul>

            <p
              className="text-base mb-3"
              style={{
                fontFamily: "Inter, sans-serif",
                color: "#222222",
                fontWeight: 600,
                lineHeight: "1.6",
              }}
            >
              If you’re not selected:
            </p>
            <ul
              className="text-base mb-10"
              style={{
                fontFamily: "Inter, sans-serif",
                color: "#222222",
                fontWeight: 400,
                lineHeight: "1.8",
                paddingLeft: "1.25rem",
                listStyleType: "disc",
              }}
            >
              <li>You’ll receive a notification announcing the winner</li>
              <li>You’ll have 24–48 hours to send your contribution to the winner</li>
            </ul>

            <h3
              className="text-2xl mb-4"
              style={{
                fontFamily: "var(--font-instrument-serif), serif",
                color: "#222222",
                fontWeight: 600,
              }}
            >
              What happens after a cycle
            </h3>
            <p
              className="text-base mb-4"
              style={{
                fontFamily: "Inter, sans-serif",
                color: "#222222",
                fontWeight: 400,
                lineHeight: "1.6",
              }}
            >
              Once a member has won a cycle, they are removed from the draw pool for future cycles. That means:
            </p>
            <ul
              className="text-base mb-4"
              style={{
                fontFamily: "Inter, sans-serif",
                color: "#222222",
                fontWeight: 400,
                lineHeight: "1.8",
                paddingLeft: "1.25rem",
                listStyleType: "disc",
              }}
            >
              <li>You can only win once per Cube</li>
              <li>Past winners cannot be selected again</li>
              <li>Each cycle includes only members who haven’t had their turn yet</li>
            </ul>
            <p
              className="text-base mb-10"
              style={{
                fontFamily: "Inter, sans-serif",
                color: "#222222",
                fontWeight: 400,
                lineHeight: "1.6",
              }}
            >
              This continues until every member has been selected exactly once. When the final member wins, the Cube
              completes its full rotation.
            </p>

            <h3
              className="text-2xl mb-4"
              style={{
                fontFamily: "var(--font-instrument-serif), serif",
                color: "#222222",
                fontWeight: 600,
              }}
            >
              Full transparency, always
            </h3>
            <p
              className="text-base mb-4"
              style={{
                fontFamily: "Inter, sans-serif",
                color: "#222222",
                fontWeight: 400,
                lineHeight: "1.6",
              }}
            >
              On the Cube detail page, you can see:
            </p>
            <ul
              className="text-base mb-4"
              style={{
                fontFamily: "Inter, sans-serif",
                color: "#222222",
                fontWeight: 400,
                lineHeight: "1.8",
                paddingLeft: "1.25rem",
                listStyleType: "disc",
              }}
            >
              <li>The current cycle winner</li>
              <li>All previous winners</li>
              <li>The cycle status and progression</li>
            </ul>
            <p
              className="text-base mb-10"
              style={{
                fontFamily: "Inter, sans-serif",
                color: "#222222",
                fontWeight: 400,
                lineHeight: "1.6",
              }}
            >
              This information is visible to all members of the Cube. Nothing is hidden. Nothing is private to one
              person.
            </p>

            <h3
              className="text-2xl mb-4"
              style={{
                fontFamily: "var(--font-instrument-serif), serif",
                color: "#222222",
                fontWeight: 600,
              }}
            >
              Why Cube does it this way
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
              Random selection removes pressure, favoritism, and awkward conversations. It keeps things fair,
              predictable, and drama-free while still moving fast.
            </p>
            <p
              className="text-base mb-6"
              style={{
                fontFamily: "Inter, sans-serif",
                color: "#222222",
                fontWeight: 400,
                lineHeight: "1.8",
              }}
            >
              Everyone knows the rules.
              <br />
              Everyone gets a turn.
              <br />
              And no one controls the outcome.
            </p>
            <p
              className="text-base"
              style={{
                fontFamily: "Inter, sans-serif",
                color: "#222222",
                fontWeight: 400,
                lineHeight: "1.6",
              }}
            >
              That’s how Cube keeps saving simple and fair.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}

