import { ThemedText } from "@/components/ThemedText";
import React from "react";
import { StyleSheet, Text, View } from "react-native";

const CardCases: React.FC<{ number: number; label: string }> = ({
  number,
  label,
}) => {
  return (
    <View className="w-[28%] h-[105px] bg-white rounded-xl justify-center items-center shadow-sm">
      <ThemedText type="title">{number}</ThemedText>
      <ThemedText type="small">{label}</ThemedText>
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
