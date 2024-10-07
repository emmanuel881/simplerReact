import React from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import FormikControl from "./FormikControl";

function FormikContainer() {
  //my options
  const dropdownOptions = [
    { key: "select an option", value: "" },
    { key: "option 1", value: "1" },
    { key: "option 2", value: "2" },
    { key: "option 3", value: "3" },
    { key: "option 4", value: "4" },
  ];
  //initial values
  const initialValues = {
    email: "",
    description: "",
    selectOption: "",
  };

  // my validation schema
  const validationSchema = Yup.object({
    email: Yup.string().email("Invalid email format").required("Required"),
    description: Yup.string().required("Required"),
    selectOption: Yup.string().required("Required"),
  });

  // onSubmit function
  const onSubmit = (values, onSubmitProps) => {
    onSubmitProps.resetForm();
    console.log("form values: ", values);
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      {/* The function must return a single child */}
      {(formik) => (
        <Form>
          <FormikControl
            control="input"
            type="email"
            label="Email"
            name="email"
          />
          <FormikControl
            control="textarea"
            label="Description"
            name="description"
          />
          <FormikControl
            control="select"
            label="Choose an option"
            options={dropdownOptions}
            name="selectOption"
          />
          <button type="submit">Submit</button>
        </Form>
      )}
    </Formik>
  );
}

export default FormikContainer;
