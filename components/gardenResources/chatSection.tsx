import { Colors } from "@/constants/Colors";
import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Platform,
} from "react-native";

const ChatSection = () => {
  const [message, setMessage] = useState(
    "Hello, My coffee has black spots any recommendations"
  );

  return (
    <View style={styles.root}>
      <View style={styles.card}>
        <TextInput
          style={styles.input}
          value={message}
          onChangeText={setMessage}
          multiline
          placeholder="Type your message…"
          placeholderTextColor="#234733"
        />
        <TouchableOpacity
          style={styles.sendButton}
          onPress={() => console.log("Send:", message)}
        >
          <Text style={styles.sendButtonText}>Send</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ChatSection;

const SHADOW =
  Platform.OS === "ios"
    ? {
        shadowColor: Colors.light.text,
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.6,
        shadowRadius: 7,
        ShadowRoot: {
          backgroundColor: Colors.light.background,
        },
      }
    : {
        elevation: 8,
      };

const styles = StyleSheet.create({
  root: {
    marginTop: 20,
    alignItems: "center", // For preview; adjust/remove for integration
  },
  card: {
    backgroundColor: "#fff",
    borderRadius: 10,
    height: 150,
    width: "90%",
    padding: 14,
    flexDirection: "row",
    alignItems: "flex-end",
    ...SHADOW,
  },
  input: {
    flex: 1,
    fontSize: 16,
    color: "#234733",
    height: "100%",
    width: "100%",
    paddingRight: 10,
    fontWeight: "400",
  },
  sendButton: {
    position: "absolute",
    bottom: 10,
    right: 10,
    zIndex: 35,
    elevation: 6,
    shadowColor: "#AAC8B4",
    shadowOpacity: 0.55,
    shadowRadius: 5,
    alignItems: "center",
    backgroundColor: "#234733",
    borderRadius: 8,
    paddingHorizontal: 20,
    paddingVertical: 8,
    justifyContent: "center",
  },
  sendButtonText: {
    color: "#fff",
    fontSize: 15,
    fontWeight: "600",
  },
});
