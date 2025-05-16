import { View, Image, StyleSheet, TouchableOpacity, Text } from "react-native";
import ProfilePlaceHolder from "./ProfilePlaceHolder";
import { useRouter } from "expo-router";
import { useNavigation } from "@react-navigation/native";

const logoImage = require("@/assets/images/Logo/icon.png");
const backImage = require("@/assets/images/SVGs/PlantIntro.png");

function navBarLayout() {
  const router = useRouter();
  const navigation = useNavigation();

  const handlePress = () => {
    // Example: check if navigation can go back
    if (navigation.canGoBack && navigation.canGoBack()) {
      navigation.goBack();
      console.log("Back button pressed");
    } else {
      console.error("Button not functioning");
    }
  };
  return (
    <View>
      <View style={styles.layoutContainer}>
        <TouchableOpacity onPress={handlePress}>
          <Image
            source={backImage}
            style={{ width: 24, height: 24 }}
            resizeMode="contain"
          />
        </TouchableOpacity>
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
