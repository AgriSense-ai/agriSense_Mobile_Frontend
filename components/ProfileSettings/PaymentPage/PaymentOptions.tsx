import { StyleSheet, Text, Pressable } from "react-native";
import React, { useState } from "react";

type Network = "MTN" | "Airtel";

const PaymentOptions: React.FC<Network> = (network) => {
  const [selectedNetwork, setSelectedNetwork] = useState<Network | null>(null);

  const handleSelectNetwork = (network: Network) => {
    setSelectedNetwork(network);
    selectedNetwork === network
      ? setSelectedNetwork(null) // Deselect if already selected
      : setSelectedNetwork(network); // Select the network
  };

  return (
    <Pressable
      className="flex-row items-center p-16 rounded-lg mx-8"
      
      onPress={() => handleSelectNetwork(network)}
    >
      <Text style={styles.networkText}>Airtel Uganda</Text>
    </Pressable>
  );
};

export default PaymentOptions;

const styles = StyleSheet.create({
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
});
