import { useMutation, gql } from "@apollo/client";
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

  const [addUser, { loading }] = useMutation(REGISTER_USER, {
    update(_, result) {
      console.log(result);
    },
    variables: values,
  });

  const onSubmit = (e) => {
    e.preventDefault();
    addUser();
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

const REGISTER_USER = gql`
  mutation(
    $username: String!
    $email: String!
    $password: String!
    $confirmPassword: String!
  ) {
    register(
      registerInput: {
        username: $username
        email: $email
        password: $password
        confirmPassword: $confirmPassword
      }
    ) {
      id
      email
      username
      createdAt
      token
    }
  }
`;

export default Register;
