import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

interface FloatingGardensProps {
  count: number;
}

function AddGardenButton({ count }: FloatingGardensProps) {
  return (
    <View style={styles.floatingGardens}>
      <View style={{ flexDirection: "row", alignItems: "baseline" }}>
        <Text style={{ fontSize: 30, fontWeight: "bold", color: "#37704C" }}>
          {count}
        </Text>
        <Text style={{ marginLeft: 6, fontWeight: "700", color: "#37704C" }}>
          Gardens
        </Text>
      </View>
      <TouchableOpacity style={styles.addGardenBtn}>
        <Text style={{ color: "#fff" }}>Add Garden</Text>
      </TouchableOpacity>
    </View>
  );
}

export default AddGardenButton;

const styles = StyleSheet.create({
  floatingGardens: {
    backgroundColor: "#fff",
    elevation: 6,
    shadowColor: "#AAC8B4",
    shadowOpacity: 0.15,
    shadowRadius: 8,
    borderRadius: 17,
    paddingVertical: 16,
    paddingHorizontal: 17,
    alignItems: "center",
    width: 120,
  },
  addGardenBtn: {
    marginTop: 7,
    paddingVertical: 4,
    paddingHorizontal: 14,
    backgroundColor: "#37704C",
    borderRadius: 9,
    alignSelf: "stretch",
    alignItems: "center",
  },
});
