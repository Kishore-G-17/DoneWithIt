import React from "react";
import { View, StyleSheet, FlatList } from "react-native";

import Screen from "../components/Screen";
import ListItem from "../components/ListItem";
import Icon from "../components/Icon";
import { colors } from "../config/colors";

const datas = [
  {
    dataId: 1,
    name: "format-list-bulleted",
    title: "My listings",
    bkColor: colors.primary,
    targetScreen: "messages",
  },
  {
    dataId: 2,
    name: "email",
    title: "My messages",
    bkColor: colors.secondary,
    targetScreen: "messages",
  },
];

function AccountScreen({ navigation }) {
  return (
    <Screen style={styles.container0}>
      <View style={styles.container1}>
        <ListItem
          title="kishore"
          subTitle="abkishoreg@gmail.com"
          image={require("../assets/kishore.jpg")}
        />
      </View>
      <View style={styles.container1}>
        <FlatList
          data={datas}
          keyExtractor={(data) => data.dataId}
          renderItem={({ item }) => (
            <ListItem
              IconComponent={
                <Icon name={item.name} backgroundColor={item.bkColor} />
              }
              title={item.title}
              onPress={() => navigation.navigate(item.targetScreen)}
            />
          )}
        />
      </View>
      <View style={styles.container1}>
        <ListItem
          title="logout"
          IconComponent={<Icon name="logout" backgroundColor={colors.logout} />}
        />
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container0: {
    backgroundColor: colors.light,
    padding: 15,
  },
  container1: {
    backgroundColor: colors.white,
    marginTop: 20,
    borderRadius: 20,
  },
});

export default AccountScreen;
