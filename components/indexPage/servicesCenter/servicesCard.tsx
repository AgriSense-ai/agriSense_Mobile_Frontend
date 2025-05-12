import React from "react";
import { StyleSheet, View, Image, Text, TouchableOpacity } from "react-native";

interface CardProps {
  image: any;
  label: string;
  route?: string;
}
import { useRouter } from "expo-router";

function introCard({ label, image, route }: CardProps) {
  const router = useRouter();
  return (
    <TouchableOpacity
      activeOpacity={0.9}
      onPress={() => (route ? router.push(route as any) : null)}
    >
      <View style={styles.cardContainer}>
        <Image source={image} style={styles.cardImage} />
        <View
          style={{
            paddingTop: 10,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Text
            style={{ fontSize: 16, fontWeight: "bold", textAlign: "center" }}
          >
            {label}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
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
