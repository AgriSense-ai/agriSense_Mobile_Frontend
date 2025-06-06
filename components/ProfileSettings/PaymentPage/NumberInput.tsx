import { Text, TextInput } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { paymentNumberAction } from "@/store/userPayment";
import { RootState } from "@/store/store";

const NumberInput = () => {
  // const [phoneNumber, setPhoneNumber] = useState("");
  const phoneNumber = useSelector(
    (state: RootState) => state.paymentData.phoneNumber
  );
  const dispatch = useDispatch();
  return (
    // Work on redux here
    <>
      <Text className="mb-2 text-base">
        {phoneNumber !== "" ? "phonenumber" : phoneNumber}
      </Text>
      <TextInput
        className="w-full h-12 px-4 border border-gray-300 rounded-lg"
        placeholder="e.g. 07XXXXXXXX"
        keyboardType="phone-pad"
        value={phoneNumber}
        onChangeText={(text) => dispatch(paymentNumberAction(text))}
        maxLength={10}
      />
    </>
  );
};

export default NumberInput;
