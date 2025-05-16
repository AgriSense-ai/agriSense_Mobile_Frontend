import { StyleSheet, Text, View } from "react-native";
import React from "react";
import IntroSection from "./IntroSection";
import ChatSection from "./ChatSection";
import AvailableCrops from "./AvailableCrops";

const GardenResorecesLayout = () => {
  return (
    <View style={styles.root}>
      <IntroSection />
      <ChatSection />
      <AvailableCrops />
    </View>
  );
};

export default GardenResorecesLayout;

const styles = StyleSheet.create({
  root: {
    flex: 1,
    alignItems: "center",
  },
});
