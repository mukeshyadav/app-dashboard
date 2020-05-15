import { gql } from 'apollo-server-express';

export default gql`
  extend type Query {
    cars: [Car]
    car(id: Int!): Car
    type(type: String!, val: String!): [Car]
  }

  extend type Mutation {
    createCar(make: String!, model: String!, color: String!): Car
    removeCar(id: Int!): Boolean
  }

  type Car {
    id: ID!
    make: String!
    model: String!
    color: String!
    owner: User!
  }
`;
