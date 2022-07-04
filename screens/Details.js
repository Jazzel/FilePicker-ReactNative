import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Button } from "react-native-web";
import * as DocumentPicker from "expo-document-picker";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

const DetailsScreen = () => {
  const openGallery = async () => {
    let result = await DocumentPicker.getDocumentAsync({
      type: ["audio/wav"],
    });

    if (!result.cancelled) {
      // this.setState({ selectedImage: result.uri, imageDetails: result });
    }
  };
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle={"dark-content"} />
      <Text style={styles.text}>Upload Files</Text>
      <br />
      <Button title="Click here to upload file" onPress={openGallery} />
    </SafeAreaView>
  );
};

export default DetailsScreen;
