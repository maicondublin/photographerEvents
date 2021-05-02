const events = require('../models/events')

const insert = async function( data ) {
    return await events.create( data )
}



module.exports = {
    insert

}