const mongoose = require('mongoose');

const area = new mongoose.Schema({
    area: String,
    caption: String
})

mongoose.model('area', area);