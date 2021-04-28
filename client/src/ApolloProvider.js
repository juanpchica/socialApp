import React from "react";
import App from "./App";
import { ApolloClient, InMemoryCache, createHttpLink } from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import { ApolloProvider } from "@apollo/client/react";

const httpLink = createHttpLink({
  uri: "http://localhost:5000",
});

const authLink = setContext((request, previousContext) => {
  const token = localStorage.getItem("jwtToken");
  return {
    headers: {
      Authorization: token ? `Bearer ${token}` : "",
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});
const ApolloProvide = () => {
  return (
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  );
};

export default ApolloProvide;
