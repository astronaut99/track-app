import React, { useState, useContext } from "react";
import { View, StyleSheet } from "react-native";
import { Text, Input, Button } from "react-native-elements";
import Spacer from "../components/Spacer";
import { Context } from "../context/AuthContext";

const SignupScreen = ({ navigation }) => {
  const { state, signup } = useContext(Context);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  console.log(email, password);

  return (
    <View style={styles.container}>
      <Spacer>
        <Text h3>Sign Up for Tracker</Text>
      </Spacer>
      <Input label="Email" value={email} onChangeText={setEmail} />
      <Spacer />
      <Input
        label="Password"
        autoCapitalize="none"
        autoCorrect={false}
        value={password}
        secureTextEntry
        onChangeText={setPassword}
      />
      <Spacer>
        <Button
          onPress={() => signup({ email, password })}
          buttonStyle={{ width: 150 }}
          type="solid"
          title="Sign Up"
        />
      </Spacer>
    </View>
  );
};

SignupScreen.navigationOptions = () => {
  return {
    header: null,
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
