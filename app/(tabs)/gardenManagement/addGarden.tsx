import { StyleSheet, ImageBackground, View } from "react-native";
import AddGardenForm from "@/components/gardenManagement/AddGardenForm";
import BackgroundLayout from "@/components/ui/BackgroundLayout";
import { Colors } from "@/constants/Colors";

const backgroundImage = require("@/assets/images/Background.png");

const addGarden = () => {
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
      <AddGardenForm />
    </ImageBackground>
  );
};

export default addGarden;

const styles = StyleSheet.create({});
