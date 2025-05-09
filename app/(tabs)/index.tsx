import { Image } from "expo-image";
import { StyleSheet, View, ImageBackground } from "react-native";

import CardLayout from "@/components/indexPage/progressCards/cardLayout";
import ProgressLayout from "@/components/indexPage/progressView/progressLayout";
import ServicesLayout from "@/components/indexPage/servicesCenter/servicesLayout";
import NavBarLayout from "@/components/navBar/navBarLayout";
import { Colors } from "../../constants/Colors";

const backgroundImage = require("@/assets/images/Background.png");

export default function HomeScreen() {
  return (
    <ImageBackground
      source={backgroundImage}
      resizeMode="cover"
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: Colors.light.background,
      }}
      imageStyle={{
        opacity: 0.2,
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
            paddingTop: 50,
          }}
        >
          <ProgressLayout />
          <CardLayout />
          <ServicesLayout />
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
