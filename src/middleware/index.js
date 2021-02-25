const bcrypt = require('bcryptjs');
const webToken = require('jsonwebtoken');

 exports.hash = async (req, res, next) => {
    if ('pass' in req.body) {
        req.body.pass = await bcrypt.hash(req.body.pass, 8) //salts pass 8 times
    }
    next();
}

//need secret for authentication, need