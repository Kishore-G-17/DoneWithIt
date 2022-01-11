import React from "react";
import { useFormikContext } from "formik";

import AppTextInput from "../AppTextInput";
import ErrorHandler from "./ErrorHandler";

function AppFormField({ name, ...otherProps }) {
  const { handleChange, setFieldTouched, touched, errors } = useFormikContext();
  return (
    <>
      <AppTextInput
        onBlur={() => setFieldTouched(name)}
        onChangeText={handleChange(name)}
        {...otherProps}
      />
      <ErrorHandler comp={name} error={errors[name]} visible={touched[name]}>
        {errors[name]}
      </ErrorHandler>
    </>
  );
}

export default AppFormField;
