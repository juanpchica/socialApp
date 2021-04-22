const gql = require("graphql-tag");

module.exports = gql`
  type Post {
    id: ID!
    body: String!
    username: String!
    createdAt: String!
  }
  type Query {
    getPost: [Post]
  }
`;
