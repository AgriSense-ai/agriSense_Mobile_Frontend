import { StyleSheet, Pressable } from "react-native";
import { IconSymbol } from "@/components/ui/IconSymbol";
import { Colors } from "@/constants/Colors";
import React from "react";
import { useRouter } from "expo-router";

const NavIcon = () => {
  const router = useRouter();
  const color = Colors.light.tint;
  const handlePress = () => {
    try {
      router.push("/(tabs)/gardenManagement/ZoneManagement");
      console.log("ZoneManagement button pressed");
    } catch (error) {
      console.error("Error navigating to ZoneManagement:", error);
    }
  };

  return (
    <Pressable onPress={handlePress}>
      <IconSymbol size={19} weight="heavy" name="chevron.right" color={color} />
    </Pressable>
  );
};

export default NavIcon;

const styles = StyleSheet.create({});
