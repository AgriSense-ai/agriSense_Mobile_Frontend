import { View, Image, StyleSheet } from "react-native";
import ProfilePlaceHolder from "./ProfilePlaceHolder";

// const logoImage = require("@/assets/images/Logo/logo.png");

function navBarLayout() {
  return (
    <View>
      <View style={styles.layoutContainer}>
        <ProfilePlaceHolder />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  navBar: {
    // justifyContent: "center",
    // alignItems: "center",
    // backgroundColor: "transparent",
  },
  layoutContainer: {
    // position: "relative",
    // width: "80%",
    // height: 70,
    // backgroundColor: "#fff",
    // borderBottomWidth: 1,
    // borderBottomColor: "#ccc",
    // justifyContent: "space-between",
    // flexDirection: "row",
    // alignItems: "center",
  },
});
export default navBarLayout;
