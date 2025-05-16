import { StyleSheet, Text, View } from "react-native";
import { ThemedText } from "../ThemedText";

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
    flex: 1,
    justifyContent: "center",
    alignItems: "flex-start",
  },
  textTitle: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#000",
    marginBottom: 10,
  },
  textContent: {
    fontSize: 16,
    fontWeight: "normal",
    color: "#000",
    paddingHorizontal: 20,
  },
});
