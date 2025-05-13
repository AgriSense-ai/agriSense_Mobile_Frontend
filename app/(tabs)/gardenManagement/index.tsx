import { StyleSheet, View, ImageBackground } from "react-native";
import GardenLayout from "@/components/gardenManagement/GardenLayout";
import NavBarLayout from "@/components/navBar/navBarLayout";
import ProgressCard from "@/components/gardenManagement/progressCard";
import AddGardenButton from "@/components/gardenManagement/AddGardenButton";
import { Colors } from "@/constants/Colors";
import { Gardens } from "@/components/gardenManagement/GardenLayout";

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
        <View
          style={{
            flex: 1,
            justifyContent: "flex-start",
            alignItems: "center",
            paddingTop: -1,
            marginTop: 10,
          }}
        >
          <ProgressCard />
          <GardenLayout />
          <AddGardenButton count={Gardens.length} />
        </View>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    width: "100%",
    height: "100%",
    position: "absolute",
    opacity: 0.2,
  },
});
