import { View, Image, StyleSheet, Pressable } from "react-native";
import ProfilePlaceHolder from "./ProfilePlaceHolder";
import { useRouter, usePathname } from "expo-router";
import { useNavigation } from "@react-navigation/native";
import { IconSymbol } from "@/components/ui/IconSymbol";
import { Colors } from "@/constants/Colors";

const logoImage = require("@/assets/images/icons/typoLogo.png");
const color = Colors.light.tint;

function NavBarLayout() {
  const router = useRouter();
  const navigation = useNavigation();
  const pathname = usePathname();

  const handlePress = () => {
    // Example: check if navigation can go back
    if (navigation.canGoBack && navigation.canGoBack()) {
      navigation.goBack();
      console.log("Back button pressed");
    } else {
      console.error("Button not functioning");
    }
  };

  const handlePressLogo = () => {
    router.push("/(tabs)/profileSettings");
    console.log("Logo pressed");
  };

  return (
    <View>
      <View style={styles.layoutContainer}>
        {pathname !== "/" ? (
          <Pressable onPress={handlePress}>
            <IconSymbol
              size={28}
              weight="bold"
              name="chevron.left"
              color={color}
            />
          </Pressable>
        ) : null}
        <Image source={logoImage} style={styles.ImageContainer}></Image>

        <Pressable onPress={handlePressLogo}>
          <ProfilePlaceHolder />
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  ImageContainer: {
    width: 100,
    height: 50,
    marginLeft: 10,
  },
  layoutContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 10,
    width: "90%",
    height: 50,
    backgroundColor: "transarent",
  },
});

export default NavBarLayout;
