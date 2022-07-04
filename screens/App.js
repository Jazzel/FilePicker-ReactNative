import React, { useState, useEffect, useCallback } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import {
  StyleSheet,
  Text,
  Button,
} from "react-native";

import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";

import * as DocumentPicker from "expo-document-picker";
import HomeScreen from "./Home";
import Splash from "./Splash";


function DetailsScreen({ navigation }) {
  const openGallery = async () => {
    let result = await DocumentPicker.getDocumentAsync({});
    console.log(result);
    if (!result.cancelled) {
      // this.setState({ selectedImage: result.uri, imageDetails: result });
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle={"dark-content"} />
      <Text style={styles.text}> 
        Upload Files 
      </Text>
      <Button title="Click here to upload file" onPress={openGallery} />
    </SafeAreaView>
  );
}
const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Splash">
        <Stack.Screen name="Splash" component={Splash} />      
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Upload" component={DetailsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
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
