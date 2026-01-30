"use client";

import Header from "@/utils/Header";
import Footer from "@/utils/Footer";
import Image from "next/image";
import Link from "next/link";

export default function ChoosingWinnerPage() {
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
                  How are winners<br />chosen?
                </h1>
              </div>
              <div className="flex items-center justify-start mt-auto">
                <a
                  href="#how-cube-chooses"
                  className="flex items-center justify-center w-12 h-12 rounded-full border border-[#999999] cursor-pointer no-underline transition-opacity duration-200"
                  style={{ textDecoration: "none" }}
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
            <div className="max-w-[85vw] md:max-w-none mx-auto w-full">
              <div
                className="overflow-hidden min-h-[240px] max-h-[45vh] md:min-h-[500px] md:max-h-none"
                style={{
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
                    className="max-h-full w-auto object-contain"
                    style={{
                      maxWidth: "min(520px, 85vw)",
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

          {/* Related Articles Cards (placeholder) */}
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
          </div>

          <div className="grid md:grid-cols-3 gap-6 mt-12">
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
              <Link href="/learn/badge-system">
                <div
                  className="overflow-hidden cursor-pointer"
                  style={{ minHeight: "300px", borderRadius: "0", backgroundColor: "#F3EAD6", position: "relative" }}
                >
                  <div className="absolute inset-0 flex items-center justify-center p-10">
                    <Image
                      src="/learn/badge-systems.png"
                      alt="Badge system"
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
                  What is the badge system?
                </h3>
                <p className="text-sm" style={{ fontFamily: "Inter, sans-serif", color: "#666666", fontWeight: 400 }}>
                  Badges are earned automatically as you hit meaningful milestones across your Cubes. They’re designed to reflect how reliably you show up, how often you follow through, and how trusted you are by others.
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

