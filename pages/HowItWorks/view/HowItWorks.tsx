import Image from "next/image";
import { useEffect, useRef, useState } from "react";

export default function HowItWorks() {
  const imageRef = useRef<HTMLDivElement>(null);
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
        threshold: 0.1,
      }
    );

    if (imageRef.current) {
      observer.observe(imageRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <style jsx>{`
        @keyframes slideUpFromBottom {
          0% {
            transform: translateY(120%);
          }
          100% {
            transform: translateY(0);
          }
        }
        .image-reveal {
          transform: translateY(120%);
        }
        .image-reveal.visible {
          animation: slideUpFromBottom 2.8s cubic-bezier(0.22, 1, 0.36, 1) forwards;
        }
      `}</style>
    <section
      ref={imageRef}
      className="relative w-full h-screen overflow-hidden border-t border-gray-500"
      style={{
        borderTop: "1px solid rgb(128, 128, 128)",
        backgroundColor: "#C8D1D6",
      }}
    >
      <div
        className="h-full w-full flex items-center justify-center box-border"
        style={{
          padding: "clamp(24px, 5vh, 64px) clamp(16px, 4vw, 64px)",
        }}
      >
        <div className="w-full max-w-[1200px] flex flex-col min-[900px]:flex-row items-center justify-between gap-[clamp(28px,7vw,84px)]">
          <div className="w-full min-[900px]:w-auto min-[900px]:basis-[55%] max-w-[680px] flex items-end justify-center min-[900px]:justify-start min-[900px]:min-h-[60vh] min-[900px]:-translate-x-1/4 min-[900px]:translate-y-[20%]">
            <div 
              className={`image-reveal ${isVisible ? 'visible' : ''}`}
              style={{
                transform: isVisible ? undefined : 'translateY(120%)',
              }}
            >
              <Image
                src="/howitworks/howitworksframe1.png"
                alt="Columns"
                width={800}
                height={1200}
                style={{
                  maxWidth: "100%",
                  maxHeight: "95vh",
                  height: "auto",
                  width: "auto",
                  objectFit: "contain",
                }}
              />
            </div>
          </div>

          <div className="w-full max-w-[640px] flex flex-col items-center min-[900px]:items-start text-center min-[900px]:text-left min-[900px]:pl-4 min-[900px]:translate-x-[15%]">
        {/* Main Heading */}
        <div
          style={{
            fontFamily: 'var(--font-instrument-serif), "Instrument Serif", "Instrument Serif Placeholder", serif',
            fontStyle: "normal",
            fontWeight: 400,
            color: "rgb(255, 255, 255)",
            fontSize: "clamp(36px, 6.5vw, 80px)",
            letterSpacing: "-0.02em",
            lineHeight: "100%",
            whiteSpace: "normal",
            boxSizing: "border-box",
            WebkitFontSmoothing: "antialiased",
            display: "block",
            marginBottom: "clamp(12px, 2vh, 16px)",
            wordBreak: "break-word",
            overflowWrap: "break-word",
            width: "100%",
          }}
        >
          How Cube works
        </div>
        
        {/* Subtext */}
        <span
          style={{
            fontFamily: "Inter, sans-serif",
            fontSize: "clamp(16px, 2.2vw, 20px)",
            fontWeight: 400,
            letterSpacing: "-0.25px",
            lineHeight: "clamp(20px, 3.5vw, 30px)",
            margin: 0,
            fontStyle: "normal",
            WebkitFontSmoothing: "antialiased",
            color: "rgb(255, 255, 255)",
            maxWidth: "600px",
            marginBottom: "clamp(16px, 3vh, 24px)",
            display: "block",
          }}
        >
          Groups save together by pooling contributions and rotating access to funds across agreed cycles — transparently and without lenders.
          <br />
          <br />
          That&apos;s it.
          <br />
          A faster way to save, built on coordination.
        </span>
        
        {/* Sign up Button */}
        <a
          href="#waitlist"
          className="self-center min-[900px]:self-start"
          style={{
            opacity: 0.85,
            textDecoration: "none",
            alignItems: "center",
            borderRadius: "clamp(28px, 3vw, 36px)",
            boxSizing: "border-box",
            display: "inline-flex",
            height: "clamp(40px, 5vh, 44px)",
            justifyContent: "center",
            overflow: "hidden",
            padding: "0px clamp(20px, 3vw, 32px)",
            position: "relative",
            textAlign: "center",
            whiteSpace: "nowrap",
            backgroundColor: "rgb(204, 255, 0)",
            border: "1px solid rgb(204, 255, 0)",
            color: "rgb(17, 14, 8)",
            cursor: "pointer",
            WebkitFontSmoothing: "antialiased",
            outline: "rgb(17, 14, 8) none 0px",
            marginBottom: "clamp(24px, 4vh, 0)",
          }}
        >
          <span
            style={{
              fontFamily: "Phonic, Helvetica, system-ui, -apple-system, 'system-ui', Arial, sans-serif",
              fontSize: "clamp(16px, 2vw, 18px)",
              fontWeight: 400,
              letterSpacing: "-0.25px",
              lineHeight: "clamp(20px, 3vw, 24px)",
              margin: 0,
              fontStyle: "normal",
              WebkitFontSmoothing: "antialiased",
            }}
          >
            See a demo Cube
          </span>
        </a>
          </div>
        </div>
      </div>
    </section>
    </>
  );
}
