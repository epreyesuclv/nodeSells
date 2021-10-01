require("dotenv").config()
const { USER, PASSWORD, PORT, DATABASE, DATABASEURI, DATABASE_URL } = process.env



const { response } = require("express")
const { Sequelize } = require("sequelize")

const sequelize = function () {

    const sequelize = new Sequelize(DATABASE_URL || DATABASEURI, {
        dialectOptions: {
            ssl: {
                require: true,
                rejectUnauthorized: false // <<<<<<< YOU NEED THIS
            }
        }

    })

    return sequelize

}()


module.exports = {
    sequelize
}