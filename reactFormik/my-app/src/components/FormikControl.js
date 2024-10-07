//task is to know which form fields have to be rendered  based on a particular prop
import React from "react";
import Input from "./Input";

function FormikControl(props) {
  const { control, ...rest } = props;
  switch (control) {
    case "input":
      return <Input {...rest} />;
    case "textarea":
    case "select":
    case "radio":
    case "date":
    default:
      return null;
  }
}

export default FormikControl;
