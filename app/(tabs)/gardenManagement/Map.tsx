import { StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import AddGardenMap from "@/components/gardenManagement/addGardenMap";
import NavBarLayout from "@/components/navBar/navBarLayout";

const Map = () => {
  return (
    <View>
      <AddGardenMap>
        <NavBarLayout />
      </AddGardenMap>
    </View>
  );
};

export default Map;

const styles = StyleSheet.create({});
