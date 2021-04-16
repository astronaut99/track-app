import AsyncStorage from "@react-native-async-storage/async-storage";
import createDataContext from "./createDataContext";
import trackerApi from "../api/tracker";
import { navigate } from "../navigationRef";

const authReducer = (state, action) => {
  switch (action.type) {
    case "add_error":
      return { ...state, errorMessage: action.payload };
    case "signin":
      return { errorMessage: "", token: action.payload };
    case "signput":
      return { token: null, errorMessage: "" };
    case "clear_error":
      return { ...state, errorMessage: " " };
    default:
      return state;
  }
};

const tryLocalSignin = (dispatch) => async () => {
  const token = await AsyncStorage.getItem("token");
  if (token) {
    dispatch({ type: "signin", payload: token });
    navigate("TrackList");
  } else {
    navigate("loginFlow");
  }
};

const clearErrorMsg = (dispatch) => () => {
  dispatch({ type: "clear_error" });
};

const signup = (dispatch) => {
  return async ({ email, password }) => {
    // make api request to sign up with that email & password
    try {
      const response = await trackerApi.post("/signup", { email, password });
      // if we sign up, modify our state to be authenticated
      await AsyncStorage.setItem("token", response.data.token);
      dispatch({ type: "signin", payload: response.data.token });
      // navigate to main flow
      navigate("TrackList");
    } catch (err) {
      dispatch({ type: "add_error", payload: "Something went wrong" });
    }

    // if fail, reflect an error
  };
};

const signin = (dispatch) => {
  return async ({ email, password }) => {
    // Try to
    try {
      const response = await trackerApi.post("/signin", { email, password });
      // Handle success by updating state
      await AsyncStorage.setItem("token", response.data.token);
      dispatch({ type: "signin", payload: response.data.token });
      navigate("TrackList");
    } catch (err) {
      // Handle failure by showing error
      dispatch({
        type: "add_error",
        payload: "Something went wrong with Sign In",
      });
    }
  };
};

const signout = (dispatch) => {
  return async () => {
    await AsyncStorage.removeItem("token");
    dispatch({ type: "signout" });
    navigate("loginFlow");
  };
};

export const { Provider, Context } = createDataContext(
  authReducer,
  { signin, signout, signup, clearErrorMsg, tryLocalSignin },
  { token: null, errorMessage: "" }
);
