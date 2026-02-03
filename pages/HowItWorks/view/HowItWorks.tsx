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
        @keyframes slideUpFromAboveText {
          0% {
            transform: translateY(10%);
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
        @media (max-width: 899px) {
          .image-reveal {
            transform: translateY(10%);
          }
          .image-reveal.visible {
            animation: slideUpFromAboveText 2.8s cubic-bezier(0.22, 1, 0.36, 1) forwards;
          }
        }
      `}</style>
    <section
      ref={imageRef}
      className="relative w-full h-screen overflow-hidden border-t border-gray-500 pt-24 md:pt-24"
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
        <div className="mx-auto w-full max-w-[1200px] flex flex-col min-[900px]:flex-row items-center justify-between gap-[clamp(28px,7vw,84px)]">
          <div className="w-full min-[900px]:w-auto min-[900px]:basis-[55%] max-w-[680px] flex items-center justify-center min-[900px]:items-end min-[900px]:justify-start min-[900px]:min-h-[60vh] min-[900px]:-translate-x-1/4 min-[900px]:translate-y-[20%]">
            <div className={`image-reveal flex justify-center min-[900px]:justify-start ${isVisible ? 'visible' : ''}`}>
              <Image
                src="/howitworks/howitworksframe1.png"
                alt="Columns"
                width={800}
                height={1200}
                className="h-auto w-auto object-contain max-w-[72%] max-h-[58vh] min-[900px]:max-w-full min-[900px]:max-h-[95vh]"
                style={{
                  height: "auto",
                  width: "auto",
                  objectFit: "contain",
                }}
              />
            </div>
          </div>

          <div className="w-full max-w-[820px] flex flex-col items-center min-[900px]:items-start text-center min-[900px]:text-left min-[900px]:pl-4 min-[900px]:translate-x-[15%]">
            {/* Small label (Inter, same as Frame4) */}
            <span
              style={{
                fontFamily: "Inter, sans-serif",
                fontSize: "11px",
                fontWeight: 500,
                letterSpacing: "0.2em",
                textTransform: "uppercase",
                color: "rgb(0, 0, 0)",
                WebkitFontSmoothing: "antialiased",
                marginBottom: "clamp(12px, 2vh, 18px)",
                display: "block",
              }}
            >
              The basics
            </span>

            {/* Headline (Instrument Serif, same as Frame4) */}
            <div
              style={{
                fontFamily:
                  'var(--font-instrument-serif), "Instrument Serif", "Instrument Serif Placeholder", serif',
                fontStyle: "normal",
                fontWeight: 400,
                color: "rgb(0, 0, 0)",
                fontSize: "clamp(32px, 5.5vw, 64px)",
                letterSpacing: "-0.02em",
                lineHeight: "105%",
                WebkitFontSmoothing: "antialiased",
                marginBottom: "clamp(14px, 2.5vh, 22px)",
                whiteSpace: "normal",
                boxSizing: "border-box",
                display: "block",
                wordBreak: "break-word",
                overflowWrap: "break-word",
                width: "100%",
              }}
            >
              How Cube works
            </div>

            {/* Body (Inter, same size and look as Frame4) */}
            <span
              style={{
                display: "block",
                fontFamily: "Inter, sans-serif",
                fontSize: "clamp(16px, 2.4vw, 20px)",
                fontWeight: 400,
                letterSpacing: "-0.25px",
                lineHeight: "clamp(24px, 3.2vw, 30px)",
                color: "rgba(0, 0, 0, 0.85)",
                WebkitFontSmoothing: "antialiased",
                maxWidth: "640px",
                marginBottom: "clamp(20px, 3vh, 28px)",
              }}
            >
              Groups save together by pooling contributions and rotating access to funds across agreed cycles,  transparently and without lenders.
              <br />
              <br />
              That&apos;s it. A faster way to save, built on coordination.
            </span>

            {/* CTA button (same as Frame4) */}
            <a
              href="/preview"
              className="self-center min-[900px]:self-start"
              style={{
                textDecoration: "none",
                alignItems: "center",
                borderRadius: "clamp(28px, 3vw, 36px)",
                boxSizing: "border-box",
                display: "inline-flex",
                height: "clamp(44px, 5.5vh, 50px)",
                justifyContent: "center",
                overflow: "hidden",
                padding: "0px clamp(24px, 3.5vw, 36px)",
                position: "relative",
                textAlign: "center",
                whiteSpace: "nowrap",
                backgroundColor: "#C1FF35",
                border: "none",
                color: "rgb(17, 14, 8)",
                cursor: "pointer",
                WebkitFontSmoothing: "antialiased",
                marginBottom: "clamp(24px, 4vh, 0)",
                transition: "transform 0.2s ease, box-shadow 0.2s ease",
              }}
            >
              <span
                style={{
                  fontFamily:
                    "Phonic, Helvetica, system-ui, -apple-system, 'system-ui', Arial, sans-serif",
                  fontSize: "clamp(15px, 2vw, 17px)",
                  fontWeight: 500,
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

            {/* Microtext (Inter, same as Frame4) */}
            <span
              style={{
                fontFamily: "Inter, sans-serif",
                fontSize: "13px",
                fontWeight: 400,
                letterSpacing: "-0.01em",
                color: "rgba(0, 0, 0, 0.55)",
                WebkitFontSmoothing: "antialiased",
                marginTop: "clamp(12px, 2vh, 18px)",
                display: "block",
              }}
            >
              No signup required. Just watch and learn.
            </span>
          </div>
        </div>
      </div>
    </section>
    </>
  );
}
