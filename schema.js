import { gql } from "apollo-server"
//schema - blueprint of the data types and relationships between them
const typeDefs = gql`
type Query {
  users: [UserType]
  user(id: ID!): UserType
  quots: [QuotType]
  quotsByUser(by: ID!): [QuotType]
  }
type UserType {
        id: ID
        name: String
        email: String
        quots: [QuotType]
        }
type QuotType {
        name: String
        by: String
        }

type Mutation {
    addUser(newUser:UserInput!): UserType
}

input UserInput {
    name: String!
    email: String!
}
  `
export default typeDefs

