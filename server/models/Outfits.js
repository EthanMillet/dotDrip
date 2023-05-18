const mongoose = require('mongoose');

const { Schema } = mongoose;
const Clothes = require('./Clothes');

const outfitSchema = new Schema({
  item1: {
    clothes: {type: Schema.Types.ObjectId, ref: 'Clothes'},    
    required: true,
  },
  item2: {
    clothes: {type: Schema.Types.ObjectId, ref: 'Clothes'},    
    required: true,
  },
  item3: {
    clothes: {type: Schema.Types.ObjectId, ref: 'Clothes'},
    required: true,
  },
  item4: {
   clothes: {type: Schema.Types.ObjectId, ref: 'Clothes'}, 
  },
  item5: {
    clothes: {type: Schema.Types.ObjectId, ref: 'Clothes'},
  },
  item6: {
    clothes: {type: Schema.Types.ObjectId, ref: 'Clothes'},
  },
  item7: {
    clothes: {type: Schema.Types.ObjectId, ref: 'Clothes'},
  },
});

const Outfit = mongoose.model('Outfit', outfitSchema);

module.exports = Outfit;