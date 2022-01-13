import React, { useState } from "react";
import {
  StyleSheet,
  View,
  TextInput,
  Text,
  TouchableWithoutFeedback,
  Modal,
  Button,
  FlatList,
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import defaultStyles from "../config/styles";
import AppText from "./AppText";
import PickerItem from "./PickerItem";

import { colors } from "../config/colors";

function AppPicker({
  icon,
  items,
  selectedItem,
  onSelectItem,
  placeholder,
  PickerItemComponent = PickerItem,
  noOfColumns = 1,
}) {
  const [modalVisible, setModalVisible] = useState(false);
  // console.log(PickerItemComponent);
  return (
    //<React.Fragment></React.Fragment>
    <>
      <TouchableWithoutFeedback onPress={() => setModalVisible(!modalVisible)}>
        <View style={styles.container}>
          {icon && (
            <MaterialCommunityIcons
              name={icon}
              size={25}
              style={styles.icon}
              color={defaultStyles.colors.fadeInColorForSubTitle}
            />
          )}
          {selectedItem ? (
            <AppText style={{ flex: 1, color: colors.dark }}>
              {selectedItem.label}
            </AppText>
          ) : (
            <AppText style={{ flex: 1, color: colors.medium }}>
              {placeholder}
            </AppText>
          )}
          <MaterialCommunityIcons
            name="chevron-down"
            size={25}
            style={styles.icon}
            color={defaultStyles.colors.fadeInColorForSubTitle}
          />
        </View>
      </TouchableWithoutFeedback>
      <Modal visible={modalVisible} animationType="slide">
        <Button title="close" onPress={() => setModalVisible(!modalVisible)} />
        <FlatList
          data={items}
          keyExtractor={(item) => item.value.toString()}
          numColumns={noOfColumns}
          renderItem={({ item }) => (
            <PickerItemComponent
              item={item}
              label={item.label}
              onPress={() => {
                setModalVisible(!modalVisible);
                onSelectItem(item);
              }}
            />
          )}
        />
      </Modal>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    width: "100%",
    backgroundColor: defaultStyles.colors.light,
    padding: 10,
    marginVertical: 10,
    borderRadius: 20,
  },
  icon: {
    marginRight: 5,
  },
});

export default AppPicker;
