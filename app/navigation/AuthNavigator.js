import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import WelcomeScreen from "../screens/WelcomeScreen";
import LoginScreen from "../screens/LoginScreen";

const Stack = createStackNavigator();

const AuthNavigator = () => (
  <Stack.Navigator screenOptions={{ headerShown: false }}>
    <Stack.Screen name="welcome" component={WelcomeScreen} />
    <Stack.Screen name="login" component={LoginScreen} />
  </Stack.Navigator>
);

export default AuthNavigator;
