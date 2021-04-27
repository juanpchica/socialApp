import { useMutation, gql } from "@apollo/client";
import React, { useState } from "react";
import { Button, Form } from "semantic-ui-react";

import { useForm } from "../utils/hooks";

const Login = (props) => {
  const { onChange, onSubmit, values } = useForm(LoginUserCallback, {
    username: "",
    password: "",
  });

  const [errors, setErrors] = useState({});

  const [loginUser, { loading }] = useMutation(LOGIN_USER, {
    update(_, result) {
      console.log(result);
      props.history.push("/");
    },
    onError(err) {
      setErrors(err.graphQLErrors[0].extensions.exception.errors);
    },
    variables: values,
  });

  function LoginUserCallback() {
    loginUser();
  }

  return (
    <div className="form-container">
      <h1>Login</h1>
      <Form onSubmit={onSubmit} noValidate className={loading ? "loading" : ""}>
        <Form.Input
          label="Username"
          placeholder="Username..."
          type="text"
          name="username"
          value={values.username}
          onChange={onChange}
          error={errors.username ? true : false}
        />
        <Form.Input
          label="Password"
          name="password"
          type="password"
          placeholder="Password..."
          value={values.password}
          onChange={onChange}
          error={errors.password ? true : false}
        />
        <Button type="submit">Sign Up</Button>
      </Form>
      {Object.keys(errors).length > 0 && (
        <div className="ui error message">
          <ul className="list">
            {Object.values(errors).map((value) => (
              <li key={value}>{value}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

const LOGIN_USER = gql`
  mutation($username: String!, $password: String!) {
    login(username: $username, password: $password) {
      id
      email
      username
      createdAt
      token
    }
  }
`;

export default Login;
