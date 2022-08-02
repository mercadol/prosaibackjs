const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const GrupoSchema = Schema({
    nombre:String,
    idLider:String
});

module.exports = mongoose.model('Grupo', GrupoSchema);
