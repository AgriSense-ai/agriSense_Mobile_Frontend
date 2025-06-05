import React, { useState } from "react";
import { View, Text, TouchableOpacity, TextInput, Alert } from "react-native";
import "../../../global.css";
import BackgroundLayout from "@/components/ui/BackgroundLayout";
import PaymentOptions from "@/components/ProfileSettings/PaymentPage/PaymentOptions";
type Network = "MTN" | "Airtel";

const PaymentMethods: React.FC = () => {
  const [selectedNetwork, setSelectedNetwork] = useState<Network | null>(null);
  const [phoneNumber, setPhoneNumber] = useState("");

  const handleSelectNetwork = (network: Network) => {
    if (selectedNetwork === network) {
      // Deselect the network if it is already selected
      setSelectedNetwork(null);
    } else {
      setSelectedNetwork(network);
    }

    setPhoneNumber("");
  };

  const handleSave = () => {
    if (!selectedNetwork || !phoneNumber.match(/^07\d{8}$/)) {
      Alert.alert(
        "Error",
        "Please select a network and enter a valid Ugandan phone number."
      );
      return;
    }
    // Here you would typically save the payment method to backend or state
    Alert.alert("Success", `Payment method for ${selectedNetwork} saved!`);
  };

  return (
    <BackgroundLayout>
      <View className="bg-background p-9 justify-center items-center mt-20 rounded-3xl shadow-lg ">
        <View className="mx-10 w-full">
          <Text className="text-2xl color-text-200 font-bold mb-8 text-center">
            Add Payment Method
          </Text>
          <Text className="text-xl color-text-200 mb-4">
            Select Mobile Network
          </Text>
          <View className="flex-row mb-3">
            <PaymentOptions
              name="Airtel"
              onPress={() => handleSelectNetwork("Airtel")}
            />
            <PaymentOptions
              name="MTN"
              onPress={() => handleSelectNetwork("MTN")}
            />
          </View>
          {selectedNetwork && (
            <>
              <Text className="mb-2 text-base">Phone Number</Text>
              <TextInput
                className="w-full h-12 px-4 border border-gray-300 rounded-lg"
                placeholder="e.g. 07XXXXXXXX"
                keyboardType="phone-pad"
                value={phoneNumber}
                onChangeText={setPhoneNumber}
                maxLength={10}
              />
            </>
          )}
          <TouchableOpacity
            className="bg-primary-700 py-4 rounded-lg items-center mt-4"
            onPress={handleSave}
          >
            <Text className="text-white text-base font-bold">Make Payment</Text>
          </TouchableOpacity>
        </View>
      </View>
    </BackgroundLayout>
  );
};

export default PaymentMethods;
