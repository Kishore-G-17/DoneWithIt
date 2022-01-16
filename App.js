import React, { useState } from "react";
import { Switch } from "react-native";

import WelcomeScreen from "./app/screens/WelcomeScreen";
import ListingDetailsScreen from "./app/screens/ListingDetailsScreen";
import MessagesScreen from "./app/screens/MessagesScreen";
import AccountScreen from "./app/screens/AccountScreen";
import ListingsScreen from "./app/screens/ListingsScreen";
import LoginScreen from "./app/screens/LoginScreen";
import ListingEditScreen from "./app/screens/ListingEditScreen";
import Screen from "./app/components/Screen";
import AppPicker from "./app/components/AppPicker";
import ImageInputList from "./app/components/ImageInputList";
import ImageInput from "./app/components/ImageInput";

export default function App() {
  return (
    // <WelcomeScreen />

    // <ListingDetailsScreen />

    // <MessagesScreen />

    // <AccountScreen />

    // <ListingsScreen />

    // <Screen style={{ padding: 20, paddingTop: 50 }}>
    //   <Switch
    //     value={isNew}
    //     onValueChange={(newValue) => setNewValue(newValue)}
    //   />
    //   <AppPicker
    //     icon="apps"
    //     items={categories}
    //     selectedItem={category}
    //     onSelectItem={(item) => setCategory(item)}
    //   />
    // </Screen>

    // <LoginScreen />
    <ListingEditScreen />
  );
}
