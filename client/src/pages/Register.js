import React, { useState } from "react";
import { Button, Form } from "semantic-ui-react";
const Register = () => {
  const [values, setValues] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const onChange = (event) => {
    setValues({ ...values, [event.target.name]: event.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    console.log(values);
  };

  return (
    <Form onSubmit={onSubmit}>
      <Form.Input
        label="Username"
        placeholder="Username..."
        name="username"
        value={values.username}
        onChange={onChange}
      />
      <Form.Input
        label="Email"
        name="email"
        placeholder="Email..."
        value={values.email}
        onChange={onChange}
      />
      <Form.Input
        label="Password"
        name="password"
        placeholder="Password..."
        value={values.password}
        onChange={onChange}
      />
      <Form.Input
        label="Confirm Password"
        name="confirmPassword"
        placeholder="Confirm Password..."
        value={values.confirmPassword}
        onChange={onChange}
      />
      <Button type="submit">Sign Up</Button>
    </Form>
  );
};

export default Register;
