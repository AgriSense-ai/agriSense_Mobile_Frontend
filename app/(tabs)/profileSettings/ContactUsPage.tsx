import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Alert,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
} from "react-native";
import BackgroundLayout from "@/components/ui/BackgroundLayout";

const ContactUsPage: React.FC = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = () => {
    if (!name || !email || !message) {
      Alert.alert("Please fill in all fields.");
      return;
    }
    setSubmitting(true);
    // Simulate API call
    setTimeout(() => {
      setSubmitting(false);
      Alert.alert("Thank you!", "Your message has been sent.");
      setName("");
      setEmail("");
      setMessage("");
    }, 1500);
  };

  return (
    <BackgroundLayout>
      <KeyboardAvoidingView
        className="flex-1"
        behavior={Platform.OS === "ios" ? "padding" : undefined}
      >
        <View className=" p-11 justify-center">
          <View className="mb-10 items-start bg-background p-6 rounded-3xl shadow-lg">
            <Text className="text-3xl mb-4 text-text-200 font-bold">
              Contact Us
            </Text>
            <Text className="font-normal text-lg text-text-200 mb-2">
              AgriSense Ltd.
            </Text>
            <Text className="text-text-200 mb-1">
              📍 123 Farm Lane, Greenfield, Country
            </Text>
            <Text className="text-text-200 mb-1">
              📞 +1 (555) 123-4567
            </Text>
            <Text className="text-text-200 mb-1">
              ✉️ support@agrisense.com
            </Text>
          </View>
          <Text className="text-3xl mb-4 text-text-200 font-semibold">
              Email Us
            </Text>
          <TextInput
            style={styles.input}
            placeholder="Your Name"
            value={name}
            onChangeText={setName}
            editable={!submitting}
          />
          <TextInput
            style={styles.input}
            placeholder="Your Email"
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
            autoCapitalize="none"
            editable={!submitting}
          />
          <TextInput
            style={[styles.input, styles.textArea]}
            placeholder="Your Message"
            value={message}
            onChangeText={setMessage}
            multiline
            numberOfLines={5}
            editable={!submitting}
          />
          <TouchableOpacity
            style={[styles.button, submitting && styles.buttonDisabled]}
            onPress={handleSubmit}
            disabled={submitting}
          >
            <Text style={styles.buttonText}>
              {submitting ? "Sending..." : "Send Message"}
            </Text>
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    </BackgroundLayout>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 24,
    justifyContent: "center",
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 12,
    color: "#222",
    textAlign: "center",
  },
  subtitle: {
    fontSize: 16,
    color: "#666",
    marginBottom: 24,
    textAlign: "center",
  },
  input: {
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 8,
    padding: 12,
    marginBottom: 16,
    fontSize: 16,
    backgroundColor: "#fafafa",
  },
  textArea: {
    height: 100,
    textAlignVertical: "top",
  },
  button: {
    backgroundColor: "#0078D4",
    paddingVertical: 14,
    borderRadius: 8,
    alignItems: "center",
  },
  buttonDisabled: {
    backgroundColor: "#a0c4e3",
  },
  buttonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
});

export default ContactUsPage;
