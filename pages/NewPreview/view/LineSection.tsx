export default function LineSection() {
  return (
    <section
      style={{
        position: "relative",
        width: "100%",
        minHeight: "40vh",
        backgroundColor: "black",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: "48px 24px",
      }}
    >
      {/* Vertical dashed line */}
      <div
        style={{
          position: "absolute",
          left: "50%",
          top: 0,
          bottom: 0,
          transform: "translateX(-50%)",
          width: "1px",
          background:
            "linear-gradient(to bottom, #ffffff 0%, rgba(255,255,255,0.3) 100%)",
          maskImage:
            "repeating-linear-gradient(to bottom, transparent, transparent 4px, black 4px, black 12px)",
          WebkitMaskImage:
            "repeating-linear-gradient(to bottom, transparent, transparent 4px, black 4px, black 12px)",
        }}
      />
    </section>
  );
}
