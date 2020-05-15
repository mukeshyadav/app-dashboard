import { gql } from 'apollo-server-express';

export default gql`
  extend type Query {
    users: [User]
    me: User
    user(id: Int!): User
  }

  extend type Mutation {
    makeUser(name: String!): User
    removeUser(id: Int!): Boolean
  }

  type User {
    id: ID!
    name: String!
    car: [Car]
  }
`;
