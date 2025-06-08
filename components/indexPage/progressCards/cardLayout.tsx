import CardCases from "./card";

import React from "react";
import { View } from "react-native";

const CardLayout = () => {
  return (
    <View className="flex-row justify-between items-center gap-5 p-4 rounded-lg shadow-md">
      <CardCases number={100} label="Total" />
      <CardCases number={50} label="Completed" />
      <CardCases number={30} label="In Progress" />
    </View>
  );
};
export default CardLayout;
