const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const EscuelaSchema = Schema({
    nombre: String,
    fechaInicio: Date,
    fechaFin: Date,
    idmaestro: String
});

module.exports = mongoose.model('Escuela', EscuelaSchema);
