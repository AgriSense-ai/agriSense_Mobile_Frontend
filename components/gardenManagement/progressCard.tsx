import { StyleSheet, Text, View } from "react-native";
import React from "react";
import ProgressPie from "../indexPage/progressView/Progress";

const progressCard = () => {
  return (
    <View style={styles.progressCard}>
      <ProgressPie
        progress={20}
        circleSize={50}
        strokeWidt={20}
        fontSize={22}
      />
      <View style={{ flex: 1, paddingLeft: 14, justifyContent: "center" }}>
        <Text style={styles.progressLabel}>Progress</Text>
        <Text style={styles.progressSub}>
          <Text style={styles.boldLabel}>Total Area</Text>{" "}
          <Text style={styles.area}>1.56 Acres</Text>
        </Text>
        <Text style={styles.progressSub}>
          <Text style={styles.boldLabel}>Remaining Crops:</Text> 56
        </Text>
        <Text style={styles.progressSub}>
          <Text style={styles.boldLabel}>Status:</Text>{" "}
          <Text style={{ color: "#E8761C", fontWeight: "bold" }}>Fair</Text>
        </Text>
      </View>
    </View>
  );
};

export default progressCard;

const styles = StyleSheet.create({
  progressCard: {
    flexDirection: "row",
    backgroundColor: "#fff",
    width: "85%",
    borderRadius: 16,
    marginVertical: 22,
    alignItems: "center",
    elevation: 4,
    shadowColor: "#AAC8B4",
    shadowOpacity: 0.18,
    shadowRadius: 10,
  },
  progressLabel: {
    fontWeight: "bold",
    color: "#37704C",
    fontSize: 17,
    marginBottom: 11,
    paddingTop: 6,
  },
  progressSub: { fontSize: 15, color: "#39744B", marginBottom: 4 },
  area: { color: "#758884", fontWeight: "600" },
  boldLabel: { fontWeight: "700", color: "#37704C" },
});
