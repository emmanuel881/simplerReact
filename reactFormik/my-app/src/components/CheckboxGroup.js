import { ErrorMessage, Field } from "formik";
import React from "react";
import TextError from "./TextError";

function CheckboxGroup(props) {
  const { label, name, options, ...rest } = props;
  return (
    <div className="form-control">
      <label>{label}</label>
      <div className="checkBox">
        <Field name={name} {...rest}>
          {({ field }) => {
            return options.map((option) => (
              <React.Fragment key={option.key}>
                <input
                  type="checkbox"
                  id={option.value}
                  {...field}
                  value={option.value}
                  checked={field.value.includes(option.value)}
                />
                <label htmlFor={option.value}>{option.key}</label>
              </React.Fragment>
            ));
          }}
        </Field>
        <ErrorMessage name={name} component={TextError} />
      </div>
    </div>
  );
}

export default CheckboxGroup;
