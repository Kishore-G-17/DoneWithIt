import React from "react";
import { useFormikContext } from "formik";

import AppPicker from "../AppPicker";
import ErrorHandler from "./ErrorHandler";

function AppFormPicker({
  items,
  name,
  placeholder,
  noOfColumns,
  pickerItemComponent,
}) {
  const { errors, setFieldValue, values, touched } = useFormikContext();
  return (
    <>
      <AppPicker
        items={items}
        selectedItem={values[name]}
        onSelectItem={(item) => setFieldValue(name, item)}
        placeholder={placeholder}
        noOfColumns={noOfColumns}
        PickerItemComponent={pickerItemComponent}
      />
      <ErrorHandler error={errors[name]} visible={touched[name]}>
        {errors[name]}
      </ErrorHandler>
    </>
  );
}

export default AppFormPicker;
