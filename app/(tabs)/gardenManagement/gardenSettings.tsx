import React from "react";
import GardenSettingsLayout from "@/components/gardenManagement/GardenSettings/GardenSettingsLayout";
import BackgroundLayout from "@/components/ui/BackgroundLayout";

const gardenSettings: React.FC = () => {
  return (
    <BackgroundLayout>
      <GardenSettingsLayout />
    </BackgroundLayout>
  );
};

export default gardenSettings;
