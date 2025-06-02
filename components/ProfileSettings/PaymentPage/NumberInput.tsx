import { Text, TextInput } from "react-native";
import { useState } from "react";

const NumberInput = () => {
  const [phoneNumber, setPhoneNumber] = useState("");
  return (
    <>
      <Text className="mb-8 text-base">Phone Number</Text>
      <TextInput
        className="border border-gray-700  text-base rounded-lg p-12 mb-4"
        placeholder="e.g. 0771234567"
        keyboardType="phone-pad"
        value={phoneNumber}
        onChangeText={setPhoneNumber}
        maxLength={10}
      />
    </>
  );
};

export default NumberInput;
