
const mongoose = require("mongoose");
const UserSchema = new mongoose.Schema({
    Image: {
        data: Buffer,
        type: Object,
    },
    // Name:{           
    // type:String, 
    // }
    Image: [{
        data: Buffer,
        type: Object,
    }]
});
const collectionName = 'imge'
module.exports = mongoose.model('imge', UserSchema, collectionName);