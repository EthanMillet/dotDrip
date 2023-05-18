const mongoose = require('mongoose');

const { Schema } = mongoose;
const Clothes = require('./Clothes');

const outfitSchema = new Schema({
  item1: {type: Schema.Types.ObjectId, ref: 'Clothes'},    
  item2: {type: Schema.Types.ObjectId, ref: 'Clothes'}, 
  item3: {type: Schema.Types.ObjectId, ref: 'Clothes'},
  item4: {type: Schema.Types.ObjectId, ref: 'Clothes'},
  item5: {type: Schema.Types.ObjectId, ref: 'Clothes'},  
  item6: {type: Schema.Types.ObjectId, ref: 'Clothes'},
  item7: {type: Schema.Types.ObjectId, ref: 'Clothes'},
});

const Outfit = mongoose.model('Outfit', outfitSchema);

module.exports = Outfit;