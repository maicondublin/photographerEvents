const express = require('express')
const bodyParcer = require('body-parser')
// const bodyParser = require('body-parser')
const events = require('./routes/events')
const app = express()

app.use(bodyParcer.json())
app.use(bodyParser.urlencoded({extended:false}))
app.use(events)

app.listen(3001, function(){
    console.log('Listining to the port 3001!')
})


module.exports = app