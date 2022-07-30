const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const MiembroSchema = Schema({
  numDocument:{type: String},
  fullName:String,
  maritalStatus:String,
  age:Number,
  genere: String,
  email:String,
  occupation:String,
  isBaptized:Boolean,
});

module.exports = mongoose.model('Miembro', MiembroSchema);