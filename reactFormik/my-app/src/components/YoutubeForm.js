import { Formik, Form, Field, ErrorMessage } from "formik";
import React from "react";
import * as Yup from "yup";
import TextError from "./TextError";

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
  comments: "",
  address: "",
  socials: {
    facebook: "",
    X: "",
  },
  phoneNumber: ["", ""],
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
            <ErrorMessage name="name" component={TextError} />
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
        <div className="form-control">
          <label htmlFor="comments">Tell us something</label>
          {/* the as prop enable us to select type of box by default it input */}
          <Field as="textarea" id="comments" name="comments" />
        </div>

        {/* using render props */}
        <div className="form-control">
          <label htmlFor="address">Address</label>
          <Field name="address">
            {(props) => {
              const { field, meta } = props;
              return (
                <div>
                  <input id="address" type="text" {...field} />
                  {meta.touched && meta.error ? <div>{meta.error}</div> : null}
                </div>
              );
            }}
          </Field>
        </div>

        <div className="form-control">
          <label htmlFor="facebook">Facebook</label>
          <Field
            type="text"
            id="facebook"
            name="socials.facebook"
            placeholder="paste link"
          />
        </div>

        <div className="form-control">
          <label htmlFor="X">X</label>
          <Field type="text" id="X" name="socials.X" placeholder="paste link" />
        </div>

        <div className="form-control">
          <label htmlFor="primaryNumber">Primary phone Number</label>
          <Field type="text" id="primaryNumber" name="phoneNumber[0]" />
        </div>

        <div className="form-control">
          <label htmlFor="SecondaryNumber">Secondary phone Number</label>
          <Field type="text" id="SecondaryNumber" name="phoneNumber[1]" />
        </div>

        <button type="submit">Submit</button>
      </Form>
    </Formik>
  );
};

export default YoutubeForm;
