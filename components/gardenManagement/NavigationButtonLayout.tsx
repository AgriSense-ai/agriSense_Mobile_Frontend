import { StyleSheet, View } from "react-native";
import React from "react";
import AddGardenNavigationButton from "./AddGardenNavigationButton";

interface NavigationButtonLayoutProps {
  type: "Back" | "Continue";
  name?: "Clear" | "Mark" | "Save";
  route?: string;
  onPress?: () => void;
}

const NavigationButtonLayout = ({
  type,
  name,
  onPress,
  route,
}: NavigationButtonLayoutProps) => {
  return (
    <View style={styles.buttonRow}>
      <AddGardenNavigationButton
        type={type}
        name={name}
        onPress={onPress}
        route={route}
      />
    </View>
  );
};

export default NavigationButtonLayout;

const styles = StyleSheet.create({
  buttonRow: {
    flexDirection: "row",
    width: "70%",
    justifyContent: "space-between",
    position: "absolute",
    bottom: 100,
    zIndex: 1,
  },
});
