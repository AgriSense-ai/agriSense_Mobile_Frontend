import React from "react";
import { StyleSheet, View, Image, Text, TouchableOpacity } from "react-native";
import { useRouter } from "expo-router";

interface CardProps {
  image: any;
  label: string;
}

function introCard({ label, image }: CardProps) {
  const router = useRouter();
  return (
    <View style={styles.cardContainer}>
      <Image source={image} style={styles.cardImage} />
      <View
        style={{
          paddingTop: 10,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Text style={{ fontSize: 16, fontWeight: "bold", textAlign: "center" }}>
          {label}
        </Text>
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
