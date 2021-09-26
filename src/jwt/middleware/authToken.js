const jwt = require("jsonwebtoken")

function verifyingToken(req, res, next) {
    let token = req.body.token || req.query || req.headers["access-token"]

    if (!token) {
        return res.status(403).send("token required")
    }
    try {

        const decode = jwt.verify(token, process.env.TOKEN_KEY)
        token = ""
        req.user = User.findOne(email)

    } catch (err) {
        return res.status(401).send("Invalid Token, is posible that your token is outdate, please login again")
    }
    next()
}




module.exports = {
    verifyingToken
}