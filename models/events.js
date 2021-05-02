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
    client_email: {
        type: String
    },
    description: {
        type: String
    }
})
// create a 'table' on mongo 
const events = mongoose.model('events', eventsSchema)

module.exports = events
