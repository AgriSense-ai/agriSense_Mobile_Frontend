import { Text, TextInput } from "react-native";
import { useState } from "react";

const NumberInput = () => {
  const [phoneNumber, setPhoneNumber] = useState("");
  return (
    <>
      <Text className="mb-2 text-base">Phone Number</Text>
      <TextInput
        className="rounded-md bg-white px-3 border-2 h-auto border-purple-700 text-[16px] text-black"
        keyboardType="phone-pad"
        value={phoneNumber}
        onChangeText={setPhoneNumber}
        maxLength={10}
      />
    </>
  );
};

export default NumberInput;
