import { View, ImageBackground } from "react-native";
import GardenLayout, {
  Gardens,
} from "@/components/gardenManagement/GardenLayout";
import NavBarLayout from "@/components/navBar/NavBarLayout";
import ProgressCard from "@/components/gardenManagement/progressCard";
import AddGardenButton from "@/components/gardenManagement/AddGardenButton";
import { Colors } from "@/constants/Colors";

const backgroundImage = require("@/assets/images/Background.png");

export default function HomeScreen() {
  return (
    <ImageBackground
      source={backgroundImage}
      resizeMode="stretch"
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: Colors.light.background,
      }}
      imageStyle={{
        opacity: 0.2,
        position: "absolute",
        width: "100%",
        height: "100%",
      }}
    >
      <View
        style={{
          flex: 1,
          justifyContent: "flex-end",
          alignItems: "center",
          paddingTop: 50,
        }}
      >
        <NavBarLayout />
        <View className="flex-1 justify-start items-center pt-[-1] mt-3">
          <ProgressCard />
          <GardenLayout />
          <AddGardenButton count={Gardens.length} />
        </View>
      </View>
    </ImageBackground>
  );
}
