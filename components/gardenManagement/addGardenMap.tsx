import MapView from "react-native-maps";
import { StyleSheet, Text, Platform, View, ViewProps } from "react-native";
import { useEffect, useState } from "react";

type BackgroundLayoutProps = ViewProps & {
  children?: React.ReactNode;
};

export default function AddGardenMap({
  children,
  style,
  ...rest
}: BackgroundLayoutProps) {
  interface Location {
    latitude: number;
    longitude: number;
  }

  const [location, setLocation] = useState({
    latitude: 37.78825,
    longitude: -122.4324,
  });

  return (
    <View {...rest} style={style}>
      <MapView
        style={{ width: "100%", height: "100%" }}
        initialRegion={{
          latitude: 37.78825,
          longitude: -122.4324,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
        showsUserLocation={true}
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
      </MapView>
    </View>
  );
}

const styles = StyleSheet.create({});
