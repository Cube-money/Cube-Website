"use client";

import { useState } from "react";
import React from "react";

export default function Footer() {
  const [email, setEmail] = useState("");
  const [isHovered, setIsHovered] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Handle newsletter subscription
    console.log("Subscribed:", email);
    setEmail("");
  };

  const linkStyle = (id: string) => ({
    fontSize: "14px",
    color: isHovered === id ? "rgb(0, 0, 0)" : "rgba(0, 0, 0, 0.7)",
    textDecoration: "none",
    fontFamily: "Inter, sans-serif",
    transition: "color 0.2s ease-out",
    cursor: "pointer",
  });

  return (
    <footer
      style={{
        backgroundColor: "rgb(195, 245, 60)",
        width: "100%",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <style dangerouslySetInnerHTML={{
        __html: `.footer-container {
          padding: clamp(40px, 8vh, 80px) clamp(20px, 4vw, 40px) clamp(20px, 4vh, 40px);
        }
        .footer-top-section {
          display: flex;
          flex-direction: column;
          gap: clamp(40px, 6vw, 60px);
          margin-bottom: clamp(40px, 6vh, 60px);
        }
        @media (min-width: 900px) {
          .footer-top-section {
            flex-direction: row;
            justify-content: space-between;
            align-items: flex-start;
          }
        }
        .footer-left {
          flex: 0 0 auto;
          width: 100%;
        }
        @media (min-width: 900px) {
          .footer-left {
            flex: 0 0 380px;
            width: auto;
          }
        }
        .footer-links {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: clamp(30px, 5vw, 80px);
          flex: 1;
          justify-content: flex-end;
        }
        @media (min-width: 900px) {
          .footer-links {
            display: flex;
            flex-direction: row;
            grid-template-columns: none;
          }
        }
        .footer-bottom {
          display: flex;
          flex-direction: column;
          gap: clamp(20px, 4vh, 24px);
          margin-bottom: clamp(24px, 4vh, 32px);
        }
        @media (min-width: 900px) {
          .footer-bottom {
            flex-direction: row;
            justify-content: space-between;
            align-items: center;
          }
        }
        .footer-social {
          justify-content: center;
        }
        @media (min-width: 900px) {
          .footer-social {
            justify-content: flex-start;
          }
        }
        .footer-copyright {
          text-align: center;
        }
        @media (min-width: 900px) {
          .footer-copyright {
            text-align: left;
          }
        }
        .footer-form {
          display: flex;
          flex-direction: column;
          gap: 8px;
        }
        @media (min-width: 600px) {
          .footer-form {
            flex-direction: row;
          }
        }`
      }} />
      {/* Main Footer Content */}
      <div
        className="footer-container"
        style={{
          maxWidth: "1630px",
          margin: "0 auto",
        }}
      >
        {/* Top Section - Newsletter & Links */}
        <div className="footer-top-section">
          {/* Left - Logo & Newsletter */}
          <div className="footer-left">
            {/* Logo with Text */}
            <a
              href="/"
              style={{
                display: "flex",
                alignItems: "center",
                gap: "8px",
                marginBottom: "32px",
                textDecoration: "none",
              }}
            >
              <img
                src="/CubeLogo/BlackLogo.png"
                alt="Cube Logo"
                style={{ height: "clamp(28px, 4vw, 36px)", width: "auto" }}
              />
              <span
                style={{
                  fontSize: "clamp(20px, 3vw, 24px)",
                  fontWeight: 600,
                  color: "rgb(0, 0, 0)",
                  fontFamily: "Inter, sans-serif",
                }}
              >
                Cube
              </span>
            </a>

            {/* Tagline */}
            <p
              style={{
                fontSize: "clamp(16px, 2.2vw, 18px)",
                fontWeight: 500,
                color: "rgb(0, 0, 0)",
                fontFamily: "Inter, sans-serif",
                marginBottom: "24px",
                lineHeight: "1.4",
              }}
            >
              The future of community savings.
              <br />
              Save together. Prosper together.
            </p>

            {/* Newsletter Form */}
            <div style={{ marginBottom: "16px" }}>
              <p
                style={{
                  fontSize: "14px",
                  fontWeight: 600,
                  color: "rgb(0, 0, 0)",
                  marginBottom: "12px",
                  fontFamily: "Inter, sans-serif",
                  textTransform: "uppercase",
                  letterSpacing: "0.5px",
                }}
              >
                Stay Updated
              </p>
              <form onSubmit={handleSubmit} className="footer-form">
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  style={{
                    flex: "1",
                    padding: "14px 18px",
                    border: "2px solid rgb(0, 0, 0)",
                    borderRadius: "8px",
                    backgroundColor: "transparent",
                    color: "rgb(0, 0, 0)",
                    fontSize: "14px",
                    fontFamily: "Inter, sans-serif",
                    outline: "none",
                  }}
                />
                <button
                  type="submit"
                  style={{
                    padding: "14px 24px",
                    backgroundColor: "rgb(0, 0, 0)",
                    color: "rgb(195, 245, 60)",
                    border: "none",
                    borderRadius: "8px",
                    cursor: "pointer",
                    fontSize: "14px",
                    fontWeight: 600,
                    fontFamily: "Inter, sans-serif",
                    transition: "transform 0.2s ease",
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.02)")}
                  onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
                >
                  Subscribe
                </button>
              </form>
              <p
                style={{
                  fontSize: "12px",
                  color: "rgba(0, 0, 0, 0.6)",
                  fontFamily: "Inter, sans-serif",
                  marginTop: "8px",
                }}
              >
                No spam. Unsubscribe anytime.
              </p>
            </div>
          </div>

          {/* Right - Link Columns */}
          <div className="footer-links">
            {/* Product Column */}
            <div>
              <p
                style={{
                  fontSize: "12px",
                  fontWeight: 700,
                  color: "rgb(0, 0, 0)",
                  marginBottom: "20px",
                  fontFamily: "Inter, sans-serif",
                  textTransform: "uppercase",
                  letterSpacing: "1px",
                }}
              >
                Product
              </p>
              <div style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
                <a href="/how-it-works" style={linkStyle("how")} onMouseEnter={() => setIsHovered("how")} onMouseLeave={() => setIsHovered(null)}>How It Works</a>
                <a href="/explore" style={linkStyle("explore")} onMouseEnter={() => setIsHovered("explore")} onMouseLeave={() => setIsHovered(null)}>Explore Cubes</a>
                <a href="/stories" style={linkStyle("stories")} onMouseEnter={() => setIsHovered("stories")} onMouseLeave={() => setIsHovered(null)}>Success Stories</a>
                <a href="/learn" style={linkStyle("learn")} onMouseEnter={() => setIsHovered("learn")} onMouseLeave={() => setIsHovered(null)}>Learn</a>
              </div>
            </div>

            {/* Company Column */}
            <div>
              <p
                style={{
                  fontSize: "12px",
                  fontWeight: 700,
                  color: "rgb(0, 0, 0)",
                  marginBottom: "20px",
                  fontFamily: "Inter, sans-serif",
                  textTransform: "uppercase",
                  letterSpacing: "1px",
                }}
              >
                Company
              </p>
              <div style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
                <a href="/about" style={linkStyle("about")} onMouseEnter={() => setIsHovered("about")} onMouseLeave={() => setIsHovered(null)}>About Us</a>
                <a href="/careers" style={linkStyle("careers")} onMouseEnter={() => setIsHovered("careers")} onMouseLeave={() => setIsHovered(null)}>Careers</a>
                <a href="/press" style={linkStyle("press")} onMouseEnter={() => setIsHovered("press")} onMouseLeave={() => setIsHovered(null)}>Press</a>
                <a href="/blog" style={linkStyle("blog")} onMouseEnter={() => setIsHovered("blog")} onMouseLeave={() => setIsHovered(null)}>Blog</a>
              </div>
            </div>

            {/* Resources Column */}
            <div>
              <p
                style={{
                  fontSize: "12px",
                  fontWeight: 700,
                  color: "rgb(0, 0, 0)",
                  marginBottom: "20px",
                  fontFamily: "Inter, sans-serif",
                  textTransform: "uppercase",
                  letterSpacing: "1px",
                }}
              >
                Resources
              </p>
              <div style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
                <a href="/support" style={linkStyle("support")} onMouseEnter={() => setIsHovered("support")} onMouseLeave={() => setIsHovered(null)}>Help Center</a>
                <a href="/faq" style={linkStyle("faq")} onMouseEnter={() => setIsHovered("faq")} onMouseLeave={() => setIsHovered(null)}>FAQ</a>
                <a href="/community" style={linkStyle("community")} onMouseEnter={() => setIsHovered("community")} onMouseLeave={() => setIsHovered(null)}>Community</a>
                <a href="/contact" style={linkStyle("contact")} onMouseEnter={() => setIsHovered("contact")} onMouseLeave={() => setIsHovered(null)}>Contact</a>
              </div>
            </div>

            {/* Legal Column */}
            <div>
              <p
                style={{
                  fontSize: "12px",
                  fontWeight: 700,
                  color: "rgb(0, 0, 0)",
                  marginBottom: "20px",
                  fontFamily: "Inter, sans-serif",
                  textTransform: "uppercase",
                  letterSpacing: "1px",
                }}
              >
                Legal
              </p>
              <div style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
                <a href="/privacy-policy" style={linkStyle("privacy")} onMouseEnter={() => setIsHovered("privacy")} onMouseLeave={() => setIsHovered(null)}>Privacy Policy</a>
                <a href="/terms-conditions" style={linkStyle("terms")} onMouseEnter={() => setIsHovered("terms")} onMouseLeave={() => setIsHovered(null)}>Terms of Service</a>
                <a href="/disclosures" style={linkStyle("disclosures")} onMouseEnter={() => setIsHovered("disclosures")} onMouseLeave={() => setIsHovered(null)}>Disclosures</a>
                <a href="/security" style={linkStyle("security")} onMouseEnter={() => setIsHovered("security")} onMouseLeave={() => setIsHovered(null)}>Security</a>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div
          style={{
            height: "1px",
            backgroundColor: "rgba(0, 0, 0, 0.15)",
            marginBottom: "32px",
          }}
        />

        {/* Bottom Section - Social & Copyright */}
        <div className="footer-bottom">
          {/* Social Links */}
          <div className="footer-social" style={{ display: "flex", gap: "clamp(8px, 1.5vw, 12px)", alignItems: "center" }}>
            {/* Twitter/X */}
            <a
              href="https://twitter.com/"
              target="_blank"
              rel="noopener"
              aria-label="Twitter"
              style={{
                width: "clamp(36px, 5vw, 40px)",
                height: "clamp(36px, 5vw, 40px)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                backgroundColor: "rgb(0, 0, 0)",
                borderRadius: "50%",
                transition: "transform 0.2s ease",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.1)")}
              onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
            >
              <svg width="clamp(16px, 2.2vw, 18px)" height="clamp(16px, 2.2vw, 18px)" fill="rgb(195, 245, 60)" viewBox="0 0 24 24">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
            </a>

            {/* Instagram */}
            <a
              href="https://instagram.com/"
              target="_blank"
              rel="noopener"
              aria-label="Instagram"
              style={{
                width: "clamp(36px, 5vw, 40px)",
                height: "clamp(36px, 5vw, 40px)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                backgroundColor: "rgb(0, 0, 0)",
                borderRadius: "50%",
                transition: "transform 0.2s ease",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.1)")}
              onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
            >
              <svg width="clamp(16px, 2.2vw, 18px)" height="clamp(16px, 2.2vw, 18px)" fill="rgb(195, 245, 60)" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
              </svg>
            </a>

            {/* LinkedIn */}
            <a
              href="https://linkedin.com/"
              target="_blank"
              rel="noopener"
              aria-label="LinkedIn"
              style={{
                width: "clamp(36px, 5vw, 40px)",
                height: "clamp(36px, 5vw, 40px)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                backgroundColor: "rgb(0, 0, 0)",
                borderRadius: "50%",
                transition: "transform 0.2s ease",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.1)")}
              onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
            >
              <svg width="clamp(16px, 2.2vw, 18px)" height="clamp(16px, 2.2vw, 18px)" fill="rgb(195, 245, 60)" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
            </a>

            {/* YouTube */}
            <a
              href="https://youtube.com/"
              target="_blank"
              rel="noopener"
              aria-label="YouTube"
              style={{
                width: "clamp(36px, 5vw, 40px)",
                height: "clamp(36px, 5vw, 40px)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                backgroundColor: "rgb(0, 0, 0)",
                borderRadius: "50%",
                transition: "transform 0.2s ease",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.1)")}
              onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
            >
              <svg width="clamp(16px, 2.2vw, 18px)" height="clamp(16px, 2.2vw, 18px)" fill="rgb(195, 245, 60)" viewBox="0 0 24 24">
                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
              </svg>
            </a>

            {/* TikTok */}
            <a
              href="https://tiktok.com/"
              target="_blank"
              rel="noopener"
              aria-label="TikTok"
              style={{
                width: "clamp(36px, 5vw, 40px)",
                height: "clamp(36px, 5vw, 40px)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                backgroundColor: "rgb(0, 0, 0)",
                borderRadius: "50%",
                transition: "transform 0.2s ease",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.1)")}
              onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
            >
              <svg width="clamp(14px, 2vw, 16px)" height="clamp(14px, 2vw, 16px)" fill="rgb(195, 245, 60)" viewBox="0 0 24 24">
                <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z" />
              </svg>
            </a>
          </div>

          {/* Copyright */}
          <p
            className="footer-copyright"
            style={{
              fontSize: "clamp(12px, 1.8vw, 14px)",
              color: "rgba(0, 0, 0, 0.7)",
              fontFamily: "Inter, sans-serif",
              margin: 0,
            }}
          >
            © 2026 Cube Technologies, Inc. All rights reserved.
          </p>
        </div>

        {/* Legal Disclaimer */}
        <div style={{ marginBottom: "40px" }}>
          <p
            style={{
              fontSize: "clamp(10px, 1.5vw, 12px)",
              color: "rgba(0, 0, 0, 0.6)",
              fontFamily: "Inter, sans-serif",
              lineHeight: "1.7",
              margin: 0,
            }}
          >
            CUBE® is operated by Cube Technologies, Inc., a company registered in the United States under the laws of the State of Delaware (Registration No. DE-XXXXXX). The company conducts its operations in accordance with applicable federal and state regulations. Cube is not a bank. Banking services are provided by our partner banks, Members FDIC. Cube adheres to industry best practices for security, transparency, and responsible financial technology. Investment products are not FDIC insured, have no bank guarantee, and may lose value. By using our services, you agree to our Terms of Service and Privacy Policy.
          </p>
        </div>
      </div>

      {/* Giant CUBE Text */}
      <div
        style={{
          width: "100%",
          overflow: "hidden",
          padding: "0 0 20px",
        }}
      >
        <h1
          style={{
            fontFamily: "Inter, sans-serif",
            fontSize: "clamp(150px, 30vw, 500px)",
            fontWeight: 800,
            letterSpacing: "-0.04em",
            lineHeight: "0.85",
            color: "rgba(0, 0, 0, 0.08)",
            textAlign: "center",
            margin: 0,
            userSelect: "none",
          }}
        >
          CUBE
        </h1>
      </div>
    </footer>
  );
}
