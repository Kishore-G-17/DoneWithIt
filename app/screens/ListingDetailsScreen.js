import React from "react";
import { View, Image, StyleSheet } from "react-native";

import { colors } from "../config/colors";
import AppText from "../components/AppText";
import ListItem from "../components/ListItem";

function ListingDetailsScreen({ route }) {
  const item = route.params.item;
  return (
    <View style={styles.container}>
      <Image source={item.image} style={styles.image} />
      <View style={styles.detailsContainer}>
        <AppText style={styles.title}>{item.title}</AppText>
        <AppText style={styles.subTitle}>${item.subTitle}</AppText>
      </View>
      <ListItem
        image={require("../assets/mosh.jpg")}
        title="Mosh Hamedani"
        subTitle="5 Lisings"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  detailsContainer: {
    padding: 20,
  },
  image: {
    width: "100%",
    height: 300,
  },
  subTitle: {
    fontWeight: "bold",
    color: colors.primary,
    fontSize: 25,
  },
  title: {
    marginBottom: 3,
  },
});

export default ListingDetailsScreen;
