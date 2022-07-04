import React, { useEffect } from 'react'
import {
    StyleSheet,
    Text,
    View
  } from "react-native";
import { SafeAreaView } from 'react-native-safe-area-context';
import { StatusBar } from "expo-status-bar";


const styles= StyleSheet.create({
    container: {
   
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      },
})

function Splash () {
  return (
    <SafeAreaView style={{flex: 1,
    backgroundColor:
      "radial-gradient(circle, rgba(58,96,115,1) 10%, rgba(22,34,42,1) 100%)",}}>
    <StatusBar hidden={true}/>
    <View style={styles.container}>  
        <Text>Splash</Text>   
    </View>
    </SafeAreaView>

  )
}


export default Splash