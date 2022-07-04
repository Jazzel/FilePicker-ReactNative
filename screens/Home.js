import React, { useState, useEffect, useCallback } from "react";

import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  Alert,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";

const HOLD_TIME = 0;

function HomeScreen({ navigation }) {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [submitted, SetSubmitted] = useState(false);

  const checkForNameValidation = () => {
    if (name.length >= 4) {
      return true;
    }
    return false;
  };

  const checkForPasswordValidation = () => {
    if (password.length >= 4) {
      return true;
    }
    return false;
  };

  const onPressHandler = () => {
    if (checkForNameValidation() && checkForPasswordValidation()) {
      SetSubmitted(!submitted);
      setTimeout(() => {
        navigation.navigate("Upload");
      }, HOLD_TIME);
    } else {
      if (!checkForNameValidation() && !checkForPasswordValidation()) {
        // alert("Please enter valid name and password");
        Alert.alert(
          "Warning!",
          "Please fill in the required fields.",
          [{ text: "OK" }],
          { cancelable: true }
        );
      } else {
        if (!checkForNameValidation()) {
          alert("Please enter valid name");
          Alert.alert(
            "Warning!",
            "The name must be longer than 3 characters",
            [{ text: "OK" }],
            { cancelable: true }
          );
        }

        if (!checkForPasswordValidation()) {
          alert("Please enter valid password");
          Alert.alert(
            "Warning!",
            "The password must be atleast 8 characters",
            [{ text: "OK" }],
            { cancelable: true }
          );
        }
      }
    }
  };
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
      <View style={styles.body}>
        {/* <Header/> */}
        <Text style={styles.text}>LOGIN</Text>
        <TextInput
          style={styles.input}
          placeholder="Name"
          value={name}
          maxLength={15}
          onChangeText={(value) => setName(value)}
        />
        <TextInput
          style={styles.input}
          placeholder="Password"
          value={password}
          maxLength={15}
          secureTextEntry
          onChangeText={(value) => setPassword(value)}
        />
        <Button
          title={"Submit"}
          onPress={onPressHandler}
          //  color= ''
        />
        {/* {submitted ? <Text>You are registered as {name}</Text> : null} */}
      </View>
    </TouchableWithoutFeedback>
  );
}
const styles = StyleSheet.create({
  body: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
  },

  text: {
    color: "black",
    fontSize: 20,
    margin: 10,
    textAlign: "center",
    fontWeight: "bold",
  },

  input: {
    width: 200,
    height: 40,
    paddingHorizontal: 15,
    borderWidth: 1,
    borderColor: "#6495ED",
    margin: 15,
    borderRadius: 10,
  },

  image: {
    width: 100,
    height: 100,
    margin: 10,
  },
});

export default HomeScreen;
