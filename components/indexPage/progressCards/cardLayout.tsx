import CardCases from "./card";

import React from "react";
import { View, StyleSheet } from "react-native";

const CardLayout = () => {
  return (
    <View className="flex-row justify-between items-center gap-5 p-4 rounded-lg shadow-md">
      <CardCases number={100} label="Total" />
      <CardCases number={50} label="Completed" />
      <CardCases number={30} label="In Progress" />
    </View>
  );
};
const styles = StyleSheet.create({
  cardContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    gap: 20,
    padding: 16,
    borderRadius: 8,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 5, // For Android shadow
  },
});
export default CardLayout;
