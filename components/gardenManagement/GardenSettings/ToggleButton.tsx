import { Switch } from "react-native";
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
