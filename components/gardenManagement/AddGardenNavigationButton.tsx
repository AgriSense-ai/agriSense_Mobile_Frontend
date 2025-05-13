import { StyleSheet, Text, TouchableOpacity } from "react-native";
import React from "react";

interface AddGardenNavigationButtonProps {
  type: "back" | "continue";
}

const AddGardenNavigationButton = ({
  type,
}: AddGardenNavigationButtonProps) => {
  return (
    <TouchableOpacity
      style={type === "continue" ? styles.continueButton : styles.backButton}
      activeOpacity={0.7}
      onPress={() => console.log(type === "continue" ? "Continue" : "Back")}
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
