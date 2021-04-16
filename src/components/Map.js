import React, { useContext } from "react";
import { View, StyleSheet, Text, ActivityIndicator } from "react-native";
import { State } from "react-native-gesture-handler";
import MapView, { Polyline, Circle } from "react-native-maps";
import { Context as LocationContext } from "../context/LocationContext";

const Map = () => {
  const {
    state: { currentLocation },
  } = useContext(LocationContext);
  if (!currentLocation) {
    return <ActivityIndicator size="large" style={{ marginTop: 200 }} />;
  }

  return (
    <MapView
      initialRegion={{
        ...currentLocation.coords,
        latitudeDelta: 0.01,
        longitudeDelta: 0.01,
      }}
      style={styles.map}
    >
      <Circle
        center={currentLocation.coords}
        radius={30}
        strokeColor="rgba(158,158,255,2.0)"
        fillColor="rgba(158,158,255,0.3)"
      />
    </MapView>
  );
};

const styles = StyleSheet.create({
  map: {
    height: 500,
  },
});

export default Map;
