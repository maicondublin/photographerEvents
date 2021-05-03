require('dotenv').config()
const express = require('express')
// const bodyParcer = require('body-parcer')
 const bodyParcer = require('body-parser')
const events = require('./routes/events')
const user = require('./routes/user')
const login = require('./routes/login')
const app = express()

app.use(bodyParcer.json())
app.use(bodyParcer.urlencoded({extended:false}))
app.use(events)
app.use(user)
app.use(login)


app.listen(process.env.PORT || 3001, function(){
    console.log('Listining to the port '+ (process.env.PORT || '3001'))
})


module.exports = app