import React from "react";
import { StyleSheet } from "react-native";
import { useFormikContext } from "formik";

import AppButton from "../AppButton";
import { colors } from "../../config/colors";

function SubmitButton({ children }) {
  const { handleSubmit } = useFormikContext();
  return (
    <AppButton onPress={handleSubmit} style={styles.button}>
      {children}
    </AppButton>
  );
}

const styles = StyleSheet.create({
  button: {
    marginTop: 30,
    backgroundColor: colors.loginBkColor,
    alignSelf: "center",
  },
});

export default SubmitButton;
