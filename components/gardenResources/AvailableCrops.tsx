import { StyleSheet, ScrollView, View } from "react-native";
import IntroCard from "../indexPage/servicesCenter/servicesCard";
import { ThemedText } from "../ThemedText";
import { Colors } from "@/constants/Colors";

const gardenManagementImage = require("@/assets/images/SVGs/PlantIntro.png");

const AvailableCrops = () => {
  const cropsList = [
    {
      label: "Banana",
      image: gardenManagementImage,
      route: "/explore",
    },
    {
      label: "Banana",
      image: gardenManagementImage,
      route: "/explore",
    },
    {
      label: "Banana",
      image: gardenManagementImage,
      route: "/explore",
    },
    {
      label: "Banana",
      image: gardenManagementImage,
      route: "/explore",
    },
    {
      label: "Banana",
      image: gardenManagementImage,
      route: "/explore",
    },
    {
      label: "Banana",
      image: gardenManagementImage,
      route: "/explore",
    },
    {
      label: "Banana",
      image: gardenManagementImage,
      route: "/explore",
    },
    {
      label: "Banana",
      image: gardenManagementImage,
      route: "/explore",
    },
    {
      label: "Banana",
      image: gardenManagementImage,
      route: "/explore",
    },
    {
      label: "Banana",
      image: gardenManagementImage,
      route: "/explore",
    },
    {
      label: "Banana",
      image: gardenManagementImage,
      route: "/explore",
    },
  ];

  return (
    <View style={styles.container}>
      <ThemedText style={styles.textTitle}>Research Crops</ThemedText>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          paddingBottom: 400,
          justifyContent: "center",
          alignItems: "center",
          paddingTop: 10,
        }}
      >
        <View style={styles.cardContainer}>
          {cropsList.map((service, index) => (
            <View key={index} style={{ paddingTop: 15 }}>
              <IntroCard
                key={index}
                label={service.label}
                image={service.image}
                route={service.route}
              />
            </View>
          ))}
        </View>
      </ScrollView>
    </View>
  );
};

export default AvailableCrops;

const styles = StyleSheet.create({
  container: {},
  cardContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    margin: 10,
    width: "90%",
    justifyContent: "space-between",
  },
  textTitle: {
    fontSize: 24,
    fontWeight: "bold",
    color: Colors.light.text,
    paddingTop: 20,
    paddingLeft: 10,
    paddingBottom: -10,
  },
});
