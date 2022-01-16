import React from "react";
import { useFormikContext } from "formik";

import ImageInputList from "../ImageInputList";
import ErrorHandler from "./ErrorHandler";

function FormImagePicker({ name }) {
  const { values, touched, errors, setFieldValue } = useFormikContext();

  const handleAdd = (uri) => {
    setFieldValue(name, [...values[name], uri]);
  };

  const handleRemove = (uri) => {
    setFieldValue(
      name,
      values[name].filter((Uri) => Uri !== uri)
    );
  };

  return (
    <>
      <ImageInputList
        imageUris={values[name]}
        onRemoveImage={handleRemove}
        onAddImage={handleAdd}
      />
      <ErrorHandler error={errors[name]} visible={touched[name]}>
        {errors[name]}
      </ErrorHandler>
    </>
  );
}

export default FormImagePicker;
