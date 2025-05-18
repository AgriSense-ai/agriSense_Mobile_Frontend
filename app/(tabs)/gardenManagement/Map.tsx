import { StyleSheet, Platform, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import AddGardenMap from "@/components/gardenManagement/addGardenMap";
import NavBarLayout from "@/components/navBar/navBarLayout";

const Map = () => {
  return (
    <View>
      <AddGardenMap>
        {/* TODO: Figure out how to export it to Android also*/}
        {Platform.OS === "ios" ? <NavBarLayout /> : null}
      </AddGardenMap>
    </View>
  );
};

export default Map;

const styles = StyleSheet.create({});
