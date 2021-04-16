import * as Location from "expo-location";

const tenMetersWithDeg = 0.0001;

const getLocation = (increment) => {
  return {
    timestamp: 100000,
    coords: {
      speed: 0,
      heading: 0,
      accuracy: 5,
      altitudeAccuracy: 5,
      altitude: 5,
      longitude: 80.9607253 + increment * tenMetersWithDeg,
      latitude: 26.9032998 + increment * tenMetersWithDeg,
    },
  };
};

let counter = 0;
setInterval(() => {
  Location.EventEmitter.emit("Expo.locationChanged", {
    watchId: Location._getCurrentWatchId(),
    location: getLocation(counter),
  });
  counter++;
}, 1000);
