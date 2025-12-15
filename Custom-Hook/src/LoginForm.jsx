import React from "react";
import useForm from "./hooks/useForm";

function LoginForm() {
  
  const initialValues = {
    email: "",
    password:""
  }  

  const onSubmit = (values) => {
    console.log("Form Submitted", values);
  }

  const { values, handleChange, handleSubmit, resetForm } = useForm(initialValues, onSubmit);
  return (
  <div>
    <form onSubmit={handleSubmit}>
        <h1>Login</h1>
        <input type="email" name="email" placeholder="Enter Email" value={values.email} onChange={handleChange} />
        <br />
        <br />
        <input type="password" name="password" placeholder="Enter password" value={values.password} onChange={handleChange} />
        <br />
        <br />
        <button type="submit">Submit</button>
        <button onClick={resetForm}>Reset</button>
    </form>
  </div>
);
}

export default LoginForm;
