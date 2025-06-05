import { View } from "react-native";
import React from "react";
import SetttingRow from "../gardenManagement/GardenSettings/SetttingRow";

const SettingsOptions: React.FC = () => {
  return (
    <View className="mt-5 bg-white p-7 rounded-3xl w-[85%]">
      <SetttingRow label="Dark Mode" value={true} />
      <SetttingRow
        label="Payment Methods"
        route="/(tabs)/profileSettings/paymentMethods"
      />
      <SetttingRow label="Language" route="/(tabs)/profileSettings/Language" />
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
