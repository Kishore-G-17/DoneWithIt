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

function AppTextInput({ icon, items, selectedItem, onSelectItem }) {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    //<React.Fragment></React.Fragment>
    <>
      <TouchableWithoutFeedback onPress={() => setModalVisible(!modalVisible)}>
        <View style={styles.container}>
          <MaterialCommunityIcons
            name={icon}
            size={25}
            style={styles.icon}
            color={defaultStyles.colors.fadeInColorForSubTitle}
          />
          <AppText style={{ flex: 1 }}>{selectedItem.label}</AppText>
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
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <PickerItem
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

export default AppTextInput;
