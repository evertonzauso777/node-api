const mongoose = require('mongoose');

const dataSchema = new mongoose.Schema({
    name: {
        required: true,
        type: String
    },
    email: {
        required: true,
        type: String
    }
}, {
    collection: 'users', versionKey: false
})

module.exports = mongoose.model('Data', dataSchema)