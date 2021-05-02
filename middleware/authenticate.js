//inherit params from routes where its implemented 
const validate = async function(req, res, next) {
    const validate = async function(req, res, next) {
        const user = await userController.loadByToken(token)
    
    //NEXT => used to move forward to a NEXT route/path.
    if(user) return next()
    //401 => used to 'warm'anuauthorized access.
    res.status(401).send('User not authenticated!')
}
}

module.exports = validate

