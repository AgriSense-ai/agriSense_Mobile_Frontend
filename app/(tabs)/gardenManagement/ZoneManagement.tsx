import { StyleSheet, ScrollView, View } from "react-native";
import { ThemedText } from "@/components/ThemedText";
import React from "react";
import BackgroundLayout from "@/components/ui/BackgroundLayout";
import { GardenProfile } from "@/constants/data/GardenProfile";
import ZoneCard from "@/components/gardenManagement/GardenSettings/ZoneCard";

const zoneData = GardenProfile.zone;

const ZoneManagement = () => {
  return (
    <BackgroundLayout>
      <View style={styles.cardContainer}>
        <ThemedText
          style={{
            fontSize: 27,
            fontWeight: "bold",
            marginLeft: 10,
            paddingTop: 10,
          }}
        >
          Available Zones
        </ThemedText>
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{
            paddingBottom: 300,
          }}
        >
          <View style={styles.card}>
            {zoneData.map((zone, index) => (
              <ZoneCard
                key={index}
                title="Zone: "
                name={zone.name}
                cropRemaining={zone.CropsRemaining}
                progress={zone.progress}
              />
            ))}
          </View>
        </ScrollView>
      </View>
    </BackgroundLayout>
  );
};

export default ZoneManagement;

const styles = StyleSheet.create({
  cardContainer: {
    paddingTop: 10,
    width: "85%",
    backgroundColor: "fff",
    paddingBottom: 10,
  },
  card: {
    flexDirection: "column",
    marginTop: 10,
    rowGap: 10,
    justifyContent: "space-between",
    borderRadius: 11,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 5, // For Android shadow
  },
});
