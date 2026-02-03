import Image from "next/image";

const productionSteps = [
  {
    step: "01",
    title: "Form",
    subtitle: "Invite your circle. Set the terms.",
    image: "/howitworks/Step1.png",
  },
  {
    step: "02",
    title: "Contribute",
    subtitle: "Everyone pays in. Every cycle.",
    image: "/howitworks/Step2.png",
  },
  {
    step: "03",
    title: "Distribute",
    subtitle: "One member receives. Then rotate.",
    image: "/howitworks/Step3.png",
  },
];

export default function Steps() {
  return (
    <>
      <style jsx>{`
        .steps-section {
          padding: clamp(32px, 6vh, 100px) clamp(20px, 5vw, 80px);
        }
        .steps-header {
          text-align: center;
          margin-bottom: clamp(24px, 4vh, 60px);
        }
        .steps-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: clamp(28px, 4vh, 60px);
          max-width: 1200px;
          margin: 0 auto;
        }
        @media (min-width: 768px) {
          .steps-grid {
            grid-template-columns: repeat(3, 1fr);
            gap: clamp(24px, 3vw, 48px);
          }
        }
        .step-card {
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          position: relative;
        }
        .step-image-container {
          width: 100%;
          aspect-ratio: 1;
          max-width: 200px;
          min-height: 160px;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: clamp(12px, 1.5vh, 24px);
          position: relative;
        }
        @media (min-width: 768px) {
          .step-image-container {
            max-width: 220px;
            min-height: 200px;
          }
        }
        .step-title {
          font-family: Inter, sans-serif;
          font-size: clamp(20px, 2.5vw, 26px);
          font-weight: 400;
          color: rgb(0, 0, 0);
          letter-spacing: -0.02em;
          margin-bottom: 6px;
          -webkit-font-smoothing: antialiased;
        }
        .step-subtitle {
          font-family: Inter, sans-serif;
          font-size: clamp(14px, 1.8vw, 16px);
          font-weight: 400;
          color: rgba(0, 0, 0, 0.6);
          letter-spacing: -0.01em;
          -webkit-font-smoothing: antialiased;
        }
      `}</style>
      <section
        className="steps-section relative w-full overflow-visible md:overflow-hidden"
        style={{
          minHeight: "clamp(680px, 85vh, 900px)",
          borderTop: "1px solid #000000",
          backgroundColor: "#ffffff",
        }}
      >
        {/* Header */}
        <div className="steps-header">
          {/* Label (Inter) */}
          <span
            style={{
              display: "block",
              fontFamily: "Inter, sans-serif",
              fontSize: "11px",
              fontWeight: 500,
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              color: "rgba(0, 0, 0, 0.5)",
              marginBottom: "clamp(12px, 2vh, 18px)",
              WebkitFontSmoothing: "antialiased",
            }}
          >
            The steps
          </span>

          {/* Headline (Instrument Serif only) */}
          <h2
            style={{
              fontFamily:
                'var(--font-instrument-serif), "Instrument Serif", serif',
              fontStyle: "normal",
              fontWeight: 400,
              color: "rgb(0, 0, 0)",
              fontSize: "clamp(32px, 5.5vw, 64px)",
              letterSpacing: "-0.02em",
              lineHeight: "105%",
              margin: "0 0 clamp(14px, 2.5vh, 22px) 0",
            }}
          >
            The Core Mechanism
          </h2>

          {/* Body (Inter) */}
          <p
            style={{
              fontFamily: "Inter, sans-serif",
              fontSize: "clamp(16px, 2.4vw, 20px)",
              fontWeight: 400,
              letterSpacing: "-0.25px",
              lineHeight: "clamp(24px, 3.2vw, 30px)",
              color: "rgba(0, 0, 0, 0.7)",
              maxWidth: "580px",
              margin: "0 auto",
              WebkitFontSmoothing: "antialiased",
            }}
          >
            A Cube is a group of people who agree to save together. Each cycle, one member receives the pooled funds.

          </p>
        </div>

        {/* Steps Grid */}
        <div className="steps-grid">
          {productionSteps.map((item, index) => (
            <div key={index} className="step-card">
              <div className="step-image-container">
                <Image
                  src={item.image}
                  alt={item.title}
                  width={200}
                  height={200}
                  priority
                  style={{
                    width: "100%",
                    height: "auto",
                    objectFit: "contain",
                    filter: "drop-shadow(0 4px 20px rgba(0,0,0,0.08))",
                  }}
                />
              </div>
              <h3 className="step-title">{item.title}</h3>
              <span className="step-subtitle">{item.subtitle}</span>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
