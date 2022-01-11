import React, { useState } from "react";
import { Switch } from "react-native";

import WelcomeScreen from "./app/screens/WelcomeScreen";
import ListingDetailsScreen from "./app/screens/ListingDetailsScreen";
import MessagesScreen from "./app/screens/MessagesScreen";
import AccountScreen from "./app/screens/AccountScreen";
import ListingsScreen from "./app/screens/ListingsScreen";
import LoginScreen from "./app/screens/LoginScreen";

import Screen from "./app/components/Screen";
import AppTextInput from "./app/components/AppTextInput";
import AppPicker from "./app/components/AppPicker";

export default function App() {
  const [isNew, setNewValue] = useState(false);

  const categories = [
    {
      label: "Furniture",
      id: 1,
    },
    {
      label: "Cameras",
      id: 2,
    },
    {
      label: "Electronics",
      id: 3,
    },
  ];

  const [category, setCategory] = useState(categories[0]);

  return (
    //<WelcomeScreen />

    //<ListingDetailsScreen />

    // <MessagesScreen />

    // <AccountScreen />

    //<ListingsScreen />

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

    <LoginScreen />
  );
}
