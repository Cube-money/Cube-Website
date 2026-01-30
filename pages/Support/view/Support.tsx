import Link from "next/link";

export default function Support() {
  return (
    <section
      style={{
        position: "relative",
        width: "100%",
        height: "100vh",
        overflow: "hidden",
        borderTop: "1px solid rgb(128, 128, 128)",
      }}
    >
      {/* Full-screen Image Background */}
      <img
        src="/Home/frame2/Group 6.png"
        alt="What is Cube"
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover",
          zIndex: 0,
        }}
      />
      
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
      
      {/* Left-aligned Text Container */}
      <div
        className="left-4 right-4 md:left-[5%] md:right-auto max-w-full md:max-w-[50%] px-0 md:px-0 pt-16 md:pt-0"
        style={{
          position: "absolute",
          top: "50%",
          transform: "translateY(-50%)",
          zIndex: 3,
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          textAlign: "left",
        }}
      >
        {/* Main Heading */}
        <div
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl mb-4"
          style={{
            fontFamily: 'var(--font-instrument-serif), "Instrument Serif", "Instrument Serif Placeholder", serif',
            fontStyle: "normal",
            fontWeight: 400,
            color: "rgb(255, 255, 255)",
            letterSpacing: "-0.02em",
            lineHeight: "100%",
            textAlign: "left",
            whiteSpace: "normal",
            boxSizing: "border-box",
            WebkitFontSmoothing: "antialiased",
            display: "block",
            wordBreak: "break-word",
            overflowWrap: "break-word",
          }}
        >
          How can we help?
        </div>
        
        {/* Subtext */}
        <span
          className="text-base sm:text-lg md:text-xl leading-relaxed mb-6"
          style={{
            fontFamily: "Inter, sans-serif",
            fontWeight: 400,
            letterSpacing: "-0.25px",
            margin: 0,
            fontStyle: "normal",
            WebkitFontSmoothing: "antialiased",
            color: "rgb(255, 255, 255)",
            maxWidth: "600px",
            textAlign: "left",
            display: "block",
          }}
        >
         Contact our support team and with any questions or queries you may have.
        </span>
        
        {/* Contact Boxes */}
        <div className="flex flex-col md:flex-row gap-4 md:gap-6 mt-6 md:mt-8 w-full max-w-full md:max-w-none">
          {/* Phone Box */}
          <div
            className="w-full md:w-[300px] md:min-w-[300px] min-h-[120px] md:min-h-[180px] flex flex-col justify-start rounded-lg p-4 md:p-6 transition-transform duration-300 cursor-pointer border border-white bg-transparent"
            style={{
              transition: "transform 0.3s ease",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "scale(1.05)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "scale(1)";
            }}
          >
            <img
              src="/phone.png"
              alt="Phone"
              className="w-8 h-8 md:w-10 md:h-10 mb-2 md:mb-3"
              style={{ filter: "brightness(0) invert(1) drop-shadow(0 0 0.5px white)" }}
            />
            <h3
              style={{
                fontSize: "18px",
                fontWeight: 600,
                color: "rgb(255, 255, 255)",
                marginBottom: "8px",
                marginTop: "20px",
                fontFamily: "Inter, sans-serif",
              }}
            >
              Phone
            </h3>
            <p
              style={{
                fontSize: "16px",
                color: "rgb(255, 255, 255)",
                margin: 0,
                fontFamily: "Inter, sans-serif",
              }}
            >
              +1 (555) 123-4567
            </p>
          </div>

          {/* Email Box */}
          <div
            className="w-full md:w-[300px] md:min-w-[300px] min-h-[120px] md:min-h-[180px] flex flex-col justify-start rounded-lg p-4 md:p-6 transition-transform duration-300 cursor-pointer border border-white bg-transparent"
            style={{
              transition: "transform 0.3s ease",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "scale(1.05)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "scale(1)";
            }}
          >
            <img
              src="/message.png"
              alt="Email"
              className="w-8 h-8 md:w-10 md:h-10 mb-2 md:mb-3"
              style={{ filter: "brightness(0) invert(1) drop-shadow(0 0 0.5px white)" }}
            />
            <h3
              style={{
                fontSize: "18px",
                fontWeight: 600,
                color: "rgb(255, 255, 255)",
                marginBottom: "8px",
                marginTop: "20px",
                fontFamily: "Inter, sans-serif",
              }}
            >
              Email
            </h3>
            <p
              style={{
                fontSize: "16px",
                color: "rgb(255, 255, 255)",
                margin: 0,
                fontFamily: "Inter, sans-serif",
              }}
            >
              support@cubemoney.io
            </p>
          </div>

          {/* Third Box */}
          <Link href="/learn" className="block w-full md:w-[300px] md:min-w-[300px] no-underline">
            <div
              className="w-full min-h-[120px] md:min-h-[180px] flex flex-col justify-start rounded-lg p-4 md:p-6 transition-transform duration-300 cursor-pointer border border-white bg-transparent"
              style={{
                transition: "transform 0.3s ease",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "scale(1.05)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "scale(1)";
              }}
            >
              <img
                src="/explore.png"
                alt="Explore"
                className="w-8 h-8 md:w-10 md:h-10 mb-2 md:mb-3"
                style={{ filter: "brightness(0) invert(1) drop-shadow(0 0 0.5px white)" }}
              />
              <h3
                style={{
                  fontSize: "18px",
                  fontWeight: 600,
                  color: "rgb(255, 255, 255)",
                  marginBottom: "8px",
                  marginTop: "20px",
                  fontFamily: "Inter, sans-serif",
                }}
              >
                Explore the Library
              </h3>
              <p
                style={{
                  fontSize: "16px",
                  color: "rgb(255, 255, 255)",
                  margin: 0,
                  fontFamily: "Inter, sans-serif",
                }}
              >
                Not sure where to start? The lessons have you covered.
              </p>
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
}
