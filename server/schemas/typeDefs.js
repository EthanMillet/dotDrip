const { gql } = require('apollo-server-express');

const typeDefs = gql`
    type Query

    type Mutation

    type User {
        _id: ID!
        username: String!
        email: String!
        clothes: [Clothes!]!
        outfits: [Outfit!]!
      }
      
      type Clothes {
        _id: ID!
        name: String!
        itemUrl: String!
        imageUrl: String!
      }
      
      type Outfit {
        _id: ID!
        item1: Clothes!
        item2: Clothes!
        item3: Clothes!
        item4: Clothes
        item5: Clothes
        item6: Clothes
        item7: Clothes
      }
`

module.exports = typeDefs;