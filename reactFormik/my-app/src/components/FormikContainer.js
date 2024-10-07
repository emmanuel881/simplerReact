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

  const radioOptions = [
    { key: "option 1", value: "cat" },
    { key: "option 2", value: "dog" },
    { key: "option 3", value: "cow" },
    { key: "option 4", value: "goat" },
  ];
  //initial values
  const initialValues = {
    email: "",
    description: "",
    selectOption: "",
    radioOption: "",
  };

  // my validation schema
  const validationSchema = Yup.object({
    email: Yup.string().email("Invalid email format").required("Required"),
    description: Yup.string().required("Required"),
    selectOption: Yup.string().required("Required"),
    radioOption: Yup.string().required("Required"),
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

          <FormikControl
            control="radio"
            label="Choose animal"
            name="radioOption"
            options={radioOptions}
          />
          <button type="submit">Submit</button>
        </Form>
      )}
    </Formik>
  );
}

export default FormikContainer;
