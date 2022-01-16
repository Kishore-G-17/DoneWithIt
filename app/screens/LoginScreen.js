import React from "react";
import { StyleSheet, Image } from "react-native";
import * as Yup from "yup";

import { colors } from "../config/colors";
import Screen from "../components/Screen";
import { AppForm, AppFormField, SubmitButton } from "../components/forms";

const validationSchema = Yup.object().shape({
  email: Yup.string().required().email().label("Email"),
  password: Yup.string().required().min(4).label("Password"),
});

function LoginScreen(props) {
  return (
    <Screen style={styles.container}>
      <Image source={require("../assets/logo2.gif")} style={styles.logo} />

      <AppForm
        initialValues={{ email: "", password: "" }}
        onSubmit={(values) => console.log(values)}
        validationSchema={validationSchema}
      >
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

        <SubmitButton>Login</SubmitButton>
      </AppForm>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    paddingTop: 50,
    backgroundColor: colors.white,
  },
  logo: {
    width: 200,
    height: 200,
    alignSelf: "center",
  },
  input: {
    flex: 1,
  },
});

export default LoginScreen;
