import { View, Pressable } from "react-native";
import IntroCard from "./servicesCard";
import { ThemedText } from "@/components/ThemedText";
import { useRouter } from "expo-router";
const gardenManagementImage = require("@/assets/images/SVGs/PlantIntro.png");
const gardenResourcesImage = require("@/assets/images/SVGs/BookIntro.png");

const Services = [
  {
    label: "Garden Management",
    image: gardenManagementImage,
    route: "/(tabs)/gardenManagement",
  },
  {
    label: "Garden Resources",
    image: gardenResourcesImage,
    route: "/(tabs)/gardenResources",
  },
];

function ServicesLayout() {
  const router = useRouter();
  const handlePress = (route: string) => {
    try {
      if (route) {
        router.push(route as any);
      }
      console.log("Route tapped:", route);
    } catch (error) {
      console.error("Error navigating to route:", error);
    }
  };
  return (
    <View className="flex-1 justify-start items-left pt-2">
      <ThemedText type="title">Services</ThemedText>
      <View className="flex-row min-w-[90%] justify-between mt-4 rounded-lg shadow-md">
        {Services.map((service, index) => (
          <Pressable key={index} onPress={() => handlePress(service.route)}>
            <IntroCard label={service.label} image={service.image} />
          </Pressable>
        ))}
      </View>
    </View>
  );
}

export default ServicesLayout;
