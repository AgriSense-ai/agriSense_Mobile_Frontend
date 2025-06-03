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

type Network = "MTN" | "Airtel";

const PaymentMethods: React.FC = () => {
  const [selectedNetwork, setSelectedNetwork] = useState<Network | null>(null);
  const [phoneNumber, setPhoneNumber] = useState("");

  const handleSelectNetwork = (network: Network) => {
    setSelectedNetwork(network);
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
      <View className="bg-l p-9 justify-center items-center mt-20 rounded-3xl shadow-lg ">
        <View className="mx-10 w-full">
          <Text style={styles.title}>Add Payment Method</Text>
          <Text style={styles.label}>Select Mobile Network</Text>
          <View style={styles.networkContainer}>
            <TouchableOpacity
              style={[
                styles.networkButton,
                selectedNetwork === "MTN" && styles.selectedNetwork,
              ]}
              onPress={() => handleSelectNetwork("MTN")}
            >
              <Text style={styles.networkText}>MTN Uganda</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[
                styles.networkButton,
                selectedNetwork === "Airtel" && styles.selectedNetwork,
              ]}
              onPress={() => handleSelectNetwork("Airtel")}
            >
              <Text style={styles.networkText}>Airtel Uganda</Text>
            </TouchableOpacity>
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
