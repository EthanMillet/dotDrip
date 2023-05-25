const mongoose = require('mongoose');

const { Schema } = mongoose;

const outfitSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  item1: {type: Schema.Types.ObjectId, ref: 'Clothes'},    
  item2: {type: Schema.Types.ObjectId, ref: 'Clothes'}, 
  item3: {type: Schema.Types.ObjectId, ref: 'Clothes'},
  item4: {type: Schema.Types.ObjectId, ref: 'Clothes'},
  item5: {type: Schema.Types.ObjectId, ref: 'Clothes'},  
  item6: {type: Schema.Types.ObjectId, ref: 'Clothes'},
  item7: {type: Schema.Types.ObjectId, ref: 'Clothes'},
});

const Outfits = mongoose.model('Outfits', outfitSchema);

module.exports = Outfits;