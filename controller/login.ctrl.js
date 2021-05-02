// const user = require('../models/user')
const user = require('../controller/user.ctrl')
const bcrypt = require('bcrypt')

const login = async function( data ) {

    const{name, password} = data
    const user = await userController.loadByName({name})

    if(!user) throw new Error('User not found!')
    if(!await bcrypt.compare(password, user.password)) throw new Error('Invalid password!')

    user.token = await bcrypt.hash(user._id, 10)

    await user.update(user)

    return user.token

}

module.exports = login 