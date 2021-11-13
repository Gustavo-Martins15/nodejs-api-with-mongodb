const mongoose = require('mongoose')
const fruit =  new mongoose.Schema({
    name:String,
    family:String,
    vitamin:String
})

module.exports = mongoose.model('fruit', fruit)