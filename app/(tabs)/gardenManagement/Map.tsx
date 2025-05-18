import { StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import AddGardenMap from "@/components/gardenManagement/addGardenMap";

const Map = () => {
  return (
    <SafeAreaView>
      <AddGardenMap />
    </SafeAreaView>
  );
};

export default Map;

const styles = StyleSheet.create({});
