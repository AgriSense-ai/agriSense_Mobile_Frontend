import React from "react";
import { StyleSheet, Text, View } from "react-native";

const CardCases: React.FC<{ number: number; label: string }> = ({
  number,
  label,
}) => {
  return (
    <View style={styles.card}>
      <Text style={styles.number}>{number}</Text>
      <Text style={styles.label}>{label}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    width: 105,
    height: 105,
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
  number: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#333",
  },
  label: {
    fontSize: 14,
    color: "#666",
    marginTop: 4,
  },
});

export default CardCases;
