import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import MessagesScreen from "../screens/MessagesScreen";
import AccountScreen from "../screens/AccountScreen";

const Stack = createStackNavigator();

const AccountNavigator = () => (
  <Stack.Navigator
    screenOptions={{ headerShown: false }}
    presentation="transparentModal"
  >
    <Stack.Screen name="account" component={AccountScreen} />
    <Stack.Screen name="messages" component={MessagesScreen} />
  </Stack.Navigator>
);

export default AccountNavigator;
