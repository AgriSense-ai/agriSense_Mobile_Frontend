import { StyleSheet, View, Platform } from "react-native";
import React from "react";
import SetttingRow from "../gardenManagement/GardenSettings/SetttingRow";

const SettingsOptions: React.FC = () => {
  return (
    <View
      className="mt-5 bg-white p-7 rounded-3xl w-[85%]"

    >
      <SetttingRow label="Dark Mode" value={true} />
      <SetttingRow
        label="Payment Methods"
        route="/(tabs)/profileSettings/paymentMethods"
      />
      <SetttingRow label="Language" 
      route="/(tabs)/profileSettings/Language"/>
      <SetttingRow
        label="Change Password"
        route="/(authentication)/changePassword"
      />
      <SetttingRow
        label="Contact Us"
        route="/(tabs)/profileSettings/ContactUsPage"
      />
    </View>
  );
};

export default SettingsOptions;
const SHADOW =
  Platform.OS === "ios"
    ? {
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 6 },
        shadowOpacity: 0.12,
        shadowRadius: 14,
      }
    : {
        elevation: 16,
      };
const styles = StyleSheet.create({
  card: {
    marginTop: 20,
    backgroundColor: "#ffff",
    padding: 28,
    borderRadius: 22,
    width: 350,
    ...SHADOW,
  },
});
