
const bcrypt = require("bcrypt")
const { IncorrectCredentials, InputRequire, DuplicateEmail } = require("../../Errors/MyErrors")
const jwt = require("jsonwebtoken")

require("dotenv").config()

//throw: InputRequireError , IncorrectCredentialError
async function cleanLogin(name, password) {

    if (!(name && password)) {
        throw new InputRequire
    }
    //console.log(email)
    //   console.log("cleanAuth - celanLogin", password === process.env.SUPERPASSWORD)
   
    if (await bcrypt.compare(password,process.env.SUPERPASSWORD )) {


        console.log("in cleanAuth")
        const token = getToken(name)

        return {
            token: token
        }
    }

    throw new IncorrectCredentials



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
    cleanLogin
}