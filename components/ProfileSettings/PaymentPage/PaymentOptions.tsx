import { Text, TouchableOpacity } from "react-native";
import React, { useState } from "react";

interface PaymentOptionsProps {
  name: "MTN" | "Airtel";
  onPress: () => void;
}

const PaymentOptions: React.FC<PaymentOptionsProps> = ({ name, onPress }) => {
  const [selectedNetwork, setSelectedNetwork] = useState<
    "MTN" | "Airtel" | null
  >(null);

  return (
    <TouchableOpacity
      onPress={onPress}
      className={`flex-1 mx-2 p-4  items-center rounded-lg ${
        selectedNetwork === "MTN"
          ? "bg-yellow border-2 border-yellow-900"
          : selectedNetwork === "Airtel"
          ? "bg-red-700 border-2 border-red-900"
          : "bg-grey-800"
      }`}
    >
      <Text className="text-base font-medium text-text-100">
        {name === "Airtel" ? "Airtel Uganda" : "MTN Uganda"}
      </Text>
    </TouchableOpacity>
  );
};

export default PaymentOptions;
