import { StyleSheet, Text, View, Switch } from "react-native";
import { useState } from "react";

interface ToggleButtonProps {
  status: boolean;
}

const ToggleButton = ({ status }: ToggleButtonProps) => {
  const [isActive, setIsActive] = useState(status);

  return (
    <Switch
      value={isActive}
      onValueChange={setIsActive}
      trackColor={{ false: "#D3D3D3", true: "#cae5d8" }}
      thumbColor={isActive ? "#234733" : "#767577"}
      ios_backgroundColor="#D3D3D3"
    />
  );
};

export default ToggleButton;

const styles = StyleSheet.create({
  switchRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 15,
  },
  label: {
    fontSize: 16,
    fontWeight: "600",
    color: "#234733",
  },
});
