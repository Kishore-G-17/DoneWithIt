import React from "react";
import { TouchableOpacity } from "react-native";

import AppText from "./AppText";

function PickerItem({ item, onPress }) {
  return (
    <TouchableOpacity onPress={onPress}>
      <AppText style={{ padding: 10 }}>{item.label}</AppText>
    </TouchableOpacity>
  );
}

export default PickerItem;
