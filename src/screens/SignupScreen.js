import React, { useContext } from "react";
import { View, StyleSheet } from "react-native";
import { Context } from "../context/AuthContext";
import AuthForm from "../components/AuthForm";
import NavLink from "../components/NavLink";
import { NavigationEvents } from "react-navigation";

const SignupScreen = ({ navigation }) => {
  const { state, signup, clearErrorMsg } = useContext(Context);

  return (
    <View style={styles.container}>
      <NavigationEvents onWillBlur={clearErrorMsg} />
      <AuthForm
        headerText="Sign Up for Tracker"
        errorMessage={state.errorMessage}
        submitTitle="Sign Up"
        onSubmit={signup}
      />
      <NavLink
        routeName="Signin"
        text="Already have an account? Sign In instead."
      />
    </View>
  );
};

SignupScreen.navigationOptions = () => {
  return {
    headerShown: false,
  };
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    marginBottom: 250,
  },
});

export default SignupScreen;
