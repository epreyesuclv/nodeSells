
const { InputRequire, IncorrectCredentials, DuplicateEmail } = require("../../Errors/MyErrors")
const { cleanLogin, cleanRegister } = require("../authentication/cleanAuth")


async function register(req, res) {

    //console.log("request", req)
    const { firstName,
        lastName,
        email,
        password
    } = req.body


    try {

        const user = await cleanRegister(firstName, lastName, email, password, busy, endPoint)

        res.status(200).json(user)


    } catch (err) {

        if (err instanceof IncorrectCredentials)
            res.status(401).send("somthing was wrong with your credentials")

        if (err instanceof InputRequire)
            res.status(402).send("all input is require")

        if (err instanceof DuplicateEmail)
            res.status(409).send("the user already exist")
        else
            console.log(err)
    }


}

async function login(req, res) {
    try {
        const { email, password } = req.body

        const user = await cleanLogin(email, password)
        return res.status(200).json(user)
    } catch (err) {

        if (err instanceof IncorrectCredentials)
            res.status(401).send("Incorrect creedentials")

        if (err instanceof InputRequire)
            res.status(409).send("All input is require")

    }

}


module.exports = {
    login,
    register
}
