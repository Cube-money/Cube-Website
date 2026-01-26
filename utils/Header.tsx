"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";

export default function Header() {
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();
  const isPrivacyPage = pathname === "/privacy-policy";
  const isTermsPage = pathname === "/terms-conditions";

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      style={{
        padding: "0px 24px 0px 36px",
        alignItems: "center",
        borderBottom: "1px solid rgb(128, 128, 128)",
        display: "flex",
        height: "64px",
        zIndex: 9999,
        WebkitFontSmoothing: "antialiased",
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        backgroundColor: isPrivacyPage || isTermsPage || isScrolled ? "#000" : "transparent",
        transition: "background-color 0.3s ease",
      }}
    >
      {/* Logo */}
      <a
        href="/"
        aria-label="Cube Logo"
        style={{
          color: "rgb(255, 255, 255)",
          textDecoration: "none",
          display: "flex",
          alignItems: "center",
          gap: "0px",
        }}
      >
        <img
          src="/CubeLogo/WhiteLogo.png"
          alt="Cube Logo"
          style={{ height: "42px", width: "auto" }}
        />
        <span
          style={{
            fontSize: "20px",
            fontWeight: 500,
            letterSpacing: "-0.25px",
            lineHeight: "32px",
            fontFamily: "Inter, sans-serif",
            color: "rgb(255, 255, 255)",
          }}
        >
          Cube
        </span>
      </a>

      {/* Desktop Navigation - Centered */}
      <div
        className="hidden lg:flex"
        style={{
          position: "absolute",
          left: "50%",
          transform: "translateX(-50%)",
          alignItems: "center",
          height: "64px",
        }}
      >
        <ul
          style={{
            alignItems: "center",
            display: "flex",
            flexDirection: "row",
            listStyle: "none",
            margin: 0,
            padding: 0,
          }}
        >
          <li style={{ marginLeft: 0, display: "block", padding: 0, position: "relative", whiteSpace: "nowrap" }}>
            <a
              href="/how-it-works"
              style={{
                textDecoration: "none",
                color: "rgb(255, 255, 255)",
                display: "flex",
                alignItems: "center",
                fontSize: "16px",
                fontWeight: 400,
                letterSpacing: "-0.25px",
                lineHeight: "24px",
                fontFamily: "Inter, sans-serif",
              }}
            >
              How It Works
            </a>
          </li>
          <li style={{ marginLeft: "36px", display: "block", padding: 0, position: "relative", whiteSpace: "nowrap" }}>
            <a
              href="/stories"
              style={{
                textDecoration: "none",
                color: "rgb(255, 255, 255)",
                display: "flex",
                alignItems: "center",
                fontSize: "16px",
                fontWeight: 400,
                letterSpacing: "-0.25px",
                lineHeight: "24px",
                fontFamily: "Inter, sans-serif",
              }}
            >
              Stories
            </a>
          </li>
          <li style={{ marginLeft: "36px", display: "block", padding: 0, position: "relative", whiteSpace: "nowrap" }}>
            <a
              href="/explore"
              style={{
                textDecoration: "none",
                color: "rgb(255, 255, 255)",
                display: "flex",
                alignItems: "center",
                fontSize: "16px",
                fontWeight: 400,
                letterSpacing: "-0.25px",
                lineHeight: "24px",
                fontFamily: "Inter, sans-serif",
              }}
            >
              Explore
            </a>
          </li>
          <li style={{ marginLeft: "36px", display: "block", padding: 0, position: "relative", whiteSpace: "nowrap" }}>
            <a
              href="/learn"
              style={{
                textDecoration: "none",
                color: "rgb(255, 255, 255)",
                display: "flex",
                alignItems: "center",
                fontSize: "16px",
                fontWeight: 400,
                letterSpacing: "-0.25px",
                lineHeight: "24px",
                fontFamily: "Inter, sans-serif",
              }}
            >
              Learn
            </a>
          </li>
          <li style={{ marginLeft: "36px", display: "block", padding: 0, position: "relative", whiteSpace: "nowrap" }}>
            <a
              href="/support"
              style={{
                textDecoration: "none",
                color: "rgb(255, 255, 255)",
                display: "flex",
                alignItems: "center",
                fontSize: "16px",
                fontWeight: 400,
                letterSpacing: "-0.25px",
                lineHeight: "24px",
                fontFamily: "Inter, sans-serif",
              }}
            >
              Support
            </a>
          </li>
        </ul>
      </div>

      {/* Spacer */}
      <div style={{ flexGrow: 1 }} />

      {/* Signup Button - Desktop */}
      <div className="hidden lg:flex" style={{ alignItems: "center" }}>
        <a
          href="/signup"
          style={{
            minWidth: "140px",
            textDecoration: "none",
            alignItems: "center",
            borderRadius: "36px",
            boxSizing: "border-box",
            display: "flex",
            height: "44px",
            justifyContent: "center",
            padding: "0px 32px",
            textAlign: "center",
            whiteSpace: "nowrap",
            backgroundColor: "rgb(204, 255, 0)",
            border: "1px solid rgb(204, 255, 0)",
            color: "rgb(17, 14, 8)",
          }}
        >
          <span
            style={{
              fontSize: "16px",
              fontWeight: 400,
              letterSpacing: "-0.25px",
              lineHeight: "24px",
              fontFamily: "system-ui, -apple-system, Arial, sans-serif",
            }}
          >
            Start my Cube
          </span>
        </a>
      </div>

      {/* Mobile Hamburger Menu - Only visible on mobile */}
      <button
        type="button"
        aria-label="Drawer Menu Button"
        onClick={() => setShowMobileMenu(!showMobileMenu)}
        className="flex lg:hidden"
        style={{
          appearance: "none",
          WebkitTapHighlightColor: "transparent",
          border: "none",
          color: "rgb(255, 255, 255)",
          padding: 0,
          textAlign: "start",
          background: "transparent",
          cursor: "pointer",
        }}
      >
        <svg aria-hidden="true" fill="#FFFFFF" height="30" width="30">
          <g style={{ transformOrigin: "50% 50%", transition: "transform 0.3s" }}>
            <rect fill="transparent" height="30" width="30" x="0" y="0" />
            <rect height="3" width="30" x="0" y="7" />
          </g>
          <g style={{ transformOrigin: "50% 50%", transition: "transform 0.3s" }}>
            <rect fill="transparent" height="30" width="30" x="0" y="0" />
            <rect height="3" width="30" x="0" y="20" />
          </g>
        </svg>
      </button>

      {/* Mobile Menu Dropdown */}
      {showMobileMenu && (
        <div
          className="block lg:hidden"
          style={{
            position: "absolute",
            top: "64px",
            left: 0,
            right: 0,
            backgroundColor: "#000",
            borderTop: "1px solid rgb(128, 128, 128)",
            padding: "16px 24px",
          }}
        >
          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            <a href="/how-it-works" style={{ color: "#fff", textDecoration: "none", fontSize: "16px", fontFamily: "Inter, sans-serif" }}>How It Works</a>
            <a href="/stories" style={{ color: "#fff", textDecoration: "none", fontSize: "16px", fontFamily: "Inter, sans-serif" }}>Stories</a>
            <a href="/explore" style={{ color: "#fff", textDecoration: "none", fontSize: "16px", fontFamily: "Inter, sans-serif" }}>Explore</a>
            <a href="/learn" style={{ color: "#fff", textDecoration: "none", fontSize: "16px", fontFamily: "Inter, sans-serif" }}>Learn</a>
            <a href="/support" style={{ color: "#fff", textDecoration: "none", fontSize: "16px", fontFamily: "Inter, sans-serif" }}>Support</a>
          </div>
          <div style={{ marginTop: "24px" }}>
            <a
              href="/signup"
              style={{
                width: "100%",
                textDecoration: "none",
                alignItems: "center",
                borderRadius: "36px",
                display: "flex",
                height: "44px",
                justifyContent: "center",
                backgroundColor: "rgb(204, 255, 0)",
                border: "1px solid rgb(204, 255, 0)",
                color: "rgb(17, 14, 8)",
                fontSize: "16px",
                fontFamily: "Inter, sans-serif",
              }}
            >
              Start my Cube
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
