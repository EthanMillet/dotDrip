const mongoose = require('mongoose');

const clothesSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    itemUrl: {
        type: String,
        required: true,
    validate: { 
        validator: value => validator.isURL(value, { protocols: ['http','https','ftp'], require_tld: true, require_protocol: true }),
        message: 'Must be a Valid URL' 
        }
    },
    imageUrl: {
        type: String,
        required: true,
        validate: { 
            validator: value => validator.isURL(value, { protocols: ['http','https','ftp'], require_tld: true, require_protocol: true }),
            message: 'Must be a Valid URL' 
            }
    }
});

const Clothes = mongoose.model('Clothes', clothesSchema);

module.exports = Clothes;
