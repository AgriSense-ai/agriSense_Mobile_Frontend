import { View, StyleSheet } from "react-native";
import IntroCard from "./servicesCard";

const gardenManagementImage = require("@/assets/images/SVGs/PlantIntro.png");
const gardenResourcesImage = require("@/assets/images/SVGs/BookIntro.png");

const Services = [
  {
    label: "Garden Management",
    image: gardenManagementImage,
  },
  {
    label: "Garden Resources",
    image: gardenResourcesImage,
  },
];

function ServicesLayout() {
  return (
    <View style={styles.card}>
      {Services.map((service, index) => (
        <IntroCard
          key={index}
          label={service.label}
          image={service.image}
          onPress={() => console.log(`${service.label} pressed`)}
        />
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
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
