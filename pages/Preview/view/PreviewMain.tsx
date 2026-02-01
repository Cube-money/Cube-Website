import PreviewFrame1 from "./PreviewFrame1";
import PreviewFrame2 from "./PreviewFrame2";
import PreviewFrameLine from "./PreviewFrameLine";
import PreviewFrame3 from "./PreviewFrame3";

export default function PreviewMain() {
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <PreviewFrame1 />
      <PreviewFrame2 />
      <PreviewFrameLine />
      <PreviewFrame3 />
    </div>
  );
}
