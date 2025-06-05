import { StyleSheet, View } from "react-native";
import React from "react";

const SettingDivider = () => {
  return <View style={styles.divider} />;
};

export default SettingDivider;

const styles = StyleSheet.create({
  divider: {
    height: 1,
    backgroundColor: "#E5E5E5",
    width: "100%",
  },
});
