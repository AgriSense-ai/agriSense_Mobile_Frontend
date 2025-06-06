import React, { useState } from "react";
import { View, Text, TouchableOpacity, TextInput, Alert } from "react-native";
import "../../../global.css";
import BackgroundLayout from "@/components/ui/BackgroundLayout";
import PaymentOptions from "@/components/ProfileSettings/PaymentPage/PaymentOptions";
import NumberInput from "@/components/ProfileSettings/PaymentPage/NumberInput";
import { useSelector, useDispatch } from "react-redux";
import { paymentNetworkAction, paymentNumberAction } from "@/store/userPayment";
import { RootState } from "@/store/store";
type Network = "MTN" | "Airtel";

const PaymentMethods: React.FC = () => {
  const{ phoneNumber, selectedNetwork} = useSelector((state:RootState) => state.paymentData);
  const dispatch = useDispatch();

  const handleSelectNetwork = (network: Network) => {
    if (selectedNetwork === network) {
      // Deselect the network if it is already selected
      dispatch(paymentNetworkAction(null));
    } else {
      dispatch(paymentNetworkAction(network));
    }

    dispatch(paymentNumberAction("")); // Reset phone number when network changes
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
            Select Payment Channel
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
          {selectedNetwork && <NumberInput />}
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
