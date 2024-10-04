import { useFormik } from "formik";
import React from "react";

const initialValues = {
  name: "",
  email: "",
  channel: "",
};
const onSubmit = (values) => {
  console.log("formik values", values);
  // formik.resetForm(); // Reset form after submit
};
const validate = (values) => {
  //this function should return an object
  let errors = {};

  //lets check if any of the inputs are empty
  if (!values.name) {
    errors.name = "Required";
  }

  if (!values.email) {
    errors.email = "Required";
  } else if (
    !/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(values.email)
  ) {
    errors.email = "Enter a valid email";
  }

  if (!values.channel) {
    errors.channel = "Required";
  }

  return errors;
};
const YoutubeForm = () => {
  const formik = useFormik({
    initialValues,
    onSubmit,

    ///formvalidation
    validate,
  });
  console.log("formik Error:  ", formik.errors);
  return (
    <div>
      <form onSubmit={formik.handleSubmit}>
        <div className="form-control">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            onChange={formik.handleChange}
            value={formik.values.name}
          />
          <div className="error">
            {formik.errors.name ? <div>{formik.errors.name}</div> : null}
          </div>
        </div>
        <div className="form-control">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            onChange={formik.handleChange}
            value={formik.values.email}
          />
          <div className="error">
            {formik.errors.email ? <div>{formik.errors.email}</div> : null}
          </div>
        </div>
        <div className="form-control">
          <label htmlFor="channel">Channel</label>
          <input
            type="text"
            id="channel"
            name="channel"
            onChange={formik.handleChange}
            value={formik.values.channel}
          />
          <div className="error">
            {formik.errors.channel ? <div>{formik.errors.channel}</div> : null}
          </div>
        </div>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default YoutubeForm;
