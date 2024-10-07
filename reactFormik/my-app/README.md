### managing forms in react

## useFormik

we first need to install formik using this command

`npm install formik`

useFormik takes an object as its parameter and returns an
object with different properties that can be used manage forms

this properties would hel us to

- manage form state
- handling form submition
- validation and error messeges

# here is an example

```js
const formik = useFormik({
  initialValues: {
    name: "",
    email: "",
    channel: "",
  },
});
```

the initialValues properties should match the name property in the form field

```jsx
<div>
  <form>
    <label htmlFor="">Name</label>
    <input
      type="text"
      id="name"
      name="name"
      onChange={formik.handleChange}
      value={formik.values.name}
    />
    <label htmlFor="">Email</label>
    <input
      type="email"
      id="email"
      name="email"
      onChange={formik.handleChange}
      value={formik.values.email}
    />
    <label htmlFor="">Channel</label>
    <input
      type="text"
      id="channel"
      name="channel"
      onChange={formik.handleChange}
      value={formik.values.channel}
    />

    <button>Submit</button>
  </form>
</div>
```

## Yup

install usning the command

`npm install yup`

we start by createing a validation schema

```js
const validationSchema = Yup.object({
  name: Yup.string().required("field required"),
  email: Yup.string().email("Invalid email format").required("Required"),
  channel: Yup.string().required("field required"),
});
```

we create an object that contains rules for each form field

## using boilerplate

in a case like this

```jsx
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

```

we see that this parts are repeating for iput fields

```jsx
onChange={formik.handleChange}
value={formik.values.channel}
onBlur={formik.handleBlur}
```

we can shorten this ,

```jsx
<div className="form-control">
  <label htmlFor="email">Email</label>
  <input
    type="email"
    id="email"
    name="email"
    {...formik.getFieldProps("email")}
  />
  <div className="error">
    {formik.touched.email && formik.errors.email ? (
      <div>{formik.errors.email}</div>
    ) : null}
  </div>
</div>
```

## Formik Components

they include

- Formik
- Form
- Field
- ErrorMessage

# Formik

steps include

- import Formik

`js import { Formik } from "formik";`

- wrap the form with Formik tags
- pass in the initialValues, validationSchema and onSubmit to the Formik
-

# Form

import Form

`js import { Form } from "formik"; `

replace the form tag with Form

delete the onSubmit event handler

Form automatically ties or form to Formlik

# Field

import Field

`js import {Field} from "formik";`

replace all input tags with Field

next get rid of all the field props helper method from each field

`js {...formik.getFieldProps("email")}`

Fields hook up inputs to the top level component

it use name attribute to match-up form state

## Handling errors

# ErrorMessage

we first neet to import it

## FieldArray component

help create dynamic forms

## FastField component

its an optimized version of Field

## validation

validate runs onBlur, onChange and submit actions occur

we can add this properties to the Formik element if

```js
<Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
      validationSchema={validationSchema}
      validateOnChange={false}
      validateOnBlur={false}
    >

```

in this case `js validateOnChange={false}` disable on validation when keying in values

in this case `js validateOnBlur={false}` disable it when user unclick a container
