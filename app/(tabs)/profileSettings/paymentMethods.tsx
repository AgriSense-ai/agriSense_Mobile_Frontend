import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  TextInput,
  Alert,
  SafeAreaView,
  ScrollView,
} from "react-native";
import "../../../global.css";
import BackgroundLayout from "@/components/ui/BackgroundLayout";
import NumberInput from "@/components/ProfileSettings/PaymentPage/NumberInput";
import PaymentOptions from "@/components/ProfileSettings/PaymentPage/PaymentOptions";
type Network = "MTN" | "Airtel";

const PaymentMethods: React.FC = () => {
  const [selectedNetwork, setSelectedNetwork] = useState<Network | null>(null);
  const [phoneNumber, setPhoneNumber] = useState("");

  const handleSelectNetwork = (network: Network) => {
    setSelectedNetwork(network);
    selectedNetwork === network
      ? setSelectedNetwork(null) // Deselect if already selected
      : setSelectedNetwork(network);
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
          <View className="flex-row mb-6">
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
          <TouchableOpacity style={styles.saveButton} onPress={handleSave}>
            <Text style={styles.saveButtonText}>Make Payment</Text>
          </TouchableOpacity>
        </View>
      </View>
    </BackgroundLayout>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    minWidth: "80%",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 80,
  },
  inner: { padding: 24, flexGrow: 1, justifyContent: "center" },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 32,
    textAlign: "center",
  },
  label: { fontSize: 16, marginBottom: 8 },
  networkContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 24,
  },
  networkButton: {
    flex: 1,
    padding: 16,
    marginHorizontal: 8,
    backgroundColor: "#f2f2f2",
    borderRadius: 8,
    alignItems: "center",
  },
  selectedNetwork: {
    backgroundColor: "#ffe082",
    borderColor: "#ffd600",
    borderWidth: 2,
  },
  networkText: { fontSize: 16, fontWeight: "600" },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    padding: 12,
    fontSize: 16,
    marginBottom: 24,
  },
  saveButton: {
    backgroundColor: "#388e3c",
    padding: 16,
    borderRadius: 8,
    alignItems: "center",
    marginTop: 16,
  },
  saveButtonText: { color: "#fff", fontSize: 16, fontWeight: "bold" },
});

export default PaymentMethods;
