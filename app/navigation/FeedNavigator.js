import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import ListingsScreen from "../screens/ListingsScreen";
import ListingDetailsScreen from "../screens/ListingDetailsScreen";

const Stack = createStackNavigator();

const FeedNavigator = () => (
  <Stack.Navigator screenOptions={{ headerShown: false }} mode="modal">
    <Stack.Screen name="feeds" component={ListingsScreen} />
    <Stack.Screen name="feedDetails" component={ListingDetailsScreen} />
  </Stack.Navigator>
);

export default FeedNavigator;
