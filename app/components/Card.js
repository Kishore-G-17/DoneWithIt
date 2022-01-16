import React from "react";
import { View, StyleSheet, Image, Text, TouchableOpacity } from "react-native";

import { colors } from "../config/colors";
import AppText from "./AppText";

function Card({ title, subTitle, image, onPress }) {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.container}>
        <Image source={image} style={styles.image} />
        <View style={styles.detailsContainer}>
          <AppText style={styles.title}>{title}</AppText>
          <AppText style={styles.subTitle}>{subTitle}</AppText>
        </View>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    borderRadius: 15,
    width: "100%",
    marginBottom: 20,
    overflow: "hidden",
  },
  detailsContainer: {
    padding: 10,
  },
  image: {
    height: 200,
    width: "100%",
  },
  title: {
    marginBottom: 3,
  },
  subTitle: {
    fontWeight: "bold",
    color: colors.primary,
  },
});

export default Card;
