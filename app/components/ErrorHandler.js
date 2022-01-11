import React from "react";
import { StyleSheet, View } from "react-native";

import AppText from "./AppText";
import { colors } from "../config/colors";

function ErrorHandler({ children, visible }) {
  if (!visible) return null;
  return (
    <View>
      <AppText style={styles.errorMsg}>{children}</AppText>
    </View>
  );
}

const styles = StyleSheet.create({
  errorMsg: {
    color: colors.danger,
  },
});

export default ErrorHandler;
