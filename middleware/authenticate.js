//inherit params from routes where its implemented 
const validate = async function(req, res, next) {
    //NEXT => used to move forward to a NEXT route/path.
    if(req.headers.user || req.headers.password) next()
    //401 => used to 'warm'anuauthorized access.
    else res.status(401).send('User not authenticated!')
}

module.exports = validate
