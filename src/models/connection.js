require("dotenv").config()
const { DATABASEURI, DATABASE_URL } = process.env



const { Sequelize } = require("sequelize")

const sequelize = function () {


    console.log("connection ", DATABASEURI)
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