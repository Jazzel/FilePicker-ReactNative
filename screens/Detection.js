// Import React
import React, { useState } from "react";
// Import core components
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";

import { LinearGradient } from "expo-linear-gradient";
import Icon from "@expo/vector-icons/MaterialCommunityIcons";

const DetectionScreen = () => {
  const [singleFile, setSingleFile] = useState(null);

  const onClickHandler = () => {};

  return (
    <LinearGradient style={{ flex: 1 }} colors={["#3A6073", "#16222A"]}>
      <View style={styles.mainBody}>
        <View style={{ alignItems: "center" }}>
          <Text
            style={{
              fontSize: 25,
              marginTop: 20,
              marginBottom: 30,
              textAlign: "center",
              color: "white",
              fontWeight: "bold",
            }}
          >
            Emotion Detection
          </Text>
        </View>

        <TouchableOpacity
          style={styles.buttonStyle}
          activeOpacity={0.5}
          onPress={onClickHandler}
        >
          <Icon name="arrow-right" style={styles.icon} />
          <Text style={styles.buttonTextStyle}>Detect emotions</Text>
        </TouchableOpacity>
      </View>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  mainBody: {
    flex: 1,
    justifyContent: "center",
    padding: 20,
  },
  buttonStyle: {
    borderWidth: 0,
    color: "#000",
    height: 40,
    alignItems: "center",
    borderRadius: 30,
    marginLeft: 35,
    marginRight: 35,
    marginTop: 15,

    backgroundColor: "#fff",
    justifyContent: "center",
    textTransform: "uppercase",
    flexDirection: "row",
  },
  buttonTextStyle: {
    color: "#000",
    fontWeight: "bold",
    paddingVertical: 10,
    fontSize: 16,
  },
  textStyle: {
    backgroundColor: "#000",
    fontSize: 15,
    marginTop: 16,
    marginLeft: 35,
    marginRight: 35,
    fontWeight: "bold",
    textAlign: "center",
  },
  icon: {
    fontSize: 20,
    marginRight: 5,
    color: "black",
  },
});

export default DetectionScreen;
