
const { InputRequire, IncorrectCredentials, DuplicateEmail } = require("../../Errors/MyErrors")
const { cleanLogin } = require("../authentication/cleanAuth")
const bcrypt = require("bcrypt")

//database connection
require("dotenv").config()

async function login(req, res) {
    try {
        const { name, password } = req.body

        const user = await cleanLogin(name, password)
        return res.status(200).json(user)
    } catch (err) {

        if (err instanceof IncorrectCredentials)
            res.status(409).send("Incorrect creedentials")

        if (err instanceof InputRequire)
            res.status(402).send("All input is require")
        else res.status(503).send("server error")
    }

}



async function changePass(req, res) {

    const { oldPass, newPass } = req.body
    try {
        if (await bcrypt.compare(oldPass, process.env.SUPERPASSWORD)) {
            const hash = await bcrypt.hash(newPass, 11)
            res.status(200).json({
                messege: "please copy this hash code of your password and paste in '.env' file, in the SUPERPASSWORD field",
                hash: hash
            })

        }
    } catch (err) {
        res.status(503).send("server Error")
    }
    res.status(409).send("incorrect password")
}
module.exports = {
    login,
    changePass
}
