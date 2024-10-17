import { Form, Formik } from "formik";
import React from "react";
import * as Yup from "yup";
import FormikControl from "./FormikControl";

function Test() {
  const options = [
    { key: "Email", value: "email" },
    { key: "Phone", value: "phone" },
  ];

  const initialValues = {
    phone: "", // Initialize with null for consistency with .nullable()
    modeOfContact: "",
  };

  const validationSchema = Yup.object({
    modeOfContact: Yup.string().required("Required"),
    // phone: Yup.string().when("modeOfContact", {
    //   is: "phone", // Ensure this matches your form data exactly
    //   then: Yup.string().required("Phone number is required"),
    // }),
    phone: Yup.string().when("modeOfContact", {
      is: "phone",
      then: Yup.string().required("Phone required"),
    }),
  });

  const onSubmit = (values) => {
    console.log(
      "Formik values: ",
      typeof values.modeOfContact,
      values.modeOfContact
    ); // Log formik values to see the actual submission data
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
      validationSchema={validationSchema}
    >
      {(formik) => {
        return (
          <Form>
            <FormikControl
              control="radio"
              name="modeOfContact"
              options={options}
            />
            <FormikControl
              control="input"
              label="Phone Number"
              name="phone"
              type="text"
            />
            <button type="submit">Submit</button>
          </Form>
        );
      }}
    </Formik>
  );
}

export default Test;
