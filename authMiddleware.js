let jwt = require('jsonwebtoken');
module.exports = (req, res, next) => {
    const token = req.header('auth-token');
    if (!token) {
        res.status(401).send('No Token');
    }
    if (token) {
        jwt.verify(token, 'secretKey', (err, decoded) => {
            if (err) {
                res.status(400).send('Invalid Token');
            }
            if (decoded) {
                next();
            }
        })
    }

}
