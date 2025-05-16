import { StyleSheet, View, ImageBackground, ViewProps } from "react-native";
const backgroundImage = require("@/assets/images/Background.png");
import { Colors } from "../../constants/Colors";
import React from "react";

type BackgroundLayoutProps = ViewProps & {
  children?: React.ReactNode;
};

const BackgroundLayout: React.FC<BackgroundLayoutProps> = ({ children, style, ...rest }) => {
  return (
    <View style={[styles.container, style]} {...rest}>
      <ImageBackground
        source={backgroundImage}
        resizeMode="stretch"
        style={styles.background}
        imageStyle={styles.image}
      >
        {children}
      </ImageBackground>
    </View>
  );
};

export default BackgroundLayout;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.light.background,
  },
  background: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    opacity: 0.2,
    position: "absolute",
    width: "100%",
    height: "100%",
  },
});
