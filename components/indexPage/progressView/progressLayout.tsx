import ProgressPie from "./Progress";
import { ThemedText } from "@/components/ThemedText";

const ProgressLayout = () => {
  return (
    <>
      <ProgressPie progress={65} />
      <ThemedText type="title">Garden Progress 🌴</ThemedText>
    </>
  );
};

export default ProgressLayout;
