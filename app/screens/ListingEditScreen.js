import React from "react";
import { StyleSheet } from "react-native";
import * as Yup from "yup";

import {
  AppForm,
  AppFormField,
  SubmitButton,
  AppFormPicker,
  CategoryPickerItem,
  FormImagePicker,
} from "../components/forms";
import Screen from "../components/Screen";

import { colors } from "../config/colors";

const validationSchema = Yup.object().shape({
  title: Yup.string().required().min(1).label("Title"),
  price: Yup.number().required().min(1).max(10000).label("Price"),
  description: Yup.string().label("Description"),
  category: Yup.object().required().nullable().label("Category"),
  images: Yup.array().min(1, "Please select atleast one image"),
});

const categories = [
  {
    label: "Furniture",
    value: 1,
    icon: "floor-lamp",
    backgroundColor: colors.secondary,
  },
  { label: "Cars", value: 2, icon: "car", backgroundColor: colors.primary },
  { label: "Cameras", value: 3, icon: "camera", backgroundColor: "blue" },
  { label: "Games", value: 4, icon: "cards-outline", backgroundColor: "red" },
  {
    label: "Clothing",
    value: 5,
    icon: "shoe-heel",
    backgroundColor: "green",
  },
  {
    label: "Sports",
    value: 6,
    icon: "basketball",
    backgroundColor: colors.logout,
  },
  {
    label: "Movies & Music",
    value: 7,
    icon: "music",
    backgroundColor: colors.medium,
  },
  {
    label: "Books",
    value: 8,
    icon: "book-open-variant",
    backgroundColor: colors.loginBkColor,
  },
  {
    label: "Others",
    value: 9,
    icon: "application",
    backgroundColor: colors.signupBkColor,
  },
];

function ListingEditScreen(props) {
  return (
    <Screen style={styles.container}>
      <AppForm
        initialValues={{
          title: "",
          price: "",
          description: "",
          category: null,
          images: [],
        }}
        onSubmit={(values) => console.log(values)}
        validationSchema={validationSchema}
      >
        <FormImagePicker name="images" />
        <AppFormField
          autoCaptilize="none"
          autoCorrect={false}
          maxLength={255}
          name="title"
          placeholder="Enter title"
          style={{ flex: 1 }}
        />

        <AppFormField
          autoCaptilize="none"
          autoCorrect={false}
          keyboardType="numeric"
          maxLength={8}
          name="price"
          placeholder="Enter price"
          style={{ flex: 1 }}
        />

        <AppFormPicker
          items={categories}
          name="category"
          placeholder="category"
          noOfColumns={3}
          pickerItemComponent={CategoryPickerItem}
        />

        <AppFormField
          autoCaptilize="none"
          autoCorrect={false}
          maxLength={255}
          multiline
          name="description"
          numberOfLines={3}
          placeholder="Enter description"
          style={{ flex: 1 }}
        />

        <SubmitButton>Post</SubmitButton>
      </AppForm>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    paddingTop: 50,
  },
});

export default ListingEditScreen;
