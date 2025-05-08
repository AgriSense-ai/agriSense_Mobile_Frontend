import CardCases from "./card";

import React from "react";
import { View, StyleSheet } from "react-native";
import { ThemedView } from "@/components/ThemedView";
import { useColorScheme } from "@/hooks/useColorScheme";
import { Colors } from "@/constants/Colors";
import { Collapsible } from "@/components/Collapsible"; 


const CardLayout = () => {
  return (
        <View style={styles.cardContainer}>
          <CardCases number={100} label="Total" />
          <CardCases number={50} label="Completed" />
          <CardCases number={30} label="In Progress" />
        </View>
  );
};
const styles = StyleSheet.create({
  container: {
    padding: 8,
    borderRadius: 8,
    margin: 16,
    backgroundColor: "#fff",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 5, // For Android shadow
  },
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