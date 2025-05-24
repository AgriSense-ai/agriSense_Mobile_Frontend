import { Text, StyleSheet } from "react-native";
import { ThemedText } from "../ThemedText";
import { ThemedView } from "../ThemedView";
type CropCategoryProps = {
  name: string;
  description: string;
};

const CropCategory: React.FC<CropCategoryProps> = ({ name, description }) => (
  <ThemedView style={styles.container}>
    <Text style={styles.bullet}>{"\u2022"}</Text>
    <ThemedView style={styles.textContainer}>
      <ThemedText style={styles.name}>{name}</ThemedText>
      <ThemedText style={styles.description}>{description}</ThemedText>
    </ThemedView>
  </ThemedView>
);

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "flex-start",
    marginVertical: 4,
  },
  bullet: {
    fontSize: 18,
    marginRight: 8,
    lineHeight: 22,
  },
  textContainer: {
    flex: 1,
  },
  name: {
    fontWeight: "bold",
    fontSize: 16,
  },
  description: {
    fontSize: 14,
    color: "#555",
    marginTop: 2,
  },
});

export default CropCategory;
