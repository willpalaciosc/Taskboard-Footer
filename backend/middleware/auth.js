const jwt = require('jsonwebtoken')

function auth(req,res,next){
    let jwtToken = req.header('Authorization')
    if(!jwtToken) return res.status(401).send('Acceso denegado, no hay token')
    jwtToken = jwtToken.split(' ')[1]

    try {
        const payload = jwt.verify(jwtToken,"secretKey");
        req.user = payload 
        next()
    } catch (e) {
        res.status(400).send("Acceso denegado, token no valido")
    }
    
}

module.exports = auth;
