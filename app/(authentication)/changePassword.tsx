import { StyleSheet, Text, View, Platform } from "react-native";
import React from "react";
import BackgroundLayout from "@/components/ui/BackgroundLayout";
import PasswordSlots from "@/components/Authentication/PasswordSlots";
import AddGardenNavigationButton from "@/components/gardenManagement/AddGardenNavigationButton";
const changePassword = () => {
  return (
    <BackgroundLayout>
      <View style={styles.container}>
        <View style={styles.card}>
          <Text style={styles.title}>Add Garden</Text>
          <View style={styles.row}>
            <PasswordSlots />
            <PasswordSlots />
            <PasswordSlots />
            <View style={styles.buttonRow}>
              <AddGardenNavigationButton
                type={"Continue"}
                route={"/tabs/gardenManagement/Map"}
              />
            </View>
          </View>
        </View>
      </View>
    </BackgroundLayout>
  );
};

const SHADOW =
  Platform.OS === "ios"
    ? {
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
      }
    : {
        elevation: 16,
      };
export default changePassword;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "transparent",
    minWidth: "100%",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 80,
  },
  card: {
    backgroundColor: "#fff",
    paddingTop: 28,
    borderRadius: 22,
    minWidth: "90%",
    alignItems: "center",
    ...SHADOW,
  },
  title: {
    fontSize: 32,
    fontWeight: "600",
    color: "#234733",
    fontFamily: Platform.select({ ios: "System", android: "sans-serif" }),
  },
  row: {
    flexDirection: "column",
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    gap: 10,
    marginBottom: 16,
    padding: 20,
  },
  input: {
    backgroundColor: "#D3EDE0",
    borderRadius: 12,
    fontWeight: "500",
    width: "100%",
    paddingHorizontal: 16,
    paddingVertical: 10,
    fontSize: 16,
    color: "#234733",
    flex: 1,
  },
  textarea: {
    backgroundColor: "#D3EDE0",
    borderRadius: 12,
    paddingHorizontal: 16,
    paddingTop: 14,
    fontSize: 16,
    color: "E8EAED",
    width: "100%",
    minHeight: 90,
    marginBottom: 28,
  },
  buttonRow: {
    marginTop: 12,
    height: 48,
    maxWidth: "50%",
    minWidth: "50%",
  },
});
