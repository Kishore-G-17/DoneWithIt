import React, { useEffect } from "react";
import {
  View,
  StyleSheet,
  Image,
  TouchableWithoutFeedback,
  Alert,
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import * as ImagePicker from "expo-image-picker";

import { colors } from "../config/colors";

function ImageInput({ Uri = null, onChangeImage }) {
  const requestPermission = async () => {
    const result = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (!result.granted) alert("Please enable the camera permission!");
  };

  useEffect(() => {
    requestPermission();
  }, []);

  const selectImage = async () => {
    const res = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      quality: 0.5,
    });
    if (!res.cancelled) onChangeImage(res.uri);
  };

  const handlePress = () => {
    if (!Uri) selectImage();
    else {
      Alert.alert("Delete", "Are you sure you want to delete this image!", [
        { text: "yes", onPress: () => onChangeImage(Uri) },
        { text: "no" },
      ]);
    }
  };

  return (
    <TouchableWithoutFeedback onPress={handlePress}>
      <View style={styles.container}>
        {!Uri && (
          <MaterialCommunityIcons
            name="camera"
            size={50}
            color={colors.medium}
          />
        )}
        {Uri && <Image source={{ uri: Uri }} style={styles.image} />}
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    backgroundColor: colors.light,
    //borderColor: colors.medium,
    borderRadius: 20,
    //borderWidth: 5,
    height: 100,
    justifyContent: "center",
    overflow: "hidden",
    width: 100,
  },
  image: {
    height: "100%",
    width: "100%",
  },
});

export default ImageInput;
