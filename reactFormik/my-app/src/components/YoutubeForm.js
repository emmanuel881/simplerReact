import { Formik, Form, Field, ErrorMessage } from "formik";
import React from "react";
import * as Yup from "yup";

//create yup schema
const validationSchema = Yup.object({
  name: Yup.string().required("field required"),
  email: Yup.string().email("Invalid email format").required("Required"),
  channel: Yup.string().required("field required"),
});

const initialValues = {
  name: "",
  email: "",
  channel: "",
};
const onSubmit = (values) => {
  console.log("formik values", values);
  // formik.resetForm(); // Reset form after submit
};

const YoutubeForm = () => {
  //console.log("formik Error:  ", formik.errors);
  //console.log("Visited fields: ", formik.touched); //touched stores the visited links
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
      validationSchema={validationSchema}
    >
      <Form>
        <div className="form-control">
          <label htmlFor="name">Name</label>
          <Field type="text" id="name" name="name" />
          <div className="error">
            <ErrorMessage name="name" />
          </div>
        </div>
        <div className="form-control">
          <label htmlFor="email">Email</label>
          <Field type="email" id="email" name="email" />
          <div className="error">
            <ErrorMessage name="email" />
          </div>
        </div>
        <div className="form-control">
          <label htmlFor="channel">Channel</label>
          <Field type="text" id="channel" name="channel" />
          <div className="error">
            <ErrorMessage name="channel" />
          </div>
        </div>

        <button type="submit">Submit</button>
      </Form>
    </Formik>
  );
};

export default YoutubeForm;
