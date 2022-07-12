// Import React
import React, { useState } from "react";
// Import core components
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";

// Import Document Picker
import * as DocumentPicker from "expo-document-picker";

import { LinearGradient } from "expo-linear-gradient";
import Icon from "@expo/vector-icons/MaterialCommunityIcons";
const UploadScreen = () => {
  const [singleFile, setSingleFile] = useState(null);
  const [uploaded, setUploaded] = useState(false);

  const uploadImage = async () => {
    // Check if any file is selected or not
    if (singleFile != null) {
      // If file selected then create FormData
      const fileToUpload = singleFile;
      const data = new FormData();
      data.append("name", "Image Upload");
      data.append("file_attachment", fileToUpload.uri);
      // Please change file upload URL

      let res = await fetch("http://127.0.0.1:5000/upload", {
        method: "POST",
        body: data,
        processData: false,
        contentType: false,
        //   headers: {
        //     "Content-Type": "multipart/form-data",
        //   },
      });
      console.log(res);

      let responseJson = await res.json();
      console.log("res: ", responseJson);
      if (responseJson.status == 1) {
        alert("Upload Successful");
        setUploaded(true);
      }
    } else {
      // If no file selected the show alert
      alert("Please Select File first");
    }
  };

  const selectFile = async () => {
    // Opening Document Picker to select one file\
    let res;
    try {
      res = await DocumentPicker.getDocumentAsync({
        type: ["audio/wav"],
      });
      // Printing the log realted to the file
      console.log("res : " + JSON.stringify(res));
      // Setting the state to show single file attributes
      setSingleFile(res);
    } catch (err) {
      setSingleFile(null);
      // Handling any exception (If any)
      if (res.cancelled) {
        // If user canceled the document selection
        alert("Canceled");
      } else {
        // For Unknown Error
        alert("Unknown Error: " + JSON.stringify(err));
        throw err;
      }
    }
  };

  const detectEmotions = () => {
    if (!uploaded) {
      alert("File not uploaded on the server !");
    } else {
    }
  };

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
            Upload File
          </Text>
        </View>
        {/*Showing the data of selected Single file*/}
        {singleFile != null ? (
          <Text style={styles.textStyle}>
            File Name: {singleFile.name ? singleFile.name : ""}
            {"\n"}
            Type: {singleFile.type ? singleFile.type : ""}
            {"\n"}
            File Size: {singleFile.size ? singleFile.size : ""} bytes
            {"\n"}
          </Text>
        ) : null}
        <TouchableOpacity
          style={styles.buttonStyle}
          activeOpacity={0.5}
          onPress={selectFile}
        >
          <Icon name="arrow-right" style={styles.icon} />
          <Text style={styles.buttonTextStyle}>Select File</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.buttonStyle}
          activeOpacity={0.5}
          onPress={uploadImage}
        >
          <Icon name="arrow-right" style={styles.icon} />
          <Text style={styles.buttonTextStyle}>Upload File</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.buttonStyle}
          activeOpacity={0.5}
          onPress={detectEmotions}
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
    backgroundColor: "transparent",
    fontSize: 15,
    color: "#fff",
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

export default UploadScreen;
