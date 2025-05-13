import { StyleSheet, View, ImageBackground } from "react-native";
const backgroundImage = require("@/assets/images/Background.png");
import { ReactNode } from "react";
import { Colors } from "../../constants/Colors";

const BackgroundLayout = () => {
  return (
    <View>
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
      ></ImageBackground>
    </View>
  );
};

export default BackgroundLayout;

const styles = StyleSheet.create({});
