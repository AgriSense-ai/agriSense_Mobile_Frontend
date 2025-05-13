import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { useRouter } from "expo-router";

interface FloatingGardensProps {
  count: number;
}
var addGardenRoute: string = "(tabs)/gardenManagement/addGarden";

function AddGardenButton({ count }: FloatingGardensProps) {
    const router = useRouter();
  return (
    <View style={styles.floatingGardens}>
      <View style={{ flexDirection: "column", alignItems: "center", gap: 2 }}>
        <Text style={{ fontSize: 30, fontWeight: "bold", color: "#37704C" }}>
          {count}
        </Text>
        <Text style={{ marginLeft: 6, fontWeight: "700", color: "#37704C" }}>
          Gardens
        </Text>
      </View>
      <TouchableOpacity
        style={styles.addGardenBtn}
        onPress={() => router.push(addGardenRoute as any)}
      >
        <Text
          style={{
        color: "#fff",
        textAlign: "center",
          }}
        >
          Add Garden
        </Text>
      </TouchableOpacity>
    </View>
  );
}

export default AddGardenButton;

const styles = StyleSheet.create({
  floatingGardens: {
    position: "absolute",
    bottom: 85,
    right: -15,
    zIndex: 35,
    backgroundColor: "#fff",
    elevation: 6,
    shadowColor: "#AAC8B4",
    shadowOpacity: 0.55,
    shadowRadius: 5,
    borderRadius: 17,
    paddingVertical: 16,
    paddingHorizontal: 17,
    alignItems: "center",
    width: 120,
    height: 140,
    justifyContent: "space-between",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    fontSize: 16,
    fontWeight: "600",
  },
  addGardenBtn: {
    marginTop: 7,
    paddingVertical: 4,
    paddingHorizontal: 14,
    backgroundColor: "#37704C",
    borderRadius: 9,
    alignSelf: "stretch",
    alignItems: "center",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowColor: "#000",
    shadowOpacity: 0.8,
    shadowRadius: 2.5,
    elevation: 5,
    fontSize: 16,
    fontWeight: "600",
  },
});
