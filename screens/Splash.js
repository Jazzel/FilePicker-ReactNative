import React, { useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";
import { LinearGradient } from "expo-linear-gradient";
const styles = StyleSheet.create({
  container: {
    background:
      "radial-gradient(circle, rgba(58,96,115,1) 10%, rgba(22,34,42,1) 100%)",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

function SplashScreen({ navigation }) {
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate("Home");
    }, 4000);
  }, []);

  return (
    <LinearGradient style={{ flex: 1 }} colors={["#3A6073", "#16222A"]}>
      <StatusBar hidden={true} />

      <View style={styles.container}>
        <Text style={styles.text}>dsad</Text>
      </View>
    </LinearGradient>
  );
}

export default SplashScreen;
