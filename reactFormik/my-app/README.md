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
