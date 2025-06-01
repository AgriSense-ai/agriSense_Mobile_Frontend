import React from "react";
import { View, StyleSheet } from "react-native";
import BackgroundLayout from "@/components/ui/BackgroundLayout";
import ProgressCard from "@/components/gardenManagement/progressCard";
import SettingsOptions from "@/components/ProfileSettings/SettingsOptions";
const Profile = () => {
  return (
    <BackgroundLayout>
      <View style={styles.container}>
        <ProgressCard />
        <SettingsOptions />
      </View>
    </BackgroundLayout>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "transparent",
    minWidth: "100%",
    justifyContent: "flex-start",
    alignItems: "center",
  },
});

export default Profile;
