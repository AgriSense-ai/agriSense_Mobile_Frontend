import React from "react";
import { StyleSheet, View, Image, Text } from "react-native";

interface CardProps {
  image: any;
  onPress?: () => void;
  label: string;
}

function introCard({ label, image }: CardProps) {
  return (
    <View style={styles.cardContainer}>
      <Image source={image} style={styles.cardImage} />
      <View style={{ paddingTop: 10 }}>
        <Text style={{ fontSize: 16, fontWeight: "bold" }}>{label}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  cardContainer: {
    height: 200,
    width: 160,
    padding: 13,
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

export default introCard;
