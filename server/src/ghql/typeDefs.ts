import { gql } from "apollo-server-express";


export const typeDefs = gql`
  type Invoice{
    id: ID!
    details: String!
    item: String!
    quantity: Int!
    price: Int!
   
  }
  
  type Query {
    invoice: [Invoice!]!
  }
  
  type Mutation{
      deleteListing(id:ID!):Invoice!
   }

`