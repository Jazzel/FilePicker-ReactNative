import React, { useEffect } from "react";
import { StyleSheet, Text, View, StatusBar, Image } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { SafeAreaView } from "react-native-safe-area-context";
// import gif from './../assets/gif.svg';

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
    <SafeAreaView style={{ flex: 1 }}>
      <StatusBar barStyle="light-content" backgroundColor="#6a51ae" />
      <LinearGradient style={{ flex: 1 }} colors={["#3A6073", "#16222A"]}>
        <View style={styles.container}>
          <Image
            source={require("./../assets/gif.gif")}
            style={{ height: 150, width: 150 }}
          />
        </View>
      </LinearGradient>
    </SafeAreaView>
  );
}

export default SplashScreen;
