import React from "react";
import { StyleSheet, Image } from "react-native";
import { Formik } from "formik";
import * as Yup from "yup";

import Screen from "../components/Screen";
import AppTextInput from "../components/AppTextInput";
import AppButton from "../components/AppButton";
import AppText from "../components/AppText";
import AppFormField from "../components/AppFormField";

import { colors } from "../config/colors";

const validationSchema = Yup.object().shape({
  email: Yup.string().required().email().label("Email"),
  password: Yup.string().required().min(4).label("Password"),
});

function LoginScreen(props) {
  return (
    <Screen style={styles.container}>
      <Image source={require("../assets/logo2.gif")} style={styles.logo} />
      <Formik
        initialValues={{ email: "", password: "" }}
        onSubmit={(values) => console.log(values)}
        validationSchema={validationSchema}
      >
        {({ handleSubmit }) => (
          <>
            <AppFormField
              autoCaptilize="none"
              autoCorrect={false}
              icon="email"
              name="email"
              keyboardType="email-address"
              placeholder="Enter email"
              style={styles.input}
            />

            {/* {touched.email && errors.email && (
              <AppText style={{ color: colors.danger }}>{errors.email}</AppText>
            )} */}

            <AppFormField
              autoCaptilize="none"
              autoCorrect={false}
              icon="lock"
              name="password"
              placeholder="Enter password"
              secureTextEntry
              style={styles.input}
            />

            {/* {touched.password && errors.password && (
              <AppText style={{ color: colors.danger }}>
                {errors.password}
              </AppText>
            )} */}

            <AppButton onPress={handleSubmit} style={styles.button}>
              Login
            </AppButton>
          </>
        )}
      </Formik>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    paddingTop: 50,
  },
  logo: {
    width: 200,
    height: 200,
    alignSelf: "center",
  },
  input: {
    flex: 1,
  },
  button: {
    marginTop: 30,
    backgroundColor: colors.secondary,
    alignSelf: "center",
  },
});

export default LoginScreen;
