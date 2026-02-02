"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

const MOBILE_BREAKPOINT = 768;
const MOBILE_FLOWER_SCALE = 0.48;

export default function CubeCoordinationSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [flowerScale, setFlowerScale] = useState(1);

  useEffect(() => {
    const updateScale = () => {
      const w = typeof window !== "undefined" ? window.innerWidth : 1024;
      setFlowerScale(w < MOBILE_BREAKPOINT ? MOBILE_FLOWER_SCALE : 1);
    };
    updateScale();
    window.addEventListener("resize", updateScale);
    return () => window.removeEventListener("resize", updateScale);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <style jsx>{`
        @keyframes glideFromLeft {
          0% {
            opacity: 0;
            transform: translateX(-60px);
          }
          100% {
            opacity: 1;
            transform: translateX(0);
          }
        }
        @keyframes glideFromRight {
          0% {
            opacity: 0;
            transform: translateX(60px);
          }
          100% {
            opacity: 1;
            transform: translateX(0);
          }
        }
        .glide-left {
          opacity: 0;
          transform: translateX(-60px);
        }
        .glide-left.visible {
          animation: glideFromLeft 2.4s cubic-bezier(0.22, 1, 0.36, 1) forwards;
        }
        .glide-right {
          opacity: 0;
          transform: translateX(60px);
        }
        .glide-right.visible {
          animation: glideFromRight 2.4s cubic-bezier(0.22, 1, 0.36, 1) forwards;
          animation-delay: 0.15s;
        }
      `}</style>
      <section
        ref={sectionRef}
        style={{
          position: "relative",
          width: "100%",
          height: "140vh",
          minHeight: "140vh",
          flexShrink: 0,
          overflow: "hidden",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "black",
        }}
      >
        <div
          style={{
            position: "relative",
            width: "100%",
            height: "100%",
            overflow: "hidden",
          }}
        >
          {/* Left lily */}
          <div
            style={{
              position: "absolute",
              left: "5%",
              top: 0,
              zIndex: 2,
              height: "100%",
              display: "flex",
              alignItems: "center",
              justifyContent: "flex-start",
              transform:
                flowerScale < 1
                  ? `scale(${flowerScale}) translateY(-38%)`
                  : `scale(${flowerScale}) translateY(-12%)`,
              transformOrigin: "left center",
            }}
          >
            <div
              className={`glide-left ${isVisible ? "visible" : ""}`}
              style={{
                height: "100%",
                display: "flex",
                alignItems: "center",
                justifyContent: "flex-start",
                opacity: isVisible ? undefined : 0,
                transform: isVisible ? undefined : "translateX(-60px)",
              }}
            >
              <Image
                src="/preview/Demoflowerleft.png"
                alt=""
                width={800}
                height={1200}
                style={{
                  maxWidth: "100%",
                  maxHeight: "100%",
                  height: "auto",
                  width: "auto",
                  objectFit: "contain",
                }}
              />
            </div>
          </div>

          {/* Center content */}
          <div
            style={{
              position: "absolute",
              top: "40%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              zIndex: 3,
              textAlign: "center",
            }}
          >
            <h2
              style={{
                fontFamily:
                  'var(--font-instrument-serif), "Instrument Serif", Georgia, serif',
                fontStyle: "normal",
                fontWeight: 400,
                color: "rgb(255, 255, 255)",
                fontSize: "clamp(22px, 4vw, 46px)",
                letterSpacing: "-0.02em",
                lineHeight: "1.15",
                textAlign: "center",
                whiteSpace: "pre-line",
                boxSizing: "border-box",
                WebkitFontSmoothing: "antialiased",
                display: "block",
                wordBreak: "break-word",
                overflowWrap: "break-word",
                margin: 0,
                marginBottom: "16px",
              }}
            >
              This is what cube
              <br />
              coordination looks like.
            </h2>
            <p
              style={{
                fontFamily: "Inter, sans-serif",
                fontSize: "clamp(12px, 2vw, 16px)",
                fontWeight: 400,
                letterSpacing: "-0.02em",
                lineHeight: "1.5",
                margin: 0,
                fontStyle: "normal",
                WebkitFontSmoothing: "antialiased",
                color: "rgb(255, 255, 255)",
                maxWidth: "600px",
                display: "block",
                textAlign: "center",
                width: "100%",
              }}
            >
              In this example Cube, imagine you&apos;re saving for a new car.
              <br />
              On your own, reaching{" "}
              <span style={{ color: "#C1FF35" }}>$10,000</span>{" "}
              can take years.
            </p>
          </div>

          {/* Vertical dashed line */}
          <div
            style={{
              position: "absolute",
              left: "50%",
              top: "54%",
              transform: "translateX(-50%)",
              width: "1px",
              height: flowerScale < 1 ? "32vh" : "45vh",
              zIndex: 3,
              background:
                "linear-gradient(to bottom, #ffffff 0%, rgba(255,255,255,0.3) 100%)",
              maskImage:
                "repeating-linear-gradient(to bottom, transparent, transparent 4px, black 4px, black 12px)",
              WebkitMaskImage:
                "repeating-linear-gradient(to bottom, transparent, transparent 4px, black 4px, black 12px)",
            }}
          />

          {/* Text below the line */}
          <div
            style={{
              position: "absolute",
              top: `calc(54% + ${flowerScale < 1 ? "32vh" : "45vh"} + 24px)`,
              left: "50%",
              transform: "translateX(-50%)",
              width: "100%",
              maxWidth: "600px",
              paddingTop: "24px",
              paddingLeft: "24px",
              paddingRight: "24px",
              boxSizing: "border-box",
              zIndex: 3,
              textAlign: "center",
            }}
          >
            <p
              style={{
                fontFamily: "Inter, sans-serif",
                fontSize: "clamp(12px, 2vw, 16px)",
                fontWeight: 400,
                letterSpacing: "-0.02em",
                lineHeight: "1.5",
                margin: 0,
                fontStyle: "normal",
                WebkitFontSmoothing: "antialiased",
                color: "rgb(255, 255, 255)",
              }}
            >
              Inside a Cube, that same goal can arrive much sooner through
              coordinated contributions.{" "}
              <span style={{ color: "#C1FF35" }}>lets see how!</span>
            </p>
          </div>

          {/* Right lily */}
          <div
            style={{
              position: "absolute",
              right: "5%",
              top: 0,
              zIndex: 2,
              height: "100%",
              display: "flex",
              alignItems: "center",
              justifyContent: "flex-end",
              transform:
                flowerScale < 1
                  ? `scale(${flowerScale}) translateY(-38%)`
                  : `scale(${flowerScale}) translateY(-12%)`,
              transformOrigin: "right center",
            }}
          >
            <div
              className={`glide-right ${isVisible ? "visible" : ""}`}
              style={{
                height: "100%",
                display: "flex",
                alignItems: "center",
                justifyContent: "flex-end",
                opacity: isVisible ? undefined : 0,
                transform: isVisible ? undefined : "translateX(60px)",
              }}
            >
              <Image
                src="/preview/Demoflowerright.png"
                alt=""
                width={800}
                height={1200}
                style={{
                  maxWidth: "100%",
                  maxHeight: "100%",
                  height: "auto",
                  width: "auto",
                  objectFit: "contain",
                }}
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
