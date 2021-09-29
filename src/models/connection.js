require("dotenv").config()
const {  DATABASEURI } = process.env



const { Sequelize } = require("sequelize")

const sequelize = function () {


    console.log("connection ", DATABASEURI)
    const sequelize = new Sequelize(DATABASEURI, {
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