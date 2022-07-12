import React, { useState } from "react";

import {
  StyleSheet,
  Text,
  View,
  // TextInput,
  Alert,
  TouchableWithoutFeedback,
  Keyboard,
  TouchableOpacity,
} from "react-native";

import { TextInput } from "@react-native-material/core";
import Icon from "@expo/vector-icons/MaterialCommunityIcons";
import { LinearGradient } from "expo-linear-gradient";

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
      <LinearGradient style={{ flex: 1 }} colors={["#3A6073", "#16222A"]}>
        <View style={styles.body}>
          <View
            style={{
              width: "100%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "row",
            }}
          >
            <View style={{ width: "20%" }}>
              <Text
                style={[
                  styles.text1,
                  {
                    transform: [{ rotate: "-90deg" }],
                  },
                ]}
              >
                Login
              </Text>
            </View>
            <View style={{ width: "80%" }}>
              <Text style={styles.text2}>Enter Credentials</Text>
            </View>
          </View>
          <TextInput
            variant="standard"
            style={styles.input1}
            placeholder="Name"
            value={name}
            inputStyle={{ color: "white" }}
            maxLength={15}
            placeholderTextColor="white"
            onChangeText={(value) => setName(value)}
          />
          <TextInput
            variant="standard"
            style={styles.input2}
            placeholder="Password"
            value={password}
            inputStyle={{ color: "white" }}
            placeholderTextColor="white"
            maxLength={15}
            secureTextEntry
            onChangeText={(value) => setPassword(value)}
          />
          {/* <Button title={"Submit"} onPress={onPressHandler} /> */}
          <View
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "flex-end",
              width: "70%",
              marginTop: 30,
            }}
          >
            <TouchableOpacity style={styles.button} onPress={onPressHandler}>
              <Icon name="arrow-right" style={styles.icon} />
              <Text style={styles.btnText}>Login</Text>
            </TouchableOpacity>
          </View>
        </View>
      </LinearGradient>
    </TouchableWithoutFeedback>
  );
}
const styles = StyleSheet.create({
  body: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
  },
  text1: {
    color: "white",
    marginTop: 30,
    fontSize: 28,
    fontWeight: "bold",
  },
  text2: {
    color: "white",
    fontSize: 20,
    marginTop: 70,
    marginBottom: 40,
    textAlign: "left",
    fontWeight: "bold",
    width: "80%",
  },

  input1: {
    paddingVertical: 10,
    width: "65%",
    marginTop: 100,
    width: "65%",
  },
  input2: {
    paddingVertical: 10,
    width: "65%",
  },

  image: {
    width: 100,
    height: 100,
    margin: 10,
  },
  button: {
    backgroundColor: "#fff",
    marginTop: 50,
    paddingVertical: 25,
    borderRadius: 50,
    width: 150,
    justifyContent: "center",
    alignItems: "center",
    textTransform: "uppercase",
    flexDirection: "row",
  },
  icon: {
    fontSize: 20,
    marginRight: 5,
    color: "black",
  },
  btnText: {
    color: "black",
    fontWeight: "bold",
    fontSize: 17,
  },
});

export default HomeScreen;
