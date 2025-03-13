const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/yourDatabase')
.then(() => console.log('Connected to MongoDB!'))
.catch(err => console.error('Connection error:', err));

const userSchema = mongoose.Schema({
    imgurl : String,
    username : String,
    email : String
})

module.exports = mongoose.model('user' , userSchema );