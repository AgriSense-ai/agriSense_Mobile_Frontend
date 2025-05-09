import { View, Image, StyleSheet } from "react-native";
import ProfilePlaceHolder from "./ProfilePlaceHolder";

const logoImage = require("@/assets/images/Logo/icon.png");

function navBarLayout() {
  return (
    <View>
      <View style={styles.layoutContainer}>
        <Image source={logoImage} style={styles.ImageContainer}></Image>
        <ProfilePlaceHolder />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  ImageContainer: {
    width: 50,
    height: 50,
    aspectRatio: 1,
    marginLeft: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  layoutContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 10,
    width: 380,
    height: 50,
    backgroundColor: "transarent",
  },
});
export default navBarLayout;
