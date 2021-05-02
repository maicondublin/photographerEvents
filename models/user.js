const mongoose = require('../db/database')

const userSchema = new mongoose.Schema({
    data_hour: {
        type: Date,
        default: Date.now
    },
    name: {
        type: String
    },
    password: {
        type: String
    },
    token: {
        type: String
    }
})
//create a 'table'in mongo
const user = mongoose.model('user', userSchema)

module.exports = user