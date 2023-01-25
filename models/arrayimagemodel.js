
const mongoose = require("mongoose");
const UserSchema = new mongoose.Schema({
    // Image: {ca
    //     data: Buffer,
    //     type: Object,
    // },
    Name: {
        type: String,
    },
    Image: [{
        name: String,
        data: Buffer,
        type: Object,
    }]
});
const collectionName = 'imge'
module.exports = mongoose.model('image', UserSchema, collectionName);