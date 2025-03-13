const mongoose = require('mongoose');

mongoose.connect(`mongodb://localhost:27017/userdb`);

const userSchema =mongoose.Schema({
    name : String,
    age : Number ,
    email : String
})

module.exports = mongoose.model('user' , userSchema );