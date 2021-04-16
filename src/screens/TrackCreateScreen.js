import React, { useContext } from "react";
import "../_mockLocation";
import { StyleSheet } from "react-native";
import { Text } from "react-native-elements";
import { SafeAreaView } from "react-navigation";
import Map from "../components/Map";
import useLocation from "../hooks/useLocation";

import { Context as LocationContext } from "../context/LocationContext";

const TrackCreateScreen = () => {
  const { addLocation } = useContext(LocationContext);

  const [err] = useLocation(addLocation);

  return (
    <SafeAreaView forceInset={{ top: "always" }}>
      <Text h2>Create a Track</Text>
      <Map />
      {err ? <Text>Please enable location</Text> : null}
    </SafeAreaView>
  );
};

export default TrackCreateScreen;
