"use client";

import Header from "@/utils/Header";
import Footer from "@/utils/Footer";
import Image from "next/image";
import Link from "next/link";

export default function InvitesPage() {
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
                  How do invites
                  <br />
                  work?
                </h1>
              </div>

              <div className="flex items-center justify-start" style={{ marginTop: "auto" }}>
                <a
                  href="#how-invites-work"
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
                      .getElementById("how-invites-work")
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
                  backgroundColor: "#FFCADB",
                }}
              >
                <div className="absolute inset-0 flex items-center justify-center p-10">
                  <Image
                    src="/learn/invites.png"
                    alt="Invites illustration"
                    width={900}
                    height={900}
                    style={{
                      maxWidth: "460px",
                      width: "78%",
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
            <div id="how-invites-work" style={{ scrollMarginTop: "100px" }} />

            <p
              className="text-4xl sm:text-5xl mb-4"
              style={{
                fontFamily: "var(--font-instrument-serif), serif",
                color: "#222222",
                fontWeight: 400,
                lineHeight: "1.15",
              }}
            >
              Inviting People
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
              Grow your circle. Unlock more Cubes.
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
              Cube works best with people you trust. That’s why inviting friends isn’t just encouraged, it’s built
              directly into how the product grows.
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
              When you invite friends to Cube, you’re not just adding people. You’re unlocking the ability to create and
              run more Cubes.
            </p>

            <h3
              className="text-2xl mb-4"
              style={{
                fontFamily: "var(--font-instrument-serif), serif",
                color: "#222222",
                fontWeight: 600,
              }}
            >
              How invitations work
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
              Every account starts with a limited number of Cubes you can create. To unlock more, you invite others to
              join.
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
              Here’s the rule:
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
              <li>Invite 3 friends</li>
              <li>They join Cube</li>
              <li>They successfully make their first contribution to a Cube</li>
            </ul>

            <p
              className="text-base mb-6"
              style={{
                fontFamily: "Inter, sans-serif",
                color: "#222222",
                fontWeight: 400,
                lineHeight: "1.6",
              }}
            >
              Once all three steps are complete, you unlock 3 additional Cubes. There’s no waiting period and no manual
              approval required.
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
              You can keep inviting groups of three to unlock even more Cubes over time.
            </p>

            <h3
              className="text-2xl mb-4"
              style={{
                fontFamily: "var(--font-instrument-serif), serif",
                color: "#222222",
                fontWeight: 600,
              }}
            >
              What you unlock (and what you don’t)
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
              The Cubes you unlock through referrals increase how many Cubes you’re allowed to create. That’s it.
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
              They are:
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
              <li>Not financial assets</li>
              <li>Not stored value</li>
              <li>Not ownership</li>
              <li>Not cash or cash equivalents</li>
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
              They simply give you more flexibility to organize, join, and run Cubes with different groups.
            </p>

            <h3
              className="text-2xl mb-4"
              style={{
                fontFamily: "var(--font-instrument-serif), serif",
                color: "#222222",
                fontWeight: 600,
              }}
            >
              Why Cube uses referrals
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
              Cube is built around trust and coordination. Inviting people you already know helps keep Cubes reliable,
              active, and drama-free.
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
              Instead of ads or promotions, Cube grows through real connections. That keeps incentives aligned and the
              experience clean.
            </p>

            <h3
              className="text-2xl mb-4"
              style={{
                fontFamily: "var(--font-instrument-serif), serif",
                color: "#222222",
                fontWeight: 600,
              }}
            >
              A few important conditions
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
              Referral rewards are only granted after invited friends complete their first contribution. Creating an
              account alone isn’t enough.
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
              Cube may delay, deny, or revoke referral rewards if activity looks fraudulent, abusive, or designed to
              game the system.
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
              Referral rewards:
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
              <li>Are non-transferable</li>
              <li>Have no cash value</li>
              <li>May change as Cube evolves</li>
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
              Cube also reserves the right to modify, pause, or discontinue the referral program at any time.
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
              Inviting friends isn’t about chasing rewards. It’s about building Circles that actually work.
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
              More people you trust means:
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
              <li>Smoother cycles</li>
              <li>Faster payouts</li>
              <li>Stronger accountability</li>
            </ul>

            <p
              className="text-base"
              style={{
                fontFamily: "Inter, sans-serif",
                color: "#222222",
                fontWeight: 400,
                lineHeight: "1.8",
              }}
            >
              Invite thoughtfully. Build intentionally.
              <br />
              That’s how Cube scales one trusted circle at a time.
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

