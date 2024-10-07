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
    { key: "cat", value: "cat" },
    { key: "dog", value: "dog" },
    { key: "cow", value: "cow" },
    { key: "goat", value: "goat" },
  ];
  const checkboxOptions = [
    { key: "Pizza", value: "pizza" },
    { key: "Bread 2", value: "bread" },
    { key: "Milk", value: "milk" },
    { key: "Pie", value: "pie" },
  ];
  //initial values
  const initialValues = {
    email: "",
    description: "",
    selectOption: "",
    radioOption: "",
    checkboxOption: [],
    birthDate: null,
  };

  // my validation schema
  const validationSchema = Yup.object({
    email: Yup.string().email("Invalid email format").required("Required"),
    description: Yup.string().required("Required"),
    selectOption: Yup.string().required("Required"),
    radioOption: Yup.string().required("Required"),
    checkboxOption: Yup.array().min(2, "select atleast 2").required("Required"),
    birthDate: Yup.date().required("Required").nullable(),
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
          <FormikControl
            control="checkbox"
            label="Pick fav meal(atleast 2)"
            name="checkboxOption"
            options={checkboxOptions}
          />
          <FormikControl control="date" label="pick a date" name="birthDate" />
          <button type="submit">Submit</button>
        </Form>
      )}
    </Formik>
  );
}

export default FormikContainer;
