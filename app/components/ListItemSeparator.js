import React from "react";
import { View, StyleSheet } from "react-native";

import { colors } from "../config/colors";

function ListItemSeparator() {
  return <View style={styles.separator}></View>;
}

const styles = StyleSheet.create({
  separator: {
    height: 2,
    width: "100%",
    backgroundColor: colors.light,
  },
});

export default ListItemSeparator;
