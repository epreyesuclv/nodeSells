const { sequelize } = require("../../models/connection")

require("dotenv").config()
async function checkConnectin(req, res, next) {
    console.log("databasecheckconnection - checkconnectin")
    //console.log("authToken ", token)`
    try {
        if (!sequelize) res.status(504).send("not connection with the database ")
        await sequelize().sync().then(() => {
            //do somthing
        }).catch((err) => {
            console.log("databasecheckconnection - checkconnectin", err)
        })
    } catch (err) {
        return res.status(401).send("Invalid Token, is posible that your token is outdate, please login again")
    }

    next()
}

module.exports = {
    checkConnectin
}

