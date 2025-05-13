import { StyleSheet, Text, TouchableOpacity } from "react-native";
import React from "react";
import { useRouter } from "expo-router";
import { useNavigation } from "@react-navigation/native";

interface AddGardenNavigationButtonProps {
  type: "back" | "continue";
  route?: string;
  onPress?: () => void;
}

const AddGardenNavigationButton = ({
  type,
  route,
}: AddGardenNavigationButtonProps) => {
  const router = useRouter();
  const navigation = useNavigation();
  const handlePress = () => {
    if (type === "back") {
      navigation.goBack();
      console.log("Back button pressed");
    } else {
      console.error("Button not functioning");
    }
  };
  const handleContinue = () => {
    if (type === "continue") {
      route
        ? (router.push(route as any), console.log("Continue button pressed"))
        : console.warn("No route provided");
    } else {
      console.error("Button not functioning correctly");
    }
  }; // Added missing closing brace here
  return (
    <TouchableOpacity
      style={type === "continue" ? styles.continueButton : styles.backButton}
      activeOpacity={0.7}
      onPress={type === "continue" ? handleContinue : handlePress}
    >
      <Text
        style={
          type === "continue"
            ? styles.continueButtonText
            : styles.backButtonText
        }
      >
        {type}
      </Text>
    </TouchableOpacity>
  );
};

export default AddGardenNavigationButton;

const styles = StyleSheet.create({
  backButton: {
    flex: 1,
    borderWidth: 2,
    borderColor: "#234733",
    borderRadius: 8,
    paddingVertical: 12,
    marginRight: 10,
    backgroundColor: "#fff",
    alignItems: "center",
  },
  backButtonText: {
    color: "#234733",
    fontSize: 18,
    fontWeight: "500",
  },
  continueButton: {
    flex: 1,
    backgroundColor: "#234733",
    borderRadius: 8,
    paddingVertical: 12,
    alignItems: "center",
    marginLeft: 10,
  },
  continueButtonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "500",
  },
});
