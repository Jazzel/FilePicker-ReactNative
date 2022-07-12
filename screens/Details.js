import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, Button } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import * as DocumentPicker from "expo-document-picker";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

const DetailsScreen = () => {
  const [file, setFile] = React.useState(null);

  const openGallery = async () => {
    let result = await DocumentPicker.getDocumentAsync({
      type: ["audio/wav"],
    });

    if (!result.cancelled) {
      // this.setState({ selectedImage: result.uri, imageDetails: result });
    }

    let uploadImage = async () => {
      //Check if any file is selected or not
      if (file != null) {
        //If file selected then create FormData
        const fileToUpload = file;
        const data = new FormData();
        data.append("name", "Image Upload");
        data.append("file_attachment", fileToUpload);
        let res = await fetch("http://localhost//webservice/user/uploadImage", {
          method: "post",
          body: data,
          headers: {
            "Content-Type": "multipart/form-data; ",
          },
        });
        let responseJson = await res.json();
        if (responseJson.status == 1) {
          alert("Upload Successful");
        }
      } else {
        //if no file selected the show alert
        alert("Please Select File first");
      }
    };
  };
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle={"dark-content"} />
      <Text style={styles.text}>Upload Files</Text>
      <Button title="Click here to upload file" onPress={openGallery} />
    </SafeAreaView>
  );
};

export default DetailsScreen;
