import { View, StyleSheet } from "react-native";
import IntroCard from "./servicesCard";
import { ThemedText } from "@/components/ThemedText";

const gardenManagementImage = require("@/assets/images/SVGs/PlantIntro.png");
const gardenResourcesImage = require("@/assets/images/SVGs/BookIntro.png");

const Services = [
  {
    label: "Garden Management",
    image: gardenManagementImage,
    route: "/explore",
  },
  {
    label: "Garden Resources",
    image: gardenResourcesImage,
    route: "/explore",
  },
];

function ServicesLayout() {
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
        Services
      </ThemedText>
      <View style={styles.card}>
        {Services.map((service, index) => (
          <IntroCard
            key={index}
            label={service.label}
            image={service.image}
            route={service.route}
          />
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  cardContainer: {
    paddingTop: 10,
    paddingBottom: 10,
  },
  card: {
    flexDirection: "row",
    margin: 10,
    width: "85%",
    gap: 10,
    justifyContent: "space-between",
    borderRadius: 11,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 5, // For Android shadow
  },
});

export default ServicesLayout;
