const { AuthenticationError } = require('apollo-server-express');
const { User, Outfits, Clothes } = require('../models')
const { signToken } = require('../utils/auth');
const stripe = require('stripe')('sk_test_4eC39HqLyjWDarjtT1zdp7dc');


const resolvers = {
  Query: {
    // Query resolvers here 
    user: async (parent, args, context) => {
      if (context.user) {
        const user = await User.findById(context.user._id);
        return user;
      }
      throw new AuthenticationError('Not logged in');
    },

    outfit: async (parent, { _id }, context) => {
      return await Outfits.findById(_id);
    },
    outfits: async () => {
      return await Outfits.find();
    },
    clothes: async (parent, args, context) => {
      if (context.user) {
      const userClothes = await User.findById(context.user._id);
      return userClothes.clothes;
      }
      throw new AuthenticationError('Not logged in');
    }
  },
  Mutation: {
    // Mutation resolvers here 
    addUser: async (parent, args, context) => {
      const user = await User.create(args);
      const token = signToken(user);
      return { token, user };
    },
    addOutfit: async (parent, args, context) => {
      console.log(context);
      if (context.user) {
        const outfit = Outfits.create(args);
        await User.findByIdAndUpdate(context.user._id, { $push: { outifts: outfit } })
        return outfit;
      }
      throw new AuthenticationError('Not logged in');
    },
    addClothes: async (parent, args, context) => {
      console.log(context);
      if (context.user) {
        const clothing = await Clothes.create(args);
        await User.findByIdAndUpdate(context.user._id, { $push: { clothes: clothing } })
        return clothing;
      }

      throw new AuthenticationError('Not logged in');
    },
    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });

      if (!user) {
        throw new AuthenticationError('Incorrect credentials');
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError('Incorrect credentials');
      }

      const token = signToken(user);

      return { token, user };
    },
    deleteOutfit: async (parent, { _id }, context) => {
      if (context.user) {
        await Outfits.findOneAndDelete({ _id, userId: context.user._id });
        await User.findByIdAndUpdate(context.user._id, { $pull: { outfits: _id } });
        return _id;
      }
      throw new AuthenticationError('Not logged in');
    },
    deleteClothes: async (parent, { _id }, context) => {
      if (context.user) {
        await Clothes.findOneAndDelete({ _id, userId: context.user._id });
        await User.findByIdAndUpdate(context.user._id, { $pull: { clothes: _id } });
        return _id;
      }
      throw new AuthenticationError('Not logged in');
    },
  },
};



module.exports = resolvers;