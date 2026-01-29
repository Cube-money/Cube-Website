import Image from "next/image";

const productionSteps = [
  {
    step: "01",
    title: "Form",
    subtitle: "Create Your Cube",
    image: "/howitworks/Step1.png",
  },
  {
    step: "02",
    title: "Contribute",
    subtitle: "Pool Together",
    image: "/howitworks/Step2.png",
  },
  {
    step: "03",
    title: "Distribute",
    subtitle: "Receive Funds",
    image: "/howitworks/Step3.png",
  },
];

export default function Steps() {
  return (
    <>
      <style jsx>{`
        .steps-section {
          padding: clamp(60px, 10vh, 100px) clamp(20px, 5vw, 80px);
        }
        .steps-header {
          text-align: center;
          margin-bottom: clamp(40px, 6vh, 60px);
        }
        .steps-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: clamp(40px, 5vw, 60px);
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
          max-width: 220px;
          min-height: 200px;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: clamp(16px, 2vh, 24px);
          position: relative;
        }
        .step-title {
          font-family: var(--font-instrument-serif), "Instrument Serif", serif;
          font-size: clamp(24px, 3vw, 32px);
          font-weight: 400;
          color: rgb(0, 0, 0);
          letter-spacing: -0.02em;
          margin-bottom: 4px;
        }
        .step-subtitle {
          font-family: "Inter", sans-serif;
          font-size: clamp(14px, 1.8vw, 16px);
          font-weight: 400;
          color: rgba(0, 0, 0, 0.7);
          letter-spacing: -0.01em;
        }
      `}</style>
      <section
        className="steps-section relative w-full overflow-hidden"
        style={{
          height: "clamp(680px, 85vh, 900px)",
          borderTop: "1px solid #000000",
          backgroundColor: "#ffffff",
        }}
      >
        {/* Header */}
        <div className="steps-header">
          <span
            style={{
              display: "block",
              fontFamily: "Inter, sans-serif",
              fontSize: "clamp(11px, 1.2vw, 13px)",
              fontWeight: 600,
              letterSpacing: "0.15em",
              textTransform: "uppercase",
              color: "rgba(0, 0, 0, 0.6)",
              marginBottom: "12px",
            }}
          >
            CUBE STEPS
          </span>
          <h2
            style={{
              fontFamily:
                'var(--font-instrument-serif), "Instrument Serif", serif',
              fontStyle: "normal",
              fontWeight: 400,
              color: "rgb(0, 0, 0)",
              fontSize: "clamp(32px, 5vw, 56px)",
              letterSpacing: "-0.02em",
              lineHeight: "110%",
              margin: "0 0 16px 0",
            }}
          >
            The Core Mechanism
          </h2>
          <p
            style={{
              fontFamily: "Inter, sans-serif",
              fontSize: "clamp(16px, 2vw, 18px)",
              fontWeight: 400,
              color: "rgba(0, 0, 0, 0.75)",
              lineHeight: "1.6",
              maxWidth: "600px",
              margin: "0 auto",
            }}
          >
            A Cube is a group of people who agree to save together.
            Each cycle, one member receives the pooled funds.
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
