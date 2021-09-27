
const { User } = require("../../models/user")

const bcrypt = require("bcrypt")
const { IncorrectCredentials, InputRequire, DuplicateEmail } = require("../../Errors/MyErrors")
const jwt = require("jsonwebtoken")

require("dotenv").config

//throw: InputRequireError , IncorrectCredentialError
async function cleanLogin(email, password) {

    if (!(email && password)) {
        throw new InputRequire
    }
    //console.log(email)


    //veryfying if the user already exist

    const user = await User.findByPk(email)
    //console.log(user.toJSON())
    if (user === undefined)
        throw new IncorrectCredentials

    //console.log(user)
    if (user && (await bcrypt.compare(password, user.password ?? ""))) {

        const token = getToken(email)

        user.token = token
        //console.log("in cleanAuth",user)
        return user
    }

    throw new IncorrectCredentials



}


//throws : IntputRequireError , DuplicateEmailError , IncorrectCredentialsError
async function cleanRegister(firstName, lastName, email, password) {

    //veryfiying if the fields are empty
    if (!(email && password && firstName && lastName))
        // res.status(400).send("All input is required")
        throw new InputRequire

    //veryfying if the user already exist

    const oldUser = await User.findByPk(email)
    // console.log(oldUser)

    if (oldUser)
        //return res.status(409).send("user aready exist")
        throw new DuplicateEmail

    //encypting the pass
    const encryptedPass = await bcrypt.hash(password, 11)

    //creating token
    const token = getToken(email)

    //creating the user
    const user = await User.create({
        firstName: firstName,
        lastName: lastName,
        email: email.toLowerCase(),
        password: encryptedPass
    }
    )
    console.log(user.toJSON())

    user.token = token

    return user

}




function getToken(email) {

    const token = jwt.sign(
        {
            user_id: email
        },
        process.env.TOKEN_KEY,
        {
            expiresIn: "2h"
        }
    )
    return token
}

async function handlercatch(err) {

}



module.exports = {
    cleanLogin,
    cleanRegister
}