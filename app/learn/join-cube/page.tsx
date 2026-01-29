"use client";

import Header from "@/utils/Header";
import Footer from "@/utils/Footer";
import Image from "next/image";

export default function JoinCubePage() {
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
                  How to join a cube?
                </h1>
              </div>

              <div className="flex items-center justify-start" style={{ marginTop: "auto" }}>
                <a
                  href="#join-cube-content"
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
                      .getElementById("join-cube-content")
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
                  backgroundColor: "#34D457",
                }}
              >
                <div className="absolute inset-0 flex items-center justify-center p-10">
                  <Image
                    src="/learn/join-cube.png"
                    alt="Join cube illustration"
                    width={900}
                    height={900}
                    style={{
                      maxWidth: "420px",
                      width: "72%",
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
            <div id="join-cube-content" style={{ scrollMarginTop: "100px" }} />

            <p
              className="text-4xl sm:text-5xl mb-4"
              style={{
                fontFamily: "var(--font-instrument-serif), serif",
                color: "#222222",
                fontWeight: 400,
                lineHeight: "1.15",
              }}
            >
              One code. One tap. You’re in.
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
              Joining a Cube is designed to be fast and intentional. Every Cube is private by default, and access is
              controlled through an invitation code so groups stay focused and trusted.
            </p>

            <h3
              className="text-2xl mb-4"
              style={{
                fontFamily: "var(--font-instrument-serif), serif",
                color: "#222222",
                fontWeight: 600,
              }}
            >
              What you need to join
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
              To join a Cube, you’ll need an invitation code from someone already in that Cube. This code connects you
              directly to the right group and prevents random or unintended access.
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
              If you don’t have a code, you can always go back and create your own Cube or ask a member to invite you.
            </p>

            <h3
              className="text-2xl mb-4"
              style={{
                fontFamily: "var(--font-instrument-serif), serif",
                color: "#222222",
                fontWeight: 600,
              }}
            >
              Entering the invitation code
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
              On the Join Cube screen, you’ll enter the invitation code exactly as provided. Codes are case-sensitive and
              validated automatically.
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
              Once you tap Join Cube, Cube checks the code in real time to make sure it’s valid and active.
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
              If there’s an issue, you’ll see a clear message explaining what needs attention.
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
              <li>The Cube’s name and details</li>
              <li>The contribution amount</li>
              <li>The cycle frequency</li>
              <li>The current cycle status</li>
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
              You’ll also be notified if there’s an upcoming contribution or if a winner has already been selected.
            </p>

            <h3
              className="text-2xl mb-4"
              style={{
                fontFamily: "var(--font-instrument-serif), serif",
                color: "#222222",
                fontWeight: 600,
              }}
            >
              What joining means
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
              By joining a Cube, you’re agreeing to:
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
              <li>The contribution amount</li>
              <li>The cycle schedule</li>
              <li>The group size and structure</li>
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
              These rules are set when the Cube is created and can’t be changed mid-cycle. This keeps things fair for
              everyone.
            </p>

            <h3
              className="text-2xl mb-4"
              style={{
                fontFamily: "var(--font-instrument-serif), serif",
                color: "#222222",
                fontWeight: 600,
              }}
            >
              Privacy and control
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
              Only people with the invitation code can join a Cube. Cube doesn’t surface public Cubes or allow open
              discovery.
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
              This keeps Cubes intentional, predictable, and built around real relationships.
            </p>

            <h3
              className="text-2xl mb-4"
              style={{
                fontFamily: "var(--font-instrument-serif), serif",
                color: "#222222",
                fontWeight: 600,
              }}
            >
              The takeaway
            </h3>

            <p
              className="text-base mb-10"
              style={{
                fontFamily: "Inter, sans-serif",
                color: "#222222",
                fontWeight: 400,
                lineHeight: "1.6",
              }}
            >
              Joining a Cube doesn’t require setup, approvals, or extra steps.
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
              Enter the code.
              <br />
              Join the group.
              <br />
              Follow the schedule.
            </p>

            <p
              className="text-base mt-6"
              style={{
                fontFamily: "Inter, sans-serif",
                color: "#222222",
                fontWeight: 400,
                lineHeight: "1.6",
              }}
            >
              Cube handles the rest so you can focus on saving together, not managing logistics.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}
