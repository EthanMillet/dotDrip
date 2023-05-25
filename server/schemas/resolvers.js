const { AuthenticationError } = require('apollo-server-express');
const { User, Outfits, Clothes } = require('../models')
const { signToken } = require('../utils/auth');
const stripe = require('stripe')('sk_test_4eC39HqLyjWDarjtT1zdp7dc');


const resolvers = {
  Query: {
    // Query resolvers here 
    user: async (parent, args, context) => {
      if (context.user) {
        const user = await User.findOne({_id: context.user._id}).populate(
        [{ path: 'clothes', strictPopulate: false }, 
        { path: 'outfits', 
        populate: {path: 'item1'},
        populate: {path: 'item2'},
        populate: {path: 'item3'},
        populate: {path: 'item4'},
        populate: {path: 'item5'},
        populate: {path: 'item6'},
        populate: {path: 'item7'},
        strictPopulate: false }])

        console.log(user)
        return user;
      }
      throw new AuthenticationError('Not logged in');
    },

    outfit: async (parent, { _id }) => {
      return await Outfits.findById(_id);
    },
    outfits: async () => {
      const outfits = await Outfits.find()
      .populate('item1')
      .populate('item2')
      .populate('item3')
      .populate('item4')
      .populate('item5')
      .populate('item6')
      .populate('item7')

      
      return outfits
    },
    clothes: async (parent, { _id }) => {
      return await Clothes.find();
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
      if (context.user) {
        const outfit = await Outfits.create(args);
        console.log(outfit.id)
        
        const user = await User.findOneAndUpdate(
          {_id: context.user._id}, 
          {$push: { outfits: outfit.id }})
        console.log(user.outfits)
          return { outfit, user };
      }
      throw new AuthenticationError('Not logged in');
    },
    addClothes: async (parent, args, context) => {
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