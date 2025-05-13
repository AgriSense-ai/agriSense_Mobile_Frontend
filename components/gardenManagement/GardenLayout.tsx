import { ScrollView, StyleSheet, Text, View } from "react-native";
import { ThemedText } from "../ThemedText";
import GardenCard from "./GardenCard";

export const Gardens = [
  {
    title: "Rose Garden",
    crop: "Roses",
    description: "A beautiful garden filled with various types of roses.",
    date: "2023-03-15",
  },
  {
    title: "Vegetable Patch",
    crop: "Mixed Vegetables",
    description:
      "A small patch growing fresh vegetables like carrots, lettuce, and tomatoes.",
    date: "2023-04-10",
  },
  {
    title: "Herb Garden",
    crop: "Herbs",
    description: "A fragrant garden with herbs like basil, mint, and rosemary.",
    date: "2023-05-05",
  },
  {
    title: "Orchard",
    crop: "Fruits",
    description: "An orchard with apple, orange, and pear trees.",
    date: "2023-06-20",
  },
  {
    title: "Sunflower Field",
    crop: "Sunflowers",
    description: "A vibrant field of tall sunflowers blooming in the summer.",
    date: "2023-07-30",
  },
];

const GardenLayout = () => {
  return (
    <View style={styles.cardContainer}>
      <ThemedText
        style={{
          fontSize: 27,
          fontWeight: "bold",
          marginLeft: 10,
          paddingTop: 10,
        }}
      >
        Gardens
      </ThemedText>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          paddingBottom: 300,
        }}
      >
        <View style={styles.card}>
          {Gardens.map((garden, index) => (
            <GardenCard
              key={index}
              title={garden.title}
              description={garden.description}
              crop={garden.crop}
              date={garden.date}
            />
          ))}
        </View>
      </ScrollView>
    </View>
  );
};

export default GardenLayout;

const styles = StyleSheet.create({
  cardContainer: {
    paddingTop: 10,
    width: "85%",
    backgroundColor: "fff",
    paddingBottom: 10,
  },
  card: {
    flexDirection: "column",
    marginTop: 10,
    rowGap: 10,
    justifyContent: "space-between",
    borderRadius: 11,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 5, // For Android shadow
  },
});
