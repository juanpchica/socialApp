import React, { useState } from "react";
import { Form } from "semantic-ui-react";
const Register = () => {
  const [values, setValues] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const onChange = (event) => {
    setValues({ ...values, [event.target.name]: [event.target.value] });
  };

  return (
    <Form>
      <Form.Input
        label="Username"
        placeholder="Username..."
        name="username"
        type="text"
        value={values.name}
        onChange={onChange}
      />
      <Form.Input
        label="Email"
        type="email"
        name="email"
        placeholder="Email..."
        value={values.email}
        onChange={onChange}
      />
      <Form.Input
        label="Password"
        type="password"
        name="password"
        placeholder="Password..."
        value={values.password}
        onChange={onChange}
      />
      <Form.Input
        label="Confirm Password"
        type="password"
        name="confirmpassword"
        placeholder="Confirm Password..."
        value={values.name}
        onChange={onChange}
      />
    </Form>
  );
};

export default Register;
