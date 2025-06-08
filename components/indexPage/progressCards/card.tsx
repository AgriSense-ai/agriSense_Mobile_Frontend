import { ThemedText } from "@/components/ThemedText";
import React from "react";
import { View } from "react-native";

const CardCases: React.FC<{ number: number; label: string }> = ({
  number,
  label,
}) => {
  return (
    <View className="w-[28%] h-[105px] bg-white rounded-xl justify-center items-center shadow-lg android:shadow-2xl ">
      <ThemedText type="title">{number}</ThemedText>
      <ThemedText type="small">{label}</ThemedText>
    </View>
  );
};

export default CardCases;
