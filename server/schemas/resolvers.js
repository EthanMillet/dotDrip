const { AuthenticationError } = require('apollo-server-express');
const { User, Outfits, Clothes } = require('../models')
const { signToken } = require('../utils/auth');
const stripe = require('stripe')('sk_test_4eC39HqLyjWDarjtT1zdp7dc');


const resolvers = {
    Query: {
      // Query resolvers here 
    },
    Mutation: {
      // Mutation resolvers here 
    },
  };
  


module.exports = resolvers;