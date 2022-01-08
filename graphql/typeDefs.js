const gql = require("graphql-tag");

module.exports = gql`
  type Post {
    id: ID!
    body: String!
    createdAt: String!
    userName: String!
  }
  type User {
    id: ID!
    email: String!
    userName: String!
    createdAt: String!
    token: String!
  }
  input RegisterInput {
    userName: String!
    email: String!
    password: String!
    confirmPassword: String!
  }
  type Query {
    getPosts: [Post]
    getPost(postId: ID!): Post
  }
  type Mutation {
    register(registerInput: RegisterInput): User!
    login(userName: String!, password: String!): User!
    createPost(body: String!): Post!
    deletePost(postId: ID!): String!
  }
`;
