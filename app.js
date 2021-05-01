const express = require('express')
const bodyParcer = require('body-parser')
const bodyParser = require('body-parser')
const app = express()

app.use(bodyParcer.json())
app.use(bodyParser.urlencoded({extended:false}))

app.listen(3001, function(){
    console.log('Listining to the port 3001!')
})


module.exports = app