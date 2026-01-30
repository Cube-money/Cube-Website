"use client";

import Header from "@/utils/Header";
import Footer from "@/utils/Footer";
import Image from "next/image";
import Link from "next/link";

export default function BadgeSystemPage() {
  return (
    <main className="min-h-screen" style={{ backgroundColor: "#fcfaf7" }}>
      <Header />
      <div className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-6 items-start">
            {/* Left Section - Text */}
            <div className="flex flex-col min-h-0 md:min-h-[500px]">
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
                  What is the
                  <br />
                  badge system?
                </h1>
              </div>

              <div className="flex items-center justify-start" style={{ marginTop: "auto" }}>
                <a
                  href="#badge-system-content"
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
                      .getElementById("badge-system-content")
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
            <div className="max-w-[85vw] md:max-w-none mx-auto w-full">
              <div
                className="overflow-hidden min-h-[240px] max-h-[45vh] md:min-h-[500px] md:max-h-none"
                style={{
                  borderRadius: "0",
                  position: "relative",
                  backgroundColor: "#F3EAD6",
                }}
              >
                <div className="absolute inset-0 flex items-center justify-center p-10">
                  <Image
                    src="/learn/badge-systems.png"
                    alt="Badge system illustration"
                    width={900}
                    height={900}
                    className="max-h-full w-auto object-contain"
                    style={{
                      maxWidth: "min(380px, 85vw)",
                      width: "68%",
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
            <div id="badge-system-content" style={{ scrollMarginTop: "100px" }} />

            <p
              className="text-4xl sm:text-5xl mb-4"
              style={{
                fontFamily: "var(--font-instrument-serif), serif",
                color: "#222222",
                fontWeight: 400,
                lineHeight: "1.15",
              }}
            >
              Progress you earn. Recognition you don’t have to ask for.
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
              Cube rewards consistency, not hype. That’s where badges come in.
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
              Badges are earned automatically as you hit meaningful milestones across your Cubes. They’re designed to
              reflect how reliably you show up, how often you follow through, and how trusted you are by others.
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
              Badges are hidden by default and only revealed once you earn them. There’s no checklist to game and no
              way to unlock them early. You earn them by doing the right things, consistently.
            </p>

            <h3
              className="text-2xl mb-4"
              style={{
                fontFamily: "var(--font-instrument-serif), serif",
                color: "#222222",
                fontWeight: 600,
              }}
            >
              Why badges exist
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
              Badges are not about competition. They’re about pride, progress, and quiet credibility.
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
              They help:
            </p>

            <ul
              className="text-base mb-8"
              style={{
                fontFamily: "Inter, sans-serif",
                color: "#222222",
                fontWeight: 400,
                lineHeight: "1.8",
                paddingLeft: "1.25rem",
                listStyleType: "disc",
              }}
            >
              <li>Highlight consistent contributors</li>
              <li>Signal reliability within Circles</li>
              <li>Build trust without needing explanations</li>
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
              Badges make your track record visible in a way that feels earned, not performative.
            </p>

            <h3
              className="text-2xl mb-4"
              style={{
                fontFamily: "var(--font-instrument-serif), serif",
                color: "#222222",
                fontWeight: 600,
              }}
            >
              How badges are unlocked
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
              Each badge is tied to a specific milestone. Once you hit it, the badge unlocks automatically and becomes
              visible.
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
              You don’t need to apply.
              <br />
              You don’t need approval.
              <br />
              You just need to show up.
            </p>

            <h3
              className="text-2xl mb-4"
              style={{
                fontFamily: "var(--font-instrument-serif), serif",
                color: "#222222",
                fontWeight: 600,
              }}
            >
              Available badges
            </h3>

            <h4
              className="text-xl mb-2"
              style={{
                fontFamily: "var(--font-instrument-serif), serif",
                color: "#222222",
                fontWeight: 600,
              }}
            >
              First Cube Completed
            </h4>
            <p
              className="text-base mb-4"
              style={{
                fontFamily: "Inter, sans-serif",
                color: "#222222",
                fontWeight: 400,
                lineHeight: "1.6",
              }}
            >
              Complete your first Cube and receive a payout. This badge marks your first full cycle from start to
              finish and shows that you’ve seen a Cube all the way through.
            </p>

            <h4
              className="text-xl mb-2"
              style={{
                fontFamily: "var(--font-instrument-serif), serif",
                color: "#222222",
                fontWeight: 600,
              }}
            >
              Perfect Player
            </h4>
            <p
              className="text-base mb-4"
              style={{
                fontFamily: "Inter, sans-serif",
                color: "#222222",
                fontWeight: 400,
                lineHeight: "1.6",
              }}
            >
              Complete an entire Cube with zero late or missed payments. This badge signals consistency and reliability
              across every cycle.
            </p>

            <h4
              className="text-xl mb-2"
              style={{
                fontFamily: "var(--font-instrument-serif), serif",
                color: "#222222",
                fontWeight: 600,
              }}
            >
              Reliable Contributor
            </h4>
            <p
              className="text-base mb-4"
              style={{
                fontFamily: "Inter, sans-serif",
                color: "#222222",
                fontWeight: 400,
                lineHeight: "1.6",
              }}
            >
              Complete three or more cycles across any Cubes. This badge reflects sustained participation, not just a
              one-time effort.
            </p>

            <h4
              className="text-xl mb-2"
              style={{
                fontFamily: "var(--font-instrument-serif), serif",
                color: "#222222",
                fontWeight: 600,
              }}
            >
              Cube Host
            </h4>
            <p
              className="text-base mb-4"
              style={{
                fontFamily: "Inter, sans-serif",
                color: "#222222",
                fontWeight: 400,
                lineHeight: "1.6",
              }}
            >
              Create a Cube that successfully completes its full rotation. This badge recognizes leadership and
              coordination, not just participation.
            </p>

            <h4
              className="text-xl mb-2"
              style={{
                fontFamily: "var(--font-instrument-serif), serif",
                color: "#222222",
                fontWeight: 600,
              }}
            >
              Trusted by Circles
            </h4>
            <p
              className="text-base mb-10"
              style={{
                fontFamily: "Inter, sans-serif",
                color: "#222222",
                fontWeight: 400,
                lineHeight: "1.6",
              }}
            >
              Be invited to Cubes by two or more different users. This badge signals that others trust you enough to
              bring you into their Circles.
            </p>

            <h3
              className="text-2xl mb-4"
              style={{
                fontFamily: "var(--font-instrument-serif), serif",
                color: "#222222",
                fontWeight: 600,
              }}
            >
              What badges mean inside a Circle
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
              Badges help members quickly understand who they’re saving with. They don’t replace Trust Score, but they
              complement it by highlighting long-term behavior and milestones. They add quiet signal, not noise.
            </p>

            <h3
              className="text-2xl mb-4"
              style={{
                fontFamily: "var(--font-instrument-serif), serif",
                color: "#222222",
                fontWeight: 600,
              }}
            >
              The bigger picture
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
              Badges aren’t trophies. They’re proof.
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
              They show consistency over time.
              <br />
              They reflect how others experience saving with you.
              <br />
              And they help make accountability visible without pressure.
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
              On Cube, progress speaks for itself.
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

          {/* Related Articles Cards */}
          <div className="grid md:grid-cols-3 gap-6 mt-8">
            <div>
              <Link href="/learn/wallet-management">
                <div
                  className="overflow-hidden cursor-pointer"
                  style={{ minHeight: "300px", borderRadius: "0", backgroundColor: "#B6E0E5", position: "relative" }}
                >
                  <div className="absolute inset-0 flex items-center justify-center p-10">
                    <Image
                      src="/learn/wallet-management.png"
                      alt="Wallet management"
                      width={900}
                      height={900}
                      style={{
                        maxWidth: "260px",
                        width: "75%",
                        height: "auto",
                        objectFit: "contain",
                        transition: "transform 0.5s ease-out",
                        transform: "scale(1)",
                        willChange: "transform",
                        backfaceVisibility: "hidden",
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.transform = "scale(1.1)";
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.transform = "scale(1)";
                      }}
                    />
                  </div>
                </div>
              </Link>
              <div className="pt-6">
                <p className="text-xs mb-3" style={{ fontFamily: "Inter, sans-serif", color: "#666666", fontWeight: 400, letterSpacing: "0.05em" }}>
                  CUBE LIBRARY · JAN 26, 2026
                </p>
                <h3 className="text-2xl mb-2" style={{ fontFamily: "var(--font-instrument-serif), serif", color: "#222222", fontWeight: 600 }}>
                  What is wallet management?
                </h3>
                <p className="text-sm" style={{ fontFamily: "Inter, sans-serif", color: "#666666", fontWeight: 400 }}>
                  Cube keeps wallet setup simple because it only needs one thing: a way for other members to send you money when it's your turn to win.
                </p>
              </div>
            </div>

            <div>
              <Link href="/learn/trust-score">
                <div
                  className="overflow-hidden cursor-pointer"
                  style={{ minHeight: "300px", borderRadius: "0", backgroundColor: "#FFDDAA", position: "relative" }}
                >
                  <div className="absolute inset-0 flex items-center justify-center p-10">
                    <Image
                      src="/learn/trust-score.png"
                      alt="Trust Score"
                      width={900}
                      height={900}
                      style={{
                        maxWidth: "240px",
                        width: "70%",
                        height: "auto",
                        objectFit: "contain",
                        transition: "transform 0.5s ease-out",
                        transform: "scale(1)",
                        willChange: "transform",
                        backfaceVisibility: "hidden",
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.transform = "scale(1.1)";
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.transform = "scale(1)";
                      }}
                    />
                  </div>
                </div>
              </Link>
              <div className="pt-6">
                <p className="text-xs mb-3" style={{ fontFamily: "Inter, sans-serif", color: "#666666", fontWeight: 400, letterSpacing: "0.05em" }}>
                  CUBE LIBRARY · JAN 26, 2026
                </p>
                <h3 className="text-2xl mb-2" style={{ fontFamily: "var(--font-instrument-serif), serif", color: "#222222", fontWeight: 600 }}>
                  What is a Trust Score?
                </h3>
                <p className="text-sm" style={{ fontFamily: "Inter, sans-serif", color: "#666666", fontWeight: 400 }}>
                  When you join Cube, you start with a Trust Score of 100%. From there, your actions do the talking. Trust Score isn't about promises or intentions. It's a simple reflection of how reliably you show up for your Cube.
                </p>
              </div>
            </div>

            <div>
              <Link href="/learn/choosing-winner">
                <div
                  className="overflow-hidden cursor-pointer"
                  style={{ minHeight: "300px", borderRadius: "0", backgroundColor: "#008BF2", position: "relative" }}
                >
                  <div className="absolute inset-0 flex items-center justify-center p-10">
                    <Image
                      src="/learn/choosing-winner.png"
                      alt="Choosing winners"
                      width={900}
                      height={900}
                      style={{
                        maxWidth: "320px",
                        width: "85%",
                        height: "auto",
                        objectFit: "contain",
                        transition: "transform 0.5s ease-out",
                        transform: "scale(1)",
                        willChange: "transform",
                        backfaceVisibility: "hidden",
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.transform = "scale(1.1)";
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.transform = "scale(1)";
                      }}
                    />
                  </div>
                </div>
              </Link>
              <div className="pt-6">
                <p className="text-xs mb-3" style={{ fontFamily: "Inter, sans-serif", color: "#666666", fontWeight: 400, letterSpacing: "0.05em" }}>
                  CUBE LIBRARY · JAN 26, 2026
                </p>
                <h3 className="text-2xl mb-2" style={{ fontFamily: "var(--font-instrument-serif), serif", color: "#222222", fontWeight: 600 }}>
                  How are winners chosen?
                </h3>
                <p className="text-sm" style={{ fontFamily: "Inter, sans-serif", color: "#666666", fontWeight: 400 }}>
                  When you create or join a Cube, everyone agrees upfront on the cycle duration. That can be weekly, bi-weekly, monthly, or every three months. Once the cycle starts, the rules are locked in. No one can tweak them mid-stream. No one can influence the outcome.
                </p>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mt-12">
            <div>
              <Link href="/learn/contributions">
                <div
                  className="overflow-hidden cursor-pointer"
                  style={{ minHeight: "300px", borderRadius: "0", backgroundColor: "#C68CC0", position: "relative" }}
                >
                  <div className="absolute inset-0 flex items-center justify-center p-10">
                    <Image
                      src="/learn/contributions.png"
                      alt="Contributions"
                      width={900}
                      height={900}
                      style={{
                        maxWidth: "280px",
                        width: "80%",
                        height: "auto",
                        objectFit: "contain",
                        transition: "transform 0.5s ease-out",
                        transform: "scale(1)",
                        willChange: "transform",
                        backfaceVisibility: "hidden",
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.transform = "scale(1.1)";
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.transform = "scale(1)";
                      }}
                    />
                  </div>
                </div>
              </Link>
              <div className="pt-6">
                <p className="text-xs mb-3" style={{ fontFamily: "Inter, sans-serif", color: "#666666", fontWeight: 400, letterSpacing: "0.05em" }}>
                  CUBE LIBRARY · JAN 26, 2026
                </p>
                <h3 className="text-2xl mb-2" style={{ fontFamily: "var(--font-instrument-serif), serif", color: "#222222", fontWeight: 600 }}>
                  How is contributions handled?
                </h3>
                <p className="text-sm" style={{ fontFamily: "Inter, sans-serif", color: "#666666", fontWeight: 400 }}>
                  When a winner is selected in a Cube, contributions happen user to user, directly between members. Cube coordinates the process, but the money always moves on your terms.
                </p>
              </div>
            </div>

            <div>
              <Link href="/learn/invites">
                <div
                  className="overflow-hidden cursor-pointer"
                  style={{ minHeight: "300px", borderRadius: "0", backgroundColor: "#FFCADB", position: "relative" }}
                >
                  <div className="absolute inset-0 flex items-center justify-center p-10">
                    <Image
                      src="/learn/invites.png"
                      alt="Invites"
                      width={900}
                      height={900}
                      style={{
                        maxWidth: "300px",
                        width: "85%",
                        height: "auto",
                        objectFit: "contain",
                        transition: "transform 0.5s ease-out",
                        transform: "scale(1)",
                        willChange: "transform",
                        backfaceVisibility: "hidden",
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.transform = "scale(1.1)";
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.transform = "scale(1)";
                      }}
                    />
                  </div>
                </div>
              </Link>
              <div className="pt-6">
                <p className="text-xs mb-3" style={{ fontFamily: "Inter, sans-serif", color: "#666666", fontWeight: 400, letterSpacing: "0.05em" }}>
                  CUBE LIBRARY · JAN 26, 2026
                </p>
                <h3 className="text-2xl mb-2" style={{ fontFamily: "var(--font-instrument-serif), serif", color: "#222222", fontWeight: 600 }}>
                  How do invites work?
                </h3>
                <p className="text-sm" style={{ fontFamily: "Inter, sans-serif", color: "#666666", fontWeight: 400 }}>
                  Cube works best with people you trust. That’s why inviting friends isn’t just encouraged, it’s built directly into how the product grows. When you invite friends to Cube, you’re not just adding people. You’re unlocking the ability to create and run more Cubes.
                </p>
              </div>
            </div>

            <div>
              <Link href="/learn/submit-receipt">
                <div
                  className="overflow-hidden cursor-pointer"
                  style={{ minHeight: "300px", borderRadius: "0", backgroundColor: "#FFCADB", position: "relative" }}
                >
                  <div className="absolute inset-0 flex items-center justify-center p-10">
                    <Image
                      src="/learn/recepit.png"
                      alt="Receipt submission"
                      width={900}
                      height={900}
                      style={{
                        maxWidth: "220px",
                        width: "70%",
                        height: "auto",
                        objectFit: "contain",
                        transition: "transform 0.5s ease-out",
                        transform: "scale(1)",
                        willChange: "transform",
                        backfaceVisibility: "hidden",
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.transform = "scale(1.1)";
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.transform = "scale(1)";
                      }}
                    />
                  </div>
                </div>
              </Link>
              <div className="pt-6">
                <p className="text-xs mb-3" style={{ fontFamily: "Inter, sans-serif", color: "#666666", fontWeight: 400, letterSpacing: "0.05em" }}>
                  CUBE LIBRARY · JAN 26, 2026
                </p>
                <h3 className="text-2xl mb-2" style={{ fontFamily: "var(--font-instrument-serif), serif", color: "#222222", fontWeight: 600 }}>
                  How to submit a receipt?
                </h3>
                <p className="text-sm" style={{ fontFamily: "Inter, sans-serif", color: "#666666", fontWeight: 400 }}>
                  Cube keeps contributions simple by breaking them into two clear actions: sending the payment and confirming it with a receipt. This keeps everyone aligned and cycles moving without friction.
                </p>
              </div>
            </div>
          </div>

          {/* Third Row - Create cube & Join cube */}
          <div className="grid md:grid-cols-3 gap-6 mt-12">
            <div>
              <Link href="/learn/create-cube">
                <div
                  className="overflow-hidden cursor-pointer"
                  style={{ minHeight: "300px", borderRadius: "0", backgroundColor: "#FF9DB6", position: "relative" }}
                >
                  <div className="absolute inset-0 flex items-center justify-center p-10">
                    <Image
                      src="/learn/create-cube.png"
                      alt="Create a cube"
                      width={900}
                      height={900}
                      style={{
                        maxWidth: "280px",
                        width: "80%",
                        height: "auto",
                        objectFit: "contain",
                        transition: "transform 0.5s ease-out",
                        transform: "scale(1)",
                        willChange: "transform",
                        backfaceVisibility: "hidden",
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.transform = "scale(1.1)";
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.transform = "scale(1)";
                      }}
                    />
                  </div>
                </div>
              </Link>
              <div className="pt-6">
                <p className="text-xs mb-3" style={{ fontFamily: "Inter, sans-serif", color: "#666666", fontWeight: 400, letterSpacing: "0.05em" }}>
                  CUBE LIBRARY · JAN 26, 2026
                </p>
                <h3 className="text-2xl mb-2" style={{ fontFamily: "var(--font-instrument-serif), serif", color: "#222222", fontWeight: 600 }}>
                  How to create a cube?
                </h3>
                <p className="text-sm" style={{ fontFamily: "Inter, sans-serif", color: "#666666", fontWeight: 400 }}>
                  Creating a Cube is about defining structure upfront so everything runs smoothly later. Cube walks you through the process step by step, with clear guardrails to keep things fair, simple, and predictable for everyone involved.
                </p>
              </div>
            </div>

            <div>
              <Link href="/learn/join-cube">
                <div
                  className="overflow-hidden cursor-pointer"
                  style={{ minHeight: "300px", borderRadius: "0", backgroundColor: "#34D457", position: "relative" }}
                >
                  <div className="absolute inset-0 flex items-center justify-center p-10">
                    <Image
                      src="/learn/join-cube.png"
                      alt="Join a cube"
                      width={900}
                      height={900}
                      style={{
                        maxWidth: "280px",
                        width: "80%",
                        height: "auto",
                        objectFit: "contain",
                        transition: "transform 0.5s ease-out",
                        transform: "scale(1)",
                        willChange: "transform",
                        backfaceVisibility: "hidden",
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.transform = "scale(1.1)";
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.transform = "scale(1)";
                      }}
                    />
                  </div>
                </div>
              </Link>
              <div className="pt-6">
                <p className="text-xs mb-3" style={{ fontFamily: "Inter, sans-serif", color: "#666666", fontWeight: 400, letterSpacing: "0.05em" }}>
                  CUBE LIBRARY · JAN 26, 2026
                </p>
                <h3 className="text-2xl mb-2" style={{ fontFamily: "var(--font-instrument-serif), serif", color: "#222222", fontWeight: 600 }}>
                  How to join a cube?
                </h3>
                <p className="text-sm" style={{ fontFamily: "Inter, sans-serif", color: "#666666", fontWeight: 400 }}>
                  Joining a Cube is designed to be fast and intentional. Every Cube is private by default, and access is controlled through an invitation code so groups stay focused and trusted.
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

