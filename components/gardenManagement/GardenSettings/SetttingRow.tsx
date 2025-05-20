import { StyleSheet, Text, View } from "react-native";
import React from "react";
import SettingDivider from "./SettingDivider";
import ToggleButton from "./ToggleButton";
ToggleButton;

interface SettingRowProps {
  label: string;
  value: string | boolean | number;
}

const SetttingRow = ({ label, value }: SettingRowProps) => {
  return (
    <View style={styles.info}>
      <View style={styles.infoRow}>
        <Text style={styles.label}>{label}</Text>
        {label === "Active" ? (
          <ToggleButton status={typeof value === "boolean" ? value : false} />
        ) : (
          <Text style={styles.value}>{value}</Text>
        )}
      </View>
      <SettingDivider />
    </View>
  );
};

export default SetttingRow;

const styles = StyleSheet.create({
  info: {
    flexDirection: "column",
  },
  infoRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 15,
  },
  label: {
    fontSize: 19,
    fontWeight: "500",
    color: "#234733",
  },
  value: {
    fontSize: 16,
    fontWeight: "400",
    color: "#3A5542",
  },
});
