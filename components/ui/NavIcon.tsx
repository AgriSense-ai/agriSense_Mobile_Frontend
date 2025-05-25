import { StyleSheet, Pressable } from "react-native";
import { IconSymbol } from "@/components/ui/IconSymbol";
import { Colors } from "@/constants/Colors";
import React from "react";
import { useRouter } from "expo-router";

interface NavIconProps {
  size?: number;
  weight?: "light" | "regular" | "medium" | "heavy";
  route: string;
}

const NavIcon = ({ size = 18, route, weight = "heavy" }: NavIconProps) => {
  const router = useRouter();
  const color = Colors.light.tint;
  const handlePress = () => {
    try {
      if (route) {
        router.push(route as any);
        console.log("ZoneManagement button pressed");
      } else {
        console.warn("No route provided to NavIcon.");
      }
    } catch (error) {
      console.error("Error navigating to ZoneManagement:", error);
    }
  };

  return (
    <Pressable onPress={handlePress}>
      <IconSymbol
        size={size}
        weight={weight}
        name="chevron.right"
        color={color}
      />
    </Pressable>
  );
};

export default NavIcon;

const styles = StyleSheet.create({});
