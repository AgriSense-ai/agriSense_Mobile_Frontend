import { StyleSheet, Text, View, Image } from "react-native";
import { useLocalSearchParams } from "expo-router";
import BackgroundLayout from "@/components/ui/BackgroundLayout";
import { Platform } from "react-native";

import { Collapsible } from "@/components/Collapsible";
import { ExternalLink } from "@/components/ExternalLink";
import ParallaxScrollView from "@/components/ParallaxScrollView";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { IconSymbol } from "@/components/ui/IconSymbol";

const gardenManagementImage = require("@/assets/images/Logo/Agri-Solution.jpg");

const CropResourceScreen = () => {
  const { id } = useLocalSearchParams<{ id: string }>();
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: "#D0D0D0", dark: "#353636" }}
      headerImage={<Image source={gardenManagementImage} />}
    ></ParallaxScrollView>
  );
};

export default CropResourceScreen;

const styles = StyleSheet.create({});
