import { ApolloServer, gql } from "apollo-server"
// import { buildFederatedSchema } from "@apollo/federation"
// import { typeDefs } from "./typeDefs"
import resolvers from "./resolvers.js"
import typeDefs from "./schema.js"
import { ApolloServerPluginLandingPageGraphQLPlayground } from "apollo-server-core"

import { MongoClient } from 'mongodb'
import mongoose from "mongoose"
import mongourl from "./config.js"


// ************ moved to different file schema.js ************
// //schema - blueprint of the data types and relationships between them
// const typeDefs = gql`
//   type Query {
//   users: [UserType]
//   user(id: ID!): UserType
//   quots: [QuotType]
//   quotsByUser(by: ID!): [QuotType]
//   }
//   type UserType {
//         id: ID
//         name: String
//         email: String
//         quots: [QuotType]
//         }
//     type QuotType {
//         name: String
//         by: String
//         }
//   `


// ************ moved to different file resolvers.js ************
// //resolver - function that returns the data for the query brain of the operation
// const resolvers = {
//     Query: {
//         users: () => users,
//         user: (parent, args) => users.find(user => user.id === args.id),
//         quots: () => quots,
//         quotsByUser: (parent, args) => quots.filter(quot => quot.by === args.by)
//     },
//     UserType: {
//         quots(parent) {
//             return quots.filter(quot => quot.by === parent.id)
//         }
//     }
// }
// mongodb+srv://jugnujob:12345@cluster0.8ucde.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0
const server = new ApolloServer({
    typeDefs,
    resolvers,
    plugins: [ApolloServerPluginLandingPageGraphQLPlayground()]
});

server.listen().then(({ url }) => {
    console.log(`Server ready at ${url}`);
})
