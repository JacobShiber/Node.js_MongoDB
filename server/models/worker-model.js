const mongoose = require('mongoose');

const Worker = new mongoose.Schema({
    firstName : String,
    lastName : {type: String, required : true},
    age: Number
}, {timestamps : true});

module.exports = mongoose.model('Worker', Worker);