import React from "react";
import { View, Text, StyleSheet, TouchableWithoutFeedback } from "react-native";

import { colors } from "../config/colors";

function AppButton({ children, onPress, style }) {
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View style={[styles.button, style]}>
        <Text style={styles.text}>{children}</Text>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  button: {
    width: "90%",
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 90,
    marginVertical: 5,
  },
  text: {
    color: colors.white,
    fontWeight: "bold",
    fontSize: 20,
    textTransform: "uppercase",
  },
});

export default AppButton;
