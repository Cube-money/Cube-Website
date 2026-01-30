import Image from "next/image";
import { useEffect, useRef, useState } from "react";

export default function Preview() {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      {
        threshold: 0.15,
      }
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
        height: "100vh",
        overflow: "hidden",
        borderTop: "1px solid rgb(128, 128, 128)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "black",
      }}
    >
      {/* Dark overlay - 20% opacity */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundColor: "rgba(0, 0, 0, 0.2)",
          zIndex: 1,
        }}
      />
      {/* Left-positioned image */}
      <div
        className={`glide-left ${isVisible ? 'visible' : ''}`}
        style={{
          position: "absolute",
          left: "5%",
          top: 0,
          zIndex: 2,
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "flex-start",
          opacity: isVisible ? undefined : 0,
          transform: isVisible ? undefined : 'translateX(-60px)',
        }}
      >
        <Image
          src="/preview/Demoflowerleft.png"
          alt="Flower"
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
        <div
          style={{
            fontFamily: 'var(--font-instrument-serif), "Instrument Serif", "Instrument Serif Placeholder", serif',
            fontStyle: "normal",
            fontWeight: 400,
            color: "rgb(255, 255, 255)",
            fontSize: "clamp(28px, 4.5vw, 56px)",
            letterSpacing: "-0.02em",
            lineHeight: "100%",
            textAlign: "center",
            whiteSpace: "pre-line",
            boxSizing: "border-box",
            WebkitFontSmoothing: "antialiased",
            display: "block",
            wordBreak: "break-word",
            overflowWrap: "break-word",
            marginBottom: "16px",
          }}
        >
          This is what cube<br />coordination looks like.
        </div>
        
        {/* Subtext */}
        <span
          style={{
            fontFamily: "Inter, sans-serif",
            fontSize: "18px",
            fontWeight: 400,
            letterSpacing: "-0.25px",
            lineHeight: "26px",
            margin: "0 auto",
            fontStyle: "normal",
            WebkitFontSmoothing: "antialiased",
            color: "rgb(255, 255, 255)",
            maxWidth: "600px",
            display: "block",
            textAlign: "center",
            width: "100%",
          }}
        >
          In this example Cube, imagine you're saving for a new car.<br />
          On your own, reaching <span style={{ color: "#C1FF35" }}>$10,000</span> can take years.<br />
    
        </span>
        
      </div>

      {/* Vertical dashed line with gradient */}
      <div
        style={{
          position: "absolute",
          left: "50%",
          top: "60%",
          transform: "translateX(-50%)",
          width: "1px",
          height: "45vh",
          zIndex: 3,
          background: "linear-gradient(to bottom, #ffffff, #000000)",
          maskImage: "repeating-linear-gradient(to bottom, transparent, transparent 4px, black 4px, black 12px)",
          WebkitMaskImage: "repeating-linear-gradient(to bottom, transparent, transparent 4px, black 4px, black 12px)",
        }}
      />

      {/* Right-positioned image */}
      <div
        className={`glide-right ${isVisible ? 'visible' : ''}`}
        style={{
          position: "absolute",
          right: "5%",
          top: 0,
          zIndex: 2,
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "flex-end",
          opacity: isVisible ? undefined : 0,
          transform: isVisible ? undefined : 'translateX(60px)',
        }}
      >
        <Image
          src="/preview/Demoflowerright.png"
          alt="Flower"
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
    </section>
    </>
  );
}
