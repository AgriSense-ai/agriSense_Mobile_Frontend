import React, { useState } from "react";
import { View, TextInput, TouchableOpacity, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";

interface PasswordSlotsProps {
  length?: number;
}

const PasswordSlots: React.FC<PasswordSlotsProps> = ({ length = 16 }) => {
  const [password, setPassword] = useState("");
  const [secure, setSecure] = useState(true);

  const handleChange = (text: string) => {
    try {
    if (text.length <= length) {
      setPassword(text);
      console.log(text);
    }} catch (error) {
      console.error("Error updating password:", error);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.inputRowVisible}>
        <TextInput
          style={styles.input}
          value={password}
          onChangeText={handleChange}
          keyboardType="default"
          secureTextEntry={secure}
          maxLength={length}
          autoFocus
          placeholder="Enter password"
        />
        <TouchableOpacity
          onPress={() => setSecure(!secure)}
          style={styles.eyeButton}
        >
          <Ionicons name={secure ? "eye-off" : "eye"} size={24} color="#888" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { alignItems: "center", width: "100%" },
  inputRowVisible: {
    flexDirection: "row",
    alignItems: "center",
    width: "80%",
    height: 48,
    marginTop: 16,
    color: "#333",
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 10,
    paddingHorizontal: 12,
    backgroundColor: "#f7f7f7",
  },
  input: {
    flex: 1,
    minHeight: "100%",
    color: "#333",
    fontSize: 18,
  },
  eyeButton: {
    marginLeft: 8,
    justifyContent: "center",
    alignItems: "center",
    height: 48,
    width: 40,
    zIndex: 6,
  },
});

export default PasswordSlots;
