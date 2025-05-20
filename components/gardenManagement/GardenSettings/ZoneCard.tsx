import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { useRouter } from "expo-router";

interface GardenCardProps {
  title: string;
  name: string;
  cropRemaining: number;
  progress: number; // TODO: Change to Date type
}

const ZoneCard = ({
  title,
  name,
  cropRemaining,
  progress,
}: GardenCardProps) => {
  const router = useRouter();
  const handlePress = () => {
    try {
      router.push("/camera");
      console.log("Navigating to camera");
    } catch (error) {
      console.error("Error navigating to camera:", error);
    }
  };
  return (
    <View style={styles.gardenCard}>
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        <Text style={styles.gardenTitle}>{title}</Text>
        <Text style={styles.cropName}> {name}</Text>
        <View
          style={[
            styles.cropDot,
            {
              backgroundColor:
                progress >= 80
                  ? "#C8E6C9"
                  : progress >= 50
                  ? "#FFF9C4"
                  : "#FFCDD2",
            },
          ]}
        />
      </View>
      <Text style={styles.gardenDesc}>Remaining Crops: {cropRemaining}</Text>
      <Text style={styles.gardenDesc}>Percentage Progress: {progress}</Text>
      <TouchableOpacity style={styles.continueBtn} onPress={handlePress}>
        <Text style={{ color: "#fff", fontWeight: "bold" }}>Continue</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ZoneCard;

const styles = StyleSheet.create({
  //Gardens Section
  sectionTitle: {
    fontWeight: "bold",
    color: "#37704C",
    fontSize: 21,
    marginVertical: 6,
  },
  gardenCard: {
    backgroundColor: "#fff",
    borderRadius: 16,
    marginVertical: 8,
    padding: 16,
    shadowColor: "#AAC8B4",
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 3,
  },
  gardenTitle: { fontWeight: "700", color: "#37704C", fontSize: 17 },
  cropName: { fontWeight: "600", color: "#37704C", fontSize: 16 },
  cropDot: {
    width: 10,
    height: 10,
    borderRadius: 7,
    backgroundColor: "#FFD600",
    marginLeft: 6,
  },
  gardenDesc: { color: "#464E4A", fontSize: 13, marginTop: 8 },
  continueBtn: {
    alignSelf: "flex-end",
    backgroundColor: "#37704C",
    paddingHorizontal: 22,
    paddingVertical: 7,
    borderRadius: 8,
    marginTop: 4,
  },
});
