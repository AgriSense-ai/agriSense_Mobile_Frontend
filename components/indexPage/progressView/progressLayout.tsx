import ProgressPie from "./Progress";
import { ThemedText } from "@/components/ThemedText";

const ProgressLayout = () => {
  return (
    <>
      <ProgressPie progress={65} />
      <ThemedText
        style={{ fontSize: 23, fontWeight: "bold", paddingBottom: 20 }}
        type="title"
      >
        Garden Progress 🌴
      </ThemedText>
    </>
  );
};

export default ProgressLayout;
