import { View, ImageBackground } from "react-native";
import NavBarLayout from "@/components/navBar/NavBarLayout";
import { Colors } from "@/constants/Colors";
import GardenResorecesLayout from "@/components/gardenResources/gardenResorecesLayout";

const backgroundImage = require("@/assets/images/Background.png");

export default function ResourceScreen() {
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
        opacity: 0.05,
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
          <GardenResorecesLayout />
        </View>
      </View>
    </ImageBackground>
  );
}
