const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const MiembroSchema = Schema({
  numDocument:{type: String, unique:true},
  fullName:String,
  maritalStatus:String,
  age:Number,
  genere: String,
  email:{type: String, unique:true},
  occupation:String,
  isBaptized:Boolean,
});

module.exports = mongoose.model('Miembro', MiembroSchema);