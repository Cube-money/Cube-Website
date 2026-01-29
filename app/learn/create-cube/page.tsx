"use client";

import Header from "@/utils/Header";
import Footer from "@/utils/Footer";
import Image from "next/image";

export default function CreateCubePage() {
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
                  Set the rules once.
                  <br />
                  Let the system run.
                </h1>
              </div>

              <div className="flex items-center justify-start" style={{ marginTop: "auto" }}>
                <a
                  href="#create-cube-content"
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
                      .getElementById("create-cube-content")
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
                  backgroundColor: "#FF9DB6",
                }}
              >
                <div className="absolute inset-0 flex items-center justify-center p-10">
                  <Image
                    src="/learn/create-cube.png"
                    alt="Create cube illustration"
                    width={900}
                    height={900}
                    style={{
                      maxWidth: "360px",
                      width: "65%",
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
            <div id="create-cube-content" style={{ scrollMarginTop: "100px" }} />

            <p
              className="text-4xl sm:text-5xl mb-4"
              style={{
                fontFamily: "var(--font-instrument-serif), serif",
                color: "#222222",
                fontWeight: 400,
                lineHeight: "1.15",
              }}
            >
              Set the rules once. Let the system run.
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
              Creating a Cube is about defining structure upfront so everything runs smoothly later. Cube walks you
              through the process step by step, with clear guardrails to keep things fair, simple, and predictable for
              everyone involved.
            </p>

            <h3
              className="text-2xl mb-4"
              style={{
                fontFamily: "var(--font-instrument-serif), serif",
                color: "#222222",
                fontWeight: 600,
              }}
            >
              Step 1: Name your Cube
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
              Start by giving your Cube a name. This helps members quickly recognize what the Cube is for. Names are kept
              concise to stay readable across the app.
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
              You can also add an optional description to give more context, but it's not required. Think of this as
              setting expectations, not writing a pitch.
            </p>

            <h3
              className="text-2xl mb-4"
              style={{
                fontFamily: "var(--font-instrument-serif), serif",
                color: "#222222",
                fontWeight: 600,
              }}
            >
              Step 2: Choose the contribution amount
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
              Next, you'll set how much each member contributes per cycle. This amount applies equally to everyone and
              stays fixed for the duration of the Cube.
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
              Cube validates contribution amounts to keep things realistic and manageable, so every Cube stays within safe
              limits.
            </p>

            <h3
              className="text-2xl mb-4"
              style={{
                fontFamily: "var(--font-instrument-serif), serif",
                color: "#222222",
                fontWeight: 600,
              }}
            >
              Step 3: Pick a cycle frequency
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
              You'll then choose how often cycles run. Cube supports:
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
              <li>Weekly</li>
              <li>Biweekly</li>
              <li>Monthly</li>
              <li>Quarterly</li>
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
              This determines how frequently winners are selected and contributions are due. Once the Cube starts, this
              schedule is locked in.
            </p>

            <h3
              className="text-2xl mb-4"
              style={{
                fontFamily: "var(--font-instrument-serif), serif",
                color: "#222222",
                fontWeight: 600,
              }}
            >
              Step 4: Select the number of members
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
              Cubes are designed for small, trusted groups. You'll choose how many people will participate, with a
              minimum and maximum to ensure coordination stays smooth.
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
              Each member will win exactly once over the full rotation.
            </p>

            <h3
              className="text-2xl mb-4"
              style={{
                fontFamily: "var(--font-instrument-serif), serif",
                color: "#222222",
                fontWeight: 600,
              }}
            >
              Step 5: Set a goal type
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
              You can optionally label your Cube by purpose, such as personal, family, business, or community. This
              helps keep Cubes organized and gives members shared context.
            </p>

            <h3
              className="text-2xl mb-4"
              style={{
                fontFamily: "var(--font-instrument-serif), serif",
                color: "#222222",
                fontWeight: 600,
              }}
            >
              Step 6: Review and create
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
              Before your Cube is created, Cube checks a few things:
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
              <li>Your inputs meet system limits</li>
              <li>You haven't exceeded your Cube allowance</li>
              <li>Your account is authenticated</li>
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
              If everything checks out, the Cube is created instantly.
            </p>

            <h3
              className="text-2xl mb-4"
              style={{
                fontFamily: "var(--font-instrument-serif), serif",
                color: "#222222",
                fontWeight: 600,
              }}
            >
              After creation
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
              Once your Cube is live, you'll receive an invitation code you can share with others. Members join, the
              cycle schedule is set, and Cube takes it from there.
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
              No manual tracking.
              <br />
              No rule changes mid-cycle.
              <br />
              No guesswork.
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
              You define the structure once.
              <br />
              Cube handles the rest.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}
