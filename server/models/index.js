const mongoose = require('mongoose');

const clothesSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    brand: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
    imageUrl: {
        type: String,
        required: true,
    },
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },
    collections: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Collection',
        },
    ],
});

const Clothes = mongoose.model('Clothes', clothesSchema);

module.exports = Clothes;