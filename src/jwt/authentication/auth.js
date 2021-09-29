
const { InputRequire, IncorrectCredentials, DuplicateEmail } = require("../../Errors/MyErrors")
const { cleanLogin, cleanRegister } = require("../authentication/cleanAuth")


async function login(req, res) {
    try {
        const { name, password } = req.body

        const user = await cleanLogin(name, password)
        return res.status(200).json(user)
    } catch (err) {

        if (err instanceof IncorrectCredentials)
            res.status(401).send("Incorrect creedentials")

        if (err instanceof InputRequire)
            res.status(402).send("All input is require")

    }

}


module.exports = {
    login
}
