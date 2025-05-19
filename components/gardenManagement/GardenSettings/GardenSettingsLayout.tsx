import { StyleSheet, View, Text, Platform } from "react-native";
import ToggleButton from "./ToggleButton";
import BackgroundLayout from "@/components/ui/BackgroundLayout";

const GardenSettingsLayout = () => {
  return (
    <BackgroundLayout>
      <ToggleButton />
    </BackgroundLayout>
  );
};
const SHADOW =
  Platform.OS === "ios"
    ? {
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 6 },
        shadowOpacity: 0.12,
        shadowRadius: 14,
      }
    : {
        elevation: 16,
      };

export default GardenSettingsLayout;

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#fff",
    padding: 28,
    borderRadius: 22,
    width: 340,
    ...SHADOW,
  },
});
