import React from "react";
import { StyleSheet, FlatList } from "react-native";

import Screen from "../components/Screen";
import Card from "../components/Card";
import { colors } from "../config/colors";

const listings = [
  {
    id: 1,
    title: "Red jacket for sale!",
    subTitle: 100,
    image: require("../assets/jacket.jpg"),
  },
  {
    id: 2,
    title: "couch in great condition",
    subTitle: 1000,
    image: require("../assets/welcome2.jpg"),
  },
];

function ListingsScreen({ navigation }) {
  return (
    <Screen style={styles.container}>
      <FlatList
        data={listings}
        keyExtractor={(listing) => listing.id}
        renderItem={({ item }) => (
          <Card
            title={item.title}
            subTitle={"$" + item.subTitle}
            image={item.image}
            onPress={() => navigation.navigate("feedDetails", { item })}
          />
        )}
      />
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.light,
    padding: 20,
    paddingTop: 50,
  },
});

export default ListingsScreen;
