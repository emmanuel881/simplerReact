import { useFormik } from "formik";
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

//validate input
// const validate = (values) => {
//   //this function should return an object
//   let errors = {};

//   //lets check if any of the inputs are empty
//   if (!values.name) {
//     errors.name = "name required";
//   }

//   if (!values.email) {
//     errors.email = "email required";
//   } else if (
//     !/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(values.email)
//   ) {
//     errors.email = "Enter a valid email";
//   }

//   if (!values.channel) {
//     errors.channel = "channel title required";
//   }

//   return errors;
// };
const OldYoutubeForm = () => {
  const formik = useFormik({
    initialValues,
    onSubmit,

    ///formvalidation
    //validateSch,
    validationSchema,
  });
  //console.log("formik Error:  ", formik.errors);
  console.log("Visited fields: ", formik.touched); //touched stores the visited links
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
            onBlur={formik.handleBlur} //keep track of active fields
          />
          <div className="error">
            {formik.touched.name && formik.errors.name ? (
              <div>{formik.errors.name}</div>
            ) : null}
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
            onBlur={formik.handleBlur}
          />
          <div className="error">
            {formik.touched.email && formik.errors.email ? (
              <div>{formik.errors.email}</div>
            ) : null}
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
            onBlur={formik.handleBlur}
          />
          <div className="error">
            {formik.touched.channel && formik.errors.channel ? (
              <div>{formik.errors.channel}</div>
            ) : null}
          </div>
        </div>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default OldYoutubeForm;
