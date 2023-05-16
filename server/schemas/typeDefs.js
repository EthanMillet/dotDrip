const { gql } = require('apollo-server-express');

const typeDefs = gql`
    type Query

    type User {
        _id: ID
        name: String!
    }
`

module.exports = typeDefs;