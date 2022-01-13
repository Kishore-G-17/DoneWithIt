import React from "react";
import { Platform, StyleSheet, Text } from "react-native";

import { colors } from "../config/colors";

function AppText({ children, style }) {
  return <Text style={[styles.text, style]}>{children}</Text>;
}

const styles = StyleSheet.create({
  text: {
    fontSize: 15,
    color: colors.black,
    // ...Platform.select({
    //   android: {
    //     fontFamily: "Roboto",
    //   },
    //   ios: {
    //     fontFamily: "Reinvir",
    //   },
    // }),
  },
});

export default AppText;
