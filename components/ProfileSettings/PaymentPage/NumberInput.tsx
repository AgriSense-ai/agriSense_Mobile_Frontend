import { Text, TextInput } from "react-native";
import { useState } from "react";

const NumberInput = () => {
  const [phoneNumber, setPhoneNumber] = useState("");
  return (
    // Work on redux here
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
  );
};

export default NumberInput;
