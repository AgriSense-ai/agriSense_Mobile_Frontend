import { StyleSheet, View, ImageBackground, ViewProps } from "react-native";
import { Colors } from "../../constants/Colors";
import NavBarLayout from "@/components/navBar/NavBarLayout";
const backgroundImage = require("@/assets/images/Background.png");

type BackgroundLayoutProps = ViewProps & {
  children?: React.ReactNode;
};

const BackgroundLayout: React.FC<BackgroundLayoutProps> = ({
  children,
  style,
  ...rest
}) => {
  return (
    <ImageBackground
      {...rest}
      source={backgroundImage}
      resizeMode="stretch"
      style={[styles.background, style]}
      imageStyle={styles.image}
    >
      <View style={styles.container}>
        <NavBarLayout />
        <View style={styles.body}>{children}</View>
      </View>
    </ImageBackground>
  );
};

export default BackgroundLayout;

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: Colors.light.background,
  },
  image: {
    opacity: 0.2,
  },
  container: {
    flex: 1,
    alignItems: "center",
    paddingTop: 50,
  },
  body: {
    flex: 1,
  },
});
