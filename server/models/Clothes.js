const mongoose = require('mongoose');

const clothesSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    itemUrl: {
        type: String,
    },
    imageUrl: {
        type: String,


    }
});

const Clothes = mongoose.model('Clothes', clothesSchema);

module.exports = Clothes;
