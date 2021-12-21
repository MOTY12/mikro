const mongoose = require('mongoose')

const contactSchema = new mongoose.Schema({
    fullName: {
        type: String
    },
    email: {
        type: String
    },
    phonenumber: {
        type: String,
        unique: true
    },
    datecreated: {
        type: Date,
        default: Date.now,
    }
})

module.exports = mongoose.model('Contact', contactSchema)