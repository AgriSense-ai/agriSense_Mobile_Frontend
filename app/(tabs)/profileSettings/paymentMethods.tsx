import React from "react";
import { View, Text } from "react-native";
import "../../../global.css";
import BackgroundLayout from "@/components/ui/BackgroundLayout";
import PaymentOptions from "@/components/ProfileSettings/PaymentPage/PaymentOptions";
import NumberInput from "@/components/ProfileSettings/PaymentPage/NumberInput";
import { useSelector, useDispatch } from "react-redux";
import { paymentNetworkAction, paymentNumberAction } from "@/store/userPayment";
import { RootState } from "@/store/store";
type Network = "MTN" | "Airtel";

const PaymentMethods: React.FC = () => {
  // const [selectedNetwork, setSelectedNetwork] = useState<Network | null>(null);
  const selectedNetwork = useSelector(
    (state: RootState) => state.paymentData.networkName
  );
  const dispatch = useDispatch();
  // const [phoneNumber, setPhoneNumber] = useState("");

  const handleSelectNetwork = (network: Network) => {
    if (selectedNetwork === network) {
      // Deselect the network if it is already selected
      dispatch(paymentNetworkAction(null));
    } else {
      dispatch(paymentNetworkAction(network));
    }

    dispatch(paymentNumberAction("")); // Reset phone number when network changes
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
        </View>
      </View>
    </BackgroundLayout>
  );
};

export default PaymentMethods;
