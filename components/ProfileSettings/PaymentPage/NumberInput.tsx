import { Alert, Text, TextInput, TouchableOpacity } from "react-native";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/store/store";
import { paymentNumberAction } from "@/store/userPayment";

const NumberInput: React.FC = () => {
  const selectedNetwork = useSelector(
    (state: RootState) => state.paymentData.networkName
  );
  const phoneNumber = useSelector(
    (state: RootState) => state.paymentData.number
  );
  const dispatch = useDispatch();
  const handleSave = () => {
    if (!selectedNetwork || !phoneNumber) {
      Alert.alert(
        "Error",
        "Please select a network and enter a valid Ugandan phone number."
      );
      return;
    }
    // Here you would typically save the payment method to backend or state
    Alert.alert("Success", `Payment method for ${selectedNetwork} saved!`);
    dispatch(paymentNumberAction(""));
  };

  const paymentValidation = (number: string) => {
    dispatch(paymentNumberAction(number));
    console.log("Phone number saved:", number);
  };

  return (
    // Work on redux here
    <>
      <Text className="mb-2 text-base">Phone Number</Text>
      <TextInput
        className="w-full h-12 px-4 border border-gray-300 rounded-lg"
        placeholder="e.g. 07XXXXXXXX"
        keyboardType="phone-pad"
        value={phoneNumber}
        onChangeText={paymentValidation}
        maxLength={10}
      />
      <TouchableOpacity
        className="bg-primary-700 py-4 rounded-lg items-center mt-4"
        onPress={handleSave}
      >
        <Text className="text-white text-base font-bold">Make Payment</Text>
      </TouchableOpacity>
    </>
  );
};

export default NumberInput;
