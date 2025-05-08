import React from "react";
import { StyleSheet, View, Image, Text } from "react-native";

interface CardProps {
  name: string;
  image: any;
  onPress: () => void;
  label: string;
}

const gardenManagementImage = require("@/assets/images/SVGs/PlantIntro.png");
const gardenResourcesImage = require("@/assets/images/SVGs/BookIntro.png");

const introCard = (props: CardProps) => {
  return (
    <View style={styles.card}>
      <View style={styles.cardContainer}>
        <Image source={gardenManagementImage} style={styles.cardImage} />
        <View style={{ paddingTop: 10 }}>
          <Text style={{ fontSize: 16, fontWeight: "bold" }}>
            Garden Management
          </Text>
        </View>
      </View>
    </View>
  );
};
const servicesCard = () => {
  return <></>;
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#fff",
    borderRadius: 11,
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 5, // For Android shadow
  },
  cardContainer: {
    height: 200,
    width: 160,
    padding: 12,
    backgroundColor: "#fff",
    borderRadius: 11,
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 5, // For Android shadow
  },
  cardImage: {
    width: 128,
    height: 110,
  },
});

export default servicesCard;
