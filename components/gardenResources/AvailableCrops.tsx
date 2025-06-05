import { StyleSheet, ScrollView, View, Pressable } from "react-native";
import IntroCard from "../indexPage/servicesCenter/servicesCard";
import { ThemedText } from "../ThemedText";
import { Colors } from "@/constants/Colors";
import { Crop } from "@/constants/data/Crops";
import { useRouter } from "expo-router";

const gardenManagementImage = require("@/assets/images/SVGs/PlantIntro.png");

const AvailableCrops = () => {
  const router = useRouter();

  const handleCardPress = (cropRoute: string) => {
    try {
      if (router) {
        router.push(cropRoute as any);
      }
    } catch (error) {
      console.error("Error navigating to crop route:", error);
    }
  };

  return (
    <View style={styles.container}>
      <ThemedText style={styles.textTitle}>Research Crops</ThemedText>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          paddingBottom: 400,
          justifyContent: "center",
          alignItems: "center",
          paddingTop: 10,
        }}
      >
        <View style={styles.cardContainer}>
          {Crop.map((service, index) => (
            <Pressable
              key={index}
              style={{ paddingTop: 15 }}
              onPress={() =>
                handleCardPress(`/(tabs)/gardenResources/${service.id}`)
              }
            >
              <IntroCard label={service.name} image={gardenManagementImage} />
            </Pressable>
          ))}
        </View>
      </ScrollView>
    </View>
  );
};

export default AvailableCrops;

const styles = StyleSheet.create({
  container: {},
  cardContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    margin: 10,
    width: "90%",
    justifyContent: "space-between",
  },
  textTitle: {
    fontSize: 24,
    fontWeight: "bold",
    color: Colors.light.text,
    paddingTop: 20,
    paddingLeft: 10,
    paddingBottom: -10,
  },
});
