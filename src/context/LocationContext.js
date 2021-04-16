import createDataContext from "./createDataContext";

const locationReducer = (state, action) => {
  switch (action.type) {
    case "add_current_location":
      return { ...state, currentLocation: action.payload };
    default:
      state;
  }
};

const startRec = (dispatch) => () => {};

const stopRec = (dispatch) => () => {};

const addLocation = (dispatch) => (location) => {
  dispatch({ type: "add_current_location", payload: location });
};

export const { Provider, Context } = createDataContext(
  locationReducer,
  { startRec, stopRec, addLocation },
  { recording: false, locations: [], currentLocation: null }
);
