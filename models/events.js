const mongoose = require('../db/database')

const eventsSchema = new mongoose.Schema({
    date_hour: {
        type: Date,
        default: Date.now
    },
    address: {
        type: String
    },
    client_name: {
        type: String
    },
    client_phone: {
        type: String
    },
    description: {
        type: String
    }
})

const events = mongoose.model('eventsSchema')

module.exports = events
