import CubeCoordinationSection from "./CubeCoordinationSection";
import DemoCard from "./DemoCard";
import LineSection from "./LineSection";
import NewSection from "./NewSection";

export default function NewPreviewMain() {
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <CubeCoordinationSection />
      <DemoCard />
      <LineSection />
      <NewSection />
    </div>
  );
}
