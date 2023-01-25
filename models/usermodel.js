const mongoose = require("mongoose");
const UserSchema = new mongoose.Schema({
    name: {
        type: String,
    },
    email: {
        type: String,
    },
    password: {
        type: String,
    },
});
const collectionName = 'users'
module.exports = mongoose.model('users', UserSchema, collectionName);