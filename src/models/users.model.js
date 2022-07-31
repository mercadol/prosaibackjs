const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = Schema({
    email:{type: String, unique:true},
    password:String,
    role: String
});

module.exports = mongoose.model('User', UserSchema);
