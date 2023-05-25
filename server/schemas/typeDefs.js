const { gql } = require('apollo-server-express');

const typeDefs = gql`
    type User {
        _id: ID
        username: String
        email: String
        clothes: [Clothes]
        outfits: [Outfits]
      }
      
      type Clothes {
        _id: ID
        name: String
        itemUrl: String
        imageUrl: String
      }
      
      type Outfits {
        _id: ID
        name: String
        item1: Clothes
        item2: Clothes
        item3: Clothes
        item4: Clothes
        item5: Clothes
        item6: Clothes
        item7: Clothes
      }   
      
      type Auth {
        token: ID
        user: User
      }

      type Query {
        user: User
        outfit(_id: ID!): Outfits
        outfits: [Outfits]
        clothes: [Clothes] 
    }

    type Mutation {
        addUser(username: String!, email: String!, password: String!): Auth
        addOutfit(name: String!, item1: ID!, item2: ID!, item3: ID!, item4: ID, item5: ID, item6: ID, item7: ID): Outfits
        deleteOutfit(id: ID!): Outfits
        addClothes(name: String!, itemUrl: String!, imageUrl: String!): Clothes
        deleteClothes(id: ID!): Clothes
        login(email: String!, password: String!): Auth
    }
`

module.exports = typeDefs;