import React, { useContext } from "react";
import { View, StyleSheet } from "react-native";
import { NavigationEvents } from "react-navigation";
import AuthForm from "../components/AuthForm";
import NavLink from "../components/NavLink";
import { Context } from "../context/AuthContext";

const SigninScreen = () => {
  const { state, signin, clearErrorMsg } = useContext(Context);

  return (
    <View style={styles.container}>
      <NavigationEvents onWillBlur={clearErrorMsg} />
      <AuthForm
        headerText="Sign In to your account"
        errorMessage={state.errorMessage}
        submitTitle="Sign In"
        onSubmit={signin}
      />
      <NavLink routeName="Signup" text="Don't have an account? Sign Up here." />
    </View>
  );
};

SigninScreen.navigationOptions = () => {
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

export default SigninScreen;
