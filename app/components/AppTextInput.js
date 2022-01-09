import React, { useState } from "react";
import { StyleSheet, View, TextInput, Text } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import defaultStyles from "../config/styles";

function AppTextInput({ icon, ...otherProps }) {
  const [username, setUserName] = useState("");

  return (
    <View style={styles.container}>
      <MaterialCommunityIcons
        name={icon}
        size={25}
        style={styles.icon}
        color={defaultStyles.colors.fadeInColorForSubTitle}
      />
      <TextInput
        {...otherProps}
        style={defaultStyles.text}
        onChangeText={(text) => setUserName(text)}
      />
    </View>
    //<Text>{username}</Text> /* this is wrong */
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    width: "100%",
    backgroundColor: defaultStyles.colors.light,
    padding: 10,
    marginVertical: 10,
    borderRadius: 20,
  },
  icon: {
    marginRight: 5,
  },
});

export default AppTextInput;
