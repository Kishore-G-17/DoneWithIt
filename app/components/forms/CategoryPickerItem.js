import React from "react";
import { View, StyleSheet, TouchableOpacity } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import AppText from "../AppText";

import { colors } from "../../config/colors";

function CategoryPickerItem({ onPress, item }) {
  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      <View
        style={[
          styles.iconContainer,
          { backgroundColor: item.backgroundColor },
        ]}
      >
        <MaterialCommunityIcons name={item.icon} size={30} color="#fff" />
      </View>
      <AppText style={{ marginTop: 2 }}>{item.label}</AppText>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    width: "33%",
    alignItems: "center",
    marginHorizontal: 2,
    paddingVertical: 5,
    // backgroundColor: colors.medium,
  },
  iconContainer: {
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 50,
    padding: 20,
  },
});

export default CategoryPickerItem;
