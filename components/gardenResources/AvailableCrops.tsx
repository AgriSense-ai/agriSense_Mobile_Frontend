import { StyleSheet, ScrollView, View } from "react-native";
import IntroCard from "../indexPage/servicesCenter/servicesCard";
import { ThemedText } from "../ThemedText";
import { Colors } from "@/constants/Colors";
import { useState } from "react";
import { Crop } from "@/constants/data/Crops";

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
  const [selectedCrop, setSelectedCrop] = useState<string | null>(
    Crop.sort((a, b) => a.name.localeCompare(b.name))[0]?.name
  );

  const renderCropCard = ({ crop }: any) => {
    return (
      <IntroCard
        key={crop.id}
        label={crop.name}
        image={crop.image}
        route={`/explore/${crop.name}`}
      />
    );
  };

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
