import React from "react";
import { StyleSheet, View, Dimensions } from "react-native";
import MapView, { Polygon, Marker } from "react-native-maps";

type Coordinate = {
  latitude: number;
  longitude: number;
};

type SettingsMapProps = {
  coordinates: Coordinate[];
};

const { width, height } = Dimensions.get("window");

const ASPECT_RATIO = width / height;
const LATITUDE_DELTA = 0.01;
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;

const getInitialRegion = (coordinates: Coordinate[]) => {
  if (coordinates.length === 0) {
    return {
      latitude: 0,
      longitude: 0,
      latitudeDelta: LATITUDE_DELTA,
      longitudeDelta: LONGITUDE_DELTA,
    };
  }
  const { latitude, longitude } = coordinates[0];
  return {
    latitude,
    longitude,
    latitudeDelta: LATITUDE_DELTA,
    longitudeDelta: LONGITUDE_DELTA,
  };
};

const SettingsMap: React.FC<SettingsMapProps> = ({ coordinates }) => {
  return (
    <View style={styles.container}>
      <MapView style={styles.map} initialRegion={getInitialRegion(coordinates)}>
        {coordinates.map((coordinate, index) => (
          <Marker
            key={index}
            coordinate={coordinate}
            title={`Coordinate ${index + 1}`}
            description={`Latitude: ${coordinate.latitude}, Longitude: ${coordinate.longitude}`}
          />
        ))}
        <Polygon
          coordinates={coordinates}
          fillColor={"rgba(255, 0, 0, 0.5)"}
          strokeColor={"rgba(255, 0, 0, 0.5)"}
          strokeWidth={2}
          tappable={true}
        />
      </MapView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
});

export default SettingsMap;
