import { Platform, View } from "react-native";
import AddGardenMap from "@/components/gardenManagement/addGardenMap";
import NavBarLayout from "@/components/navBar/NavBarLayout";

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
