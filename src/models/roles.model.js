const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const RoleSchema = Schema({
    roleName:{type: String, unique:true},
});

module.exports = mongoose.model('Role', RoleSchema);
