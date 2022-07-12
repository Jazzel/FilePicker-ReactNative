import React, { useState, useEffect, useCallback } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { StyleSheet, Text, Button } from "react-native";

import HomeScreen from "./Home";
import DetailsScreen from "./Details";
import SplashScreen from "./Splash";
import { SafeAreaProvider } from "react-native-safe-area-context";
import UploadScreen from "./Upload";
import DetectionScreen from "./Detection";

const Stack = createNativeStackNavigator();

function App() {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="Splash"
          screenOptions={{ headerShown: false }}
        >
          <Stack.Screen name="Splash" component={SplashScreen} />
          <Stack.Screen name="Home" component={HomeScreen} />
          {/* <Stack.Screen name="Upload2" component={DetailsScreen} /> */}
          <Stack.Screen name="Upload" component={UploadScreen} />
          <Stack.Screen name="Detection" component={DetectionScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
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

export default App;
