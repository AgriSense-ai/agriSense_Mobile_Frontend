import MapView, { Polygon, Marker } from "react-native-maps";
import { StyleSheet, TouchableOpacity, View, ViewProps } from "react-native";
import { useEffect, useState } from "react";
import * as Location from "expo-location";
import { MaterialIcons } from "@expo/vector-icons";
import AddGardenNavigationButton from "./AddGardenNavigationButton";

type BackgroundLayoutProps = ViewProps & {
  children?: React.ReactNode;
};

export default function AddGardenMap({
  children,
  style,

  ...rest
}: BackgroundLayoutProps) {
  const [location, setLocation] = useState({
    latitude: 0,
    longitude: 0,
    latitudeDelta: 0.005,
    longitudeDelta: 0.005,
  });

  const userLocation = async () => {
    let { status } = await Location.requestForegroundPermissionsAsync();
    if (status !== "granted") {
      console.log("Permission to access location was denied");
      return;
    }
    let location = await Location.getCurrentPositionAsync({});
    setLocation({
      latitude: location.coords.latitude,
      longitude: location.coords.longitude,
      latitudeDelta: 0.005,
      longitudeDelta: 0.005,
    });
    console.log("Location: ", location);
    return location;
  };

  useEffect(() => {
    // Get the user's location
    userLocation();
  }, []);

  return (
    <View {...rest} style={[styles.root, style]}>
      <View style={styles.buttonRow}>
        <AddGardenNavigationButton type="back" />
        <AddGardenNavigationButton
          type="continue"
          name="Mark"
          onPress={userLocation}
        />
      </View>
      <MapView
        style={{ width: "100%", height: "100%" }}
        initialRegion={location}
        region={location}
        onRegionChangeComplete={(region) => {
          setLocation(region);
        }}
        showsUserLocation={true}
        showsMyLocationButton={true}
        showsPointsOfInterest={true}
        showsTraffic={false}
        showsIndoors={false}
        showsBuildings={false}
        showsCompass={false}
        showsScale={false}
      >
        <View
          style={{
            flex: 1,
            justifyContent: "flex-start",
            alignItems: "center",
            paddingTop: 50,
          }}
        >
          {children}
        </View>
        <Marker
          coordinate={location}
          title={"My Location"}
          description={"This is my location"}
        />
      </MapView>
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    alignItems: "center",
    justifyContent: "center",
  },
  buttonRow: {
    flexDirection: "row",
    width: "70%",
    justifyContent: "space-between",
    position: "absolute",
    bottom: 100,
    zIndex: 1,
  },
});
