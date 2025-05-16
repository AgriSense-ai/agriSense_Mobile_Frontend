import { StyleSheet, Text, View } from "react-native";
import { ThemedText } from "../ThemedText";
import { Colors } from "@/constants/Colors";

const IntroSection = () => {
  return (
    <View style={styles.container}>
      <ThemedText style={styles.textTitle}>Hey John Doe</ThemedText>
      <ThemedText style={styles.textContent}>
        Thank you for visiting the resource centre. We offer an AI extension
        officer to help you get what you need. Kindly ask any question in the
        text box below.
      </ThemedText>
    </View>
  );
};

export default IntroSection;

const styles = StyleSheet.create({
  container: {
    paddingTop:'5%',
    alignItems: "flex-start",
    width: '90%'
  },
  textTitle: {
    fontSize: 24,
    fontWeight: "bold",
    color: Colors.light.text,
    marginBottom: 10,
  },
  textContent: {
    fontSize: 16,
    fontWeight: "normal",
    color: Colors.light.text,
  },
});
