import { StyleSheet, View, Text, Platform } from "react-native";
import SetttingRow from "./SetttingRow";
import { GardenProfile } from "../../../constants/data/GardenProfile";
import SettingsMap from "./SettingsMap";

const GardenSettingsLayout = () => {
  return (
    <View style={styles.card}>
      <SetttingRow label="Active" value={GardenProfile.active} />
      <SetttingRow label="Crop Name" value={GardenProfile.crop} />
      <SetttingRow label="Progress" value={GardenProfile.progress + `%`} />
      <SetttingRow label="Area" value={GardenProfile.area + ` Acres`} />
      <SetttingRow
        label="Crops Remaining"
        value={GardenProfile.cropsRemaining + ` Crops`}
      />
      <View style={styles.mapContainer}>
        <SettingsMap coordinates={GardenProfile.coordinates} />
      </View>
    </View>
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
    marginTop: 20,
    backgroundColor: "#ffff",
    padding: 28,
    borderRadius: 22,
    width: 350,
    ...SHADOW,
  },
  mapContainer: {
    marginTop: 15,
    marginBottom: 20,
    height: 200,
    width: "100%",
    borderRadius: 10,
    overflow: "hidden",
  },
});
