import { StyleSheet, Text, View } from "react-native";
import React from "react";
import GardenSettingsLayout from "@/components/gardenManagement/GardenSettings/GardenSettingsLayout";
import BackgroundLayout from "@/components/ui/BackgroundLayout";

const gardenSettings = () => {
  return (
    <BackgroundLayout>
      <GardenSettingsLayout />
    </BackgroundLayout>
  );
};

export default gardenSettings;

