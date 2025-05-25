import { StyleSheet, Text, View } from "react-native";
import React from "react";
import BackgroundLayout from "@/components/ui/BackgroundLayout";
import PasswordSlots from "@/components/Authentication/PasswordSlots";
const changePassword = () => {
  return (
    <BackgroundLayout>
      <View style={styles.container}>
        <Text>Change Password Screen</Text>
        <PasswordSlots />
      </View>
    </BackgroundLayout>
  );
};

export default changePassword;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "transparent",
    minWidth: "100%",
    justifyContent: "flex-start",
    alignItems: "center",
    padding: 20,
  },
});
